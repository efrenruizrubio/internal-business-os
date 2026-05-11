import type { Request } from 'express'
import type { UserJWT } from '../jwt/jwt.types'
import { MenuItem } from '../menu/menu.types'

export type AuthenticatedRequest = Request & {
  user?: UserJWT
  cookies: {
    accessToken?: string
    refreshToken?: string
  }
}

export interface SessionData {
  user: UserJWT
  menu: MenuItem[]
  allowedRoutes: string[]
}
