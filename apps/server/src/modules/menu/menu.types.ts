import { UserRole } from '@/generated/prisma/enums'

export interface MenuItem {
  label: string
  href: string
  icon: string
}

export type Menu = Record<UserRole, MenuItem[]>
export type AllowedRoutes = Record<UserRole, string[]>
