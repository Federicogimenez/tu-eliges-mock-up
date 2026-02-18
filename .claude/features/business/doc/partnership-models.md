# partnership-models: Partnership Models (RSM + Bulk)

## Feature: business
## Rol: Feature Dev
## Fecha: 2026-02-17

> Archivo: `doc/partnership-models.md` — el nombre del archivo coincide con el id de la tarea en tasks.md

---

## Que se hizo
Se creo `PartnershipModels.tsx` con badge pill "Partnership Models", titulo con gradiente blue-to-purple ("Two Models. One Objective."), y grid 2-col siempre visible con las cards RSM (purple, MdPayments) y Bulk (blue, MdInventory2). Cada card tiene gradiente vertical del color hacia negro, items con checkmarks MdCheckCircle, y borde sutil. Se creo `BookCallButton.tsx` como boton reutilizable azul full-width con icono MdCalendarToday, usado tanto aqui como en StrategyCallCTA.

## Archivos tocados
```
CREADOS:   src/features/business/components/PartnershipModels.tsx, src/features/business/components/BookCallButton.tsx
```

## Decisiones tomadas
- BookCallButton se extrajo como componente reutilizable (usado en 2 secciones) con props `onClick` y `children`.
- El grid de models es `grid-cols-2` fijo (no responsive a 1-col) siguiendo la maqueta mobile que ya muestra 2 columnas.
- Los items de cada modelo usan MdCheckCircle en lugar de bullets simples para consistencia visual.

## Pendientes o notas
- Ninguno.
