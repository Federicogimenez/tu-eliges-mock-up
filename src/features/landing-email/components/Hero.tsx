import WaveSeparator from '../../../shared/components/WaveSeparator'
import HubSpotForm from './HubSpotForm'
import { useTranslation } from '../../../hooks/useTranslation'

/**
 * Sección 1 — Hero comunidad-first. Headline con palabra resaltada (.hl),
 * embed HubSpot de captura y WaveSeparator inferior. Copy vía i18n.
 */
export default function Hero() {
  const { t, tHtml } = useTranslation()

  return (
    <section className="relative flex min-h-[85dvh] flex-col items-center justify-center px-5 pb-28 pt-32 text-center text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/85"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-3xl">
        <h1
          className="uc-display"
          dangerouslySetInnerHTML={tHtml('landingEmail.hero.headline')}
        />

        <p className="uc-lead mx-auto mt-6 max-w-xl">
          {t('landingEmail.hero.subcopy')}
        </p>

        <div className="mt-8">
          <HubSpotForm context="form" />
        </div>

        <p
          className="mx-auto mt-4 max-w-md text-sm text-white/85"
          dangerouslySetInnerHTML={tHtml('landingEmail.hero.freeLine')}
        />
      </div>

      <div className="absolute bottom-0 left-0 z-20 w-full translate-y-1/2">
        <WaveSeparator />
      </div>
    </section>
  )
}
