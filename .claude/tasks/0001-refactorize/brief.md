# Feature: Refactorize Main.tsx + Hero System

## Estado: COMPLETADA
## Prioridad: P1
## Rol asignado: Feature Dev

---

## Objetivo
Simplificar Main.tsx extrayendo responsabilidades en componentes dedicados. Hoy Main.tsx tiene ~406 lineas que mezclan layout, video hero, contenido hero, popup de aliados, logica de rutas y footer. El objetivo es que Main sea un orquestador limpio (~80-100 lineas) que delega en componentes especializados.

## Alcance

### Incluido
- Extraer el video de fondo fijo a `HeroVideo` component
- Extraer el contenido hero (titulo, navlinks, CTA) a `HeroOverlay` component
- Extraer el popup de aliado/cupon a `AllyPopUp` component
- Simplificar la logica de rutas: reemplazar 5 useState + 2 useEffect por un `useRouteConfig` hook con `useMemo`
- Mover los arrays de rutas (`heroPages`, `noFaqsPages`, `darkBgPages`) a constantes exportadas

### Excluido
- Cambiar el comportamiento visual (todo debe verse identico antes y despues)
- Refactorizar HeroTrendy, HeroCategoryBanner u otros componentes fuera de Main
- Modificar el sistema de contextos (SavingsModalProvider, AllyProvider, ThemeProvider)
- Tocar las feature pages (Home, Shop, Business, etc.)

## Estado actual del codigo

### Main.tsx (~406 lineas) - Responsabilidades mezcladas:

| Lineas | Responsabilidad | Problema |
|--------|----------------|----------|
| 36-62 | State + ally pricing calcs | 5 useState booleans + 1 string derivados de pathname |
| 64-90 | navLinks data | Array hardcoded de 4 categorias con iconos/colores |
| 92-155 | 2 useEffects con route logic | Arrays recreados en cada cambio de ruta, multiples setState |
| 163-176 | Header (logo + hamburger) | OK, pero logo src depende de 2 states |
| 179-281 | Hero section: video + overlay content | ~100 lineas de JSX inline con condicionales `!businessPage`, `isHome` |
| 284-384 | AllyPopUp modal | ~100 lineas de JSX inline con 3 sub-estados (loading, notFound, success) |
| 392-401 | Main content + Faqs + Footer | La parte limpia (~10 lineas) |

### Problemas especificos:
1. **`heroUchooseit`** y **`businessPage`** son flags que se cancelan mutuamente — el video se muestra en ambos casos pero el overlay solo cuando `heroUchooseit && !businessPage`
2. **`isHome`** controla si el hero es fullscreen (`h-dvh`) o compacto (`h-fit`), y si navLinks muestran texto o solo iconos
3. **`showFaqs`** y **`currentLogo`** se derivan directamente de pathname pero usan useState + useEffect en vez de derivacion directa
4. **AllyPopUp** tiene logica propia (loading, userNotFound, success states) y precio calculado — todo inline en Main

## Archivos permitidos (scope)
```
CREAR:
  src/shared/layout/HeroVideo.tsx         ← video fijo + preview image
  src/shared/layout/HeroOverlay.tsx       ← titulo, navlinks, CTA (home + category)
  src/shared/components/AllyPopUp.tsx     ← modal de cupon/aliado
  src/hooks/useRouteConfig.ts             ← logica derivada de pathname
  src/shared/constants/routes.ts          ← arrays de rutas exportados

MODIFICAR:
  src/shared/layout/Main.tsx              ← simplificar a orquestador

NO TOCAR:
  src/features/**                         ← ninguna feature page
  src/context/**                          ← ningun context provider
  src/shared/layout/HeroTrendy.tsx        ← no forma parte de este refactor
  src/shared/components/HeroCategoryBanner.tsx
  src/shared/layout/Footer.tsx
  src/shared/layout/Faqs.tsx
```

## Dependencias
- Ninguna externa. Es refactor interno sin cambios de comportamiento.

## Criterios de aceptacion
1. Main.tsx tiene menos de 100 lineas de JSX
2. El video de fondo fijo funciona identico en todas las heroPages
3. El hero overlay (titulo + navlinks + CTA) se ve identico en `/` y `/shop`, `/travel`, etc.
4. `/business` sigue mostrando solo el video sin overlay ni CalculateSavingButton
5. AllyPopUp funciona identico (loading, error silencioso, success con pricing)
6. Logo blanco/negro sigue cambiando segun ruta y tema
7. FAQs se ocultan en las mismas rutas
8. No hay regresiones visuales en ninguna ruta
9. `npm run build` pasa sin errores TypeScript
10. No hay console errors en dev mode

## Estructura de la feature
```
features/refactorize/
  brief.md      → este archivo
  tasks.md      → backlog de tareas
  doc/          → registro de tareas completadas (Dev crea al ejecutar)
```

---

*Creado por: Arquitecto*
*Fecha: 2026-02-17*
