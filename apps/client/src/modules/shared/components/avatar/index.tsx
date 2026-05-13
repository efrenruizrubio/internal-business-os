'use client'

import { useSession } from '@/modules/login/hooks/use-session'
import { UserRole } from '@/modules/login/services/index.types'
import { Overlay } from '../overlay'
import { useDisclosure } from '../../hooks'

type Colors = {
  avatar: string
  role: string
}

const COLORS: Record<UserRole, Colors> = {
  [UserRole.ADMIN]: {
    avatar: 'bg-red-500',
    role: 'text-red-500',
  },
  [UserRole.CLIENT]: {
    avatar: 'bg-green-500',
    role: 'text-green-500',
  },
  [UserRole.DEV]: {
    avatar: 'bg-primary',
    role: 'text-primary',
  },
}

export const Avatar = () => {
  const { data: session } = useSession()
  const { close, isOpen, open } = useDisclosure()

  if (!session) return null

  const userInitials = session.user.name
    .split(' ')
    .slice(0, 2)
    .map((name) => name.at(0)?.toUpperCase())
    .join('')

  const colors = COLORS[session.user.role]

  return (
    <>
      <button
        type="button"
        className={`${colors.avatar} relative z-50 flex size-12 cursor-pointer items-center justify-center rounded-2xl`}
        onClick={isOpen ? close : open}
      >
        <strong className="text-white">{userInitials}</strong>
      </button>

      <Overlay
        open={isOpen}
        onClose={close}
        backdropClassName="z-40 bg-transparent"
        className="absolute top-16 left-4"
      >
        <div
          className={`min-w-40 origin-top-left rounded-lg bg-white p-2 shadow-xl transition-all duration-200 ease-out sm:w-60 ${
            isOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-50 opacity-0'
          }`}
        >
          <h2>{session.user.name}</h2>
          <strong className={colors.role}>{session.user.role}</strong>
        </div>
      </Overlay>
    </>
  )
}
