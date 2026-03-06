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

const stats: {
  bgTint: string
  textColor: string
  icon: IconType
  stat: string
  label: string
}[] = [
  {
    bgTint: 'bg-green-100 dark:bg-green-900/30',
    textColor: 'text-green-600 dark:text-green-400',
    icon: MdSavings,
    stat: 'Up to 50%',
    label: 'Savings',
  },
  {
    bgTint: 'bg-cyan-100 dark:bg-cyan-900/30',
    textColor: 'text-cyan-600 dark:text-cyan-400',
    icon: MdLocalOffer,
    stat: '1M+',
    label: 'Offers Nationwide',
  },
  {
    bgTint: 'bg-purple-100 dark:bg-purple-900/30',
    textColor: 'text-purple-600 dark:text-purple-400',
    icon: MdMap,
    stat: '94%',
    label: 'U.S. Counties Covered',
  },
  {
    bgTint: 'bg-amber-100 dark:bg-amber-900/30',
    textColor: 'text-amber-600 dark:text-amber-400',
    icon: MdLoyalty,
    stat: '98%',
    label: 'Client Retention',
  },
  {
    bgTint: 'bg-indigo-100 dark:bg-indigo-900/30',
    textColor: 'text-indigo-600 dark:text-indigo-400',
    icon: MdStorefront,
    stat: '382',
    label: 'Major North American Markets',
  },
  {
    bgTint: 'bg-green-100 dark:bg-green-900/30',
    textColor: 'text-green-600 dark:text-green-400',
    icon: MdGroups,
    stat: '99.6%',
    label: 'U.S. Consumers Served',
  },
  {
    bgTint: 'bg-yellow-100 dark:bg-yellow-900/30',
    textColor: 'text-yellow-600 dark:text-yellow-400',
    icon: MdStars,
    stat: '750+',
    label: 'National Brand Partners',
  },
  {
    bgTint: 'bg-cyan-100 dark:bg-cyan-900/30',
    textColor: 'text-cyan-600 dark:text-cyan-400',
    icon: MdMonetizationOn,
    stat: '$2,000+',
    label: 'Potential Annual Savings',
  },
]

export default function AudienceCards() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {stats.map((card) => (
          <div
            key={card.label}
            className="rounded-2xl p-5 border border-gray-200 dark:border-gray-800 flex flex-col items-center text-center gap-3"
          >
            <div className={`${card.bgTint} p-3 rounded-xl`}>
              <card.icon className={`${card.textColor} text-2xl`} />
            </div>
            <span className="text-2xl md:text-3xl font-extrabold">
              {card.stat}
            </span>
            <span className="text-gray-600 dark:text-gray-300 text-sm leading-tight">
              {card.label}
            </span>
          </div>
        ))}
      </section>
    </div>
  )
}
