import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import {
  MdStorefront,
  MdGroups,
  MdVolunteerActivism,
  MdCardMembership,
  MdCheckCircle,
} from 'react-icons/md'
import type { IconType } from 'react-icons'

interface Slide {
  title: string
  icon: IconType
  gradientFrom: string
  borderColor: string
  iconColor: string
  checkColor: string
  items: string[]
}

const slides: Slide[] = [
  {
    title: 'Organization & Customers',
    icon: MdStorefront,
    gradientFrom: 'from-cyan-100 dark:from-cyan-900/40',
    borderColor: 'border-cyan-300 dark:border-cyan-500/20',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    checkColor: 'text-cyan-600 dark:text-cyan-500',
    items: [
      "I'm looking for a value-added benefit",
      "I'm looking to improve customer acquisition",
      "I'm looking for travel solutions",
    ],
  },
  {
    title: 'Organization & Employees',
    icon: MdGroups,
    gradientFrom: 'from-amber-100 dark:from-amber-900/40',
    borderColor: 'border-amber-300 dark:border-amber-500/20',
    iconColor: 'text-amber-600 dark:text-amber-400',
    checkColor: 'text-amber-600 dark:text-amber-500',
    items: [
      "I'm looking to offer perks without increasing payroll costs",
      "I'm looking for a value-added benefit for my employees",
    ],
  },
  {
    title: 'Non-Profit Organizations',
    icon: MdVolunteerActivism,
    gradientFrom: 'from-green-100 dark:from-green-900/40',
    borderColor: 'border-green-300 dark:border-green-500/20',
    iconColor: 'text-green-600 dark:text-green-400',
    checkColor: 'text-green-600 dark:text-green-500',
    items: [
      "I'm looking for a fundraising incentive",
    ],
  },
  {
    title: 'Organization + Members',
    icon: MdCardMembership,
    gradientFrom: 'from-indigo-100 dark:from-indigo-900/40',
    borderColor: 'border-indigo-300 dark:border-indigo-500/20',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    checkColor: 'text-indigo-600 dark:text-indigo-500',
    items: [
      "I'm looking for a value-added benefit for my members",
    ],
  },
]

function Card({ slide }: { slide: Slide }) {
  return (
    <div
      className={`bg-gradient-to-b ${slide.gradientFrom} to-white dark:to-black rounded-3xl flex flex-col items-start p-5 border ${slide.borderColor} h-full`}
    >
      <h4 className="font-bold text-lg mb-4 flex flex-col items-center gap-y-3">
        <slide.icon className={`${slide.iconColor} text-2xl shrink-0`} />
        {slide.title}
      </h4>
      <ul className="space-y-3">
        {slide.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-[11px] text-gray-600 dark:text-gray-300">
            <MdCheckCircle className={`${slide.checkColor} text-[14px] mt-0.5 shrink-0`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function LookingToAchieve() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1.15, spacing: 12 },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
    },
  })

  return (
    <section className="mb-12">
        <section className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 leading-tight">
            Built for organizations with <br />
            <span className="text-blue-uchooseit text-base sm:text-xl md:text-2xl ">
              customers, employees or members.
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Find the path that fits your organization.
          </p>
        </section>

      {/* Mobile: Carousel */}
      <div className="md:hidden">
        <div ref={sliderRef} className="keen-slider">
          {slides.map((slide) => (
            <div key={slide.title} className="keen-slider__slide">
              <Card slide={slide} />
            </div>
          ))}
        </div>
        <div className="dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`dot${currentSlide === idx ? ' active' : ''}`}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {slides.map((slide) => (
          <Card key={slide.title} slide={slide} />
        ))}
      </div>
    </section>
  )
}
