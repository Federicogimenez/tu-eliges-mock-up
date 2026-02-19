# static-files: robots.txt + sitemap.xml + llms.txt

## Feature: seo
## Rol: Dev
## Fecha: 2026-02-18

---

## Que se hizo
Se crearon tres archivos estaticos en `public/` para bots de busqueda e IA. `robots.txt` define permisos de crawling con directivas explicitas para 6 bots de IA (GPTBot, ChatGPT-User, ClaudeBot, Google-Extended, PerplexityBot, OAI-SearchBot) y bloquea rutas transaccionales. `sitemap.xml` lista las 7 rutas publicas con prioridades diferenciadas. `llms.txt` describe el negocio completo en markdown: propuesta B2C, 4 categorias con cifras, pricing, programa B2B, y datos de contacto.

## Archivos tocados
```
CREADOS:   public/robots.txt, public/sitemap.xml, public/llms.txt
```

## Decisiones tomadas
- Se permitieron explicitamente los bots de IA por nombre en lugar de confiar solo en `User-agent: *`, para garantizar acceso incluso si algun bot respeta solo directivas especificas
- Se excluyeron del sitemap las rutas transaccionales (`/thank-you`, `/activate`) y las rutas de afiliados (`/agency`, `/influencer`, `/company`, `/non-profit`) por no ser contenido indexable
- Prioridades del sitemap: home=1.0, categorias=0.9, product=0.8, business=0.7 — reflejando la jerarquia de conversion B2C > B2B

## Pendientes o notas
- Ninguno
