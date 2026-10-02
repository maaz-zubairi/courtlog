import Link from 'next/link';
import { teams } from '@/lib/data';

export default function TeamsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.22em] text-brand-blue">League teams</p>
        <h1 className="mt-3 text-4xl font-black text-white">Teams</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {teams.map((team) => (
          <Link key={team.id} href={`/teams/${team.id}`} className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-brand-orange/70 hover:bg-slate-800">
            <div className="text-sm uppercase tracking-[0.2em] text-brand-blue">{team.league}</div>
            <div className="mt-4 text-2xl font-bold text-white">{team.name}</div>
            <div className="mt-5 flex justify-between text-sm text-slate-300">
              <span>Record</span>
              <span>{team.wins}-{team.losses}</span>
            </div>
            <div className="mt-2 flex justify-between text-sm text-slate-300">
              <span>Players</span>
              <span>{team.players.length}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
