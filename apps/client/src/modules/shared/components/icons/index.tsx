import type { ReactNode } from 'react'
import { IconEmail } from './email'
import { IconLock } from './lock'
import { IconUser } from './user'
import { IconAlert } from './alert'
import { IconDashboard } from './dashboard'
import { IconArchive } from './archive'
import { IconBell } from './bell'

export enum Icons {
  Email = 'email',
  Lock = 'lock',
  User = 'user',
  Alert = 'alert',
  Dashboard = 'dashboard',
  Archive = 'archive',
  Bell = 'bell',
}

export const ICONS: Record<Icons, ReactNode> = {
  [Icons.Email]: <IconEmail />,
  [Icons.Lock]: <IconLock />,
  [Icons.User]: <IconUser />,
  [Icons.Alert]: <IconAlert />,
  [Icons.Dashboard]: <IconDashboard />,
  [Icons.Archive]: <IconArchive />,
  [Icons.Bell]: <IconBell />,
}
