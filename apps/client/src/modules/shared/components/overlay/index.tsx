'use client'

import { Portal } from '../portal'
import type { OverlayProps } from './index.types'

export const Overlay = ({
  open,
  onClose,
  children,
  className = '',
  backdropClassName = '',
}: OverlayProps) => {
  return (
    <Portal>
      <div
        className={`fixed inset-0 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        } ${backdropClassName}`}
        onClick={onClose}
      >
        <div className={`${className}`} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </Portal>
  )
}
