import { useCallback, useEffect, useRef, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';

import icon_gps from '/icons/benefits/gps.svg'
import icon_discount from '/icons/benefits/discount.svg'
import icon_permanent from '/icons/benefits/permanent.svg'
import icon_privacy from '/icons/benefits/privacy.svg'
import icon_quick from '/icons/benefits/quick.svg'
import icon_save from '/icons/benefits/save.svg'

const benefits = [
  {
    icon: icon_save,
    title: 'Save $2,000+ per year - 50% off ',
    description: 'Travel • Dining • Shopping • Entertainment',
    note: '*Average member savings in 2024'
  },
  {
    icon: icon_discount,
    title: 'Over 1 millon:',
    description: 'Nationwide deals at hand.',
    note: null
  },
  {
    icon: icon_permanent,
    title: 'Permanent discounts:',
    description: 'Use as often as you want.',
    note: null
  },
  {
    icon: icon_gps,
    title: 'GPS-enabled savings:',
    description: 'Find offers near you.',
    note: null
  },
  {
    icon: icon_quick,
    title: 'Quick and easy:',
    description: 'Redenptions no complicated steps.',
    note: null
  },
  {
    icon: icon_privacy,
    title: 'Privacy protected:',
    description: 'We never sell your data.',
    note: null
  }
];

export interface BenefitSlide{
      color: string,
      discount: string,
      with_img: string,
      withoout_img: string,
}

interface BenefitsSectionProps{
  title?: string;
  subtitle?: string;
  color?: string;
  slides: BenefitSlide[];
}

export default function BenefitsSection ({ 
  slides, 
  color='currentColor', 
  title='One membership',
  subtitle="Real benefits for the whole family" }: BenefitsSectionProps) {

  const [currentSlide, setCurrentSlide] = useState(0)
  const isPausedRef = useRef(false)
  const intervalRef = useRef<number | null>(null)
  const sliderInstanceRef = useRef<{ next: () => void } | null>(null)
  
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
  useEffect(() => {
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

  const handleMouseEnter = useCallback(() => {
    isPausedRef.current = true
  }, [])

  const handleMouseLeave = useCallback(() => {
    isPausedRef.current = false
  }, [])

  const handleDotClick = useCallback((idx: number) => {
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
          <h2 className="text-4xl sm:text-5xl md:text-5xl xl:text-7xl  text-gray-900 dark:text-white mb-2">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400" style={{color: `var(${color})`}}>
            {subtitle}
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
                <div key={index} className="keen-slider__slide ">
                  <div className="relative mx-auto w-fit h-full min-h-48 rounded-2xl shadow-lg overflow-hidden flex gap-x-0 justify-center items-center">
                    <div className='w-1/2 h-fit overflow-hidden rounded-2xl'>
                      <img src={slide.withoout_img} alt="sad" className={` w-full h-full object-contain object-center rounded-2xl  scale-100  `} />
                    </div>
                    {/* <div className='w-full h-full overflow-hidden rounded-2xl'> */}
                    <div className={` w-1/2 h-fit overflow-hidden rounded-2xl transition-all duration-1000 ${currentSlide == index ? ' ' : ' ' }`}>
                      <img src={slide.with_img} alt="happy" className={`w-full h-full object-contain object-center  transition-all duration-1000 origin-top ${currentSlide == index ? ' scale-100' : ' scale-110  ' }`} />
                    </div>
                    {/* </div> */}
                  <span className='absolute px-3 py-0.5 rounded-lg right-1 bottom-1 text-sm' style={{background: `var(${slide.color})`}}>
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
                      ? ' bg-black dark:bg-white w-5 mx-1 '
                      : ' bg-gray-500'
                  }`}
                ></button>
              ))}
            </div>
          </div>

          {/* Benefits List */}
          <div className='flex flex-col justify-center items-start gap-y-4'>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex justify-start items-start gap-x-3">
                <img src={benefit.icon} alt="icon" className='size-8 object-contain object-center' />
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