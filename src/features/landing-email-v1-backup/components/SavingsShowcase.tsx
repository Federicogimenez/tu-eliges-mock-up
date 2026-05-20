import { useState } from 'react'
import { useTranslation } from '../../../hooks/useTranslation'
import { useCountry } from '../../../hooks/useCountry'
import WaveSeparator from '../../../shared/components/WaveSeparator'

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

const brandsByTopicLatam: Record<TopicKey, string[]> = {
  0: [
    '/landing-email/brands-latam/Car-Rental1.png',
    '/landing-email/brands-latam/Car-Rental2.png',
    '/landing-email/brands-latam/Car-Rental3.png',
    '/landing-email/brands-latam/Car-Rental4.png',
    '/landing-email/brands-latam/Car-Rental5.png',
    '/landing-email/brands-latam/Car-Rental6.png',
  ],
  1: [
    '/landing-email/brands-latam/Hotels1.png',
    '/landing-email/brands-latam/Hotels2.png',
    '/landing-email/brands-latam/Hotels3.png',
    '/landing-email/brands-latam/Hotels4.png',
    '/landing-email/brands-latam/Hotels5.png',
    '/landing-email/brands-latam/Hotels6.jpeg',
  ],
  2: [
    '/landing-email/brands-latam/Dining1.png',
    '/landing-email/brands-latam/Dining2.png',
    '/landing-email/brands-latam/Dining3.png',
    '/landing-email/brands-latam/Dining4.png',
    '/landing-email/brands-latam/Dining5.png',
    '/landing-email/brands-latam/Dining6.png',
  ],
  3: [
    '/landing-email/brands-latam/Park1.png',
    '/landing-email/brands-latam/Park2.png',
    '/landing-email/brands-latam/Park3.png',
    '/landing-email/brands-latam/Park4.png',
    '/landing-email/brands-latam/Park5.png',
    '/landing-email/brands-latam/Park6.png',
  ],
}

const videosByTopic: Record<TopicKey, string> = {
  0: '/landing-email/rent.webm',
  1: '/landing-email/hoteles.webm',
  2: '/landing-email/comida.webm',
  3: '/landing-email/parque.webm',
}

export default function SavingsShowcase() {
  const { t } = useTranslation()
  const { country } = useCountry()
  const [activeTopic, setActiveTopic] = useState<TopicKey>(0)
  const [videosReady, setVideosReady] = useState<Set<number>>(new Set())

  const handleTopicChange = (topic: TopicKey) => {
    setActiveTopic(topic)
  }

  const handleVideoReady = (topic: TopicKey) => {
    setVideosReady(prev => {
      const next = new Set(prev)
      next.add(topic)
      return next
    })
  }

  const isLatam = country !== 'usa'
  const prefix = 'landingEmail'
  const brands = isLatam ? brandsByTopicLatam : brandsByTopic

  return (
    <section className="relative z-10 bg-white dark:bg-black transition-colors duration-300 pt-4 pb-0 -translate-y-1">
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Title */}
        <h2 className="heading-1 text-lg text-center text-neutral-900 dark:text-white mb-2">
          {t(`${prefix}.savings.title`)}
        </h2>
        <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mb-8">
          {t(`${prefix}.savings.subtitle`)}
        </p>

        {/* Topic Chips */}
        <div className="flex md:hidden flex-wrap justify-center gap-3 mb-10">
          {([0, 1, 2, 3] as TopicKey[]).map((i) => (
            <button
              key={i}
              onClick={() => handleTopicChange(i)}
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
            className="relative shrink-0 w-48 rounded-[2rem] border-4 border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-800 overflow-hidden shadow-xl"
            style={{ aspectRatio: '9/18.5' }}
          >
            {!videosReady.has(activeTopic) && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-8 h-8 border-3 border-neutral-300 border-t-blue-uchooseit rounded-full animate-spin" />
              </div>
            )}
            {([0, 1, 2, 3] as TopicKey[]).map((topic) => (
              <video
                key={topic}
                src={videosByTopic[topic]}
                autoPlay
                muted
                loop
                playsInline
                onCanPlayThrough={() => handleVideoReady(topic)}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${activeTopic === topic && videosReady.has(topic) ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>

          {/* Brands Grid */}
          <div className="w-full max-w-md">
            {/* Topic Chips Desktop */}
            <div className="hidden md:flex flex-wrap justify-center gap-3 mb-10">
              {([0, 1, 2, 3] as TopicKey[]).map((i) => (
                <button
                  key={i}
                  onClick={() => handleTopicChange(i)}
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
        <p className="text-center text-sm text-neutral-600 dark:text-neutral-300 mb-6">
          {t(`${prefix}.savings.footer`)}
        </p>
        <p className="text-center text-xs text-neutral-600 dark:text-neutral-300 mb-10">
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
