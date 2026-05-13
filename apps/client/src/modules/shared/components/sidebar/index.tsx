import { Overlay } from '../overlay'
import { Position, SidebarProps, Animation } from './index.types'

const BASE_ASIDE_CLASS =
  'absolute top-0 h-screen w-2/3 p-4 sm:w-3/5 lg:w-2/5 2xl:w-1/3 desktop:w-1/4 2k:w-1/6 bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform'

const ANIMATION_CLASSES: Record<Position, Animation> = {
  left: {
    base: 'left-0',
    open: 'translate-x-0',
    closed: '-translate-x-full',
  },
  right: {
    base: 'right-0',
    open: 'translate-x-0',
    closed: 'translate-x-full',
  },
}

export const Sidebar = ({ children, onClose, open, position = 'right' }: SidebarProps) => {
  const { base, closed, open: openClass } = ANIMATION_CLASSES[position]

  return (
    <Overlay open={open} onClose={onClose} backdropClassName="z-50 bg-black/40 backdrop-blur-sm">
      <aside className={`${BASE_ASIDE_CLASS} ${base} ${open ? openClass : closed} `}>
        {children}
      </aside>
    </Overlay>
  )
}
