import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { DiamondCarousel } from './DiamondCarousel';
import ButtonPrimary from '../../../shared/components/ButtonPrimary';
import { useAllyContext } from '../../../hooks/useAllyContext';


export const HeroSection: React.FC = () => {
  const { code, recurlyUrl } = useAllyContext();

  return (
    <section className="relative mx-auto w-full max-w-[1400px] h-full max-md:min-h-[900px] md:min-h-[620px] px-2 py-[12vh] bg-transparent mt-[150px] md:mt-[120px]">
      <div className="relative mx-auto lg:max-w-fit lg:ml-[5%] text-center h-full flex flex-col justify-around items-center">
        {/* Title */}
        <h1 className="text-black text-shadow-xl-light dark:text-shadow-xl-dark dark:text-white text-3xl md:text-5xl xl:text-6xl leading-[1.4] lg:pt-10 mb-4 lg:mb-8 max-w-[500px] lg:max-w-[600px] xl:max-w-[720px]">
          Up to 
          <span className=" shiny-blue-text text-shadow-none font-semibold mx-3"

          >50% OFF</span> 
          <br className='hidden lg:block' />
          on millions of moments
        </h1>
        <div className='relative lg:absolute lg:top-2/5 lg:-translate-y-5/12 lg:right-0 lg:translate-x-full mt-10 mb-32 lg:mb-0'>
          <DiamondCarousel />
        </div>
        {/* Description */}

        <div>
          <p className="w-[92%] md:w-full text-lg font-semibold text-transparent bg-gradient-to-b to-gray-400 dark:from-gray-600 dark:to-gray-200 from-black bg-clip-text mb-8 mx-auto">
            Your VIP key to everyday savings starts right here.
          </p>

          {/* CTA Button */}
          <ButtonPrimary src={code ? code : recurlyUrl} />

          {/* Social Proof */}
          <p className="text-sm text-black dark:text-gray-200 flex gap-x-2 justify-center items-center mt-4">
            <img src="/icons/guarantee.png" alt="guarantee" className='w-[50px]' />
            Trusted by families nationwide
          </p>
        </div>
      </div>

    </section>
  );
};