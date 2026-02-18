export const HERO_PAGES = [
  '/',
  '/shop',
  '/travel',
  '/dining',
  '/entertainment',
  '/business',
]

export const NO_FAQS_PAGES = [
  '/agency',
  '/influencer',
  '/company',
  '/non-profit',
  '/activate',
  '/thank-you',
  '/business',
]

export const DARK_BG_PAGES: string[] = []

export const CATEGORY_PAGES = ['shop', 'travel', 'dining', 'entertainment'] as const

export type CategoryPage = (typeof CATEGORY_PAGES)[number]
