# Memoria — Uchooseit.us (sitio de marketing)

> Conocimiento acumulado del proyecto. Lo destila el **Leader**: evolutivo, no acumulativo. Se fusiona lo redundante y se poda lo obsoleto.
>
> *Seed inicial (2026-07-06) destilado del historial de tasks (`0001`–`0011`, ex `features/`) + git log — ratificado por el Leader en el gate de `0012-harness-v2`.*

## Principios

- **El sitio es un funnel, no una app:** cada página existe para convertir; sin estado de usuario logueado, sin robustez de plataforma anticipada.
- **Estado con Context, no con store:** providers de React (Theme, Ally); no Redux/Zustand.
- **Layout declarativo por arrays de rutas** (`shared/routes.ts` + `useRouteConfig`) en vez de props por página.
- **Dark mode es el default** y parte de la identidad visual.
- **Los pagos no se tocan:** Recurly hosted checkout; el sitio solo redirige con cupón.
- **Documentación interna en español; código y contenido user-facing en inglés** (o el idioma del mercado).

## Decisiones de diseño

| Fecha | Decisión | Por qué | Task |
|-------|----------|---------|------|
| 2026-03 | i18n propio (tipos + hook + JSON por país) en vez de librería | necesidad acotada: pocos idiomas, control de copy por mercado | `0005-i18n` |
| 2026-03 | Trigger del ally popup: timer inmediato (se descartó trigger por pricing) | simplicidad; el visitante con code debe ver el branding del partner ya | `0006-ally-popup-immediate` |
| 2026-03 | Reemplazar `EmailCaptureForm` custom por HubSpot embed con form ID por país | el pipeline de marketing vive en HubSpot; menos código propio | `0007-landings-form-email` |
| 2026-04 | Unificar `/save` y `/ahorra` en una ruta con i18n | dos landings divergían; una sola fuente con copy por país | `0008-landing-email-i18n` |
| 2026-05 | Rediseño `/save` con calculadora paramétrica + Design System | campaña de ads necesitaba landing alineada a marca | `0009-landing-latam` + `0010-landing-email-migration` |
| 2026-07-06 | Harness v2: modelo Architect/Dev/Leader con memoria evolutiva (adaptado de `portfolios/federicode`); historial v1 migrado a `tasks/0001`–`0011` | el workflow v1 no tenía evaluador, ni gate de commit, ni memoria que evolucione | `0012-harness-v2` |

## Deuda conocida

- **SEO:** la SPA no prerenderiza. `0002-seo` quedó **suspendida**, superada por `0011-next-migration` (Vite → Next.js static export), diseñada y **sin ejecutar**. Retomarla = ejecutarla como task (su brief v1 sigue vigente) o re-briefearla si el contexto cambió.
- **`0003-business`:** quedaron 2 tareas de QA pendientes según el estado del workflow v1 — verificar si siguen vigentes antes de cerrar.
- **Sin tests unitarios:** la verificación es `npm run build` + QA manual. Decidir framework solo cuando un comportamiento crítico lo pague.
