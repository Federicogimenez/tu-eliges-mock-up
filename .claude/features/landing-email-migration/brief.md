# Feature: Landing Email Migration (promover landing-latam → /save oficial)

## Estado: ACTIVA
## Prioridad: P0
## Rol asignado: Feature Dev

---

## Objetivo
Promover el diseño validado de la maqueta `landing-latam` a la landing
oficial `landing-email` (`/save`), integrando el sistema i18n por país, y
eliminar la maqueta. La copy ya fue validada (ver `landing-latam/doc/`).

## Alcance

### Incluido
- Reescribir el subtree `landingEmail.*` en los 5 JSON (`us`=EN, `bra`=PT,
  `arg/col/mex`=ES) con la estructura del nuevo diseño.
- Recrear los componentes de `landing-email` desde el diseño nuevo, usando
  `useTranslation` (`t` / `tHtml`) en lugar de copy hardcodeada.
- `VideoBackground` country-aware (reusar el existente: usa→video home,
  resto→latam) en vez del LATAM-only de la maqueta.
- `/save` sirve el diseño nuevo para todos los países.
- Eliminar la maqueta: ruta `/save-latam`, entradas en `routes.ts`, carpeta
  `src/features/landing-latam/`.
- Reemplazar los componentes viejos de `landing-email` (Hero, InsightForm,
  SavingsShowcase, Closing, EmailCaptureForm, VideoBackground viejo) por el
  set nuevo. Respaldo intacto en `landing-email-v1-backup/`.

### Excluido
- No se cambia el sistema i18n global (`useTranslation`/`useCountry`).
- No se agregan idiomas ni archivos de traducción nuevos (solo se reescribe
  el subtree `landingEmail` en los 5 existentes).
- Localización de los line-items de la calculadora (data de campaña Mundial
  2026 en `data.ts`, editable) → follow-up; i18n cubre chrome + pitch.
- HubSpotForm: ya es country-aware, se reusa tal cual.

## Decisiones de arquitectura
- Sin variantes `cold/warm/hot` (el diseño nuevo es copy único) → claves
  planas bajo `landingEmail.*`.
- Texto con resaltado/`<strong>` se guarda como HTML y se renderiza con
  `tHtml` + `dangerouslySetInnerHTML` (patrón ya soportado por el hook).
- Monto de ahorro dinámico → `savingsPre` + `<strong>` + `savingsPost`.
- EN/PT redactados best-effort (ES es la fuente de verdad) — se recomienda
  review nativo de EN/PT antes de producción.

## Estado actual del codigo
- `/save` → `LandingEmail` (lazy, AppRoutes). `landingEmail.*` ya existe en
  los 5 JSON con variantes cold/warm/hot del diseño viejo.
- Maqueta `landing-latam` (9 componentes + data.ts) en `/save-latam`, copy
  ES hardcodeada, validada con el cliente.
- `landing-email-v1-backup/` = snapshot del diseño viejo (seguridad).

## Archivos permitidos (scope)
```
MODIFICAR:
  src/translates/{us,bra,arg,col,mex}.json   (solo subtree landingEmail)
  src/features/landing-email/LandingEmail.tsx
  src/features/landing-email/components/**    (reemplazo del set viejo)
  src/features/landing-email/data.ts          (nuevo, calc data)
  src/routes/AppRoutes.tsx                     (quitar /save-latam)
  src/shared/routes.ts                         (quitar /save-latam de arrays)
ELIMINAR:
  src/features/landing-latam/**                (maqueta)
  componentes viejos de landing-email no usados (respaldados en backup)
NO TOCAR:
  src/features/landing-email-v1-backup/**      (snapshot de seguridad)
  src/hooks/useTranslation.ts · useCountry.ts · CountryContext
  src/features/landing-email/components/HubSpotForm.tsx (se reusa)
```

## Criterios de aceptacion
1. `/save` renderiza el diseño nuevo; idioma según country (us=EN, bra=PT, arg/col/mex=ES).
2. `landingEmail.*` plano (sin cold/warm/hot) en los 5 JSON, mismas claves en todos.
3. Sin copy hardcodeada en los componentes de landing-email (todo vía `t`/`tHtml`).
4. Video country-aware correcto (usa→home, resto→latam).
5. `/save-latam` no existe; `src/features/landing-latam/` eliminado; arrays de routes limpios.
6. `landing-email-v1-backup/` intacto.
7. `npm run build` sin errores TS; sin console errors nuevos.
8. Responsive + dark OK (heredado del diseño ya validado).

## Estructura de la feature
```
.claude/features/landing-email-migration/
  brief.md   → este archivo
  tasks.md   → backlog MIG-1..7 (en TodoWrite de la sesión)
  doc/       → task-doc por fase
```

---

*Creado por: Arquitecto*
*Fecha: 2026-05-17*
