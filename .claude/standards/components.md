# Component Standards

## Naming Conventions

| Element | Convention | Example |
|---------|-----------|---------|
| Components | PascalCase | `HeroSection.tsx` |
| Hooks | camelCase with `use` prefix | `useSavingsModal.ts` |
| Context | PascalCase with `Context` suffix | `ThemeContext.tsx` |
| CSS variables | kebab-case | `--color-blue-uchooseit` |
| Route paths | lowercase kebab-case | `/non-profit` |
| Types | PascalCase with `Props`/`Type` suffix | `AllyDataProps`, `ThemeContextType` |

## Component Patterns

### Functional components only
Arrow function syntax. Props interfaces defined inline or co-located in the same file.

```tsx
interface HeroSectionProps {
  title: string;
  color: string;
}

const HeroSection = ({ title, color }: HeroSectionProps) => {
  // ...
};

export default HeroSection;
```

### Default exports
All feature and component files use `export default`.

### Data inline
Category-specific data (articles, testimonials, slides) is defined at the top of each feature file, not in separate data files.

## Key Shared Components

### Layout sections (`src/shared/layout/`)

| Component | Purpose | Used by |
|-----------|---------|---------|
| `Main.tsx` | Master layout wrapper | All routes |
| `HeroTrendy.tsx` | Category hero with Keen Slider carousel | Shop, Travel, Dining, Entertainment |
| `TestimonialSection.tsx` | Testimonial carousel (Keen Slider) | Category pages |
| `PricingSection.tsx` | Membership pricing card with ally discount | Category pages, Home |
| `CalculatorTableSection.tsx` | "Transform spending" + savings display | Category pages, Home |
| `GatewaySection.tsx` | App store download CTA | Category pages, Home |
| `Faqs.tsx` | FAQ accordion | Pages not in `noFaqsPages` |
| `Footer.tsx` | 4-column footer with social, nav, contact, legals |  All pages |

### UI components (`src/shared/components/`)

| Component | Notes |
|-----------|-------|
| `ButtonPrimary.tsx` | Animated gradient CTA. Tracks Meta Pixel `InitiateCheckout`. Props: `text_1`, `text_2`, `src`, gradient colors |
| `ButtonSecondary.tsx` / `ButtonTertiary.tsx` | Simpler button variants |
| `HamburgerMenu.tsx` | Framer Motion slide-in nav panel with ThemeSwitcher |
| `LazyLoadImage.tsx` | Blur-to-sharp image. **Uses `classnames` prop (not `className`)** |
| `SavingsCalculator/` | `CalculateSavingButton` (floating CTA) + `SavingsModal` (full-screen Keen Slider) |
| `RevenueCalculator.tsx` | B2B revenue projection calculator for affiliate pages |
| `Modal.tsx` | Generic modal wrapper |
| `Accordion.tsx` | Expandable FAQ-style accordion |

## Video Background Pattern

The hero video system in `Main.tsx`:

1. **Fixed position** (`position: fixed; inset: 0`) - content scrolls over the video
2. **Responsive source** - switches between mobile/desktop video at `width > 1024` via `useWindowSize`
3. **`useInlineVideo` hook** - sets `playsinline` for iOS Safari, retries play on tab visibility change
4. **`LazyLoadImage`** - shows preview image until video loads
5. **Only on `heroPages`** - controlled by pathname check in Main.tsx

### B2B page special behavior
`/business` is in `heroPages` (gets the video) but has `businessPage` flag that suppresses the hero content overlay and floating `CalculateSavingButton`.

## Carousel Pattern (Keen Slider)

Multiple components use Keen Slider:

- `HeroTrendy.tsx` - Article slides (1-3 perView, auto-plays 4s)
- `TestimonialSection.tsx` - Testimonial cards (auto-plays 4s)
- `SavingsModal.tsx` - Category savings slides
- `DiamondCarousel.tsx` - Home page diamond icons

Common config: `{ loop: true, mode: "snap" }` with dot navigation via `.dots > .dot` CSS.

## Affiliate/Coupon System

The `AllyContext` manages:
- URL param `?code=ALLY_CODE` detection + localStorage persistence
- API call to `https://api.tueliges.us/user/ally-code/{code}`
- Dynamic pricing in `PricingSection` (original vs discounted)
- Recurly checkout URL with coupon appended

## Analytics

| Service | Implementation | Events |
|---------|---------------|--------|
| Google Analytics 4 | `react-ga4` via `useAnalytics` hook | Pageview with device type + campaign source |
| Meta Pixel | `trackMetaPixel.ts` utility | `InitiateCheckout` on CTA click (via `ButtonPrimary`) |
