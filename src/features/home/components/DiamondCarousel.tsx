// src/components/DiamondCarousel.tsx
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useWindowSize } from '../../../hooks/useWindowSize'

const slides = [
  { name: 'Travel', icon: '/home/icon-travel.svg', img: '/home/bg-category-1.png', path: '/travel', color:'color-blue-travel' },
  { name: 'Dining', icon: '/home/icon-dining.svg', img: '/home/bg-category-2.png',path: '/dining', color: 'color-yellow-dining' },
  { name: 'Entertainment', icon: '/home/icon-entertainment.svg', img: '/home/bg-category-3.png', path: '/entertainment', color: 'color-pink-entertainment' },
  { name: 'Shop', icon: '/home/icon-shop.svg', img: '/home/bg-category-4.png', path: '/shop', color: 'color-purple-shop' },
]

export const DiamondCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const intervalRef = useRef<number | null>(null)
  const dragStartRef = useRef<{ x: number; y: number } | null>(null)
  const dragThreshold = 50 // Minimum distance to trigger slide change
  const { width } = useWindowSize()

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    drag: false, // Disable keen-slider's default drag to implement custom drag
  })

  // Auto-play functionality with pause on hover
  useEffect(() => {
    const startAutoPlay = () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        if (!isHovered && !isDragging && instanceRef.current) {
          instanceRef.current.next()
        }
      }, 2000)
    }

    const stopAutoPlay = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    if (!isHovered && !isDragging) {
      startAutoPlay()
    } else {
      stopAutoPlay()
    }

    return () => stopAutoPlay()
  }, [isHovered, isDragging])

  // Mouse event handlers for hover
  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  // Touch and mouse event handlers for dragging
  const handleDragStart = (clientX: number, clientY: number) => {
    setIsDragging(true)
    dragStartRef.current = { x: clientX, y: clientY }
  }

  const handleDragEnd = (clientX: number, clientY: number) => {
    if (!dragStartRef.current || !instanceRef.current) {
      setIsDragging(false)
      return
    }

    const deltaX = clientX - dragStartRef.current.x
    const deltaY = clientY - dragStartRef.current.y
    
    // Determine the primary direction of the drag
    const absDeltaX = Math.abs(deltaX)
    const absDeltaY = Math.abs(deltaY)
    
    // Only trigger slide change if drag distance exceeds threshold
    if (Math.max(absDeltaX, absDeltaY) > dragThreshold) {
      if (absDeltaX > absDeltaY) {
        // Horizontal drag
        if (deltaX > 0) {
          instanceRef.current.next() // Drag left -> next slide
        } else {
          instanceRef.current.prev() // Drag right -> previous slide
        }
      } else {
        // Vertical drag
        if (deltaY > 0) {
          instanceRef.current.prev() // Drag down -> previous slide
        } else {
          instanceRef.current.next() // Drag up -> next slide
        }
      }
    }

    dragStartRef.current = null
    setIsDragging(false)
  }

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    handleDragStart(e.clientX, e.clientY)
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (isDragging) {
      handleDragEnd(e.clientX, e.clientY)
    }
  }

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    handleDragStart(touch.clientX, touch.clientY)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isDragging && e.changedTouches[0]) {
      const touch = e.changedTouches[0]
      handleDragEnd(touch.clientX, touch.clientY)
    }
  }

  // Función para obtener la posición de cada slide en el diamante
  const getSlidePosition = (index: number, currentIndex: number) => {
    const positions = [
      { x: 0, y: -130, rotation: 0 }, // Top
      { x:  (width > 500 ? 160 : 110 ), y: -20, rotation: 90 }, // Right
      { x: 0, y: 140, rotation: 180 }, // Bottom (activo)
      { x: (width > 500 ? -160 : -110 ), y: -20, rotation: 270 }, // Left
    ]
    
    const relativeIndex = (index - currentIndex + 4) % 4
    return positions[relativeIndex]
  }

  return (
    <div
      className="relative w-full h-[400px] lg:size-[500px] mx-auto mt-10 cursor-grab transition-all duration-300 active:cursor-grabbing select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div ref={sliderRef} className="keen-slider opacity-0">
        {slides.map((slide, idx) => (
          <div key={idx} className="keen-slider__slide">
            {slide.name}
            {/* Hidden slider content for keen-slider functionality */}
          </div>
        ))}
      </div>
      
      {/* Diamond layout */}
      <div className="absolute inset-0 flex items-center justify-center">
        {slides.map((slide, idx) => {
          const position = getSlidePosition(idx, currentSlide)
          const isActive = (idx - currentSlide + 4) % 4 === 2 // Bottom position is active
          
          return (
            <div
              key={idx}
              className="absolute size-40 transition-all duration-700 ease-in-out"
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${isActive ? 1.4 : (width > 500 ? 1 : .75 ) })`,
                zIndex: isActive ? 10 : 1,
              }}
            >
              <Slide
                img={slide.img}
                name={slide.name}
                icon={slide.icon}
                color={slide.color}
                path={slide.path}
                active={isActive}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

interface SlideProps {
  img: string;
  name: string;
  icon: string;
  path: string;
  color: string
  active: boolean;
}

const Slide = ({ img, name, icon, active, path, color }: SlideProps) => {
  return (
    <Link to={path} className="relative block w-full h-full transition-all duration-300 hover:scale-105 hover:z-50">
      {/* Circular vignette with background image */}
      <div
        className={`w-full h-full rounded-full bg-cover bg-center relative overflow-hidden border  `}
        style={{border:`2px solid var(--${color})`}}
      >
        <img src={img} alt={name} className='absolute w-full h-full object-cover object-center' />
        {/* Overlay for better contrast */}
        <div className={`absolute w-full h-full z-10 inset-0 rounded-full transition-all duration-300 ${active ? 'bg-transparent' : 'bg-black/40'}`}></div>
      </div>

      {/* Icon and name */}

        <div className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 size-12 flex items-center justify-center transition-all duration-500 
          ${active ? ' top-0 -translate-y-full scale-105 ' : 'top-1/2' }`}>
          <img
            src={icon}
            alt={name}
            className={`w-full h-full object-contain filter brightness-0 invert`}
            style={{
              filter: `drop-shadow(0 0 1rem var(--${color}))`
            }}
          />
        </div>

        <div
          className={`w-fit mx-auto relative transition-all duration-300 `}>
          <h3
            style={{color: `var(--${color})`}} 
            className={`text-xl font-bold drop-shadow-lg text-nowrap transition-all duration-500 ${active ? ' translate-y-1 opacity-100': 'opacity-0'}`}>
            {name}
          </h3>
        </div>
    </Link>
  )
}
