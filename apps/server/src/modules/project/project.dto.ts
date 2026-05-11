import { ProjectStatus } from '@/generated/prisma/enums'
import type { ProjectCreateInput } from '@/generated/prisma/models'
import { PartialType } from '@nestjs/mapped-types'
import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator'

export class CreateProjectDto implements ProjectCreateInput {
  @IsString()
  name!: string

  @IsString()
  @IsOptional()
  description?: string

  @IsEnum(ProjectStatus)
  @IsOptional()
  status?: ProjectStatus

  @IsArray()
  @IsString({ each: true, message: 'Each element of membersIds array must be a string' })
  membersIds!: string[]
}

export class UpdateProjectDto extends PartialType(CreateProjectDto) {}
