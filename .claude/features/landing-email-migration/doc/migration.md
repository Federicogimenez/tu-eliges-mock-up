# Migration: landing-latam → landing-email (/save oficial)

## Feature: landing-email-migration
## Rol: Dev
## Fecha: 2026-05-17

---

## Que se hizo
Se promovió el diseño validado de la maqueta `landing-latam` a la landing
oficial `/save` (`landing-email`), con i18n por país, y se eliminó la maqueta.

- **i18n**: subtree `landingEmail.*` reescrito en los 5 JSON con estructura
  nueva (hero/community/calculator/choosy/modal), plano. `us`=EN, `bra`=PT,
  `arg/col/mex`=ES. Reemplazo por brace-matching → resto del archivo byte a
  byte intacto; validado con `JSON.parse`.
- **Componentes**: set nuevo en `landing-email/components/` con `t`/`tHtml`
  (sin copy hardcodeada visible). Reusa `HubSpotForm` y `VideoBackground`
  (country-aware) existentes. `data.ts` migrado (data de campaña).
- **Routing**: `/save` sirve el diseño nuevo; `/save-latam` eliminado;
  `src/features/landing-latam/` borrado; arrays de `routes.ts` limpios.
- **Backup**: `src/features/landing-email-v1-backup/` intacto (snapshot del
  diseño anterior).

## Archivos tocados
```
MODIFICADOS:
  src/translates/{us,bra,arg,col,mex}.json   (solo subtree landingEmail)
  src/routes/AppRoutes.tsx · src/shared/routes.ts
  src/features/landing-email/LandingEmail.tsx · Hero.tsx (reescritos)
CREADOS:
  src/features/landing-email/components/{Community,PersonVideoCarousel,
    TrendCalculator,ChoosyClosing,SubscribeModal,SubscribeButton,ModalShell}.tsx
  src/features/landing-email/data.ts
ELIMINADOS:
  src/features/landing-latam/**  (maqueta)
  src/features/landing-email/components/{InsightForm,SavingsShowcase,
    Closing,EmailCaptureForm}.tsx  (diseño viejo; respaldado en backup)
```

## Decisiones tomadas
- Sin variantes cold/warm/hot (diseño nuevo = copy único) → claves planas.
- Texto con resaltado → HTML en JSON + `tHtml` + dangerouslySetInnerHTML.
- Video country-aware reusando `VideoBackground` (usa→home, resto→latam).
- EN/PT redactados best-effort (ES = fuente de verdad).

## Pendientes o notas (follow-ups)
- **EN/PT review**: las traducciones inglés/portugués son best-effort,
  conviene review nativo antes de difundir fuera de ES.
- **Line-items de la calculadora** (`data.ts` DEFAULT_LINES) y los chips
  `CALC_META.meta` siguen en español (data de campaña Mundial 2026,
  editable). Localizarlos = follow-up cuando se confirmen los montos.
- **aria-labels de botones-ícono** (cerrar/prev/next, ✕/‹/›): quedaron como
  símbolos para no hardcodear copy; idealmente i18n con claves de a11y
  dedicadas (mejora menor, no bloqueante).
- `landing-email-v1-backup/` puede borrarse cuando el rediseño esté validado
  en producción.
- `.claude/features/landing-latam/` se conserva como registro histórico
  (la maqueta cumplió su rol y fue promovida).

## QA
- `npm run build` verde, sin errores TS, sin referencias colgantes.
- Pendiente QA navegador del usuario: idioma por country (us=EN/bra=PT/
  arg-col-mex=ES), video country-aware, modales, carrusel on-demand,
  responsive/dark.
