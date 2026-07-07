// import { useWindowSize } from '../../hooks/useWindowSize';
import { BrandsSection } from './components/BrandsSection';
import GatewaySection from '../../shared/layout/GatewaySection';
// import HeroVideoSection from './components/HeroVideoSection';
import PricingSection from '../../shared/layout/PricingSection';
import CalculatorTableSection from '../../shared/layout/CalculatorTableSection';
import CategoriesSection from './components/CategoriesSection';
import { useAllyContext } from '../../hooks/useAllyContext';

import pricing_family from "/pricing/home/family.png"

// import videoHeroMobile from "/hero-video-mobile.mp4"
// import videoHeroPreviewMobile from "/hero-video-mobile-preview.png"

// import videoHeroDesk from "/hero-video-desk.mp4"
// import videoHeroPreviewDesk from "/preview-hero-video-desk.png"

import BenefitsVideoSection from './components/BenefitsVideoSection';


export default function Home (){

  const { allyData } = useAllyContext();
  

  // const { width } = useWindowSize()

  return (
    <>
      {/* <HeroSection /> */}
      {/* <HeroVideoSection videoHero={width > 980 ? videoHeroDesk : videoHeroMobile} videoHeroPreview={width > 980 ? videoHeroPreviewDesk : videoHeroPreviewMobile} /> */}
      {/* <CategorySection /> */}
      <BenefitsVideoSection />
      <CategoriesSection />
      <BrandsSection />
      <CalculatorTableSection membershipCost={allyData.new_price_after_discount} />
      <PricingSection img={pricing_family} />
      <GatewaySection />
    </>
  );
};