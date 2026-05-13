import { UserRole } from '@/generated/prisma/enums'
import { AllowedRoutes, Menu } from './menu.types'

export const MENU_BY_ROLE: Menu = {
  [UserRole.ADMIN]: [
    { label: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
    { label: 'Projects', href: '/projects', icon: 'archive' },
  ],
  [UserRole.CLIENT]: [
    { label: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
    { label: 'Projects', href: '/projects', icon: 'archive' },
  ],
  [UserRole.DEV]: [
    { label: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
    { label: 'Projects', href: '/projects', icon: 'archive' },
  ],
}

export const ALLOWED_ROUTES_BY_ROLE: AllowedRoutes = {
  [UserRole.ADMIN]: ['/dashboard', '/projects'],
  [UserRole.CLIENT]: ['/dashboard', '/projects'],
  [UserRole.DEV]: ['/dashboard', '/projects'],
}
