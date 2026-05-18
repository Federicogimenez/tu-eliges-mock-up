import { useState } from 'react'

interface EmailCapturePillProps {
  cta?: string
  placeholder?: string
  /** Mock: se invoca con el email tras un submit válido (sin red). */
  onSubmit?: (email: string) => void
}

/**
 * Glass pill de captura de email — MOCK (sin HubSpot/API).
 * Réplica de EmailCapture.jsx del DS: estado local "¡Listo!" tras enviar.
 */
export default function EmailCapturePill({
  cta = 'Unirme',
  placeholder = 'Tu correo',
  onSubmit,
}: EmailCapturePillProps) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes('@')) return
    setDone(true)
    onSubmit?.(email)
  }

  if (done) {
    return (
      <div className="mx-auto flex max-w-[540px] items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-4 backdrop-blur-md">
        <span className="text-sm font-semibold text-white sm:text-base">
          ¡Listo! Revisá tu correo · te enviamos tu cupón 30% OFF.
        </span>
      </div>
    )
  }

  return (
    <form
      onSubmit={submit}
      className="mx-auto flex max-w-[540px] items-center rounded-full border border-white/15 bg-white/10 py-1.5 pl-6 pr-1.5 backdrop-blur-md"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        className="min-w-0 flex-1 bg-transparent px-2 py-3 text-base text-white outline-none placeholder:text-white/55"
      />
      <button
        type="submit"
        className="shrink-0 cursor-pointer rounded-full bg-blue-uchooseit px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
      >
        {cta}
      </button>
    </form>
  )
}
