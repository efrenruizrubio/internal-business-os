import { Icons } from '@shared/components/icons'

export enum UserRole {
  ADMIN = 'ADMIN',
  DEV = 'DEV',
  CLIENT = 'CLIENT',
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
  icon: Icons
}

export interface SessionData {
  user: User
  menu: MenuItem[]
  allowedRoutes: string[]
}
