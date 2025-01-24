import bundesligaIcon from '@/assets/tournaments/bundesliga.png';
import laligaIcon from '@/assets/tournaments/laliga.png';
import ligue1Icon from '@/assets/tournaments/ligue1.png';

import bundesliga2Icon from '@/assets/tournaments/bundesliga2.png';
import liga3Icon from '@/assets/tournaments/liga-3.png';
// England
import premierLeagueIcon from '@/assets/tournaments/England/premieleague.png';
import championship from '@/assets/tournaments/England/efl-championship.png';
import leagueOne from '@/assets/tournaments/England/efl-league-one.png';
import leagueTwo from '@/assets/tournaments/England/efl-league-two.png';
import efl from '@/assets/tournaments/England/EFL.png';
import nationalLeague from '@/assets/tournaments/England/National_League_logo.png';
import emirates from '@/assets/tournaments/England/emirates-fa-cup.png';
// Italy
import serieAIcon from '@/assets/tournaments/serieA.png';
import serieBIcon from '@/assets/tournaments/Italy/serieB.png';
import serieC from '@/assets/tournaments/Italy/serieC.png';

import championsLeagueIcon from '@/assets/tournaments/championsleague.png';
import europaLeagueIcon from '@/assets/tournaments/europa.png';

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
  | 'League One'
  | 'League Two'
  | 'Championship'
  | 'Ligue 1'
  | 'Ligue 2' 
  | 'Serie A' 
  | '3rd Liga'
  | 'Premier League' 
  | 'Port Premier'
  | 'Emirates FA Cup'
  | 'Championship'
  | 'League One'
  | 'League Two'
  | 'Serie B'
  | 'EFL'
  | 'National League'
  |'Serie C, Group A'
  |'Serie C, Group B'
  |'Serie C, Group C';

export const TOURNAMENT_ICONS: Record<TournamentName, string> = {
    'Premier League': premierLeagueIcon,
    'La Liga': laligaIcon,
    'Ligue 1': ligue1Icon,
    
    'Bundesliga 2': bundesliga2Icon,
    '3rd Liga': liga3Icon,
    'Bundesliga': bundesligaIcon,
    'UEFA Champions League': championsLeagueIcon,
    'Europa League': europaLeagueIcon,
    'Eredivisie': eredivisieIcon,
    'Port Premier': portPremieraIcon,
    
    // italy
    'Serie A': serieAIcon,
    'Serie B': serieBIcon,
    'Serie C, Group A': serieC,
    'Serie C, Group B': serieC,
    'Serie C, Group C': serieC,

    'Ligue 2': ligue2Icon,
    'UEFA Conference League': uefaconference,
    'League One': leagueOne,
    'League Two': leagueTwo,
    'Championship': championship,
    'Emirates FA Cup': emirates,
    'EFL': efl,
    'National League': nationalLeague,
} as const;