# CHANGES-04: Calculadora — sin iconos + responsive de filas

## Feature: landing-latam
## Rol: Dev
## Fecha: 2026-05-17

---

## Que se hizo
Pedido del usuario: las filas de la calculadora se mostraban mal y no le
gustan los iconos.

1. **Iconos eliminados en todas las versiones**: se quitó la columna de
   icono (`<div>{l.icon}</div>`); la grilla pasó de
   `grid-cols-[44px_1fr_auto_auto]` a `grid-cols-[1fr_auto_auto]`.
2. **Responsive de cada fila**:
   - gap `gap-2 sm:gap-3.5` (más compacto en mobile).
   - celda de label `min-w-0 pr-1` → puede encoger y hacer wrap sin
     desbordar.
   - monto `text-base sm:text-lg` y el `<input>` `w-[68px] sm:w-[90px]`.
   - botón quitar `px-1 sm:px-1.5`.
3. **Padding de la card responsive**: `p-4 sm:p-6 md:p-7` (antes `p-7`
   fijo, muy grande en mobile).

El campo `CalcLine.icon` se mantiene en `data.ts` (ya no se renderiza; sin
error TS por ser propiedad de objeto). El form de "agregar gasto" ya era
responsive (`grid sm:grid-cols-[1fr_1fr_auto]`, apila en mobile).

## Archivos tocados
```
MODIFICADOS: src/features/landing-latam/components/TrendCalculator.tsx
```

## Decisiones tomadas
- Se aplicó vía script Node de reemplazos literales: un watcher/formatter
  externo reescribía el archivo entre cada Read y Edit del harness (carrera
  de mtime); el script es determinístico, preserva los cambios externos
  intencionales (header comentado) y solo toca lo necesario. Build verde.
- No se borró `icon` de `data.ts`/`CalcLine` para no ampliar el blast radius
  (es inerte). Limpieza opcional si se promueve la maqueta.

## Pendientes o notas
- Si querés, en una próxima iteración revisamos el resto del responsive
  (Hero, Community, Choosy) a 360/768/1024/1440.
