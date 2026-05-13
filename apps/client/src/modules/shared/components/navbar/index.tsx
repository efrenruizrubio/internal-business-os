'use client'

import { useSession } from '@modules/login/hooks/use-session'
import { MenuItem } from '../menu/item'

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="shadow-top-sm shadow-top flex min-h-17 w-full items-center justify-center gap-2 p-3">
      <ul className="flex gap-5">
        {session?.menu.map((item) => (
          <MenuItem key={item.href} {...item} />
        ))}
      </ul>
    </nav>
  )
}
