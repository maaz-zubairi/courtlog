import { Game, Player, StatRow, Team, Tournament } from './types';

export const tournaments: Tournament[] = [
  {
    id: 'lob-2025',
    name: 'League of Basketball',
    season: '2025',
    league: 'LOB',
    status: 'active',
    teams: ['lahore-guards', 'karachi-heat', 'islamabad-united', 'peshawar-warriors'],
    games: ['game-001', 'game-002', 'game-003'],
    featured: true
  },
  {
    id: 'pba-2025',
    name: 'Pakistan Basketball Association',
    season: '2025',
    league: 'PBA',
    status: 'active',
    teams: ['multan-tigers', 'faisalabad-starz', 'rawalpindi-gladiators'],
    games: ['game-004'],
    featured: true
  }
];

export const teams: Team[] = [
  {
    id: 'lahore-guards',
    name: 'Lahore Guards',
    tournamentId: 'lob-2025',
    league: 'LOB',
    players: ['player-1', 'player-2', 'player-3'],
    wins: 9,
    losses: 2
  },
  {
    id: 'karachi-heat',
    name: 'Karachi Heat',
    tournamentId: 'lob-2025',
    league: 'LOB',
    players: ['player-4', 'player-5', 'player-6'],
    wins: 7,
    losses: 4
  },
  {
    id: 'islamabad-united',
    name: 'Islamabad United',
    tournamentId: 'lob-2025',
    league: 'LOB',
    players: ['player-7', 'player-8'],
    wins: 5,
    losses: 6
  },
  {
    id: 'peshawar-warriors',
    name: 'Peshawar Warriors',
    tournamentId: 'lob-2025',
    league: 'LOB',
    players: ['player-9', 'player-10'],
    wins: 4,
    losses: 7
  },
  {
    id: 'multan-tigers',
    name: 'Multan Tigers',
    tournamentId: 'pba-2025',
    league: 'PBA',
    players: ['player-11', 'player-12'],
    wins: 6,
    losses: 3
  },
  {
    id: 'faisalabad-starz',
    name: 'Faisalabad Starz',
    tournamentId: 'pba-2025',
    league: 'PBA',
    players: ['player-13', 'player-14'],
    wins: 5,
    losses: 4
  },
  {
    id: 'rawalpindi-gladiators',
    name: 'Rawalpindi Gladiators',
    tournamentId: 'pba-2025',
    league: 'PBA',
    players: ['player-15'],
    wins: 4,
    losses: 5
  }
];

export const players: Player[] = [
  {
    id: 'player-1',
    canonicalName: 'Ammar Khan',
    aliases: ['Ammar K', 'A. Khan'],
    position: 'G',
    height: '6-3',
    teamIds: ['lahore-guards'],
    tournamentIds: ['lob-2025'],
    career: { games: 18, points: 326, rebounds: 114, assists: 72, steals: 39, blocks: 15, turnovers: 42, fouls: 48 }
  },
  {
    id: 'player-2',
    canonicalName: 'Bilal Tariq',
    aliases: ['Bilal T'],
    position: 'F',
    height: '6-8',
    teamIds: ['lahore-guards'],
    tournamentIds: ['lob-2025'],
    career: { games: 16, points: 278, rebounds: 166, assists: 41, steals: 21, blocks: 26, turnovers: 33, fouls: 52 }
  },
  {
    id: 'player-3',
    canonicalName: 'Naveed Shah',
    aliases: ['Naveed S'],
    position: 'G',
    teamIds: ['lahore-guards'],
    tournamentIds: ['lob-2025'],
    career: { games: 17, points: 214, rebounds: 98, assists: 111, steals: 31, blocks: 9, turnovers: 36, fouls: 44 }
  },
  {
    id: 'player-4',
    canonicalName: 'Hamza Ali',
    aliases: ['Hamza A'],
    position: 'F',
    teamIds: ['karachi-heat'],
    tournamentIds: ['lob-2025'],
    career: { games: 15, points: 287, rebounds: 134, assists: 48, steals: 22, blocks: 16, turnovers: 28, fouls: 41 }
  },
  {
    id: 'player-5',
    canonicalName: 'Usman Raza',
    aliases: ['U. Raza'],
    position: 'C',
    teamIds: ['karachi-heat'],
    tournamentIds: ['lob-2025'],
    career: { games: 14, points: 221, rebounds: 185, assists: 35, steals: 20, blocks: 29, turnovers: 25, fouls: 49 }
  },
  {
    id: 'player-6',
    canonicalName: 'Zain Malik',
    aliases: ['Z. Malik'],
    position: 'G',
    teamIds: ['karachi-heat'],
    tournamentIds: ['lob-2025'],
    career: { games: 16, points: 265, rebounds: 92, assists: 76, steals: 29, blocks: 10, turnovers: 30, fouls: 38 }
  },
  {
    id: 'player-7',
    canonicalName: 'Sami Iqbal',
    aliases: ['Sami I'],
    position: 'G',
    teamIds: ['islamabad-united'],
    tournamentIds: ['lob-2025'],
    career: { games: 13, points: 252, rebounds: 81, assists: 61, steals: 26, blocks: 8, turnovers: 24, fouls: 39 }
  },
  {
    id: 'player-8',
    canonicalName: 'Rizwan Javed',
    aliases: ['R. Javed'],
    position: 'F',
    teamIds: ['islamabad-united'],
    tournamentIds: ['lob-2025'],
    career: { games: 14, points: 216, rebounds: 147, assists: 42, steals: 17, blocks: 18, turnovers: 31, fouls: 47 }
  },
  {
    id: 'player-9',
    canonicalName: 'Yasir Mehmood',
    aliases: ['Y. Mehmood'],
    position: 'G',
    teamIds: ['peshawar-warriors'],
    tournamentIds: ['lob-2025'],
    career: { games: 12, points: 198, rebounds: 91, assists: 56, steals: 19, blocks: 12, turnovers: 21, fouls: 31 }
  },
  {
    id: 'player-10',
    canonicalName: 'Musa Farooq',
    aliases: ['M. Farooq'],
    position: 'C',
    teamIds: ['peshawar-warriors'],
    tournamentIds: ['lob-2025'],
    career: { games: 11, points: 167, rebounds: 122, assists: 33, steals: 15, blocks: 22, turnovers: 19, fouls: 37 }
  },
  {
    id: 'player-11',
    canonicalName: 'Talha Qureshi',
    aliases: ['Talha Q'],
    position: 'G',
    teamIds: ['multan-tigers'],
    tournamentIds: ['pba-2025'],
    career: { games: 10, points: 230, rebounds: 88, assists: 60, steals: 23, blocks: 7, turnovers: 18, fouls: 29 }
  },
  {
    id: 'player-12',
    canonicalName: 'Shayan Ahmed',
    aliases: ['Shayan A'],
    position: 'F',
    teamIds: ['multan-tigers'],
    tournamentIds: ['pba-2025'],
    career: { games: 9, points: 206, rebounds: 124, assists: 38, steals: 18, blocks: 15, turnovers: 22, fouls: 27 }
  },
  {
    id: 'player-13',
    canonicalName: 'Ibrahim Hayat',
    aliases: ['I. Hayat'],
    position: 'F',
    teamIds: ['faisalabad-starz'],
    tournamentIds: ['pba-2025'],
    career: { games: 10, points: 188, rebounds: 131, assists: 31, steals: 17, blocks: 19, turnovers: 24, fouls: 30 }
  },
  {
    id: 'player-14',
    canonicalName: 'Imran Babar',
    aliases: ['Imran B'],
    position: 'G',
    teamIds: ['faisalabad-starz'],
    tournamentIds: ['pba-2025'],
    career: { games: 9, points: 209, rebounds: 86, assists: 55, steals: 21, blocks: 9, turnovers: 19, fouls: 28 }
  },
  {
    id: 'player-15',
    canonicalName: 'Omer Siddique',
    aliases: ['O. Siddique'],
    position: 'C',
    teamIds: ['rawalpindi-gladiators'],
    tournamentIds: ['pba-2025'],
    career: { games: 8, points: 169, rebounds: 142, assists: 27, steals: 14, blocks: 21, turnovers: 17, fouls: 25 }
  }
];

export const games: Game[] = [
  {
    id: 'game-001',
    tournamentId: 'lob-2025',
    label: 'LOB 2025 — Lahore Guards vs Karachi Heat',
    date: '2025-03-14',
    teams: [
      { id: 'lahore-guards', label: 'Lahore Guards' },
      { id: 'karachi-heat', label: 'Karachi Heat' }
    ],
    players: [
      {
        playerId: 'player-1',
        teamId: 'lahore-guards',
        minutes: 35,
        points: 24,
        rebounds: 6,
        assists: 5,
        steals: 3,
        blocks: 1,
        turnovers: 3,
        fouls: 2,
        fieldGoalsMade: 9,
        fieldGoalsAttempted: 18,
        threePointersMade: 4,
        threePointersAttempted: 8,
        freeThrowsMade: 2,
        freeThrowsAttempted: 3,
        offensiveRebounds: 2,
        defensiveRebounds: 4
      },
      {
        playerId: 'player-4',
        teamId: 'karachi-heat',
        minutes: 33,
        points: 21,
        rebounds: 9,
        assists: 4,
        steals: 2,
        blocks: 1,
        turnovers: 2,
        fouls: 3,
        fieldGoalsMade: 8,
        fieldGoalsAttempted: 16,
        threePointersMade: 3,
        threePointersAttempted: 7,
        freeThrowsMade: 2,
        freeThrowsAttempted: 2,
        offensiveRebounds: 3,
        defensiveRebounds: 6
      }
    ]
  },
  {
    id: 'game-002',
    tournamentId: 'lob-2025',
    label: 'LOB 2025 — Islamabad United vs Peshawar Warriors',
    date: '2025-03-17',
    teams: [
      { id: 'islamabad-united', label: 'Islamabad United' },
      { id: 'peshawar-warriors', label: 'Peshawar Warriors' }
    ],
    players: [
      {
        playerId: 'player-7',
        teamId: 'islamabad-united',
        minutes: 31,
        points: 19,
        rebounds: 4,
        assists: 6,
        steals: 2,
        blocks: 1,
        turnovers: 2,
        fouls: 2,
        fieldGoalsMade: 7,
        fieldGoalsAttempted: 15,
        threePointersMade: 2,
        threePointersAttempted: 5,
        freeThrowsMade: 3,
        freeThrowsAttempted: 4,
        offensiveRebounds: 1,
        defensiveRebounds: 3
      },
      {
        playerId: 'player-9',
        teamId: 'peshawar-warriors',
        minutes: 29,
        points: 18,
        rebounds: 5,
        assists: 4,
        steals: 3,
        blocks: 1,
        turnovers: 2,
        fouls: 3,
        fieldGoalsMade: 6,
        fieldGoalsAttempted: 13,
        threePointersMade: 3,
        threePointersAttempted: 6,
        freeThrowsMade: 3,
        freeThrowsAttempted: 4,
        offensiveRebounds: 2,
        defensiveRebounds: 3
      }
    ]
  },
  {
    id: 'game-003',
    tournamentId: 'lob-2025',
    label: 'LOB 2025 — Karachi Heat vs Islamabad United',
    date: '2025-03-21',
    teams: [
      { id: 'karachi-heat', label: 'Karachi Heat' },
      { id: 'islamabad-united', label: 'Islamabad United' }
    ],
    players: [
      {
        playerId: 'player-5',
        teamId: 'karachi-heat',
        minutes: 36,
        points: 26,
        rebounds: 13,
        assists: 2,
        steals: 2,
        blocks: 4,
        turnovers: 2,
        fouls: 3,
        fieldGoalsMade: 9,
        fieldGoalsAttempted: 17,
        threePointersMade: 1,
        threePointersAttempted: 4,
        freeThrowsMade: 7,
        freeThrowsAttempted: 8,
        offensiveRebounds: 5,
        defensiveRebounds: 8
      },
      {
        playerId: 'player-8',
        teamId: 'islamabad-united',
        minutes: 32,
        points: 22,
        rebounds: 11,
        assists: 3,
        steals: 2,
        blocks: 2,
        turnovers: 3,
        fouls: 4,
        fieldGoalsMade: 8,
        fieldGoalsAttempted: 15,
        threePointersMade: 2,
        threePointersAttempted: 5,
        freeThrowsMade: 4,
        freeThrowsAttempted: 5,
        offensiveRebounds: 4,
        defensiveRebounds: 7
      }
    ]
  },
  {
    id: 'game-004',
    tournamentId: 'pba-2025',
    label: 'PBA 2025 — Multan Tigers vs Faisalabad Starz',
    date: '2025-04-12',
    teams: [
      { id: 'multan-tigers', label: 'Multan Tigers' },
      { id: 'faisalabad-starz', label: 'Faisalabad Starz' }
    ],
    players: [
      {
        playerId: 'player-11',
        teamId: 'multan-tigers',
        minutes: 34,
        points: 27,
        rebounds: 5,
        assists: 7,
        steals: 3,
        blocks: 1,
        turnovers: 2,
        fouls: 2,
        fieldGoalsMade: 10,
        fieldGoalsAttempted: 18,
        threePointersMade: 5,
        threePointersAttempted: 9,
        freeThrowsMade: 2,
        freeThrowsAttempted: 4,
        offensiveRebounds: 1,
        defensiveRebounds: 4
      },
      {
        playerId: 'player-13',
        teamId: 'faisalabad-starz',
        minutes: 31,
        points: 20,
        rebounds: 12,
        assists: 4,
        steals: 2,
        blocks: 2,
        turnovers: 3,
        fouls: 3,
        fieldGoalsMade: 7,
        fieldGoalsAttempted: 14,
        threePointersMade: 2,
        threePointersAttempted: 6,
        freeThrowsMade: 4,
        freeThrowsAttempted: 5,
        offensiveRebounds: 5,
        defensiveRebounds: 7
      }
    ]
  }
];

export const leaderboard: StatRow[] = [
  {
    id: 'player-1',
    name: 'Ammar Khan',
    gp: 18,
    mpg: 33.4,
    ppg: 18.1,
    rpg: 6.3,
    apg: 4.1,
    spg: 2.2,
    bpg: 0.8,
    topg: 2.3,
    pfpg: 2.7,
    fgPct: 44.5,
    tpPct: 38.7,
    ftPct: 79.2
  },
  {
    id: 'player-2',
    name: 'Bilal Tariq',
    gp: 16,
    mpg: 31.1,
    ppg: 17.4,
    rpg: 10.4,
    apg: 2.6,
    spg: 1.3,
    bpg: 1.6,
    topg: 2.1,
    pfpg: 3.3,
    fgPct: 46.2,
    tpPct: 34.5,
    ftPct: 72.8
  },
  {
    id: 'player-5',
    name: 'Usman Raza',
    gp: 14,
    mpg: 31.7,
    ppg: 15.8,
    rpg: 13.2,
    apg: 2.5,
    spg: 1.4,
    bpg: 2.1,
    topg: 1.8,
    pfpg: 3.5,
    fgPct: 51.4,
    tpPct: 35.2,
    ftPct: 69.9
  }
];

export const getTournamentById = (id: string) => tournaments.find((t) => t.id === id);
export const getTeamById = (id: string) => teams.find((team) => team.id === id);
export const getPlayerById = (id: string) => players.find((player) => player.id === id);
export const getGameById = (id: string) => games.find((game) => game.id === id);
export const getPlayerName = (playerId: string) => {
  const player = getPlayerById(playerId);
  return player ? player.canonicalName : 'Unknown Player';
};
