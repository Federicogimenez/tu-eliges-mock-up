
import { useTranslation } from '../../hooks/useTranslation'

import icon_gps from '/icons/benefits/gps.svg'
import icon_discount from '/icons/benefits/discount.svg'
import icon_permanent from '/icons/benefits/permanent.svg'
import icon_privacy from '/icons/benefits/privacy.svg'
import icon_quick from '/icons/benefits/quick.svg'
import icon_save from '/icons/benefits/save.svg'

const benefitIcons = [icon_save, icon_permanent, icon_quick, icon_gps, icon_discount, icon_privacy];

export interface BenefitSlide{
      color: string,
      discount: string,
      with_img: string,
      withoout_img: string,
}

export default function Benefits () {
  const { t } = useTranslation()

  const benefits = benefitIcons.map((icon, index) => ({
    icon,
    title: t(`layout.benefits.items.${index}.title`),
    description: t(`layout.benefits.items.${index}.description`),
    note: index === 0 ? t(`layout.benefits.items.${index}.note`) : null,
  }));


  return (
    <section className="py-12 px-4 bg-white dark:bg-black transition-colors duration-300" id='benefits'>
      <div className="container mx-auto">

        <h2 className='heading-1 mb-8 text-center'>
            {t('layout.benefits.title')}
        </h2>

        <div className='flex flex-col  justify-center items-center gap-x-8 gap-y-10'>


          {/* Benefits List */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr  place-content-center place-items-center gap-x-8 gap-y-12 py-[5dvh]'>
            {benefits.map((benefit, index) => (
              <div key={index} className="w-fit flex flex-col justify-center items-center gap-3">
                <img src={benefit.icon} alt="icon" className='size-20 object-contain object-center' />
                <div className='text-center'>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
{/* 
            <div className='relative w-full max-w-md' onClick={handleNavigateCalculator} >
                <ButtonSecondary text={'Calculate Savings'} redirect={''} />
            </div> */}
        </div>
      </div>
    </section>
  );
};