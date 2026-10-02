import Link from 'next/link';
import { getPlayerById } from '@/lib/data';

export default function PlayerDetailPage({ params }: { params: { id: string } }) {
  const player = getPlayerById(params.id);

  if (!player) {
    return <main className="mx-auto max-w-7xl px-6 py-16 text-white">Player not found.</main>;
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-blue">Player profile</p>
            <h1 className="mt-3 text-4xl font-black text-white">{player.canonicalName}</h1>
          </div>
          <Link href="/players" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">Back to players</Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-800 p-5">
            <div className="text-sm text-slate-400">Career games</div>
            <div className="mt-2 text-3xl font-bold text-white">{player.career.games}</div>
          </div>
          <div className="rounded-2xl bg-slate-800 p-5">
            <div className="text-sm text-slate-400">Points</div>
            <div className="mt-2 text-3xl font-bold text-white">{player.career.points}</div>
          </div>
          <div className="rounded-2xl bg-slate-800 p-5">
            <div className="text-sm text-slate-400">Assists</div>
            <div className="mt-2 text-3xl font-bold text-white">{player.career.assists}</div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-slate-800 p-5">
            <h2 className="mb-4 text-xl font-bold text-white">Identity</h2>
            <ul className="space-y-2 text-slate-300">
              <li><strong className="text-white">Canonical name:</strong> {player.canonicalName}</li>
              <li><strong className="text-white">Aliases:</strong> {player.aliases.join(', ') || 'No aliases recorded'}</li>
              <li><strong className="text-white">Position:</strong> {player.position || 'Not provided'}</li>
              <li><strong className="text-white">Height:</strong> {player.height || 'Not provided'}</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-800 p-5">
            <h2 className="mb-4 text-xl font-bold text-white">Career totals</h2>
            <ul className="space-y-2 text-slate-300">
              <li>Rebounds: {player.career.rebounds}</li>
              <li>Steals: {player.career.steals}</li>
              <li>Blocks: {player.career.blocks}</li>
              <li>Turnovers: {player.career.turnovers}</li>
              <li>Fouls: {player.career.fouls}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
