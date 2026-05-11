import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateProjectDto } from './project.dto'
import { UserJWT } from '../jwt/jwt.types'
import { UserRole } from '@/generated/prisma/enums'

@Injectable()
export class ProjectService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(payload: CreateProjectDto) {
    const { id } = await this.prismaService.project.create({
      data: payload,
      select: {
        id: true,
      },
    })

    return { id }
  }

  async get(user: UserJWT) {
    if (user.role === UserRole.ADMIN) {
      return this.getAll()
    } else {
      return await this.getBelongingProjects(user.id)
    }
  }

  private async getAll() {
    return await this.prismaService.project.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })
  }

  private async getBelongingProjects(userId: string) {
    return await this.prismaService.project.findMany({
      where: {
        members: {
          some: {
            userId,
          },
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    })
  }
}
