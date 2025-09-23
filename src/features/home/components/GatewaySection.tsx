import ButtonSecondary from '../../../shared/components/ButtonSecondary';
import ButtonTertiary from '../../../shared/components/ButtonTertiary';

interface GatewayProps{
  home_btn?: boolean;
}

export default function GatewaySection ({ home_btn=false }:GatewayProps) {
  return (
    <section className="py-14 px-4 w-full h-full ">
        <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-x-10 gap-y-8 max-w-7xl mx-auto'>
          <div className='lg:pl-[5vw] lg:pt-10'>
            <h3 className="heading-1 text-center lg:text-left">
              Start saving in minutes
            </h3>
            <p className='subtitle text-balance text-gray-900 dark:text-white text-center lg:text-left my-8'>
              Discover how easy it is to activate your membership and start saving every day with our Mobile & Web App.
            </p>

            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-x-4 gap-y-3">
              <ButtonSecondary text={'Discover Here'} redirect={'/product'} />
              {
                !home_btn ? null :
                <ButtonTertiary text={'See All Categories'} redirect={'/'} />
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
            <p className='text-lg mt-4 text-center'>✨500,000+ downloads and counting</p>
          </div>
        </div>
        <p className='mt-16 text-center font-semibold'>App available exclusively for Uchooseit members</p>
    </section>
  );
};