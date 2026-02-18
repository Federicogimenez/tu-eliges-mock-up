# SEO Bot-Only Indexation Layer - Backlog de Tareas

## Feature: seo
## Estado global: ACTIVA (6/7 completadas)

---

| ID | Titulo | Estado | Dependencias |
|----|--------|--------|-------------|
| static-files | robots.txt + sitemap.xml + llms.txt | completada | ninguna |
| noscript-semantic | Bloque noscript semantico en index.html | completada | ninguna |
| json-ld-global | JSON-LD global (Organization + WebSite) en index.html | completada | ninguna |
| seo-hooks | Custom hooks usePageMeta + useJsonLd | completada | ninguna |
| page-meta-tags | Meta tags por pagina en las 7 rutas principales | completada | seo-hooks |
| json-ld-pages | JSON-LD por pagina (FAQPage, BreadcrumbList) via useJsonLd | completada | seo-hooks |
| prerender-build | Pre-renderizado en build time | diferida | page-meta-tags, json-ld-global, json-ld-pages |

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
CREAR:   public/robots.txt, public/sitemap.xml, public/llms.txt
```

**Limites**:
- No incluir rutas transaccionales en sitemap (`/thank-you`, `/activate`)
- No incluir rutas de afiliados individuales (`/agency`, `/influencer`, `/company`, `/non-profit`)
- No bloquear bots de IA — deben tener acceso completo
- Los archivos son puramente estaticos, sin logica

**Criterio de aceptacion**:
- [ ] `robots.txt` tiene directivas Allow/Disallow correctas, incluye User-agent para GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, y referencia a Sitemap
- [ ] `sitemap.xml` lista exactamente 7 URLs: `/`, `/shop`, `/travel`, `/dining`, `/entertainment`, `/product`, `/business` con prioridades (home=1.0, categorias=0.9, product=0.8, business=0.7)
- [ ] `llms.txt` contiene descripcion del negocio en markdown: que es UChooseIt, las 4 categorias, la oferta B2B, y links a las paginas principales
- [ ] Verificar que `_redirects` no intercepta estos archivos (los archivos en `public/` se sirven directamente)

**Notas del Arquitecto**:
Consultar `feature-brief.md` para el contenido exacto del storytelling B2C y B2B que debe reflejarse en `llms.txt`. Las cifras clave (precios, ubicaciones, marcas) estan documentadas ahi.

El `robots.txt` debe permitir explicitamente los bots de IA por nombre:
```
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /
```

---

### noscript-semantic: Bloque noscript semantico en index.html

- **Feature**: seo
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: ninguna

**Contexto**:
El `<noscript>` actual en `index.html` solo contiene el pixel de Facebook (1x1 img). Agregar un segundo bloque `<noscript>` despues de `<div id="root">` con HTML semantico completo: `<header>` con `<h1>` + `<nav>`, `<main>` con secciones descriptivas del negocio B2C, una mencion B2B, y `<footer>`. Este contenido es invisible para usuarios con JS habilitado pero legible por bots que no ejecutan JavaScript (GPTBot, ClaudeBot, Bingbot).

**Archivos**:
```
MODIFICAR: index.html
```

**Limites**:
- No mover ni eliminar el `<noscript>` del pixel de Facebook — mantenerlo como esta
- No agregar estilos CSS ni scripts dentro del noscript
- No duplicar el `<div id="root">` ni interferir con el mount de React
- El contenido debe ser puramente semantico (headings, paragraphs, links, lists)

**Criterio de aceptacion**:
- [ ] Nuevo bloque `<noscript>` presente despues de `<div id="root"></div>`
- [ ] Contiene `<header>` con `<h1>UChooseIt.us — Smart Savings Membership</h1>` y `<nav>` con links a las 7 rutas
- [ ] Contiene `<main>` con al menos 3 `<section>`: propuesta de valor B2C, las 4 categorias con links, y mencion B2B
- [ ] Contiene `<footer>` con datos de contacto, ubicacion y tagline
- [ ] El contenido refleja el storytelling documentado en `feature-brief.md`
- [ ] Con JS habilitado, nada de este contenido es visible al usuario
- [ ] El pixel de Facebook noscript sigue funcionando

**Notas del Arquitecto**:
El noscript es la primera linea de defensa para bots sin JS. Debe contener suficiente contenido semantico para que un bot entienda: que es UChooseIt, que categorias ofrece, cual es el precio, y como contactar. No necesita ser exhaustivo — los JSON-LD y meta tags complementan.

Estructura sugerida:
```html
<noscript>
  <header>
    <h1>...</h1>
    <p>tagline</p>
    <nav>links a rutas</nav>
  </header>
  <main>
    <section><!-- propuesta de valor --></section>
    <section><!-- 4 categorias --></section>
    <section><!-- B2B partnership --></section>
    <section><!-- FAQ resumen --></section>
  </main>
  <footer>contacto + legal</footer>
</noscript>
```

---

### json-ld-global: JSON-LD global (Organization + WebSite) en index.html

- **Feature**: seo
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: ninguna

**Contexto**:
Agregar un bloque `<script type="application/ld+json">` en el `<head>` de `index.html` con un `@graph` que contenga los schemas Organization y WebSite de Schema.org. Estos schemas son globales (aplican a todas las paginas) y ayudan a Google a entender la entidad detras del sitio, mostrar knowledge panels, y mejorar rich results.

**Archivos**:
```
MODIFICAR: index.html
```

**Limites**:
- No agregar schemas especificos de pagina aqui (Product, FAQ, Breadcrumb van via useJsonLd en sus paginas)
- No modificar los meta tags OG/Twitter existentes en esta tarea
- Solo un bloque `<script type="application/ld+json">` con el `@graph`

**Criterio de aceptacion**:
- [ ] `<script type="application/ld+json">` presente en `<head>` antes de `</head>`
- [ ] Schema `Organization` con: name, url, logo (ImageObject), description, areaServed ("US"), contactPoint (telephone, email), sameAs (redes sociales: Instagram, TikTok, Facebook, YouTube, LinkedIn)
- [ ] Schema `WebSite` con: url, name, publisher (ref a Organization), potentialAction (SearchAction — aunque el SPA no tiene busqueda, es buena practica para Google)
- [ ] JSON valido (verificable en Google Rich Results Test)
- [ ] Los valores coinciden con los datos reales: nombre "UChooseIt", url "https://uchooseit.us", telefono "(888) 556-2393", email "support@uchooseit.us"

**Notas del Arquitecto**:
Usar `@id` references para vincular Organization y WebSite:
```json
{
  "@type": "Organization",
  "@id": "https://uchooseit.us/#organization"
}
```
```json
{
  "@type": "WebSite",
  "publisher": { "@id": "https://uchooseit.us/#organization" }
}
```

El logo debe apuntar a un archivo real accesible. Verificar cual logo existe en `public/` (probablemente `iso.png` o uno de los SVGs).

Las URLs de redes sociales se pueden extraer del Footer actual del sitio.

---

### seo-hooks: Custom hooks usePageMeta + useJsonLd

- **Feature**: seo
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: ninguna

**Contexto**:
Crear dos custom hooks en `src/hooks/` que manipulan el `<head>` del DOM directamente, sin dependencias externas. `usePageMeta` actualiza title, meta description, canonical, OG y Twitter tags. `useJsonLd` inyecta/remueve bloques `<script type="application/ld+json">` en el `<head>`. Ambos hooks usan `useEffect` con cleanup para restaurar los valores originales de `index.html` al desmontar el componente.

**Archivos**:
```
CREAR:   src/hooks/usePageMeta.ts, src/hooks/useJsonLd.ts
```

**Limites**:
- No instalar ninguna dependencia externa — solo DOM API nativo (`document.title`, `document.querySelector`, `document.createElement`)
- No agregar meta tags a ninguna pagina todavia — solo crear los hooks
- No modificar `src/main.tsx` ni ningun provider
- No modificar ningun componente de feature en esta tarea

**Criterio de aceptacion**:
- [ ] `usePageMeta` acepta: `{ title: string, description: string, canonical: string, ogImage?: string }`
- [ ] `usePageMeta` actualiza en mount: `document.title`, `<meta name="description">`, `<link rel="canonical">`, `<meta property="og:title">`, `<meta property="og:description">`, `<meta property="og:url">`, `<meta property="og:image">`, `<meta name="twitter:title">`, `<meta name="twitter:description">`
- [ ] `usePageMeta` restaura los valores originales de `index.html` en cleanup (unmount)
- [ ] `useJsonLd` acepta: `data: Record<string, unknown>` (o array de objects)
- [ ] `useJsonLd` crea un `<script type="application/ld+json">` en `<head>` con el JSON stringified
- [ ] `useJsonLd` remueve el `<script>` en cleanup (unmount) para no acumular schemas al navegar
- [ ] Ambos hooks tienen tipos TypeScript correctos
- [ ] `npm run build` pasa limpio

**Notas del Arquitecto**:
Patron sugerido para `usePageMeta`:
```ts
const usePageMeta = ({ title, description, canonical, ogImage }: PageMetaProps) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      const prev = el?.getAttribute(attr);
      if (el) el.setAttribute(attr, value);
      return { el, attr, prev };
    };

    const restores = [
      setMeta('meta[name="description"]', 'content', description),
      setMeta('link[rel="canonical"]', 'href', canonical),
      setMeta('meta[property="og:title"]', 'content', title),
      setMeta('meta[property="og:description"]', 'content', description),
      setMeta('meta[property="og:url"]', 'content', canonical),
      // ... og:image, twitter tags
    ];

    return () => {
      document.title = prevTitle;
      restores.forEach(({ el, attr, prev }) => {
        if (el && prev) el.setAttribute(attr, prev);
      });
    };
  }, [title, description, canonical, ogImage]);
};
```

Patron sugerido para `useJsonLd`:
```ts
const useJsonLd = (data: Record<string, unknown>) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);  // solo en mount — el data no cambia por pagina
};
```

Estos hooks son mas livianos que `react-helmet-async` (~30 lineas vs ~10KB), no necesitan Provider, y funcionan identico para el pre-renderer (Puppeteer captura el DOM final despues de que los effects corren).

---

### page-meta-tags: Meta tags por pagina en las 7 rutas principales

- **Feature**: seo
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: seo-hooks

**Contexto**:
Agregar `usePageMeta({...})` al inicio de cada una de las 7 paginas principales. Cada pagina necesita un title, description y canonical unicos, orientados a SEO con keywords relevantes para la categoria. Los meta tags de `index.html` actuan como fallback; el hook los sobreescribe cuando la pagina se monta y los restaura al desmontar.

**Archivos**:
```
MODIFICAR:
  src/features/home/Home.tsx
  src/features/shop/Shop.tsx
  src/features/travel/Travel.tsx
  src/features/dining/Dining.tsx
  src/features/entertainment/Entertainment.tsx
  src/features/business/Business.tsx
  (identificar el componente de /product y agregarlo tambien)
```

**Limites**:
- Solo agregar la llamada a `usePageMeta({...})` al inicio del componente — no cambiar nada mas
- No modificar el contenido visual ni la estructura del componente
- Los textos deben estar en ingles (el sitio es en ingles)
- No agregar JSON-LD en esta tarea (eso va en json-ld-pages)

**Criterio de aceptacion**:
- [ ] Home (`/`): title "UChooseIt.us — Save Up to 50% on Dining, Travel, Shopping & Entertainment", description que mencione 1M+ deals, $47.99/year, 4 categorias
- [ ] Shop (`/shop`): title con "Shopping Discounts", description con marcas de shop y 175K locations
- [ ] Travel (`/travel`): title con "Travel Deals", description con hotels/flights/cruises y 850K locations
- [ ] Dining (`/dining`): title con "Restaurant Discounts", description con dining brands y 50K locations
- [ ] Entertainment (`/entertainment`): title con "Entertainment Discounts", description con theme parks/movies y 50K locations
- [ ] Business (`/business`): title con "B2B Partnership Program" o "White-Label Discount Platform", description con revenue share y bulk models
- [ ] Product (`/product`): title con "Membership Plans" o "Get Your Membership", description con pricing y value prop
- [ ] Canonical correcto para cada ruta: `https://uchooseit.us/{path}`
- [ ] OG image apunta a `https://uchooseit.us/site_preview.png` en todas (o imagen especifica si existe)
- [ ] Navegando entre rutas, el `<title>` del browser cambia correctamente

**Notas del Arquitecto**:
Referencia de meta tags sugeridos por pagina:

| Ruta | Title (~60 chars) | Description (~155 chars) |
|------|-------|-------------|
| `/` | UChooseIt.us — Save Up to 50% on Dining, Travel, Shopping & Entertainment | One VIP membership, 1 million+ deals across the US. Save $2,000+/year on restaurants, hotels, retail & theme parks for less than $4/month. |
| `/shop` | Shopping Discounts — UChooseIt VIP Membership | Exclusive member discounts at 175,000+ retail locations. Save on tech, fashion, home & more with brands like Lenovo, Samsung & Chewy. |
| `/travel` | Travel Deals & Hotel Discounts — UChooseIt | Member-only savings on 850,000+ hotels, flights, cruises & car rentals. Book with Wyndham, Avis, Carnival & more for less. |
| `/dining` | Restaurant Discounts — UChooseIt Membership | Save at 50,000+ restaurants nationwide. Member deals at Papa John's, Burger King, Domino's, Subway & local favorites. |
| `/entertainment` | Entertainment & Theme Park Discounts — UChooseIt | Save on movies, golf, museums & theme parks. Member discounts at Disney, Universal, Six Flags, Cinemark & more. |
| `/business` | B2B Partnership — White-Label Discount Platform \| UChooseIt | Offer 1M+ discounts to your audience. Revenue share (30%) or bulk licensing for companies, nonprofits & associations. |
| `/product` | Get Your UChooseIt Membership — Plans & Pricing | Join UChooseIt for $47.99/year and start saving at 1M+ locations. 7-day refund guarantee. Cancel anytime. |

Estos textos son sugerencias — el Dev puede ajustar para mejor legibilidad manteniendo las keywords clave.

---

### json-ld-pages: JSON-LD por pagina (FAQPage, BreadcrumbList) via useJsonLd

- **Feature**: seo
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: seo-hooks

**Contexto**:
Inyectar schemas JSON-LD especificos por pagina usando el hook `useJsonLd` creado en seo-hooks. Tres tipos de schema: (1) FAQPage en el componente Faqs.tsx con las preguntas frecuentes reales del sitio, (2) BreadcrumbList en cada pagina de categoria para indicar la jerarquia Home > Categoria, (3) Product en Home o Product page con el pricing de la membresia.

**Archivos**:
```
MODIFICAR:
  src/shared/layout/Faqs.tsx                        (FAQPage schema)
  src/features/shop/Shop.tsx                        (BreadcrumbList)
  src/features/travel/Travel.tsx                    (BreadcrumbList)
  src/features/dining/Dining.tsx                    (BreadcrumbList)
  src/features/entertainment/Entertainment.tsx      (BreadcrumbList)
  src/features/home/Home.tsx                        (Product schema)
```

**Limites**:
- No cambiar el contenido visual de ningun componente
- Los datos del FAQ schema deben coincidir con el contenido real renderizado en Faqs.tsx
- No crear schemas para rutas que no deberian indexarse (/thank-you, /activate)
- El Product schema debe reflejar el precio real ($47.99)

**Criterio de aceptacion**:
- [ ] `Faqs.tsx` inyecta FAQPage schema con al menos las 5 preguntas principales: "What is uchooseit.us?", "How much does it cost?", "Where can I use the discounts?", "Can I cancel anytime?", "How do I access the discounts?"
- [ ] Cada pagina de categoria inyecta BreadcrumbList con 2 items: Home > [Categoria]
- [ ] Home inyecta Product schema con: name "UChooseIt VIP Membership", price "47.99", priceCurrency "USD", availability "InStock"
- [ ] Todos los JSON-LD son validos (estructura @context, @type correctos)
- [ ] Los schemas se inyectan en `<head>` via `useJsonLd` (no inline en body)

**Notas del Arquitecto**:
Para el FAQPage, extraer las preguntas y respuestas del array/datos que ya usa Faqs.tsx para renderizar. No hardcodear duplicados — reutilizar la misma fuente de datos si es posible.

BreadcrumbList ejemplo para `/shop`:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://uchooseit.us/" },
    { "@type": "ListItem", "position": 2, "name": "Shop Discounts", "item": "https://uchooseit.us/shop" }
  ]
}
```

El Product schema debe referenciar la Organization:
```json
{
  "@type": "Product",
  "brand": { "@id": "https://uchooseit.us/#organization" }
}
```

---

### prerender-build: Pre-renderizado en build time

- **Feature**: seo
- **Rol**: Feature Dev
- **Estado**: diferida
- **Dependencias**: page-meta-tags, json-ld-global, json-ld-pages

**Contexto**:
Generar archivos HTML pre-renderizados para las 7 rutas principales durante el build, para que bots que no ejecutan JS reciban el contenido completo por ruta.

**Motivo de diferimiento**:
El build se ejecuta en GitHub Actions (CI/CD) y deploya a AWS. Cualquier solucion de pre-rendering requiere un browser headless (Puppeteer/Chromium ~400MB) que:
- Aumenta significativamente el tamano de `node_modules` en CI
- Agrega 20-30s al build time
- Puede ser fragil en entornos CI (Chromium sandbox, dependencias de sistema)
- Requiere que el SPA renderice correctamente sin assets de produccion

**Cobertura actual sin pre-render**:
- **Googlebot ejecuta JS** → ve todo: meta tags, JSON-LD, contenido renderizado por React
- **Bots sin JS** (GPTBot, ClaudeBot, Bingbot) → ven: `<noscript>` semantico + `llms.txt` + JSON-LD global + sitemap
- El 90% del valor SEO ya esta cubierto con las 6 tareas completadas

**Alternativas a evaluar en futuro** (si se necesita el 10% extra):
1. **Servicio externo** (prerender.io, Rendertron) — cachea HTML pre-renderizado sin tocar el build
2. **Cloudflare Worker** — intercepta requests de bots y sirve cache pre-renderizado
3. **Script post-build local** — Puppeteer solo en un step separado del CI, no como Vite plugin
4. **Migracion a SSR** — si el proyecto escala, evaluar React Router SSR o framework con SSR nativo
