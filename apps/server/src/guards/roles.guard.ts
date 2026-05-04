import { ROLES_KEY } from '@/decorators/roles.decorator'
import { UserRole } from '@/generated/prisma/enums'
import { ForbiddenException, Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AuthenticatedRequest } from '@/modules/auth/auth.types'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ])

    if (!requiredRoles) {
      return true
    }

    const { user }: AuthenticatedRequest = context.switchToHttp().getRequest()

    if (!user) {
      throw new ForbiddenException()
    }

    return Boolean(requiredRoles.find((role) => user.role === role))
  }
}
