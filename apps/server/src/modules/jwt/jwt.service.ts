import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { CreateTokenPayload, JWTPayload } from './jwt.types'
import * as jwt from 'jsonwebtoken'

@Injectable()
export class JwtService {
  private expirationTime = 60 * 10

  constructor(private configService: ConfigService) {}

  sign(payload: CreateTokenPayload) {
    const secret = this.configService.get<string>('JWT_SECRET_KEY')!
    const issuer = this.configService.get<string>('JWT_ISSUER')!

    return jwt.sign(payload, secret, {
      expiresIn: this.expirationTime,
      algorithm: 'HS256',
      issuer,
    })
  }

  verify(token: string) {
    const secret = this.configService.get<string>('JWT_SECRET_KEY')!
    const issuer = this.configService.get<string>('JWT_ISSUER')!

    try {
      const decoded = jwt.verify(token, secret, {
        algorithms: ['HS256'],
        issuer,
      }) as JWTPayload
      return decoded
    } catch (error) {
      return null
    }
  }

  refresh(token: string) {
    const payload = this.verify(token)
    if (!payload) {
      return null
    }

    const { email, name, role, sub } = payload

    return this.sign({ email, name, role, sub })
  }
}
