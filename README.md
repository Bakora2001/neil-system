# NDIP — NEIL Digital Infrastructure Platform

This repository is the starter scaffold for **NDIP**, the unified system covering NEIL's
public website, knowledge hub, member portal, and admin CMS.

Stack: **TypeScript** end to end — **React (Vite)** on the frontend, **Node.js / Express**
on the backend, **PostgreSQL** (via Prisma) as the primary datastore, and **Redis** for
caching, rate-limiting, and session/queue work.

```
NDIP/
├── frontend/         React + TypeScript (Vite) — public site, login, member portal UI
├── backend/           Node.js + Express (TypeScript) — REST API, auth, CMS, analytics
├── shared/            Types/DTOs shared between frontend and backend
├── docker-compose.yml Local Postgres + Redis + API, one command to run everything
└── README.md
```

## Why this structure scales

- **Modular monolith, not a tangle.** The backend is organised as self-contained modules
  (`auth`, `users`, `members`, `institutions`, `programs`, `knowledge-hub`, `cms`,
  `analytics`, `partners`, `news`). Each module owns its routes, controller, service, and
  types. This keeps things simple to run as one app now, but any module can be lifted out
  into its own microservice later without a rewrite — the boundaries already exist.
- **Layered, not tangled, inside each module.** `routes → controller → service → prisma`.
  Controllers never talk to the database directly; services hold business logic; this
  makes every module independently testable and safe to change without breaking others.
- **Shared types package.** `shared/types` is imported by both frontend and backend so a
  `Program` or `MemberInstitution` shape can never silently drift between the two.
- **Database designed for growth.** Prisma schema uses UUID primary keys, indexed foreign
  keys, and pagination-ready queries (`cursor`-based, not `OFFSET`) so listing pages (news,
  knowledge hub resources, member institutions) stay fast past tens of thousands of rows.
- **Caching and rate limiting from day one.** Redis is wired in for response caching on
  read-heavy public pages (home, partners, programs) and for login rate-limiting, so a
  traffic spike (e.g. a summit announcement) doesn't take the site down.
- **Stateless API.** JWT-based auth means the API can be horizontally scaled behind a load
  balancer with no sticky sessions required.
- **Environment-driven config.** Nothing is hard-coded; `.env` files drive all secrets and
  connection strings, so the same codebase runs in dev, staging, and production.

## Getting started

```bash
# 1. Install dependencies
cd frontend && npm install
cd ../backend && npm install

# 2. Copy environment files
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env

# 3. Start Postgres + Redis locally
docker compose up -d db redis

# 4. Run database migrations
cd backend && npx prisma migrate dev

# 5. Run both apps (in separate terminals)
cd backend && npm run dev     # http://localhost:4000
cd frontend && npm run dev    # http://localhost:3000 (Vite dev server)
```

## Brand tokens

The full NEIL colour palette lives in `frontend/src/styles/theme.ts` and is mirrored into
`frontend/tailwind.config.ts` as named colours (`ndip-indigo`, `ndip-navy`, `ndip-orange`,
`ndip-orange-alt`, `ndip-cream`, `ndip-ink`), so every component pulls colour from one
source of truth.

## Routing

The frontend uses **React Router** (`src/App.tsx`). `/` renders the landing page and
`/login` renders the login screen, matching the two designs supplied. Add further routes
(`/about`, `/programs`, `/membership`, `/portal`, etc.) the same way, as pages are built out.

## Next modules to build out

- `knowledge-hub`: tagging, full-text search (Postgres `tsvector` or Meilisearch), Full
  Member access gating.
- `members`: institution profiles, CRM sync, event registration, peer directory.
- `cms`: non-technical content editing for Secretariat staff (news, programs, partners).
- `analytics`: scheduled job that compiles the monthly report from GA4 + internal events.

See the NDIP technical documentation for the full module-by-module plan and roadmap.
