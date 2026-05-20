# CHANGES-08: Calculadora — USD ahorrado en modo pregunta (pequeño)

## Feature: landing-latam
## Rol: Dev
## Fecha: 2026-05-17

---

## Que se hizo
En el pitch de la calculadora, el bloque grande "$X USD" + caption
"Calculado según tu presupuesto…" se reemplazó por una línea **pequeña en
modo pregunta** con el monto resaltado:

> "Podemos ayudarte a ahorrar **{fmt(savings)} USD**. ¿Quieres saber cómo?"

- Tamaño `text-sm sm:text-base` (antes era `clamp(2.2rem,3.5vw,3rem)` font-black).
- Monto en `<strong>` verde (`text-uc-green`) — color de ahorro del DS,
  consistente con el "11%" de arriba. Sigue siendo dinámico (total × 0.11).
- El bloque "11% · Ahorro promedio premium" se mantiene intacto.

## Archivos tocados
```
MODIFICADOS: src/features/landing-latam/components/TrendCalculator.tsx
```

## Decisiones tomadas
- Verde (no azul) para el monto: regla del DS "green = savings prices" y
  coherencia con el 11% verde.
- "¿Quieres saber cómo?" con acento y signos de apertura (regla de
  puntuación del DS), voz tú.
- Aplicado vía script Node (watcher + quoting `{' '}`). Build verde.

## Pendientes o notas
- Ninguno.
