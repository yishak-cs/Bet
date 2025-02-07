from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import (
    StaleElementReferenceException,
    TimeoutException,
    WebDriverException
)
import time
import logging
import json

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class SportsScraper:
    def __init__(self, url):
        self.url = url
        self.driver = None
        self.wait = None
        self.data = {}

    def setup_driver(self):
        options = webdriver.ChromeOptions()
        options.add_argument('--disable-gpu')
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')
        self.driver = webdriver.Chrome(options=options)
        self.wait = WebDriverWait(self.driver, 10)
        self.driver.get(self.url)
        time.sleep(2)

    def safe_find_elements(self, by, selector, timeout=10, parent=None):
        """Safely find elements with retry logic"""
        start_time = time.time()
        while time.time() - start_time < timeout:
            try:
                elements = (parent if parent else self.driver).find_elements(by, selector)
                if elements:
                    return elements
            except:
                pass
            time.sleep(0.5)
        return []

    def safe_find_element(self, element, by, selector):
        """Safely find a child element"""
        try:
            return element.find_element(by, selector)
        except:
            return None

    def safe_click(self, element, wait_time=1):
        """Safely click an element using JavaScript"""
        try:
            self.driver.execute_script("arguments[0].scrollIntoView(true);", element)
            time.sleep(0.5)
            self.driver.execute_script("arguments[0].click();", element)
            time.sleep(wait_time)
            return True
        except Exception as e:
            logger.error(f"Click failed: {str(e)}")
            return False

    def get_text_safely(self, element, selector):
        """Safely get text from an element"""
        try:
            child = element.find_element(By.CSS_SELECTOR, selector)
            return child.text if child else ""
        except:
            return ""

    def process_leagues(self):
        """Process leagues with improved error handling"""
        leagues_data = []
        max_retries = 3
        retry_count = 0

        while retry_count < max_retries:
            try:
                # Wait for leagues to be visible
                self.wait.until(
                    EC.presence_of_element_located((By.CSS_SELECTOR, 'button:has(span.whitespace-nowrap)'))
                )
                
                leagues = self.safe_find_elements(By.CSS_SELECTOR, 'button:has(span.whitespace-nowrap)')
                
                for league in leagues:
                    league_name = self.get_text_safely(league, 'span.whitespace-nowrap')
                    if league_name:
                        leagues_data.append(league_name)
                        logger.info(f"    League: {league_name}")
                
                return leagues_data
                
            except Exception as e:
                retry_count += 1
                logger.warning(f"Retry {retry_count} getting leagues: {str(e)}")
                time.sleep(1)
        
        return leagues_data

    def process_countries(self, sport_name):
        """Process countries with improved stale element handling"""
        sport_data = {}
        
        # Wait for countries to be visible
        try:
            self.wait.until(
                EC.presence_of_element_located((By.CSS_SELECTOR, 'button[data-headlessui-state]:has(img[alt])')
            ))
        except TimeoutException:
            logger.error("No countries found")
            return sport_data

        # Get initial list of countries
        countries = self.safe_find_elements(By.CSS_SELECTOR, 'button[data-headlessui-state]:has(img[alt])')
        country_count = len(countries)

        for i in range(country_count):
            try:
                # Get fresh list of countries each time
                countries = self.safe_find_elements(By.CSS_SELECTOR, 'button[data-headlessui-state]:has(img[alt])')
                if i >= len(countries):
                    break

                country = countries[i]
                country_name = self.get_text_safely(country, 'span.truncate')
                
                if not country_name:
                    continue

                logger.info(f"  Country: {country_name}")

                # Click on country
                if self.safe_click(country):
                    # Process leagues
                    leagues = self.process_leagues()
                    if leagues:
                        sport_data[country_name] = leagues

                    # Go back to countries list
                    self.driver.execute_script("window.history.back();")
                    time.sleep(1.5)  # Increased wait time after navigation
                else:
                    logger.error(f"Failed to click country: {country_name}")

            except Exception as e:
                logger.error(f"Error processing country at index {i}: {str(e)}")
                self.driver.execute_script("window.history.back();")
                time.sleep(1.5)
                continue

        return sport_data

    def scrape(self):
        """Main scraping function"""
        try:
            self.setup_driver()
            
            # Get initial sports list
            sports = self.safe_find_elements(By.CSS_SELECTOR, 'button:has(span.text-2xl)')
            sports_count = len(sports)

            for i in range(sports_count):
                try:
                    # Get fresh list of sports
                    sports = self.safe_find_elements(By.CSS_SELECTOR, 'button:has(span.text-2xl)')
                    if i >= len(sports):
                        break

                    sport = sports[i]
                    sport_emoji = self.get_text_safely(sport, 'span.text-2xl')
                    
                    if not sport_emoji:
                        continue

                    logger.info(f"\nProcessing sport: {sport_emoji}")

                    if self.safe_click(sport):
                        sport_data = self.process_countries(sport_emoji)
                        self.data[sport_emoji] = sport_data
                        
                        # Reset to homepage after each sport
                        self.driver.get(self.url)
                        time.sleep(2)
                    else:
                        logger.error(f"Failed to click sport: {sport_emoji}")

                except Exception as e:
                    logger.error(f"Error processing sport at index {i}: {str(e)}")
                    self.driver.get(self.url)
                    time.sleep(2)
                    continue

        finally:
            if self.driver:
                self.driver.quit()

        return self.data

    def save_to_json(self, filename='sports_data.json'):
        """Save scraped data to JSON file"""
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(self.data, f, ensure_ascii=False, indent=2)

def main():
    url = "https://gobet.et/"
    scraper = SportsScraper(url)
    
    try:
        data = scraper.scrape()
        scraper.save_to_json()
        logger.info("\nScraping completed successfully!")
        
        # Print summary
        for sport, countries in data.items():
            logger.info(f"\n{sport}:")
            for country, leagues in countries.items():
                logger.info(f"  {country}: {len(leagues)} leagues")
                
    except Exception as e:
        logger.error(f"Scraping failed: {str(e)}")

if __name__ == "__main__":
    main()