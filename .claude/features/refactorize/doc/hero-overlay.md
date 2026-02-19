# hero-overlay: Extraer contenido hero a HeroOverlay component

## Feature: refactorize
## Rol: Feature Dev
## Fecha: 2026-02-17

> Archivo: `doc/hero-overlay.md`

---

## Que se hizo
Se extrajo el overlay del hero (titulo, navlinks de categorias, CTA) de Main.tsx a `HeroOverlay.tsx` en `src/shared/layout/`. El componente tiene dos modos controlados por la prop `isHome`: modo home (fullscreen con navlinks textuales + CTA + "Trusted by families") y modo category (compacto con solo iconos de categoria resaltando el actual).

## Archivos tocados
```
CREADOS:    src/shared/layout/HeroOverlay.tsx
```

## Decisiones tomadas
- Props minimas: solo `{ isHome: boolean }` — el componente internamente usa `useAllyContext` y `useLocation`
- Los navlinks de categorias incluyen datos hardcoded (icono, color, label, path) en el propio componente
- Highlighting del icono activo se basa en `pathname` via `useLocation`
- Animaciones `animate-appear-up` con delays escalonados se mantuvieron identicas al original

## Pendientes o notas
- Ninguno
