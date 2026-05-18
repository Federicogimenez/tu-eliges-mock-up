import { useState } from 'react'
import SubscribeModal from './SubscribeModal'

interface SubscribeButtonProps {
  /** Texto del botón (distinto por sección). */
  label: string
  /** Override del copy del modal (opcional). */
  modalTitle?: string
  modalSubtitle?: string
  className?: string
}

/**
 * Botón pill que abre el SubscribeModal. Autocontenido: cada instancia
 * maneja su propio estado de apertura (sin context/provider).
 * Las invitaciones 2ª y 3ª usan esto en vez de un input directo.
 */
export default function SubscribeButton({
  label,
  modalTitle,
  modalSubtitle,
  className = '',
}: SubscribeButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex w-fit cursor-pointer items-center justify-center rounded-[20px] bg-blue-uchooseit px-8 py-3.5 text-base font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--uc-shadow-pop)] ${className}`}
      >
        {label}
      </button>

      <SubscribeModal
        open={open}
        onClose={() => setOpen(false)}
        title={modalTitle}
        subtitle={modalSubtitle}
      />
    </>
  )
}
