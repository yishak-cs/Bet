import os
import re
import sys
import time
import typing as t
from pathlib import Path
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup, SoupStrainer


BASE_DIR = Path('src/assets/tournaments/Football')
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0 Safari/537.36',
}


def ensure_dir(path: Path) -> None:
    path.mkdir(parents=True, exist_ok=True)


def safe_filename(name: str) -> str:
    cleaned = re.sub(r"[^\w\-\.&()\s]", "", name, flags=re.UNICODE).strip()
    cleaned = re.sub(r"\s+", " ", cleaned)
    return cleaned or "team"


def get_soup(url: str) -> BeautifulSoup:
    for attempt in range(3):
        resp = requests.get(url, headers=HEADERS, timeout=20)
        if resp.status_code == 200:
            return BeautifulSoup(resp.text, 'html.parser')
        time.sleep(1 + attempt)
    raise RuntimeError(f"Failed to fetch: {url} (status {resp.status_code})")


def find_first(haystack: BeautifulSoup, selector: str) -> t.Optional[BeautifulSoup]:
    el = haystack.select_one(selector)
    return el


def get_abs_href(base_url: str, a_tag: BeautifulSoup) -> t.Optional[str]:
    href = a_tag.get('href') if a_tag else None
    if not href:
        return None
    return urljoin(base_url, href)


def download_file(url: str, dest_path: Path) -> None:
    with requests.get(url, headers=HEADERS, stream=True, timeout=30) as r:
        r.raise_for_status()
        with open(dest_path, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                if chunk:
                    f.write(chunk)


def guess_ext_from_url(url: str) -> str:
    parsed = urlparse(url)
    name = os.path.basename(parsed.path)
    _, ext = os.path.splitext(name)
    return ext if ext else '.png'


def scrape_league(league_url: str, country_dir: str, league_dir: str) -> None:
    target_dir = BASE_DIR / country_dir / league_dir
    ensure_dir(target_dir)

    # 1) League page: collect team links from .team-card-list
    league_soup = get_soup(league_url)
    team_cards = league_soup.select('.team-card-list .team-card a')
    if not team_cards:
        # Fallback: try any .team-card a
        team_cards = league_soup.select('.team-card a')
    if not team_cards:
        raise RuntimeError('No team links found on league page.')

    print(f"Found {len(team_cards)} team links on league page")

    for idx, team_link in enumerate(team_cards, start=1):
        team_href = get_abs_href(league_url, team_link)
        if not team_href:
            continue

        # Prefer the anchor text as a team name seed
        team_name_seed = (team_link.get_text() or '').strip() or f'team-{idx}'

        # 2) Team page: follow .team-card > a:nth-child(1)
        team_soup = get_soup(team_href)
        inner_anchor = team_soup.select_one('.team-card a')
        if not inner_anchor:
            # If no inner anchor, try to find a likely logo page link within team page
            # As a fallback, continue with current page to find the image directly
            inner_url = team_href
        else:
            inner_url = get_abs_href(team_href, inner_anchor) or team_href

        # 3) Logo page: find the logo image using the provided selector
        logo_page = get_soup(inner_url)
        img = logo_page.select_one('div.section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > img:nth-child(1)')
        if not img:
            # Fallbacks: try more general selectors
            img = logo_page.select_one('div.section img') or logo_page.select_one('.logo img, img.team-logo, img[src*="logo"]')
        if not img:
            print(f"[WARN] No logo img found for {team_name_seed} ({inner_url})")
            continue

        img_src = img.get('src') or img.get('data-src')
        if not img_src:
            print(f"[WARN] Image without src for {team_name_seed} ({inner_url})")
            continue

        img_url = urljoin(inner_url, img_src)

        # Determine team name for filename, fallback to seed
        # Try to find a prominent heading on the page
        h1 = logo_page.select_one('h1')
        team_name = (h1.get_text().strip() if h1 else team_name_seed)
        filename = safe_filename(team_name) + guess_ext_from_url(img_url)
        out_path = target_dir / filename

        # Avoid re-downloading if file exists
        if out_path.exists():
            print(f"[SKIP] {filename} already exists")
            continue

        try:
            download_file(img_url, out_path)
            print(f"[OK]   Saved {filename}")
        except Exception as e:
            print(f"[ERR]  Failed {team_name}: {e}")
        time.sleep(0.5)


def scrape_wikipedia_championship(wiki_url: str) -> None:
    # Fixed target for this task
    country_dir = 'England'
    league_dir = 'Championship'
    target_dir = BASE_DIR / country_dir / league_dir
    ensure_dir(target_dir)

    soup = get_soup(wiki_url)
    table = soup.select_one('table.wikitable')
    if not table:
        raise RuntimeError('No wikitable found on the page')

    team_links = []
    for tr in table.select('tr'):
        td = tr.find('td')
        if not td:
            continue
        a = td.find('a', href=True)
        if a and a.get('href', '').startswith('/wiki/'):
            team_links.append(a)

    print(f"Found {len(team_links)} team links on Wikipedia table")

    for idx, a in enumerate(team_links, start=1):
        team_name = (a.get_text() or '').strip() or f'team-{idx}'
        team_url = urljoin(wiki_url, a['href'])

        team_soup = get_soup(team_url)
        img = team_soup.select_one('.infobox-image > span > a > img')
        if not img:
            img = team_soup.select_one('.infobox .infobox-image img')
        if not img:
            print(f"[WARN] No infobox image for {team_name} ({team_url})")
            continue

        src = img.get('src') or ''
        if not src and img.get('srcset'):
            # pick last url in srcset (usually highest resolution)
            parts = [p.strip().split(' ')[0] for p in img['srcset'].split(',') if p.strip()]
            if parts:
                src = parts[-1]
        if not src:
            print(f"[WARN] Image without src for {team_name} ({team_url})")
            continue

        if src.startswith('//'):
            img_url = 'https:' + src
        else:
            img_url = urljoin(team_url, src)

        filename = safe_filename(team_name + ' Logo') + guess_ext_from_url(img_url)
        out_path = target_dir / filename

        if out_path.exists():
            print(f"[SKIP] {filename} already exists")
            continue

        try:
            download_file(img_url, out_path)
            print(f"[OK]   Saved {filename}")
        except Exception as e:
            print(f"[ERR]  Failed {team_name}: {e}")
        time.sleep(0.5)


def scrape_wikipedia_league(
    wiki_url: str,
    country_dir: str,
    league_dir: str,
    table_nth_child: int | None = None,
    link_selector: str | None = None,
) -> None:
    target_dir = BASE_DIR / country_dir / league_dir
    ensure_dir(target_dir)

    soup = get_soup(wiki_url)
    # Prefer sortable league/members tables if available
    sortable = soup.select('div.mw-parser-output table.wikitable.sortable')
    tables = soup.select('table.wikitable')
    if not tables and not sortable:
        raise RuntimeError('No wikitable tables found on the page')

    if table_nth_child is not None:
        idx = max(0, table_nth_child - 1)
        if idx < len(tables):
            table = tables[idx]
        else:
            # Fallback to first sortable table near content (likely the members table under Clubs)
            if sortable:
                table = sortable[0]
                print(f"[WARN] Requested wikitable index {table_nth_child} out of range (found {len(tables)}). Using first sortable wikitable instead.")
            else:
                raise RuntimeError(f'requested wikitable index {table_nth_child} out of range; page has {len(tables)} wikitable(s)')
    else:
        table = sortable[0] if sortable else tables[0]

    team_links = []
    for tr in table.select('tr'):
        td = tr.find('td')
        if not td:
            continue
        if link_selector:
            a = td.select_one(link_selector)
        else:
            a = td.find('a', href=True)
        if a and a.get('href', '').startswith('/wiki/'):
            team_links.append(a)

    print(f"Found {len(team_links)} team links on Wikipedia table")

    for idx, a in enumerate(team_links, start=1):
        team_name = (a.get_text() or '').strip() or f'team-{idx}'
        team_url = urljoin(wiki_url, a['href'])

        team_soup = get_soup(team_url)
        img = team_soup.select_one('.infobox-image > span > a > img')
        if not img:
            img = team_soup.select_one('.infobox .infobox-image img')
        if not img:
            print(f"[WARN] No infobox image for {team_name} ({team_url})")
            continue

        src = img.get('src') or ''
        if not src and img.get('srcset'):
            parts = [p.strip().split(' ')[0] for p in img['srcset'].split(',') if p.strip()]
            if parts:
                src = parts[-1]
        if not src:
            print(f"[WARN] Image without src for {team_name} ({team_url})")
            continue

        if src.startswith('//'):
            img_url = 'https:' + src
        else:
            img_url = urljoin(team_url, src)

        filename = safe_filename(team_name + ' Logo') + guess_ext_from_url(img_url)
        out_path = target_dir / filename

        if out_path.exists():
            print(f"[SKIP] {filename} already exists")
            continue

        try:
            download_file(img_url, out_path)
            print(f"[OK]   Saved {filename}")
        except Exception as e:
            print(f"[ERR]  Failed {team_name}: {e}")
        time.sleep(0.5)


def main() -> None:
    if len(sys.argv) < 2:
        print('Usage:')
        print('  SportsLogos: python scraper.py <league_url> <country_dir> <league_dir>')
        print('  Wikipedia (generic): python scraper.py <wikipedia_url> <country_dir> <league_dir> [table_nth_child] [link_selector]')
        print('  Wikipedia (EFL default): python scraper.py <wikipedia_efl_championship_url>')
        sys.exit(1)

    first_arg = sys.argv[1]
    if 'wikipedia.org' in first_arg:
        if len(sys.argv) >= 4:
            country_dir = sys.argv[2]
            league_dir = sys.argv[3]
            # Parse optional args: table index and link selector
            table_nth_child = None
            link_selector = None
            if len(sys.argv) > 4:
                if sys.argv[4].isdigit():
                    table_nth_child = int(sys.argv[4])
                    if len(sys.argv) > 5:
                        link_selector = sys.argv[5]
                else:
                    link_selector = sys.argv[4]
            scrape_wikipedia_league(first_arg, country_dir, league_dir, table_nth_child, link_selector)
        else:
            scrape_wikipedia_championship(first_arg)
    else:
        if len(sys.argv) < 4:
            print('Usage (SportsLogos): python scraper.py <league_url> <country_dir> <league_dir>')
            sys.exit(1)
        league_url = first_arg
        country_dir = sys.argv[2]
        league_dir = sys.argv[3]
        scrape_league(league_url, country_dir, league_dir)


if __name__ == '__main__':
    main()

