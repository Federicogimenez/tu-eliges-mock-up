# route-config: Extraer logica de rutas a useRouteConfig + constantes

## Feature: refactorize
## Rol: Feature Dev
## Fecha: 2026-02-17

> Archivo: `doc/route-config.md`

---

## Que se hizo
Se elimino la logica de routing dispersa en Main.tsx (5 `useState` + 2 `useEffect` con arrays hardcoded) y se centralizo en dos archivos: `src/shared/routes.ts` con los arrays de rutas como constantes exportadas, y `src/hooks/useRouteConfig.ts` con un hook que deriva todos los flags de layout via `useMemo`. Esto corrigio un bug donde `showFaqs` dependia de un `useState` asincronico en vez de derivacion directa.

## Archivos tocados
```
CREADOS:    src/hooks/useRouteConfig.ts, src/shared/routes.ts
```

## Decisiones tomadas
- Las rutas quedaron en `src/shared/routes.ts` en vez del path originalmente planeado `src/shared/constants/routes.ts`, para mantener consistencia con el flat layout existente en `shared/`
- Se exportan 4 arrays: `HERO_PAGES`, `NO_FAQS_PAGES`, `DARK_BG_PAGES`, `CATEGORY_PAGES`
- `useRouteConfig` recibe `(pathname, theme)` y retorna un objeto plano con todos los flags — sin estados internos

## Pendientes o notas
- Ninguno
