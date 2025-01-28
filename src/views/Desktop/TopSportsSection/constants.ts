/************FOOTBALL**********/
/**      ENGLAND       **/
import premierLeagueIcon from '@/assets/tournaments/Football/England/premierleague.png';
import championship from '@/assets/tournaments/Football/England/efl-championship.png';
import leagueOne from '@/assets/tournaments/Football/England/efl-league-one.png';
import leagueTwo from '@/assets/tournaments/Football/England/efl-league-two.png';
import efl from '@/assets/tournaments/Football/England/EFL.png';
import nationalLeague from '@/assets/tournaments/Football/England/National_League_logo.png';
import emirates from '@/assets/tournaments/Football/England/emirates-fa-cup.png';


/**      FRANCE       **/
import ligue1Icon from '@/assets/tournaments/Football/France/ligue1.png';
import ligue2Icon from '@/assets/tournaments/Football/France/ligue2.png';
import coupeDeFranceWomen from '@/assets/tournaments/Football/France/coupeDeFranceWomen.png';
import championnatNationalU19 from '@/assets/tournaments/Football/France/championnatNationalU19.png';
import national from '@/assets/tournaments/Football/France/National.png';

/**      ITALY        **/
import serieAIcon from '@/assets/tournaments/Football/Italy/serieA.png';
import serieBIcon from '@/assets/tournaments/Football/Italy/serieB.png';
import serieC from '@/assets/tournaments/Football/Italy/serieC.png';
import coppaItalia from '@/assets/tournaments/Football/Italy/coppaItalia.png';
import seriaAWomen from '@/assets/tournaments/Football/Italy/serieAwomen.png';

/**      Germany      **/
import bundesligaIcon from '@/assets/tournaments/Football/Germany/bundesliga.png';
import liga3Icon from '@/assets/tournaments/Football/Germany/liga-3.png';
import bundesliga2Icon from '@/assets/tournaments/Football/Germany/bundesliga2.png';
import dfbPokal from '@/assets/tournaments/Football/Germany/DFB-Pokal.png';


/**      Spain        **/
import copaDelRey from '@/assets/tournaments/Football/Spain/copaDelRey.png';
import laLiga from '@/assets/tournaments/Football/Spain/laLiga.png';
import laLiga2 from '@/assets/tournaments/Football/Spain/laLiga2.png';
import primeraREEF from '@/assets/tournaments/Football/Spain/primeraREEF.png';
import primeraWomen from '@/assets/tournaments/Football/Spain/primeraWomen.png';
import segundaDivision from '@/assets/tournaments/Football/Spain/segundaDivision.png';

/**      Netherland       **/
import eredivisieIcon from '@/assets/tournaments/Football/Netherlands/ereDivisie.png';
import tweededivisieIcon from '@/assets/tournaments/Football/Netherlands/tweedeDivisie.png';
import erstedivisieIcon from '@/assets/tournaments/Football/Netherlands/ersteDivisie.png';


/**      Portugal       **/
import portPremieraIcon from '@/assets/tournaments/Football/Portugal/Portpremiera.png';
import Liga3 from '@/assets/tournaments/Football/Portugal/Liga3.png';
import segundaLiga from '@/assets/tournaments/Football/Portugal/portugalLiga2.png';

/**      International       **/
import championsLeagueIcon from '@/assets/tournaments/Football/International/championsLeague.png';
import copaLibertadores from '@/assets/tournaments/Football/International/copaLibertadores.png';
import europaLeagueIcon from '@/assets/tournaments/Football/International/europa.png';
import uefaconference from '@/assets/tournaments/Football/International/uefa.png';
import copaSudamericana from '@/assets/tournaments/Football/International/copaSudamericana.png';
import recopaSudamericana from '@/assets/tournaments/Football/International/recopaSudamericana.png';


/********** BASKETBALL*******/
/** international **/
import BNXT from 'assets/tournaments/Basketball/International/BNXTLeague.png';
import championsLeague from 'assets/tournaments/Basketball/International/championsLeague.png';
import euroLeague from 'assets/tournaments/Basketball/International/euroLeague.png';
import euroCup from 'assets/tournaments/Basketball/International/euroCup.png';
import united from 'assets/tournaments/Basketball/International/unitedLeague.png';
import euroWomen from 'assets/tournaments/Basketball/International/euroLeagueWomen.png';
import europeCup from 'assets/tournaments/Basketball/International/europeCup.png';
import estoLat from 'assets/tournaments/Basketball/International/estonianLatvian.png';
import europeNorth from 'assets/tournaments/Basketball/International/ENBL.png';

/**     USA     **/
import nba from 'assets/tournaments/Basketball/USA/NBA.png';
import unrivaled from 'assets/tournaments/Basketball/USA/unrivaled.png';

/**     france   **/
import lbf from 'assets/tournaments/Basketball/France/LBFWomen.png';
import proAFrance from 'assets/tournaments/Basketball/France/proA.png';
import proB from 'assets/tournaments/Basketball/France/proB.png';

/**     Germany  **/
import bbl from 'assets/tournaments/Basketball/Germany/BBL.png';
import proAGerman from 'assets/tournaments/Basketball/Germany/proA.png';

/**      Greece  **/
import a1 from 'assets/tournaments/Basketball/Greece/A1.png';

/**      italy  **/
import serieA from 'assets/tournaments/Basketball/Italy/serieA.png';
import serieA2 from 'assets/tournaments/Basketball/Italy/serieA2.png';

/**      spain  **/
import ligaACB from 'assets/tournaments/Basketball/Spain/ligaACB.png';

/**Turkey */
import tbsl from 'assets/tournaments/Basketball/Turkey/TBSL.png';
import lig1 from 'assets/tournaments/Basketball/Turkey/1.lig.png';

/********** Ground Tennis */

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
    /**         forball     */
    // german
    'Bundesliga'
    | 'Bundesliga 2'
    | '3rd Liga'
    | 'DFB Pokal'
    // england
    | 'National League'
    | 'EFL'
    | 'League One'
    | 'League Two'
    | 'Championship'
    | 'Premier League'
    | 'Emirates FA Cup'
    //itally
    | 'Serie A'
    | 'Serie B'
    | 'Serie C, Group A'
    | 'Serie C, Group B'
    | 'Serie C, Group C'
    | 'Coppa Italia'
    | 'Serie A Women'
    //spain
    | 'LaLiga'
    | 'LaLiga 2'
    | 'Copa Del Rey'
    | 'Premiera Division Women'
    | 'Premiera Division REEF'
    | 'Second Division B'
    //netherland
    | 'Eredivisie'
    | 'Tweede divisie'
    | 'Eerste divisie'
    // international
    | 'UEFA Champions League'
    | 'Europa League'
    | 'UEFA Conference League'
    | 'Copa Libertadores'
    | 'Copa Sudamericana'
    | 'Recopa Sudamericana'
    //france
    | 'Ligue 1'
    | 'Ligue 2'
    | 'Coupe de France, Women'
    | 'Championnat National U19'
    | 'National'
    // portugal
    | 'Port Premier'
    | 'Segunda Liga'
    | 'Liga Portugal 3'

    /**     basketball      */
    //international
    | 'BNXTLeague'
    | 'Eurocup'
    | 'Euroleague'
    | 'Euroleague Women'
    | 'United League'
    | 'Champions League'
    | 'Europe Cup'
    | 'Estonian-Latvian League'
    | 'European Northern Basketball League'
    //USA
    | 'NBA'
    | 'Unrivaled, Women'
    // France
    | 'LBF, women'
    | 'Pro A, france'
    | 'Pro B'
    // Germany
    | 'BBL'
    | 'Pro A, germany'
    // Greece
    | 'A1'
    // Italy
    | 'Serie A, basketball'
    | 'Serie A2'
    // Spain 
    | 'Liga ACB'
    // Turkey
    | 'TBSL'
    | '1. Lig'
    ;

export const TOURNAMENT_ICONS: Record<TournamentName, string> = {
    // England football
    'Premier League': premierLeagueIcon,
    'League One': leagueOne,
    'League Two': leagueTwo,
    'Championship': championship,
    'Emirates FA Cup': emirates,
    'EFL': efl,
    'National League': nationalLeague,

    // spain football
    'Copa Del Rey': copaDelRey,
    'LaLiga': laLiga,
    'LaLiga 2': laLiga2,
    'Premiera Division REEF': primeraREEF,
    'Premiera Division Women': primeraWomen,
    'Second Division B': segundaDivision,

    // france football
    'Ligue 1': ligue1Icon,
    'Ligue 2': ligue2Icon,
    'Coupe de France, Women': coupeDeFranceWomen,
    'Championnat National U19': championnatNationalU19,
    'National': national,

    // germany football
    'Bundesliga': bundesligaIcon,
    'Bundesliga 2': bundesliga2Icon,
    'DFB Pokal': dfbPokal,
    '3rd Liga': liga3Icon,

    // interanational
    'UEFA Champions League': championsLeagueIcon,
    'Europa League': europaLeagueIcon,
    'UEFA Conference League': uefaconference,
    'Copa Libertadores': copaLibertadores,
    'Copa Sudamericana': copaSudamericana,
    'Recopa Sudamericana': recopaSudamericana,

    // italy football
    'Serie A': serieAIcon,
    'Serie B': serieBIcon,
    'Serie C, Group A': serieC,
    'Serie C, Group B': serieC,
    'Serie C, Group C': serieC,
    'Coppa Italia': coppaItalia,
    'Serie A Women': seriaAWomen,

    //Netherland
    'Eredivisie': eredivisieIcon,
    'Tweede divisie': tweededivisieIcon,
    'Eerste divisie': erstedivisieIcon,

    //portugal
    'Port Premier': portPremieraIcon,
    'Segunda Liga': segundaLiga,
    'Liga Portugal 3': Liga3,

    /******* BaksetBall **********/
    //international
    'BNXTLeague': BNXT,
    'Champions League': championsLeague,
    'Eurocup': euroCup,
    'Euroleague': euroLeague,
    'United League': united,
    'Euroleague Women': euroWomen,
    'European Northern Basketball League': europeNorth,
    'Europe Cup': europeCup,
    'Estonian-Latvian League': estoLat,
    // USA
    'NBA': nba,
    'Unrivaled, Women': unrivaled,
    // france
    'LBF, women': lbf,
    'Pro A, france': proAFrance,
    'Pro B': proB,
    //germany
    'BBL': bbl,
    'Pro A, germany': proAGerman,
    //greece
    'A1': a1,
    // italy
    'Serie A, basketball': serieA,
    'Serie A2': serieA2,
    //spain
    'Liga ACB': ligaACB,
    //turkey
    'TBSL': tbsl,
    '1. Lig': lig1,
} as const;