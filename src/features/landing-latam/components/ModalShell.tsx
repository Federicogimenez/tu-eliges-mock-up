import { useEffect } from 'react'
import { createPortal } from 'react-dom'

interface ModalShellProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  ariaLabel?: string
}

/**
 * Shell de modal reutilizable: portal a body, overlay fijo centrado,
 * scrim con click-outside, ESC para cerrar y bloqueo de scroll.
 * El panel (estilos/contenido) lo aporta cada modal vía children.
 */
export default function ModalShell({
  open,
  onClose,
  children,
  ariaLabel,
}: ModalShellProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      {children}
    </div>,
    document.body,
  )
}
