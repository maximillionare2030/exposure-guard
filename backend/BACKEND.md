# ExposureGuard Backend

The backend is the core application for ExposureGuard. It manages sites, scan jobs, findings, and the scan pipeline. It starts as a modular monolith in Spring Boot and is intentionally structured by feature so the codebase stays easy to navigate as the product grows.

## Goals

The backend should:

- expose REST APIs for the frontend
- persist core product data in PostgreSQL
- manage the scan job lifecycle
- run safe background scan workflows
- integrate later with Playwright and OWASP ZAP
- stay simple at first and avoid premature microservices

## Tech stack

- Java 21
- Spring Boot
- Spring Web
- Spring Data JPA / Hibernate
- PostgreSQL
- Validation
- Lombok
- Actuator

Later additions:

- Playwright Java
- OWASP ZAP
- Kafka
- Flyway
- Spring Security
- Observability tooling

---

## Architecture approach

This backend is a **modular monolith**.

That means:

- one deployable backend service at the start
- code organized into clear feature modules
- each module owns its controller, service, repository, DTOs, and domain model
- boundaries are enforced through package structure and discipline, not separate services

This is intentional. It keeps development fast while still preparing the codebase for future service extraction if needed.

---

## Recommended file structure

```text
backend/
├── pom.xml
├── mvnw
├── mvnw.cmd
├── src/
│   ├── main/
│   │   ├── java/com/exposureguard/backend/
│   │   │   ├── BackendApplication.java
│   │   │   ├── config/
│   │   │   ├── common/
│   │   │   ├── site/
│   │   │   ├── scan/
│   │   │   ├── finding/
│   │   │   ├── crawler/
│   │   │   ├── detector/
│   │   │   ├── integration/
│   │   │   └── health/
│   │   └── resources/
│   │       ├── application.yml
│   │       └── db/
│   │           └── migration/
│   └── test/
│       └── java/com/exposureguard/backend/
