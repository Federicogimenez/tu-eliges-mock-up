/**
 * LandingEmail — landing oficial /save (rediseño promovido desde landing-latam).
 * Idioma vía CountryContext/useTranslation. Video country-aware
 * (usa → video home, resto → latam) reusando VideoBackground.
 */
import VideoBackground from './components/VideoBackground'
import Hero from './components/Hero'
import Community from './components/Community'
import TrendCalculator from './components/TrendCalculator'
import ChoosyClosing from './components/ChoosyClosing'

export default function LandingEmail() {
  return (
    <>
      <VideoBackground />

      <div className="relative z-10 animate-appear-up">
        <Hero />
        <Community />
        <TrendCalculator />
        <ChoosyClosing />
      </div>
    </>
  )
}
