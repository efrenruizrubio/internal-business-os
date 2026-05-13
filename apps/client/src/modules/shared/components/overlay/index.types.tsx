export interface OverlayProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
  backdropClassName?: string
}
