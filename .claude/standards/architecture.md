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
    constants.ts                   # Global constants
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
        <Main>                 ← Master layout (header, hero, footer)
          <SavingsModalProvider>  ← Savings calculator state + modal
            <Suspense>
              <Routes>         ← All lazy-loaded feature pages
```

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
2. **`src/shared/layout/Main.tsx`** - Add path to relevant arrays:
   - `heroPages` - Show fixed background video
   - `noFaqsPages` - Hide FAQ section
   - `darkBgPages` - Force white logo
3. **`src/shared/components/HamburgerMenu.tsx`** - Add nav link (if user-facing)

## Main.tsx Control Arrays

| Array | Purpose | Current values |
|-------|---------|----------------|
| `heroPages` | Show fixed bg video + hero content | `/`, `/shop`, `/travel`, `/dining`, `/entertainment`, `/business` |
| `noFaqsPages` | Hide FAQ accordion | `/agency`, `/influencer`, `/company`, `/non-profit`, `/activate`, `/thank-you`, `/business` |
| `darkBgPages` | Force white logo (non-hero dark pages) | `/business` |

## Lazy Loading

All feature page imports use `React.lazy()` with a shared `<Suspense fallback={<LoaderSimple />}>` wrapper. No route-level code splitting beyond this.

## State Management

No external state library. All state is managed via:

- **React Context** for cross-component shared state (theme, ally data, savings calculator)
- **Local `useState`/`useEffect`** for component-level state
- **URL query params** for affiliate codes (`?code=ALLY_CODE`)
- **localStorage** for persistence (theme preference, ally code)
