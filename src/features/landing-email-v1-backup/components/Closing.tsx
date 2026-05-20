import { useTranslation } from '../../../hooks/useTranslation'
import HubSpotForm from './HubSpotForm'

export default function Closing() {
  const { t } = useTranslation()

  const prefix = 'landingEmail.closing'

  return (
    <section className="relative z-10 flex flex-col items-center justify-center px-4 py-24 md:py-32 text-white text-center">
            {/* Top gradient: blends wave separator into solid bg */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/20 dark:bg-neutral-950/20 pointer-events-none" />
      <div className="relative max-w-2xl">
        <p className="text-2xl md:text-3xl font-bold mb-2">
          {t(`${prefix}.line1`)}
        </p>
        <p className="text-lg md:text-xl text-neutral-200 mb-2">
          {t(`${prefix}.line2`)}
        </p>
        <p className="text-base max-w-[350px] md:max-w-full mx-auto md:text-lg text-neutral-300 mb-10">
          {t(`${prefix}.line3`)}
        </p>

        <div className="flex justify-center">
          <HubSpotForm context="closing" />
        </div>

        <p className="mt-8 text-xs text-white">
          {t(`${prefix}.disclaimer`)}
        </p>
      </div>
    </section>
  )
}
