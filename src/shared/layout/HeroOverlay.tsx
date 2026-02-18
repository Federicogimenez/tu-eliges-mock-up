import { Link, useLocation } from 'react-router-dom'
import { useAllyContext } from '../../hooks/useAllyContext'
import ButtonPrimary from '../components/ButtonPrimary'

import icon_shop from '/icons/category/shop.png'
import icon_travel from '/icons/category/travel.png'
import icon_dining from '/icons/category/dining.png'
import icon_entertainment from '/icons/category/entertainment.png'

const navLinks = [
  { label: 'Shop', icon: icon_shop, path: '/shop', bg_color: 'bg-purple-shop/60 hover:bg-purple-shop' },
  { label: 'Travel', icon: icon_travel, path: '/travel', bg_color: 'bg-blue-travel/60 hover:bg-blue-travel' },
  { label: 'Dining', icon: icon_dining, path: '/dining', bg_color: 'bg-yellow-dining/60 hover:bg-yellow-dining' },
  { label: 'Entertainment', icon: icon_entertainment, path: '/entertainment', bg_color: 'bg-pink-entertainment/60 hover:bg-pink-entertainment' },
]

interface HeroOverlayProps {
  isHome: boolean
}

export default function HeroOverlay({ isHome }: HeroOverlayProps) {
  const { code, recurlyUrl } = useAllyContext()
  const { pathname } = useLocation()

  return (
    <div
      className={`relative z-20 w-full transition-all flex flex-col justify-center items-center pt-[25dvh] md:pt-[20dvh] animate-appear-up ${isHome ? 'min-h-[500px] h-dvh' : 'h-fit'}`}
      style={{ animationDelay: '.5s' }}
    >
      <div className="w-full text-white flex flex-col justify-center items-center gap-y-[4dvh] lg:gap-y-[4dvh] pb-[5dvh] grow">
        <h1 className={`text-center text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl leading-[1] max-w-[600px] lg:max-w-[600px] xl:max-w-[720px] transition-all duration-500 ${!isHome ? 'landscape:scale-90' : 'scale-100'}`}>
          <span className="font-semibold animate-appear-up">
            One Million Deals
          </span>
          <span className="animate-appear-up">
            <span className="block text-shadow-xl-blue font-medium tracking shiny-blueuchooseit-text text-2xl sm:text-4xl md:text-4xl xl:text-5xl mx-3">
              One VIP Membership
            </span>
          </span>
        </h1>

        <div className="animate-appear-up" style={{ animationDelay: '.2s' }}>
          <p className={`w-full mt-2 text-center md:w-full text-lg md:text-xl lg:text-2xl font-medium h-10 mx-auto transition-all duration-200 ${!isHome ? 'landscape:scale-75' : 'scale-100'}`}>
            You Choose Where <br className="md:hidden" /> to Save
          </p>
        </div>

        <div className="animate-appear-up" style={{ animationDelay: '.3s' }}>
          <p className={`ease-in-out flex portrait:flex-col landscape:flex-row justify-center items-center gap-2 flex-wrap text-center md:w-full font-semibold mx-auto transition-all duration-500 ${isHome ? 'translate-y-0' : ' !flex-row '}`}>
            {navLinks.map(({ label, icon, path, bg_color }, i) => (
              <Link
                to={path}
                key={i}
                className={`transition-all ease duration-300 rounded-full p-2 text-white flex justify-center items-center gap-x-2 ${isHome ? ' px-5 py-1 bg-gradient-to-br ' : (pathname === path ? ' scale-125' : ' !bg-transparent scale-100 hover:scale-110')} ${bg_color}`}
              >
                <img
                  src={icon}
                  alt="icon"
                  className={`w-6 lg:w-6 object-contain object-center transition-all duration-300 ${isHome ? 'scale-0' : 'scale-100'} ${pathname === path ? ' scale-125' : ' scale-100'}`}
                />
                <span className={`overflow-hidden ${isHome ? '' : 'hidden'}`}>
                  {label}
                </span>
              </Link>
            ))}
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-xl">
        {isHome && (
          <>
            <div className="relative portrait:mt-[5dvh] landscape:mt-[10dvh] w-11/12 flex justify-center mx-auto animate-appear-up" style={{ animationDelay: '.3s' }}>
              <ButtonPrimary src={code ? code : recurlyUrl} />
            </div>
            <p className="text-sm pb-4 text-gray-200 flex gap-x-2 justify-center items-center mt-4 animate-appear-up" style={{ animationDelay: '.5s' }}>
              <img src="/icons/stars.svg" alt="guarantee" className="w-[50px]" />
              Trusted by families nationwide
            </p>
          </>
        )}
      </div>
    </div>
  )
}
