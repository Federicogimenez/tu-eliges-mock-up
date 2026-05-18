/**
 * data.ts — Datos de la maqueta landing-latam (DESECHABLE).
 *
 * Todo lo marcado `// EDITABLE:` se ajusta en una iteración posterior
 * (videos finales por persona, montos canónicos de la calculadora, etc.).
 * Ver .claude/features/landing-latam/brief.md.
 */

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

// EDITABLE: 3 testimonios sin descripción. Hoy TODOS muestran el mismo video
// (/brian-discounts.mp4) — reemplazar por el video real de cada persona
// cuando el cliente los entregue.
const SHARED_VIDEO = '/brian-discounts.mp4'

export const MEMBERS: Member[] = [
  {
    id: 'viviana',
    name: 'Viviana',
    avatar: '/viviana-profile.png',
    videos: [{ src: SHARED_VIDEO }],
  },
  {
    id: 'brian',
    name: 'Brian',
    avatar: '/brian-profile.png',
    videos: [{ src: SHARED_VIDEO }],
  },
  {
    id: 'alexandra',
    name: 'Alexandra',
    avatar: '/alexandra-profile.png',
    videos: [{ src: SHARED_VIDEO }],
  },
]

/* ─────────────────────────── Trend calculator ────────────────────────── */

export interface CalcLine {
  id: string
  /** Emoji-icono (excepción del DS: permitido en la calculadora). */
  icon: string
  label: string
  sub: string
  amount: number
}

export interface CalcMeta {
  trendLabel: string
  title: string
  flag: string
  meta: string[]
}

// EDITABLE: metadata + líneas por defecto de la calculadora "Viaje a USA
// Mundial 2026". Montos tomados de la referencia del DS (TrendCalculator.jsx);
// los valores canónicos se confirman en una iteración posterior.
export const CALC_META: CalcMeta = {
  trendLabel: 'Mundial 2026',
  title: 'Viaje a USA',
  flag: '🇺🇸',
  meta: ['📍 Miami · Orlando', '📅 15 días', '👥 2 personas'],
}

export const DEFAULT_LINES: CalcLine[] = [
  { id: 'stay', icon: '🏨', label: 'Alojamiento', sub: 'Hotel 3★ promedio · $180 / noche · 15 noches', amount: 2700 },
  { id: 'car', icon: '🚗', label: 'Renta de auto', sub: '$60 / día · 15 días', amount: 900 },
  { id: 'fuel', icon: '⛽', label: 'Gasolina + peajes', sub: 'Incluye parqueaderos', amount: 250 },
  { id: 'food', icon: '🍔', label: 'Comida (2 personas)', sub: '$100 / día · 15 días', amount: 1500 },
  { id: 'match', icon: '⚽', label: 'Partido del Mundial', sub: '2 entradas (fase de grupos) · $600 c/u', amount: 1200 },
  { id: 'park', icon: '🎢', label: 'Parque temático', sub: '2 días en Orlando · $180 / persona / día', amount: 720 },
  { id: 'tours', icon: '📸', label: 'Actividades + extras', sub: 'Tours, compras, souvenirs', amount: 500 },
  { id: 'flight', icon: '✈️', label: 'Vuelos internacionales', sub: 'Ida y vuelta LATAM · $700 / persona', amount: 1400 },
]

/** Ahorro promedio estimado para miembros premium (sobre el total). */
export const CALC_SAVINGS_RATE = 0.3 // EDITABLE: % de ahorro mostrado en el pitch
