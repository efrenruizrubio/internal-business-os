import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { User } from './user.types'

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getByEmail({ email }: { email: string }): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({ where: { email } })

    return user
  }

  async getById(id: string) {
    return await this.prismaService.user.findUnique({
      where: { id },
    })
  }

  async getRefreshTokenByIdOrThrow(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
      omit: {
        passwordHash: true,
      },
    })

    if (user === null) {
      throw new UnauthorizedException('Invalid refresh token')
    }

    return user
  }

  async getByEmailOrThrow({ email }: { email: string }): Promise<User | null> {
    const user = await this.getByEmail({ email })

    if (user === null) {
      throw new NotFoundException(`User with email ${email} not found`)
    }

    return user
  }

  async updateRefreshTokenHash({
    userId,
    refreshTokenHash,
  }: {
    userId: string
    refreshTokenHash: string | null
  }) {
    await this.prismaService.user.update({ where: { id: userId }, data: { refreshTokenHash } })
  }
}
