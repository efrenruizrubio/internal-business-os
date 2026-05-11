import { Body, Controller, HttpCode, Post } from '@nestjs/common'
import { ProjectService } from './project.service'
import { CreateProjectDto } from './project.dto'
import { Roles } from '@/decorators/roles.decorator'
import { UserRole } from '@/generated/prisma/enums'

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Roles(UserRole.ADMIN)
  @HttpCode(201)
  @Post()
  async create(@Body() payload: CreateProjectDto) {
    return await this.projectService.create(payload)
  }
}
