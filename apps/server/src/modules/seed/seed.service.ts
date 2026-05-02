import { Injectable, Logger, OnModuleInit } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { ConfigService } from '@nestjs/config'
import { ApplicationEnvironment } from '@/constants/env-schema'
import { usersSeed } from './data/user.seed'

@Injectable()
export class SeedService implements OnModuleInit {
  private readonly logger = new Logger(SeedService.name)

  constructor(
    private readonly prismaService: PrismaService,
    private configService: ConfigService,
  ) {}

  private async seedUsers() {
    this.logger.log('Seeding users...')

    for (const user of usersSeed) {
      await this.prismaService.user.upsert({
        where: { email: user.email },
        create: user,
        update: { name: user.name, role: user.role },
      })
    }

    this.logger.log('Users seeded successfully!')
  }

  async onModuleInit() {
    if (this.configService.get('APPLICATION_ENVIRONMENT') !== ApplicationEnvironment.DEVELOPMENT) {
      this.logger.warn(
        `Skipping seed execution because APPLICATION_ENVIRONMENT is not set to '${ApplicationEnvironment.DEVELOPMENT}'`,
      )

      return
    }

    await this.seedUsers()
  }
}
