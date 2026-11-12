# Fleet Manager Pro

A polished **React + TypeScript** fleet-management portfolio demo in French. Designed for Morocco (MAD / DH).

## Run locally

```bash
npm install
npm run dev
```

Build with `npm run build`. To publish to GitHub Pages from a repository named `fleet-manager-pro`, use `GITHUB_PAGES=true npm run build` and publish `dist/`.

## Demo V1

- Dashboard KPIs, expense trend and fleet status chart
- Vehicle registry, search and create vehicle
- Maintenance planning and mark completed
- Fuel entries and cost tracking
- Drivers overview, reports and CSV export
- Dark/light mode, responsive sidebar
- Browser-local demo data persistence (localStorage)

**Important:** Demo data is fictional. There is **no login or server-side synchronization in V1**. `supabase/schema.sql` is a proposed database schema for the connected Business version; it is not used by the current demo. Do not put sensitive real fleet or employee data into this local demo. The SQL includes organization-based RLS but requires additional same-organization foreign-key validation before production.

## Planned connected modules

- Supabase Auth with organization onboarding, secure roles and tenant isolation
- Driver licenses, expiry reminders, document storage
- Mission assignments and trip history
- PDF reports and audit log
- Server-side analytics and scheduled notifications

## Project structure

- `src/App.tsx`: UI, navigation and demo interactions
- `src/data.ts`: typed sample records
- `src/style.css`: responsive design system
- `supabase/schema.sql`: initial multi-tenant relational model and RLS
