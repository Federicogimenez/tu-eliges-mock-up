# how-it-works: Seccion "How It Works" (4 pasos)

## Feature: business
## Rol: Feature Dev
## Fecha: 2026-02-17

> Archivo: `doc/how-it-works.md` — el nombre del archivo coincide con el id de la tarea en tasks.md

---

## Que se hizo
Se creo `HowItWorks.tsx` con titulo "Next Steps" y 4 pasos numerados: Strategy Call, Integration Plan, Live Demo & QA, Community Launch. Cada paso tiene circulo numerado con color (3 en azul #00A3FF, ultimo en verde #22C55E), titulo bold y descripcion. Single column en mobile, 2-col en lg+.

## Archivos tocados
```
CREADOS:   src/features/business/components/HowItWorks.tsx
```

## Decisiones tomadas
- Los datos de los pasos estan hardcoded como array dentro del componente.
- El paso 4 en verde marca visualmente el objetivo final (lanzamiento), diferenciandolo de los pasos intermedios en azul.
- Layout 2-col en desktop permite que los 4 pasos se vean sin scroll excesivo.

## Pendientes o notas
- Ninguno.
