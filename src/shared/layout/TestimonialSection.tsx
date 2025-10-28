import { useCallback,  useEffect,  useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { useSavingsModal } from "../../hooks/useSavingsModal";




interface TestimonialsProps{
    icon: string;
    img: string;
    text: string;
}
interface TestimonialSectionProps{
    title: string;
    subtitle: string;
    description: string;
    retailers: number;
    color: string;
    ctaGradientFrom: string;
    ctaGradientTo: string;
    dotsColor: string;
    testimonials: TestimonialsProps[];
}

export default function TestimonialSection({ 
  title, 
  subtitle, 
  description,
  color, 
  testimonials, 
  dotsColor, 
   }: TestimonialSectionProps) {


  const { openModal } = useSavingsModal()
  const [currentSlide, setCurrentSlide] = useState(0)
  const isPausedRef = useRef(false)
  const intervalRef = useRef<number | null>(null)
  const sliderInstanceRef = useRef<{ next: () => void } | null>(null)
  
  let dotsLength: number = 0;

  const [sliderRef , instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
    },
    slides: {
      perView: 1,
      origin:'auto',
      spacing: 50,
    },
    created(s) {
      sliderInstanceRef.current = s;
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

  dotsLength = 5



  return (
    <section className='relative bg-white dark:bg-black flex flex-col justify-start items-center w-full h-full pt-12 pb-10 lg:pb-20'>
        <div className="w-full mx-auto h-full flex flex-col lg:flex-row justify-center items-center">
            <div>
              <h1 className=" text-black text-center dark:text-white text-4xl sm:text-5xl md:text-5xl xl:text-7xl leading-[1] lg:pt-10 mb-4">
                {title} 
                <span className="block text-4xl sm:text-4xl md:text-5xl xl:text-5xl " style={{color: `var(${color})`}}>
                  {subtitle}
                </span>
              </h1>

              <p className="subtitle text-center px-2 max-w-md pb-2">
                {description}
              </p>

              <button
                onClick={openModal}
                className={`block w-11/12 mx-auto font-semibold mb-6 text-center max-w-md px-4 py-2 cursor-pointer rounded-full bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white text-lg transition-all duration-300 hover:-translate-y-1`}
              >
                  Calculate Savings
              </button>

            </div>

            <div className="relative w-11/12 lg:w-1/2">
                <div
                ref={sliderRef}
                className="keen-slider w-full justify-start"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleMouseEnter}
                >
                {testimonials.map((slide, index) => (
                    <div key={index} className="keen-slider__slide w-full flex flex-col justify-center items-center">
                        <div className="relative flex justify-center items-center rounded-2xl max-w-md overflow-hidden ">
                            <img src={slide.img} alt="profile" className="h-auto w-full object-contain object-center rounded-t-3xl" />
                            <picture className="absolute size-12 xl:size-16 top-1 right-1 flex justify-center items-center rounded-full bg-black">
                                <img src={slide.icon} alt="icon" className="w-2/3 h-2/3 object-center object-contain" />
                            </picture>
                        </div>
                        <div className="relative max-w-md text-balance -translate-y-4 w-full h-fit px-4 py-2 text-center text-xs md:text-sm lg:text-xl bg-white dark:bg-black text-black dark:text-white border border-black dark:border-white rounded-b-2xl">
                            {slide.text}
                        </div>
                    </div>
                ))}
                </div>
                <div className="flex justify-center mt-2 gap-2">
                  {
                    Array.from({ length: dotsLength }, (_, idx) => (
                      <button
                      key={idx}
                      onClick={() => handleDotClick(idx)}
                      className={`w-3 h-3 cursor-pointer rounded-full transition-all duration-300 ${
                          currentSlide === idx
                          ? ` w-5 mx-1 ${dotsColor}`
                          : ' bg-gray-400 dark:to-white/50 '
                          }`}
                          ></button>
                        ))
                  }
                </div>
            </div>
    
      
        </div>

    </section>
  )
}
