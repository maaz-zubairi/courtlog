import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-charcoal/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-full bg-brand-orange px-3 py-1 text-sm font-bold text-white">C</div>
          <div>
            <div className="text-lg font-black tracking-tight text-white">COURTLOG</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Basketball Stats</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <Link href="/tournaments" className="hover:text-white">Tournaments</Link>
          <Link href="/players" className="hover:text-white">Players</Link>
          <Link href="/teams" className="hover:text-white">Teams</Link>
          <Link href="/games" className="hover:text-white">Games</Link>
          <Link href="/admin" className="hover:text-white">Admin</Link>
        </nav>
      </div>
    </header>
  );
}
