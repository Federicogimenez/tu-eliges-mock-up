import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { DiamondCarousel } from './DiamondCarousel';


export const HeroSection: React.FC = () => {

  return (
    <section className="relative h-dvh max-md:min-h-[1200px] px-4 py-12 bg-white dark:bg-black">
      <div className="mx-auto lg:max-w-[50%] lg:ml-2 text-center h-full flex flex-col justify-center items-center">
        {/* Title */}
        <h1 className="light-title-effect dark:text-shadow-xl-dark dark:text-white text-3xl md:text-5xl font-bold text-transparent leading-[1.4] lg:pt-10 mb-4 lg:mb-8">
          Up to <span className="text-blue-uchooseit mr-2">50% OFF</span> 
          <br className='hidden lg:block' />
          on millions of moments
        </h1>
        <div className='relative lg:absolute lg:top-2/5 lg:-translate-y-5/12 lg:right-[4vw] mb-40 lg:mb-0'>
          <DiamondCarousel />
        </div>
        {/* Description */}
        <p className="text-lg text-gray-700 dark:text-gray-400 mb-8 max-w-md mt mx-auto">
          Your VIP key to everyday savings starts right here.
        </p>

        {/* CTA Button */}
        <button className="group relative cursor-pointer w-full max-w-[450px] rounded-full text-lg px-8 py-4 mb-6 overflow-hidden">
          <span className='absolute left-0 top-0 w-full h-full bg-gradient-to-r to-blue-gradient-start from-blue-gradient-end transition-all duration-300 group-hover:translate-x-full' />
          <span className='absolute left-0 top-0 -translate-x-full w-full h-full bg-gradient-to-r from-blue-gradient-start to-blue-gradient-end transition-all duration-300 group-hover:translate-x-0' />
          <span className='relative transition-all duration-300 group-hover:font-bold'>
            Get My Membership & Save
          </span>
        </button>

        {/* Social Proof */}
        <p className="text-sm text-black dark:text-gray-200">
          Trusted by families nationwide
        </p>
      </div>

    </section>
  );
};