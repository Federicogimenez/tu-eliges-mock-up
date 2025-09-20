// src/components/DiamondCarousel.tsx
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useState, useRef } from 'react'
import { useWindowSize } from '../../../hooks/useWindowSize'

import icon_shop from '/icons/category/shop.png'
import icon_travel from '/icons/category/travel.png'
import icon_dining from '/icons/category/dining.png'
import icon_entertainment from '/icons/category/entertainment.png'

const slides = [
  { icon: icon_shop },
  { icon: icon_dining},
  { icon: icon_entertainment},
  { icon: icon_travel},
]

export const DiamondIcons = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  // const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const intervalRef = useRef<number | null>(null)
  const dragStartRef = useRef<{ x: number; y: number } | null>(null)
  const dragThreshold = 20 // Minimum distance to trigger slide change
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
        if (!isDragging && instanceRef.current) {
          instanceRef.current.next()
        }
      }, 1500)
    }

    const stopAutoPlay = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    if ( !isDragging) {
      startAutoPlay()
    } else {
      stopAutoPlay()
    }

    return () => stopAutoPlay()
  }, [isDragging])

  // Mouse event handlers for hover
  // const handleMouseEnter = () => {
  //   setIsHovered(true)
  // }

  // const handleMouseLeave = () => {
  //   setIsHovered(false)
  // }

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
      { x: 0, y: (width > 500 ? -140 : (width > 400 ? -110 : -90)), scale: (width > 500 ? .8 : .7 )}, // Top
      { x:  (width > 500 ? 120 : 100 ), y: -20, scale: (width > 500 ? .8 : .7 ) }, // Right
      { x: 0, y: (width > 500 ? 120 : 100), scale: (width > 500 ? 1.4 : 1.2 )}, // Bottom (activo)
      { x: (width > 500 ? -120 : -100 ), y: -20, scale: (width > 500 ? .8 : .7 ) }, // Left
    ]
    
    const relativeIndex = (index - currentIndex + 4) % 4
    return positions[relativeIndex]
  }

  return (
    <div
      className="relative w-full h-full mx-auto cursor-grab transition-all duration-300 active:cursor-grabbing select-none"
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div ref={sliderRef} className="keen-slider opacity-0">
        {slides.map((_, idx) => (
          <div key={idx} className="keen-slider__slide">
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
              className="absolute  transition-all duration-700 ease-in-out"
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${position.scale})`,
                zIndex: isActive ? 10 : 1,
              }}
            >
              <Slide
                icon={slide.icon}
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
  icon: string;
  active: boolean;
}

const Slide = ({ icon, active }: SlideProps) => {
  return (
    <div className={`relative z-10 size-16 flex items-center justify-center transition-all duration-500 
      ${active ? ' scale-115 ' : 'scale-100' }`}>
      <img
        src={icon}
        alt={'logo'}
        className={`w-full h-full object-contain `}
      />
    </div>
  )
}
