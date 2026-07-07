# audience-cards: Seccion "Built for Organizations"

## Feature: business
## Rol: Feature Dev
## Fecha: 2026-02-17

> Archivo: `doc/audience-cards.md` — el nombre del archivo coincide con el id de la tarea en tasks.md

---

## Que se hizo
Se creo `AudienceCards.tsx` con heading "Built for Organizations / With an Audience" y 4 cards de audiencia objetivo. Cada card tiene borde izquierdo de 4px con color propio (purple, blue, green, grey), gradiente de fondo izquierda-derecha con tinte del color, icono de react-icons (MdSell, MdWork, MdVolunteerActivism, MdGroups) en contenedor tintado, titulo y descripcion. Grid 2x2 en tablet+, stack vertical en mobile.

## Archivos tocados
```
CREADOS:   src/features/business/components/AudienceCards.tsx
```

## Decisiones tomadas
- Se usaron iconos de react-icons (Md*) en vez de Google Material Icons directos para consistencia con el resto del proyecto.
- Los datos de las cards estan hardcoded como array dentro del componente (patron existente en el proyecto: data inline en el feature file).
- El gradiente de fondo se aplica con `style={{ borderLeft, background }}` inline porque cada card necesita un color unico.

## Pendientes o notas
- Ninguno.
