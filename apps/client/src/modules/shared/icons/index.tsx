import type { ReactNode } from 'react'
import { IconEmail } from './email'
import { IconLock } from './lock'
import { IconUser } from './user'
import { IconAlert } from './alert'

export enum Icons {
  Email = 'email',
  Lock = 'lock',
  User = 'user',
  Alert = 'alert',
}

export const ICONS: Record<Icons, ReactNode> = {
  [Icons.Email]: <IconEmail />,
  [Icons.Lock]: <IconLock />,
  [Icons.User]: <IconUser />,
  [Icons.Alert]: <IconAlert />,
}
