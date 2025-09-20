import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useRef } from 'react'


interface HeroCarousel{
    slides: string[]
}

export default function HeroCarousel({slides}: HeroCarousel) {
  const intervalRef = useRef<number | null>(null)
  const sliderInstanceRef = useRef<{ next: () => void } | null>(null)
  
  const [sliderRef ] = useKeenSlider({
    loop: true,
    initial: 0,
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
        if (sliderInstanceRef.current) {
          sliderInstanceRef.current.next();
        }
      }, 3000);
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




  return (
        
    <div className="w-full h-full">
        <div
            ref={sliderRef}
            className="keen-slider w-full h-full justify-start"
        >
            {slides.map((slide, index) => (
            <div key={index} className="keen-slider__slide max-h-dvh">
                <img src={slide} alt="slide bg" className='w-full h-full object-cover object-center'  />
            </div>
            ))}
        </div>
    </div>
  )
}
