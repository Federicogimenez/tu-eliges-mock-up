import { useEffect, useState } from 'react'
import { MdCalendarToday } from 'react-icons/md'

interface BookCallButtonProps {
  onClick: () => void
  text_1?: string
  text_2?: string
}

export default function BookCallButton({
  onClick,
  text_1 = 'Book a Strategy Call',
  text_2 = 'Schedule Your Free Session',
}: BookCallButtonProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true)
      setActiveIndex((prev) => (prev + 1) % 2)
      setTimeout(() => setTransitioning(false), 500)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const texts = [text_1, text_2]

  return (
    <button
      onClick={onClick}
      className="w-full max-w-lg mx-auto bg-blue-uchooseit hover:-translate-y-0.5 hover:brightness-120 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-blue-uchooseit/20 transition-all duration-300 cursor-pointer relative overflow-hidden"
    >
      {texts.map((text, i) => {
        const isActive = activeIndex === i
        let posClass: string
        if (isActive) {
          posClass = 'translate-x-0 transition-transform duration-500'
        } else if (transitioning) {
          posClass = 'translate-x-full transition-transform duration-500'
        } else {
          posClass = '-translate-x-full'
        }
        return (
          <span
            key={i}
            className={`absolute inset-0 flex items-center justify-center gap-2 ${posClass}`}
          >
            {text}
            <MdCalendarToday className="text-xl" />
          </span>
        )
      })}
      {/* Invisible spacer for button height */}
      <span className="invisible flex items-center gap-2">
        {text_1}
        <MdCalendarToday className="text-xl" />
      </span>
    </button>
  )
}
