# SEO Static Pre-rendering — Backlog de Tareas

## Feature: seo
## Estado global: COMPLETADA (6/6 completadas)

---

| ID | Titulo | Estado | Dependencias |
|----|--------|--------|-------------|
| static-files | robots.txt + sitemap.xml + llms.txt | completada | ninguna |
| json-ld-global | JSON-LD global (Organization + WebSite) en index.html | completada | ninguna |
| seo-config | Configuracion SEO por ruta (seo.json) | completada | ninguna |
| html-fragments | Fragmentos HTML semanticos por ruta | completada | ninguna |
| static-seo-plugin | Plugin Vite staticSeoPlugin.ts | completada | seo-config, html-fragments |
| build-verification | Integracion, build y verificacion | completada | static-seo-plugin, json-ld-global |

---

### static-files: robots.txt + sitemap.xml + llms.txt

- **Feature**: seo
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: ninguna

**Contexto**:
Crear tres archivos estaticos en `public/` que los bots consumen directamente. `robots.txt` define permisos de crawling y apunta al sitemap. `sitemap.xml` lista las 7 rutas publicas con prioridades. `llms.txt` describe el negocio en markdown para bots de IA (GPTBot, ClaudeBot, PerplexityBot). Estos archivos se sirven desde la raiz del dominio sin pasar por el SPA.

**Archivos**:
```
CREAR: public/robots.txt, public/sitemap.xml, public/llms.txt
```

**Limites**:
- No incluir rutas transaccionales en sitemap (`/thank-you`, `/activate`)
- No incluir rutas de afiliados individuales (`/agency`, `/influencer`, `/company`, `/non-profit`)
- No bloquear bots de IA — deben tener acceso completo
- Los archivos son puramente estaticos, sin logica

**Criterio de aceptacion**:
- [ ] `robots.txt` tiene directivas Allow/Disallow correctas, incluye User-agent para GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended, y referencia a Sitemap
- [ ] `sitemap.xml` lista exactamente 7 URLs: `/`, `/shop`, `/travel`, `/dining`, `/entertainment`, `/product`, `/business` con prioridades (home=1.0, categorias=0.9, product=0.8, business=0.7)
- [ ] `llms.txt` contiene descripcion del negocio en markdown: que es UChooseIt, las 4 categorias con cifras, la oferta B2B, pricing, y links a las paginas principales
- [ ] Verificar que `_redirects` no intercepta estos archivos (los archivos en `public/` se sirven directamente)

**Notas del Arquitecto**:
Consultar `storytelling.md` para el contenido exacto del storytelling B2C y B2B que debe reflejarse en `llms.txt`. Las cifras clave (precios, ubicaciones, marcas) estan documentadas ahi.

El `robots.txt` debe permitir explicitamente los bots de IA por nombre:
```
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: OAI-SearchBot
Allow: /
```

Disallow para rutas transaccionales:
```
User-agent: *
Disallow: /thank-you
Disallow: /activate
```

---

### json-ld-global: JSON-LD global (Organization + WebSite) en index.html

- **Feature**: seo
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: ninguna

**Contexto**:
Agregar un bloque `<script type="application/ld+json">` en el `<head>` de `index.html` con un `@graph` que contenga los schemas Organization y WebSite de Schema.org. Estos schemas son globales (aplican a todas las paginas) y ayudan a Google a entender la entidad detras del sitio. Ademas, el plugin los heredara en cada pagina pre-renderizada.

**Archivos**:
```
MODIFICAR: index.html
```

**Limites**:
- No agregar schemas especificos de pagina aqui (Product, FAQ, Breadcrumb van en seo.json para el plugin)
- No modificar los meta tags OG/Twitter existentes en esta tarea
- Solo un bloque `<script type="application/ld+json">` con el `@graph`
- Colocar el bloque ANTES del script del Meta Pixel

**Criterio de aceptacion**:
- [ ] `<script type="application/ld+json">` presente en `<head>` antes del Meta Pixel
- [ ] Schema `Organization` con: name "UChooseIt", legalName "Uchooseit.us LLC", url, logo (ImageObject con `/iso.png`), description, areaServed "US", contactPoint (telephone "+1-888-556-2393", email "support@uchooseit.us"), sameAs (Instagram, TikTok, Facebook, YouTube, LinkedIn)
- [ ] Schema `WebSite` con: url, name "UChooseIt.us", publisher (ref a Organization via `@id`)
- [ ] JSON valido (estructura @context, @graph correcta)
- [ ] Los IDs usan formato `https://uchooseit.us/#organization` y `https://uchooseit.us/#website` para cross-referencing con schemas por pagina

**Notas del Arquitecto**:
Usar `@id` references para vincular Organization y WebSite:
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://uchooseit.us/#organization",
      "name": "UChooseIt",
      "legalName": "Uchooseit.us LLC",
      "url": "https://uchooseit.us",
      "logo": { "@type": "ImageObject", "url": "https://uchooseit.us/iso.png", "width": 512, "height": 512 },
      "image": "https://uchooseit.us/site_preview.png",
      "description": "UChooseIt is a VIP discount membership program offering up to 50% off at over 1 million locations across the United States.",
      "areaServed": "US",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-888-556-2393",
        "email": "support@uchooseit.us",
        "contactType": "customer service",
        "availableLanguage": ["English", "Spanish"]
      },
      "sameAs": [
        "https://www.instagram.com/uchooseit.us/",
        "https://www.tiktok.com/@uchooseit.us",
        "https://www.facebook.com/Uchooseit.us/",
        "https://youtube.com/@uchooseit",
        "https://www.linkedin.com/company/uchooseit-us"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://uchooseit.us/#website",
      "url": "https://uchooseit.us",
      "name": "UChooseIt.us",
      "publisher": { "@id": "https://uchooseit.us/#organization" }
    }
  ]
}
```

---

### seo-config: Configuracion SEO por ruta (seo.json)

- **Feature**: seo
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: ninguna

**Contexto**:
Crear `src/seo/seo.json` que define la configuracion SEO para cada ruta publica. Este archivo es consumido por el plugin `staticSeoPlugin.ts` en build time para generar los HTML pre-renderizados. Cada entrada define: meta tags (title, description, canonical, og:type), referencia al fragmento HTML, y schemas JSON-LD especificos de esa pagina.

**Archivos**:
```
CREAR: src/seo/seo.json
```

**Limites**:
- Solo las 7 rutas publicas principales — no incluir rutas transaccionales ni de afiliados
- Los schemas JSON-LD por pagina NO incluyen Organization/WebSite (esos son globales en index.html y el plugin los hereda)
- Los textos de meta tags deben estar en ingles
- No incluir logica — es un archivo de datos puro

**Criterio de aceptacion**:
- [ ] El archivo tiene exactamente 7 entradas: `/`, `/shop`, `/travel`, `/dining`, `/entertainment`, `/business`, `/product`
- [ ] Cada entrada tiene: `title` (~60 chars), `description` (~155 chars), `canonical`, `type` (og:type), `staticFile` (nombre del fragmento HTML), `jsonLd` (array de schemas)
- [ ] Home (`/`) incluye schema Product (VIP Membership, $47.99, USD, InStock)
- [ ] Categorias (`/shop`, `/travel`, `/dining`, `/entertainment`) incluyen schema BreadcrumbList (Home > Categoria)
- [ ] Product (`/product`) incluye schema Product
- [ ] Business (`/business`) incluye schema BreadcrumbList (Home > Business Partners)
- [ ] JSON valido y parseable

**Notas del Arquitecto**:
Estructura de cada entrada en seo.json:
```json
{
  "/shop": {
    "title": "Shopping Discounts — UChooseIt VIP Membership",
    "description": "Exclusive member discounts at 175,000+ retail locations. Save on tech, fashion, home & more with brands like Lenovo, Samsung & Chewy.",
    "canonical": "https://uchooseit.us/shop",
    "type": "website",
    "staticFile": "shop.html",
    "jsonLd": [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://uchooseit.us/" },
          { "@type": "ListItem", "position": 2, "name": "Shop Discounts", "item": "https://uchooseit.us/shop" }
        ]
      }
    ]
  }
}
```

Tabla de meta tags sugeridos:

| Ruta | Title | Description |
|------|-------|-------------|
| `/` | UChooseIt.us — Save Up to 50% on Dining, Travel, Shopping & Entertainment | One VIP membership, 1 million+ deals across the US. Save $2,000+/year on restaurants, hotels, retail & theme parks for less than $4/month. |
| `/shop` | Shopping Discounts — UChooseIt VIP Membership | Exclusive member discounts at 175,000+ retail locations. Save on tech, fashion, home & more with brands like Lenovo, Samsung & Chewy. |
| `/travel` | Travel Deals & Hotel Discounts — UChooseIt | Member-only savings on 850,000+ hotels, flights, cruises & car rentals. Book with Wyndham, Avis, Carnival & more for less. |
| `/dining` | Restaurant Discounts — UChooseIt Membership | Save at 50,000+ restaurants nationwide. Member deals at Papa John's, Burger King, Domino's, Subway & local favorites. |
| `/entertainment` | Entertainment & Theme Park Discounts — UChooseIt | Save on movies, golf, museums & theme parks. Member discounts at Disney, Universal, Six Flags, Cinemark & more. |
| `/business` | B2B Partnership \| UChooseIt | Offer 1M+ discounts to your audience. Revenue share (30%) or bulk licensing for companies, nonprofits & associations. |
| `/product` | Get Your UChooseIt Membership — Plans & Pricing | Join UChooseIt for $47.99/year and start saving at 1M+ locations. 7-day refund guarantee. Cancel anytime. |

Incluir tambien schema FAQPage en las rutas que renderizan FAQs. Verificar `src/shared/routes.ts` — las rutas en `NO_FAQS_PAGES` no tienen FAQs, las demas si. Rutas con FAQs: `/`, `/shop`, `/travel`, `/dining`, `/entertainment`, `/product`.

---

### html-fragments: Fragmentos HTML semanticos por ruta

- **Feature**: seo
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: ninguna

**Contexto**:
Crear 7 archivos HTML en `src/seo/fragments/` con contenido semantico para cada ruta. Estos fragmentos se inyectan dentro de `<div id="root">` por el plugin en build time. NO son documentos HTML completos — son fragmentos (sin `<html>`, `<head>`, `<body>`). React reemplaza este contenido al montar con `createRoot().render()`.

El contenido debe ser semantico (headings, paragraphs, lists, links) y transmitir la propuesta de valor de cada pagina. Los bots lo leen como contenido de la pagina. Los usuarios con JS nunca lo ven (React lo reemplaza inmediatamente).

**Archivos**:
```
CREAR:
  src/seo/fragments/home.html
  src/seo/fragments/shop.html
  src/seo/fragments/travel.html
  src/seo/fragments/dining.html
  src/seo/fragments/entertainment.html
  src/seo/fragments/business.html
  src/seo/fragments/product.html
```

**Limites**:
- Solo HTML semantico — NO incluir `<style>`, `<script>`, clases CSS, ni atributos de presentacion
- NO son documentos completos — sin `<!doctype>`, `<html>`, `<head>`, `<body>`
- El contenido debe reflejar fielmente el storytelling documentado en `storytelling.md`
- Los textos deben estar en ingles
- Cada fragmento debe ser autocontenido (no depender de otros fragmentos)

**Criterio de aceptacion**:
- [ ] Cada fragmento contiene al menos: un `<h1>`, una `<nav>` con links a las demas rutas principales, un `<main>` con secciones descriptivas, y un `<footer>` con contacto
- [ ] `home.html`: propuesta de valor completa, 4 categorias con links y cifras, pricing ($47.99/year), beneficios, mencion B2B
- [ ] `shop.html`: enfoque en shopping, 175K ubicaciones, marcas (Lenovo, Samsung, Chewy), testimonios, link a Home y otras categorias
- [ ] `travel.html`: enfoque en travel, 850K ubicaciones, marcas (Wyndham, Avis, Carnival), testimonios, link a Home y otras categorias
- [ ] `dining.html`: enfoque en dining, 50K ubicaciones, marcas (Papa John's, Burger King, Domino's), testimonios, link a Home y otras categorias
- [ ] `entertainment.html`: enfoque en entertainment, 50K ubicaciones, marcas (Disney, Universal, Six Flags), testimonios, link a Home y otras categorias
- [ ] `business.html`: B2B partnership, dos modelos (Revenue Share 30%, Bulk Enterprise), tipos de organizaciones, proceso de onboarding
- [ ] `product.html`: pricing, value proposition, como funciona la membresia, garantia, CTA
- [ ] Todos los fragmentos tienen links de navegacion cruzada (nav con las 7 rutas)

**Notas del Arquitecto**:
Estructura sugerida para cada fragmento:
```html
<header>
  <h1>[Titulo de la pagina]</h1>
  <p>[Subtitulo / tagline]</p>
  <nav>
    <a href="/">Home</a> |
    <a href="/shop">Shop</a> |
    <a href="/travel">Travel</a> |
    <a href="/dining">Dining</a> |
    <a href="/entertainment">Entertainment</a> |
    <a href="/product">Get Membership</a> |
    <a href="/business">Business Partners</a>
  </nav>
</header>
<main>
  <section><!-- contenido principal --></section>
  <section><!-- contenido secundario --></section>
</main>
<footer>
  <p>UChooseIt.us — Your VIP key to everyday savings.</p>
  <p>Contact: <a href="mailto:support@uchooseit.us">support@uchooseit.us</a> | Phone: (888) 556-2393</p>
  <p>Uchooseit.us LLC — Orlando, FL, USA</p>
</footer>
```

**IMPORTANTE**: El contenido dentro de `<div id="root">` tambien funciona como loading placeholder visual antes de que React monte. Aunque no tiene estilos, el texto plano aparece brevemente. Mantener el contenido limpio y profesional.

Consultar `storytelling.md` para todo el contenido narrativo, cifras, y marcas por categoria.

---

### static-seo-plugin: Plugin Vite staticSeoPlugin.ts

- **Feature**: seo
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: seo-config, html-fragments

**Contexto**:
Crear un plugin de Vite custom en `src/plugins/staticSeoPlugin.ts` que se ejecuta en `closeBundle` (post-build). El plugin lee `dist/index.html` como plantilla base, lee `src/seo/seo.json` para obtener la configuracion por ruta, y para cada ruta genera un archivo HTML especifico con meta tags, JSON-LD, y contenido semantico inyectados.

**Archivos**:
```
CREAR: src/plugins/staticSeoPlugin.ts
```

**Limites**:
- Solo usar APIs de Node.js nativas (`fs`, `path`) — no instalar dependencias
- No modificar el `dist/index.html` original — crear copias modificadas por ruta
- No ejecutar Puppeteer ni ningun browser headless
- El plugin debe ser idempotente (correr multiples veces produce el mismo resultado)
- No importar archivos de `src/seo/` en runtime — solo leerlos con `fs` en build time

**Criterio de aceptacion**:
- [ ] El plugin exporta una funcion que retorna un objeto Vite plugin con `name` y `closeBundle`
- [ ] Lee `dist/index.html` como plantilla base despues de que Vite termina el build
- [ ] Lee `src/seo/seo.json` para obtener la configuracion de rutas
- [ ] Para cada ruta en seo.json:
  - [ ] Reemplaza `<title>` con el titulo de la ruta
  - [ ] Reemplaza `<meta name="description" content="...">` con la descripcion de la ruta
  - [ ] Reemplaza `<link rel="canonical" href="...">` con el canonical de la ruta
  - [ ] Reemplaza meta tags OG (og:title, og:description, og:url, og:type) con valores de la ruta
  - [ ] Reemplaza meta tags Twitter (twitter:title, twitter:description, twitter:url) con valores de la ruta
  - [ ] Inyecta schemas JSON-LD de la ruta como `<script type="application/ld+json">` en `<head>` (antes de `</head>`)
  - [ ] Lee el fragmento HTML de `src/seo/fragments/{staticFile}` e inyecta su contenido dentro de `<div id="root">`
  - [ ] Crea el directorio `dist/{ruta}/` si no existe
  - [ ] Escribe el HTML modificado en `dist/{ruta}/index.html`
- [ ] Para la ruta `/` (home), modifica `dist/index.html` directamente (no crea subdirectorio)
- [ ] Mantiene TODOS los scripts y assets originales del SPA intactos (JS bundles, CSS, Meta Pixel)
- [ ] Log en consola las rutas procesadas para visibilidad durante el build
- [ ] `npm run build` completa sin errores

**Notas del Arquitecto**:
El plugin usa el hook `closeBundle` (no `generateBundle`) porque necesita leer los archivos ya escritos en `dist/`.

Estructura sugerida:
```ts
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import type { Plugin } from 'vite';

export function staticSeoPlugin(): Plugin {
  return {
    name: 'static-seo-plugin',
    apply: 'build',
    closeBundle() {
      const distDir = resolve(__dirname, '../../dist');
      const seoDir = resolve(__dirname, '../seo');

      const template = readFileSync(resolve(distDir, 'index.html'), 'utf-8');
      const config = JSON.parse(readFileSync(resolve(seoDir, 'seo.json'), 'utf-8'));

      for (const [route, seo] of Object.entries(config)) {
        let html = template;

        // 1. Reemplazar meta tags en <head>
        html = replaceMeta(html, seo);

        // 2. Inyectar JSON-LD
        html = injectJsonLd(html, seo.jsonLd);

        // 3. Inyectar fragmento HTML en <div id="root">
        const fragment = readFileSync(resolve(seoDir, 'fragments', seo.staticFile), 'utf-8');
        html = html.replace('<div id="root"></div>', `<div id="root">${fragment}</div>`);

        // 4. Escribir archivo
        const outPath = route === '/'
          ? resolve(distDir, 'index.html')
          : resolve(distDir, route.slice(1), 'index.html');
        mkdirSync(dirname(outPath), { recursive: true });
        writeFileSync(outPath, html);

        console.log(`[static-seo] Generated: ${route}`);
      }
    },
  };
}
```

Funciones auxiliares a implementar:
- `replaceMeta(html, seo)` — busca y reemplaza contenido de tags existentes via regex o string replace
- `injectJsonLd(html, schemas)` — inyecta `<script type="application/ld+json">` antes de `</head>`

**IMPORTANTE**: Usar `readFileSync`/`writeFileSync` (sincronos) porque `closeBundle` puede ser sync o async. Si se usa async, asegurarse de que el hook retorna una Promise.

**IMPORTANTE**: El `__dirname` puede no estar disponible en ESM. Verificar si `vite.config.ts` usa ESM o CJS y ajustar el import path. Alternativa segura: usar `import.meta.url` con `fileURLToPath` si es ESM, o recibir el root path como parametro del plugin.

---

### build-verification: Integracion, build y verificacion

- **Feature**: seo
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: static-seo-plugin, json-ld-global

**Contexto**:
Registrar el plugin en `vite.config.ts`, ejecutar `npm run build`, e inspeccionar que los archivos generados sean correctos. Esta tarea es de integracion y QA — no crea contenido nuevo, sino que conecta las piezas y verifica el resultado.

**Archivos**:
```
MODIFICAR: vite.config.ts
```

**Limites**:
- No modificar el plugin ni los fragmentos en esta tarea — si algo falla, documentar el problema y crear una tarea de fix
- No cambiar ningun componente de feature
- No instalar dependencias nuevas

**Criterio de aceptacion**:
- [ ] `vite.config.ts` importa y registra `staticSeoPlugin` en el array de plugins
- [ ] `npm run build` completa sin errores
- [ ] `dist/index.html` tiene: meta tags de home, JSON-LD global + Product, contenido de `home.html` dentro de `<div id="root">`
- [ ] `dist/shop/index.html` existe y tiene: meta tags de shop, JSON-LD BreadcrumbList, contenido de `shop.html`
- [ ] `dist/travel/index.html` existe y tiene: meta tags de travel, JSON-LD BreadcrumbList, contenido de `travel.html`
- [ ] `dist/dining/index.html` existe y tiene: meta tags de dining, JSON-LD BreadcrumbList, contenido de `dining.html`
- [ ] `dist/entertainment/index.html` existe y tiene: meta tags de entertainment, JSON-LD BreadcrumbList, contenido de `entertainment.html`
- [ ] `dist/business/index.html` existe y tiene: meta tags de business, JSON-LD BreadcrumbList, contenido de `business.html`
- [ ] `dist/product/index.html` existe y tiene: meta tags de product, contenido de `product.html`
- [ ] Todos los HTML generados mantienen los `<script>` del SPA intactos (el bundle JS sigue presente)
- [ ] `npm run preview` carga la app correctamente en `/`, `/shop`, y al menos una ruta mas
- [ ] Los archivos `robots.txt`, `sitemap.xml`, `llms.txt` estan presentes en `dist/`

**Notas del Arquitecto**:
El registro en `vite.config.ts` es simple:
```ts
import { staticSeoPlugin } from './src/plugins/staticSeoPlugin'

export default defineConfig({
  plugins: [react(), tailwindcss(), staticSeoPlugin()],
})
```

Para verificar el output, inspeccionar manualmente al menos 3 archivos HTML generados:
1. Verificar que `<title>` es unico por ruta
2. Verificar que `<div id="root">` contiene HTML semantico (no esta vacio)
3. Verificar que los `<script>` del SPA estan presentes
4. Verificar que el JSON-LD global (Organization + WebSite) esta presente
5. Verificar que el JSON-LD especifico de la ruta esta presente

Si `npm run preview` no resuelve las rutas correctamente por la estructura de directorios, documentarlo como nota. En produccion (AWS/Nginx) la resolucion funciona diferente que en el preview server de Vite. Lo importante es que los archivos existan en `dist/` con el contenido correcto.
