import type { Request } from 'express'
import type { UserJWT } from '../jwt/jwt.types'

export type AuthenticatedRequest = Request & {
  user?: UserJWT
  cookies: {
    accessToken?: string
    refreshToken?: string
  }
}
