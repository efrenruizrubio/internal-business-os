export enum UserRole {
  ADMIN,
  DEV,
  CLIENT,
}

export interface User {
  name: string
  email: string
  role: UserRole
  createdAt: Date
  updatedAt: Date
}

export interface MenuItem {
  label: string
  href: string
  icon: string
}

export interface SessionData {
  user: User
  menu: MenuItem[]
  allowedRoutes: string[]
}
