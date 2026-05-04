import { Body, Controller, HttpCode, Post, Req, Res, UnauthorizedException } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto } from './auth.dto'
import { Public } from '@/decorators/is-public.decorator'
import type { Response, Request } from 'express'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(204)
  @Post('login')
  async login(@Body() body: LoginDto, @Res({ passthrough: true }) response: Response) {
    const { accessToken, refreshToken } = await this.authService.login(body)

    this.setAuthCookies(response, accessToken, refreshToken)
  }

  @Public()
  @HttpCode(204)
  @Post('refresh-token')
  async refresh(@Req() request: Request, @Res({ passthrough: true }) response: Response) {
    const refreshToken = request.cookies?.refreshToken as string | undefined

    if (!refreshToken) {
      throw new UnauthorizedException('Missing refresh token')
    }

    const tokens = await this.authService.refresh(refreshToken)

    this.setAuthCookies(response, tokens.accessToken, tokens.refreshToken)
  }

  private setAuthCookies(response: Response, accessToken: string, refreshToken: string) {
    response.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 1000 * 60 * 10,
    })

    response.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/auth/refresh-token',
      maxAge: 1000 * 60 * 60 * 24 * 7,
    })
  }
}
