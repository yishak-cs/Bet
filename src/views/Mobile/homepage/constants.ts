import bundesligaIcon from '@/assets/tournaments/bundesliga.png';
import laligaIcon from '@/assets/tournaments/laliga.png';
import ligue1Icon from '@/assets/tournaments/ligue1.png';
import serieAIcon from '@/assets/tournaments/seria a.png';
import bundesliga2Icon from '@/assets/tournaments/bundesliga2.png';
import liga3Icon from '@/assets/tournaments/liga-3.png';
import premierLeagueIcon from '@/assets/tournaments/premieleague.png';
import championsLeagueIcon from '@/assets/tournaments/championsleague.png';
import europaLeagueIcon from '@/assets/tournaments/europa.png';
import serieBIcon from '@/assets/tournaments/seriab.png';
import ligue2Icon from '@/assets/tournaments/ligue2.png';
import eredivisieIcon from '@/assets/tournaments/eredivisie.png';
import portPremieraIcon from '@/assets/tournaments/Portpremiera.png';
import uefaconference from '@/assets/tournaments/eufa.png';

export const SPORT_ICONS: Record<string, string> = {
    'soccer': '⚽',
    'football': '⚽',
    'basketball': '🏀',
    'tennis': '🎾',
    'american football': '🏈',
    'ice hockey': '🏒',
    'baseball': '⚾',
    'cricket': '🏏',
    'rugby': '🏉',
    'volleyball': '🏐',
    'table tennis': '🏓',
    'badminton': '🏸',
    'boxing': '🥊',
    'mma': '🥋',
    'default': '🎮'
} as const;

export type TournamentName = 
    'Bundesliga'
  | 'Bundesliga 2' 
  | 'UEFA Champions League'
  | 'Europa League'
  | 'Eredivisie'
  | 'UEFA Conference League'
  | 'La Liga' 
  | 'Ligue 1'
  | 'Ligue 2' 
  | 'Serie A' 
  | '3rd Liga'
  | 'Premier League' 
  | 'Port Premier'
  | 'Serie B';

export const TOURNAMENT_ICONS: Record<TournamentName, string> = {
    'Premier League': premierLeagueIcon,
    'La Liga': laligaIcon,
    'Ligue 1': ligue1Icon,
    'Serie A': serieAIcon,
    'Bundesliga 2': bundesliga2Icon,
    '3rd Liga': liga3Icon,
    'Bundesliga': bundesligaIcon,
    'UEFA Champions League': championsLeagueIcon,
    'Europa League': europaLeagueIcon,
    'Eredivisie': eredivisieIcon,
    'Port Premier': portPremieraIcon,
    'Serie B': serieBIcon,
    'Ligue 2': ligue2Icon,
    'UEFA Conference League': uefaconference,
} as const;