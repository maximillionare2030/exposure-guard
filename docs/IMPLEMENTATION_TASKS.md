# ExposureGuard Implementation Tasks

This document turns `docs/PRD.md` into a practical end-to-end build checklist for the MVP.

## Assumptions
- Use the current repo stack as the source of truth where it differs from the PRD: Java 21 and PostgreSQL instead of Java 17 and MySQL.
- Keep the product defensive and passive-by-default.
- Build the smallest complete product loop first: create site -> start scan -> async processing -> persist findings -> review results in the UI.

## 1. MVP delivery path

### Phase 0 - Align the foundation
**Goal:** Make the repo structure, product scope, and environment consistent before feature work expands.

#### Tasks
- [ ] Reconcile docs so the stack is described consistently across `README.md`, `docs/PRD.md`, backend docs, and compose files.
- [ ] Decide whether Flyway should be introduced now or immediately after the first persisted entities land.
- [ ] Define the backend module/package layout for `site`, `scan`, `finding`, `common`, and `config`.
- [ ] Define the frontend feature layout for `sites`, `scan-jobs`, and `findings`.
- [ ] Confirm local development commands for backend, frontend, and Docker Compose.
- [ ] Add a short architecture note describing controller -> service -> repository boundaries.

#### Exit criteria
- One documented source of truth for the MVP stack and module layout.
- Team can boot frontend, backend, and database locally without guesswork.

---

### Phase 1 - Core data model and persistence
**Goal:** Model the core workflow entities and persist them cleanly.

#### Backend tasks
- [ ] Implement `Site` entity fields needed for MVP: `id`, `name`, `baseUrl`, `createdAt`, `updatedAt`.
- [ ] Implement `ScanJob` entity with status enum, timestamps, and failure reason.
- [ ] Implement `Finding` entity with severity enum, evidence, remediation, affected URL, and foreign keys.
- [ ] Add repositories for `Site`, `ScanJob`, and `Finding`.
- [ ] Add schema migrations for the initial database tables and indexes.
- [ ] Add auditing or explicit timestamp handling for create/update fields.

#### API contract tasks
- [ ] Create request/response DTOs for site creation and site retrieval.
- [ ] Create response DTOs for scan jobs and findings.
- [ ] Add input validation for site creation, especially `name` and `baseUrl`.
- [ ] Add consistent API error responses for validation failures and missing resources.

#### Testing tasks
- [ ] Add repository integration tests for all three core entities.
- [ ] Add API tests covering create/list/get site flows.

#### Exit criteria
- The database can persist and retrieve sites, scan jobs, and findings.
- No JPA entities are exposed directly from controllers.

---

### Phase 2 - Site management APIs
**Goal:** Deliver the first usable backend slice for managing scan targets.

#### Tasks
- [ ] Implement `POST /api/sites`.
- [ ] Implement `GET /api/sites`.
- [ ] Implement `GET /api/sites/{id}`.
- [ ] Add service-layer rules for URL normalization and duplicate handling decisions.
- [ ] Add not-found handling for site detail requests.
- [ ] Add logging around site creation failures.

#### Suggested done checks
- [ ] A user can create a site with a valid URL.
- [ ] A user can list saved sites.
- [ ] A user can open one site by ID.

---

### Phase 3 - Scan job lifecycle with fake async worker
**Goal:** Prove the product loop before adding real scanners.

#### Backend tasks
- [ ] Implement `POST /api/sites/{id}/scan-jobs`.
- [ ] Implement `GET /api/sites/{id}/scan-jobs`.
- [ ] Decide whether to add `GET /api/scan-jobs/{id}` now for easier polling.
- [ ] Add a `ScanJobStatus` enum with `QUEUED`, `RUNNING`, `COMPLETED`, and `FAILED`.
- [ ] Create a scan orchestration service that owns valid status transitions.
- [ ] Trigger asynchronous execution outside the request thread.
- [ ] Add a fake worker that sleeps for a short duration, creates mock findings, and completes the job.
- [ ] Record `startedAt`, `finishedAt`, and `failureReason` correctly.
- [ ] Ensure the worker is idempotent enough to avoid duplicate findings on accidental reprocessing.
- [ ] Add structured logs for job queued, started, completed, and failed events.

#### Testing tasks
- [ ] Add service tests for valid and invalid scan status transitions.
- [ ] Add integration tests for scan job creation and persisted mock findings.
- [ ] Add failure-path tests for missing site IDs and worker exceptions.

#### Exit criteria
- Starting a scan returns quickly.
- Job state changes asynchronously.
- Mock findings are stored and attributable to the correct site and scan job.

---

### Phase 4 - Findings APIs and operational read model
**Goal:** Make scan output reviewable and easy to query.

#### Tasks
- [ ] Implement `GET /api/sites/{id}/findings`.
- [ ] Implement `GET /api/scan-jobs/{id}/findings`.
- [ ] Add service methods for finding lookups by site and scan job.
- [ ] Sort findings in a predictable order, such as newest first or highest severity first.
- [ ] Normalize severity values for consistent UI rendering.
- [ ] Keep evidence payloads concise and safe to display.

#### Testing tasks
- [ ] Add integration tests for finding queries by site.
- [ ] Add integration tests for finding queries by scan job.

#### Exit criteria
- The frontend can fetch findings either from a site context or a specific scan run.

---

### Phase 5 - Frontend app shell and routing
**Goal:** Replace the starter UI with an operator dashboard foundation.

#### Tasks
- [ ] Add app routing for sites list, site detail, and findings-oriented views.
- [ ] Create a small shared layout with header, page title, and content container.
- [ ] Add a simple API client layer for backend calls.
- [ ] Choose server-state handling strategy; prefer TanStack Query or a similarly simple approach.
- [ ] Add reusable UI primitives for cards, tables/lists, badges, buttons, and empty states.
- [ ] Add loading, empty, and error states as first-class UI behavior.

#### Exit criteria
- The frontend structure matches the feature-first module plan.
- Navigation supports the core MVP flow without dead ends.

---

### Phase 6 - Sites UI
**Goal:** Let users register targets and navigate into them.

#### Tasks
- [ ] Build a sites list page.
- [ ] Build a create-site form with validation and inline errors.
- [ ] Add optimistic or immediate refresh of the site list after creation.
- [ ] Link each site to a site detail page.
- [ ] Show base URL and lightweight metadata in the list.

#### Suggested done checks
- [ ] A new user can add their first site without reading docs.
- [ ] Empty-state copy explains what a site is and what happens next.

---

### Phase 7 - Site detail, scan status, and scan history UI
**Goal:** Make the scan lifecycle visible and usable from the dashboard.

#### Tasks
- [ ] Build the site detail page.
- [ ] Show site metadata and latest scan summary.
- [ ] Add a "Start scan" action.
- [ ] Show scan history for the selected site.
- [ ] Poll scan status while a job is queued or running.
- [ ] Clearly distinguish `QUEUED`, `RUNNING`, `COMPLETED`, and `FAILED` states.
- [ ] Show failure reason when a job fails.

#### Exit criteria
- A user can create a site, start a scan, and understand what the system is doing in real time.

---

### Phase 8 - Findings UI
**Goal:** Present results in an operational, actionable format.

#### Tasks
- [ ] Build a findings list on the site detail page or a dedicated findings view.
- [ ] Show title, severity, affected URL, evidence, and remediation.
- [ ] Add a visible association to the scan run that produced each finding.
- [ ] Add severity badges with consistent color mapping.
- [ ] Handle empty findings cleanly for successful scans with no results.
- [ ] Redact or truncate sensitive-looking evidence if needed for safety.

#### Exit criteria
- Findings are understandable without reading raw JSON.
- The UI feels operational rather than flashy.

---

### Phase 9 - Local end-to-end developer workflow
**Goal:** Make the full product loop easy to run and demo.

#### Tasks
- [ ] Verify Docker Compose starts PostgreSQL plus app services cleanly.
- [ ] Ensure backend config works both locally and in Compose.
- [ ] Ensure frontend API base URL works in local and containerized runs.
- [ ] Document a single happy-path startup flow in the root README.
- [ ] Add sample demo steps: create site, start fake scan, review findings.
- [ ] Decide whether seed/demo data is worth adding for internal demos.

#### Exit criteria
- A fresh developer can run the full stack and complete one scan flow locally.

---

### Phase 10 - Hardening for MVP release
**Goal:** Raise quality without expanding scope prematurely.

#### Tasks
- [ ] Add request logging and job lifecycle logging where it improves operability.
- [ ] Review validation and error messages for actionability.
- [ ] Remove starter code and unused assets from frontend and backend.
- [ ] Add basic health/readiness checks for backend dependencies.
- [ ] Review sensitive data handling in logs and UI.
- [ ] Verify passive-only product messaging appears in the UI and docs where appropriate.
- [ ] Add a concise MVP demo script to support internal reviews.

#### Exit criteria
- The MVP is stable enough for internal demos and portfolio use.
- The repo is still simple and easy to explain.

## 2. Cross-cutting backlog

### Security and safety
- [ ] Add explicit language in the UI that scans are for authorized targets only.
- [ ] Decide when to require acknowledgement of authorization before starting scans.
- [ ] Define evidence redaction rules for logs and UI payloads.

### Observability
- [ ] Standardize log fields for `siteId`, `scanJobId`, and status.
- [ ] Decide what metrics are worth tracking before adding any metrics backend.

### Product clarity
- [ ] Define the initial severity taxonomy and examples.
- [ ] Define what a "finding type" looks like for fake findings so later real detectors can map cleanly.
- [ ] Write one demo narrative for internal reviews and future sales conversations.

### Technical debt guardrails
- [ ] Avoid adding Kafka, Playwright, ZAP, auth, or notifications before the MVP loop is working end to end.
- [ ] Replace `ddl-auto` with migrations before relying on persistent shared environments.

## 3. Suggested implementation order by week

### Sprint 1
- Foundation alignment
- Core entities
- Site APIs
- Site repository/API tests

### Sprint 2
- Scan job APIs
- Fake async worker
- Findings persistence
- Scan lifecycle tests

### Sprint 3
- Frontend app shell
- Sites page and form
- Site detail page
- Scan history/status polling

### Sprint 4
- Findings UI
- End-to-end local workflow cleanup
- Demo script and MVP hardening

## 4. Definition of done for the first end-to-end release
- [ ] A user can create a site from the UI.
- [ ] A user can start a scan from the UI.
- [ ] The backend creates a scan job and processes it asynchronously.
- [ ] The UI shows scan progress until completion or failure.
- [ ] Findings are persisted in PostgreSQL.
- [ ] Findings are visible with severity, evidence, affected URL, and remediation.
- [ ] The full stack runs locally through the documented developer flow.
- [ ] The implementation stays within the product's passive, authorized-scan boundaries.

## 5. Recommended immediate next tickets
1. Create initial DB schema and migrations for `Site`, `ScanJob`, and `Finding`.
2. Implement site DTOs, service, controller, and create/list/detail endpoints.
3. Implement scan job creation plus async fake worker and status transitions.
4. Implement findings query endpoints and integration tests.
5. Replace the starter frontend with routes, sites list, site detail, and scan status polling.
