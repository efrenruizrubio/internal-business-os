import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const LOGIN_PATH = '/'
const DASHBOARD_PATH = '/dashboard'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl.clone()
  const hasAccessToken = Boolean(request.cookies.get('accessToken'))
  const hasRefreshToken = Boolean(request.cookies.get('refreshToken'))

  const hasSession = hasAccessToken || hasRefreshToken

  if (!hasSession && pathname !== LOGIN_PATH) {
    return NextResponse.redirect(new URL(LOGIN_PATH, request.url))
  }

  if (hasSession && pathname === LOGIN_PATH) {
    return NextResponse.redirect(new URL(DASHBOARD_PATH, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/dashboard/:path*', '/admin/:path*'],
}
