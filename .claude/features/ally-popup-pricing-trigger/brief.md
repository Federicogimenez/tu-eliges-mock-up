# Feature: AllyPopUp Pricing Trigger

## Estado: ACTIVA
## Prioridad: P1
## Rol asignado: Feature Dev

---

## Objetivo
Cambiar el trigger del AllyPopUp para que aparezca con fade-in cuando el usuario llega al 50% de la seccion PricingSection, en lugar de mostrarse inmediatamente al cargar la pagina. El popup solo debe mostrarse una vez por sesion (sessionStorage).

## Alcance

### Incluido
- Hook `useAllyPopUpTrigger` que usa IntersectionObserver para detectar 50% de PricingSection
- Control de sesion via `sessionStorage` (clave `ally-popup-shown`)
- Animacion fade-in en AllyPopUp usando Framer Motion
- Integracion en Main.tsx reemplazando la logica actual de visibilidad

### Excluido
- No se modifica el contenido ni el estilo interno del AllyPopUp (solo se agrega fade-in al wrapper)
- No se modifica la logica de datos del ally (useAllyContext)
- No se cambia PricingSection mas alla de agregar un `id`
- No se toca el sistema de rutas ni otros componentes del layout

## Estado actual del codigo

### AllyPopUp (`src/shared/components/AllyPopUp.tsx`)
- Componente con props `{ visible, onClose }`
- Si `!visible` retorna `null` (mount/unmount binario, sin animacion)
- Tiene `position: fixed` con `z-[10000]` — su ubicacion en el DOM no importa visualmente
- Usa `useAllyContext` internamente para pricing

### Main.tsx (`src/shared/layout/Main.tsx`)
- Monta AllyPopUp dentro de la seccion hero (linea 55-58)
- Visibilidad controlada por: `allyData.hasCoupon && allyPopUp && showHeroContent`
- `allyPopUp` es un `useState(true)` local — se muestra inmediatamente al montar
- `onClose` simplemente hace `setAllyPopUp(false)`

### PricingSection (`src/shared/layout/PricingSection.tsx`)
- `<section>` raiz sin `id` ni `ref`
- Se usa en paginas de categoria y home, dentro de `{children}` en Main.tsx

## Archivos permitidos (scope)
```
CREAR:
  src/hooks/useAllyPopUpTrigger.ts

MODIFICAR:
  src/shared/components/AllyPopUp.tsx
  src/shared/layout/Main.tsx
  src/shared/layout/PricingSection.tsx

NO TOCAR:
  src/hooks/useAllyContext.ts
  src/context/AllyContext.tsx
  src/shared/routes.ts
  src/hooks/useRouteConfig.ts
  Cualquier archivo de feature pages
```

## Dependencias
- Ninguna. El AllyPopUp y PricingSection ya existen y funcionan.

## Criterios de aceptacion
1. AllyPopUp NO aparece al cargar la pagina
2. AllyPopUp aparece con fade-in cuando el usuario hace scroll y el 50% de PricingSection es visible
3. Si el usuario cierra el popup, no vuelve a aparecer en toda la sesion (sessionStorage)
4. Si el usuario ya vio el popup en esta sesion y recarga/navega, no se muestra de nuevo
5. El popup solo se muestra si hay cupon activo (`allyData.hasCoupon`) y la pagina tiene hero (`showHeroContent`)
6. La animacion de fade-in usa Framer Motion (consistente con el stack del proyecto)
7. Build de TypeScript compila sin errores

## Estructura de la feature
```
.claude/features/ally-popup-pricing-trigger/
  brief.md      -> este archivo
  tasks.md      -> backlog de tareas
  doc/          -> registro de tareas completadas
```

---

*Creado por: Arquitecto*
*Fecha: 2026-03-06*
