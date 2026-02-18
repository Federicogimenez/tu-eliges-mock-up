# json-ld-global: JSON-LD global (Organization + WebSite) en index.html

## Feature: seo
## Rol: Dev
## Fecha: 2026-02-17

> Archivo: `doc/json-ld-global.md`

---

## Que se hizo
Se agrego un bloque `<script type="application/ld+json">` en el `<head>` de `index.html` con un `@graph` conteniendo dos schemas de Schema.org: Organization (con nombre, logo, descripcion, contactPoint, sameAs con 5 redes sociales) y WebSite (con publisher referenciando la Organization via `@id`). Estos schemas son globales y aplican a todas las paginas.

## Archivos tocados
```
MODIFICADOS: index.html
```

## Decisiones tomadas
- Se uso `@id` references (`#organization`, `#website`) para vincular ambos schemas, permitiendo que schemas por pagina (Product, BreadcrumbList) referencien la Organization
- El logo apunta a `iso.png` (favicon existente, accesible como asset publico)
- El `image` apunta a `site_preview.png` (mismo que OG image)
- Se incluyeron las 5 redes sociales exactas del Footer: Instagram, TikTok, Facebook, YouTube, LinkedIn
- Se uso `contactPoint` con telephone en formato E.164 internacional y email
- No se incluyo `SearchAction` en WebSite porque el SPA no tiene funcionalidad de busqueda

## Pendientes o notas
- Validar el JSON-LD en Google Rich Results Test (https://search.google.com/test/rich-results) una vez deployado
