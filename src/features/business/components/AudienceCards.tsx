import {
  MdSavings,
  MdLocalOffer,
  MdMap,
  MdLoyalty,
  MdStorefront,
  MdGroups,
  MdStars,
  MdMonetizationOn,
} from 'react-icons/md'
import type { IconType } from 'react-icons'
import { useTranslation } from '../../../hooks/useTranslation';

const cardStyles: {
  bgTint: string
  icon: IconType
}[] = [
  { bgTint: 'bg-green-500 dark:bg-green-600', icon: MdSavings },
  { bgTint: 'bg-cyan-500 dark:bg-cyan-600', icon: MdLocalOffer },
  { bgTint: 'bg-purple-500 dark:bg-purple-600', icon: MdMap },
  { bgTint: 'bg-amber-500 dark:bg-amber-600', icon: MdLoyalty },
  { bgTint: 'bg-indigo-500 dark:bg-indigo-600', icon: MdStorefront },
  { bgTint: 'bg-green-500 dark:bg-green-600', icon: MdGroups },
  { bgTint: 'bg-yellow-500 dark:bg-yellow-600', icon: MdStars },
  { bgTint: 'bg-cyan-500 dark:bg-cyan-600', icon: MdMonetizationOn },
]

export default function AudienceCards() {
  const { t } = useTranslation();

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {cardStyles.map((card, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-5 border border-gray-200 dark:border-gray-800 flex flex-col items-center text-center gap-3"
          >
            <div className={`${card.bgTint} p-3 rounded-xl`}>
              <card.icon className="text-white text-2xl" />
            </div>
            <span className="text-2xl md:text-3xl font-extrabold">
              {t(`business.audienceCards.items.${idx}.value`)}
            </span>
            <span className="text-gray-600 dark:text-gray-300 text-sm leading-tight">
              {t(`business.audienceCards.items.${idx}.label`)}
            </span>
          </div>
        ))}
      </section>
    </div>
  )
}
