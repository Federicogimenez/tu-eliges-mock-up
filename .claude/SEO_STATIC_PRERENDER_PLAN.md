# SEO Static Content - Pre-rendering Ligero para Cava Central

## Problema

El sitio web es una SPA (React + Vite) que sirve un `index.html` con `<div id="root"></div>` vacío.
Los bots de búsqueda y agentes de IA que no ejecutan JavaScript ven:

- Sin contenido HTML significativo
- Sin meta tags (og, description, twitter) — se inyectan vía JS con el hook `useSEO`
- Solo el título por defecto "Cava Central - Vinos Premium"

Esto causa mala indexación y nula comprensión del sitio por parte de crawlers.

---

## Solución: Pre-rendering Estático en Build Time

### Concepto

Crear un **plugin de Vite** que en build time genera archivos `index.html` específicos por ruta con:

1. **Meta tags completos** en `<head>` (og, twitter, description, canonical, JSON-LD)
2. **Contenido HTML estático semántico** dentro de `<div id="root">`
3. Los mismos `<script>` tags del SPA — React se monta y reemplaza el contenido estático

### ¿Por qué funciona?

- `createRoot().render()` de React reemplaza todo el contenido de `#root` al montar la app.
- Los bots ven el HTML estático con meta tags correctos.
- Los usuarios ven la app React normalmente (el contenido estático actúa como loader visual).

### ¿Por qué funciona con Nginx?

La config actual usa `try_files $uri $uri/ /index.html`.
Si creamos `dist/tienda/index.html`, Nginx lo sirve automáticamente para `/tienda`.

```
Bot visita /          → Nginx sirve dist/index.html              (contenido estático de home)
Bot visita /tienda    → Nginx sirve dist/tienda/index.html       (contenido estático de tienda)
Bot visita /nosotros  → Nginx sirve dist/nosotros/index.html     (historia de Cava Central)
Bot visita /blog      → Nginx sirve dist/blog/index.html         (historia + invitación al blog)
Bot visita /blog/slug → Nginx sirve dist/blog/index.html         (historia como fallback del artículo)
Usuario visita /      → Mismo HTML, pero React se monta y reemplaza el contenido
```

---

## Archivos a Crear

### 1. `web/src/components/statics-crawlers/home.html` — Fragmento estático para Home (`/`)

Contenido HTML semántico con:
- Header/nav con links principales (tienda, blog, nosotros)
- `<h1>` de bienvenida y descripción del negocio
- Secciones descriptivas de colecciones
- CTAs a Tienda y Blog
- Footer con info de contacto (dirección, teléfono, email)
- Datos estructurados JSON-LD (`LocalBusiness`)

### 2. `web/src/components/statics-crawlers/tienda.html` — Fragmento estático para Tienda (`/tienda`)

Contenido HTML semántico con:
- `<h1>` "Tienda de Vinos Premium"
- Descripción de la tienda y catálogo
- Links a categorías principales
- Texto sobre filtros y búsqueda disponibles
- Datos estructurados JSON-LD (`Store` / `ItemList`)

### 3. `web/src/components/statics-crawlers/historia.html` — Fragmento estático compartido para `/nosotros`, `/blog` y `/blog/:slug`

Un único archivo HTML semántico que narra la historia de Cava Central, reutilizado en las tres rutas.
Contenido:
- `<h1>` "Cava Central — Coleccionando los Mejores Vinos del Mundo"
- Historia y trayectoria de Cava Central: su pasión por los vinos, viñedos y bodegas
- Experiencia recorriendo regiones vitivinícolas de Argentina y el mundo
- Filosofía de selección: curación artesanal de etiquetas premium
- Relación con bodegas, enólogos y terroirs destacados
- Invitación a explorar el blog para descubrir notas, maridajes y la cultura del vino
- Links de navegación a home, tienda, blog
- Footer con datos de contacto
- Datos estructurados JSON-LD (`Organization`)

### 4. `web/src/components/statics-crawlers/seo.json` — Configuración SEO por ruta

Define meta tags específicos por ruta:

```json
{
  "/": {
    "title": "Cava Central - Vinos Premium de Argentina y el Mundo",
    "description": "Descubrí los mejores vinos premium de Argentina y el mundo...",
    "type": "website",
    "staticFile": "home.html"
  },
  "/tienda": {
    "title": "Tienda | Cava Central - Vinos Premium",
    "description": "Explorá nuestra selección completa de vinos premium...",
    "type": "website",
    "staticFile": "tienda.html"
  },
  "/nosotros": {
    "title": "Nosotros | Cava Central - Nuestra Historia",
    "description": "Conocé la historia de Cava Central: pasión por los vinos, viñedos y bodegas, coleccionando experiencias y los mejores vinos del mundo.",
    "type": "website",
    "staticFile": "historia.html"
  },
  "/blog": {
    "title": "Blog | Cava Central - Notas, Maridajes y Cultura del Vino",
    "description": "Explorá nuestro blog: artículos sobre vinos, maridajes, catas, viñedos y las últimas tendencias del mundo vitivinícola.",
    "type": "website",
    "staticFile": "historia.html"
  },
  "/blog/:slug": {
    "title": "Blog | Cava Central",
    "description": "Cava Central: pasión por los vinos, viñedos y bodegas. Descubrí artículos, notas de cata y experiencias del mundo del vino.",
    "type": "article",
    "staticFile": "historia.html"
  }
}
```

### 5. `web/src/plugins/staticSeoPlugin.ts` — Plugin de Vite

Plugin post-build que:

1. Lee `dist/index.html` generado por Vite como plantilla base
2. Por cada ruta en `seo.json`:
   - Inyecta meta tags en `<head>` (og, twitter, description, canonical, JSON-LD)
   - Inyecta el HTML estático de `src/components/statics-crawlers/*.html` dentro de `<div id="root">...</div>`
   - Escribe el archivo en la ruta correspondiente (`dist/index.html`, `dist/tienda/index.html`)
3. Mantiene TODOS los scripts y assets originales del SPA intactos

---

## Archivos a Modificar

### 6. `vite.config.ts`

Registrar el plugin:

```ts
import { staticSeoPlugin } from './src/plugins/staticSeoPlugin';

export default defineConfig({
  plugins: [react(), staticSeoPlugin()],
  // ...resto de config
});
```

### 7. `index.html` — Meta tags base como fallback

Agregar meta tags base para rutas que no tienen pre-rendering:

```html
<meta name="description" content="Descubrí los mejores vinos premium...">
<meta property="og:title" content="Cava Central - Vinos Premium">
<meta property="og:description" content="...">
<meta property="og:image" content="/og-image.jpg">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
```

---

## Sobre Blog y Nosotros

Las rutas `/nosotros`, `/blog` y `/blog/:slug` comparten el mismo fragmento estático (`historia.html`).
Este contenido narra la historia de Cava Central, su experiencia con vinos, viñedos y bodegas,
y funciona como representación institucional del sitio para cualquier crawler que acceda a estas rutas.

Para `/blog/:slug` en particular, el contenido dinámico del artículo individual no se puede
pre-renderizar de forma estática. El fragmento de historia actúa como fallback rico en contenido
y contexto. Opciones futuras para artículos individuales:

- Generar páginas estáticas al publicar un artículo (build con API call)
- Implementar SSR puntual solo para artículos (ej: worker de Cloudflare o endpoint en el backend)

---

## Verificación

1. `npm run build` en `packages/web` → verificar que genera:
   - `dist/index.html` (home)
   - `dist/tienda/index.html`
   - `dist/nosotros/index.html`
   - `dist/blog/index.html`
2. Inspeccionar `dist/index.html` → confirmar meta tags y contenido estático de home
3. Inspeccionar `dist/tienda/index.html` → confirmar meta tags y contenido de tienda
4. Inspeccionar `dist/nosotros/index.html` y `dist/blog/index.html` → confirmar que ambos tienen el contenido de historia
5. `npm run preview` → verificar que `/`, `/tienda`, `/nosotros` y `/blog` cargan correctamente
6. Deshabilitar JS en el navegador → verificar que se ve contenido HTML semántico en cada ruta
7. Con JS habilitado → verificar que React se monta normalmente sin errores

---

## Estructura Final

```
packages/web/
├── docs/
│   └── SEO_STATIC_PRERENDER_PLAN.md            ← este documento
├── src/
│   ├── components/
│   │   └── statics-crawlers/
│   │       ├── home.html                        ← fragmento estático para /
│   │       ├── tienda.html                      ← fragmento estático para /tienda
│   │       ├── historia.html                    ← fragmento estático para /nosotros, /blog y /blog/:slug
│   │       └── seo.json                         ← config de meta tags por ruta
│   └── plugins/
│       └── staticSeoPlugin.ts                   ← plugin de Vite (post-build)
├── index.html                                    ← mejorado con meta tags base
├── vite.config.ts                                ← registra el plugin
└── ...
```
