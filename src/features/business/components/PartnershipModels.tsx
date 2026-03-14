import { MdPayments, MdInventory2, MdCheckCircle, MdVerifiedUser } from 'react-icons/md'
import type { IconType } from 'react-icons'
import BookCallButton from './BookCallButton'
import LookingToAchieve from './LookingToAchieve'
import { useTranslation } from '../../../hooks/useTranslation';

interface PartnershipModelsProps {
  onBookCall: () => void
}

const modelStyles: {
  key: 'rsm' | 'bulk'
  icon: IconType
  gradientFrom: string
  borderColor: string
  subtitleColor: string
  iconColor: string
  checkColor: string
  bulletCount: number
}[] = [
  {
    key: 'rsm',
    icon: MdPayments,
    gradientFrom: 'from-purple-100 dark:from-purple-900/40',
    borderColor: 'border-purple-300 dark:border-purple-500/20',
    subtitleColor: 'text-purple-600 dark:text-purple-400',
    iconColor: 'text-purple-600 dark:text-purple-400',
    checkColor: 'text-purple-600 dark:text-purple-500',
    bulletCount: 3,
  },
  {
    key: 'bulk',
    icon: MdInventory2,
    gradientFrom: 'from-blue-100 dark:from-blue-900/40',
    borderColor: 'border-blue-300 dark:border-blue-500/20',
    subtitleColor: 'text-blue-600 dark:text-blue-400',
    iconColor: 'text-blue-600 dark:text-blue-400',
    checkColor: 'text-blue-600 dark:text-blue-500',
    bulletCount: 3,
  },
]

export default function PartnershipModels({ onBookCall }: PartnershipModelsProps) {
  const { t } = useTranslation();

  return (
    <div className="px-6 pb-12 max-w-6xl mx-auto">
      {/* Badge + Title */}
      <section className="text-center mb-12">
        <span className="inline-block px-4 py-1 rounded-full border border-blue-b2b/30 bg-blue-b2b/10 text-blue-b2b text-[10px] font-bold uppercase tracking-widest mb-4">
          {t('business.partnershipModels.badge')}
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          {t('business.partnershipModels.title1')}<br />
          <span className="bg-gradient-to-r from-blue-b2b to-purple-500 bg-clip-text text-transparent">
            {t('business.partnershipModels.title2')}
          </span>
        </h2>
        <p className="text-gray-500 dark:text-gray-200 text-sm mt-3">
          {t('business.partnershipModels.subtitle')}
        </p>
      </section>

      {/* Models Grid */}
      <section className="grid portrait:grid-cols-1 landscape:grid-cols-2 gap-4 mb-12 mx-auto max-w-2xl">
        {modelStyles.map((model) => (
          <div
            key={model.key}
            className={`bg-gradient-to-b ${model.gradientFrom} to-white dark:to-black rounded-3xl flex flex-col justify-evenly items-start min-h-72 p-5 border ${model.borderColor}`}
          >
            <div className='flex justify-start items-center gap-x-3 mb-4'>
              <model.icon className={`${model.iconColor} text-6xl`} />
              <h4 className="font-bold text-xl mb-1">
                {t(`business.partnershipModels.${model.key}.tag`)} <br />
                <strong  className={`text-[10px] ${model.subtitleColor} font-bold uppercase tracking-wider mb-4`}>
                  {t(`business.partnershipModels.${model.key}.title`)}
                </strong>
              </h4>
            </div>
            <p className='text-base text-gray-500 dark:text-neutral-400'>
              {t(`business.partnershipModels.${model.key}.description`)}
            </p>
            <ul className="space-y-3 py-6">
              {Array.from({ length: model.bulletCount }, (_, i) => (
                <li key={i} className="flex items-start gap-2 text-[11px] text-gray-600 dark:text-gray-300">
                  <MdCheckCircle className={`${model.checkColor} text-[14px] mt-0.5`} />
                  <span>{t(`business.partnershipModels.${model.key}.bullets.${i}`)}</span>
                </li>
              ))}
            </ul>
            <p className='text-base text-gray-500 dark:text-neutral-400 mb-2'>
              {t(`business.partnershipModels.${model.key}.bestFor`)}
            </p>
          </div>
        ))}
      </section>

      {/* What Are You Looking to Achieve? */}
      <LookingToAchieve />

      {/* CTA */}
      <section className="text-center space-y-6">
        <p className="text-gray-500 dark:text-gray-300 text-xs">{t('business.partnershipModels.notSure')}</p>
        <BookCallButton onClick={onBookCall} text_1={t('business.partnershipModels.bookACall')} text_2={t('business.partnershipModels.letsTalkStrategy')} />
        <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 text-[10px]">
          <MdVerifiedUser className="text-[14px]" />
          {t('business.partnershipModels.noObligation')}
        </div>
      </section>
    </div>
  )
}
