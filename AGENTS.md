# AGENTS.md

## Project
**ExposureGuard** is an authorized website security health checker.
Users submit a website they control; the system runs safe scans, finds exposed secrets / info leaks / common web issues, and reports severity, evidence, affected pages, and remediation.

## Product boundaries
- Defensive tooling only.
- Scan only customer-authorized targets.
- Safe-by-default: prefer passive checks first.
- Do not add exploit logic, internet-wide scanning, or risky “verification” of secrets.
- Optimize for a real, deployable B2B product, not a toy demo.

## Current target stack
- Backend: Java 17, Spring Boot
- Data: PostgreSQL, Spring Data JPA / Hibernate
- Frontend: React
- Crawling: Playwright Java
- Security scanning: OWASP ZAP
- Infra: Docker Compose
- Later: Kafka for scan pipeline stages

## Priorities
1. Correctness
2. Simplicity
3. Clear boundaries
4. Operability
5. Performance only when needed

## Architectural rules
- Start as a modular monolith.
- Keep layers explicit: `controller -> service -> repository`.
- Controllers handle HTTP only.
- Services hold business logic.
- Repositories handle persistence only.
- Do not expose JPA entities directly over the API; use request/response DTOs.
- Prefer clear modules over premature microservices.
- Add Kafka only when async stage separation is useful, not for resume-driven complexity.

## Coding rules
- Prefer small, focused classes and methods.
- Prefer composition over deep inheritance.
- Keep public APIs stable and explicit.
- Use constructor injection.
- Validate inputs at the boundary.
- Fail loudly with actionable errors.
- Avoid hidden magic and over-abstraction.
- Remove dead code and unused dependencies.
- Write code for the next maintainer, not for cleverness.

## Spring / backend rules
- Keep controllers thin.
- Put transactional business logic in services.
- Be explicit about transaction boundaries.
- Use JPA entities for persistence; use DTOs for API contracts.
- Prefer enums for bounded status fields like scan state / severity.
- Use migrations for schema changes.
- Add logging around job lifecycle and failure paths.
- For async jobs, make handlers idempotent.

## React / frontend rules
- Favor simple, readable component structure.
- Keep server state separate from UI state.
- Prefer a small number of reusable primitives.
- Avoid premature global state.
- Optimize for clarity of scan status, findings, and evidence.
- Security/reporting UI should feel operational, not flashy.

## Security / product rules
- Never assume permission to scan beyond the product’s allowed scope.
- Default to passive checks.
- Treat credentials, tokens, and scan artifacts as sensitive.
- Store only what is needed.
- Redact sensitive values in logs and UI when possible.
- Keep auditability in mind for scan jobs and findings.

## Database / schema rules
- Model the core explicitly: `Site`, `ScanJob`, `Finding`, later `DiscoveredPage`, `Notification`, etc.
- Prefer normalized schema for core workflow data.
- Add indexes for obvious lookup paths.
- Avoid schema churn from speculative features.

## Kafka / distributed systems rules
- Do not introduce Kafka until the single-process flow works.
- When added, use event names that reflect domain events.
- Design consumers to be idempotent.
- Plan for retries and dead-letter handling.
- Preserve ordering only where the product truly needs it.

## Testing rules
- Test business logic first.
- Add integration tests for repository + API paths.
- Mock external scanners/browsers when unit testing service behavior.
- Prefer a few meaningful tests over many brittle ones.

## Comments and explanations
- Keep comments short and high-signal.
- Explain **why**, not **what**.
- When making a non-obvious choice, add a 1-2 line justification.
- Avoid essay-style comments.
- For generated code or major refactors, include a concise note on tradeoffs.

### Explanation style
Use this style when summarizing a change:
- **What changed:** one sentence
- **Why:** one sentence
- **Tradeoff:** optional, one short sentence

Example:
> What changed: Moved scan status transitions into `ScanJobService`.
> Why: Keeps controllers thin and makes job lifecycle rules testable.
> Tradeoff: Slightly more service-layer code.

## Output expectations for coding agents
When implementing, prefer this order:
1. state assumptions briefly
2. make the smallest correct change
3. explain non-obvious decisions concisely
4. list follow-up work only if truly relevant

## Avoid
- overengineering
- speculative abstractions
- giant files
- hidden side effects
- premature optimization
- microservices too early
- mixing transport, business, and persistence concerns
- security theater without product value

## Default build sequence
1. CRUD + persistence
2. async scan job lifecycle
3. React dashboard
4. real crawling
5. passive detectors
6. ZAP integration
7. auth-protected scans
8. observability
9. Kafka/event-driven pipeline

## If unsure
Prefer the simpler design that:
- ships faster
- is easier to explain
- is easier to test
- keeps future distributed evolution possible
