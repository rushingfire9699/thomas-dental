# Thomas Dental

A patient-facing website for Thomas Dental in Boca Raton, presenting the practice, services, new-patient process, location, and contact information.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- Web app: `artifacts/thomas-dental/`
- Brand palette and typography: `artifacts/thomas-dental/tailwind.config.ts` and `src/index.css`
- Approved logo artwork: `artifacts/thomas-dental/public/thomas-dental-brand-card.png`
- Source branding reference: `attached_assets/Thomas_Dental_Front_Card_1788930295513.pdf`

## Architecture decisions

- The website is a frontend-only React + Vite artifact; the shared API server is not part of its current flows.
- The supplied Thomas Dental branding card is the primary visual reference.
- Use the supplied logo artwork directly; never redraw, reinterpret, or redesign it.

## Product

- Visitors can browse the practice overview, services, new-patient guidance, contact details, privacy policy, and accessibility page.

## User preferences

- Match typography, navy/aqua/gold palette, spacing, and overall visual character to the supplied branding reference.
- Do not redesign the Thomas Dental logo.
- Keep the homepage and patient journey feeling relaxed, coastal, sunlit, and welcoming while preserving the professional dental brand.

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
