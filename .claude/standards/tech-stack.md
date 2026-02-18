# Tech Stack & Dependencies

## Core

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.1 | UI framework |
| TypeScript | 5.8 | Type safety (strict mode enabled) |
| Vite | 7.x | Build tool + dev server |
| Tailwind CSS | 4.x | Utility-first CSS (via `@tailwindcss/vite` plugin) |

## Routing
| Package | Version | Usage |
|---------|---------|-------|
| `react-router-dom` | 7.x | SPA routing with `BrowserRouter` |

## UI Libraries
| Package | Version | Usage |
|---------|---------|-------|
| `framer-motion` | 12.x | Component animations (menu, modals, scroll-based effects) |
| `keen-slider` | 6.8 | Touch-friendly carousels (hero, testimonials, savings modal) |
| `react-icons` | 5.x | Icon library (social links in footer) |
| `react-player` | 3.x | Video playback (thank-you page) |

## Data & API
| Package | Version | Usage |
|---------|---------|-------|
| `axios` | 1.x | HTTP client for ally code API (`api.tueliges.us`) |

## Analytics
| Package | Version | Usage |
|---------|---------|-------|
| `react-ga4` | 2.x | Google Analytics 4 pageview tracking |
| Meta Pixel | inline script | Facebook/Meta event tracking (`InitiateCheckout`) |

## External Services
| Service | Integration Method |
|---------|-------------------|
| Recurly | Redirect to hosted checkout page (`uchooseitus.recurly.com`) |
| Google Calendar | `window.open()` to appointment scheduling URL |
| TuEliges API | REST API for ally/coupon code validation |
| Google Material Icons | CDN link in `index.html` |

## Build Configuration

### Vite (`vite.config.ts`)
Minimal config: `react()` + `tailwindcss()` plugins. No path aliases, no custom rollup config.

### TypeScript (`tsconfig.app.json`)
- `target: "ES2022"`, `module: "ESNext"`
- `strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true`
- `erasableSyntaxOnly: true` (TS 5.8 feature)
- `jsx: "react-jsx"`

### Deployment
- **Production**: AWS via GitHub Actions CI/CD (`.github/` workflows)
- **Testing/Preview**: Netlify (`_redirects` file in `public/` for SPA routing)
- **SPA redirect**: `/* /index.html 200` for client-side routing
- **Build command**: `tsc -b && vite build`

## Fonts (Self-hosted)
- **Montserrat** - Primary font for all text (loaded from `public/font/`)
- **Finger Paint** - Accent font for special decorative titles

## Static Assets Strategy
- **`public/`** - Unprocessed assets served at root (videos, brand logos, icons, previews)
- **`src/assets/`** - Bundled assets imported in TypeScript (processed by Vite)
- Hero videos: `hero-video-mobile.mp4` (4.7MB) and `hero-video-desk.mp4` (13.5MB)
- Brand images organized by category: `public/trendy/{category}/articles/`
