'use client'

import { useState } from 'react'
import { Icons, ICONS } from '@shared/components/icons'
import { Sidebar } from '../../sidebar'
import { useDisclosure } from '@/modules/shared/hooks'

export const Notifications = () => {
  const [hasNotifications] = useState(true)

  const { close, isOpen, open } = useDisclosure()

  return (
    <div className="relative">
      <button className="relative size-8" type="button" onClick={open}>
        {ICONS[Icons.Bell]}
        {hasNotifications && (
          <div className="absolute top-0 -right-2 size-2 rounded-2xl bg-red-500" />
        )}
      </button>
      <Sidebar open={isOpen} onClose={close}>
        <h1>notifications</h1>
      </Sidebar>
    </div>
  )
}
