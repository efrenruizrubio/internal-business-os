import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '../jwt/jwt.service'
import { Reflector } from '@nestjs/core'
import { IS_PUBLIC_KEY } from '@/decorators/is-public.decorator'
import { AuthenticatedRequest } from './auth.types'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ])

    if (isPublic) return true

    const request: AuthenticatedRequest = context.switchToHttp().getRequest()
    const token = this.extractTokenFromCookie(request)
    if (!token) {
      throw new UnauthorizedException()
    }
    try {
      const payload = this.jwtService.verifyAccessToken(token)
      if (!payload) {
        throw new UnauthorizedException()
      }

      request.user = payload.user
    } catch {
      throw new UnauthorizedException()
    }

    return true
  }

  private extractTokenFromCookie(request: AuthenticatedRequest): string | undefined {
    return request.cookies?.accessToken
  }
}
