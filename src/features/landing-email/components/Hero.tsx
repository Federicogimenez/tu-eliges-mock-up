import { useTranslation } from '../../../hooks/useTranslation'
import { useTrafficTemp, type TrafficTemp } from '../../../hooks/useTrafficTemp'
import { motion } from 'framer-motion'
import WaveSeparator from '../../../shared/components/WaveSeparator'

interface HeroProps {
  variant: 'usa' | 'latam'
}

const TEMP_MAP: Record<TrafficTemp, string> = {
  c: 'cold',
  w: 'warm',
  h: 'hot',
}

export default function Hero({ variant }: HeroProps) {
  const { t } = useTranslation()
  const temp = useTrafficTemp()

  const tempKey = TEMP_MAP[temp]
  const prefix = `landingEmail.${variant}.hero.${tempKey}`

  return (
    <section className="relative w-full h-[85dvh] min-h-[300px] flex flex-col items-center justify-end pb-14 px-4 text-white">
      {/* Gradient overlay: transparent top → 30% black bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none " />
      <div className="relative max-w-3xl text-center">
        <h1 className="relative text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-[1.1]">
          {t(`${prefix}.headline`)}
        </h1>
        <p className="text-lg md:text-xl mb-3 text-neutral-200">
          {t(`${prefix}.subheadline`)}
        </p>

        {/* Soft CTA — scroll hint */}
        <div
          onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
          className="mt-6 w-fit mx-auto flex flex-col items-center gap-1 cursor-pointer transition-all duration-300 hover:underline underline-offset-4"
        >
          <span className="text-sm text-neutral-200  tracking-wide">
            {t(`landingEmail.${variant}.hero.scrollCta`)}
          </span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-neutral-300/80"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </motion.svg>
        </div>
      </div>

      <div className="absolute z-20 bottom-0 translate-y-1/2 left-0 w-full">
        <WaveSeparator />
      </div>
    </section>
  )
}
