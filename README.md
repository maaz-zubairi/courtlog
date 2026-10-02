# COURTLOG

COURTLOG is a public basketball statistics and records platform for Pakistan basketball leagues, built to support tournaments, teams, players, games, and historical performance tracking. It is developed as a foundation for League Report's digital basketball archive and is designed to scale across multiple leagues and seasons without losing player identity integrity.

## Product overview

- Public, searchable basketball stats database
- Tournament, team, player, and game views
- Player identity management with aliases and merge workflows
- Supabase-powered architecture with PostgreSQL schema guidance
- Next.js + TypeScript + Tailwind frontend for a professional sports-data experience

## Tech stack

- Frontend: Next.js, TypeScript, Tailwind CSS
- Database: Supabase PostgreSQL
- Authentication: Supabase Auth
- PDF parsing: PDF.js (ready for importer work)
- Hosting: Vercel

## Project structure

- `app/` — App Router pages and layouts
- `components/` — reusable UI components
- `lib/` — stat logic, typed data, and Supabase helpers

## Local development setup

1. Install dependencies:
   npm install
2. Copy the example environment file:
   cp .env.example .env.local
3. Add your Supabase project values in `.env.local`.
4. Start the app:
   npm run dev
5. Open http://localhost:3000

## Supabase configuration

Set the following values in `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

The service role key must never be used in client-side code. All privileged database operations should be handled through secure server routes or edge functions with appropriate RLS policies.

## Database architecture

The application is structured around the following core entities:

- `tournaments`
- `teams`
- `games`
- `players`
- `player_aliases`
- `player_game_stats`
- `player_career_stats`

This preserves a normalized, future-proof relational model while keeping the first iteration manageable and production-friendly.

## Deployment

This project is designed for deployment on Vercel. Connect the repository to Vercel and configure the same environment variables. The public app can then be served from the connected GitHub repository.

## Relationship with League Report

COURTLOG is positioned as a public basketball statistics and records platform under the League Report brand. League Report is the organization responsible for editorial and data stewardship, while the app provides a public-facing statistics layer that can be expanded for future leagues, seasons, player records, and historical archives.

## Important note

This repository contains a production-oriented application foundation and sample data model. It does not claim to contain real historical league data unless that data is explicitly added by the project administrators.
