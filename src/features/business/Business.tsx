// import { useInlineVideo } from '../../hooks/useInlineVideo'
// import { useWindowSize } from '../../hooks/useWindowSize'
// import LazyLoadImage from '../../shared/components/LazyLoadImage'
import HeroSection from './components/HeroSection'
import AudienceCards from './components/AudienceCards'
import PartnershipModels from './components/PartnershipModels'
import WaveSeparator from '../../shared/components/WaveSeparator'
import OpportunitiesSection from './components/OpportunitiesSection'
import BrandsShowcase from './components/BrandsShowcase'
import HowItWorks from './components/HowItWorks'
import StrategyCallCTA from './components/StrategyCallCTA'

const GOOGLE_APPOINTMENT_URL = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2ipovAXSIaPCYESnb0IdWex_omJ123IQSAqvXmErIXEcGvYCIRlqiWqhazgzch7_xnYpKNkANC'

export default function Business() {

  const handleBookCall = () => {
    window.open(GOOGLE_APPOINTMENT_URL, '_blank')
  }

  return (
    <div className="relative z-10 animate-appear-up ">
      <HeroSection onBookCall={handleBookCall} />

      <div className="relative bg-linear-180 from-white/50 to-20% to-white dark:from-black/50 dark:to-black transition-colors duration-300">
        <AudienceCards />
        <PartnershipModels onBookCall={handleBookCall} />
        <div className="absolute z-10 bottom-0 translate-y-1/2 left-0 w-full">
            <WaveSeparator />
        </div>
      </div>

      <OpportunitiesSection />

      <div className="bg-white dark:bg-black transition-colors duration-300">
        <BrandsShowcase />
        {/* <SavingsSection /> */}
        <WaveSeparator />
        <HowItWorks />
        <StrategyCallCTA onBookCall={handleBookCall} />
      </div>
    </div>
  )
}
