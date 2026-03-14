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
  textColor: string
  icon: IconType
}[] = [
  { bgTint: 'bg-green-100 dark:bg-green-900/30', textColor: 'text-green-600 dark:text-green-400', icon: MdSavings },
  { bgTint: 'bg-cyan-100 dark:bg-cyan-900/30', textColor: 'text-cyan-600 dark:text-cyan-400', icon: MdLocalOffer },
  { bgTint: 'bg-purple-100 dark:bg-purple-900/30', textColor: 'text-purple-600 dark:text-purple-400', icon: MdMap },
  { bgTint: 'bg-amber-100 dark:bg-amber-900/30', textColor: 'text-amber-600 dark:text-amber-400', icon: MdLoyalty },
  { bgTint: 'bg-indigo-100 dark:bg-indigo-900/30', textColor: 'text-indigo-600 dark:text-indigo-400', icon: MdStorefront },
  { bgTint: 'bg-green-100 dark:bg-green-900/30', textColor: 'text-green-600 dark:text-green-400', icon: MdGroups },
  { bgTint: 'bg-yellow-100 dark:bg-yellow-900/30', textColor: 'text-yellow-600 dark:text-yellow-400', icon: MdStars },
  { bgTint: 'bg-cyan-100 dark:bg-cyan-900/30', textColor: 'text-cyan-600 dark:text-cyan-400', icon: MdMonetizationOn },
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
              <card.icon className={`${card.textColor} text-2xl`} />
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
