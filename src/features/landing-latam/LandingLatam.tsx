/**
 * LandingLatam — maqueta paralela del rediseño de la landing email.
 * Ruta: /save-latam · DESECHABLE (ver .claude/features/landing-latam/brief.md
 * y doc/teardown.md para promover/eliminar).
 *
 * Orden: Hero → Community → Calculadora → Choosy, sobre el video LATAM fijo.
 */
import VideoBackgroundLatam from './components/VideoBackgroundLatam'
import HeroCapture from './components/HeroCapture'
import CommunityCarousel from './components/CommunityCarousel'
import TrendCalculator from './components/TrendCalculator'
import ChoosyClosing from './components/ChoosyClosing'

export default function LandingLatam() {
  return (
    <>
      <VideoBackgroundLatam />

      <div className="relative z-10 animate-appear-up">
        <HeroCapture />
        <CommunityCarousel />
        <TrendCalculator />
        <ChoosyClosing />
      </div>
    </>
  )
}
