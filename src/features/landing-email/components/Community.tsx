import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { MEMBERS, type Member } from '../data'
import { useTranslation } from '../../../hooks/useTranslation'
import { useWindowSize } from '../../../hooks/useWindowSize'
import PersonVideoCarousel from './PersonVideoCarousel'
import ModalShell from './ModalShell'

const MOBILE_BREAKPOINT = 768

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
 * MobileSlider — Keen Slider para mobile (<768px).
 * Componente separado para que el hook `useKeenSlider` sólo se monte cuando
 * se necesita (en desktop no se llama, no consume recursos ni hay slides
 * con width 0 mal calculados al ocultar con CSS).
 */
const MobileSlider = ({
  openId,
  onToggle,
}: {
  openId: string | null
  onToggle: (id: string) => void
}) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    mode: 'snap',
    slides: { perView: 'auto', spacing: 24 },
  })

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider !overflow-visible">
        {MEMBERS.map((m) => (
          <div
            key={m.id}
            className="keen-slider__slide !min-w-[200px] !max-w-[200px] pt-4"
          >
            <PersonCard
              member={m}
              active={openId === m.id}
              onClick={() => onToggle(m.id)}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => instanceRef.current?.prev()}
        aria-label="←"
        className="absolute -left-2 top-[80px] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-uc-line bg-black/60 text-xl text-white transition hover:bg-blue-uchooseit"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => instanceRef.current?.next()}
        aria-label="→"
        className="absolute -right-2 top-[80px] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-uc-line bg-black/60 text-xl text-white transition hover:bg-blue-uchooseit"
      >
        ›
      </button>
    </div>
  )
}

/**
 * Sección 2 — Voces de la comunidad.
 * Mobile: carrusel con Keen Slider (swipe + flechas).
 * Desktop (md+): 3 cards estáticas centradas (entran de sobra en el ancho).
 * Click en una persona abre su PersonVideoCarousel en un modal real
 * (carga on-demand).
 */
export default function Community() {
  const { t, tHtml } = useTranslation()
  const { width } = useWindowSize()
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => setOpenId((cur) => (cur === id ? null : id))
  const openMember = openId
    ? MEMBERS.find((m) => m.id === openId) ?? null
    : null

  const isMobile = width > 0 && width < MOBILE_BREAKPOINT

  return (
    <section className="relative bg-uc-black px-6 pb-24 pt-28">
      <div className="mx-auto max-w-6xl">
        <h2
          className="uc-display text-center"
          dangerouslySetInnerHTML={tHtml('landingEmail.community.title')}
        />
        <p className="uc-lead mx-auto mt-3 max-w-2xl text-center">
          {t('landingEmail.community.subtitle')}
        </p>

        <div className="mt-14">
          {isMobile ? (
            <MobileSlider openId={openId} onToggle={toggle} />
          ) : (
            <div className="flex flex-wrap items-start justify-center gap-9 pt-4">
              {MEMBERS.map((m) => (
                <PersonCard
                  key={m.id}
                  member={m}
                  active={openId === m.id}
                  onClick={() => toggle(m.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <ModalShell
        open={!!openMember}
        onClose={() => setOpenId(null)}
        ariaLabel={openMember?.name}
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
                aria-label="✕"
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
