/**
 * data.ts — Datos de la landing /save (campaña Mundial 2026).
 *
 * Todo lo marcado `// EDITABLE:` se ajusta en una iteración posterior
 * (videos finales por persona, montos canónicos de la calculadora, etc.).
 * Migrado desde la maqueta landing-latam. Ver
 * .claude/features/landing-email-migration/brief.md.
 */

import type { ComponentType, CSSProperties } from 'react'
import {
  LuPlane,
  LuHotel,
  LuUtensils,
  LuCar,
  LuFuel,
  LuTicket,
  LuCircleParking,
  LuCastle,
  LuStar,
} from 'react-icons/lu'

/* ───────────────────────── Community carousel ───────────────────────── */

export interface MemberVideo {
  /** Ruta pública del video. Se carga ON-DEMAND. */
  src: string
  /** Caption opcional sobre el video. Sin descripción → omitir. */
  caption?: string
}

export interface Member {
  id: string
  name: string
  /** Foto de perfil (public/). */
  avatar: string
  /** Videos asociados a esta persona — se cargan ON-DEMAND. */
  videos: MemberVideo[]
}

// EDITABLE: 3 testimonios sin descripción, un video por persona
// (public/testimonials/videos-latam/).

export const MEMBERS: Member[] = [
  {
    id: 'viviana',
    name: 'Viviana',
    avatar: '/viviana-profile.png',
    videos: [{ src: '/testimonials/videos-latam/vivi.mp4' }],
  },
  {
    id: 'brian',
    name: 'Brian',
    avatar: '/brian-profile.png',
    videos: [{ src: '/testimonials/videos-latam/brian.mp4' }],
  },
  {
    id: 'alexandra',
    name: 'Alexandra',
    avatar: '/alexandra-profile.png',
    videos: [{ src: '/testimonials/videos-latam/alex.mp4' }],
  },
]

/* ─────────────────────────── Trend calculator ────────────────────────── */

export type DepartureCountry = 'arg' | 'col' | 'mex'
export type ExpenseType = 'per_person' | 'shared'
export type CalcKind = 'fixed' | 'per_day' | 'per_night' | 'per_match'

/** Componente de ícono compatible con react-icons (acepta className/style). */
export type LucideIcon = ComponentType<{
  className?: string
  style?: CSSProperties
}>

export interface TravelItem {
  id: string
  Icon: LucideIcon
  /** Label en español (data de campaña — follow-up i18n). */
  label: string
  type: ExpenseType
  calc: CalcKind
  unitAmount: number
  /** Override del unitAmount según país de salida (sólo Vuelos). */
  baseByCountry?: Partial<Record<DepartureCountry, number>>
  /** Nota estática (fallback para items custom 'fixed' agregados). */
  note?: string
  /** Si true, el item se puede quitar de la cuenta con el botón ✕. */
  removable?: boolean
}

/** Opciones de selectores. */
export const COUNTRIES: DepartureCountry[] = ['arg', 'col', 'mex']
export const DURATION_OPTIONS: readonly number[] = [7, 10, 15, 20, 30]
export const TRAVELERS_OPTIONS: readonly number[] = [1, 2, 3, 4]

// EDITABLE: precios base de vuelo por país de salida.
const FLIGHT_BY_COUNTRY: Record<DepartureCountry, number> = {
  arg: 800,
  col: 400,
  mex: 300,
}

// EDITABLE: 9 categorías de la campaña Mundial 2026 (referencia DS).
export const DEFAULT_ITEMS: TravelItem[] = [
  {
    id: 'flight',
    Icon: LuPlane,
    label: 'Vuelo internacional',
    type: 'per_person',
    calc: 'fixed',
    unitAmount: FLIGHT_BY_COUNTRY.arg,
    baseByCountry: FLIGHT_BY_COUNTRY,
  },
  {
    id: 'hotel',
    Icon: LuHotel,
    label: 'Alojamiento',
    type: 'shared',
    calc: 'per_night',
    unitAmount: 230,
  },
  {
    id: 'food',
    Icon: LuUtensils,
    label: 'Comida',
    type: 'per_person',
    calc: 'per_day',
    unitAmount: 72,
  },
  {
    id: 'car',
    Icon: LuCar,
    label: 'Alquiler de auto',
    type: 'shared',
    calc: 'per_day',
    unitAmount: 74,
  },
  {
    id: 'gas',
    Icon: LuFuel,
    label: 'Gasolina + peajes',
    type: 'shared',
    calc: 'per_day',
    unitAmount: 12,
  },
  {
    id: 'matches',
    Icon: LuTicket,
    label: 'Tickets partidos Mundial',
    type: 'per_person',
    calc: 'per_match',
    unitAmount: 155,
  },
  {
    id: 'parking',
    Icon: LuCircleParking,
    label: 'Estacionamiento partidos',
    type: 'shared',
    calc: 'per_match',
    unitAmount: 175,
  },
  {
    id: 'themepark',
    Icon: LuCastle,
    label: 'Parque temático en Orlando',
    type: 'per_person',
    calc: 'fixed',
    unitAmount: 150,
    removable: true,
  },
  {
    id: 'extras',
    Icon: LuStar,
    label: 'Actividades extra',
    type: 'per_person',
    calc: 'per_day',
    unitAmount: 17,
    removable: true,
  },
]

/** Cantidad de partidos según duración del viaje (ref. DS). */
export function getMatchCount(duration: number): number {
  if (duration <= 7) return 1
  if (duration <= 10) return 2
  if (duration <= 15) return 3
  if (duration <= 20) return 4
  return 5
}

/** Multiplicador temporal según el modo de cálculo del item. */
export function getTimeFactor(item: TravelItem, duration: number): number {
  const nights = Math.max(duration - 1, 1)
  if (item.calc === 'per_night') return nights
  if (item.calc === 'per_day') return duration
  if (item.calc === 'per_match') return getMatchCount(duration)
  return 1
}

/** Total de una línea = unitAmount × timeFactor × (per_person ? travelers : 1). */
export function getItemTotal(
  item: TravelItem,
  travelers: number,
  duration: number,
): number {
  const peopleMultiplier = item.type === 'per_person' ? travelers : 1
  return item.unitAmount * getTimeFactor(item, duration) * peopleMultiplier
}

/** Ahorro promedio estimado para miembros premium (sobre el total). */
export const CALC_SAVINGS_RATE = 0.11 // EDITABLE: % de ahorro mostrado en el pitch
