import { tournaments } from '@/lib/data';
import Link from 'next/link';

export default function TournamentsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-brand-blue">League database</p>
          <h1 className="mt-3 text-4xl font-black text-white">Tournaments</h1>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {tournaments.map((tournament) => (
          <Link key={tournament.id} href={`/tournaments/${tournament.id}`} className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-brand-orange/70 hover:bg-slate-800">
            <div className="text-sm uppercase tracking-[0.2em] text-brand-orange">{tournament.league}</div>
            <div className="mt-4 text-2xl font-bold text-white">{tournament.name}</div>
            <div className="mt-2 text-slate-400">Season {tournament.season}</div>
            <div className="mt-6 flex justify-between text-sm text-slate-300">
              <span>Teams</span>
              <span>{tournament.teams.length}</span>
            </div>
            <div className="mt-2 flex justify-between text-sm text-slate-300">
              <span>Games</span>
              <span>{tournament.games.length}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
