# seo-hooks: Custom hooks usePageMeta + useJsonLd

## Feature: seo
## Rol: Dev
## Fecha: 2026-02-17

> Archivo: `doc/seo-hooks.md`

---

## Que se hizo
Se crearon dos custom hooks en `src/hooks/` para manipular el `<head>` del DOM sin dependencias externas. `usePageMeta` actualiza document.title y 8 meta tags (description, canonical, og:title, og:description, og:url, og:image, twitter:title, twitter:description) con cleanup que restaura los valores originales de index.html al desmontar. `useJsonLd` crea un `<script type="application/ld+json">` en el `<head>` y lo remueve en cleanup para evitar acumulacion al navegar entre rutas.

## Archivos tocados
```
CREADOS:   src/hooks/usePageMeta.ts, src/hooks/useJsonLd.ts
```

## Decisiones tomadas
- Se descarto `react-helmet-async` a favor de hooks custom: cero dependencias, ~50 lineas totales, sin necesidad de Provider
- `usePageMeta` usa una funcion helper `setMetaContent` que retorna el valor previo para el cleanup, garantizando que al navegar fuera de una pagina los meta tags vuelven a los defaults de index.html
- `useJsonLd` usa `useRef` para mantener referencia al script creado y poder removerlo de forma segura en cleanup
- El `useJsonLd` tiene dependency array vacio (`[]`) porque el data del schema no cambia durante el lifecycle de una pagina
- Ambos hooks funcionan identico para el pre-renderer (Puppeteer captura el DOM final despues de que los effects corren)

## Pendientes o notas
- Si en el futuro se necesita soporte para og:image dinamico por pagina (ej: diferentes imagenes de preview por categoria), el hook ya lo soporta via el prop `ogImage` opcional
