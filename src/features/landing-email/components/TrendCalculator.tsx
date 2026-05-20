import { useEffect, useMemo, useState, type Dispatch, type SetStateAction, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import {
  LuGlobe,
  LuUsers,
  LuCalendarDays,
  LuMapPin,
  LuTag,
  LuStar,
  LuBriefcase,
} from 'react-icons/lu'
import {
  CALC_SAVINGS_RATE,
  COUNTRIES,
  DEFAULT_ITEMS,
  DURATION_OPTIONS,
  TRAVELERS_OPTIONS,
  getItemTotal,
  getMatchCount,
  type DepartureCountry,
  type LucideIcon,
  type TravelItem,
} from '../data'
import { useTranslation } from '../../../hooks/useTranslation'
import { useCountry } from '../../../hooks/useCountry'
import type { CountryCode } from '../../../types/country'
import SubscribeButton from './SubscribeButton'
import PillSelect from './PillSelect'
import WaveSeparator from '../../../shared/components/WaveSeparator'

const fmt = (n: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n)

interface CustomItem extends TravelItem {
  isCustom?: boolean
}

type Draft = { label: string; sub: string; amount: string }
const EMPTY_DRAFT: Draft = { label: '', sub: '', amount: '' }

const countryKey = (c: DepartureCountry) =>
  c === 'arg'
    ? 'landingEmail.calculator.countryArgentina'
    : c === 'col'
      ? 'landingEmail.calculator.countryColombia'
      : 'landingEmail.calculator.countryMexico'

/** Mapea el country global (incluye usa/bra) al subconjunto de salida LATAM. */
const toDeparture = (c: CountryCode): DepartureCountry =>
  c === 'arg' || c === 'col' || c === 'mex' ? c : 'arg'

/**
 * Sección 3 — Calculadora paramétrica Mundial 2026 (rediseño DS).
 * Selectores País/Viajeros/Duración → recalcula 9 líneas categorizadas.
 * Conserva "Agregar gasto" como línea fija. Pitch lateral con 11% y CTA.
 */
export default function TrendCalculator() {
  const { t, tHtml } = useTranslation()
  const { country: appCountry } = useCountry()

  const [country, setCountry] = useState<DepartureCountry>(() => toDeparture(appCountry))
  const [travelers, setTravelers] = useState<number>(1)
  const [duration, setDuration] = useState<number>(15)
  const [extras, setExtras] = useState<CustomItem[]>([])
  const [removedIds, setRemovedIds] = useState<Set<string>>(() => new Set())
  const [adding, setAdding] = useState(false)
  const [draft, setDraft] = useState<Draft>(EMPTY_DRAFT)

  // Sincroniza el país de salida si cambia el country global (header / context).
  useEffect(() => {
    setCountry(toDeparture(appCountry))
  }, [appCountry])

  const items = useMemo<CustomItem[]>(() => {
    const base: CustomItem[] = DEFAULT_ITEMS
      .filter((it) => !removedIds.has(it.id))
      .map((it) => {
        if (it.baseByCountry && it.baseByCountry[country] !== undefined) {
          return { ...it, unitAmount: it.baseByCountry[country] as number }
        }
        return it
      })
    return [...base, ...extras]
  }, [country, extras, removedIds])

  const total = useMemo(
    () => items.reduce((s, it) => s + getItemTotal(it, travelers, duration), 0),
    [items, travelers, duration],
  )
  const savings = Math.round(total * CALC_SAVINGS_RATE)

  const cancelDraft = () => {
    setDraft(EMPTY_DRAFT)
    setAdding(false)
  }
  const confirmDraft = () => {
    const label = draft.label.trim()
    if (!label) return
    const amount = Number(draft.amount.replace(/[^0-9.]/g, '')) || 0
    setExtras((xs) => [
      ...xs,
      {
        id: 'custom-' + Date.now(),
        Icon: LuStar,
        label,
        type: 'shared',
        calc: 'fixed',
        unitAmount: amount,
        note: draft.sub.trim() || t('landingEmail.calculator.defaultSub'),
        isCustom: true,
      },
    ])
    cancelDraft()
  }
  const removeItem = (id: string) => {
    if (DEFAULT_ITEMS.some((it) => it.id === id)) {
      setRemovedIds((prev) => {
        const next = new Set(prev)
        next.add(id)
        return next
      })
    } else {
      setExtras((xs) => xs.filter((x) => x.id !== id))
    }
  }

  const dynamicNote = (it: TravelItem): string => {
    const rate = fmt(it.unitAmount)
    if (it.calc === 'per_night') {
      return t('landingEmail.calculator.perNightNote', {
        nights: String(Math.max(duration - 1, 1)),
        rate,
      })
    }
    if (it.calc === 'per_day') {
      return t('landingEmail.calculator.perDayNote', {
        days: String(duration),
        rate,
      })
    }
    if (it.calc === 'per_match') {
      const m = getMatchCount(duration)
      return m === 1
        ? t('landingEmail.calculator.perMatchSingular', { rate })
        : t('landingEmail.calculator.perMatchPlural', { count: String(m), rate })
    }
    return it.note ?? ''
  }

  const travelerLabel = (n: number) =>
    n === 1
      ? t('landingEmail.calculator.travelerSingular', { count: '1' })
      : t('landingEmail.calculator.travelerPlural', { count: String(n) })

  return (
    <section className="relative bg-linear-180 from-uc-ink/90 via-uc-black/30 to-uc-ink px-6 pb-24 pt-20">
      {/* Wave superior — corta con la sección anterior, deja ver el video */}
      <div className="absolute left-0 top-0 z-20 w-full -translate-y-1/2">
        <WaveSeparator />
      </div>
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="uc-display text-center"
          dangerouslySetInnerHTML={tHtml('landingEmail.calculator.title')}
        />
        <p className="uc-lead mx-auto mt-3 max-w-2xl text-center">
          {t('landingEmail.calculator.subtitle')}
        </p>

        <div className="mt-14 grid items-stretch gap-6 max-w-4xl mx-auto">
          {/* ── CARD: controles + líneas + total ── */}
          <div className="rounded-[28px] border border-uc-line bg-[linear-gradient(180deg,#0d1422_0%,#06090f_20%)] p-4 sm:p-6 md:p-7">
            
            {/* Heading "Tu presupuesto estimado" */}
            <div className="mb-4 flex items-center gap-3 border-b border-uc-line pb-4">
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-uchooseit text-white"
                aria-hidden="true"
              >
                <LuBriefcase className="h-5 w-5" />
              </span>
              <h3 className="text-base font-extrabold uppercase tracking-wide text-white sm:text-lg">
                {t('landingEmail.calculator.budgetSectionTitle')}
              </h3>
            </div>
            
            {/* Selectores */}
            <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <ControlCard Icon={LuGlobe} label={t('landingEmail.calculator.countryLabel')}>
                <PillSelect
                  value={country}
                  onChange={(v) => setCountry(v)}
                  options={COUNTRIES.map((c) => ({ value: c, label: t(countryKey(c)) }))}
                  ariaLabel={t('landingEmail.calculator.countryLabel')}
                />
              </ControlCard>

              <ControlCard Icon={LuUsers} label={t('landingEmail.calculator.travelersLabel')}>
                <PillSelect
                  value={travelers}
                  onChange={(v) => setTravelers(v)}
                  options={TRAVELERS_OPTIONS.map((n) => ({ value: n, label: travelerLabel(n) }))}
                  ariaLabel={t('landingEmail.calculator.travelersLabel')}
                />
              </ControlCard>

              <ControlCard Icon={LuCalendarDays} label={t('landingEmail.calculator.durationLabel')}>
                <PillSelect
                  value={duration}
                  onChange={(v) => setDuration(v)}
                  options={DURATION_OPTIONS.map((d) => ({ value: d, label: t('landingEmail.calculator.daysOption', { days: String(d) }) }))}
                  ariaLabel={t('landingEmail.calculator.durationLabel')}
                />
              </ControlCard>

              <ControlCard Icon={LuMapPin} label={t('landingEmail.calculator.destinationLabel')}>
                <div className="text-base font-bold text-white">
                  {t('landingEmail.calculator.destinationValue')}
                </div>
              </ControlCard>
            </div>


            {/* Líneas */}
            <div className="divide-y divide-white/[0.06]">
              {items.map((it) => {
                const Icon = it.Icon
                const lineTotal = getItemTotal(it, travelers, duration)
                const canRemove = it.isCustom === true || it.removable === true
                return (
                  <div
                    key={it.id}
                    className="flex items-center gap-2.5 py-2.5 sm:gap-3 sm:py-3"
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                      <Icon className="h-5 w-5 shrink-0 text-white sm:h-6 sm:w-6" />
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-white sm:text-base">
                          {it.label}
                        </p>
                        <p className="text-xs text-uc-fg-mute">
                          {dynamicNote(it)}
                        </p>
                      </div>
                    </div>
                    <span className="hidden shrink-0 rounded-full border border-uc-line bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-uc-fg-mute md:inline-flex">
                      {it.type === 'shared'
                        ? t('landingEmail.calculator.typeShared')
                        : t('landingEmail.calculator.typePerPerson')}
                    </span>
                    <span className="shrink-0 text-base font-extrabold tabular-nums text-white sm:text-lg">
                      {fmt(lineTotal)}
                    </span>
                    {canRemove && (
                      <button
                        type="button"
                        onClick={() => removeItem(it.id)}
                        aria-label="✕"
                        className="shrink-0 cursor-pointer px-1 text-uc-fg-mute transition hover:text-uc-red"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Agregar gasto */}
            {!adding ? (
              <button
                type="button"
                onClick={() => setAdding(true)}
                className="mt-4 inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-dashed border-blue-uchooseit px-3.5 py-2 text-[13px] font-semibold text-blue-uchooseit transition hover:bg-blue-uchooseit/10"
              >
                {t('landingEmail.calculator.addExpense')}
              </button>
            ) : (
              <AddDraft
                draft={draft}
                setDraft={setDraft}
                onCancel={cancelDraft}
                onConfirm={confirmDraft}
                t={t}
              />
            )}

            {/* Total bar */}
            <div className="mt-5 flex items-center justify-between rounded-2xl bg-blue-uchooseit px-5 py-3.5">
              <b className="text-sm uppercase tracking-wider text-white">
                {t('landingEmail.calculator.totalLabel')}
                <span className="block text-xs font-normal">
                  {items.length} {t('landingEmail.calculator.linesLabel')}
                </span>
              </b>
              <span className="text-[clamp(1.6rem,3vw,2.2rem)] font-black tabular-nums text-white">
                {fmt(total)}
              </span>
            </div>
          </div>

          {/* ── SIDEBAR: ahorro ── */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="flex flex-col gap-4 rounded-[28px] border border-uc-line bg-[radial-gradient(60%_60%_at_80%_0%,rgba(136,76,252,0.18),transparent_70%),linear-gradient(180deg,#0d1422_0%,#06090f_100%)] p-4 sm:p-5 md:p-7"
          >
            <div className="flex items-center gap-3">
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-purple-shop text-white"
                aria-hidden="true"
              >
                <LuTag className="h-5 w-5" />
              </span>
              <h3 className="text-base font-extrabold uppercase tracking-wide text-purple-shop sm:text-lg">
                {t('landingEmail.calculator.savingsSectionTitle')}
              </h3>
            </div>

            <div className="rounded-[20px] bg-white/[0.04] p-5 text-center">
              <p className="text-[clamp(3rem,6vw,4.5rem)] font-black leading-none text-purple-shop">
                {Math.round(CALC_SAVINGS_RATE * 100)}%
              </p>
              <p className="mt-2 text-sm text-uc-fg-dim sm:text-base">
                {t('landingEmail.calculator.percentLabel')}
              </p>
              <div className="my-5 h-px w-full bg-white/10" />
              <p className="text-[clamp(2rem,4vw,3rem)] font-black leading-none tabular-nums text-purple-shop">
                {fmt(savings)}
              </p>
              <p className="mt-2 text-sm font-bold text-white sm:text-base">
                {t('landingEmail.calculator.savingsEstimatedLabel')}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-uc-fg-mute">
                {t('landingEmail.calculator.savingsDisclaimer')}
              </p>
            </div>

            <SubscribeButton
              label={t('landingEmail.calculator.cta')}
              modalTitle={t('landingEmail.calculator.modalTitle')}
              modalSubtitle={t('landingEmail.calculator.modalSubtitle')}
              variant="purple"
              className="self-center"
            />
          </motion.aside>
        </div>
      </div>
      {/* Wave inferior — corta con la sección siguiente */}
      <div className="absolute bottom-0 left-0 z-20 w-full translate-y-1/2">
        <WaveSeparator />
      </div>
    </section>
  )
}

/* ──────── Sub-componentes ──────── */

function ControlCard({
  Icon,
  label,
  children,
}: {
  Icon: LucideIcon
  label: string
  children: ReactNode
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-uc-line bg-uc-ink-2 p-3">
      <Icon className="h-6 w-6 shrink-0 text-white" />
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-uc-fg-mute">
          {label}
        </p>
        {children}
      </div>
    </div>
  )
}

function AddDraft({
  draft,
  setDraft,
  onCancel,
  onConfirm,
  t,
}: {
  draft: Draft
  setDraft: Dispatch<SetStateAction<Draft>>
  onCancel: () => void
  onConfirm: () => void
  t: (key: string, vars?: Record<string, string>) => string
}) {
  return (
    <div className="mt-4 rounded-xl border border-uc-line bg-uc-ink-2 p-3.5">
      <div className="grid gap-2.5">
        <input
          autoFocus
          value={draft.label}
          onChange={(e) => setDraft((d) => ({ ...d, label: e.target.value }))}
          onKeyDown={(e) => e.key === 'Enter' && onConfirm()}
          placeholder={t('landingEmail.calculator.namePlaceholder')}
          aria-label={t('landingEmail.calculator.namePlaceholder')}
          className="rounded-md border border-uc-line bg-uc-ink px-3 py-2 text-sm text-white outline-none placeholder:text-uc-fg-faint focus:border-blue-uchooseit"
        />
        <input
          value={draft.sub}
          onChange={(e) => setDraft((d) => ({ ...d, sub: e.target.value }))}
          onKeyDown={(e) => e.key === 'Enter' && onConfirm()}
          placeholder={t('landingEmail.calculator.detailPlaceholder')}
          aria-label={t('landingEmail.calculator.detailPlaceholder')}
          className="rounded-md border border-uc-line bg-uc-ink px-3 py-2 text-sm text-white outline-none placeholder:text-uc-fg-faint focus:border-blue-uchooseit"
        />
        <span className="inline-flex items-center rounded-md border border-uc-line bg-uc-ink px-3 py-2 text-sm">
          <span className="mr-1 text-uc-fg-mute">$</span>
          <input
            inputMode="numeric"
            value={draft.amount}
            onChange={(e) => setDraft((d) => ({ ...d, amount: e.target.value }))}
            onKeyDown={(e) => e.key === 'Enter' && onConfirm()}
            placeholder={t('landingEmail.calculator.amountPlaceholder')}
            aria-label="USD"
            className="w-full bg-transparent text-left font-semibold text-white outline-none placeholder:text-uc-fg-faint"
          />
        </span>
      </div>
      <div className="mt-3 flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="cursor-pointer rounded-full px-4 py-1.5 text-[13px] font-semibold text-uc-fg-mute transition hover:text-white"
        >
          {t('landingEmail.calculator.cancel')}
        </button>
        <button
          type="button"
          onClick={onConfirm}
          disabled={!draft.label.trim()}
          className="cursor-pointer rounded-full bg-blue-uchooseit px-4 py-1.5 text-[13px] font-bold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {t('landingEmail.calculator.confirm')}
        </button>
      </div>
    </div>
  )
}
