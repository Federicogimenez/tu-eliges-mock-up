import { useCallback,  useEffect,  useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";




interface TestimonialsProps{
    icon: string;
    img: string;
    text: string;
}
interface HeroCategoryProps{
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

export default function HeroCategory({ 
  title, 
  subtitle, 
  description,
  color, 
  testimonials, 
  dotsColor, 
   }: HeroCategoryProps) {


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
    <section className='relative flex flex-col justify-start items-center w-full h-full pt-12 pb-32'>
        <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center items-center">
                <h1 className=" text-black text-center dark:text-white text-4xl sm:text-5xl md:text-5xl xl:text-7xl leading-[1] lg:pt-10  max-w-[500px] lg:max-w-[600px] xl:max-w-[720px] mb-4">
                  {title} 
                  <span className="block text-4xl sm:text-4xl md:text-5xl xl:text-5xl " style={{color: `var(${color})`}}>
                    {subtitle}
                  </span>
                </h1>

                <p className="subtitle text-center px-2 max-w-md pb-8">
                  {description}
                </p>

                <div className="relative w-[95dvw] xl:w-5/12">
                    <div
                    ref={sliderRef}
                    className="keen-slider w-full justify-start"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleMouseEnter}
                    >
                    {testimonials.map((slide, index) => (
                        <div key={index} className="keen-slider__slide w-full flex justify-center items-center ">
                            <div className="relative w-fit h-fit flex justify-center items-center rounded-2xl overflow-hidden ">
                                <img src={slide.img} alt="profile" className="h-full max-h-[60dvh] xl:max-h-[60dvh] w-auto object-contain object-center rounded-3xl" />
                                <picture className="absolute size-12 xl:size-16 top-1 right-1 flex justify-center items-center rounded-full bg-white">
                                    <img src={slide.icon} alt="icon" className="w-2/3 h-2/3 object-center object-contain" />
                                </picture>
                            </div>
                                <div className="absolute bottom-0 left-0 w-full h-fit px-4 py-2 text-center text-xs md:text-sm lg:text-xl text-black bg-white/80 dark:text-white border border-black dark:border-white dark:bg-black/80 rounded-br-3xl rounded-tl-3xl">
                                    {slide.text}
                                </div>
                        </div>
                    ))}
                    </div>
                    <div className="flex justify-center mt-6 gap-2">
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
