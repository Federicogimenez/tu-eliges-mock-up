import { useState, useCallback } from 'react'
import VideoBackground from './components/VideoBackground'
import Hero from './components/Hero'
import InsightForm from './components/InsightForm'
import SavingsShowcase from './components/SavingsShowcase'
import Closing from './components/Closing'
import LandingFooter from './components/LandingFooter'

const STORAGE_KEY = 'uchooseit-email-registered'

interface LandingEmailProps {
  variant: 'usa' | 'latam'
}

export default function LandingEmail({ variant }: LandingEmailProps) {
  const [isRegistered, setIsRegistered] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) === 'true'
  })

  const handleRegister = useCallback((email: string) => {
    localStorage.setItem(STORAGE_KEY, 'true')
    localStorage.setItem('uchooseit-email', email)
    setIsRegistered(true)
  }, [])

  return (
    <>
      <VideoBackground variant={variant} />

      <div className="relative z-10 animate-appear-up">
        <Hero variant={variant} />
        <InsightForm variant={variant} isRegistered={isRegistered} onRegister={handleRegister} />
        <SavingsShowcase variant={variant} />
        <Closing variant={variant} isRegistered={isRegistered} onRegister={handleRegister} />
        <LandingFooter />
      </div>
    </>
  )
}
