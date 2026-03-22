# ExposureGuard PRD

## 1. Document Overview

**Product Name:** ExposureGuard
**Product Type:** Authorized website security health checker
**Stage:** MVP / v0.1 PRD
**Author:** Maximillian + AI-assisted build
**Status:** Draft
**Primary Audience:** Founder, builder, future collaborators, Codex/LLM assistants

---

## 2. Product Summary

ExposureGuard is an authorized website security health checker for developers and small teams.

A user submits a website they control. ExposureGuard runs safe scans to identify exposed secrets, information leaks, public misconfigurations, and common low-risk web security findings. It then returns a report with severity, evidence, affected pages, and remediation guidance.

The product begins as a modular monolith with a React frontend and Spring Boot backend. It starts with passive checks and an internal scan pipeline. Later versions can add authenticated scans, recurring scans, alerts, and event-driven distributed processing.

---

## 3. Problem Statement

Small teams often deploy websites without strong security review processes. As a result, they may accidentally expose:

- API keys in frontend bundles
- sensitive configuration in public assets
- debug or admin endpoints
- source maps or internal metadata
- obvious unsafe setup patterns
- common passive scan findings

Existing security tools are often:
- too enterprise-heavy
- too expensive
- too broad
- too offensive in posture
- hard to set up for small engineering teams

There is room for a focused developer-friendly tool that helps teams safely inspect their own websites and quickly fix obvious issues.

---

## 4. Product Vision

Build a developer-first security health checker that makes it easy for teams to continuously inspect websites they own and discover public-facing risks before those issues become incidents.

ExposureGuard should feel like:
- a lightweight web security operator dashboard
- a safe, defensive tool
- a product that gives useful findings quickly
- a platform that can evolve into more advanced scanning and monitoring over time

---

## 5. Product Principles

### 5.1 Defensive Only
ExposureGuard is a defensive product. It exists to help customers inspect systems they own or are authorized to scan.

### 5.2 Safe by Default
The initial product should prefer passive checks, passive scanning, and low-risk discovery before introducing any deeper or authenticated scanning.

### 5.3 Product Before Infrastructure
The product loop matters more than architecture sophistication. Build the simplest working version first, then evolve it.

### 5.4 Modular Monolith First
The system starts as a single deployable backend, clearly organized by feature modules. Kafka and service extraction come later.

### 5.5 Actionable Output
Findings must be understandable and useful, not raw scanner noise.

### 5.6 Explainability
The product should show why a finding exists, where it was found, why it matters, and how to fix it.

---

## 6. Goals

### 6.1 MVP Goals
The MVP should allow a user to:

- create a site
- start a scan job
- run a safe scan workflow
- store findings in a database
- review scan history
- view findings with severity, evidence, and remediation
- use the product through a simple dashboard

### 6.2 Technical Goals
The initial technical build should help the builder learn:

- Java + Spring Boot backend development
- REST API design
- PostgreSQL + JPA/Hibernate persistence
- async job orchestration
- React dashboard architecture
- Docker Compose local environments
- later, Playwright, ZAP, and Kafka

### 6.3 Product Goals
The product should become usable enough for:

- internal demos
- portfolio value
- learning production backend concepts
- future expansion into a more serious B2B tool

---

## 7. Non-Goals

The MVP will **not** include:

- internet-wide scanning
- offensive exploitation workflows
- bug bounty automation
- secret verification against third-party live services
- full enterprise multi-tenancy
- RBAC / org management
- billing
- large-scale alert routing
- microservices
- Kubernetes
- Kafka-first architecture
- polished enterprise UI
- deep compliance workflows

The MVP is a focused authorized security health checker, not a full AppSec platform.

---

## 8. Target Users

### 8.1 Primary User
**Small engineering teams / startup developers**

Profile:
- builds and deploys websites quickly
- may not have a dedicated security engineer
- wants a straightforward way to inspect public-facing assets

Needs:
- simple setup
- clear findings
- low noise
- remediation guidance

### 8.2 Secondary User
**Solo developer / indie hacker**

Profile:
- owns a website or app
- wants confidence before launch or after deployment
- values simple UX and fast time to value

### 8.3 Tertiary User
**Security-conscious engineering lead**

Profile:
- wants visibility into website risk
- wants scans tied to a known target
- wants scan history and evidence

---

## 9. Jobs To Be Done

### Functional JTBD
- When I deploy a website, I want to scan it for obvious public-facing issues so I can fix problems before users or attackers discover them.

### Emotional JTBD
- I want confidence that I have not accidentally leaked something embarrassing or risky.

### Operational JTBD
- I want one place where I can review scan history, findings, and recommended fixes.

---

## 10. User Stories

### Sites
- As a user, I want to create a site so I can track scans against a specific target.
- As a user, I want to view a list of my sites so I can manage them easily.

### Scan Jobs
- As a user, I want to start a scan for a site so I can inspect the current state of that website.
- As a user, I want to see scan job status so I know whether the scan is queued, running, completed, or failed.

### Findings
- As a user, I want to see findings for a scan so I can understand the issues discovered.
- As a user, I want each finding to show severity, evidence, and remediation so I know what to do next.

### Future
- As a user, I want authenticated scans for my site so deeper pages can be inspected.
- As a user, I want recurring scans and alerts so I can monitor over time.

---

## 11. MVP Scope

### Included in v0.1
- site creation
- site listing
- site detail page
- scan job creation
- scan job lifecycle
- fake async worker initially
- findings persistence
- findings UI
- PostgreSQL persistence
- React dashboard
- local full-stack run via Docker Compose
- passive/safe scan posture

### Included in v0.2 / early next
- real crawl discovery
- passive detector engine
- real scan results instead of only fake findings
- basic evidence formatting
- better status handling

### Included in v0.3 / later
- ZAP baseline integration
- authenticated scan support
- scan history improvements
- ignore / resolve workflow
- alerts / notifications

### Included in v1+
- Kafka-based event pipeline
- service decomposition
- richer observability
- org/team features
- recurring monitoring

---

## 12. User Flow

### 12.1 Core MVP Flow
1. User opens the app.
2. User creates a site with a name and base URL.
3. User opens the site detail page.
4. User starts a scan job.
5. Backend creates a scan record and processes the scan asynchronously.
6. Scan status updates from `QUEUED` → `RUNNING` → `COMPLETED` or `FAILED`.
7. Findings are stored.
8. User reviews findings in the dashboard.

### 12.2 Later Authenticated Flow
1. User creates site.
2. User configures verified authorization inputs.
3. User provides login flow/test credentials.
4. System runs authenticated scan within allowed scope.
5. Findings include protected content/pages where relevant.

---

## 13. Functional Requirements

## 13.1 Site Management

### Requirement
The system must allow users to create and view sites.

### Inputs
- site name
- base URL

### Behavior
- validate URL format
- persist site record
- make site available for future scans

### Outputs
- site ID
- site detail payload
- site list entry

---

## 13.2 Scan Job Management

### Requirement
The system must allow users to start scan jobs for a site.

### Behavior
- create scan job row
- assign initial status
- process asynchronously
- update lifecycle timestamps

### Scan States
- `QUEUED`
- `RUNNING`
- `COMPLETED`
- `FAILED`

### Outputs
- scan job record
- updated status over time
- findings tied to scan job

---

## 13.3 Findings Storage

### Requirement
The system must persist findings produced by a scan.

### Finding fields
- title
- type
- severity
- evidence
- affected URL
- remediation text
- scan job reference
- site reference
- timestamps

### Behavior
- findings must be queryable by site
- findings must be queryable by scan job

---

## 13.4 Findings Display

### Requirement
The frontend must display findings in a readable operational format.

### Minimum UI elements
- title
- severity badge
- affected URL
- evidence snippet
- remediation text

---

## 13.5 Scan History

### Requirement
The system must store and show historical scans for a site.

### Behavior
- each scan job is preserved
- user can review prior runs
- findings are attributable to a specific scan

---

## 13.6 Async Processing

### Requirement
The scan lifecycle must run asynchronously, not during the HTTP request itself.

### Behavior
- POST request creates job
- background process performs scan work
- frontend polls for status

---

## 13.7 Initial Fake Worker

### Requirement
The system must first support a fake scan worker before real scanner integrations are added.

### Behavior
- simulate a job duration
- create mock findings
- complete scan successfully

This is required to prove the product loop before adding real integrations.

---

## 14. Non-Functional Requirements

### 14.1 Simplicity
The codebase should be easy for a solo builder to navigate.

### 14.2 Maintainability
Code should be organized by feature/module, not scattered by framework layer alone.

### 14.3 Safety
The product must default to passive, non-destructive behavior.

### 14.4 Explainability
Findings must be understandable and useful.

### 14.5 Local Developer Experience
The stack must run locally with minimal steps using Docker Compose plus app dev servers.

### 14.6 Extensibility
The design must make it possible to later add:
- Playwright crawling
- ZAP integration
- Kafka
- alerts
- authenticated scans

### 14.7 Operational Visibility
Even early versions should expose enough status and logs to understand what the system is doing.

---

## 15. Security / Compliance Constraints

ExposureGuard must operate only on targets the user owns or is authorized to scan.

Initial product constraints:
- no broad internet scanning
- no active exploitation posture
- no verification of leaked credentials against third-party live services
- no aggressive traffic generation as a default
- no scanning outside intended scope

The product should be framed as:
- authorized website health checking
- passive inspection first
- defensive engineering tooling

---

## 16. Proposed Technical Architecture

## 16.1 Frontend
**React + TypeScript**

Responsibilities:
- site management UI
- scan history UI
- findings UI
- job status polling
- operational dashboard experience

## 16.2 Backend
**Spring Boot modular monolith**

Responsibilities:
- REST API
- persistence
- async job lifecycle
- future integration orchestration

## 16.3 Database
**PostgreSQL + Spring Data JPA / Hibernate**

Responsibilities:
- sites
- scan jobs
- findings
- later: crawl artifacts, scan metadata, suppressions, alerts

## 16.4 Infra
**Docker Compose**

Responsibilities:
- local PostgreSQL
- later ZAP container
- later supporting services

## 16.5 Later Integrations
- Playwright Java for crawl discovery
- OWASP ZAP for passive security scanning
- Kafka for event-driven scan stages

---

## 17. Backend Module Design

Recommended modules:

### `site`
Owns site creation and retrieval

### `scan`
Owns scan jobs and lifecycle orchestration

### `finding`
Owns findings storage and retrieval

### `crawler`
Owns future page discovery

### `detector`
Owns future detection logic

### `integration`
Owns future ZAP / Playwright / Kafka plumbing

### `common`
Owns shared exception handling, shared types, and common utilities

### `config`
Owns application-wide config

---

## 18. Frontend Module Design

Recommended features:

### `sites`
- list sites
- create site
- view site details

### `scan-jobs`
- create scan
- list scan runs
- show status

### `findings`
- list findings
- show severity
- show evidence and remediation

Recommended app structure:
- feature-first
- route pages stay thin
- API access centralized per feature
- server state handled cleanly
- no premature global state complexity

---

## 19. Data Model

## 19.1 Site
Represents a website registered for scanning.

Suggested fields:
- `id`
- `name`
- `baseUrl`
- `createdAt`
- `updatedAt`

## 19.2 ScanJob
Represents one scan execution for a site.

Suggested fields:
- `id`
- `siteId`
- `status`
- `createdAt`
- `startedAt`
- `finishedAt`
- `failureReason` (nullable)

## 19.3 Finding
Represents an issue discovered by a scan.

Suggested fields:
- `id`
- `siteId`
- `scanJobId`
- `title`
- `type`
- `severity`
- `evidence`
- `affectedUrl`
- `remediation`
- `createdAt`

## 19.4 Later Entities
- `DiscoveredPage`
- `Asset`
- `ScanArtifact`
- `Suppression`
- `AlertRule`
- `NotificationEvent`

---

## 20. API Surface

## 20.1 Sites
- `POST /api/sites`
- `GET /api/sites`
- `GET /api/sites/{id}`

## 20.2 Scan Jobs
- `POST /api/sites/{id}/scan-jobs`
- `GET /api/sites/{id}/scan-jobs`

## 20.3 Findings
- `GET /api/sites/{id}/findings`
- `GET /api/scan-jobs/{id}/findings`

Future:
- resolve/ignore finding endpoints
- authenticated scan configuration endpoints
- scan settings endpoints

---

## 21. UX Requirements

## 21.1 Sites Page
Must let users:
- create a site
- see existing sites
- navigate into a site

## 21.2 Site Detail Page
Must show:
- site metadata
- scan history
- button to start scan
- current/latest scan status
- summary of findings or a link to findings view

## 21.3 Findings View
Must show:
- finding title
- severity
- affected URL
- evidence
- remediation
- associated scan/job context

## 21.4 States
The UI must handle:
- loading
- empty
- success
- failure
- in-progress scan

---

## 22. Metrics for Success

### Product Metrics
- number of sites created
- number of scans run
- scans completed successfully
- findings generated per scan
- average scan duration

### UX Metrics
- time from site creation to first scan completed
- time from scan completion to findings review
- internal tester ability to complete flow without guidance

### Technical Metrics
- backend boot success
- local full-stack run success
- scan job failure rate
- time to process a fake scan
- later: crawl duration, findings normalization time, passive scan duration

For MVP, these can mostly be observed manually.

---

## 23. Milestones

## Milestone 1: Project Scaffolding
Deliverables:
- Spring Boot backend generated
- React frontend generated
- PostgreSQL in Docker Compose
- health endpoint
- basic repo structure

## Milestone 2: CRUD + Persistence
Deliverables:
- `Site` model
- `ScanJob` model
- create/list endpoints
- DB persistence works

## Milestone 3: Fake Async Scan Loop
Deliverables:
- async worker
- job status transitions
- mock findings persisted

## Milestone 4: Dashboard
Deliverables:
- sites page
- site detail page
- scan job list
- findings list

## Milestone 5: Real Discovery
Deliverables:
- crawl module introduced
- discovered pages stored
- findings tied to real crawl artifacts

## Milestone 6: Passive Detection
Deliverables:
- custom passive detectors
- improved findings quality

## Milestone 7: ZAP Integration
Deliverables:
- baseline/passive scanning
- ingestion of scanner results

## Milestone 8: Advanced Platform
Deliverables:
- authenticated scans
- alerts
- observability
- Kafka/event pipeline later

---

## 24. MVP Acceptance Criteria

The MVP is successful when:

- a site can be created
- a scan job can be started from the UI
- the backend processes the job asynchronously
- scan status changes are visible
- findings are written to PostgreSQL
- findings can be viewed in the dashboard
- the app runs locally across frontend, backend, and database
- the experience is good enough for an internal demo

---

## 25. Risks

### 25.1 Builder Risk
The builder is learning Java/Spring while building the project.

**Mitigation:**
Keep architecture simple, start with CRUD, prove the product loop early.

### 25.2 Over-Engineering Risk
Too much focus on Kafka, microservices, or scanners too early may stall progress.

**Mitigation:**
Follow staged build order and do not add distributed systems before the monolith works.

### 25.3 Scope Risk
Security products can balloon in complexity quickly.

**Mitigation:**
Keep MVP focused on authorized, passive, obvious findings.

### 25.4 False Positive Risk
Detection quality may be noisy.

**Mitigation:**
Start with a narrow set of high-confidence detections and good evidence formatting.

### 25.5 Legal / Safety Risk
Scanning beyond owned/authorized targets would create trust and safety problems.

**Mitigation:**
Keep product positioning and UX clearly centered on customer-owned targets.

---

## 26. Open Questions

- Will the first “real” scanning milestone use Playwright first, ZAP first, or both together?
- Should domain verification exist in MVP, or wait until authenticated scans?
- Should findings support ignore/resolve in the MVP or later?
- Should the first scan use only fake findings until the dashboard feels complete?
- When should Flyway replace `ddl-auto: update`?
- When should auth/login be added to the product itself?

---

## 27. Recommended Build Order

1. Scaffold backend, frontend, and infra
2. Add PostgreSQL config and health endpoint
3. Build `Site` CRUD
4. Build `ScanJob` creation + listing
5. Add fake async worker
6. Add `Finding` persistence
7. Build dashboard pages
8. Improve status polling and UI
9. Add real crawl discovery
10. Add passive detectors
11. Add ZAP baseline integration
12. Add authenticated scan support
13. Add observability
14. Add Kafka only after core scan flow is working

---

## 28. Definition of Done for v0.1

ExposureGuard v0.1 is done when:

- the local stack is easy to run
- the product loop is complete
- the codebase is clean enough to extend
- the builder understands the core backend structure
- the dashboard communicates real product value
- the project is strong enough to demo and continue building

---

## 29. Appendix: Recommended v0.1 Stack

### Backend
- Java 21
- Spring Boot
- Spring Web
- Spring Data JPA
- Validation
- Lombok
- Actuator

### Frontend
- React
- TypeScript
- Vite

### Database
- PostgreSQL

### Local Infra
- Docker Compose

### Later
- Playwright Java
- OWASP ZAP
- Flyway
- Kafka
- Spring Security
- metrics/tracing

---

## 30. One-Line Product Statement

ExposureGuard helps developers safely inspect websites they own for exposed secrets, information leaks, and common public-facing issues through a simple scan-and-review workflow.
