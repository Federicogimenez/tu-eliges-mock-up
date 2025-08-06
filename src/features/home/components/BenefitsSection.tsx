import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import shop_sad from '/benefits/shop/sad.png'
import shop_happy from '/benefits/shop/happy.png'

import travel_sad from '/benefits/travel/sad.png'
import travel_happy from '/benefits/travel/happy.png'

import dining_sad from '/benefits/dining/sad.png'
import dining_happy from '/benefits/dining/happy.png'

import entertainment_sad from '/benefits/entertainment/sad.png'
import entertainment_happy from '/benefits/entertainment/happy.png'

import w_protected from '/icons/white/protected.png'
import w_country from '/icons/white/country.png'
import w_infinite_disounts from '/icons/white/infinite-discounts.png'
import w_pin from '/icons/white/pin.png'
import w_promo from '/icons/white/promo.png'
import w_quick from '/icons/white/quick.png'

import b_protected from '/icons/black/protected.png'
import b_country from '/icons/black/country.png'
import b_infinite_disounts from '/icons/black/infinite-discounts.png'
import b_pin from '/icons/black/pin.png'
import b_promo from '/icons/black/promo.png'
import b_quick from '/icons/black/quick.png'
import { useTheme } from '../../../hooks/useTheme';

const slides = [
  {
    color: '--color-purple-shop',
    discount: '-$400',
    sad_img: shop_sad,
    happy_img: shop_happy,
  },
  {
    color: '--color-yellow-dining',
    discount: '-$30',
    sad_img: dining_sad,
    happy_img: dining_happy,
  },
  {
    color: '--color-blue-travel',
    discount: '-$110',
    sad_img: travel_sad,
    happy_img: travel_happy,
  },
  {
    color: '--color-pink-entertainment',
    discount: '-$173',
    sad_img: entertainment_sad,
    happy_img: entertainment_happy,
  },
];

const benefits = [
  {
    w_icon: w_promo,
    b_icon: b_promo,
    title: 'Save *$2,000+ per year — Up to 50% off ',
    description: 'Travel • Dining • Shopping • Entertainment',
    note: '*Average member savings in 2024'
  },
  {
    w_icon: w_country,
    b_icon: b_country,
    title: 'Over 1 millon:',
    description: 'Nationwide deals at hand.',
    note: null
  },
  {
    w_icon: w_infinite_disounts,
    b_icon: b_infinite_disounts,
    title: 'Permanent discounts:',
    description: 'Use as often as you want.',
    note: null
  },
  {
    w_icon: w_pin,
    b_icon: b_pin,
    title: 'GPS-enabled savings:',
    description: 'Find offers near you.',
    note: null
  },
  {
    w_icon: w_quick,
    b_icon: b_quick,
    title: 'Quick and easy:',
    description: 'Redenptions no complicated steps.',
    note: null
  },
  {
    w_icon: w_protected,
    b_icon: b_protected,
    title: 'Privacy protected:',
    description: 'We never sell your data.',
    note: null
  },


];

export const BenefitsSection: React.FC = () => {

  const { theme } = useTheme()

  const [currentSlide, setCurrentSlide] = React.useState(0)
  const isPausedRef = React.useRef(false)
  const intervalRef = React.useRef<number | null>(null)
  const sliderInstanceRef = React.useRef<{ next: () => void } | null>(null)
  
  const [sliderRef , instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
    },
    slides: {
      perView: 1,
      spacing: 0,
    },
    created(s) {
      sliderInstanceRef.current = s
    },
  });

  // Gestión del autoplay separada del slider
  React.useEffect(() => {
    const startAutoplay = () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        if (!isPausedRef.current && sliderInstanceRef.current) {
          sliderInstanceRef.current.next();
        }
      }, 4000);
    }

    if (sliderInstanceRef.current) {
      startAutoplay()
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [sliderInstanceRef.current])

  const handleMouseEnter = React.useCallback(() => {
    isPausedRef.current = true
  }, [])

  const handleMouseLeave = React.useCallback(() => {
    isPausedRef.current = false
  }, [])

  const handleDotClick = React.useCallback((idx: number) => {
    isPausedRef.current = true
    instanceRef.current?.moveToIdx(idx)
    setTimeout(() => {
      isPausedRef.current = false
    }, 3000)
  }, [instanceRef])

  const dotsLength = instanceRef.current?.track.details.slides.length || 0
  
  return (
    <section className="py-[8vh] px-4 bg-black/5 dark:bg-white/5 transition-colors duration-300">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            One membership
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Real benefits for whole family
          </p>
        </div>

        <div className='flex flex-col lg:flex-row justify-center items-center gap-x-8 gap-y-10'>
          
          {/* Image Slider */}
          <div className="w-full lg:max-w-[600px]">
            <div
              ref={sliderRef}
              className="keen-slider w-full justify-start"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleMouseEnter}
            >
              {slides.map((slide, index) => (
                <div key={index} className="keen-slider__slide overflow-visible">
                  <div className="relative mx-auto w-fit h-[60dvh] min-h-48 max-h-80 md:max-h-[450px] bg-black/5 dark:bg-white/5 rounded-xl shadow-lg overflow-hidden flex gap-x-2 justify-center items-stretch">
                    <img src={slide.sad_img} alt="sad" className='w-full h-full object-contain object-center rounded-2xl sepia-100' />
                    <div className='w-full h-full overflow-hidden rounded-2xl'>
                      <div className={` w-full h-full rounded-2xl transition-all duration-[2s] ${currentSlide == index ? ' scale-110' : ' scale-100' }`}>
                        <img src={slide.happy_img} alt="happy" className={`w-full h-full object-contain object-center rounded-2xl transition-all duration-1000 ${currentSlide == index ? ' sepia-0' : ' sepia-100' }`} />
                      </div>
                    </div>
                  <span className='absolute px-3 py-0.5 rounded-lg right-1 top-1 text-sm' style={{background: `var(${slide.color})`}}>
                    {slide.discount}
                  </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: dotsLength }, (_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`w-3 h-3 cursor-pointer rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? ' bg-gradient-to-r from-blue-uchooseit to-blue-gradient-end w-5 mx-1 '
                      : 'bg-gradient-to-r from-gray-400 dark:to-white/50'
                  }`}
                ></button>
              ))}
            </div>
          </div>

          {/* Benefits List */}
          <div className='flex flex-col justify-center items-start gap-y-4'>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex justify-start items-start gap-x-3">
                <img src={ theme == 'dark' ? benefit.w_icon :  benefit.b_icon} alt="icon" className='size-12 object-contain object-center' />
                <div className=''>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};