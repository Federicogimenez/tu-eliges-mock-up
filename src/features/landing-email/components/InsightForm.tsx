import { useTranslation } from '../../../hooks/useTranslation'
import { useMemo } from 'react'
import HubSpotForm from './HubSpotForm'

const BRAND_COLORS = ['#2995fc', '#e82c8d', '#ffb807', '#884cfc']

const CONFETTI_SHAPES = [
  // Rectangulo (papelito clasico)
  (color: string) => (
    <rect x="2" y="4" width="16" height="12" fill={color} />
  ),
  // Rombo
  (color: string) => (
    <polygon points="10,1 18,10 10,19 2,10" fill={color} />
  ),
  // Triangulo
  (color: string) => (
    <polygon points="10,2 18,18 2,18" fill={color} />
  ),
]

interface ConfettiPiece {
  id: number
  x: number
  color: string
  shape: number
  scale: number
  delay: number
  duration: number
}

function generateConfetti(count: number): ConfettiPiece[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: BRAND_COLORS[i % BRAND_COLORS.length],
    shape: i % CONFETTI_SHAPES.length,
    scale: 0.6 + Math.random() * 0.6,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 6,
  }))
}

export default function InsightForm() {
  const { t } = useTranslation()
  const confetti = useMemo(() => generateConfetti(15), [])

  const insightPrefix = 'landingEmail.insight'
  const formPrefix = 'landingEmail.form'

  return (
    <section className="relative pb-10 z-10 overflow-hidden backdrop-blur-lg bg-linear-180 from-white/80 to-white to-25% dark:from-neutral-950/40 dark:to-black transition-colors duration-300">

      {/* Confetti — falling loop full width */}
      <div className="absolute inset-x-0 top-0 h-screen min-h-[500px] pointer-events-none" aria-hidden="true">
        {confetti.map((p) => (
          <svg
            key={p.id}
            viewBox="0 0 20 20"
            className="absolute w-5 h-5 md:w-6 md:h-6"
            style={{
              left: `${p.x}%`,
              top: 0,
              opacity: 0,
              transform: `scale(${p.scale})`,
              animation: `confetti-fall ${p.duration}s ${p.delay}s linear infinite`,
              animationFillMode: 'backwards',
            }}
          >
            {CONFETTI_SHAPES[p.shape](p.color)}
          </svg>
        ))}
      </div>

      <div className="relative max-w-3xl mx-auto px-4 pt-20 md:pt-28">
        <div className="relative bg-neutral-600/5  border-blue-uchooseit/20 shadow-md shadow-blue-uchooseit/50 backdrop-blur-sm rounded-2xl p-6 md:p-10 text-center">

          {/* Insight — condensed */}
          <h2 className="heading-2 text-lg uppercase text-blue-uchooseit mb-4">
            -{t(`${insightPrefix}.title`)}-
          </h2>
          <p className="text-white text-xs md:text-base mb-2 leading-relaxed">
            {t(`${insightPrefix}.description`)}
          </p>
          <p className="text-white font-medium text-sm md:text-base mb-8">
            {t(`${insightPrefix}.closing`)}
          </p>

          {/* Form — offer + email capture */}
          <h3 className="heading-1 text-blue-uchooseit mb-2">
            {t(`${formPrefix}.title`)}
          </h3>
          <p className="text-white text-sm mb-3">
            {t(`${formPrefix}.description`)}
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-6">
            {[0, 1].map((i) => (
              <span key={i} className="text-white text-sm">
                <span className="text-white font-bold mr-1">✓</span>
                {t(`${formPrefix}.includes.${i}`)}
              </span>
            ))}
          </div>

          <HubSpotForm context="form" />

          </div>
        </div>
      </section>
  )
}
