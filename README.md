# ExposureGuard

ExposureGuard is an authorized website security health checker.

Users submit a website they control; the system runs safe scans, finds exposed secrets / info leaks / common web issues, and reports severity, evidence, affected pages, and remediation.

## Product direction
- Defensive tooling only
- Scan only customer-authorized targets
- Safe by default: passive checks first
- Start as a modular monolith
- Add Kafka only after the core scan flow works

## Initial stack
- Backend: Java 17, Spring Boot
- Data: PostgreSQL, Spring Data JPA / Hibernate
- Frontend: React
- Crawling: Playwright Java
- Security scanning: OWASP ZAP
- Infra: Docker Compose
- Later: Kafka for distributed scan stages

## MVP
The first shipped version should let a user:
- create a site
- start a scan job
- run a safe scan pipeline
- store findings with severity, evidence, and remediation
- view scan history and findings in a dashboard

## Build order
1. CRUD + persistence
2. Async scan job lifecycle
3. React dashboard
4. Real crawling
5. Passive detectors
6. ZAP integration
7. Auth-protected scans
8. Observability
9. Kafka / event-driven pipeline

## Repo structure
```text
exposureguard/
├── AGENTS.md
├── README.md
├── backend/
├── frontend/
├── infra/
│   ├── postgres/
│   └── zaproxy/
├── docs/
│   ├── architecture/
│   ├── backlog/
│   └── prd/
└── scripts/
```

## Suggested first tasks
### Backend
- Create Spring Boot app with: Web, Data JPA, Validation, PostgreSQL Driver, Lombok, Actuator
- Add core models: `Site`, `ScanJob`, `Finding`
- Add migrations for the first schema
- Build endpoints to create/list sites and scan jobs
- Add a fake async worker before integrating real scanners

### Frontend
- Create React app
- Add pages for sites, scan history, and findings
- Connect to backend REST endpoints
- Poll job status for the first end-to-end flow

### Infra
- Add `compose.yml`
- Run PostgreSQL locally
- Add ZAP container later, after the fake worker flow is stable

## Working principles
See `AGENTS.md` for the coding and architecture rules that should guide all implementations.

## Done definition for v0.1
The app is ready for an internal alpha when:
- a site can be created
- a scan job can be started
- the backend processes a fake scan asynchronously
- findings are stored in PostgreSQL
- the dashboard shows scan status and findings
- the full stack runs locally

## Notes
- Keep comments short and explain why, not what.
- Prefer the smallest correct change.
- Avoid premature microservices and speculative abstractions.

## Local dev container stack
Use Docker Compose to boot frontend, backend, and PostgreSQL together:

```bash
docker compose -f compose.dev.yml up --build
```

Endpoints:
- Frontend (Vite): `http://localhost:5173`
- Backend (Spring Boot): `http://localhost:8080`
- Backend health: `http://localhost:8080/api/health`
- PostgreSQL: `localhost:5432` (`app` / `app`, db `exposureguard`)

Stop and remove containers:

```bash
docker compose -f compose.dev.yml down
```
