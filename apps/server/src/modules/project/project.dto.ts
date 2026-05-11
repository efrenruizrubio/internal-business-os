import { ProjectStatus } from '@/generated/prisma/enums'
import type { ProjectCreateInput } from '@/generated/prisma/models'
import { IsEnum, IsOptional, IsString } from 'class-validator'

export class CreateProjectDto implements ProjectCreateInput {
  @IsString()
  name!: string

  @IsString()
  @IsOptional()
  description?: string

  @IsEnum(ProjectStatus)
  @IsOptional()
  status?: ProjectStatus
}
