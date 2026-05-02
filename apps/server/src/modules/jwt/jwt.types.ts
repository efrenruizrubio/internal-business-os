export interface CreateTokenPayload {
  sub: string
  email: string
  name: string
  role: string
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
