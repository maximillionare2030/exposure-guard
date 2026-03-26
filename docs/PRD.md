# ExposureGuard PRD

## 1. Document Overview

**Product Name:** ExposureGuard
**Product Type:** Instant website exposure checker
**Stage:** MVP / v0.1 PRD
**Author:** Maximillian + AI-assisted build
**Status:** Draft
**Primary Audience:** Founder, builders, future collaborators, LLM/codegen assistants

---

## 2. Product Summary

ExposureGuard is a lightweight website checker that lets a user paste in a URL and run a safe, passive scan without creating an account first.

The product is designed to feel casual and instant rather than like a heavy developer security tool. A visitor lands on the homepage, enters a URL, and starts a test immediately. The system either returns a recent cached result for that URL or runs a fresh scan. When the scan completes, the user is prompted to create an account to unlock and keep the full report.

Free users can unlock up to **3 reports/tests** total. After that, they must upgrade to a paid plan to unlock additional reports.

The MVP should prioritize:
- zero-friction first interaction
- fast time to value
- safe and passive checks only
- clear, understandable reporting
- simple monetization around report access

---

## 3. Problem Statement

Many website owners want a quick answer to a simple question:

**“Does my site have any obvious public-facing issues?”**

The current market often forces users into one of two bad experiences:
- enterprise security products that feel too complex, expensive, or technical
- generic scanners with poor UX, unclear results, or little trust

For casual users, indie hackers, startup founders, marketers, and small teams, the biggest friction is often before the scan even starts:
- required sign-up before trying the product
- too much setup
- dashboards and configuration before value
- unclear output

There is room for a product that behaves more like a consumer utility:
- paste a URL
- run a safe test
- show useful results
- convert the user only after value is demonstrated

---

## 4. Product Vision

Build the easiest way for someone to check a website for obvious public-facing issues.

ExposureGuard should feel like:
- an instant web utility
- simple, modern, and low-friction
- trustworthy and safe
- useful within seconds
- premium only after the user sees value

The product should not feel like a security operations dashboard in the MVP. It should feel more like:
- “check my website now”
- “show me what is wrong”
- “let me unlock the full report”

---

## 5. Product Principles

### 5.1 Zero Friction First
A user should be able to start a test immediately from the landing page without signing in.

### 5.2 Value Before Account Creation
The account wall should appear after the user has already taken action and understands what the product does.

### 5.3 Safe by Default
The MVP should use passive, non-destructive checks only.

### 5.4 Casual Product Feel
The language, UX, and interaction model should feel simple and approachable, not enterprise-heavy.

### 5.5 Actionable Output
Reports must be readable, credible, and useful.

### 5.6 Cache for Speed and Cost Control
The platform should avoid rerunning the same URL unnecessarily when a recent result already exists.

### 5.7 Product Before Infrastructure
Prove the product loop and conversion flow before adding advanced architecture.

---

## 6. Goals

### 6.1 MVP Goals
The MVP should allow a visitor to:
- paste in a URL on the homepage
- start a test without signing in
- receive a fresh or cached scan result
- create an account to unlock the full report
- use up to 3 free report unlocks/tests
- upgrade after the free limit is reached

### 6.2 Product Goals
The product should:
- feel fast and simple
- generate trust quickly
- create a strong visitor-to-signup conversion loop
- create a clear free-to-paid monetization path

### 6.3 Technical Goals
The initial technical build should help the builder learn:
- Java + Spring Boot backend development
- REST API design
- React frontend flows
- async job orchestration
- caching strategy
- auth and usage metering
- Stripe or equivalent billing integration later in the flow

---

## 7. Non-Goals

The MVP will **not** include:
- enterprise dashboards
- team/org management
- full vulnerability management workflows
- internet-wide scanning
- offensive exploitation features
- aggressive scanning
- authenticated scans
- recurring background monitoring
- large-scale alert routing
- complex RBAC
- microservices
- Kafka-first architecture
- polished enterprise compliance workflows

The MVP is a simple URL-to-report product with account gating and a limited free tier.

---

## 8. Target Users

### 8.1 Primary User
**Indie hackers, founders, and solo builders**

Profile:
- owns or manages a website
- wants quick peace of mind
- is unlikely to tolerate heavy setup
- responds well to simple, self-serve tools

Needs:
- instant testing
- simple report language
- low friction
- clear call to action

### 8.2 Secondary User
**Small startup teams and marketers**

Profile:
- responsible for a public website
- may not have security expertise
- wants a quick external check

Needs:
- obvious findings only
- understandable recommendations
- easy sharing or saving later

### 8.3 Tertiary User
**Developers who want a lightweight first pass**

Profile:
- technical enough to act on findings
- willing to pay if the reports are useful
- does not want enterprise tooling for simple checks

---

## 9. Jobs To Be Done

### Functional JTBD
- When I have a website, I want to paste in the URL and quickly learn whether there are obvious public-facing issues.

### Emotional JTBD
- I want confidence that I have not accidentally exposed something embarrassing or risky.

### Economic JTBD
- I want to try the product before committing to signup or payment.

---

## 10. Core User Stories

### Instant Testing
- As a visitor, I want to paste in a URL and start a test immediately so I can get value before signing up.
- As a visitor, I want the product to feel fast and simple so I do not bounce before understanding it.

### Results and Unlocking
- As a visitor, I want to know that a scan finished and that a report exists so I feel motivated to create an account.
- As a visitor, I want to create an account only when I need the report so the signup feels earned.
- As a free user, I want to unlock up to 3 reports so I can meaningfully try the product.

### Caching
- As a user, I want repeated scans of the same URL to return cached results when appropriate so I do not wait unnecessarily.
- As the business, I want to avoid rerunning the same test repeatedly so infrastructure cost stays controlled.

### Monetization
- As a user, I want to understand when I have used my free tests and what I get by paying.
- As the business, I want a clean upgrade moment after the free quota is used.

---

## 11. MVP Scope

### Included in v0.1
- landing page with URL input
- no-login test start
- URL normalization and validation
- async scan job creation
- result caching by normalized URL
- cached-result lookup before rerun
- account creation flow after scan completion
- report unlock flow tied to account
- free quota of 3 unlocked reports/tests per user
- paywall once free quota is exhausted
- report page with severity, evidence, and remediation
- simple result history for signed-in users
- passive/safe scan posture only

### Included in v0.2 / early next
- better scan quality and detectors
- polished marketing site
- payment integration refinement
- saved report history improvements
- share/export basics

### Included in v0.3 / later
- recurring monitoring
- domain ownership verification
- richer scan categories
- alerts/notifications
- authenticated scans
- deeper reporting and trend views

---

## 12. User Flow

### 12.1 Core Visitor Flow
1. Visitor lands on the homepage.
2. Visitor enters a URL.
3. Visitor clicks **Run Test**.
4. System normalizes the URL.
5. System checks whether a recent cached result exists.
6. If cached, the system reuses the cached result.
7. If not cached, the backend creates a new scan job and processes it asynchronously.
8. Visitor sees progress / status messaging.
9. When the result is ready, the product prompts the visitor to create an account to unlock the full report.
10. If the visitor signs up and still has free quota remaining, the report is unlocked.
11. If the visitor has already used 3 free report unlocks/tests, the paywall is shown.

### 12.2 Signed-In Free User Flow
1. User signs in or creates an account.
2. User unlocks a report.
3. The system decrements remaining free quota.
4. The report is saved to the user account.
5. User can revisit previously unlocked reports.

### 12.3 Paid User Flow
1. User has exhausted the free tier.
2. User upgrades.
3. User can continue unlocking/running additional reports according to the paid plan.

---

## 13. Functional Requirements

## 13.1 URL Submission

### Requirement
The system must allow any visitor to submit a URL without authentication.

### Inputs
- raw URL input

### Behavior
- validate URL format
- normalize URL into a canonical cache key
- reject unsupported or malformed URLs
- create or reuse a scan context

### Outputs
- accepted submission state
- scan status or cached-result state

---

## 13.2 URL Normalization

### Requirement
The system must normalize equivalent URLs so duplicate scans are reduced.

### Behavior
Examples of normalization rules may include:
- lowercase hostname
- strip trailing slash where appropriate
- remove default ports
- standardize scheme handling rules
- optionally ignore tracking query parameters

### Output
- normalized URL string used as cache key

---

## 13.3 Scan Job Management

### Requirement
The system must create scan jobs for uncached URLs.

### Scan States
- `QUEUED`
- `RUNNING`
- `COMPLETED`
- `FAILED`
- `CACHED`

### Behavior
- create a scan job for a normalized URL when no valid cache exists
- process the scan asynchronously
- store timestamps and status
- attach findings/report data to the result

---

## 13.4 Cached Results

### Requirement
The system must avoid rerunning the same URL when a recent cached result exists.

### Behavior
- before running a new test, check for a recent successful result for the normalized URL
- if a valid cached result exists, serve it instead of running a new scan
- cached results should still respect account gating and quota rules for report access
- cache freshness window should be configurable

### Recommended MVP Default
- default cache freshness window: **7 days**

### Notes
The same cached result may be shown to multiple visitors if they request the same normalized URL within the freshness window.

---

## 13.5 Reporting / Results Access

### Requirement
The system must gate full report access behind account creation.

### Behavior
- users may start tests anonymously
- full report unlock requires account creation or sign-in
- once unlocked, the report is attached to the user account
- signed-in users can revisit their unlocked reports

### Minimum report content
- overall status / summary
- issue title
- severity
- affected URL or location
- evidence snippet
- explanation
- remediation guidance

---

## 13.6 Free Tier Limit

### Requirement
The system must enforce a 3-test/report free limit per account.

### Behavior
- each full report unlock consumes one free credit
- maximum free credits per account: **3**
- after the third free unlock, additional report access requires payment
- remaining credits must be visible in the UI

### MVP Interpretation
For v0.1, the 3-test limit should be treated as a **per-account lifetime free quota**, unless changed later by product decision.

---

## 13.7 Account System

### Requirement
The system must support account creation at the point of report unlock.

### Behavior
- account creation should be minimal and fast
- user can sign up with email/password or social login later
- the post-scan signup flow should preserve context and return the user directly to the report unlock state

---

## 13.8 Payment Gate

### Requirement
The system must block additional report unlocks after the free quota is exhausted.

### Behavior
- show clear upgrade messaging
- explain free quota usage
- do not silently rerun or unlock reports without payment once quota is exhausted

### MVP Note
Billing can be stubbed initially, but the product flow should be designed around a real future upgrade path.

---

## 13.9 User Report Library

### Requirement
Signed-in users must be able to revisit unlocked reports.

### Behavior
- show prior unlocked reports
- show report date
- show source URL
- show whether the report was fresh or cached at time of unlock

---

## 14. Non-Functional Requirements

### 14.1 Speed
The initial URL submission experience must feel fast and responsive.

### 14.2 Simplicity
The product should require minimal explanation.

### 14.3 Cost Control
Caching must reduce duplicate scan cost.

### 14.4 Maintainability
The codebase should remain easy for a solo builder to extend.

### 14.5 Safety
The product must default to passive, non-destructive behavior.

### 14.6 Explainability
Reports must be understandable to non-experts.

### 14.7 Conversion Clarity
The product must clearly communicate when signup is required and when payment is required.

---

## 15. Trust, Safety, and Compliance Constraints

ExposureGuard must operate as a defensive, passive website checker.

Initial product constraints:
- no aggressive or destructive scanning
- no exploitation workflows
- no credential verification against third-party live services
- no internet-wide scanning mode
- no active attack behavior

The product should be framed as:
- website exposure checking
- passive inspection first
- informational and defensive reporting

Because the product allows URL submission without upfront sign-in, abuse controls should be considered early, such as:
- rate limiting
- CAPTCHA or bot checks if needed
- IP-based throttling
- queue backpressure

---

## 16. Product UX Requirements

## 16.1 Landing Page
Must let visitors:
- understand the product in seconds
- paste in a URL immediately
- start a test without creating an account

Must communicate:
- what the product checks
- that the first step is instant
- that signup is only required to unlock the full report

## 16.2 Pre-Unlock Result State
Must show:
- that the test completed or a cached result was found
- enough progress and credibility to encourage signup
- a clear CTA to unlock the full report

## 16.3 Signup Gate
Must:
- feel lightweight
- preserve the current scan/report context
- return the user to the report immediately after signup

## 16.4 Report View
Must show:
- summary header
- findings list
- severity indicators
- evidence
- remediation
- report source URL
- report timestamp
- cached vs fresh label if useful

## 16.5 Free Usage Messaging
Must show:
- remaining free tests/report unlocks
- what happens after quota is exhausted
- upgrade CTA when needed

---

## 17. Proposed Technical Architecture

## 17.1 Frontend
**React + TypeScript**

Responsibilities:
- landing page and submission flow
- status/progress UI
- signup and unlock flow
- report UI
- account report history
- upgrade/paywall UI

## 17.2 Backend
**Spring Boot modular monolith**

Responsibilities:
- URL intake and normalization
- scan job orchestration
- cache lookup
- findings persistence
- account/report entitlement logic
- quota enforcement

## 17.3 Database
**PostgreSQL + Spring Data JPA / Hibernate**

Responsibilities:
- users
- scan jobs
- normalized targets
- reports
- findings
- report unlocks / entitlements
- usage counts

## 17.4 Infra
**Docker Compose**

Responsibilities:
- local PostgreSQL
- later supporting services

## 17.5 Later Integrations
- OWASP ZAP or equivalent passive scanner
- Playwright for discovery later if needed
- Stripe for payments
- email provider for auth/report notifications

---

## 18. Backend Module Design

Recommended modules:

### `submission`
Owns URL intake and normalization

### `scan`
Owns scan jobs and lifecycle orchestration

### `cache`
Owns cache lookup and freshness rules

### `report`
Owns report generation and retrieval

### `finding`
Owns findings storage and formatting

### `auth`
Owns accounts and session management

### `billing`
Owns quota and paid entitlement logic

### `common`
Owns shared exceptions, utilities, and base types

### `config`
Owns application-wide configuration

---

## 19. Frontend Module Design

Recommended features:

### `landing`
- hero/value prop
- URL input
- submit action

### `scan-status`
- queued/running/completed states
- cached-result messaging

### `auth-gate`
- signup/login flow
- restore report context after auth

### `reports`
- report detail view
- findings list
- summary cards

### `account`
- unlocked report history
- usage/remaining credits
- upgrade state

Recommended app structure:
- feature-first
- route pages stay thin
- API access centralized per feature
- minimal global state
- clean handling of async server state

---

## 20. Data Model

## 20.1 User
Suggested fields:
- `id`
- `email`
- `passwordHash` or external auth reference
- `planType`
- `freeCreditsUsed`
- `createdAt`
- `updatedAt`

## 20.2 Target
Represents a normalized website target.

Suggested fields:
- `id`
- `normalizedUrl`
- `displayUrl`
- `createdAt`
- `updatedAt`

## 20.3 ScanJob
Represents one scan execution.

Suggested fields:
- `id`
- `targetId`
- `status`
- `cacheHit` (boolean)
- `createdAt`
- `startedAt`
- `finishedAt`
- `failureReason` (nullable)

## 20.4 Report
Represents a completed result set.

Suggested fields:
- `id`
- `targetId`
- `scanJobId`
- `summary`
- `score` or aggregate status (optional)
- `isCachedEligible`
- `expiresAt`
- `createdAt`

## 20.5 Finding
Represents one issue discovered.

Suggested fields:
- `id`
- `reportId`
- `title`
- `type`
- `severity`
- `evidence`
- `affectedUrl`
- `remediation`
- `createdAt`

## 20.6 ReportUnlock
Represents a user's entitlement to access a report.

Suggested fields:
- `id`
- `userId`
- `reportId`
- `unlockType` (`FREE`, `PAID`)
- `createdAt`

---

## 21. API Surface

## 21.1 Public Submission
- `POST /api/tests`
- `GET /api/tests/{id}/status`
- `GET /api/tests/{id}/unlock-state`

## 21.2 Auth
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/me`

## 21.3 Reports
- `POST /api/reports/{id}/unlock`
- `GET /api/reports/{id}`
- `GET /api/me/reports`

## 21.4 Usage / Billing
- `GET /api/me/usage`
- `POST /api/billing/checkout` (later)

Future:
- export/share endpoints
- recurring monitoring endpoints
- notification settings

---

## 22. Metrics for Success

### Product Metrics
- homepage to test-start conversion
- test-start to signup conversion
- signup to report-unlock conversion
- free-to-paid conversion after quota exhaustion
- repeat usage rate

### UX Metrics
- time from landing to test start
- time from test start to result ready
- drop-off at signup gate
- drop-off at paywall

### Technical Metrics
- cache hit rate
- scan completion rate
- average fresh scan duration
- average cached result response time
- abuse/rate-limit triggers

---

## 23. Milestones

## Milestone 1: Foundation
Deliverables:
- frontend and backend scaffolding
- PostgreSQL in Docker Compose
- health endpoint
- basic landing page

## Milestone 2: URL Submission + Fake Scan Loop
Deliverables:
- URL validation
- normalized URL handling
- async fake scan worker
- job status polling

## Milestone 3: Report Model + Cache
Deliverables:
- report persistence
- findings persistence
- cache lookup logic
- cache freshness rules

## Milestone 4: Auth Gate + Unlock Flow
Deliverables:
- signup/login flow
- report unlock flow
- restore post-auth context
- saved report history

## Milestone 5: Free Tier Metering
Deliverables:
- free quota tracking
- 3-report free limit
- upgrade/paywall screen

## Milestone 6: Real Detection Engine
Deliverables:
- passive detectors
- real findings instead of only fake data
- better report quality

## Milestone 7: Billing + Polish
Deliverables:
- payment integration
- plan enforcement
- conversion polish

---

## 24. MVP Acceptance Criteria

The MVP is successful when:
- a visitor can paste in a URL without signing in
- a test can be started immediately
- the backend either returns a cached result or runs a fresh scan
- scan status is visible in the UI
- a full report exists when the scan completes
- the user must create an account to unlock the report
- the system enforces a maximum of 3 free report unlocks/tests per account
- the user sees a paywall after exhausting free quota
- unlocked reports are saved to the user account
- the product is simple enough for an internal demo and early user testing

---

## 25. Risks

### 25.1 Abuse Risk
Anonymous submission can attract bot or abusive traffic.

**Mitigation:**
Rate limits, IP throttling, queue controls, and optional CAPTCHA.

### 25.2 Confusing Gating Risk
If the signup or paywall appears too early or too hard, users may feel tricked.

**Mitigation:**
Be explicit that running the test is free and signup is required only to unlock the full report.

### 25.3 Cache Quality Risk
Serving stale results may reduce trust.

**Mitigation:**
Use configurable cache windows, clear report timestamps, and later allow paid reruns/refreshes.

### 25.4 Detection Quality Risk
Weak findings reduce conversion.

**Mitigation:**
Start with narrow, high-confidence checks and strong explanation.

### 25.5 Scope Risk
The product can drift back into a full security platform too early.

**Mitigation:**
Keep the MVP tightly focused on paste URL -> run test -> unlock report.

---

## 26. Open Questions

- Should users see a tiny preview before signup, or only the “report ready” state?
- Should the 3 free tests be lifetime, monthly, or launch-configurable?
- Should paid plans unlock unlimited tests, credits, or a monthly quota?
- Should a cached result consume a free credit when unlocked by a new user?
- Should users be allowed to force-refresh a cached URL on a paid plan only?
- What is the ideal cache freshness window for trust vs cost?
- Is domain verification needed before the product scales publicly?

---

## 27. Recommended Build Order

1. Scaffold frontend, backend, and database
2. Build landing page with URL submission
3. Add URL validation and normalization
4. Add fake async scan loop
5. Persist reports and findings
6. Add cache lookup and freshness logic
7. Build report-ready and unlock states
8. Add signup/login flow
9. Add free quota enforcement
10. Add paywall/upgrade flow
11. Replace fake findings with real passive detectors
12. Improve trust, polish, and conversion

---

## 28. Definition of Done for v0.1

ExposureGuard v0.1 is done when:
- the landing page instantly communicates the product
- users can start a test with no sign-in
- caching prevents duplicate reruns for the same URL within the freshness window
- signup is required to unlock results
- free accounts get 3 report unlocks/tests
- paid gating works after quota exhaustion
- the product feels simple, casual, and credible
- the codebase is clean enough to keep building on

---

## 29. Recommended v0.1 Stack

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
- OWASP ZAP or similar passive engine
- Playwright
- Stripe
- email auth provider
- Flyway

---

## 30. One-Line Product Statement

ExposureGuard lets anyone paste in a website URL, run a safe instant check without signing in, and unlock a clear report through a simple freemium flow.
