export type Position = 'left' | 'right'

export interface Animation {
  base: string
  open: string
  closed: string
}

export interface SidebarProps {
  children: React.ReactNode
  open: boolean
  onClose: () => void
  position?: Position
}
