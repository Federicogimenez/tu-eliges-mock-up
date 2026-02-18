# static-files: robots.txt + sitemap.xml + llms.txt

## Feature: seo
## Rol: Dev
## Fecha: 2026-02-17

> Archivo: `doc/static-files.md`

---

## Que se hizo
Se crearon tres archivos estaticos en `public/` que los bots consumen directamente desde la raiz del dominio. `robots.txt` define permisos de crawling para bots de busqueda y bots de IA (GPTBot, ClaudeBot, PerplexityBot, etc.) con directivas Allow/Disallow y referencia al sitemap. `sitemap.xml` lista las 7 rutas publicas con prioridades (home=1.0, categorias=0.9, product=0.8, business=0.7). `llms.txt` describe el negocio completo en markdown: propuesta B2C, 4 categorias con marcas, cifras clave, programa B2B, y links a todas las paginas.

## Archivos tocados
```
CREADOS:   public/robots.txt, public/sitemap.xml, public/llms.txt
```

## Decisiones tomadas
- Se excluyeron del sitemap las rutas transaccionales (`/thank-you`, `/activate`) y de afiliados (`/agency`, `/influencer`, `/company`, `/non-profit`) porque no deben indexarse
- Se permitieron explicitamente todos los bots de IA por User-agent (GPTBot, ChatGPT-User, ClaudeBot, Google-Extended, PerplexityBot, OAI-SearchBot)
- `llms.txt` incluye la narrativa B2B completa ademas de la B2C, con links a todas las paginas usando URLs absolutas

## Pendientes o notas
- Verificar que `_redirects` de Netlify/AWS no intercepta estos archivos (los archivos en `public/` se sirven directamente sin pasar por el SPA catch-all)
- Registrar el sitemap en Google Search Console y Bing Webmaster Tools manualmente
