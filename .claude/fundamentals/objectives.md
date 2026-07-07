# Objetivos — Uchooseit.us (sitio de marketing)

> Qué buscamos lograr. Cada objetivo responde a un problema de [problems.md](problems.md).

## Objetivo de esta etapa

1. **Campañas de captura activas:** las landings `/save` (US) y `/save-latam` convierten tráfico de ads en emails (HubSpot) y membresías, con copy e i18n por mercado.
2. **Funnel B2C/B2B estable en producción:** homepage, category pages, affiliate pages y `/business` completos y coherentes con el design system.
3. **SEO real pendiente:** la SPA no prerenderiza — la migración a Next.js static export (`tasks/0011-next-migration/`, diseñada, sin ejecutar) es la vía elegida.

## Cómo sabemos que lo logramos

- Emails capturados por las landings llegan a HubSpot con el form ID correcto por país.
- El flujo ally code → popup → checkout Recurly con cupón funciona de punta a punta.
- Build verde y deploy automático a AWS sin regresiones visuales (responsive + dark mode).
- (Cuando se ejecute next-migration) las páginas indexables sirven HTML estático.
