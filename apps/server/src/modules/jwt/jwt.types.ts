import { User } from '../user/user.types'

export type UserJWT = Omit<User, 'id' | 'passwordHash' | 'refreshTokenHash'>

export interface CreateTokenPayload {
  sub: string
  user: UserJWT
}

export type RefreshTokenPayload = Omit<CreateTokenPayload, 'user'>

export interface AccessJwtPayload {
  user: UserJWT
  sub: string
  iat: number
  aud: string
  exp: number
  iss: string
}

export type RefreshJwtPayload = Pick<AccessJwtPayload, 'sub'> & {
  type: string
}

export interface JWTPayload {
  name: string
  email: string
  role: string
  sub: string
  iat: number
  exp: number
  iss: string
}
