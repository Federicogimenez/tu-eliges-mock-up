# ally-popup: Extraer AllyPopUp a componente dedicado

## Feature: refactorize
## Rol: Feature Dev
## Fecha: 2026-02-17

> Archivo: `doc/ally-popup.md`

---

## Que se hizo
Se extrajo el popup de aliado/cupon (~100 lineas de JSX con 3 sub-estados) de Main.tsx a `AllyPopUp.tsx` en `src/shared/components/`. El componente maneja internamente la logica de loading, not-found y success, calculando el pricing desde `useAllyContext`. Main solo controla visibilidad via props.

## Archivos tocados
```
CREADOS:    src/shared/components/AllyPopUp.tsx
```

## Decisiones tomadas
- Props: `{ visible: boolean, onClose: () => void }` — Main controla cuando se muestra/oculta
- Los 3 sub-estados (loading, notFound, success) son internos al componente
- Pricing (perMonthPrice, originalPrice, annualPrice) se calcula dentro del componente desde los datos de ally
- Close se dispara tanto por boton X como por click en backdrop

## Pendientes o notas
- Ninguno
