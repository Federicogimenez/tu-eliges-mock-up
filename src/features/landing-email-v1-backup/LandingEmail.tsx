import VideoBackground from './components/VideoBackground'
import Hero from './components/Hero'
import InsightForm from './components/InsightForm'
import SavingsShowcase from './components/SavingsShowcase'
import Closing from './components/Closing'
import Benefits from '../../shared/layout/Benefits'

export default function LandingEmail() {
  return (
    <>
      <VideoBackground />

      <div className="relative z-10 animate-appear-up">
        <Hero />
        <InsightForm />
        <Benefits />
        <SavingsShowcase />
        <Closing />
      </div>
    </>
  )
}
