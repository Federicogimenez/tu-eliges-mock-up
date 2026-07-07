# Contrato de negocio — Uchooseit.us

> **Autoridad de negocio e integración.** Toda decisión con consecuencia de negocio (pricing, funnel, borde externo) se ancla acá. Lo deriva el **Architect**; lo mantiene el **Leader** cuando una task cambia un contrato. Equivale al `business/.claude/CLAUDE.md` del modelo monorepo, adaptado a proyecto único.

## El modelo

Uchooseit.us es una **plataforma de ahorro por membresía**: los miembros pagan **$47.99/año** y desbloquean descuentos de 1M+ marcas en cuatro categorías — **Shop, Travel, Dining, Entertainment**. Dos canales de revenue:

1. **B2C (consumidor):** venta directa de membresías vía sitio web y app (500k+ descargas).
2. **B2B (affiliate/partner):** revenue share y licencias bulk para empresas, nonprofits, influencers y asociaciones que distribuyen membresías a sus audiencias.

## El rol de este proyecto

Este repo es el **sitio de marketing** (React SPA): el funnel de conversión primario. Cada página existe para convertir:

| Superficie | Convierte a | Mecanismo |
|---|---|---|
| Homepage | miembro B2C | hero video + categorías + pricing + CTA de app |
| Category pages (shop/travel/dining/entertainment) | miembro B2C | marcas por categoría + testimonios + calculadora |
| Affiliate pages (agency/influencer/company/non-profit) | partner B2B | calculadora de revenue proyectado |
| `/business` | partner B2B | modelos de partnership (RSM vs Bulk) + booking de strategy call |
| `/save` (US) y `/save-latam` | email capture | landing de campañas de ads + form HubSpot |
| Product/Activation | compra/activación | redirect a checkout Recurly |

## Contratos externos

Los bordes que este sitio consume pero **no controla**. Si una task cambia uno, el brief lo declara en **Vínculo externo** y este doc se actualiza en el gate.

### Backend de allies — `api.tueliges.us`
- El partner distribuye una URL con `?code=ALLY_CODE`.
- El sitio fetchea los datos del ally (imagen de empresa, % de descuento, pricing ajustado) y muestra un popup con el branding del partner (trigger: timer inmediato).
- El code persiste en `localStorage` para visitas de retorno.
- El checkout de Recurly auto-aplica el cupón del ally.
- El backend vive en `tu-eliges/backend` (proyecto hermano, sin harness propio) — coordinación manual.

### Recurly — checkout de membresías
- Checkout hosted: `uchooseitus.recurly.com/subscribe/uchooseit_member`, con coupon codes opcionales.
- El sitio **no procesa pagos**: solo redirige.

### HubSpot — email capture
- Forms embebidos en las landings `/save` / `/save-latam`, con **form ID ruteado por país** (reemplazó al `EmailCaptureForm` custom).

### Analytics
- **GA4 + Meta Pixel** activos en todo el sitio.

### Deploy
- Producción en **AWS vía GitHub Actions** (push a `main` deploya). Netlify solo para testing/preview. **Por eso el commit es el gate del Leader.**

## i18n / mercados

Sistema propio de i18n multi-país (US + LATAM): tipos + hook `useTranslation` + JSON por país + country switcher. Copys en inglés (US) y español (LATAM). Regla de contenido: código y contenido user-facing en inglés (o el idioma del mercado); documentación interna en español.

## Proyectos hermanos (`tu-eliges/`)

`backend`, `mailing`, `transparency-app`, `countability` conviven en la carpeta madre pero **no comparten este harness**. Este doc registra los contratos que este sitio tiene con ellos; los cambios del otro lado se coordinan manualmente con el humano.
