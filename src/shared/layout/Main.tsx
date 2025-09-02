import React, { useEffect } from 'react';
import { HamburgerMenu } from '../components/HamburgerMenu';
// import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { useTheme } from '../../hooks/useTheme';
import { Link, useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import { Accordion } from '../components/Accordion';

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
      <header className='absolute top-0 left-0 z-50 w-full flex items-end justify-center h-[150px] md:h-[120px]'>
        <HamburgerMenu />

        <Link to={'/'} preventScrollReset={false} className='relative h-2/3 max-md:max-w-[40%] lg:max-h-[70px]'>
          <img
            src={theme === 'dark' || pathname == '/' ? '/uchooseit-white.svg' : '/uchooseit-black.svg'}
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
            <section className='px-4 py-10 w-full'>
        <h5 className='text-black dark:text-white text-3xl text-center mb-5'>
          Frequent Ask Questions
        </h5>
        <Accordion label={'What kind of discounts are available?'} >
            Discounts are available for both national and local establishments. Categories include clothing, electronics, furniture, office supplies, sporting goods, and pet supplies (location-based). Explore them at uchooseitus.enjoymydeals.com or call (888) 556-2393 for assistance.
        </Accordion>
        <Accordion label={'What’s the best way to search for shopping deals?'} >
             Use the search bar at uchooseitus.enjoymydeals.com to input what you're looking for and your location. Refine results using filters (top right on mobile, left panel on desktop). You can switch between list view and map view.
        </Accordion>
        <Accordion label={'How can I refine or filter my search results?'} >
            After searching, use filters to narrow by category (e.g., apparel, electronics, furniture) or by proximity (nearby vs. online) on uchooseitus.enjoymydeals.com.
        </Accordion>
        <Accordion label={'What’s the best way to find local shopping deals using the mobile app?'} >
            Enable location access in the app. It will show you local deals nearby. You can filter by category even on the map view. If you need help, call (888) 556-2393.
        </Accordion>
        <Accordion label={'How do I find out the details about the coupon or deal?'} >
            Click “View Deals” on uchooseitus.enjoymydeals.com to see details and fine print. You’ll learn how the discount works and whether you need to show or print the coupon.
        </Accordion>
        <Accordion label={'How do you redeem a coupon?'} >
          <ul>
            <li>
              For physical deals: Click “View Deals,” then “Use Coupon,” and either print or show on your phone.
            </li>
            <li>
              For online deals: Click “Shop Now,” copy the code, and click “Continue to Site.”
            </li>
          </ul>
        </Accordion>
        <Accordion label={'How do these discounts differ from other coupons I see online, or the ones I get in my mailbox?'} >
            These are private network discounts available only through uchooseitus.enjoymydeals.com. Retailers offer deeper deals for members—more exclusive than public or mailed coupons.
        </Accordion>
        <Accordion label={'How much can I save?'} >
            On average: $335/year on auto services, $57/year on shopping, home & garden, and more (may vary by purchase type). Log in at uchooseitus.enjoymydeals.com to start saving.
        </Accordion>

        <Accordion label={'What if a merchant won’t honor my discount offer?'} >
            Rare, but possible. Merchants may change staff or ownership. Contact support at (888) 556-2393, by email, or via chat if needed.
        </Accordion>
        <Accordion label={'What if I need assistance finding the best deals?'} >
            Contact customer service via phone at (888) 556-2393, online chat, or email (cs@memberweb.com).
        </Accordion>
        <Accordion label={'What are your customer support operating hours?'} >
            Available 24/7, 365 days a year—including holidays—via phone at (888) 556-2393, online chat, or email.
        </Accordion>
      </section>
      <Footer />
    </div>
  );
};