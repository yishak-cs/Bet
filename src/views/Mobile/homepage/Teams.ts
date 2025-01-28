/** premier league */
import bournemouth from '@/assets/tournaments/Football/England/PremierTeams/AFC_Bounremouth.png';
import arsenal from '@/assets/tournaments/Football/England/PremierTeams/Arsenal_FC.png';
import astonvilla from '@/assets/tournaments/Football/England/PremierTeams/Aston_Villa.png';
import brentford from '@/assets/tournaments/Football/England/PremierTeams/Brentford.png';
import brighton from '@/assets/tournaments/Football/England/PremierTeams/Brighton.png';
import chelsea from '@/assets/tournaments/Football/England/PremierTeams/Chelsea_FC.png';
import crystalpalace from '@/assets/tournaments/Football/England/PremierTeams/Crystal_Palace_FC.png';
import everton from '@/assets/tournaments/Football/England/PremierTeams/Everton.png';
import leicestercity from '@/assets/tournaments/Football/England/PremierTeams/Leicester.png';
import liverpool from '@/assets/tournaments/Football/England/PremierTeams/Liverpool.png';
import manchestercity from '@/assets/tournaments/Football/England/PremierTeams/Manchester_City.png';
import manchesterunited from '@/assets/tournaments/Football/England/PremierTeams/Manchester_United.png';
import newcastleunited from '@/assets/tournaments/Football/England/PremierTeams/Newcastle_United.png';
import southampton from '@/assets/tournaments/Football/England/PremierTeams/Southampton.png';
import tottenhamhotspur from '@/assets/tournaments/Football/England/PremierTeams/Tottenham.png';
import westhamunited from '@/assets/tournaments/Football/England/PremierTeams/West_Ham.png';
import wolverhampton from '@/assets/tournaments/Football/England/PremierTeams/Wolverhampton.png';
import nottingham from '@/assets/tournaments/Football/England/PremierTeams/Nottingham_Forest.png';

/** Ligue 1 */
import aj_auxerre from '@/assets/tournaments/Football/France/LigueTeams/AJ_Auxerre.png';
import angers_sco from '@/assets/tournaments/Football/France/LigueTeams/Angers_SCO.png';
import as_monaco from '@/assets/tournaments/Football/France/LigueTeams/ASMonaco.png';
import brestois from '@/assets/tournaments/Football/France/LigueTeams/Brestois.png';
import etienne from '@/assets/tournaments/Football/France/LigueTeams/Etienne.png';
import le_havre_ac from '@/assets/tournaments/Football/France/LigueTeams/Le_Havre_AC.png';
import lille_osc_ac from '@/assets/tournaments/Football/France/LigueTeams/Lille_OSC_AC.png';
import lyonnais from '@/assets/tournaments/Football/France/LigueTeams/Lyonnais.png';
import marseille from '@/assets/tournaments/Football/France/LigueTeams/Marseille.png';
import montpellier from '@/assets/tournaments/Football/France/LigueTeams/Montpellier.png';
import nantes from '@/assets/tournaments/Football/France/LigueTeams/Nantes.png';
import nice from '@/assets/tournaments/Football/France/LigueTeams/Nice.png';
import paris_saint_german from '@/assets/tournaments/Football/France/LigueTeams/Paris_Saint-German.png';
import rc_lens from '@/assets/tournaments/Football/France/LigueTeams/RC_Lens.png';
import reims from '@/assets/tournaments/Football/France/LigueTeams/Reims.png';
import rennais from '@/assets/tournaments/Football/France/LigueTeams/Rennais.png';
import strasbourg from '@/assets/tournaments/Football/France/LigueTeams/Strasbourg.png';
import toulouse from '@/assets/tournaments/Football/France/LigueTeams/Toulouse.png';

/** Serie A */
import ac_milan from '@/assets/tournaments/Football/Italy/SerieA/ACMilan.png';
import atalanta from '@/assets/tournaments/Football/Italy/SerieA/AtalantaBC.png';
import bologna from '@/assets/tournaments/Football/Italy/SerieA/Bologna.png';
import cagliari from '@/assets/tournaments/Football/Italy/SerieA/Cagliari.png';
import como from '@/assets/tournaments/Football/Italy/SerieA/Como.png';
import empoli from '@/assets/tournaments/Football/Italy/SerieA/Empoli.png';
import fiorentina from '@/assets/tournaments/Football/Italy/SerieA/Fiorentina.png';
import genoa from '@/assets/tournaments/Football/Italy/SerieA/Genoa.png';
import inter_milan from '@/assets/tournaments/Football/Italy/SerieA/InterMilan.png';
import juventus from '@/assets/tournaments/Football/Italy/SerieA/Juventus.png';
import lazio from '@/assets/tournaments/Football/Italy/SerieA/Lazio.png';
import lecce from '@/assets/tournaments/Football/Italy/SerieA/Lecce.png';
import monza from '@/assets/tournaments/Football/Italy/SerieA/Monza.png';
import napoli from '@/assets/tournaments/Football/Italy/SerieA/Napoli.png';
import parma from '@/assets/tournaments/Football/Italy/SerieA/parma.png';
import roma from '@/assets/tournaments/Football/Italy/SerieA/Roma.png';
import torino from '@/assets/tournaments/Football/Italy/SerieA/Torino.png';
import udinese from '@/assets/tournaments/Football/Italy/SerieA/Udinese.png';
import venezia from '@/assets/tournaments/Football/Italy/SerieA/Venezia.png';
import verona from '@/assets/tournaments/Football/Italy/SerieA/Verona.png';


export type TeamName = 
    //premier league
    'AFC Bournemouth' |
    'Arsenal FC' |
    'Aston Villa FC' |
    'Brentford FC' |
    'Brighton & Hove Albion FC' |
    'Chelsea FC' |
    'Crystal Palace FC' |
    'Everton FC' |
    'Leicester City FC' |
    'Ipswich Town'|
    'Liverpool FC' |
    'Manchester City' |
    'Manchester United FC' |
    'Newcastle United FC' |
    'Southampton FC' |
    'Tottenham Hotspur FC' |
    'West Ham United' |
    'Wolverhampton Wanderers FC' |
    'Nottingham Forest' |
    // ligue 1
    'AJ Auxerre' |
    'Angers SCO' |
    'AS Monaco FC' |
    'Stade Brestois 29' |
    'AS Saint-Etienne' |
    'AC Le Havre' |
    'LOSC Lille' |
    'Olympique Lyonnais' |
    'Olympique Marseille' |
    'Montpellier HSC' |
    'FC Nantes' |
    'OGC Nice' |
    'Paris Saint-Germain FC' |
    'RC Lens' |
    'Stade Reims' |
    'Stade Rennais' |
    'RC Strasbourg Alsace' |
    'Toulouse FC' |
    // serie A
    'AC Milan' |
    'Atalanta BC' |
    'Bologna FC' |
    'Cagliari Calcio' |
    'Como 1907' |
    'FC Empoli' |
    'ACF Fiorentina' |
    'Genoa CFC' |
    'Inter Milano' |
    'Juventus Turin' |
    'Lazio Roma' |
    'US Lecce' |
    'AC Monza' |
    'SSC Napoli' |
    'Parma Calcio' |
    'AS Roma' |
    'Torino FC' |
    'Udinese Calcio' |
    'Venezia' |
    'Hellas Verona';

export const TEAM_ICONS: Record<TeamName, string> = {
    // Premier League
    'AFC Bournemouth': bournemouth,
    'Arsenal FC': arsenal,
    'Aston Villa FC': astonvilla,
    'Brentford FC': brentford,
    'Brighton & Hove Albion FC': brighton,
    'Chelsea FC': chelsea,
    'Crystal Palace FC': crystalpalace,
    'Everton FC': everton,
    'Leicester City FC': leicestercity,
    'Liverpool FC': liverpool,
    'Manchester City': manchestercity,
    'Manchester United FC': manchesterunited,
    'Newcastle United FC': newcastleunited,
    'Southampton FC': southampton,
    'Tottenham Hotspur FC': tottenhamhotspur,
    'West Ham United': westhamunited,
    'Wolverhampton Wanderers FC': wolverhampton,
    'Nottingham Forest': nottingham,
    'Ipswich Town': '', // Missing import

    // Ligue 1
    'AJ Auxerre': aj_auxerre,
    'Angers SCO': angers_sco,
    'AS Monaco FC': as_monaco,
    'Stade Brestois 29': brestois,
    'AS Saint-Etienne': etienne,
    'AC Le Havre': le_havre_ac,
    'LOSC Lille': lille_osc_ac,
    'Olympique Lyonnais': lyonnais,
    'Olympique Marseille': marseille,
    'Montpellier HSC': montpellier,
    'FC Nantes': nantes,
    'OGC Nice': nice,
    'Paris Saint-Germain FC': paris_saint_german,
    'RC Lens': rc_lens,
    'Stade Reims': reims,
    'Stade Rennais': rennais,
    'RC Strasbourg Alsace': strasbourg,
    'Toulouse FC': toulouse,

    // Serie A
    'AC Milan': ac_milan,
    'Atalanta BC': atalanta,
    'Bologna FC': bologna,
    'Cagliari Calcio': cagliari,
    'Como 1907': como,
    'FC Empoli': empoli,
    'ACF Fiorentina': fiorentina,
    'Genoa CFC': genoa,
    'Inter Milano': inter_milan,
    'Juventus Turin': juventus,
    'Lazio Roma': lazio,
    'US Lecce': lecce,
    'AC Monza': monza,
    'SSC Napoli': napoli,
    'Parma Calcio': parma,
    'AS Roma': roma,
    'Torino FC': torino,
    'Udinese Calcio': udinese,
    'Venezia': venezia,
    'Hellas Verona': verona
} as const;