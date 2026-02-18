# brands-savings: Brands showcase + savings calculator

## Feature: business
## Rol: Feature Dev
## Fecha: 2026-02-17

> Archivo: `doc/brands-savings.md` — el nombre del archivo coincide con el id de la tarea en tasks.md

---

## Que se hizo
Se creo `BrandsShowcase.tsx` con dos paneles: izquierdo con pills de categoria (Shop purple, Travel blue, Dining yellow, Entertainment pink) + Keen Slider de logos de marcas (6 por categoria en grid 3-col), y derecho con bloque inline de savings ("Big Yearly Savings", "$2,030.00" en verde, boton "Calculate Savings"). Se agrego soporte para `hideMembershipCost` en SavingsCalculatorModalContext para que el modal no muestre el costo de membresia en contexto B2B. Se creo tambien `SavingsSection.tsx` como version standalone, pero quedo comentada en Business.tsx (la funcionalidad se integro inline en BrandsShowcase).

## Archivos tocados
```
CREADOS:   src/features/business/components/BrandsShowcase.tsx, src/features/business/components/SavingsSection.tsx
MODIFICADOS: src/context/SavingsCalculatorModalContext.tsx, src/shared/components/SavingsCalculator/SavingsModal.tsx
```

## Decisiones tomadas
- Se integro el bloque de savings directamente en BrandsShowcase (inline) en lugar de usar SavingsSection como componente separado. Esto permite el layout side-by-side de marcas + savings que la maqueta requeria.
- `openModal({ hideMembershipCost: true })` oculta la linea de deduccion de membresia en el modal, mostrando ahorro bruto para el contexto B2B.
- Keen Slider con `drag: false` — navegacion solo por click de pill. `setTimeout(100ms)` antes de `moveToIdx` para evitar race condition con el slider.
- Imagenes de marcas reutilizan los paths existentes en `public/trendy/{category}/articles/`.

## Pendientes o notas
- SavingsSection.tsx existe pero esta comentado en Business.tsx. Podria eliminarse si se confirma que no se usara.
