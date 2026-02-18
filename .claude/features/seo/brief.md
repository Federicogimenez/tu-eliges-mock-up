# Feature: SEO Bot-Only Indexation Layer

## Estado: ACTIVA (6/7 completadas, prerender-build diferida)
## Prioridad: P0
## Rol asignado: Feature Dev

---

## Objetivo
El sitio es una SPA que sirve un `index.html` vacio a crawlers. Google, ChatGPT, Perplexity y otros bots no pueden leer el contenido ni el storytelling del producto. Esta feature construye una capa de SEO invisible para usuarios reales que permite a los bots indexar correctamente cada ruta con contenido semantico rico, datos estructurados y meta tags diferenciados — transmitiendo la propuesta de valor B2C completa y la oportunidad B2B.

## Alcance

### Incluido
- Archivos estaticos para bots: `robots.txt`, `sitemap.xml`, `llms.txt` en `public/`
- Bloque `<noscript>` semantico en `index.html` con storytelling B2C + mencion B2B (invisible con JS habilitado)
- JSON-LD structured data global en `index.html` (Organization, WebSite)
- Per-page meta tags dinamicos via custom hook `usePageMeta` (title, description, canonical, OG, Twitter por ruta)
- JSON-LD por pagina (Product, FAQPage, BreadcrumbList) inyectado via helper `useJsonLd`
- Hooks reutilizables en `src/hooks/` — cero dependencias externas
- Pre-renderizado en build time con `vite-plugin-prerender` para generar HTML estatico por ruta

### Excluido
- SSR / migracion a Next.js o Remix (fuera de scope, este proyecto es SPA puro)
- Cambios visuales a componentes existentes (la UI no cambia para el usuario real)
- Contenido editorial / blog / content marketing
- Dynamic rendering via Cloudflare Workers o Netlify Edge Functions (evaluable en futuro)
- Cambios al sistema de rutas, al DOM visible, ni a componentes de layout

## Estado actual del codigo

### index.html
- Meta tags genericos: un solo `<title>` y `<description>` compartido por todas las rutas
- OG y Twitter cards basicos apuntando a `https://uchooseit.us/`
- `<noscript>` contiene solo el pixel de Facebook (1x1 img tracking)
- No hay JSON-LD de ningun tipo
- No hay referencia a sitemap

### public/
- Existe `_redirects` para SPA catch-all
- No existe `robots.txt`, `sitemap.xml`, ni `llms.txt`

### vite.config.ts
- Solo plugins `@vitejs/plugin-react` y `@tailwindcss/vite`
- No hay plugin de pre-rendering

### Dependencias
- No hay `vite-plugin-prerender` instalado
- No se usara `react-helmet-async` — se reemplaza por hooks custom sin dependencias

## Archivos permitidos (scope)
```
CREAR:
  public/robots.txt
  public/sitemap.xml
  public/llms.txt
  src/hooks/usePageMeta.ts
  src/hooks/useJsonLd.ts

MODIFICAR:
  index.html                                        (JSON-LD global, noscript semantico)
  src/features/home/Home.tsx                        (usePageMeta + useJsonLd)
  src/features/shop/Shop.tsx                        (usePageMeta + useJsonLd)
  src/features/travel/Travel.tsx                    (usePageMeta + useJsonLd)
  src/features/dining/Dining.tsx                    (usePageMeta + useJsonLd)
  src/features/entertainment/Entertainment.tsx      (usePageMeta + useJsonLd)
  src/features/business/Business.tsx                (usePageMeta + useJsonLd)
  src/shared/layout/Faqs.tsx                        (FAQPage JSON-LD via useJsonLd)
  vite.config.ts                                    (pre-render plugin)
  package.json                                      (vite-plugin-prerender devDep)

NO TOCAR:
  src/shared/layout/Main.tsx
  src/context/**
  src/hooks/**
  src/main.tsx
  src/shared/layout/Main.tsx
  src/shared/layout/HeroVideo.tsx | HeroOverlay.tsx
  src/shared/components/SavingsCalculator/**
  src/shared/layout/Footer.tsx
  src/shared/layout/HeroTrendy.tsx
```

## Dependencias
- Ninguna feature previa requerida (SEO es independiente del estado de refactorize)
- Dependencia npm nueva: `vite-plugin-prerender` (+ `puppeteer` como devDep) — solo para la fase de pre-render
- Sin dependencias nuevas para meta tags ni JSON-LD (hooks custom con DOM API nativo)

## Criterios de aceptacion
1. `robots.txt` accesible en la raiz con directivas para bots de busqueda y bots de IA
2. `sitemap.xml` lista las 7 rutas publicas principales con prioridades correctas
3. `llms.txt` describe el negocio en formato markdown legible por bots de IA
4. `<noscript>` en `index.html` contiene HTML semantico con headings, links, navegacion y descripcion B2C + B2B
5. Cada ruta publica tiene `<title>`, `<meta description>`, `<link canonical>`, OG y Twitter tags unicos
6. JSON-LD Organization + WebSite presentes en todas las paginas
7. JSON-LD FAQPage presente donde se renderizan FAQs
8. JSON-LD BreadcrumbList presente en paginas de categoria
9. `vite build` genera archivos HTML pre-renderizados para las 7 rutas principales
10. Un usuario real con JS habilitado no ve ningun contenido adicional — la UI es identica
11. `npm run build` pasa sin errores TypeScript
12. No hay console errors en dev mode

## Estructura de la feature
```
features/seo/
  brief.md            → este archivo
  feature-brief.md    → storytelling y mensaje a indexar (B2C + B2B)
  tasks.md            → backlog de tareas
  doc/                → registro de tareas completadas (usar templates/task-doc.md)
```

---

*Creado por: Arquitecto*
*Fecha: 2026-02-17*
