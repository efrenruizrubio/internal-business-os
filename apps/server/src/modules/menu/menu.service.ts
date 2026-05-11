import { Injectable } from '@nestjs/common'
import { ALLOWED_ROUTES_BY_ROLE, MENU_BY_ROLE } from './menu.constants'
import { UserRole } from '@/generated/prisma/enums'

@Injectable()
export class MenuService {
  getMenuOptions(role: UserRole) {
    return MENU_BY_ROLE[role] ?? []
  }

  getAllowedRoutes(role: UserRole) {
    return ALLOWED_ROUTES_BY_ROLE[role] ?? []
  }
}
