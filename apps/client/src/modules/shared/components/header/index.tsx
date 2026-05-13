'use client'

import { Avatar } from '../avatar'
import { Notifications } from './notification'

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <Avatar />
        <h1 className="text-primary">
          <strong>BizOS</strong>
        </h1>
      </div>
      <Notifications />
    </header>
  )
}
