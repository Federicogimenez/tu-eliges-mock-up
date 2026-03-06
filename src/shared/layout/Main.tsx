import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useAllyContext } from '../../hooks/useAllyContext';
import { useRouteConfig } from '../../hooks/useRouteConfig';
import { useAnalytics } from '../../hooks/useAnalytics';
import useAllyPopUpTrigger from '../../hooks/useAllyPopUpTrigger';
import { HamburgerMenu } from '../components/HamburgerMenu';
import { SavingsModalProvider } from '../../context/SavingsCalculatorModalContext';
import CalculateSavingButton from '../components/SavingsCalculator/CalculateSavingButton';
import HeroVideo from './HeroVideo';
import HeroOverlay from './HeroOverlay';
import AllyPopUp from '../components/AllyPopUp';
import { Footer } from './Footer';
import Faqs from './Faqs';

interface LayoutProps {
  children: React.ReactNode;
}

export const Main: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  const { allyData } = useAllyContext();
  const { pathname } = useLocation();
  const { isHeroPage, isBusinessPage, showFaqs, isHome, currentLogo } = useRouteConfig(pathname, theme);

  const showHeroContent = isHeroPage && !isBusinessPage;
  const { showPopUp, closePopUp } = useAllyPopUpTrigger(allyData.hasCoupon && showHeroContent);

  useAnalytics();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <SavingsModalProvider>
      <div className="relative transition-colors duration-300">

        <header className="animate-header-initial absolute top-0 left-0 z-[100] w-full flex items-center justify-center min-h-[70px] h-[15dvh] max-h-[120px] md:max-h-[120px]">
          <HamburgerMenu />
          <Link to="/" preventScrollReset={false} className="relative h-2/3 max-md:max-w-[40%] lg:max-h-[70px]">
            <img
              src={currentLogo}
              alt="UChooseIt"
              className="h-full w-full object-center object-contain transition-all duration-300"
            />
          </Link>
        </header>

        {isHeroPage && (
          <section className="relative w-full flex justify-center items-stretch">
            {showHeroContent && <CalculateSavingButton />}
            <HeroVideo />
            {showHeroContent && <HeroOverlay isHome={isHome} />}
          </section>
        )}

        <main className="relative">
          {children}
        </main>

        {showFaqs && <Faqs />}
        <Footer />
        <AllyPopUp visible={showPopUp} onClose={closePopUp} />
      </div>
    </SavingsModalProvider>
  );
};
