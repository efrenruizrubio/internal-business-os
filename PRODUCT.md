# PRODUCT.md

# Internal Business OS — Product Definition

---

## Overview

Internal Business OS is a system designed to centralize project management, client visibility, and team collaboration for service-based businesses.

It replaces fragmented workflows across spreadsheets, messaging apps, and emails with a single structured platform.

---

## Core Users

### Admin

- Manages projects
- Assigns users
- Oversees system activity

### Developer (DEV)

- Works on assigned projects
- Views project details

### Client

- Views assigned projects
- Tracks progress

---

## Core Entities

### User

Represents a system user.

Fields:

- id
- name
- email
- role (ADMIN, DEV, CLIENT)

---

### Project

Represents a business project.

Fields:

- id
- name
- description
- status (ACTIVE, PAUSED, COMPLETED)

---

### ProjectMember

Represents assignment of a user to a project.

- Links users and projects
- Many-to-many relationship

---

### ActivityLog

Tracks actions performed in the system.

Examples:

- Project created
- Project updated
- User assigned

---

## Core Features

### Authentication

- Users log in with email and password
- System returns access and refresh tokens
- Role determines access level

---

### Project Management

Admins can:

- Create projects
- Update projects
- Assign users

---

### Project Visibility

- Admin → sees all projects
- Dev → sees assigned projects
- Client → sees assigned projects

---

### Activity Tracking

System logs:

- Project creation
- Project updates
- User assignments

Logs are tied to:

- Actor (user)
- Project (optional)

---

## Core Flows

### Login Flow

1. User submits credentials
2. System validates user
3. Tokens are issued
4. Session is stored client-side

---

### Project Creation Flow

1. Admin submits project data
2. System validates input
3. Project is created
4. Activity log is recorded

---

### Assignment Flow

1. Admin selects project and user
2. System validates both
3. Assignment is created
4. Activity log is recorded

---

### Client Dashboard Flow

1. Client logs in
2. System fetches assigned projects
3. UI displays filtered data

---

## Business Rules

- Only ADMIN can create or update projects
- Only ADMIN can assign users
- Users can only view projects they are assigned to (except ADMIN)
- Project status must be valid enum
- Duplicate assignments are not allowed

---

## Non-Goals (v1)

- Billing/invoicing
- Real-time updates (WebSockets)
- File uploads
- Notifications (email/push)

---

## Future Enhancements

- File attachments
- Comments system
- Notifications
- Audit logs expansion
- Role customization

---
