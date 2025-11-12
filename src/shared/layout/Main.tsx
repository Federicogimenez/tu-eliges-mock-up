import React, { useEffect, useState } from 'react';
import { HamburgerMenu } from '../components/HamburgerMenu';
// import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { useTheme } from '../../hooks/useTheme';
import { Link, useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import Faqs from './Faqs';
import { useInlineVideo } from '../../hooks/useInlineVideo';
import { useAllyContext } from '../../hooks/useAllyContext';
import LazyLoadImage from '../components/LazyLoadImage';
import { useWindowSize } from '../../hooks/useWindowSize';
import ButtonPrimary from '../components/ButtonPrimary';


import videoHeroMobile from "/hero-video-mobile.mp4"
import videoHeroPreviewMobile from "/hero-video-mobile-preview.png"

import videoHeroDesk from "/hero-video-desk.mp4"
import videoHeroPreviewDesk from "/preview-hero-video-desk.png"

import icon_dining from '/icons/category/dining.png'
import icon_travel from '/icons/category/travel.png'
import icon_shop from '/icons/category/shop.png'
import icon_entertainment from '/icons/category/entertainment.png'
import { type CategoryPageOptions } from '../components/HeroCategoryBanner';
import CalculateSavingButton from '../components/SavingsCalculator/CalculateSavingButton';
import { SavingsModalProvider } from '../../context/SavingsCalculatorModalContext';
import { useAnalytics } from '../../hooks/useAnalytics';



interface LayoutProps {
  children: React.ReactNode;
}

export const Main: React.FC<LayoutProps> = ({ children }) => {
    const { theme } = useTheme();
    const { code, recurlyUrl, allyData } = useAllyContext();
    const { width } = useWindowSize()
    const videoRef = useInlineVideo<HTMLVideoElement>();
    const {pathname} = useLocation()
    const [ currentLogo, setCurrentLogo ] = useState<string>('/uchooseit-white.svg')
    const [ heroUchooseit, setHeroUchooseit ] = useState<boolean>(false)
    const [ showFaqs, setshowFaqs ] = useState<boolean>(true)
    const [ isHome, setIsHome ] = useState<boolean>(false)
    const [allyPopUp, setallyPopUp] = useState(true)

    useAnalytics()
    
    const perMonthPrice = Math.floor((allyData.new_price_after_discount * 100 )/12) / 100 ;
    const originalPrice = allyData.membership_anual_fee.toFixed(2)
    const annualPrice = allyData.new_price_after_discount.toFixed(2) || originalPrice;
    const influencer_name = allyData.alliedName 

    const heroVideo = {
      source: width > 1024 ? videoHeroDesk : videoHeroMobile,
      preview: width > 1024 ? videoHeroPreviewDesk : videoHeroPreviewMobile
    }

    
    const navLinks = [
      {
        label: 'Shop',
        icon: icon_shop,
        path: "/shop",
        bg_color: "bg-purple-shop/60 hover:bg-purple-shop"
      },
      {
        label: 'Travel',
        icon: icon_travel,
        path: "/travel",
        bg_color: "bg-blue-travel/60 hover:bg-blue-travel"
      },
      {
        label: 'Dining',
        icon: icon_dining,
        path: "/dining",
        bg_color: "bg-yellow-dining/60 hover:bg-yellow-dining"
      },
      {
        label: 'Entertainment',
        icon: icon_entertainment,
        path: "/entertainment",
        bg_color: "bg-pink-entertainment/60 hover:bg-pink-entertainment"
      },
    ]
    
    useEffect(() => {
      window.scrollTo(0, 0);

      const heroPages = [
        '/',
        '/shop',
        '/travel',
        '/dining',
        '/entertainment',
      ]
      

      if( heroPages.some(page => pathname === page ) ){
        setCurrentLogo('/uchooseit-white.svg')
        setHeroUchooseit(true)
        
      } else{
        setHeroUchooseit(false)
        if(theme !== 'dark'){
          setCurrentLogo('/uchooseit-black.svg')
        }else{
          setCurrentLogo('/uchooseit-white.svg')
        }
      }

    }, [pathname, theme]);

    useEffect(() => {
      const noFaqsPages = [
          '/agency',
          '/influencer',
          '/company',
          '/non-profit',
          '/activate',
          '/thank-you'
      ]
      const categoryPages: CategoryPageOptions[] = [
          'shop',
          'travel',
          'dining',
          'entertainment'
      ]
      const matchedCategory = categoryPages.find(page => pathname === `/${page}`);
      
      if( noFaqsPages.some(page => pathname === page ) ){
        setshowFaqs(false)
      }

      if (matchedCategory) {
        setIsHome(false);
      } else {
        setIsHome(true);
      }

    }, [pathname])


    
  return (
    <SavingsModalProvider>
      <div className="relative transition-colors duration-300">
        
        <header className='animate-header-initial absolute top-0 left-0 z-[100] w-full flex items-center justify-center min-h-[70px] h-[15dvh] max-h-[120px] md:max-h-[120px]'>
          
          <HamburgerMenu />


          <Link to={'/'} preventScrollReset={false} className='relative h-2/3 max-md:max-w-[40%] lg:max-h-[70px]'>
            <img
              src={currentLogo}
              alt="UChooseIt"
              className="h-full w-full object-center object-contain transition-all duration-300"
              />
          </Link>

        </header>

        {/* Hero */}
        {
          heroUchooseit ?
          <section className={`relative  w-full flex justify-center items-stretch `}>
            
            <CalculateSavingButton />

              <div className="fixed inset-0 bg-black">
                  <div className="relative w-full h-full opacity-50">
                      <LazyLoadImage
                          src={heroVideo.preview}
                          alt={"preview"}
                          classnames={`absolute z-0 w-full h-full object-cover object-center`}
                      />
                      {/* <img src={videoHeroPreview} alt="preview" className="absolute z-0 w-full h-full object-cover object-center" /> */}
                      <video 
                          className="relative z-50 w-full h-full object-cover object-center "
                          ref={videoRef}
                          autoPlay
                          muted
                          loop
                          playsInline
                          webkit-playsinline="true"
                          controls={false} 
                          >
                          <source src={heroVideo.source} type="video/mp4" />
                          Your browser can't support this video
                      </video>
                  </div>
              </div>

              <div className={`relative z-20 w-full transition-all flex flex-col justify-center items-center pt-[25dvh] md:pt-[20dvh] animate-appear-up ${isHome ? 'min-h-[500px] h-dvh' : 'h-fit'}`}
                style={{animationDelay:"1.2s"}}
                >
            

                  <div className="w-full text-white flex flex-col justify-center items-center gap-y-[4dvh] lg:gap-y-[4dvh] pb-[5dvh] grow">
                        <h1 className={`  text-center text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl leading-[1]   max-w-[600px] lg:max-w-[600px] xl:max-w-[720px] transition-all duration-500 ${!isHome ? 'landscape:scale-90' : 'scale-100'} `}>
                            <span className="font-semibold animate-appear-up">
                                One Million Deals
                            </span>
                            <span className="animate-appear-up">
                                <span className="block text-shadow-xl-blue font-medium tracking shiny-blueuchooseit-text text-2xl sm:text-4xl md:text-4xl xl:text-5xl mx-3 ">
                                    One VIP Membership
                                </span> 
                            </span>
                        </h1>


                        <div className={`animate-appear-up`}
                              style={{animationDelay:".2s"}}>
                          <p className={` w-full mt-2 text-center md:w-full text-lg md:text-xl lg:text-2xl font-medium h-10 mx-auto transition-all duration-200  ${!isHome ? 'landscape:scale-75' : 'scale-100'}`}>
                              You Choose Where <br className='md:hidden' /> to Save
                          </p>
                        </div>

                        <div className='animate-appear-up'
                              style={{animationDelay: ".3s"}}>
                          <p className={` ease-in-out flex portrait:flex-col landscape:flex-row justify-center items-center gap-2 flex-wrap text-center md:w-full font-semibold mx-auto transition-all duration-500
                                        ${isHome ? 'translate-y-0' : ' !flex-row '}
                                        `}
                                        >
                              {
                                navLinks.map(({ label, icon, path, bg_color }, i)=>{
                                  return <Link to={path} key={i}
                                                className={`transition-all ease duration-300 rounded-full p-2 text-white flex justify-center items-center gap-x-2 
                                                            ${isHome ? ' px-5 py-1 bg-gradient-to-br ' 
                                                              : (pathname === path ? ' scale-125' : ' !bg-transparent scale-100 hover:scale-110')}
                                                            ${bg_color} `}>
                                                <img src={icon} alt="icon" className={` w-6 lg:w-6 object-contain object-center transition-all duration-300 ${isHome ? 'scale-0' : 'scale-100'}  ${pathname === path ? ' scale-125' : ' scale-100'}`} />
                                                <span className={`overflow-hidden ${isHome ? '' : 'hidden'}`}>
                                                  {label}
                                                </span>

                                        </Link>
                                })
                              }
                          </p>
                        </div>

                  </div>
                  <div className="relative w-full max-w-xl" >

                    

                      {
                        !isHome ? null :
                        <>
                          <div className="relative portrait:mt-[5dvh] landscape:mt-[10dvh] w-11/12 flex justify-center mx-auto animate-appear-up" style={{animationDelay: '.3s'}}>
                              <ButtonPrimary src={code ? code : recurlyUrl} />
                          </div>
                          <p className="text-sm pb-4 text-gray-200 flex gap-x-2 justify-center items-center mt-4 animate-appear-up" style={{animationDelay: '.5s'}}>
                              <img src="/icons/stars.svg" alt="guarantee" className='w-[50px]' />
                              Trusted by families nationwide
                          </p>
                        </>
                      }
                  </div>
              </div>


              {
                allyData.hasCoupon && allyPopUp ? 
                <div className='fixed z-[10000] inset-0 bg-gradient-to-b from-black/50 to-black flex justify-center items-center py-[5dvh] min-h-[500px] overflow-hidden' >
                  <div className='absolute inset-0 ' onClick={()=>setallyPopUp(false)} />
                    {/* <div className='h-[80dvh] w-full overflow-hidden'> */}
                      <div autoFocus className='relative overflow-auto mx-auto flex justify-center items-start px-6 py-8 w-11/12 portrait:h-full landscape:h-fit min-h-[400px] max-w-5xl bg-gradient-to-b from-black/70 to-blue-gradient-end/60 rounded-3xl'>

                        <button className='cursor-pointer size-10 p-2 fixed right-0 top-2 flex flex-col justify-center items-center ' 
                                onClick={()=>setallyPopUp(false)}>
                          <span className='w-full h-1 bg-white rounded-xl  rotate-45 '/>
                          <span className='w-full h-1 bg-white rounded-xl -translate-y-1 -rotate-45 '/>
                        </button>
                        {
                          allyData.isLoading ?
                            <div className='h-full flex flex-col justify-center items-center gap-y-6'>
                              <h3 className="subtitle text-gray-300 text-center mb-4">
                                  Loading Your Exclusive Discount
                              </h3>
                              <picture className="relative animate-bounce size-28 lg:size-40 rounded-full flex justify-center items-center  overflow-hidden bg-blue-uchooseit">
                                  <img src="/icons/present.svg" alt="present" className="w-3/5 " />
                              </picture>
                            </div>
                            :
                            allyData.userNotFound ? null
                              // <div className='flex justify-center items-center gap-x-4 w-fit p-4'>
                              //   <img src="/icons/error.svg" alt="error" className='w-10 lg:w-14 object-contain'/>
                              //   <h5 className='lg:text-xl text-white text-left'>
                              //     We can't validate your code. 
                              //     <br />
                              //     Please try again or check your afiliate url code.
                              //   </h5>
                              // </div>
                              :
                              <div className='w-full flex flex-col justify-start items-center'>
                                <h2 className='text-3xl md:text-5xl xl:text-6xl text-white font-semibold text-center mb-4 '>Congratulations!</h2>
                                <div className='w-fit flex flex-col landscape:flex-row-reverse justify-center items-center landscape:items-stretch gap-6 mb-6 mx-auto max-w-4xl'>

                                  <picture className={`portrait:w-full portrait:h-[30dvh] landscape:w-1/2 landscape:h-auto rounded-full p-1 overflow-hidden`}>
                                      <img src={allyData.alliedCompanyImg} alt="afiliate" className="w-full h-full  object-top object-contain rounded-full " />
                                  </picture>
                                  <div className='portrait:text-center landscape:text-left flex flex-col justify-evenly items-start portrait:gap-y-4 '>
                                    <h3 className="relative text-neutral-300 text-lg sm:text-xl lg:text-2xl text-balance w-fit leading-[1.4]">
                                        Join 
                                            {influencer_name ? 
                                                <strong className="mx-2 text-white">
                                                    {influencer_name + "'s"}
                                                </strong>
                                            : " " } 
                                        {/* <br /> */}
                                        community of Smart Savers, with 
                                        <strong className='mx-2 text-white'>
                                          {allyData.discount_percent}%Off 
                                        </strong>
                                        your membership purchase!
                                  
                                    </h3>
                                    <p className="w-full font-semibold relative text-xl lg:text-3xl  text-gray-900 dark:text-white">
                                      Equivalent to <br className='portrait:block landscape:hidden' />
                                      <span className='shiny-lightblue-text text-xl uppercase font-semibold  '>
                                        <span className='block landscape:inline-block mx-2 text-4xl'>
                                          ${perMonthPrice} 
                                        </span>
                                        per month
                                      </span>
                                    </p>
                                    <p className="subtitle w-full text-gray-100 dark:text-white ">
                                        Billed annually at <br className='portrait:block landscape:hidden' />

                                        { allyData.alliedCuponCode == "" ?
                                            <span className=" ml-2  text-green-400">
                                                ${annualPrice}
                                            </span>
                                            :
                                            <>
                                                <span className="mx-2 text-red-400 line-through">
                                                    ${originalPrice}
                                                </span>
                                                <span className=" text-green-400">
                                                    ${annualPrice}
                                                </span>
                                            </>
                                        }
                                    </p>
                                 
                                  </div>
                                </div>
                                <div className=' w-full max-w-lg mx-auto'>
                                  <ButtonPrimary src={code ? code : recurlyUrl} />
                                  <p className="text-sm  text-gray-200 flex gap-x-2 justify-center items-center mt-4 animate-appear-up" style={{animationDelay: '.5s'}}>
                                      <img src="/icons/stars.svg" alt="guarantee" className='w-[50px]' />
                                      Trusted by families nationwide
                                  </p>
                                </div>
                              </div>
                            }
                      </div>
                    {/* </div> */}
                </div>

                : null
              }

          </section>
          : null
        }


        {/* Main Content */}
        <main className="relative">
          {children}
        </main>

        {
          !showFaqs ? null :
          <Faqs />
        }

        <Footer />
      </div>
    </SavingsModalProvider>

  );
};