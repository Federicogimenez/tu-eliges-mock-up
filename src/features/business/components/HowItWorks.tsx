import { useTranslation } from '../../../hooks/useTranslation';

const stepColors = [
  'bg-blue-b2b/50',
  'bg-blue-b2b/65',
  'bg-blue-b2b/80',
  'bg-blue-b2b',
]

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
        {t('business.howItWorks.title')}
      </h2>

      <div className="space-y-12 max-w-sm mx-auto lg:max-w-4xl lg:grid lg:grid-cols-2 lg:gap-12 lg:space-y-0">
        {stepColors.map((color, idx) => (
          <div key={idx} className="flex gap-6">
            <div
              className={`shrink-0 w-12 h-12 ${color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}
            >
              {idx + 1}
            </div>
            <div>
              <h4 className="font-extrabold text-xl mb-2">{t(`business.howItWorks.steps.${idx}.title`)}</h4>
              <p className="text-gray-600 dark:text-zinc-300 text-sm leading-relaxed">
                {t(`business.howItWorks.steps.${idx}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
