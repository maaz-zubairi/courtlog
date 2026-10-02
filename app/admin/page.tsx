export default function AdminPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-3xl border border-brand-orange/40 bg-slate-900 p-8">
        <p className="text-sm uppercase tracking-[0.22em] text-brand-orange">Protected admin</p>
        <h1 className="mt-3 text-4xl font-black text-white">Administrative dashboard</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          This is the secure administrative area for tournaments, teams, games, players, and player identity management.
          Authentication and authorization are enforced through Supabase Auth and database-level RLS policies.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[
          'Tournament management',
          'Team management',
          'Game import and review',
          'Player identities',
          'Statistics corrections',
          'Merge and cleanup'
        ].map((card) => (
          <div key={card} className="rounded-2xl border border-white/10 bg-slate-900 p-5 text-slate-200">
            {card}
          </div>
        ))}
      </div>
    </main>
  );
}
