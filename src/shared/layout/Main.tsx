import React, { useEffect } from 'react';
import { HamburgerMenu } from '../components/HamburgerMenu';
// import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { useTheme } from '../../hooks/useTheme';
import { Link, useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import Faqs from './Faqs';

interface LayoutProps {
  children: React.ReactNode;
}

export const Main: React.FC<LayoutProps> = ({ children }) => {
    const { theme } = useTheme();

    const {pathname} = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    
  return (
    <div className="min-h-screen bg-transparent transition-colors duration-300">
      <header className='absolute top-0 left-0 z-50 w-full flex items-end justify-center min-h-[70px] h-[20dvh] max-h-[120px] md:max-h-[120px]'>
        <HamburgerMenu />

        <Link to={'/'} preventScrollReset={false} className='relative h-2/3 max-md:max-w-[40%] lg:max-h-[70px]'>
          <img
            src={theme !== 'dark' && pathname == '/product' ? '/uchooseit-black.svg' : '/uchooseit-white.svg'}
            alt="UChooseIt"
            className="h-full w-full object-center object-contain"
            />
        </Link>
        {/* Theme Switcher positioned at top right */}
        {/* <div className="fixed top-6 right-6 z-50"> */}
          {/* <ThemeSwitcher /> */}
        {/* </div> */}
      </header>
      
      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      <Faqs />

      <Footer />
    </div>
  );
};