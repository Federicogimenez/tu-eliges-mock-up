import { useTranslation } from '../../../hooks/useTranslation'
import EmailCaptureForm from './EmailCaptureForm'

interface ClosingProps {
  variant: 'usa' | 'latam'
  isRegistered: boolean
  onRegister: (email: string) => void
}

export default function Closing({ variant, isRegistered, onRegister }: ClosingProps) {
  const { t } = useTranslation()

  const prefix = `landingEmail.${variant}.closing`

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
        <p className="text-base md:text-lg text-neutral-300 mb-10">
          {t(`${prefix}.line3`)}
        </p>

        <div className="flex justify-center">
          <EmailCaptureForm variant={variant} context="closing" isRegistered={isRegistered} onRegister={onRegister} />
        </div>

        <p className="mt-8 text-xs text-white">
          {t(`${prefix}.disclaimer`)}
        </p>
      </div>
    </section>
  )
}
