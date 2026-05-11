import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateProjectDto, UpdateProjectDto } from './project.dto'
import { UserJWT } from '../jwt/jwt.types'
import { UserRole } from '@/generated/prisma/enums'

@Injectable()
export class ProjectService {
  constructor(private readonly prismaService: PrismaService) {}

  async create({ membersIds, ...payload }: CreateProjectDto) {
    const { id } = await this.prismaService.project.create({
      data: {
        ...payload,
        members: {
          create: membersIds.map((userId) => ({
            userId,
          })),
        },
      },
      select: {
        id: true,
      },
    })

    return { id }
  }

  async get(user: UserJWT) {
    if (user.role === UserRole.ADMIN) {
      return await this.getAll()
    } else {
      return await this.getBelongingProjects(user.id)
    }
  }

  private async getAll() {
    return await this.prismaService.project.findMany({
      orderBy: {
        createdAt: 'asc',
      },
      include: {
        members: {
          select: {
            user: {
              omit: {
                createdAt: true,
                updatedAt: true,
                passwordHash: true,
                refreshTokenHash: true,
              },
            },
          },
        },
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

  async getProjectByIdOrThrow(id: string) {
    const project = await this.prismaService.project.findFirst({
      where: { id },
      select: {
        id: true,
        name: true,
        description: true,
        status: true,
        activityLogs: true,
        createdAt: true,
        updatedAt: true,
        members: {
          select: {
            user: { omit: { passwordHash: true, createdAt: true, updatedAt: true } },
          },
        },
      },
    })

    if (!project) throw new NotFoundException(`Project with ID \`${id}\` not found.`)

    return project
  }

  async getById(user: UserJWT, projectId: string) {
    const project = await this.getProjectByIdOrThrow(projectId)

    if (user.role === UserRole.ADMIN) {
      return project
    } else if (!project.members.some(({ user: { id } }) => id === user.id)) {
      throw new ForbiddenException()
    }

    return project
  }

  async update(id: string, { membersIds, ...projectData }: UpdateProjectDto) {
    await this.getProjectByIdOrThrow(id)

    return await this.prismaService.project.update({
      where: { id },
      data: {
        ...projectData,
        members: membersIds
          ? {
              deleteMany: {},
              create: membersIds.map((userId) => ({ userId })),
            }
          : undefined,
      },
    })
  }
}
