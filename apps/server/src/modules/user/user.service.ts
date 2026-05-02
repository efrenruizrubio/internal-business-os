import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { User } from './user.types'

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getByEmail({ email }: { email: string }): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({ where: { email } })

    return user
  }

  async getByEmailOrThrow({ email }: { email: string }): Promise<User | null> {
    const user = await this.getByEmail({ email })

    if (user === null) {
      throw new NotFoundException(`User with email ${email} not found`)
    }

    return user
  }
}
