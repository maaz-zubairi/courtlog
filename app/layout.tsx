import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'COURTLOG | Basketball Statistics & Records',
  description:
    'Public basketball statistics platform for tournaments, players, teams, and games across multiple leagues.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-charcoal text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
