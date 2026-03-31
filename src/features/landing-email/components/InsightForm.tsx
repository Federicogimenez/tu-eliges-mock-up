import { useTranslation } from '../../../hooks/useTranslation'
import EmailCaptureForm from './EmailCaptureForm'

interface InsightFormProps {
  variant: 'usa' | 'latam'
  isRegistered: boolean
  onRegister: (email: string) => void
}

export default function InsightForm({ variant, isRegistered, onRegister }: InsightFormProps) {
  const { t } = useTranslation()

  const insightPrefix = `landingEmail.${variant}.insight`
  const formPrefix = `landingEmail.${variant}.form`

  return (
    <section className="relative z-10 bg-linear-180 from-white/80 to-white to-[100px] dark:from-neutral-950/80 dark:to-neutral-950 transition-colors duration-300">

      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Insight — Problem Agitation */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-6">
              {t(`${insightPrefix}.title`)}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
              {t(`${insightPrefix}.description`)}
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-3">
              {t(`${insightPrefix}.channelsIntro`)}
            </p>
            <ul className="space-y-2 mb-6">
              {[0, 1, 2].map((i) => (
                <li key={i} className="flex items-start gap-2 text-neutral-600 dark:text-neutral-300 text-sm">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-uchooseit shrink-0" />
                  {t(`${insightPrefix}.channels.${i}`)}
                </li>
              ))}
            </ul>
            <p className="text-neutral-700 dark:text-neutral-200 font-medium">
              {t(`${insightPrefix}.closing`)}
            </p>
          </div>

          {/* Form — Email Capture */}
          <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 md:p-8 flex flex-col items-center md:items-start">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-3">
              {t(`${formPrefix}.title`)}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4 leading-relaxed">
              {t(`${formPrefix}.description`)}
            </p>
            <ul className="space-y-2 mb-6 w-full">
              {[0, 1, 2].map((i) => (
                <li key={i} className="flex items-start gap-2 text-neutral-600 dark:text-neutral-300 text-sm">
                  <span className="text-blue-uchooseit font-bold">✓</span>
                  {t(`${formPrefix}.includes.${i}`)}
                </li>
              ))}
            </ul>
            <EmailCaptureForm variant={variant} context="form" isRegistered={isRegistered} onRegister={onRegister} />
          </div>

        </div>
      </div>
    </section>
  )
}
