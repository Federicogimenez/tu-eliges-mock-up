import { useState } from 'react'
import { useTranslation } from '../../../hooks/useTranslation'
import WaveSeparator from '../../../shared/components/WaveSeparator'

interface SavingsShowcaseProps {
  variant: 'usa' | 'latam'
}

type TopicKey = 0 | 1 | 2 | 3

const TOPIC_COLORS = ['#884cfc', '#00b3eb', '#f5b800', '#e82c8d']

const stepColors = [
  'bg-blue-uchooseit/60',
  'bg-blue-uchooseit/80',
  'bg-blue-uchooseit',
]

const brandsByTopic: Record<TopicKey, string[]> = {
  0: [
    '/trendy/shop/articles/1/brand.png',
    '/trendy/shop/articles/2/brand.png',
    '/trendy/shop/articles/3/brand.png',
    '/trendy/shop/articles/4/brand.png',
    '/trendy/shop/articles/5/brand.png',
    '/trendy/shop/articles/6/brand.png',
  ],
  1: [
    '/trendy/travel/articles/alamo.png',
    '/trendy/travel/articles/avis.png',
    '/trendy/travel/articles/carnival.png',
    '/trendy/travel/articles/disney.png',
    '/trendy/travel/articles/flights.png',
    '/trendy/travel/articles/wyndham.png',
  ],
  2: [
    '/trendy/dining/articles/papaj.png',
    '/trendy/dining/articles/la-ventana.png',
    '/trendy/dining/articles/burgerk.png',
    '/trendy/dining/articles/dominos.png',
    '/trendy/dining/articles/dq.png',
    '/trendy/dining/articles/subway.png',
  ],
  3: [
    '/trendy/entertainment/articles/disney.png',
    '/trendy/entertainment/articles/six.png',
    '/trendy/entertainment/articles/universal.png',
    '/trendy/entertainment/articles/lego.png',
    '/trendy/entertainment/articles/cine.png',
    '/trendy/entertainment/articles/zoo-mia.png',
  ],
}

// TODO: Add LATAM-specific brand categorization when available
const brandsByTopicLatam = brandsByTopic

export default function SavingsShowcase({ variant }: SavingsShowcaseProps) {
  const { t } = useTranslation()
  const [activeTopic, setActiveTopic] = useState<TopicKey>(0)

  const prefix = `landingEmail.${variant}`
  const brands = variant === 'latam' ? brandsByTopicLatam : brandsByTopic

  return (
    <section className="relative z-10 bg-white dark:bg-neutral-950 transition-colors duration-300 pt-4 pb-0 -translate-y-1">
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-neutral-900 dark:text-white mb-2">
          {t(`${prefix}.savings.title`)}
        </h2>
        <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mb-8">
          {t(`${prefix}.savings.subtitle`)}
        </p>

        {/* Topic Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {([0, 1, 2, 3] as TopicKey[]).map((i) => (
            <button
              key={i}
              onClick={() => setActiveTopic(i)}
              style={{
                background: activeTopic === i ? TOPIC_COLORS[i] : 'transparent',
                border: `1px solid ${TOPIC_COLORS[i]}`,
                color: activeTopic === i ? '#fff' : TOPIC_COLORS[i],
              }}
              className="cursor-pointer px-4 py-1.5 rounded-full text-sm font-medium transition-all"
            >
              {t(`${prefix}.savings.topics.${i}.label`)}
            </button>
          ))}
        </div>

        {/* Phone Frame + Brands Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          {/* Phone Frame placeholder */}
          <div
            className="shrink-0 w-48 rounded-[2rem] border-4 border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 overflow-hidden shadow-xl"
            style={{ aspectRatio: '9/18.5' }}
          >
            <div className="w-full h-full flex items-center justify-center text-neutral-400 dark:text-neutral-500 text-xs text-center p-4">
              {/* TODO: Add phone-frame video per topic */}
              <span>Preview<br />{t(`${prefix}.savings.topics.${activeTopic}.label`)}</span>
            </div>
          </div>

          {/* Brands Grid */}
          <div className="w-full max-w-xs">
            <div className="grid grid-cols-3 gap-3">
              {brands[activeTopic].map((brand, i) => (
                <div
                  key={`${activeTopic}-${i}`}
                  className="bg-white rounded-xl p-3 flex items-center justify-center aspect-square shadow-md border border-neutral-100 dark:border-transparent"
                >
                  <img
                    src={brand}
                    alt={`Partner brand ${i + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-center text-sm text-neutral-600 dark:text-neutral-300 mb-2">
          {t(`${prefix}.savings.footer`)}
        </p>
        <p className="text-center text-xs text-neutral-400 dark:text-neutral-500 mb-16">
          {t(`${prefix}.savings.disclaimer`)}
        </p>

        {/* How It Works */}
        <h3 className="text-2xl md:text-3xl font-bold text-center text-neutral-900 dark:text-white mb-10">
          {t(`${prefix}.howItWorks.title`)}
        </h3>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div
                className={`w-12 h-12 ${stepColors[i]} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}
              >
                {i + 1}
              </div>
              <h4 className="font-bold text-lg text-neutral-900 dark:text-white">
                {t(`${prefix}.howItWorks.steps.${i}.title`)}
              </h4>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {t(`${prefix}.howItWorks.steps.${i}.description`)}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-neutral-600 dark:text-neutral-300 font-medium mb-8">
          {t(`${prefix}.howItWorks.closing`)}
        </p>

      </div>

      {/* Wave separator to transition to Closing (transparent bg = video visible) */}
      <div className="absolute z-20 bottom-0 translate-y-1/2 left-0 w-full">
        <WaveSeparator />
      </div>
    </section>
  )
}
