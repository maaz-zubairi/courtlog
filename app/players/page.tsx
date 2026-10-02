import Link from 'next/link';
import { players } from '@/lib/data';

export default function PlayersPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.22em] text-brand-blue">Public directory</p>
        <h1 className="mt-3 text-4xl font-black text-white">Players</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {players.map((player) => (
          <Link key={player.id} href={`/players/${player.id}`} className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-brand-orange/70 hover:bg-slate-800">
            <div className="text-xl font-bold text-white">{player.canonicalName}</div>
            <div className="mt-2 text-sm text-slate-400">Aliases: {player.aliases.join(', ') || 'None recorded'}</div>
            <div className="mt-5 grid grid-cols-2 gap-4 text-sm text-slate-300">
              <div>
                <div className="text-slate-400">GP</div>
                <div className="text-lg font-semibold text-white">{player.career.games}</div>
              </div>
              <div>
                <div className="text-slate-400">PTS</div>
                <div className="text-lg font-semibold text-white">{player.career.points}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
