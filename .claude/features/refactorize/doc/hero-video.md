# hero-video: Extraer video de fondo fijo a HeroVideo component

## Feature: refactorize
## Rol: Feature Dev
## Fecha: 2026-02-17

> Archivo: `doc/hero-video.md`

---

## Que se hizo
Se extrajo el bloque de video fijo de fondo (~40 lineas de JSX) de Main.tsx a un componente dedicado `HeroVideo.tsx` en `src/shared/layout/`. El componente es self-contained (zero props): usa `useWindowSize` para elegir entre source mobile/desktop y `useInlineVideo` para el ref del video con autoplay. Muestra una preview image via `LazyLoadImage` mientras el video carga.

## Archivos tocados
```
CREADOS:    src/shared/layout/HeroVideo.tsx
```

## Decisiones tomadas
- Zero props: el componente decide internamente que source usar segun viewport width (1024px breakpoint)
- Preview images como imports estaticos: `/hero-video-mobile-preview.png` y `/preview-hero-video-desk.png`
- El video usa `position: fixed` + `inset-0` para cubrir el viewport completo con `opacity-50`

## Pendientes o notas
- Ninguno
