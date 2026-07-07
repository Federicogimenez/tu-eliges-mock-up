# Refactorize Main.tsx + Hero System - Backlog de Tareas

## Feature: refactorize
## Estado global: COMPLETADA

> Nota: Hero.tsx y Hero2.tsx fueron eliminados (estaban obsoletos). No forman parte de este refactor.
> Nota: Las rutas se crearon en `src/shared/routes.ts` (no en `src/shared/constants/routes.ts` como se planeo originalmente).

---

| ID | Titulo | Estado | Dependencias |
|----|--------|--------|-------------|
| route-config | Extraer logica de rutas a useRouteConfig + constantes | completada | ninguna |
| hero-video | Extraer video de fondo fijo a HeroVideo component | completada | route-config |
| hero-overlay | Extraer contenido hero a HeroOverlay component | completada | route-config |
| ally-popup | Extraer AllyPopUp a componente dedicado | completada | ninguna |
| main-cleanup | Simplificar Main.tsx como orquestador | completada | route-config, hero-video, hero-overlay, ally-popup |
| chunk-optimization | Eliminar chunks pesados no utilizados del build | completada | ninguna |

---

### route-config: Extraer logica de rutas a useRouteConfig + constantes

- **Feature**: refactorize
- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: ninguna

**Contexto**:
Main.tsx tenia 5 `useState` booleans (`heroUchooseit`, `businessPage`, `showFaqs`, `isHome`, `allyPopUp`) + `currentLogo` string, todos derivados de `pathname` y `theme`. Se calculaban en 2 `useEffect` separados con arrays de rutas hardcoded que se recreaban en cada render.

Se creo `useRouteConfig(pathname, theme)` que retorna todos los valores derivados con `useMemo`. Los arrays de rutas se movieron a `src/shared/routes.ts`.

**Archivos**:
```
CREADOS:   src/hooks/useRouteConfig.ts, src/shared/routes.ts
```

**Criterio de aceptacion**:
- [x] `routes.ts` exporta: `HERO_PAGES`, `NO_FAQS_PAGES`, `DARK_BG_PAGES`, `CATEGORY_PAGES`
- [x] `useRouteConfig` retorna: `{ isHeroPage, isBusinessPage, showFaqs, isHome, isCategoryPage, currentLogo }`
- [x] Los valores derivados son identicos a los que producian los useEffects anteriores de Main
- [x] Bug de `showFaqs` corregido — ahora se deriva con `useMemo` en vez de `useState`
- [x] No hay dependencias circulares

---

### hero-video: Extraer video de fondo fijo a HeroVideo component

- **Feature**: refactorize
- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: route-config

**Contexto**:
El bloque de video fijo se extrajo a `HeroVideo.tsx` en `src/shared/layout/`.

**Archivos**:
```
CREADO:   src/shared/layout/HeroVideo.tsx
```

**Criterio de aceptacion**:
- [x] `HeroVideo` renderiza el video fijo identico al original
- [x] Usa `useInlineVideo` para el ref del video
- [x] Usa `useWindowSize` para elegir source mobile/desktop
- [x] `LazyLoadImage` muestra preview mientras carga
- [x] Sin props — componente self-contained

---

### hero-overlay: Extraer contenido hero a HeroOverlay component

- **Feature**: refactorize
- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: route-config

**Contexto**:
El overlay del hero (titulo, navlinks de categorias, ButtonPrimary CTA) se extrajo a `HeroOverlay.tsx` en `src/shared/layout/`.

**Archivos**:
```
CREADO:   src/shared/layout/HeroOverlay.tsx
```

**Criterio de aceptacion**:
- [x] Props: `{ isHome: boolean }`
- [x] Modo home: h-dvh min-h-500px, navlinks con texto + bg_color, ButtonPrimary visible, "Trusted by families"
- [x] Modo category: h-fit, navlinks solo iconos (pathname-aware highlighting), sin CTA
- [x] Animaciones `animate-appear-up` con delays identicos
- [x] Usa `useAllyContext` para `code`/`recurlyUrl` del CTA
- [x] Usa `useLocation` para pathname-based icon highlighting

---

### ally-popup: Extraer AllyPopUp a componente dedicado

- **Feature**: refactorize
- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: ninguna

**Contexto**:
El popup de aliado/cupon se extrajo a `AllyPopUp.tsx` en `src/shared/components/`.

**Archivos**:
```
CREADO:   src/shared/components/AllyPopUp.tsx
```

**Criterio de aceptacion**:
- [x] Props: `{ visible: boolean, onClose: () => void }` — Main controla visibilidad
- [x] 3 sub-estados internos: loading (isLoading), not found (null), success (full UI)
- [x] Pricing calculado internamente desde `useAllyContext`: perMonthPrice, originalPrice, annualPrice
- [x] Close button y backdrop click llaman `onClose`
- [x] ButtonPrimary CTA con recurlyUrl
- [x] Sin regresion visual en ningun sub-estado

---

### main-cleanup: Simplificar Main.tsx como orquestador

- **Feature**: refactorize
- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: route-config, hero-video, hero-overlay, ally-popup

**Contexto**:
Main.tsx se redujo de ~406 lineas a ~72 lineas. Ahora es un orquestador limpio que importa los componentes extraidos.

**Archivos**:
```
MODIFICADO: src/shared/layout/Main.tsx
```

**Criterio de aceptacion**:
- [x] Main.tsx tiene menos de 100 lineas (72 lineas)
- [x] Cero logica de routing inline (todo en useRouteConfig)
- [x] Cero JSX de video, hero content o ally popup (todo en componentes)
- [x] Solo 1 useState (allyPopUp)
- [x] Todas las rutas se comportan identico
- [x] `npm run build` pasa limpio
- [x] No console errors

---

### chunk-optimization: Eliminar chunks pesados no utilizados del build

- **Feature**: refactorize
- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: ninguna

**Contexto**:
`vite build` generaba 3 chunks que superaban el limite de 500 kB: `hls.js` (525 kB), `dash.all.min.js` (966 kB) y `@mux/mux-player-react` (1,014 kB). Los tres son dependencias transitivas de `react-player` para providers que no se usan — la app solo reproduce videos de YouTube. El warning de Vite bloqueaba un build limpio.

Se resolvio con aliases en `vite.config.ts` que redirigen los providers no usados a un componente stub vacio. Adicionalmente se agrego `manualChunks` para separar vendor libs (react, router, framer-motion) en chunks independientes con carga priorizada.

**Archivos**:
```
CREADOS:    src/stubs/empty-player.tsx
MODIFICADO: vite.config.ts
```

**Criterio de aceptacion**:
- [x] `vite build` produce cero warnings de chunk size
- [x] Chunk mas grande < 500 kB (328 kB el mayor)
- [x] Videos de YouTube siguen funcionando (react-player con provider YouTube intacto)
- [x] TypeScript compila sin errores
- [x] ~2.5 MB eliminados del build output
