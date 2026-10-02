import Link from 'next/link';
import { tournaments, players, leaderboard } from '@/lib/data';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-charcoal text-white">
      <section className="border-b border-white/10 bg-gradient-to-br from-brand-charcoal via-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm uppercase tracking-[0.28em] text-brand-orange">League Report</div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                Powered by League Report
              </div>
            </div>

            <div className="grid items-end gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.24em] text-brand-blue">Basketball Statistics & Records</p>
                <h1 className="max-w-2xl text-5xl font-black tracking-tight text-white md:text-6xl">
                  Every game. Every player. Every stat.
                </h1>
                <p className="mt-6 max-w-xl text-lg text-slate-300">
                  COURTLOG centralizes player, team, tournament, and game statistics for basketball communities across Pakistan and beyond.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/tournaments" className="rounded-full bg-brand-orange px-6 py-3 font-medium text-white transition hover:bg-orange-500">
                    Explore tournaments
                  </Link>
                  <Link href="/players" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10">
                    Browse players
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur-sm">
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Featured league</div>
                <div className="mt-4 text-3xl font-bold text-white">{tournaments[0]?.name}</div>
                <div className="mt-2 text-brand-blue">Season {tournaments[0]?.season}</div>
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
                  <div className="rounded-xl bg-slate-900/60 p-3">
                    <div className="text-slate-400">Teams</div>
                    <div className="mt-2 text-xl font-bold text-white">{tournaments[0]?.teams.length ?? 0}</div>
                  </div>
                  <div className="rounded-xl bg-slate-900/60 p-3">
                    <div className="text-slate-400">Games</div>
                    <div className="mt-2 text-xl font-bold text-white">{tournaments[0]?.games.length ?? 0}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {tournaments.slice(0, 3).map((tournament) => (
            <div key={tournament.id} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-brand-blue">{tournament.league}</div>
              <h2 className="mt-3 text-2xl font-bold text-white">{tournament.name}</h2>
              <p className="mt-2 text-slate-300">Season {tournament.season}</p>
              <div className="mt-5 flex justify-between text-sm text-slate-300">
                <span>Teams</span>
                <span>{tournament.teams.length}</span>
              </div>
              <div className="mt-3 flex justify-between text-sm text-slate-300">
                <span>Games</span>
                <span>{tournament.games.length}</span>
              </div>
              <Link href={`/tournaments/${tournament.id}`} className="mt-6 inline-block text-brand-orange hover:text-orange-300">
                View tournament →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">Featured players</h3>
              <Link href="/players" className="text-sm text-brand-orange">View all</Link>
            </div>
            <div className="space-y-4">
              {players.slice(0, 5).map((player) => (
                <Link key={player.id} href={`/players/${player.id}`} className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-800 p-4 transition hover:border-brand-orange/60">
                  <div>
                    <div className="font-semibold text-white">{player.canonicalName}</div>
                    <div className="text-sm text-slate-400">{player.position ?? 'Guard'} • Active roster</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-brand-orange">{player.career.points}</div>
                    <div className="text-xs uppercase tracking-[0.16em] text-slate-400">PTS</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h3 className="text-2xl font-bold text-white">Top leaderboard</h3>
            <div className="mt-6 space-y-4">
              {leaderboard.map((player, index) => (
                <div key={player.id} className="flex items-center justify-between rounded-xl bg-slate-800 p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white">{index + 1}</div>
                    <div>
                      <div className="font-medium text-white">{player.name}</div>
                      <div className="text-xs text-slate-400">PPG {player.ppg}</div>
                    </div>
                  </div>
                  <div className="text-right text-brand-blue">
                    <div className="font-bold">{player.points ?? player.ppg}</div>
                    <div className="text-xs uppercase tracking-[0.14em]">PTS</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
