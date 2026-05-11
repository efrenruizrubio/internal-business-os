'use client'

import { useSession } from '@/modules/login/hooks/use-session'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const SessionGuard = ({ children }: { children: React.ReactNode }) => {
  const { replace } = useRouter()
  const pathname = usePathname()

  const [canAccessRoute, setCanAccessRoute] = useState(false)

  const { data: session, isError, isLoading } = useSession()

  useEffect(() => {
    if (isError) {
      replace('/')
      return
    }

    if (!session) return

    const canAccessRouteAux = session.allowedRoutes.some((item) => pathname.startsWith(item))

    if (!canAccessRouteAux) {
      replace('forbidden')
    }

    setCanAccessRoute(canAccessRouteAux)
  }, [isError, session, pathname, replace])

  if (isLoading)
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  if (canAccessRoute || pathname === '/forbidden') return <>{children}</>
}
