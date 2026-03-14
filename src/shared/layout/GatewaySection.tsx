import { useTranslation } from '../../hooks/useTranslation';
import ButtonSecondary from '../components/ButtonSecondary';
import ButtonTertiary from '../components/ButtonTertiary';

interface GatewayProps{
  home_btn?: boolean;
}

export default function GatewaySection ({ home_btn=false }:GatewayProps) {
  const { t } = useTranslation();
  return (
    <section className="relative bg-white/80 dark:bg-black/80 py-14 px-4 w-full h-full ">
        <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-x-10 gap-y-8 max-w-7xl mx-auto'>
          <div className='lg:pl-[5vw] lg:pt-10'>
            <h3 className="heading-1 text-center lg:text-left">
              {t('layout.gateway.title')}
            </h3>
            <p className='subtitle text-balance text-gray-900 dark:text-white text-center lg:text-left my-8'>
              {t('layout.gateway.subtitle')}
            </p>

            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-x-4 gap-y-3">
              <ButtonSecondary text={t('layout.gateway.discoverHere')} redirect={'/product'} />
              {
                !home_btn ? null :
                <ButtonTertiary text={t('layout.gateway.seeAllCategories')} redirect={'/'} />
              }
            </div>
          </div>
          <div className='w-full relative'>
            <picture className='relative'>
              <img src="/app-banner.png" alt="app banner" className='w-full' />
              <div className='absolute w-1/2 right-1/12 bottom-1/12 translate-y-2 flex justify-center items-center gap-x-3'>
                <a href="https://play.google.com/store/apps/details?id=com.access.access&pli=1" target="_blank" rel="noopener noreferrer">
                  <img src="/android-logo.png" alt="android" className='w-full' />
                </a>
                <a href="https://apps.apple.com/us/app/my-deals-mobile/id427118196" target="_blank" rel="noopener noreferrer">
                  <img src="/apple-logo.png" alt="android" className='w-full' />
                </a>
              </div>
            </picture>
            <p className='text-lg mt-4 text-center'>{t('layout.gateway.downloads')}</p>
          </div>
        </div>
        <p className='mt-16 text-center font-semibold'>{t('layout.gateway.appExclusive')}</p>
    </section>
  );
};