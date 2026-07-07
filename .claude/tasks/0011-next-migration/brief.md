# Feature: next-migration

## Estado: PENDIENTE
## Prioridad: P1
## Rol asignado: Feature Dev

---

## Objetivo
Migrar el sitio de Vite + React Router a **Next.js con exportación estática** (`output: 'export'`) para obtener HTML pre-renderizado por ruta (SEO real, meta tags indexables) sin cambiar la infraestructura de deploy actual (S3 + GitHub Actions). Reemplaza y desbloquea la feature `seo` suspendida.

## Decisión de arquitectura

Se evaluaron dos escenarios:

| Escenario | Deploy actual (S3) | Qué habilita |
|-----------|--------------------|--------------|
| **A. Next `output: 'export'`** (elegido) | Sobrevive con cambio mínimo (directorio de salida) | HTML pre-renderizado por ruta, Metadata API, mejor SEO |
| B. Next completo (SSR/API routes/middleware) | NO sobrevive — requiere Vercel/Amplify/OpenNext | SSR dinámico, ISR, image optimization |

Se elige **A** porque el sitio es marketing puro: no hay datos por-request, el checkout es externo (Recurly) y la lógica de affiliate (`?code=`, localStorage, fetch a `api.tueliges.us`) es client-side y funciona igual en export estático. El costo de B (migrar hosting) no aporta valor hoy.

Implicaciones del modo export:
- `images: { unoptimized: true }` — no hay servidor para `next/image`.
- `trailingSlash: true` — genera `/shop/index.html`, que S3 sirve como índice de carpeta sin tocar reglas de CloudFront.
- Sin SSR, API routes, middleware ni ISR. Todo lo dinámico sigue siendo client-side.

## Alcance

### Incluido
- Setup de Next.js (App Router) con export estático, Tailwind v4 y TypeScript strict.
- Migración de las 14 rutas de `AppRoutes.tsx` a file-based routing (`app/{ruta}/page.tsx`).
- Reemplazo de `react-router-dom` por `next/link` + `next/navigation` en todo `src/`.
- Marcado `'use client'` en providers, hooks y componentes interactivos.
- Migración del SEO estático (`staticSeoPlugin` + `seo.json`) a la Metadata API de Next.
- Reemplazo de los aliases de Vite (stubs de react-player) por su equivalente en `next.config`.
- Actualización del workflow `.github/workflows/uchooseit.yml` al nuevo directorio de salida.
- QA integral: build, rutas, dark mode, flujo de affiliate, calculadora, analytics.

### Excluido
- SSR dinámico, API routes, middleware, ISR (incompatibles con `output: 'export'`).
- Cambio de hosting (se mantiene S3 + GitHub Actions; Netlify sigue solo para preview).
- Rediseño visual o cambios de contenido — la migración es 1:1 en UI.
- Optimización de imágenes con `next/image` (quedan `<img>` como hoy, `unoptimized`).
- `src/features/landing-email-v1-backup/` — no se migra, es backup muerto.

## Estado actual del codigo
- **Build**: Vite 7 (`vite.config.ts`) con `@tailwindcss/vite`, `staticSeoPlugin` custom y aliases que stubean providers no usados de react-player.
- **Entry**: `src/main.tsx` → `src/App.tsx` (providers: Theme → Country → Ally) → `src/routes/AppRoutes.tsx` (BrowserRouter, 14 rutas lazy).
- **Layout**: `src/shared/layout/Main.tsx` envuelve todas las rutas; `useRouteConfig` deriva flags de `src/shared/routes.ts` (HERO_PAGES, NO_FAQS_PAGES, etc.) usando `useLocation`.
- **SEO**: `src/plugins/staticSeoPlugin.ts` genera HTML por ruta en build time desde `src/seo/seo.json` — será reemplazado por la Metadata API.
- **Deploy**: `.github/workflows/uchooseit.yml` — build → artifact `dist/` → sync a S3 `uchooseit.us-front`.
- **Estado global**: Context providers en `src/context/`; hooks en `src/hooks/` (varios dependen de `window`/`localStorage`/query params).

## Archivos permitidos (scope)
```
CREAR:
  next.config.ts
  app/**  (layout.tsx, page.tsx por ruta, providers.tsx)
  postcss.config.mjs (si Tailwind v4 lo requiere)

MODIFICAR:
  package.json, tsconfig.json
  .github/workflows/uchooseit.yml
  src/** (imports de router, 'use client', hooks con window)
  index.css (entrada de Tailwind)

ELIMINAR (al final, en QA):
  vite.config.ts, src/main.tsx, src/App.tsx, src/routes/AppRoutes.tsx,
  src/plugins/staticSeoPlugin.ts, index.html, src/vite-env.d.ts

NO TOCAR:
  src/features/landing-email-v1-backup/
  public/ (assets), .claude/ (salvo esta feature)
```

## Dependencias
- Ninguna feature previa. La feature `seo` (suspendida) queda superseded por esta.

## Criterios de aceptacion
1. `npm run build` genera export estático sin errores de TypeScript.
2. El directorio de salida contiene un `index.html` por cada una de las 14 rutas con su title, description, canonical y JSON-LD correctos (paridad con `seo.json`).
3. Todas las rutas navegan correctamente client-side y en carga directa (deep link).
4. El flujo de affiliate funciona: visitar con `?code=X` muestra el popup del ally, persiste en localStorage y ajusta el checkout de Recurly.
5. La calculadora de ahorros, dark mode (default), traducciones y analytics (GA4 + Meta Pixel) funcionan igual que en producción.
6. El workflow de GitHub Actions deploya el nuevo output a S3 sin cambios de secrets ni bucket.
7. No quedan imports de `react-router-dom` ni dependencias de Vite en `package.json`.

## Estructura de la feature
```
features/next-migration/
  brief.md      → este archivo
  tasks.md      → backlog de tareas
  doc/                → registro de tareas completadas (usar templates/task-doc.md)
    {task-titulo}.md  → una entrada por tarea ejecutada, nombrada por su titulo
```

---

*Creado por: Arquitecto*
*Fecha: 2026-07-06*
