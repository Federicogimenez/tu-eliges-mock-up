# Alcance — Uchooseit.us (sitio de marketing)

> Hasta dónde llega el proyecto en esta etapa. El alcance protege contra el scope creep: lo de "afuera" no es un no para siempre, es un "no ahora".

## Dentro del alcance (ahora)

- El sitio de marketing (React SPA): funnel B2C, funnel B2B, landings de campañas, calculadoras, sistema de ally code, i18n US/LATAM.
- Integraciones de solo-consumo: `api.tueliges.us`, Recurly (redirect), HubSpot (embed), GA4/Meta Pixel.

## Fuera del alcance (ahora)

- **La app móvil** — producto aparte.
- **El backend** (`tu-eliges/backend`) y los proyectos hermanos (`mailing`, `transparency-app`, `countability`) — se coordinan por contrato, no se tocan desde acá.
- **Procesar pagos** — Recurly hosted checkout; el sitio solo redirige.
- **Backoffice / panel de partners** — no existe en este repo.

## No-objetivos

- No es una app con estado de usuario logueado: es un funnel de conversión.
- No busca robustez de plataforma (feature flags, A/B testing infra) mientras el volumen no lo justifique.
