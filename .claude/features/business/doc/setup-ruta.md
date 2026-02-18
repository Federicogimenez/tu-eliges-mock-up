# setup-ruta: Configuracion de ruta y estructura

## Feature: business
## Rol: Feature Dev
## Fecha: 2026-02-17

> Archivo: `doc/setup-ruta.md` — el nombre del archivo coincide con el id de la tarea en tasks.md

---

## Que se hizo
Se creo la estructura de carpetas `src/features/business/` con `Business.tsx` como entry point. Se registro la ruta `/business` en AppRoutes con lazy import. Se agrego `/business` a los arrays `heroPages`, `noFaqsPages` y `darkBgPages` en Main.tsx. Se creo el flag `businessPage` que suprime el hero content overlay y el floating CalculateSavingButton cuando `pathname === '/business'`. Se agrego el link "Business" en HamburgerMenu.

## Archivos tocados
```
CREADOS:   src/features/business/Business.tsx
MODIFICADOS: src/routes/AppRoutes.tsx, src/shared/layout/Main.tsx, src/shared/components/HamburgerMenu.tsx
```

## Decisiones tomadas
- `/business` se agrego a `heroPages` (no crea su propio video, reutiliza el de Main) en lugar de manejar video propio. El flag `businessPage` suprime la UI overlay del hero pero conserva el video fijo.
- `GOOGLE_APPOINTMENT_URL` se definio como constante de modulo en Business.tsx, pasada como prop `onBookCall` a los componentes hijos.
- Business.tsx no tiene estado local ni hooks propios, solo coordina la composicion de secciones.

## Pendientes o notas
- Ninguno.
