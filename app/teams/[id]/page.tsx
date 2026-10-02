import { getTeamById } from '@/lib/data';
import Link from 'next/link';

export default function TeamDetailPage({ params }: { params: { id: string } }) {
  const team = getTeamById(params.id);

  if (!team) {
    return <main className="mx-auto max-w-7xl px-6 py-16 text-white">Team not found.</main>;
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-blue">Team profile</p>
        <h1 className="mt-3 text-4xl font-black text-white">{team.name}</h1>
        <p className="mt-2 text-slate-300">{team.league} • Tournament record: {team.wins}-{team.losses}</p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">Roster</h2>
          <div className="space-y-3">
            {team.players.map((playerId) => (
              <Link key={playerId} href={`/players/${playerId}`} className="block rounded-xl bg-slate-800 p-3 text-slate-200 hover:text-white">
                {playerId}
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">Team stats</h2>
          <ul className="space-y-2 text-slate-300">
            <li>Games played: {team.wins + team.losses}</li>
            <li>Wins: {team.wins}</li>
            <li>Losses: {team.losses}</li>
            <li>League: {team.league}</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
