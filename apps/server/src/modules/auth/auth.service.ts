import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common'
import { LoginDto } from './auth.dto'
import * as bcrypt from 'bcrypt'

import { UserService } from '../user/user.service'
import { JwtService } from '../jwt/jwt.service'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(payload: LoginDto) {
    const { email, password } = payload

    try {
      const user = await this.userService.getByEmailOrThrow({ email })

      const { id, passwordHash, ...rest } = user!

      const isPasswordValid = await bcrypt.compare(password, passwordHash)

      if (!isPasswordValid) {
        throw new BadRequestException('Invalid credentials')
      }

      const accessToken = this.jwtService.signAccessToken({
        sub: id,
        user: rest,
      })

      const refreshToken = this.jwtService.signRefreshToken({ sub: id })

      const refreshTokenHash = bcrypt.hashSync(refreshToken, 10)

      await this.userService.updateRefreshTokenHash({ userId: id, refreshTokenHash })

      return { accessToken, refreshToken }
    } catch {
      throw new UnauthorizedException('Invalid credentials')
    }
  }

  async refresh(refreshToken: string) {
    const payload = this.jwtService.verifyRefreshToken(refreshToken)
    if (!payload) {
      throw new UnauthorizedException('Invalid refresh token')
    }

    const user = await this.userService.getRefreshTokenByIdOrThrow(payload.sub)

    if (!user.refreshTokenHash) throw new UnauthorizedException('Invalid refresh token')

    const { id, refreshTokenHash, ...rest } = user

    const isRefreshTokenValid = await bcrypt.compare(refreshToken, refreshTokenHash)

    if (!isRefreshTokenValid) throw new UnauthorizedException('Invalid refresh token')

    const newAccessToken = this.jwtService.signAccessToken({ sub: id, user: rest })

    const newRefreshToken = this.jwtService.signRefreshToken({ sub: id })

    const newRefreshTokenHash = await bcrypt.hash(newRefreshToken, 10)

    await this.userService.updateRefreshTokenHash({
      userId: id,
      refreshTokenHash: newRefreshTokenHash,
    })

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    }
  }

  async logout(userId: string) {
    await this.userService.updateRefreshTokenHash({
      userId,
      refreshTokenHash: null,
    })
  }
}
