# ExposureGuard MVP Foundation Note

This is the source of truth for the MVP foundation and local development workflow.

## MVP stack
- Backend: Java 21, Spring Boot
- Frontend: React + TypeScript + Vite
- Database: PostgreSQL
- Infra: Docker Compose
- Persistence: Spring Data JPA / Hibernate

## Flyway decision
What changed: Flyway is introduced now, before shared-environment persistence work expands.
Why: Versioned migrations are safer than relying on `ddl-auto` for collaborative development.
Tradeoff: Slightly more setup overhead up front, but fewer schema drift issues later.

## Backend module layout
Use a modular monolith package structure under `com.exposureguard.backend`:
- `site`: site registration and retrieval
- `scan`: scan job creation and lifecycle orchestration
- `finding`: finding storage and retrieval
- `common`: shared errors, API error DTOs, utility types
- `config`: application-wide configuration

## Frontend feature layout
Use a feature-first structure under `frontend/src`:
- `features/sites`: list/create/detail site flows
- `features/scan-jobs`: start scans, list jobs, status polling
- `features/findings`: list findings by site or scan job
- `shared`: reusable UI primitives and shared utilities
- `app`: routing and app shell

## Layer boundaries
Enforce `controller -> service -> repository`:
- Controllers: HTTP transport only (validation, request/response mapping)
- Services: business logic, transaction boundaries, orchestration
- Repositories: persistence queries only

JPA entities are persistence models only; API contracts are request/response DTOs.

## Local development commands
Hybrid mode (recommended for daily development):
1. `docker compose -f compose.dev.yml up postgres`
2. `cd backend && ./mvnw spring-boot:run` (PowerShell: `.\mvnw.cmd spring-boot:run`)
3. `cd frontend && npm run dev`

Full container mode (reproducibility checks/onboarding):
1. `docker compose -f compose.dev.yml up --build`
2. `docker compose -f compose.dev.yml down`
