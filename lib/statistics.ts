export function formatPct(value: number) {
  if (!Number.isFinite(value) || value === 0) return '0.00%';
  return `${value.toFixed(2)}%`;
}

export function average(value: number, total: number) {
  if (!total || !Number.isFinite(value)) return 0;
  return Number(((value / total) * 1).toFixed(2));
}

export function getPlayerStatsForGame(player: {
  points?: number;
  rebounds?: number;
  assists?: number;
  games?: number;
}) {
  return {
    ppg: Number(((player.points ?? 0) / Math.max(player.games || 1, 1)).toFixed(2)),
    rpg: Number(((player.rebounds ?? 0) / Math.max(player.games || 1, 1)).toFixed(2)),
    apg: Number(((player.assists ?? 0) / Math.max(player.games || 1, 1)).toFixed(2))
  };
}
