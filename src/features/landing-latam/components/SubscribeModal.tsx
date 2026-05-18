import EmailCapturePill from './EmailCapturePill'
import ModalShell from './ModalShell'

interface SubscribeModalProps {
  open: boolean
  onClose: () => void
  title?: string
  subtitle?: string
}

/**
 * Modal de suscripción — fiel a SubscribeModal.standalone.html del DS:
 * scrim negro, card oscura con borde azul, ícono azul, headline + subcopy
 * y el mismo glass pill de captura (mock). Comportamiento vía ModalShell.
 */
export default function SubscribeModal({
  open,
  onClose,
  title = 'Unite a la comunidad',
  subtitle = 'Recibí tips de ahorro, historias de consumo y ofertas exclusivas para viajar a USA sin fundirte.',
}: SubscribeModalProps) {
  return (
    <ModalShell open={open} onClose={onClose} ariaLabel={title}>
      <div className="relative w-full max-w-md animate-fade overflow-hidden rounded-[24px] border border-blue-uchooseit/60 bg-[linear-gradient(180deg,#0d1422_0%,#06090f_100%)] p-7 text-center shadow-[var(--uc-shadow-glow)]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-uc-line text-white transition hover:bg-uc-ink-2"
        >
          ✕
        </button>

        <span
          className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-uchooseit/15 text-blue-uchooseit"
          aria-hidden="true"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-10 6L2 7" />
          </svg>
        </span>

        <h2 className="text-2xl font-extrabold leading-tight text-white">
          {title}
        </h2>
        <p className="uc-lead mx-auto mt-3 max-w-sm text-sm">{subtitle}</p>

        <div className="mt-6">
          <EmailCapturePill cta="Unirme" />
        </div>

        <p className="uc-micro mt-3">Sin tarjeta · cancelás cuando quieras.</p>
      </div>
    </ModalShell>
  )
}
