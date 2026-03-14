import { MdSignalCellularAlt, MdWifi, MdBatteryFull, MdSearch } from 'react-icons/md'
import { useTranslation } from '../../../hooks/useTranslation';

export default function OpportunitiesSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Gradient overlay on fixed video */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/70 via-white/60 to-white dark:from-black/60 dark:via-black/50 dark:to-black" />

      {/* Content */}
      <div className="relative z-10 px-6 pt-24 pb-12 w-full max-w-5xl mx-auto md:flex md:items-center md:gap-12">
        {/* Text */}
        <div className="text-center md:text-left md:flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
            {t('business.opportunities.title1')}
          </h2>
          <h3 className="text-3xl md:text-4xl mt-5 font-extrabold">
            <span className="text-blue-b2b">{t('business.opportunities.title2')}</span>
            <br />
            <span className="text-green-b2b">{t('business.opportunities.title3')}</span>
          </h3>
        </div>

        {/* Phone Mockup */}
        <div className="flex flex-col items-center justify-center md:flex-1 mt-10 md:mt-0">
          <div className="relative mx-auto w-64 aspect-[9/18.5] bg-gray-100 dark:bg-b2b-surface rounded-[3rem] border-[8px] border-gray-200 dark:border-zinc-800 shadow-2xl overflow-hidden">
            {/* Status bar */}
            <div className="absolute top-0 w-full h-6 px-6 pt-2 flex justify-between items-center text-[10px] text-gray-800 dark:text-white z-20">
              <span>10:00</span>
              <div className="flex gap-1">
                <MdSignalCellularAlt className="text-[10px]" />
                <MdWifi className="text-[10px]" />
                <MdBatteryFull className="text-[10px]" />
              </div>
            </div>

            {/* Map screenshot */}
            <div className="w-full h-full bg-gray-50 dark:bg-zinc-900 relative">
              <img
                src="/Mobile_Deals-Map.webp"
                alt={t('business.opportunities.appTitle')}
                className="w-full h-full object-cover"
              />

              {/* Search bar */}
              <div className="absolute top-10 left-4 right-4 h-10 bg-gray-200/90 dark:bg-zinc-800/90 rounded-full shadow-md flex items-center px-4">
                <MdSearch className="text-gray-500 dark:text-zinc-400 text-sm" />
                <span className="text-gray-500 dark:text-zinc-400 text-xs ml-2">{t('business.opportunities.search')}</span>
              </div>
            </div>
          </div>
          <p className="mt-3 text-gray-500 dark:text-zinc-400 text-sm font-medium italic md:mt-4">
            {t('business.opportunities.downloads')}
          </p>
        </div>
      </div>
    </section>
  )
}
