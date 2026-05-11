import { UserRole } from '@/generated/prisma/enums'
import { AllowedRoutes, Menu } from './menu.types'

export const MENU_BY_ROLE: Menu = {
  [UserRole.ADMIN]: [{ label: 'Dashboard', href: '/dashboard', icon: 'dashboard' }],
  [UserRole.CLIENT]: [{ label: 'Dashboard', href: '/dashboard', icon: 'dashboard' }],
  [UserRole.DEV]: [{ label: 'Dashboard', href: '/dashboard', icon: 'dashboard' }],
}

export const ALLOWED_ROUTES_BY_ROLE: AllowedRoutes = {
  [UserRole.ADMIN]: ['/dashboard'],
  [UserRole.CLIENT]: ['/dashboard'],
  [UserRole.DEV]: ['/dashboard'],
}
