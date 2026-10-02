export type League = 'LOB' | 'PBA' | 'National League' | 'Provincial League';

export type Player = {
  id: string;
  canonicalName: string;
  aliases: string[];
  position?: string;
  height?: string;
  teamIds: string[];
  tournamentIds: string[];
  career: {
    games: number;
    points: number;
    rebounds: number;
    assists: number;
    steals: number;
    blocks: number;
    turnovers: number;
    fouls: number;
  };
};

export type Team = {
  id: string;
  name: string;
  tournamentId: string;
  league: League;
  players: string[];
  wins: number;
  losses: number;
};

export type Tournament = {
  id: string;
  name: string;
  season: string;
  league: League;
  status: 'active' | 'completed';
  teams: string[];
  games: string[];
  featured: boolean;
};

export type Game = {
  id: string;
  tournamentId: string;
  label: string;
  date: string;
  teams: { id: string; label: string }[];
  players: GamePlayerStat[];
};

export type GamePlayerStat = {
  playerId: string;
  teamId: string;
  minutes: number;
  points: number;
  rebounds: number;
  assists: number;
  steals: number;
  blocks: number;
  turnovers: number;
  fouls: number;
  fieldGoalsMade: number;
  fieldGoalsAttempted: number;
  threePointersMade: number;
  threePointersAttempted: number;
  freeThrowsMade: number;
  freeThrowsAttempted: number;
  offensiveRebounds: number;
  defensiveRebounds: number;
};

export type StatRow = {
  id: string;
  name: string;
  gp: number;
  mpg: number;
  ppg: number;
  rpg: number;
  apg: number;
  spg: number;
  bpg: number;
  topg: number;
  pfpg: number;
  fgPct: number;
  tpPct: number;
  ftPct: number;
  points?: number;
};
