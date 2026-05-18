# TASK-004: CommunityCarousel + PersonVideoCarousel (carga on-demand)

## Feature: landing-latam
## Rol: Dev
## Fecha: 2026-05-17

---

## Que se hizo
`CommunityCarousel.tsx`: carrusel horizontal de personas (card con avatar
silhouette SVG, nombre, tip, pill de tag; navegación ‹ ›). Una sola persona
abierta a la vez (`openId`). Al abrir, se monta un panel con
`PersonVideoCarousel`; cerrar/cambiar lo desmonta. `PersonVideoCarousel.tsx`:
muestra **sólo el slide activo** con un `<video preload="none">` y
`key={activeIndex}` para remontar (libera el anterior); navegación por
flechas + dots que no montan video.

## Archivos tocados
```
CREADOS:     src/features/landing-latam/components/CommunityCarousel.tsx
             src/features/landing-latam/components/PersonVideoCarousel.tsx
MODIFICADOS: src/features/landing-latam/LandingLatam.tsx (monta CommunityCarousel)
```

## Decisiones tomadas
- **Carga on-demand garantizada por estructura del DOM**: el carrusel de
  personas no renderiza ningún `<video>`; al abrir persona X sólo se monta el
  `<video>` del slide activo de X; al navegar, `key` desmonta el previo y
  monta el nuevo; al cerrar, el panel entero se desmonta. Ningún video se
  descarga hasta activarse (`preload="none"`).
- Avatar silhouette del DS (no hay fotos reales) — aceptable en maqueta.

## Pendientes o notas
- Verificación final en Network se documenta en TASK-007.
