import { useState, useCallback } from 'react'
import VideoBackground from './components/VideoBackground'
import Hero from './components/Hero'
import InsightForm from './components/InsightForm'
import SavingsShowcase from './components/SavingsShowcase'
import Closing from './components/Closing'
import Benefits from '../../shared/layout/Benefits'

const STORAGE_KEY = 'uchooseit-email-registered'

export default function LandingEmail() {
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
      <VideoBackground />

      <div className="relative z-10 animate-appear-up">
        <Hero />
        <InsightForm isRegistered={isRegistered} onRegister={handleRegister} />
        <Benefits />
        <SavingsShowcase />
        <Closing isRegistered={isRegistered} onRegister={handleRegister} />
      </div>
    </>
  )
}
