import { useMemo } from 'react'
import { HERO_PAGES, NO_FAQS_PAGES, DARK_BG_PAGES, CATEGORY_PAGES, LANDING_EMAIL_PAGES } from '../shared/routes'

interface RouteConfig {
  isHeroPage: boolean
  isBusinessPage: boolean
  isLandingEmail: boolean
  showFaqs: boolean
  isHome: boolean
  isCategoryPage: boolean
  currentLogo: string
}

export function useRouteConfig(pathname: string, theme: string): RouteConfig {
  return useMemo(() => {
    const isHeroPage = HERO_PAGES.includes(pathname)
    const isBusinessPage = pathname === '/business'
    const isLandingEmail = LANDING_EMAIL_PAGES.includes(pathname)
    const showFaqs = !NO_FAQS_PAGES.includes(pathname)
    const isCategoryPage = CATEGORY_PAGES.some(cat => pathname === `/${cat}`)
    const isHome = !isCategoryPage

    let currentLogo: string
    if (isHeroPage || isLandingEmail) {
      currentLogo = '/uchooseit-white.svg'
    } else if (theme === 'dark' || DARK_BG_PAGES.includes(pathname)) {
      currentLogo = '/uchooseit-white.svg'
    } else {
      currentLogo = '/uchooseit-black.svg'
    }

    return { isHeroPage, isBusinessPage, isLandingEmail, showFaqs, isHome, isCategoryPage, currentLogo }
  }, [pathname, theme])
}
