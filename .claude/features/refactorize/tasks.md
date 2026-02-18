# Refactorize Main.tsx + Hero System - Backlog de Tareas

## Feature: refactorize
## Estado global: PENDIENTE

> Nota: Hero.tsx y Hero2.tsx fueron eliminados (estaban obsoletos). No forman parte de este refactor.

---

| ID | Titulo | Estado | Dependencias |
|----|--------|--------|-------------|
| route-config | Extraer logica de rutas a useRouteConfig + constantes | pendiente | ninguna |
| hero-video | Extraer video de fondo fijo a HeroVideo component | pendiente | route-config |
| hero-overlay | Extraer contenido hero a HeroOverlay component | pendiente | route-config |
| ally-popup | Extraer AllyPopUp a componente dedicado | pendiente | ninguna |
| main-cleanup | Simplificar Main.tsx como orquestador | pendiente | route-config, hero-video, hero-overlay, ally-popup |

---

### route-config: Extraer logica de rutas a useRouteConfig + constantes

- **Feature**: refactorize
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: ninguna

**Contexto**:
Main.tsx tiene 5 `useState` booleans (`heroUchooseit`, `businessPage`, `showFaqs`, `isHome`, `allyPopUp`) + `currentLogo` string, todos derivados de `pathname` y `theme`. Estos se calculan en 2 `useEffect` separados con arrays de rutas hardcoded que se recrean en cada render.

Crear un hook `useRouteConfig(pathname, theme)` que retorne todos los valores derivados con `useMemo`. Mover los arrays de rutas a constantes exportables en `src/shared/constants/routes.ts`.

**Archivos**:
```
CREAR:   src/hooks/useRouteConfig.ts, src/shared/constants/routes.ts
```

**Limites**:
- No modificar Main.tsx todavia — solo crear el hook y las constantes
- No cambiar que rutas estan en cada array
- El hook debe retornar exactamente los mismos valores que la logica actual produce

**Criterio de aceptacion**:
- [ ] `routes.ts` exporta: `HERO_PAGES`, `NO_FAQS_PAGES`, `DARK_BG_PAGES`, `CATEGORY_PAGES`
- [ ] `useRouteConfig` retorna: `{ isHeroPage, isBusinessPage, showFaqs, isHome, isCategoryPage, currentLogo }`
- [ ] Los valores derivados son identicos a los que producen los useEffects actuales de Main
- [ ] No hay dependencias circulares

**Notas del Arquitecto**:
La logica actual de `currentLogo` tiene esta precedencia:
1. Si es heroPage → white
2. Si no es heroPage Y es darkBgPage → white
3. Si no es heroPage Y theme === 'dark' → white
4. Else → black

`isHome` es `true` cuando pathname NO es una categoryPage (ni shop, travel, dining, entertainment). Esto significa que `/` Y rutas como `/product`, `/activate` son "home-style" para el hero. Pero en la practica solo importa cuando `isHeroPage` es `true` (el overlay solo se renderiza en hero pages).

`showFaqs` es `true` por defecto y se pone en `false` si la ruta esta en `noFaqsPages`. **Ojo**: el estado actual tiene un bug — `showFaqs` se setea a `false` pero nunca se resetea a `true` cuando se navega fuera de una noFaqsPage. El hook debe derivar esto correctamente con `useMemo` en vez de `useState`.

---

### hero-video: Extraer video de fondo fijo a HeroVideo component

- **Feature**: refactorize
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: route-config

**Contexto**:
El bloque de video fijo en Main.tsx (lineas 187-209) renderiza un `<div className="fixed inset-0 bg-black">` con `LazyLoadImage` (preview) + `<video>` responsive (mobile/desktop). Extraer a `HeroVideo.tsx` en `src/shared/layout/`.

El componente debe:
- Recibir cero props (usa `useWindowSize` y `useInlineVideo` internamente)
- Renderizar el div fixed + preview image + video
- Ser condicional: Main solo lo monta cuando `isHeroPage === true`

**Archivos**:
```
CREAR:   src/shared/layout/HeroVideo.tsx
```

**Limites**:
- No mover la logica de cuando mostrarlo — Main decide si montarlo o no
- No cambiar el markup ni los classnames del video
- No tocar los archivos de video ni sus imports

**Criterio de aceptacion**:
- [ ] `HeroVideo` renderiza el video fijo identico al actual
- [ ] Usa `useInlineVideo` para el ref del video
- [ ] Usa `useWindowSize` para elegir source mobile/desktop
- [ ] `LazyLoadImage` muestra preview mientras carga
- [ ] Sin props — componente self-contained

---

### hero-overlay: Extraer contenido hero a HeroOverlay component

- **Feature**: refactorize
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: route-config

**Contexto**:
Main.tsx lineas 211-281 renderizan el overlay del hero: titulo ("One Million Deals / One VIP Membership"), subtitulo, navLinks de categorias con iconos, y ButtonPrimary CTA. Este bloque solo se muestra cuando `isHeroPage && !isBusinessPage`. Internamente cambia entre modo "home" (fullscreen, navlinks con texto, CTA visible) y modo "category" (compacto, navlinks solo iconos, sin CTA).

Extraer a `HeroOverlay.tsx` en `src/shared/layout/`.

**Archivos**:
```
CREAR:   src/shared/layout/HeroOverlay.tsx
```

**Limites**:
- No cambiar la logica visual (home vs category mode)
- No mover la logica de cuando mostrarlo — Main decide si montarlo o no
- El componente recibe `isHome` como prop para distinguir los dos modos
- Los navLinks data pueden vivir dentro de HeroOverlay (son especificos de este componente)

**Criterio de aceptacion**:
- [ ] Props: `{ isHome: boolean }`
- [ ] Modo home: h-dvh min-h-500px, navlinks con texto + bg_color, ButtonPrimary visible, "Trusted by families"
- [ ] Modo category: h-fit, navlinks solo iconos (pathname-aware highlighting), sin CTA
- [ ] Animaciones `animate-appear-up` con delays identicos
- [ ] Usa `useAllyContext` para `code`/`recurlyUrl` del CTA
- [ ] Usa `useLocation` para pathname-based icon highlighting

---

### ally-popup: Extraer AllyPopUp a componente dedicado

- **Feature**: refactorize
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: ninguna

**Contexto**:
Main.tsx lineas 284-384 renderizan el popup de aliado/cupon. Es un overlay fullscreen con 3 estados: loading (animacion bounce + present icon), userNotFound (silencioso, retorna null), y success (imagen aliado, nombre, discount %, pricing, CTA). Tiene su propio estado `allyPopUp` para visibilidad y calcula `perMonthPrice`, `originalPrice`, `annualPrice` inline.

Extraer a `AllyPopUp.tsx` en `src/shared/components/`.

**Archivos**:
```
CREAR:   src/shared/components/AllyPopUp.tsx
```

**Limites**:
- No cambiar el markup ni los estilos
- No cambiar la logica de pricing (es calculo directo de allyData)
- La condicion de cuando mostrar (`allyData.hasCoupon && allyPopUp && !isBusinessPage`) se puede manejar con un prop `visible` + `onClose`, o el componente puede usar `useAllyContext` internamente

**Criterio de aceptacion**:
- [ ] Props: `{ visible: boolean, onClose: () => void }` — Main controla visibilidad
- [ ] 3 sub-estados internos: loading (isLoading), not found (null), success (full UI)
- [ ] Pricing calculado internamente desde `useAllyContext`: perMonthPrice, originalPrice, annualPrice
- [ ] Close button y backdrop click llaman `onClose`
- [ ] ButtonPrimary CTA con recurlyUrl
- [ ] Sin regresion visual en ningun sub-estado

---

### main-cleanup: Simplificar Main.tsx como orquestador

- **Feature**: refactorize
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: route-config, hero-video, hero-overlay, ally-popup

**Contexto**:
Con los 4 componentes y el hook extraidos, reescribir Main.tsx para que solo orqueste:

```tsx
const Main = ({ children }) => {
  const { isHeroPage, isBusinessPage, showFaqs, isHome, currentLogo } = useRouteConfig(pathname, theme)
  const [allyPopUpVisible, setAllyPopUpVisible] = useState(true)

  return (
    <SavingsModalProvider>
      <div>
        <Header logo={currentLogo} />   // o inline si es simple
        {isHeroPage && <HeroVideo />}
        {isHeroPage && !isBusinessPage && (
          <>
            <CalculateSavingButton />
            <HeroOverlay isHome={isHome} />
            <AllyPopUp visible={allyData.hasCoupon && allyPopUpVisible} onClose={...} />
          </>
        )}
        <main>{children}</main>
        {showFaqs && <Faqs />}
        <Footer />
      </div>
    </SavingsModalProvider>
  )
}
```

**Archivos**:
```
MODIFICAR: src/shared/layout/Main.tsx
```

**Limites**:
- No agregar funcionalidad nueva
- No cambiar la estructura del DOM que afecte estilos
- Mantener `useAnalytics()` call
- Mantener `window.scrollTo(0,0)` en cambio de ruta
- Los imports de video sources y category icons se mueven a sus respectivos componentes nuevos — eliminarlos de Main

**Criterio de aceptacion**:
- [ ] Main.tsx tiene menos de 100 lineas
- [ ] Cero logica de routing inline (todo en useRouteConfig)
- [ ] Cero JSX de video, hero content o ally popup (todo en componentes)
- [ ] Solo 1 useState (allyPopUpVisible)
- [ ] Todas las rutas se comportan identico: `/`, `/shop`, `/travel`, `/dining`, `/entertainment`, `/business`, `/agency`, etc.
- [ ] `npm run build` pasa limpio
- [ ] No console errors
