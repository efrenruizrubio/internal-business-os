import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JWTPayload } from './jwt.types'
import * as jwt from 'jsonwebtoken'

@Injectable()
export class JwtService {
  private expirationTime = 60 * 10

  constructor(private configService: ConfigService) {}

  sign(payload: JWTPayload) {
    const secret = this.configService.get<string>('JWT_SECRET_KEY')!
    const issuer = this.configService.get<string>('JWT_ISSUER')!

    const { id, ...rest } = payload

    return jwt.sign({ ...rest, sub: id }, secret, {
      expiresIn: this.expirationTime,
      algorithm: 'HS256',
      issuer,
    })
  }
}
