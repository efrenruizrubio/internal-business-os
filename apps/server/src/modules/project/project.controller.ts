import { Body, Controller, Get, HttpCode, Post, Req } from '@nestjs/common'
import { ProjectService } from './project.service'
import { CreateProjectDto } from './project.dto'
import { Roles } from '@/decorators/roles.decorator'
import { UserRole } from '@/generated/prisma/enums'
import type { AuthenticatedRequest } from '../auth/auth.types'

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Roles(UserRole.ADMIN)
  @HttpCode(201)
  @Post()
  async create(@Body() payload: CreateProjectDto) {
    return await this.projectService.create(payload)
  }

  @HttpCode(201)
  @Get()
  async get(@Req() request: AuthenticatedRequest) {
    return await this.projectService.get(request.user)
  }
}
