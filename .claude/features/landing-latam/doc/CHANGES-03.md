# CHANGES-03: Modal real para videos de comunidad + video vertical (historia)

## Feature: landing-latam
## Rol: Dev
## Fecha: 2026-05-17

---

## Que se hizo
1. **ModalShell reutilizable**: se extrajo el comportamiento de modal
   (portal a `body`, overlay fijo centrado, scrim con click-outside, ESC,
   bloqueo de scroll) a `ModalShell.tsx`. Lo usan ahora **los dos** modales,
   garantizando comportamiento idéntico.
2. **SubscribeModal** refactorizado para usar `ModalShell` — aspecto visual
   sin cambios (mismo panel/copy/ícono).
3. **Comunidad → modal real**: al tocar una persona, las historias ya no se
   despliegan en un panel inline debajo del carrusel; abren un **modal fijo
   y centrado** (mismo mecanismo que los botones 2 y 3). Cerrar (scrim / ESC
   / ✕) desmonta el modal → libera el `<video>` (se mantiene el criterio
   de carga on-demand).
4. **Video vertical tipo historia de Instagram**: el frame del
   `PersonVideoCarousel` pasó de `aspect-video` (16:9) a `aspect-[9/16]`
   con `h-[68vh] max-h-[620px]`, y el `<video>` de `object-cover` a
   `object-contain` para **respetar el formato nativo** del video (sin crop).

## Archivos tocados
```
CREADOS:     src/features/landing-latam/components/ModalShell.tsx
MODIFICADOS: src/features/landing-latam/components/SubscribeModal.tsx     (usa ModalShell)
             src/features/landing-latam/components/CommunityCarousel.tsx  (panel inline → modal)
             src/features/landing-latam/components/PersonVideoCarousel.tsx (9:16 + object-contain)
             .claude/features/landing-latam/doc/teardown.md               (lista de archivos)
```

## Decisiones tomadas
- Extraer `ModalShell` (no duplicar la lógica): el usuario pidió
  explícitamente que el modal de videos funcione "como el modal del input
  en los botones 2 y 3" → una sola fuente de verdad para el shell.
- `object-contain` sobre fondo negro: cumple "que el video sea del formato
  que trae" sin recortar; el frame 9:16 da el look historia.
- El header del modal de comunidad muestra sólo el nombre (coherente con
  "sin descripción" de CHANGES-02).

## Pendientes o notas
- Nota de TrendCalculator: el título/flag/trendLabel del header de la card
  quedó comentado (cambio externo intencional, ver línea ~73); no se revirtió.
- Sigue siendo mock (sin HubSpot/API). El video es el mismo placeholder
  para los 3 (el usuario lo actualizará).
