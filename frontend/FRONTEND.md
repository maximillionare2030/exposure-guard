
---

# `frontend/README.md`

```md
# ExposureGuard Frontend

The frontend is the operator-facing UI for ExposureGuard. It lets users submit sites, start scan jobs, and review findings in a simple dashboard.

The frontend should stay lightweight, readable, and product-focused. It is not meant to be a design-system playground or a complex state-management experiment.

## Goals

The frontend should:

- let users create and view sites
- let users start scans
- show scan status and scan history
- display findings clearly with severity and evidence
- make the product feel usable early, even before scanning is fully real

## Tech stack

- React
- TypeScript
- Vite

Suggested additions:
- React Router
- TanStack Query
- a minimal component system
- basic form validation

Do not overcomplicate the frontend in v0.1.

---

## Architecture approach

The frontend should be organized **by feature**, not by random technical buckets.

That means:
- pages grouped by product area
- shared UI kept small and intentional
- API access centralized
- types close to where they are used, unless truly shared

This keeps the app understandable as features expand.

---

## Recommended file structure

```text
frontend/
├── package.json
├── vite.config.ts
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── app/
│   ├── components/
│   ├── features/
│   │   ├── sites/
│   │   ├── scan-jobs/
│   │   └── findings/
│   ├── pages/
│   ├── lib/
│   ├── hooks/
│   ├── types/
│   ├── styles/
│   └── router/
└── public/
