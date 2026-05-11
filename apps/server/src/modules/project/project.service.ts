import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateProjectDto } from './project.dto'

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
}
