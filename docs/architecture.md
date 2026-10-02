# COURTLOG architecture overview

## Why this foundation

The system is intentionally designed as a public-facing basketball statistics platform with a strong separation between public browsing and restricted admin workflows.

## Key architecture decisions

1. Next.js + TypeScript is the frontend foundation.
   - It gives us a maintainable React structure, route-based organization, and mature deployment on Vercel.

2. Supabase is the data layer.
   - PostgreSQL provides a robust relational model for tournaments, teams, games, players, aliases, and stat records.
   - Row Level Security is used to protect admin-only features.

3. Public pages are separated from admin workflows.
   - Public content such as players, teams, tournaments, and games is readable by everyone.
   - Admin-only tasks such as merging players, editing stats, and uploading PDFs should require authenticated admin roles.

4. Player identity is a core domain issue.
   - We intentionally treat player aliases and canonical identity as first-class concerns to avoid duplicate records across tournaments.
   - Future matching workflows can use normalized names and review queues before auto-merging.

5. PDF import is modeled as a review-first workflow.
   - Importing a PDF should never silently save unreviewed data.
   - A proper flow is: upload → extract text → parse → match player identity → review → confirm → transaction.

6. Data normalization is important for future expansion.
   - Tournament-specific teams and player-game records allow the platform to scale beyond one league without forcing a single global team identity model.

## Recommended database model

- `profiles` — auth identity information and admin roles
- `tournaments` — tournament metadata and status
- `teams` — team records per tournament
- `games` — schedule and game metadata
- `players` — canonical personal identity
- `player_aliases` — alternate names and normalized values
- `player_game_stats` — per-player, per-game stat rows
- `player_tournament_stats` — aggregation for leaderboards and career totals

## Important future decisions

- Whether admin identity is a role flag in `profiles` or a separate `roles` table
- Whether aliases are stored in a dedicated relational table or a JSON structure for initial implementation
- How to handle score/result records once historical results become available
- How to version imported PDFs and reconciliation audits for trust and auditing

This foundation is intentionally structured for easy expansion without introducing unnecessary complexity in the initial release.
