import { useRef, useState } from 'react'
import { MEMBERS, type Member } from '../data'
import PersonVideoCarousel from './PersonVideoCarousel'
import ModalShell from './ModalShell'

/** Tarjeta de persona — foto de perfil + nombre (sin descripción). */
const PersonCard = ({
  member,
  active,
  onClick,
}: {
  member: Member
  active: boolean
  onClick: () => void
}) => {
  const { name, avatar } = member

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="group flex w-[200px] shrink-0 cursor-pointer flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1"
    >
      <div
        className={`relative h-[160px] w-[160px] overflow-hidden rounded-full border-4 ${
          active ? 'border-white' : 'border-blue-uchooseit'
        } bg-uc-ink-2 transition-colors`}
      >
        <img
          src={avatar}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <span
          className="absolute bottom-3.5 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-blue-uchooseit text-white shadow-[0_0_0_4px_rgba(255,255,255,0.95)]"
          aria-hidden="true"
        >
          {active ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6h4v12H6zM14 6h4v12h-4z" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </span>
      </div>
      <span className="mt-3.5 text-base font-bold text-white">{name}</span>
    </button>
  )
}

/**
 * Sección 2 — Voces de la comunidad.
 * Carrusel horizontal de personas. Al abrir una persona se monta su
 * PersonVideoCarousel (carga on-demand); cerrar/cambiar lo desmonta.
 * Sólo una persona abierta a la vez.
 */
export default function CommunityCarousel() {
  const rowRef = useRef<HTMLDivElement>(null)
  const [openId, setOpenId] = useState<string | null>(null)

  const scrollBy = (dir: number) => {
    rowRef.current?.scrollBy({ left: dir * 260, behavior: 'smooth' })
  }

  const toggle = (id: string) => setOpenId((cur) => (cur === id ? null : id))

  const openMember = openId ? MEMBERS.find((m) => m.id === openId) ?? null : null

  return (
    <section className="relative bg-uc-black px-6 pb-24 pt-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="uc-display text-center">
          Voces de la <span className="hl">comunidad</span>
        </h2>
        <p className="uc-lead mx-auto mt-3 max-w-2xl text-center">
          Cada miembro comparte sus tips en video. Tocá cualquier rostro para
          ver sus historias — los videos cargan sólo cuando los abrís.
        </p>

        <div className="relative mt-14 px-14">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-uc-line bg-black/60 text-xl text-white transition hover:scale-105 hover:border-blue-uchooseit hover:bg-blue-uchooseit"
          >
            ‹
          </button>

          <div
            ref={rowRef}
            className="pt-4 flex items-start gap-9 overflow-x-auto scroll-smooth md:justify-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {MEMBERS.map((m) => (
              <PersonCard
                key={m.id}
                member={m}
                active={openId === m.id}
                onClick={() => toggle(m.id)}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Siguiente"
            className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-uc-line bg-black/60 text-xl text-white transition hover:scale-105 hover:border-blue-uchooseit hover:bg-blue-uchooseit"
          >
            ›
          </button>
        </div>

      </div>

      {/* Modal real — montado SÓLO cuando hay persona abierta (on-demand).
          Cerrar (scrim / ESC / ✕) desmonta → libera el <video>. */}
      <ModalShell
        open={!!openMember}
        onClose={() => setOpenId(null)}
        ariaLabel={openMember ? `Historias de ${openMember.name}` : undefined}
      >
        {openMember && (
          <div className="relative flex w-full max-w-[440px] animate-fade flex-col rounded-[24px] border border-blue-uchooseit/60 bg-[linear-gradient(180deg,#0d1422_0%,#06090f_100%)] p-4 shadow-[var(--uc-shadow-glow)]">
            <div className="mb-3 flex items-center justify-between gap-4 px-1">
              <h3 className="text-lg font-bold text-white">
                <span className="hl">{openMember.name}</span>
              </h3>
              <button
                type="button"
                onClick={() => setOpenId(null)}
                aria-label="Cerrar"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-uc-line text-white transition hover:bg-uc-ink-2"
              >
                ✕
              </button>
            </div>
            <PersonVideoCarousel
              key={openMember.id}
              memberName={openMember.name}
              videos={openMember.videos}
            />
          </div>
        )}
      </ModalShell>
    </section>
  )
}
