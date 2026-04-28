# 🧠 Internal Business OS

A production-ready internal system designed to replace spreadsheets, messaging chaos, and fragmented workflows in small-to-medium service businesses.

This platform centralizes **project management, client visibility, and team collaboration** into a single, role-based application.

---

## 🚀 Overview

Internal Business OS is a fullstack system that enables:

- Teams to manage projects and assignments efficiently
- Clients to securely track project progress
- Businesses to maintain structured workflows and visibility

Built with a **modern, scalable architecture**, this project reflects real-world production patterns and best practices.

---

## 🏗️ Architecture

This project uses a **monorepo structure** powered by Turborepo:

```
apps/
  client/        → Next.js frontend (App Router)
  server/        → NestJS backend (modular architecture)

packages/
  types/         → Shared TypeScript types
  ui/            → Shared UI components (optional)
```

---

## 🧰 Tech Stack

### Frontend

- Next.js (App Router)
- Zustand (state management)
- React Query (server state)
- React Hook Form + Zod (forms & validation)
- Tailwind CSS (styling)

### Backend

- NestJS (modular architecture)
- PostgreSQL (single shared instance)
- JWT Authentication (access + refresh tokens)

### DevOps

- Turborepo (monorepo orchestration)
- Docker (containerization)
- Traefik (reverse proxy & SSL)
- CI/CD pipelines (GitLab)

---

## 🔐 Core Features

### Authentication & Authorization

- Secure login with JWT (access & refresh tokens)
- Role-based access control:
  - `ADMIN`
  - `DEV`
  - `CLIENT`

---

### 📦 Project Management

- Create and manage projects
- Assign users (developers and clients)
- Track project status:
  - Active
  - Paused
  - Completed

---

### 👁️ Client Dashboard

- Clients can log in and:
  - View assigned projects
  - Track progress
  - Access relevant information

---

### 📜 Activity Logs

- Track key actions across the system
- Provide visibility into:
  - Project updates
  - User actions

---

### ⚙️ System Reliability

- Global error handling
- Input validation (Zod / DTOs)
- Loading and error states in UI
- Mobile-first responsive design

---

## 📱 Design Principles

- Mobile-first UI
- Clean and minimal UX
- Clear separation of concerns
- Scalable and maintainable structure

---

## 📌 Getting Started

### Prerequisites

- Node.js / Bun
- Docker
- PostgreSQL

---

### Installation

```bash
# Install dependencies
bun install

# Run development
bun run dev
```

---

### Environment Variables

Each app has its own `.env` file.

Example:

```
DATABASE_URL=
JWT_SECRET=
JWT_REFRESH_SECRET=
```

---

## 🚀 Deployment

- Applications are deployed using Docker containers
- Reverse proxy handled via Traefik
- Only production environments are publicly accessible
- Shared PostgreSQL instance across services

---

## ✅ Project Status

This project is actively developed in structured sprints:

- [x] Auth & Role System
- [x] Project Management Core
- [x] Client Dashboard
- [ ] Notifications
- [ ] File Uploads
- [ ] Audit Logs

---

## 🎯 Purpose

This project is part of a professional portfolio to demonstrate:

- End-to-end system design
- Production-ready fullstack architecture
- Real-world business problem solving

---

## 🧠 Key Learnings

- Designing scalable modular backends with NestJS
- Managing server/client state effectively
- Implementing role-based systems
- Structuring monorepos for real-world applications
- Shipping production-ready software

---

## 🤝 Contributing

This is a portfolio project, but contributions and feedback are welcome.

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Efrén Ruíz
Fullstack Developer — Focused on building scalable, production-ready systems.

---
