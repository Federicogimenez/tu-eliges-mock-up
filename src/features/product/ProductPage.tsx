// import { useAllyContext } from '../../hooks/useAllyContext';
// import { useWindowSize } from '../../hooks/useWindowSize';
// import ButtonPrimary from '../../shared/components/ButtonPrimary';
import HeroProductPage from './components/HeroProductPage';
import HowActivateSection from './components/HowActivateSection';
// import PricingSection from '../home/components/PricingSection';
// import CalculatorTableSection from '../../shared/layout/CalculatorTableSection';
import HowSection from './components/HowSection';
import TestimonialSection from './components/TestimonialSection';

// import pricing_banner from '/pricing/home/family.png';

export default function ProductPage() {
  // const { allyData } = useAllyContext();
  // const { width } = useWindowSize()


  return (
    <div className="relative min-h-screen w-full h-full flex flex-col justify-center items-center">
      <HeroProductPage />
      <HowActivateSection />
      <HowSection />
      <TestimonialSection />
      {/* <CalculatorTableSection membershipCost={allyData.new_price_after_discount} /> */}
      {/* <PricingSection
        img={pricing_banner}
        cta={width > 1280 ? true : false} /> */}

      {/* <div className='  fixed z-40 bottom-0 left-1/2 -translate-x-1/2 -translate-y-[2px] w-full flex justify-center px-2 pb-2 animate-appear-up' style={{animationDelay: '2s'}}>
        <ButtonPrimary src={code ? code : recurlyUrl} customStyle="!w-11/12 !max-w-3xl" />
      </div> */}
    </div>
  );
};