# TASK-002: Scaffolding de ruta y página

## Feature: landing-latam
## Rol: Dev
## Fecha: 2026-05-17

---

## Que se hizo
Se creó la ruta `/save-latam` y el esqueleto de la página. `LandingLatam.tsx`
arrancó como shell con 4 placeholders en orden. `data.ts` con los stubs
editables: `MEMBERS` (cada persona con `videos: MemberVideo[]`), `CALC_META`,
`DEFAULT_LINES`, `CALC_SAVINGS_RATE`, todos marcados `// EDITABLE:`.

## Archivos tocados
```
CREADOS:     src/features/landing-latam/LandingLatam.tsx
             src/features/landing-latam/data.ts
MODIFICADOS: src/routes/AppRoutes.tsx  (lazy import + <Route path="/save-latam">)
             src/shared/routes.ts      ('/save-latam' en LANDING_EMAIL_PAGES y NO_FAQS_PAGES)
```

## Decisiones tomadas
- No se modificó `useRouteConfig.ts`: ya deriva logo blanco desde
  `LANDING_EMAIL_PAGES`; agregar la ruta a ese array es suficiente.
- No se agregó a `HERO_PAGES` (la página maneja su propio video de fondo).
- Lazy import idéntico al patrón de `LandingEmail` en `AppRoutes.tsx`.

## Pendientes o notas
- `npm run build` verde tras esta tarea (primer checkpoint TS).
