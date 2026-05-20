import { useState } from 'react'
import SubscribeModal from './SubscribeModal'

interface SubscribeButtonProps {
  label: string
  modalTitle?: string
  modalSubtitle?: string
  className?: string
  variant?: 'blue' | 'purple'
}

/**
 * Botón pill que abre el SubscribeModal. Autocontenido (estado local).
 * Los textos llegan por props (i18n resuelto por el componente padre).
 */
export default function SubscribeButton({
  label,
  modalTitle,
  modalSubtitle,
  className = '',
  variant = 'blue',
}: SubscribeButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex w-fit cursor-pointer items-center justify-center rounded-full ${variant === 'purple' ? 'bg-purple-shop' : 'bg-blue-uchooseit'} px-8 py-3.5 text-base font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 ${className}`}
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
