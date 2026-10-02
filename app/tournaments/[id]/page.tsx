import Link from 'next/link';
import { getTournamentById, getTeamById, leaderboard } from '@/lib/data';

export default function TournamentDetailPage({ params }: { params: { id: string } }) {
  const tournament = getTournamentById(params.id);

  if (!tournament) {
    return <main className="mx-auto max-w-7xl px-6 py-16 text-white">Tournament not found.</main>;
  }

  const participatingTeams = tournament.teams
    .map((teamId) => getTeamById(teamId))
    .filter((team): team is NonNullable<typeof team> => Boolean(team));

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 rounded-3xl border border-white/10 bg-slate-900 p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-blue">{tournament.league}</p>
        <h1 className="mt-4 text-4xl font-black text-white">{tournament.name}</h1>
        <p className="mt-2 text-slate-300">Season {tournament.season}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <section className="rounded-2xl border border-white/10 bg-slate-900 p-6">
          <h2 className="mb-5 text-2xl font-bold text-white">Participating teams</h2>
          <div className="space-y-3">
            {participatingTeams.map((team) => (
              <Link key={team.id} href={`/teams/${team.id}`} className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-800 p-3 text-slate-200 hover:border-brand-orange/60">
                <span>{team.name}</span>
                <span className="text-brand-blue">{team.wins}-{team.losses}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-slate-900 p-6">
          <h2 className="mb-5 text-2xl font-bold text-white">Player leaderboard</h2>
          <div className="space-y-3">
            {leaderboard.slice(0, 5).map((entry) => (
              <div key={entry.id} className="flex items-center justify-between rounded-xl bg-slate-800 p-3">
                <span className="text-white">{entry.name}</span>
                <span className="text-brand-orange">{entry.ppg} PPG</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
