'use client'

import type { MenuItem as IMenuItem } from '@modules/login/services/index.types'
import Link from 'next/link'
import { ICONS } from '../icons'
import { usePathname } from 'next/navigation'

export const MenuItem = ({ href, icon, label }: IMenuItem) => {
  const pathname = usePathname()

  const isPathActive = pathname === href

  return (
    <Link
      className={`flex flex-col items-center transition-colors duration-200 ${isPathActive ? 'text-primary' : 'text-muted-foreground hover:text-black'} no-underline`}
      href={href}
    >
      <div className="size-5 sm:size-7.5">{ICONS[icon]}</div>
      <span className="sm:text-lg">{label}</span>
    </Link>
  )
}
