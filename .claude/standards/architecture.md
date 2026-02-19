# Architecture Standards

## Project Structure

```
src/
  main.tsx                         # Entry point (StrictMode + createRoot)
  App.tsx                          # Root: ThemeProvider > AllyProvider > AppRoutes
  index.css                        # Global styles + Tailwind v4 @theme
  routes/
    AppRoutes.tsx                  # BrowserRouter + lazy routes inside <Main>
  context/                         # React context providers
  hooks/                           # Custom hooks
  features/                        # Page-level components (one folder per route)
  shared/
    layout/                        # Layout sections reused across pages
    components/                    # Reusable UI components
    routes.ts                      # Route arrays (HERO_PAGES, NO_FAQS_PAGES, etc.)
  lib/                             # External service integrations (API clients)
  utils/                           # Pure utility functions
  types/                           # Shared TypeScript interfaces
  styles/                          # CSS animation files
  assets/                          # Bundled static assets (imported in TS)
```

## Provider Hierarchy

```
<StrictMode>
  <ThemeProvider>              ← Dark/light mode (default: dark)
    <AllyProvider>             ← Affiliate/coupon system
      <BrowserRouter>
        <Main>                 ← Layout orchestrator (~72 lines)
          <SavingsModalProvider>  ← Savings calculator state + modal
            <Suspense>
              <Routes>         ← All lazy-loaded feature pages
```

## Main.tsx — Layout Orchestrator

`src/shared/layout/Main.tsx` (~72 lines) delegates to specialized components:

```tsx
<SavingsModalProvider>
  <header> (logo + HamburgerMenu)
  {isHeroPage && (
    <section>
      {showHeroContent && <CalculateSavingButton />}
      <HeroVideo />
      {showHeroContent && <HeroOverlay isHome={isHome} />}
      <AllyPopUp visible={...} onClose={...} />
    </section>
  )}
  <main>{children}</main>
  {showFaqs && <Faqs />}
  <Footer />
</SavingsModalProvider>
```

`showHeroContent = isHeroPage && !isBusinessPage` — `/business` gets the video but not the overlay.

## Route Configuration

Route arrays live in `src/shared/routes.ts`:

| Constant | Purpose | Current values |
|----------|---------|----------------|
| `HERO_PAGES` | Show fixed bg video + hero content | `/`, `/shop`, `/travel`, `/dining`, `/entertainment`, `/business` |
| `NO_FAQS_PAGES` | Hide FAQ accordion | `/agency`, `/influencer`, `/company`, `/non-profit`, `/activate`, `/thank-you`, `/business` |
| `DARK_BG_PAGES` | Force white logo (non-hero dark pages) | `[]` (empty) |
| `CATEGORY_PAGES` | Category page slugs (typed) | `shop`, `travel`, `dining`, `entertainment` |

`useRouteConfig(pathname, theme)` in `src/hooks/useRouteConfig.ts` derives layout flags:

```ts
{ isHeroPage, isBusinessPage, showFaqs, isHome, isCategoryPage, currentLogo }
```

Logo precedence: heroPage → white | darkBgPage → white | dark theme → white | else → black.

## Feature Page Pattern

Every route has a feature folder:

```
src/features/{feature-name}/
  {FeatureName}.tsx              # Entry point component
  components/
    {SectionName}.tsx            # Section-level components
```

### Category pages (shop, travel, dining, entertainment)

These 4 pages follow an identical composition pattern with different data/colors:

```tsx
<HeroTrendy articles={...} colors={...} />
<TestimonialSection testimonials={...} color={...} />
<CalculatorTableSection />
<PricingSection ctaGradientFrom={...} ctaGradientTo={...} />
<GatewaySection />
```

Data (articles, testimonials) is defined inline at the top of each feature file.

## Route Registration Checklist

When adding a new route:

1. **`src/routes/AppRoutes.tsx`** - Add `React.lazy()` import + `<Route>` element
2. **`src/shared/routes.ts`** - Add path to relevant arrays (`HERO_PAGES`, `NO_FAQS_PAGES`, `DARK_BG_PAGES`)
3. **`src/shared/components/HamburgerMenu.tsx`** - Add nav link (if user-facing)

## Hooks

| Hook | File | Purpose |
|------|------|---------|
| `useTheme` | `src/hooks/useTheme.ts` | Access ThemeContext (dark/light) |
| `useAllyContext` | `src/hooks/useAllyContext.ts` | Access AllyContext (coupon/partner data) |
| `useRouteConfig` | `src/hooks/useRouteConfig.ts` | Derive layout flags from pathname + theme |
| `useSavingsModal` | `src/hooks/useSavingsModal.ts` | Open/close savings calculator modal |
| `useAnalytics` | `src/hooks/useAnalytics.ts` | GA4 + Meta Pixel pageview tracking |
| `useInlineVideo` | `src/hooks/useInlineVideo.ts` | Video playsinline for iOS Safari |
| `useWindowSize` | `src/hooks/useWindowSize.ts` | Window dimensions for responsive logic |
| `useScrollSection` | `src/hooks/useScrollSection.ts` | Scroll position detection |
| `useIsInView` | `src/hooks/useIsInView.ts` | Intersection observer for lazy visibility |
| `useIsTouchDevice` | `src/hooks/useIsTouchDevice.ts` | Touch device detection |
| `usePageMeta` | `src/hooks/usePageMeta.ts` | Dynamic page title/description/OG tags |
| `useJsonLd` | `src/hooks/useJsonLd.ts` | Inject JSON-LD structured data in `<head>` |

## Lazy Loading

All feature page imports use `React.lazy()` with a shared `<Suspense fallback={<LoaderSimple />}>` wrapper. No route-level code splitting beyond this.

## State Management

No external state library. All state is managed via:

- **React Context** for cross-component shared state (theme, ally data, savings calculator)
- **Local `useState`/`useEffect`** for component-level state
- **`useMemo` derivations** for route-dependent config (`useRouteConfig`)
- **URL query params** for affiliate codes (`?code=ALLY_CODE`)
- **localStorage** for persistence (theme preference, ally code)
