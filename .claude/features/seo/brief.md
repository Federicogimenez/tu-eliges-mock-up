# Feature: SEO Static Pre-rendering

## Estado: ACTIVA (6/6 base completadas + 1 fix pendiente)
## Prioridad: P0
## Rol asignado: Feature Dev

---

## Objetivo
El sitio es una SPA (React + Vite) que sirve un `index.html` con `<div id="root"></div>` vacio. Los bots de busqueda y agentes de IA que no ejecutan JavaScript ven una pagina en blanco: sin contenido, sin meta tags por ruta, sin JSON-LD. Esto causa indexacion nula y el sitio no existe para motores de busqueda ni asistentes de IA.

**Solucion**: Crear un plugin de Vite que en build time genera archivos `index.html` especificos por ruta con meta tags completos en `<head>` y contenido HTML semantico dentro de `<div id="root">`. React se monta y reemplaza el contenido estatico — los bots ven HTML rico, los usuarios ven la app normal.

## Por que este enfoque (vs hooks client-side)

La iteracion anterior uso hooks (`usePageMeta`, `useJsonLd`) que inyectaban meta tags y JSON-LD en runtime via JavaScript. Esto fallo porque los bots que no ejecutan JS (GPTBot, ClaudeBot, Bingbot sin rendering) no veian nada. El bloque `<noscript>` paliaba parcialmente pero no resolvia los meta tags por ruta.

El pre-rendering estatico resuelve todo de raiz:
- **Meta tags en HTML estatico** — no requieren JS para estar presentes
- **Contenido dentro de `<div id="root">`** — visible para TODOS los bots sin excepcion
- **JSON-LD en `<head>`** — indexable sin rendering
- **React reemplaza el contenido al montar** — UX identica para usuarios con JS
- **Cero dependencias npm** — plugin custom con Node.js `fs`/`path` nativos
- **Funciona con cualquier hosting** — genera archivos en `dist/` que cualquier servidor sirve
- **Ningun componente de feature se modifica** — todo el SEO es infraestructura de build

## Alcance

### Incluido
- Archivos estaticos para bots: `robots.txt`, `sitemap.xml`, `llms.txt` en `public/`
- JSON-LD global (Organization + WebSite) en `index.html`
- Configuracion SEO por ruta: `src/seo/seo.json` (meta tags, JSON-LD, fragmento asociado)
- Fragmentos HTML semanticos por ruta: `src/seo/fragments/*.html` (7 archivos)
- Plugin Vite `staticSeoPlugin.ts` que en `closeBundle`:
  1. Lee `dist/index.html` como plantilla base
  2. Para cada ruta en `seo.json`: inyecta meta tags en `<head>`, JSON-LD en `<head>`, HTML estatico dentro de `<div id="root">`
  3. Escribe `dist/{ruta}/index.html` (ej: `dist/shop/index.html`)
- Registro del plugin en `vite.config.ts`

### Excluido
- SSR / migracion a Next.js o Remix
- Cambios visuales a componentes existentes (la UI no cambia para el usuario)
- Hooks client-side para SEO (usePageMeta, useJsonLd) — reemplazados por build-time
- Dynamic rendering via Cloudflare Workers o edge functions
- Pre-rendering con Puppeteer/Chromium (pesado, fragil en CI)
- Contenido editorial / blog / content marketing
- Modificacion de ningun componente en `src/features/`

## Como funciona

```
Bot visita /               -> Servidor sirve dist/index.html (contenido estatico de home)
Bot visita /shop           -> Servidor sirve dist/shop/index.html (contenido de shop)
Bot visita /travel         -> Servidor sirve dist/travel/index.html (contenido de travel)
Bot visita /random-spa-url -> Servidor sirve dist/index.html (fallback SPA catch-all)
Usuario visita /shop       -> Mismo HTML, pero React se monta y reemplaza el contenido
```

### Compatibilidad con hosting
La estructura `dist/{ruta}/index.html` funciona con:
- **S3 + CloudFront** (AWS): S3 resuelve `/shop` -> `shop/index.html` automaticamente
- **Nginx**: `try_files $uri $uri/ /index.html` sirve el archivo especifico primero
- **Netlify**: `_redirects` catch-all sigue funcionando como fallback

## Estado actual del codigo

### index.html
- Meta tags genericos: un solo `<title>` y `<description>` compartido por todas las rutas
- OG y Twitter cards basicos apuntando a `https://uchooseit.us/`
- `<noscript>` contiene solo el pixel de Facebook (1x1 img tracking)
- No hay JSON-LD de ningun tipo
- `<div id="root"></div>` vacio

### vite.config.ts
- Solo plugins `@vitejs/plugin-react` y `@tailwindcss/vite`
- No hay plugins custom

### public/
- Existe `_redirects` para SPA catch-all
- No existe `robots.txt`, `sitemap.xml`, ni `llms.txt`

### Componentes de feature
- Limpios de cualquier logica SEO (hooks removidos en esta iteracion)

## Archivos permitidos (scope)
```
CREAR:
  public/robots.txt
  public/sitemap.xml
  public/llms.txt
  src/seo/seo.json
  src/seo/fragments/home.html
  src/seo/fragments/shop.html
  src/seo/fragments/travel.html
  src/seo/fragments/dining.html
  src/seo/fragments/entertainment.html
  src/seo/fragments/business.html
  src/seo/fragments/product.html
  src/plugins/staticSeoPlugin.ts

MODIFICAR:
  index.html                 (JSON-LD global Organization + WebSite)
  vite.config.ts             (registrar staticSeoPlugin)

NO TOCAR:
  src/features/**            (ningun componente de pagina)
  src/shared/**
  src/hooks/**
  src/context/**
  src/main.tsx
  src/routes/**
  package.json               (no se necesitan dependencias nuevas)
```

## Dependencias
- Ninguna dependencia npm nueva — el plugin usa Node.js `fs` y `path` nativos
- Ninguna feature previa requerida

## Criterios de aceptacion
1. `robots.txt` accesible en la raiz con directivas para bots de busqueda y bots de IA
2. `sitemap.xml` lista las 7 rutas publicas principales con prioridades correctas
3. `llms.txt` describe el negocio en formato markdown legible por bots de IA
4. JSON-LD Organization + WebSite presentes en `index.html` base
5. `vite build` genera archivos HTML en `dist/`, `dist/shop/`, `dist/travel/`, `dist/dining/`, `dist/entertainment/`, `dist/business/`, `dist/product/`
6. Cada HTML generado tiene `<title>`, `<meta description>`, `<link canonical>`, OG y Twitter tags unicos para esa ruta
7. Cada HTML generado tiene JSON-LD relevante (BreadcrumbList en categorias, Product en home, FAQPage en rutas con FAQ)
8. Cada HTML generado tiene contenido semantico dentro de `<div id="root">` con headings, paragraphs, links y listas
9. Un usuario real con JS habilitado ve la app React normalmente — el contenido estatico es reemplazado por React al montar
10. `npm run build` pasa sin errores TypeScript
11. Ningun componente en `src/features/` fue modificado

## Referencia
- `storytelling.md` — storytelling y mensaje B2C/B2B (contenido a usar en fragmentos HTML)
- `.claude/SEO_STATIC_PRERENDER_PLAN.md` — plan de referencia (adaptado de otro proyecto)

## Estructura de la feature
```
features/seo/
  brief.md            -> este archivo
  storytelling.md     -> storytelling y mensaje a indexar (B2C + B2B)
  tasks.md            -> backlog de tareas
  doc/                -> registro de tareas completadas (usar templates/task-doc.md)
```

---

*Creado por: Arquitecto*
*Fecha: 2026-02-18*
