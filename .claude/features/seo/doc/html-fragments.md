# html-fragments: Fragmentos HTML semanticos por ruta

## Feature: seo
## Rol: Dev
## Fecha: 2026-02-18

---

## Que se hizo
Se crearon 7 archivos HTML en `src/seo/fragments/` con contenido semantico para cada ruta publica. Cada fragmento contiene: `<header>` con `<h1>`, tagline y `<nav>` con links a las 7 rutas; `<main>` con secciones descriptivas (propuesta de valor, marcas, testimonios, CTA); y `<footer>` con contacto y ubicacion. Los fragmentos se inyectan dentro de `<div id="root">` por el plugin — React los reemplaza al montar. El contenido se baso en `storytelling.md`.

## Archivos tocados
```
CREADOS:
  src/seo/fragments/home.html
  src/seo/fragments/shop.html
  src/seo/fragments/travel.html
  src/seo/fragments/dining.html
  src/seo/fragments/entertainment.html
  src/seo/fragments/business.html
  src/seo/fragments/product.html
```

## Decisiones tomadas
- Cada fragmento es autocontenido con navegacion completa — un bot que llegue a cualquier ruta puede descubrir todas las demas a traves de los links en `<nav>`
- Se incluyeron testimonios reales de usuarios en las paginas de categoria (extraidos del contenido existente en los componentes React)
- Se usaron entidades HTML (`&amp;`, `&quot;`) en lugar de caracteres literales para garantizar parseo correcto dentro de `<div id="root">`
- Los fragmentos NO tienen estilos ni clases CSS — son puramente semanticos. El contenido aparece brevemente como texto plano antes de que React monte, actuando como loading placeholder

## Pendientes o notas
- Si el contenido o marcas de los componentes React cambian, los fragmentos deben actualizarse manualmente para mantener consistencia
