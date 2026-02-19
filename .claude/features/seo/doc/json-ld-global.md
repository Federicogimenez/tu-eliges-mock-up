# json-ld-global: JSON-LD global (Organization + WebSite) en index.html

## Feature: seo
## Rol: Dev
## Fecha: 2026-02-18

---

## Que se hizo
Se agrego un bloque `<script type="application/ld+json">` en el `<head>` de `index.html` con un `@graph` que contiene los schemas Organization y WebSite. Organization incluye: name, legalName, url, logo (ImageObject), image, description, areaServed ("US"), contactPoint (telefono + email + idiomas), y sameAs con 5 redes sociales (Instagram, TikTok, Facebook, YouTube, LinkedIn). WebSite referencia a Organization via `@id`. El bloque se coloco antes del Meta Pixel.

## Archivos tocados
```
MODIFICADOS: index.html
```

## Decisiones tomadas
- Se uso `@id` references (`https://uchooseit.us/#organization`, `https://uchooseit.us/#website`) para permitir cross-referencing con schemas por pagina (Product, BreadcrumbList) que referencian la organizacion
- El logo apunta a `/iso.png` que ya existe en `public/` como favicon
- Se mantuvo `og:image` apuntando a `site_preview.png` que ya existia

## Pendientes o notas
- Ninguno
