import { MdCalendarToday, MdCheckCircle, MdLock } from 'react-icons/md'
import BookCallButton from './BookCallButton'
import { useTranslation } from '../../../hooks/useTranslation';

interface StrategyCallCTAProps {
  onBookCall: () => void
}

export default function StrategyCallCTA({ onBookCall }: StrategyCallCTAProps) {
  const { t } = useTranslation();

  const callItems = [
    t('business.strategyCall.bullets.0'),
    t('business.strategyCall.bullets.1'),
    t('business.strategyCall.bullets.2'),
    t('business.strategyCall.bullets.3'),
  ]

  const liveProgramItems = [
    t('business.strategyCall.liveProgram.0'),
    t('business.strategyCall.liveProgram.1'),
    t('business.strategyCall.liveProgram.2'),
  ]

  return (
    <section className="py-16 px-6">
      <div className="max-w-md mx-auto text-center lg:max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
          {t('business.strategyCall.title1')} <br /> {t('business.strategyCall.title2')}
        </h2>
        <p className="text-gray-600 dark:text-zinc-300 mb-10 max-w-lg mx-auto">
          {t('business.strategyCall.description')}
        </p>

        {/* Card */}
        <div className="bg-gray-50 dark:bg-zinc-900 rounded-3xl p-8 text-left shadow-xl mb-8 border border-gray-200 dark:border-zinc-800">
          <h5 className="flex items-center gap-2 font-bold mb-6">
            <MdCalendarToday className="text-blue-b2b" />
            {t('business.strategyCall.cardTitle')}
          </h5>
          <ul className="space-y-4">
            {callItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <MdCheckCircle className="text-blue-b2b text-lg mt-0.5" />
                <p className="text-gray-600 dark:text-zinc-300 text-sm">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <ul className="space-y-4 mx-auto max-w-xl my-10">
        {liveProgramItems.map((item, idx) => (
          <li key={idx} className="flex items-center justify-center gap-3">
            <MdCheckCircle className="text-neutral-400 dark:text-neutral-700 text-lg mt-0.5" />
            <p className="text-gray-600 dark:text-zinc-300 text-sm">{item}</p>
          </li>
        ))}
      </ul>

        {/* CTA Button */}
        <BookCallButton onClick={onBookCall} text_1={t('business.strategyCall.scheduleCall')} text_2={t('business.strategyCall.reserveSession')} />

        {/* Footer */}
        <div className="flex items-center justify-center gap-4 mt-4 text-gray-500 dark:text-zinc-400 text-[10px] uppercase font-bold tracking-widest">
          <span className="flex items-center gap-1">
            <MdLock className="text-[12px]" /> {t('business.strategyCall.noCommitment')}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-zinc-700" />
          <span>{t('business.strategyCall.freeConsultation')}</span>
        </div>
      </div>
    </section>
  )
}
