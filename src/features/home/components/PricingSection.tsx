import React from 'react';
import { useAllyContext } from '../../../hooks/useAllyContext';

import family from '/family.png'
import ButtonPrimary from '../../../shared/components/ButtonPrimary';
import LoaderSimple from '../../../shared/components/LoaderSimple';

export const PricingSection: React.FC = () => {
  const { allyData, code, recurlyUrl } = useAllyContext();

  const originalPrice = 47.99;
  const perMonthPrice = Math.floor((allyData.new_price_after_discount * 100 )/12) / 100 ;
  const annualPrice = allyData.new_price_after_discount.toFixed(2) || originalPrice.toFixed(2);
  const discount = allyData.discount_percent || 0;

  return (
    <section className="relative py-[8vh] px-4 h-full flex flex-col justify-center gap-y-10">
      <div className="text-center ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Share the Savings
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Enjoy More Together!
        </p>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-x-8 gap-y-3 justify-center items-center lg:items-start h-full">
        {/* Image */}
        <div className="relative z-0 w-full lg:w-1/2">
          <img src={family} alt="family" className='w-full h-full object-cover object-top rounded-2xl' />
          
          <div className=" relative hidden lg:block space-y-3 mt-5 w-fit mx-auto">
            <div className="flex items-center">
              <div className="text-green-500 mr-3">✓</div>
              <span className="text-gray-700 dark:text-gray-300">Up to 50% off at thousands of stores</span>
            </div>
            <div className="flex items-center">
              <div className="text-green-500 mr-3">✓</div>
              <span className="text-gray-700 dark:text-gray-300">Unlimited usage for whole family</span>
            </div>
            <div className="flex items-center">
              <div className="text-green-500 mr-3">✓</div>
              <span className="text-gray-700 dark:text-gray-300">Mobile app access</span>
            </div>
            <div className="flex items-center">
              <div className="text-green-500 mr-3">✓</div>
              <span className="text-gray-700 dark:text-gray-300">24/7 customer support</span>
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="relative z-20 h-full w-full lg:w-1/2 flex flex-col justify-center items-center gap-y-6 max-lg:-translate-y-10">
            <div className="relative bg-white dark:bg-black h-full w-11/12 max-w-md md:max-w-lg rounded-4xl shadow-xl ">
              <div className='w-full h-full bg-gradient-to-b from-white to-black/5 dark:from-white/5 dark:to-white/15 px-8 py-6 rounded-4xl'>
                <div className="relative text-center mb-6">
                  <h3 className="relative text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Equivalent to <br /> 
                    <span className='shiny-blue-text font-semibold text-4xl '>
                      <span className='mx-2'>
                        ${perMonthPrice} 
                      </span>
                      per month
                    </span>
                  </h3>
                  {
                    allyData.isLoading ? <LoaderSimple /> :
                    discount > 0 && (
                      <div className="my-6">
                        <div className='flex justify-center items-center flex-nowrap gap-x-3 mb-4'>
                          <img src={allyData.alliedCompanyImg} alt="ally logo" className=' border-2 border-white size-12 rounded-full object-cover object-center' />
                          <span>{allyData.alliedName}</span>
                        </div>
                        <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-5 py-1 rounded-full text-nowrap text-xs sm:text-sm font-semibold">
                          {discount}% OFF with code {allyData.alliedCuponCode}
                        </span>
                      </div>
                    )
                  }
                </div>

                <div className="text-center mb-6">
                  <p className="text-gray-600 dark:text-gray-400">One-time annual payment:</p>
                  {discount > 0 ? 
                    <div className='flex justify-center items-center gap-x-2'>
                      <div className="text-lg text-red-400 dark:text-red-800 line-through">
                        ${originalPrice}
                      </div>
                      <div className="text-lg text-green-800 dark:text-green-600  ">
                        ${annualPrice}
                      </div>
                    </div>
                    :
                    <div className="text-lg text-gray-500 dark:text-gray-400 mb-2">
                      ${annualPrice}
                    </div>
                  }
                </div>

                <div className=" relative lg:hidden space-y-3 mb-8 w-fit mx-auto">
                  <div className="flex items-center">
                    <div className="text-green-500 mr-3">✓</div>
                    <span className="text-gray-700 dark:text-gray-300">Up to 50% off at thousands of stores</span>
                  </div>
                  <div className="flex items-center">
                    <div className="text-green-500 mr-3">✓</div>
                    <span className="text-gray-700 dark:text-gray-300">Unlimited usage for whole family</span>
                  </div>
                  <div className="flex items-center">
                    <div className="text-green-500 mr-3">✓</div>
                    <span className="text-gray-700 dark:text-gray-300">Mobile app access</span>
                  </div>
                  <div className="flex items-center">
                    <div className="text-green-500 mr-3">✓</div>
                    <span className="text-gray-700 dark:text-gray-300">24/7 customer support</span>
                  </div>
                </div>


                <div className='w-fit mx-auto text-center text-sm md:text-lg text-black dark:text-white space-y-2'>
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
                </div>
              </div>

            </div>

            <ButtonPrimary src={code ? code : recurlyUrl} special />
        </div>
      </div>
    </section>
  );
};