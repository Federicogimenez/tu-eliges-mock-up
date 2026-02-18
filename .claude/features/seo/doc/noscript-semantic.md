# noscript-semantic: Bloque noscript semantico en index.html

## Feature: seo
## Rol: Dev
## Fecha: 2026-02-17

> Archivo: `doc/noscript-semantic.md`

---

## Que se hizo
Se agrego un segundo bloque `<noscript>` en `index.html` despues de `<div id="root">` con HTML semantico completo para crawlers que no ejecutan JavaScript. Contiene: `<header>` con h1, tagline y nav con links a las 7 rutas; `<main>` con 5 secciones (propuesta de valor, 4 categorias con marcas, beneficios, B2B partnership, FAQs resumidas como `<dl>`); y `<footer>` con contacto y datos legales. El bloque del pixel de Facebook se mantuvo intacto.

## Archivos tocados
```
MODIFICADOS: index.html
```

## Decisiones tomadas
- Se uso un `<noscript>` separado del pixel de Facebook para no interferir con el tracking
- Se usaron elementos semanticos (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<dl>`) para maximizar la comprension por bots
- Se incluyeron links internos (`<a href="/shop">`, etc.) para que los bots descubran las rutas del sitio
- Se incluyo una seccion B2B breve con link a `/business`
- Se uso `&amp;` para caracteres especiales en HTML (requerido fuera de JSX)

## Pendientes o notas
- Ninguno. El contenido es invisible para usuarios con JS habilitado.
