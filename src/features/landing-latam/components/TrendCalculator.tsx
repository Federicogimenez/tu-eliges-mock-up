import { useState } from 'react'
import {
  CALC_META,
  CALC_SAVINGS_RATE,
  DEFAULT_LINES,
  type CalcLine,
} from '../data'
import SubscribeButton from './SubscribeButton'

const EMPTY_DRAFT = { label: '', sub: '', amount: '' }

const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-US')

/**
 * Sección 3 — Calculadora temática ("Viaje a USA · Mundial 2026").
 * Réplica de Uchooseit-Design-System/ui_kits/website/TrendCalculator.jsx.
 * Data por defecto y lógica de "agregar gasto" en data.ts (// EDITABLE:).
 */
export default function TrendCalculator() {
  const [lines, setLines] = useState<CalcLine[]>(DEFAULT_LINES)

  const setAmount = (id: string, val: string) => {
    const num = Number(val.replace(/[^0-9.]/g, '')) || 0
    setLines((ls) => ls.map((l) => (l.id === id ? { ...l, amount: num } : l)))
  }
  const remove = (id: string) => setLines((ls) => ls.filter((l) => l.id !== id))

  // Alta de gasto con nombre + detalle (form inline).
  const [adding, setAdding] = useState(false)
  const [draft, setDraft] = useState(EMPTY_DRAFT)

  const cancelDraft = () => {
    setDraft(EMPTY_DRAFT)
    setAdding(false)
  }
  // EDITABLE: validación/forma del gasto nuevo (nombre obligatorio).
  const confirmDraft = () => {
    const label = draft.label.trim()
    if (!label) return
    const amount = Number(draft.amount.replace(/[^0-9.]/g, '')) || 0
    setLines((ls) => [
      ...ls,
      {
        id: 'new' + Date.now(),
        icon: '🧾',
        label,
        sub: draft.sub.trim() || 'Gasto agregado',
        amount,
      },
    ])
    cancelDraft()
  }

  const total = lines.reduce((s, l) => s + l.amount, 0)
  const savings = total * CALC_SAVINGS_RATE

  return (
    <section className="relative bg-uc-black px-6 pb-24 pt-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="uc-display text-center">
          Tendencia: <span className="hl">{CALC_META.trendLabel}</span>
        </h2>
        <p className="uc-lead mx-auto mt-3 max-w-2xl text-center">
          Lo que cuesta ir hoy — y lo que ahorrás con uchooseit. Editá los
          montos con tus propios datos.
        </p>

        <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ── Card calculadora ── */}
          <div className="overflow-hidden rounded-[28px] border border-uc-line bg-[linear-gradient(180deg,#0d1422_0%,#06090f_100%)] p-4 sm:p-6 md:p-7">
            <div className="mb-[18px] flex items-center justify-between gap-3.5 border-b border-uc-line pb-[18px]">
              <div className="text-[clamp(1.5rem,2vw,1.9rem)] font-extrabold uppercase leading-tight">
                {/* {CALC_META.title}{' '}
                <span className="align-middle">{CALC_META.flag}</span>
                <br />
                <span className="text-uc-red">{CALC_META.trendLabel}</span> */}
                <small className="mt-1.5 block text-xs font-medium uppercase tracking-[0.16em] text-uc-fg-mute">
                  Presupuesto realista · editable
                </small>
              </div>
            </div>

            <div className="mb-4 flex flex-wrap gap-3 text-xs text-uc-fg-dim">
              {CALC_META.meta.map((m) => (
                <span key={m} className="inline-flex items-center gap-1.5">
                  {m}
                </span>
              ))}
            </div>

            {lines.map((l) => (
              <div
                key={l.id}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-2 sm:gap-3.5 border-b border-white/[0.06] py-3 last:border-b-0"
              >
                <div className="min-w-0 pr-1 text-sm">
                  <b className="block font-bold text-white">{l.label}</b>
                  <span className="mt-0.5 block text-xs text-uc-fg-mute">
                    {l.sub}
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="inline-flex items-baseline text-base font-extrabold text-uc-red sm:text-lg">
                    <span className="mr-0.5">$</span>
                    <input
                      inputMode="numeric"
                      value={l.amount.toLocaleString('en-US')}
                      onChange={(e) => setAmount(l.id, e.target.value)}
                      aria-label={`Monto de ${l.label}`}
                      className="w-[68px] border-b border-dashed border-uc-red/40 bg-transparent py-0.5 text-right font-extrabold text-uc-red outline-none sm:w-[90px]"
                    />
                  </span>
                  <small className="text-[10px] font-medium tracking-wider text-uc-fg-mute">
                    USD
                  </small>
                </div>
                <button
                  type="button"
                  onClick={() => remove(l.id)}
                  aria-label={`Quitar ${l.label}`}
                  className="cursor-pointer px-1 py-1 text-base text-uc-fg-mute transition hover:text-uc-red sm:px-1.5"
                >
                  ✕
                </button>
              </div>
            ))}

            {!adding ? (
              <button
                type="button"
                onClick={() => setAdding(true)}
                className="mt-3 inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-dashed border-blue-uchooseit px-3.5 py-2 text-[13px] font-semibold text-blue-uchooseit transition hover:bg-blue-uchooseit/10"
              >
                + Agregar gasto
              </button>
            ) : (
              <div className="mt-3 rounded-xl border border-uc-line bg-uc-ink-2 p-3.5">
                <div className="grid gap-2.5 ">
                  <input
                    autoFocus
                    value={draft.label}
                    onChange={(e) =>
                      setDraft((d) => ({ ...d, label: e.target.value }))
                    }
                    onKeyDown={(e) => e.key === 'Enter' && confirmDraft()}
                    placeholder="Nombre del gasto"
                    aria-label="Nombre del gasto"
                    className="rounded-md border border-uc-line bg-uc-ink px-3 py-2 text-sm text-white outline-none placeholder:text-uc-fg-faint focus:border-blue-uchooseit"
                  />
                  <input
                    value={draft.sub}
                    onChange={(e) =>
                      setDraft((d) => ({ ...d, sub: e.target.value }))
                    }
                    onKeyDown={(e) => e.key === 'Enter' && confirmDraft()}
                    placeholder="Detalle (opcional)"
                    aria-label="Detalle del gasto"
                    className="rounded-md border border-uc-line bg-uc-ink px-3 py-2 text-sm text-white outline-none placeholder:text-uc-fg-faint focus:border-blue-uchooseit"
                  />
                  <span className="inline-flex items-center rounded-md border border-uc-line bg-uc-ink px-3 py-2 text-sm focus:border-blue-uchooseit">
                    <span className="mr-1 text-uc-fg-mute">$</span>
                    <input
                      inputMode="numeric"
                      value={draft.amount}
                      onChange={(e) =>
                        setDraft((d) => ({ ...d, amount: e.target.value }))
                      }
                      onKeyDown={(e) => e.key === 'Enter' && confirmDraft()}
                      placeholder="0"
                      aria-label="Monto del gasto"
                      className="w-full bg-transparent text-left font-semibold  text-white outline-none placeholder:text-uc-fg-faint  "
                    />
                  </span>
                </div>
                <div className="mt-3 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={cancelDraft}
                    className="cursor-pointer rounded-full px-4 py-1.5 text-[13px] font-semibold text-uc-fg-mute transition hover:text-white"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    onClick={confirmDraft}
                    disabled={!draft.label.trim()}
                    className="cursor-pointer rounded-full bg-blue-uchooseit px-4 py-1.5 text-[13px] font-bold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Agregar
                  </button>
                </div>
              </div>
            )}

            <div className="mt-3.5 flex items-center justify-between rounded-2xl bg-blue-uchooseit px-5 py-3.5">
              <b className="text-sm uppercase tracking-wider text-white">
                Total estimado
                <span className='block text-xs font-normal'>
                  {lines.length} líneas
                </span>
              </b>
              <div className="text-right">
                <span className="block text-[clamp(1.6rem,3vw,2rem)] font-black tabular-nums text-neutral-200">
                  {fmt(total)}
                </span>
                <small className="block text-xs font-semibold text-white/80">
                  USD
                </small>
              </div>
            </div>
          </div>

          {/* ── Pitch ── */}
          <div className="flex flex-col justify-center gap-4 px-2 py-5">
            <span className="uc-eyebrow">
              Tendencia · {CALC_META.trendLabel}
            </span>
            <h3 className="text-[clamp(1.6rem,2.6vw,2.4rem)] font-extrabold leading-tight text-white">
              "Qué caro viajar al Mundial…"
            </h3>
            <p className="uc-lead">
              Los miembros premium acceden a precios que no aparecen en Google:
              hoteles, vuelos, parques y rentas con tarifas privadas para la
              comunidad hispana.
            </p>
            <div className="flex items-center gap-3.5">
              <span className="text-[clamp(2.5rem,4vw,3.5rem)] font-black text-uc-green">
                {Math.round(CALC_SAVINGS_RATE * 100)}%
              </span>
              <span className="text-uc-fg-dim"> 
                ahorro promedio en este viaje
                <br />
                 {fmt(savings)} USD
              </span>
            </div>
            <SubscribeButton
              label="Quiero ahorrar en mi viaje"
              modalTitle="Ahorrá en tu viaje al Mundial"
              modalSubtitle="Dejanos tu correo: te mandamos los precios privados de hoteles, vuelos, parques y rentas para la comunidad."
              className="mt-2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
