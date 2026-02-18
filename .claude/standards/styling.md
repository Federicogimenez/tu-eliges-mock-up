# Styling Standards

## Tailwind CSS v4

This project uses **Tailwind v4** with the `@tailwindcss/vite` plugin. Configuration is done via `@theme` directives in [index.css](src/index.css), not `tailwind.config.js`.

## Brand Colors

```css
--color-blue-uchooseit:       #2995fc   /* Primary brand blue */
--color-pink-entertainment:   #e82c8d   /* Entertainment category */
--color-yellow-dining:        #ffb807   /* Dining category */
--color-blue-travel:          #00b3eb   /* Travel category */
--color-purple-shop:          #884cfc   /* Shop category */
--color-purple-shop-light:    #a999c8   /* Shop category light variant */
--color-blue-gradient-start:  #55d4e1   /* CTA gradient start */
--color-blue-gradient-end:    #0451af   /* CTA gradient end */
```

### B2B-specific tokens
```
Primary:    #00A3FF   (slightly different Uchooseit blue for B2B)
Secondary:  #22C55E   (green - savings/CTA)
Purple:     #9333EA   (RSM / partnership model)
Card BG:    #0A0A0A
Surface:    #111111
```

## Typography

```css
--font-montserrat:    'Montserrat', sans-serif   /* Primary - all body and headings */
--font-finger-paint:  'Finger Paint', cursive     /* Accent - special titles only */
```

### Utility classes (defined in `@layer utilities`)

| Class | Description |
|-------|-------------|
| `.heading-1` | `text-3xl sm:text-5xl md:text-5xl xl:text-6xl` |
| `.subtitle` | `text-lg md:text-2xl` |

## Dark Mode

Class-based dark mode via `@custom-variant dark (&:where(.dark, .dark *))`.

- Default theme is **dark** (hardcoded, system detection commented out)
- `.dark` class applied to `<html>` element
- Persists to `localStorage['theme']`
- Toggle via `ThemeSwitcher` component inside `HamburgerMenu`

## Animations

### Global keyframes (in `src/styles/animations/`)

| File | Animation | Usage |
|------|-----------|-------|
| `fade.css` | `fadeIn` | General fade-in transitions |
| `translations.css` | `translateFullUp` | Content appear from below |
| `coin_jump.css` | Coin bounce | Savings-related animations |
| `shiny_text.css` | Shimmer text | `.shiny-blueuchooseit-text`, `.shiny-lightblue-text` |

### Tailwind custom animations
```css
--animate-header-initial: headerInitial 1s    /* Header: black fullscreen -> transparent */
--animate-appear-up: translateFullUp + fadeIn  /* Content appears upward */
--animate-fade: fadeIn .5s                     /* Simple fade */
```

### Motion library
Use **Framer Motion** for component-level animations (not CSS keyframes). Global keyframes only for site-wide effects defined in `src/styles/`.

## Custom CSS Patterns

### Text shadows
```css
--text-shadow-xl-blue, --text-shadow-xl-dark, --text-shadow-3xl-dark
--shadow-xl-light, --shadow-2xl-light
```

### 3D transforms (for card effects)
```css
.perspective-1000    /* perspective: 1000px */
.backface-hidden     /* backface-visibility: hidden */
.transform-style-preserve-3d
```

### Keen Slider dots
```css
.dots > .dot         /* Slider navigation dots */
.dot.active          /* Active dot state */
```

### Scrollbar
```css
.show-scrollbar      /* Reveals custom 8px scrollbar (hidden by default) */
```

### Skeleton loading
```css
.skeleton            /* Animated loading placeholder */
```
