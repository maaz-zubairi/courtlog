import { getGameById } from '@/lib/data';

export default function GameDetailPage({ params }: { params: { id: string } }) {
  const game = getGameById(params.id);

  if (!game) {
    return <main className="mx-auto max-w-7xl px-6 py-16 text-white">Game not found.</main>;
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-blue">Game details</p>
        <h1 className="mt-3 text-4xl font-black text-white">{game.label}</h1>
        <p className="mt-2 text-slate-300">{game.date}</p>
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900 p-6">
        <h2 className="mb-4 text-2xl font-bold text-white">Box score</h2>
        <div className="overflow-hidden rounded-xl border border-white/10">
          <table className="min-w-full divide-y divide-white/10 text-left text-sm">
            <thead className="bg-slate-800 text-slate-300">
              <tr>
                <th className="px-4 py-3">Player</th>
                <th className="px-4 py-3">MIN</th>
                <th className="px-4 py-3">PTS</th>
                <th className="px-4 py-3">REB</th>
                <th className="px-4 py-3">AST</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 bg-slate-900 text-slate-200">
              {game.players.map((entry) => (
                <tr key={`${game.id}-${entry.playerId}`}>
                  <td className="px-4 py-3">{entry.playerId}</td>
                  <td className="px-4 py-3">{entry.minutes}</td>
                  <td className="px-4 py-3">{entry.points}</td>
                  <td className="px-4 py-3">{entry.rebounds}</td>
                  <td className="px-4 py-3">{entry.assists}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
