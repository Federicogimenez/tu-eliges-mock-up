# Feature: Ally PopUp Inmediato

## Estado: ACTIVA
## Prioridad: P1
## Rol asignado: Feature Dev

---

## Objetivo
Revertir el comportamiento del popup de aliado para que aparezca al inicio de la pagina en lugar de esperar a que el usuario haga scroll hasta la seccion de pricing. El popup debe mostrarse automaticamente tras un breve delay en las paginas que lo admiten.

## Alcance

### Incluido
- Simplificar `useAllyPopUpTrigger` para disparar el popup al cargar la pagina (con delay de ~1.5s para UX)
- Eliminar toda logica de IntersectionObserver y MutationObserver que observa `#pricing-section`

### Excluido
- No cambiar el componente visual `AllyPopUp.tsx` (la UI no cambia)
- No cambiar la condicion de activacion en `Main.tsx` (`allyData.hasCoupon && showHeroContent`)
- No cambiar las rutas ni el layout

## Estado actual del codigo

### `src/hooks/useAllyPopUpTrigger.ts`
Hook custom que usa IntersectionObserver + MutationObserver para detectar cuando `#pricing-section` es visible al 50%. Usa variable module-level `alreadyShown` para evitar mostrar el popup mas de una vez por sesion.

### `src/shared/layout/Main.tsx` (linea 28)
Consume el hook con `useAllyPopUpTrigger(allyData.hasCoupon && showHeroContent)`. Pasa `showPopUp` y `closePopUp` al componente `AllyPopUp`.

### Paginas donde se muestra el popup
Hero pages que no son business: `/`, `/shop`, `/travel`, `/dining`, `/entertainment` (derivado de `showHeroContent = isHeroPage && !isBusinessPage`).

## Archivos permitidos (scope)
```
CREAR:
  (ninguno)

MODIFICAR:
  src/hooks/useAllyPopUpTrigger.ts

NO TOCAR:
  src/shared/components/AllyPopUp.tsx
  src/shared/layout/Main.tsx
  src/shared/routes.ts
```

## Dependencias
- Ninguna

## Criterios de aceptacion
1. El popup del aliado aparece ~1.5s despues de cargar cualquier hero page (no business) cuando hay coupon activo
2. El popup NO aparece mas de una vez por sesion (variable `alreadyShown` se mantiene)
3. El popup NO aparece si no hay coupon (`enabled = false`)
4. No hay errores en consola
5. No queda ninguna referencia a IntersectionObserver ni `pricing-section` en el hook

## Estructura de la feature
```
features/ally-popup-immediate/
  brief.md      → este archivo
  tasks.md      → backlog de tareas
  doc/          → registro de tareas completadas
```

---

*Creado por: Arquitecto*
*Fecha: 2026-03-24*
