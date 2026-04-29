# SYSTEM_DESIGN.md

# Internal Business OS — System Design

---

## Overview

This document describes the architecture, structure, and technical decisions of the system.

The system follows a modular fullstack architecture:

- Frontend: Next.js
- Backend: NestJS
- Database: PostgreSQL
- Monorepo: Turborepo

---

## High-Level Architecture

Client (Next.js)
↓
API Layer (NestJS)
↓
Database (PostgreSQL)

---

## Monorepo Structure

```txt
apps/
  client/
  server/

packages/
  types/
```

## Frontend Architecture

### Framework

- Next.js (App Router)
- Tailwind CSS 4

---

### State Management

#### Zustand (Global State)

Used only for:

- Authentication state
- UI-level global state

Not used for:

- Server data

---

#### TanStack Query (Server State)

Used for:

- Fetching API data
- Caching
- Managing stale data

---

### Feature-Based Structure

```
features/
  auth/
  projects/
  activity/
```

Each feature contains:

- API layer
- Hooks
- Components
- Types
- Schemas

### Data Flow (Client)

UI Component
-> Hook (React Query)
-> API Layer
-> Backend

## Backend Architecture

### Framework

- NestJS

---

### Module Structure

```
auth/
users/
projects/
activity-log/
```

Each module contains:

- Controller
- Service
- DTOs
- Entities

---

### Responsibilities

#### Controller

- Handle HTTP requests
- Validate input
- Call service

#### Service

- Business logic
- Data manipulation
- Error handling

---

### Database Design

#### Core Tables

- users
- projects
- project_members
- activity_logs

#### Relationships

- users ↔ projects (many-to-many)
- activity_logs → users
- activity_logs → projects (optional)

### API Design

#### Principles

- RESTful endpoints
- Clear resource naming
- Consistent error responses
- Role-based access control

---

### Authentication

- JWT-based authentication
- Access token + refresh token
- Role-based authorization via guards

### Error Handling

- Centralized error handling in backend
- Consistent error response format
- No stack traces exposed in production

### Deployment

- Docker containers
- Traefik reverse proxy
- HTTPS enabled
- Only production is publicly exposed

### Key Technical Decisions

#### Zustand vs TanStack Query

- Zustand → global UI/session state
- TanStack Query → server state

This prevents duplication and improves cache handling.

---

#### Type Separation

Types are defined in separate files to:

- Improve readability
- Reduce file complexity
- Enable reuse

---

#### Monorepo

Using turborepo for:

- Shared types
- Unified scripts
- Scalable structure

---

### Tradeoffs

#### Simplicity vs Flexibility

- v1 prioritizes simplicity
- Some features intentionally limited

#### No Real-Time Updates

- Avoids complexity
- Can be added later if needed

---

### Future Improvements

- WebSocket support
- Advanced caching strategies
- Microservices (if scale requires)
- Background jobs (queues)
