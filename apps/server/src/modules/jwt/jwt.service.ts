import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import {
  AccessJwtPayload,
  CreateTokenPayload,
  RefreshJwtPayload,
  RefreshTokenPayload,
} from './jwt.types'
import * as jwt from 'jsonwebtoken'

@Injectable()
export class JwtService {
  private secret: string
  private issuer: string

  constructor(private configService: ConfigService) {
    this.secret = this.configService.get<string>('JWT_SECRET_KEY')!
    this.issuer = this.configService.get<string>('JWT_ISSUER')!
  }

  signAccessToken(payload: CreateTokenPayload) {
    return jwt.sign(payload, this.secret, {
      expiresIn: '10m',
      algorithm: 'HS256',
      issuer: this.issuer,
      audience: 'access',
    })
  }

  signRefreshToken({ sub }: RefreshTokenPayload) {
    return jwt.sign({ sub, type: 'refresh' }, this.secret, {
      expiresIn: '7d',
      algorithm: 'HS256',
      issuer: this.issuer,
      audience: 'refresh',
    })
  }

  verifyAccessToken(token: string) {
    try {
      return jwt.verify(token, this.secret, {
        algorithms: ['HS256'],
        issuer: this.issuer,
        audience: 'access',
      }) as AccessJwtPayload
    } catch (error) {
      return null
    }
  }

  verifyRefreshToken(token: string) {
    try {
      return jwt.verify(token, this.secret, {
        algorithms: ['HS256'],
        issuer: this.issuer,
        audience: 'refresh',
      }) as RefreshJwtPayload
    } catch (error) {
      return null
    }
  }
}
