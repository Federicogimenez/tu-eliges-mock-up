# hero-video: Hero section con video de fondo fijo

## Feature: business
## Rol: Feature Dev
## Fecha: 2026-02-17

> Archivo: `doc/hero-video.md` — el nombre del archivo coincide con el id de la tarea en tasks.md

---

## Que se hizo
Se creo `HeroSection.tsx` como spacer transparente de 60dvh (min 300px) que deja visible el video fijo de Main por debajo. Se creo `WaveSeparator.tsx` como componente SVG sine-wave en azul uchooseit, posicionado en la base del hero con `absolute bottom-0 translate-y-1/2` para crear transicion visual al contenido oscuro. WaveSeparator se reutiliza en 3 puntos de Business.tsx.

## Archivos tocados
```
CREADOS:   src/features/business/components/HeroSection.tsx, src/features/business/components/WaveSeparator.tsx
```

## Decisiones tomadas
- HeroSection no renderiza texto ni contenido — es un spacer puro. El efecto hero viene del video fijo de Main visible a traves de la seccion transparente.
- WaveSeparator implementa una sola variante (sine-wave band con viewBox 1440x128). No se implementaron las variantes ellipse/diagonal mencionadas en el plan original porque no fueron necesarias.
- El SVG usa `var(--color-blue-uchooseit)` como fill para consistencia con el tema.

## Pendientes o notas
- Si se necesitan variantes de wave (ellipse, diagonal), habria que agregar un prop `variant` al componente.
