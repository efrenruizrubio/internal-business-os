# CODE_STYLE.md

# Code Style Guide

This document defines the coding standards for Internal Business OS.

The goal is to keep the codebase clean, scalable, readable, and easy to maintain as the project grows.

---

## Core Principles

- Keep files small and focused.
- Prefer feature-based organization.
- Separate business logic from UI.
- Separate types from implementation files.
- Avoid deep relative imports.
- Write code that is easy to read before it is clever.
- Build mobile-first on the client.
- Keep backend modules isolated and explicit.

---

## Tooling

This project uses:

- ESLint with Standard style rules
- Prettier for formatting
- TypeScript
- Bun
- Turborepo

Formatting and linting rules should be enforced through project scripts.

Recommended root scripts:

```json
{
  "scripts": {
    "lint": "turbo lint",
    "format": "prettier --write .",
    "typecheck": "turbo typecheck"
  }
}
```

---

## Formatting Rules

Follow Standard-style JavaScript/TypeScript conventions:

- No semicolons.
- Single quotes.
- Prefer const when reassignment is not needed.
- Avoid unused variables.
- Keep expressions readable.
- Let Prettier handle spacing and line wrapping.

Example:

```typescript
const projectName = 'Internal Business OS'
```

---

## File Size Rules

Avoid large files.

Recommended limits:

- Components: 150 lines or less
- Hooks: 100 lines or less
- Services: 200 lines or less
- Controllers: 150 lines or less
- Utility files: 100 lines or less

If a file grows too much, split it by responsibility.

Avoid files with 400+ lines unless there is a strong reason.

---

## TypeScript Rules

Types must not live inside implementation files unless they are extremely small and only used locally.

Prefer separate type files.

Allowed locations:

```
same-folder/
  project-card.tsx
  project-card.types.ts
```

or:

```
feature/
  types/
    project.types.ts
```

Rules:

- Shared types go in packages/types.
- Feature-specific types go inside the feature folder.
- Component props should live in a nearby .types.ts file.
- API response/request types should be reusable.
- Avoid any.
- Prefer unknown when the type is truly unknown.
- Avoid large inline object types in function parameters.
- Prefer explicit return types for exported functions.

Example:

```
components/project-card/
  project-card.tsx
  project-card.types.ts
```

```typescript
// project-card.types.ts
export type ProjectCardProps = {
  name: string
  status: ProjectStatus
}
```

```typescript
// project-card.tsx
import type { ProjectCardProps } from './project-card.types'

export const ProjectCard = ({ name, status }: ProjectCardProps) => {
  return (
    <article>
      <h3>{name}</h3>
      <span>{status}</span>
    </article>
  )
}
```

---

## Import Rules

Use path aliases instead of deep relative imports.

Bad:

```typescript
import { Button } from '../../../components/button'
```

Good:

```typescript
import { Button } from '@/components/button'
```

Rules:

- Use @/\* for app-level imports.
- Use package imports for shared packages.
- Use relative imports only for files in the same folder.
- Prefer type-only imports when importing types.

Example:

```typescript
import type { Project } from '@internal-business-os/types'
```

---

## Naming Conventions

### Files

Use kebab-case for files and folders.

```
project-card.tsx
project-card.types.ts
use-auth-store.ts
project.service.ts
```

### React Components

Use PascalCase for component names.

```typescript
export const ProjectCard = () => {}
```

### Hooks

Use camelCase and start with `use`.

```typescript
export const useProducts = () => {}
```

### Stores

Use the `use*Store` naming pattern.

```typescript
export const useAuthStore = create<AuthStore>()(...)
```

### Services

Use descriptive names.

```typescript
projectService
authService
```

### Backend Classes

Follow NestJS conventions.

```typescript
ProjectsController
ProjectsService
ProjectsModule
```

---

## Client App Standards

The client app uses:

- Next.js
- Tailwind CSS 4
- Zustand
- Sileo
- TanStack Query
- React Hook Form
- Zod

---

### Next.js Rules

Use Next.js as the application framework.

Rules:

- Prefer server components by default when no client interactivity is needed.
- Use client components only when required.
- Keep route files thin.
- Move business logic into services, hooks, or feature folders.
- Avoid putting large UI logic directly inside `page.tsx`.

Recommended structure:

```
apps/client/src/
  app/
    login/
      page.tsx
    dashboard/
      page.tsx

  components/
    ui/

  features/
    auth/
    projects/

  lib/
    api/
    query/
    toast/

  stores/
```

---

### Tailwind CSS 4 Rules

Use Tailwind for styling.

Rules:

- Build mobile-first.
- Add larger breakpoint styles only when needed.
- Avoid excessive custom CSS.
- Extract repeated UI patterns into components.
- Keep class names readable.
- Prefer layout consistency over visual complexity.

Example:

```typescript
<section className='flex flex-col gap-4 p-4 md:grid md:grid-cols-2'>
```

### Zustand Rules

Use Zustand only for global client state.

Good use cases:

- Auth/session state
- UI preferences
- Global layout state

Avoid using Zustand for:

- Server data
- API responses
- Lists fetched from the backend
- Cached project data

Server data belongs in TanStack Query.

Recommended structure:

```
features/auth/
  stores/
    use-auth-store.ts
    use-auth-store.types.ts
```

Rules:

- Store files must be small.
- Store types must be in a separate .types.ts file.
- Do not mix API requests directly inside stores unless there is a strong reason.
- Prefer services/hooks for async operations.
- Persist only what is necessary.

---

### TanStack Query Rules

Use TanStack Query for server state.

Use it for:

- Fetching projects
- Fetching users
- Fetching activity logs
- Caching API responses
- Invalidating stale data after mutations

Do not use Zustand for data that comes from the backend.

Recommended structure:

```
features/projects/
  api/
    projects.api.ts
    projects.api.types.ts
  hooks/
    use-projects.ts
    use-project.ts
    use-create-project.ts
```

Rules:

- Query keys must be centralized.
- Mutations must invalidate affected queries.
- API functions must be separated from hooks.
- Hooks must not contain raw fetch logic.
- Response types must be imported from type files.

Example query key file:

```typescript
export const projectQueryKeys = {
  all: ['projects'] as const,
  detail: (id: string) => ['projects', id] as const,
}
```

---

### Sileo Toast Rules

Use Sileo for toast notifications.

Use it for:

- Success feedback
- Error feedback
- Important user actions
- Form submission results

Rules:

- Configure the Sileo Toaster once in the root layout/provider.
- Do not import the toaster setup in every page.
- Keep toast messages short and human-readable.
- Do not expose technical backend errors directly to the user.

Recommended structure:

```
lib/toast/
  toast.ts
```

Example usage style:

```typescript
import { sileo } from 'sileo'

sileo.success('Project created')
```

---

### Forms and Validation

Use:

- React Hook Form for form state
- Zod for validation schemas

Rules:

- Form schemas must live outside component files.
- Form types must live outside component files.
- Forms should not contain API logic directly.
- Submit handlers should call mutation hooks or services.

Recommended structure:

```
features/projects/
  schemas/
    project-form.schema.ts
  types/
    project-form.types.ts
  components/
    create-project-form.tsx
```

---

## Backend Standards

The backend uses:

- NestJS
- TypeScript

---

### NestJS Module Structure

Use NestJS modules to isolate domains.

Recommended modules:

```
auth/
users/
projects/
activity-log/
```

Each module should own its domain logic.

Recommended structure:

```
projects/
  dto/
  entities/
  projects.controller.ts
  projects.service.ts
  projects.module.ts
  projects.types.ts
```

---

### Backend Type Rules

Types must be separated from implementation files.

Rules:

- DTOs go in `dto/`.
- Entities/models go in `entities/`.
- Reusable types go in `.types.ts`.
- Avoid inline object types in services/controllers.
- Avoid `any`.

Example:

```
projects/
  projects.service.ts
  projects.types.ts
```

---

### Controller Rules

Controllers should be thin.

Controllers should:

- Receive requests
- Validate route/body data through DTOs
- Call services
- Return responses

Controllers should not:

- Contain business logic
- Query the database directly
- Format complex data inline

---

### Service Rules

Services contain business logic.

Services should:

- Validate business rules
- Coordinate persistence
- Return clean results
- Throw meaningful errors

Services should not:

- Handle HTTP-specific concerns
- Return raw unexpected database errors
- Grow into large multipurpose files

---

### Error Handling Rules

Errors should be consistent.

Rules:

- Do not leak stack traces in production.
- Return clear user-safe messages.
- Use framework exceptions where appropriate.
- Centralize unexpected error formatting.

---

### Environment Variables

Environment variables must be documented.

Rules:

- Never commit real secrets.
- Use .env.example.
- Validate required environment variables on startup when possible.

---

## Documentation Rules

Documentation should explain decisions, not just commands.

Required docs:

```
README.md
PRODUCT.md
SYSTEM_DESIGN.md
CODE_STYLE.md
```

Documentation should be clear enough for:

- Future you
- Recruiters
- Technical reviewers
- Potential clients

---

## Pull Request Rules

Every PR should answer:

- What changed?
- Why was it changed?
- How was it tested?

Avoid large PRs.

Prefer one ticket per PR.
