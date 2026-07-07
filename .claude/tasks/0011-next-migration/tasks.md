# Tasks: next-migration

> Backlog de la migración Vite + React Router → Next.js App Router con `output: 'export'`.
> Orden estricto: cada tarea depende de la anterior salvo indicación contraria.

---

# TASK-001: Setup base de Next.js con export estático

## Metadata
- **Feature**: next-migration
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: ninguna

## Contexto
Instalar Next.js y crear el esqueleto del App Router conviviendo temporalmente con Vite (el build de Vite sigue funcionando hasta TASK-007). Configurar export estático, Tailwind v4 vía PostCSS y el root layout con los providers actuales (`ThemeProvider` → `CountryProvider` → `AllyProvider`) replicando lo que hoy hace `src/main.tsx` + `src/App.tsx`, incluyendo la clase `.dark` por defecto en `<html>`.

## Archivos
```
CREAR:   next.config.ts, app/layout.tsx, app/providers.tsx, postcss.config.mjs
MODIFICAR: package.json (deps next + scripts next dev/build), tsconfig.json, index.css (directivas Tailwind v4 para PostCSS)
```

## Limites
- NO migrar ninguna ruta todavía (solo `app/layout.tsx`, sin pages).
- NO eliminar archivos de Vite.
- NO tocar componentes de `src/features/`.

## Criterio de aceptacion
- [ ] `next.config.ts` con `output: 'export'`, `trailingSlash: true`, `images: { unoptimized: true }`.
- [ ] Aliases de stubs de react-player replicados desde `vite.config.ts` (webpack/turbopack alias hacia `src/stubs/empty-player.tsx`).
- [ ] `next build` corre sin errores con un `app/page.tsx` placeholder.
- [ ] Providers montados en el root layout con `'use client'` donde corresponda; dark mode default en `<html class="dark">`.

## Notas del Arquitecto
Tailwind v4 en Next se integra con `@tailwindcss/postcss` (no existe plugin de Vite aquí). El `@theme` de `index.css` se mantiene tal cual. Mantener `keen-slider.min.css` importado globalmente (hoy está en `AppRoutes.tsx`; moverlo al root layout).

---

# TASK-002: Migrar rutas a file-based routing

## Metadata
- **Feature**: next-migration
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-001

## Contexto
Crear una `page.tsx` por cada una de las 14 rutas de `src/routes/AppRoutes.tsx` (`/`, `/product`, `/shop`, `/travel`, `/dining`, `/entertainment`, `/thank-you`, `/activate`, `/agency`, `/influencer`, `/company`, `/non-profit`, `/business`, `/save`). Cada page importa el componente de feature existente. El layout compartido `Main` (hoy envuelve las rutas en `AppRoutes.tsx`) pasa al `app/layout.tsx` o a un template compartido. `React.lazy` + `Suspense` se eliminan: el code-splitting por ruta lo hace Next automáticamente.

## Archivos
```
CREAR:   app/{ruta}/page.tsx (13 rutas) + app/page.tsx (home)
MODIFICAR: app/layout.tsx (integrar Main), src/shared/layout/Main.tsx si necesita 'use client'
```

## Limites
- NO reescribir los componentes de feature — cada page es un wrapper fino.
- NO tocar aún los usos internos de react-router dentro de `src/` (eso es TASK-003).
- NO agregar metadata todavía (TASK-004).

## Criterio de aceptacion
- [ ] `next build` genera HTML para las 14 rutas (`out/shop/index.html`, etc.).
- [ ] Cada page renderiza el mismo componente de feature que su ruta equivalente en `AppRoutes.tsx`.
- [ ] `Main` envuelve todas las páginas igual que hoy.

---

# TASK-003: Reemplazar react-router-dom y adaptar hooks client-side

## Metadata
- **Feature**: next-migration
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-002

## Contexto
Barrer todos los usos de `react-router-dom` en `src/`: `Link` → `next/link`, `useNavigate` → `useRouter` de `next/navigation`, `useLocation` → `usePathname`/`useSearchParams`. `useRouteConfig` (deriva flags de `src/shared/routes.ts` desde el pathname) migra a `usePathname`. Los hooks/contexts que leen `window`, `localStorage` o query params (AllyContext con `?code=`, useAnalytics, useWindowSize, etc.) deben ser `'use client'` y tolerar el prerender (guards de `typeof window`, `useSearchParams` dentro de `<Suspense>` donde Next lo exija).

## Archivos
```
CREAR:   (ninguno)
MODIFICAR: src/context/*, src/hooks/*, src/shared/**, src/features/** (solo imports de router y directivas 'use client')
```

## Limites
- NO cambiar lógica de negocio (ally, pricing, calculadora) — solo la capa de routing/entorno.
- NO eliminar `react-router-dom` de package.json todavía (TASK-007).
- Cuidado con `trailingSlash: true`: los checks de pathname contra `src/shared/routes.ts` deben normalizar el trailing slash.

## Criterio de aceptacion
- [ ] Cero imports de `react-router-dom` en `src/` (verificar con grep).
- [ ] `next build` sin errores de prerender (window is not defined, useSearchParams sin Suspense, etc.).
- [ ] Navegación client-side entre todas las rutas funciona en `next dev`.
- [ ] `useRouteConfig` devuelve los mismos flags por ruta que en producción actual.

---

# TASK-004: Migrar SEO estático a la Metadata API

## Metadata
- **Feature**: next-migration
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-002 (puede correr en paralelo con TASK-003)

## Contexto
Reemplazar `src/plugins/staticSeoPlugin.ts` por el mecanismo nativo de Next: cada `page.tsx` exporta `metadata` (title, description, canonical, OG) leyendo de `src/seo/seo.json` para mantener una única fuente de verdad, y el JSON-LD se inyecta como `<script type="application/ld+json">` en cada page. El resultado debe tener paridad exacta con el HTML que hoy genera el plugin.

## Archivos
```
CREAR:   src/seo/metadata.ts (helper que mapea seo.json → objeto Metadata de Next)
MODIFICAR: app/**/page.tsx (export const metadata + JSON-LD)
```

## Limites
- NO modificar el contenido de `seo.json` (solo consumirlo).
- NO eliminar el plugin todavía (TASK-007).
- Las pages con metadata deben seguir siendo Server Components (la directiva 'use client' va en los componentes de feature, no en la page).

## Criterio de aceptacion
- [ ] Cada HTML exportado tiene title, meta description, canonical y JSON-LD idénticos a los que genera `staticSeoPlugin` hoy (diff manual por ruta).
- [ ] `export const metadata` presente en las 14 pages.

---

# TASK-005: Actualizar workflow de deploy

## Metadata
- **Feature**: next-migration
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-003, TASK-004

## Contexto
Adaptar `.github/workflows/uchooseit.yml` al output de Next: `npm run build` ahora es `next build` y el directorio de salida es `out/` (o mantener `dist/` seteando `distDir` — decisión del Dev, documentarla). Secrets, bucket (`uchooseit.us-front`) y trigger (`uchooseit` branch) no cambian. Verificar que con `trailingSlash: true` S3 sirve `/shop/` → `/shop/index.html` sin reglas extra; documentar si la regla de error 404→index.html de S3/CloudFront puede quedarse o conviene apuntarla a `404.html`.

## Archivos
```
CREAR:   (ninguno)
MODIFICAR: .github/workflows/uchooseit.yml (paths de artifact y SOURCE_DIR), package.json (script build → next build)
```

## Limites
- NO tocar secrets, bucket, ni la action de sync.
- NO deployar a producción desde esta tarea — el push a `uchooseit` dispara el deploy real, coordinar con QA (TASK-006) antes de mergear.

## Criterio de aceptacion
- [ ] El workflow buildea y sube el directorio de export correcto.
- [ ] `--delete` del sync sigue activo (limpia los HTML viejos del SPA).
- [ ] Nota en doc/ sobre el comportamiento de rutas en S3 (trailing slash + 404).

---

# TASK-006: QA integral

## Metadata
- **Feature**: next-migration
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-005

## Contexto
Verificación end-to-end del export estático servido localmente (`npx serve out` o similar, que simula S3 mejor que `next dev`): las 14 rutas en carga directa y navegación client-side, dark mode default, responsive, flujo de affiliate completo (`?code=` → popup → localStorage → checkout Recurly con cupón), calculadora de ahorros, traducciones, videos (react-player stub), y que GA4 + Meta Pixel disparan.

## Archivos
```
CREAR:   (ninguno — solo doc/qa-integral.md con resultados)
MODIFICAR: fixes puntuales que surjan del QA
```

## Limites
- NO introducir features nuevas al corregir — solo paridad con producción.

## Criterio de aceptacion
- [ ] Checklist de las 14 rutas: deep link OK, navegación OK, sin errores de consola.
- [ ] Flujo affiliate verificado con un código real de `api.tueliges.us`.
- [ ] Dark mode, responsive (mobile/desktop) y calculadora verificados.
- [ ] Analytics verificado (network tab: collect de GA4 y pixel de Meta).

---

# TASK-007: Limpieza de Vite y react-router

## Metadata
- **Feature**: next-migration
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-006

## Contexto
Con el QA aprobado, eliminar la toolchain vieja: archivos de Vite, entry points del SPA, el plugin de SEO y las dependencias obsoletas de `package.json` (`vite`, `@vitejs/plugin-react`, `@tailwindcss/vite`, `react-router-dom`, plugins de eslint de Vite). Ajustar eslint a la config de Next si aplica.

## Archivos
```
CREAR:   (ninguno)
ELIMINAR: vite.config.ts, index.html, src/main.tsx, src/App.tsx, src/routes/AppRoutes.tsx, src/plugins/staticSeoPlugin.ts, src/vite-env.d.ts
MODIFICAR: package.json, eslint.config.js, tsconfig.json
```

## Limites
- NO eliminar `src/stubs/empty-player.tsx` (lo sigue usando el alias de Next).
- NO eliminar `src/seo/seo.json` (fuente de verdad de la Metadata API).

## Criterio de aceptacion
- [ ] `npm run build` y `npm run lint` pasan limpios tras la limpieza.
- [ ] `npm ls react-router-dom vite` no encuentra las dependencias.
- [ ] El export final es idéntico al aprobado en TASK-006.
