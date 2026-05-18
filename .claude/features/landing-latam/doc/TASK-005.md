# TASK-005: TrendCalculator (réplica fiel del diseño)

## Feature: landing-latam
## Rol: Dev
## Fecha: 2026-05-17

---

## Que se hizo
`TrendCalculator.tsx`: clon React/TS de
`Uchooseit-Design-System/ui_kits/website/TrendCalculator.jsx`. Líneas
editables (icono / label / sub / monto con parseo numérico), quitar línea,
"agregar gasto", total recalculado en vivo, y panel pitch con eyebrow,
título, copy, bloque `~30%` (≈ ahorro en USD) y CTA pill. Data desde
`data.ts` (`CALC_META`, `DEFAULT_LINES`, `CALC_SAVINGS_RATE`).

## Archivos tocados
```
CREADOS:     src/features/landing-latam/components/TrendCalculator.tsx
MODIFICADOS: src/features/landing-latam/LandingLatam.tsx (monta TrendCalculator)
```

## Decisiones tomadas
- Iconos emoji conservados (excepción que el propio DS aplica en la calc).
- Parseo de monto idéntico al DS: `Number(val.replace(/[^0-9.]/g,'')) || 0`.
- CTA mock: `window.scrollTo({top:0})` para volver al hero capture
  (sin checkout/Recurly — fuera de scope).
- `// EDITABLE:` sobre `DEFAULT_LINES`, metadata y el handler de "agregar
  gasto" en `data.ts`/componente para la iteración futura.

## Pendientes o notas
- Montos canónicos a confirmar por el cliente (vienen de la referencia DS).
