import React, { useEffect, useState } from 'react';
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
    const [ currentLogo, setCurrentLogo ] = useState<string>('/uchooseit-white.svg')

    const {pathname} = useLocation()

    const blackLogoPages = [
      '/',
      '/shop',
      '/travel',
      '/dining',
      '/entertainment',
    ]

    useEffect(() => {
      window.scrollTo(0, 0);


      if( blackLogoPages.some(page => pathname === page ) ){
        setCurrentLogo('/uchooseit-white.svg')
        console.log('es black page');
        
      } else{
        if(theme !== 'dark'){
          setCurrentLogo('/uchooseit-black.svg')
        }else{
          setCurrentLogo('/uchooseit-white.svg')
        }
      }

    }, [pathname, theme]);

    
  return (
    <div className="min-h-screen bg-transparent transition-colors duration-300">
      <header className='absolute top-0 left-0 z-50 w-full flex items-end justify-center min-h-[70px] h-[20dvh] max-h-[120px] md:max-h-[120px]'>
        <HamburgerMenu />

        <Link to={'/'} preventScrollReset={false} className='relative h-2/3 max-md:max-w-[40%] lg:max-h-[70px]'>
          <img
            src={currentLogo}
            alt="UChooseIt"
            className="h-full w-full object-center object-contain transition-all duration-300"
            />
        </Link>

      </header>
      
      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {
          pathname === '/agency' || 
          pathname === '/influencer' ||
          pathname === '/company' ||
          pathname === '/non-profit' ?
          null :
          <Faqs />
      }

      <Footer />
    </div>
  );
};