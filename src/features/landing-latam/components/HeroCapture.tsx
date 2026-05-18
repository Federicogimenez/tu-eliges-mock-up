import WaveSeparator from '../../../shared/components/WaveSeparator'
import EmailCapturePill from './EmailCapturePill'

/**
 * Sección 1 — Hero comunidad-first del nuevo diseño.
 * Display headline con una palabra azul (.hl), glass pill de captura
 * de email (mock) y WaveSeparator inferior para la transición.
 * Sin logo/wordmark (restricción del brief).
 */
export default function HeroCapture() {
  return (
    <section className="relative flex min-h-[85dvh] flex-col items-center justify-center px-5 pb-28 pt-32 text-center text-white">
      {/* Overlay oscuro para legibilidad sobre el video */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/85"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-3xl">
        <h1 className="uc-display">
          Somos una <span className="hl">comunidad</span> de ahorradores con
          acceso a descuentos exclusivos.
        </h1>

        <p className="uc-lead mx-auto mt-6 max-w-xl">
          Unite gratis: recibí tips de ahorro, historias de consumo y ofertas
          exclusivas para viajar a USA.
        </p>

        <div className="mt-8">
          <EmailCapturePill cta="Unirme" />
        </div>

        <p className="mt-5 text-sm font-semibold text-blue-uchooseit sm:text-base">
          Sin tarjeta · cancelás cuando quieras.
        </p>
        <p className="mt-1 text-sm text-white/80">
          <strong className="font-bold">30% OFF</strong> en tu primer año como
          miembro premium.
        </p>
      </div>

      {/* Transición a la sección comunidad */}
      <div className="absolute bottom-0 left-0 z-20 w-full translate-y-1/2">
        <WaveSeparator />
      </div>
    </section>
  )
}
