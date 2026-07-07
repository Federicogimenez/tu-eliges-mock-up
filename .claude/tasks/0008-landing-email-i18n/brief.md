# Feature: landing-email-i18n

## Estado: PENDIENTE
## Prioridad: P0
## Rol asignado: Feature Dev

---

## Objetivo
Eliminar el sistema dual de variantes (`usa`/`latam`) en la landing de email capture y unificar el idioma bajo el `CountryContext` global. Hoy la landing ignora el country global y usa un prop `variant` para elegir contenido — esto rompe componentes compartidos como `Benefits` que leen del contexto. El objetivo es que `/save` funcione como cualquier otra pagina: el idioma depende del country.

## Alcance

### Incluido
- Aplanar las translation keys de `landingEmail.usa.*` y `landingEmail.latam.*` a `landingEmail.*` en cada JSON
- Eliminar la ruta `/ahorra` y unificar en `/save`
- Eliminar el prop `variant` de toda la cadena de componentes
- VideoBackground: si `country === 'usa'` o sin country → video de home; si country !== 'usa' → video latam
- SavingsShowcase brands: misma logica (usa → brands usa, otro → brands latam)
- Benefits se resuelve solo al eliminar variant (ya lee del CountryContext)

### Excluido
- No se cambia el sistema i18n global (CountryContext, useTranslation, useCountry)
- No se agregan nuevos idiomas ni nuevos archivos de traduccion
- No se tocan componentes compartidos mas alla de Footer (agregar prop) y Main (pasar prop)

## Estado actual del codigo
- `src/features/landing-email/LandingEmail.tsx` — recibe `variant: 'usa' | 'latam'`, lo pasa a hijos
- `src/features/landing-email/components/` — 7 componentes, 6 reciben variant
  - Hero, InsightForm, EmailCaptureForm, SavingsShowcase, Closing usan variant para keys `landingEmail.${variant}.*`
  - VideoBackground usa variant para elegir video
  - LandingFooter no usa variant
- `src/routes/AppRoutes.tsx` — dos rutas: `/save` (variant=usa), `/ahorra` (variant=latam)
- `src/translates/*.json` — 5 archivos, todos tienen `landingEmail.usa` (ingles identico) y `landingEmail.latam` (espanol en arg/col/mex, portugues en bra)
- `src/shared/layout/Benefits.tsx` — usa `useTranslation()` sin props, lee `layout.benefits.*`

## Archivos permitidos (scope)
```
CREAR:
  .claude/features/landing-email-i18n/doc/  (documentacion de tareas)

MODIFICAR:
  src/features/landing-email/LandingEmail.tsx
  src/features/landing-email/components/Hero.tsx
  src/features/landing-email/components/InsightForm.tsx
  src/features/landing-email/components/EmailCaptureForm.tsx
  src/features/landing-email/components/SavingsShowcase.tsx
  src/features/landing-email/components/Closing.tsx
  src/features/landing-email/components/VideoBackground.tsx
  src/shared/layout/Footer.tsx          (agregar prop hideNavigation)
  src/shared/layout/Main.tsx            (mostrar Footer siempre, pasar hideNavigation)
  src/routes/AppRoutes.tsx
  src/shared/routes.ts
  src/translates/us.json
  src/translates/arg.json
  src/translates/bra.json
  src/translates/col.json
  src/translates/mex.json

ELIMINAR:
  src/features/landing-email/components/LandingFooter.tsx

NO TOCAR:
  src/shared/layout/Benefits.tsx (se resuelve solo)
  src/hooks/useTranslation.ts
  src/hooks/useCountry.ts
  src/context/CountryContext.tsx
  src/context/ThemeContext.tsx
  src/App.tsx
```

## Dependencias
- Ninguna. El sistema i18n global ya existe y funciona.

## Criterios de aceptacion
1. La ruta `/save` renderiza la landing y el idioma responde al country global
2. La ruta `/ahorra` no existe (o redirige a `/save`)
3. Si `country=usa` (o default): contenido en ingles, video de home
4. Si `country=arg/col/mex`: contenido en espanol, video latam
5. Si `country=bra`: contenido en portugues, video latam
6. `Benefits` muestra el idioma correcto segun country (sin cambios en Benefits.tsx)
7. No hay prop `variant` en ningun componente de landing-email
8. No hay keys `landingEmail.usa` ni `landingEmail.latam` en ningun JSON — solo `landingEmail.*`
9. La landing usa el Footer global sin seccion de navegacion (no existe LandingFooter.tsx)
10. Build de TypeScript sin errores

## Estructura de la feature
```
.claude/features/landing-email-i18n/
  brief.md      → este archivo
  tasks.md      → backlog de tareas
  doc/                → registro de tareas completadas
    {task-titulo}.md  → una entrada por tarea ejecutada
```

---

*Creado por: Arquitecto*
*Fecha: 2026-04-07*
