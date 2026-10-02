import Link from 'next/link';
import { games } from '@/lib/data';

export default function GamesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.22em] text-brand-blue">Matches</p>
        <h1 className="mt-3 text-4xl font-black text-white">Games</h1>
      </div>

      <div className="space-y-4">
        {games.map((game) => (
          <Link key={game.id} href={`/games/${game.id}`} className="block rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-brand-orange/70 hover:bg-slate-800">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-brand-orange">{game.label}</div>
                <div className="mt-2 text-white">{game.date}</div>
              </div>
              <div className="text-sm text-slate-400">{game.teams.map((team) => team.label).join(' vs ')}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
