import { useAllyContext } from '../../hooks/useAllyContext';
import ButtonPrimary from '../components/ButtonPrimary';
import LoaderSimple from '../components/LoaderSimple';

import master from '/cards/master.png';
import amex from '/cards/amex.png';
import diners from '/cards/diners.png';
import discover from '/cards/discover.png';
import jcb from '/cards/jcb.png';
import union from '/cards/union.png';
import visa from '/cards/visa.png';


const cards = [
  master,
  amex,
  diners,
  discover,
  jcb,
  union,
  visa
]

interface PricingSectionProps{
  title?: string;
  subtitle?: string;
  color?: string;
  img: string;
  cta?: boolean;
  ctaGradientFrom?: string, 
  ctaGradientTo?: string,
  ctaGradientFrom2?: string, 
  ctaGradientTo2?: string,
}

export default function PricingSection ({ 
  title='Share the Savings', 
  subtitle='Enjoy More Together!', 
  color='currentColor',
  img,
  cta = true, 
  ctaGradientFrom, ctaGradientTo, ctaGradientFrom2, ctaGradientTo2 }:PricingSectionProps) {
  
  const { allyData, code, recurlyUrl } = useAllyContext();

  const perMonthPrice = Math.floor((allyData.new_price_after_discount * 100 )/12) / 100 ;
  const annualPrice = allyData.new_price_after_discount.toFixed(2) || allyData.membership_anual_fee.toFixed(2);
  const discount = allyData.discount_percent || 0;

  return (
    <section className="relative py-10 bg-white dark:bg-black lg:bg-white/50 lg:dark:bg-black/50 h-full flex flex-col justify-center gap-y-5">
      <div className="text-center mb-4 ">
        <h2 className="heading-1 mb-2 mx-auto max-w-4xl"
          dangerouslySetInnerHTML={{ __html : title}}
        >
        </h2>
        <p className="subtitle text-blue-uchooseit font-semibold text-shadow-xl-dark" style={{color: `var(${color})`}}>
          {subtitle}
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row gap-x-8 gap-y-3 justify-center items-center lg:items-stretch h-full">
        {/* Image */}
        <div className="relative z-0 w-full lg:w-1/2 h-full">
          <img src={img} alt="family" className='w-full h-full object-cover object-top lg:rounded-2xl' />
          
          <div className=" relative hidden lg:block space-y-3 mt-5 mx-auto -translate-y-16 w-full py-5  bg-white dark:bg-black rounded-b-2xl">
            <div className="w-fit mx-auto">

              <div className="flex items-center">
                <div className="text-green-500 mr-3">✓</div>
                <span className="text-gray-700 dark:text-gray-300 font-semibold">
                  Start saving immediately
                </span>
              </div>
              <div className="flex items-center">
                <div className="text-green-500 mr-3">✓</div>
                <span className="text-gray-700 dark:text-gray-300">
                  Access 1M+ exclusive deals
                </span>
              </div>
              <div className="flex items-center">
                <div className="text-green-500 mr-3">✓</div>
                <span className="text-gray-700 dark:text-gray-300">
                  Save on the go (Web & App)
                </span>
              </div>
              <div className="flex items-center">
                <div className="text-green-500 mr-3">✓</div>
                <span className="text-gray-700 dark:text-gray-300">
                  Risk-free: 7-day refund guarantee
                </span>
              </div>
              <div className="flex items-center">
                <div className="text-green-500 mr-3">✓</div>
                <span className="text-gray-700 dark:text-gray-300">
                  No commitments - cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="relative z-20 h-full w-full lg:w-1/2 flex flex-col justify-center items-center gap-y-6 max-lg:-translate-y-14">
            <div className="relative bg-neutral-200 dark:bg-black h-full w-11/12 max-w-md md:max-w-lg rounded-4xl shadow-xl ">
              <div className='w-full h-full bg-gradient-to-b from-white to-black/5 dark:from-white/5 dark:to-white/15 px-2 md:px-5 lg:px-8 py-6 rounded-4xl'>
                <div className="relative text-center mb-6">
                  <h3 className="relative text-2xl  text-gray-900 dark:text-white mb-2">
                    Equivalent to <br /> 
                    <span className='shiny-lightblue-text font-semibold text-4xl '>
                      <span className='mx-2'>
                        ${perMonthPrice} 
                      </span>
                      per month
                    </span>
                  </h3>
                  {
                    allyData.isLoading ? <LoaderSimple /> :
                    discount > 0 && (
                      <div className="my-6 w-full">
                        <div className='flex justify-center items-end flex-nowrap gap-x-3 mb-4'>
                          <img src={allyData.alliedCompanyImg} alt="ally logo" className=' border-2 border-white size-12 rounded-full object-cover object-center' />
                          <div>
                            <p className='mb-2 text-left'>
                              {allyData.alliedName}
                            </p>
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-5 py-1 rounded-full text-nowrap text-xs sm:text-sm font-semibold">
                              {discount}% OFF with code {allyData.alliedCuponCode}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                </div>

                <div className="text-center mb-6">
                  <p className="text-gray-600 dark:text-gray-400">Billed annually at</p>
                  {discount > 0 ? 
                    <div className='flex justify-center items-center gap-x-2 font-semibold'>
                      <div className="text-2xl text-red-800 dark:text-red-400 line-through">
                        ${allyData.membership_anual_fee}
                      </div>
                      <div className="text-2xl text-green-800 dark:text-green-400  ">
                        ${annualPrice}
                      </div>
                    </div>
                    :
                    <div className="text-2xl text-gray-500 dark:text-gray-400 mb-2">
                      ${annualPrice}
                    </div>
                  }
                </div>

                <div className=" relative lg:hidden space-y-3 mb-8 w-fit mx-auto px-2">
                  <div className="flex items-center">
                    <div className="text-green-500 mr-3">✓</div>
                      <span className="text-gray-700 dark:text-gray-300 font-semibold">
                        Start saving immediately
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="text-green-500 mr-3">✓</div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Access 1M+ exclusive deals
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="text-green-500 mr-3">✓</div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Save on the go (Web & App)
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="text-green-500 mr-3">✓</div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Risk-free: 7-day refund guarantee
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="text-green-500 mr-3">✓</div>
                      <span className="text-gray-700 dark:text-gray-300">
                        No commitments - cancel anytime
                      </span>
                    </div>
                </div>


                <div className='w-fit mx-auto text-center text-sm md:text-lg text-black dark:text-white '>
                  <p className='flex justify-center items-center gap-x-2'>
                    <img src="/icons/padlock.png" alt="secure" className='size-7 object-contain object-center' />
                    Secure Payments
                  </p>
                  <p>
                    | No Ads | No Spam |
                  </p>
                  <p className='flex justify-center items-center gap-x-2'>
                    <img src="/icons/protected.png" alt="protect" className='size-7 object-contain object-center' />
                    Satisfaction guarantee
                  </p>
                  <div className='flex justify-center items-center w-full gap-x-2 mt-7'>
                    {
                      cards.map((card, i)=>{
                        return <picture className='w-full h-fit' key={i}>
                          <img src={card} alt={card} className='w-full h-full object-contain object-center'  />
                        </picture> 
                      })
                    }
                  </div>
                </div>
              </div>

            </div>
        </div>
      </div>
        {
          !cta ? null : 
          <div className='w-11/12 max-w-lg mx-auto -translate-y-5'>
            <ButtonPrimary src={code ? code : recurlyUrl} fromColor2={ctaGradientFrom2} fromColor={ctaGradientFrom} toColor={ctaGradientTo} toColor2={ctaGradientTo2} />
          </div>
        }
    </section>
  );
};