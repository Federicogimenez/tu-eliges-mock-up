# Mapa del basecode — Uchooseit.us (sitio de marketing)

> Lo mantiene el **Leader** en cada commit. Objetivo: dar el modelo mental completo del proyecto **sin releer los fuentes**. Denso, veraz, actualizado.
>
> *Seed inicial (2026-07-06) derivado de `standards/architecture.md` + CLAUDE.md — ratificado por el Leader en el gate de `0012-harness-v2`.*

## Estructura

```
src/
  main.tsx                 # Entry (StrictMode + createRoot)
  App.tsx                  # Root: ThemeProvider > AllyProvider > AppRoutes
  index.css                # Global styles + Tailwind v4 @theme (tokens de marca)
  routes/AppRoutes.tsx     # BrowserRouter + rutas lazy dentro de <Main>
  context/                 # Providers (Theme, Ally, …)
  hooks/                   # Custom hooks (useRouteConfig, useTranslation, …)
  features/                # Un folder por página/ruta (lazy-loaded)
  shared/
    layout/                # Secciones de layout reusadas (Main.tsx orquesta)
    components/            # UI reusable (HamburgerMenu, …)
    routes.ts              # Arrays de rutas que controlan layout (HERO_PAGES, NO_FAQS_PAGES, DARK_BG_PAGES)
  lib/                     # Integraciones externas (cliente api.tueliges.us)
  utils/                   # Utilidades puras
  types/                   # Interfaces TS compartidas
  styles/                  # CSS de animaciones globales
  assets/                  # Estáticos bundleados
public/                    # Estáticos servidos tal cual (videos de campañas, etc.)
Uchooseit-Design-System/   # Material crudo de marca + skill uchooseit-design (ver contracts/design-system.md)
.github/                   # CI/CD → deploy AWS en push a main
```

## Piezas clave y cómo se conectan

- **Layout por arrays de rutas:** `shared/routes.ts` declara qué páginas tienen hero, FAQs, fondo oscuro; `useRouteConfig` deriva los flags; `Main.tsx` los aplica. Agregar una página = tocar los tres puntos de integración (ver abajo).
- **Ally system:** `AllyProvider` (context) + `lib/` (fetch a `api.tueliges.us`) + popup con timer inmediato + persistencia en `localStorage` + cupón en URL de Recurly. El context expone `code` (URL de Recurly con cupón) y `rawCode` (el param crudo). Para partners con video (`ALLY_VIDEOS` en `AllyPopUp.tsx`: k2, mycommunitypharmacy), el popup reemplaza el logo de la API por video en phone frame (mp4 optimizados en `public/`, patrón espejado de `HowSection.tsx`; detalle en `tasks/0013-ally-popup-videos/doc/`); el resto sigue viendo el logo.
- **Savings calculator:** modal global (botón verde flotante), 19 subcategorías; variante B2B oculta el costo de membresía. *El botón flotante está desactivado (comentado en `Main.tsx`) — ratificado por el humano 2026-07-07; el modal sigue accesible desde las secciones que lo abren.*
- **Home (composición actual):** hero → `BenefitsVideoSection` (grid de 6 beneficios + video YouTube con autoplay muted al entrar al viewport vía `useIsInView`; reemplazó a `LearnHow` y volvió redundante a `BenefitsSection` slides, hoy comentada en `Home.tsx`) → `CategoriesSection` (en no-touch, secuencia de activación card 0→3 una vez al llegar al viewport; hover del usuario la cancela) → brands → calculadora → pricing → gateway.
- **Hero B2B (`/business`):** título "Reward Those Who Drive Your ___" con `TypewriterWord` (componente propio, ~60 líneas, respeta `prefers-reduced-motion`) rotando negocio/comunidad/fundación; i18n con `business.hero.titlePrefix` + `words` (CSV que el componente splitea).
- **i18n:** tipos + `useTranslation` + JSON por país + country switcher; unifica `/save` y `/save-latam`.
- **Email capture:** forms HubSpot embebidos, form ID por país.

## Puntos de entrada

Al agregar una ruta/página nueva se toca **siempre**:
1. `src/routes/AppRoutes.tsx` — lazy import + `<Route>`.
2. `src/shared/routes.ts` — sumarla a los arrays que correspondan.
3. `src/shared/components/HamburgerMenu.tsx` — nav link si es user-facing.

## Infra y verificación

- `npm run dev` (dev server) · `npm run build` (verificación mínima: TS strict + bundling).
- Sin framework de tests unitarios (decisión pendiente si un comportamiento crítico lo amerita).
- Deploy: push a `main` → GitHub Actions → AWS (producción). Netlify solo preview.

## Integración con sistemas externos

Contratos detallados en [contracts/business.md](contracts/business.md): `api.tueliges.us` (allies), Recurly (checkout), HubSpot (forms), GA4/Meta Pixel.
