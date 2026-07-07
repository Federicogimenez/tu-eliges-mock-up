# static-seo-plugin: Plugin Vite staticSeoPlugin.ts

## Feature: seo
## Rol: Dev
## Fecha: 2026-02-18

---

## Que se hizo
Se creo un plugin custom de Vite en `src/plugins/staticSeoPlugin.ts` que se ejecuta en el hook `closeBundle` (post-build). El plugin lee `dist/index.html` como plantilla, lee `src/seo/seo.json` para la configuracion, y para cada ruta: reemplaza meta tags en `<head>` (title, description, canonical, OG, Twitter), inyecta JSON-LD como `<script type="application/ld+json">`, inserta el fragmento HTML dentro de `<div id="root">`, y escribe el resultado en `dist/{ruta}/index.html`. Para home (`/`), modifica `dist/index.html` directamente.

## Archivos tocados
```
CREADOS:   src/plugins/staticSeoPlugin.ts
```

## Decisiones tomadas
- Se uso `closeBundle` en lugar de `generateBundle` porque el plugin necesita leer el `dist/index.html` ya escrito por Vite como plantilla base
- Se uso `import.meta.url` con `fileURLToPath` para obtener `__dirname` en ESM (el proyecto usa `"type": "module"`)
- Los meta tags se reemplazan via regex con soporte para whitespace multilinea (los meta tags originales en `index.html` tienen line breaks entre atributos)
- Se manejan errores de forma graceful: si `dist/index.html` o `seo.json` no existen, el plugin logea un warning y skippea sin romper el build
- El plugin es idempotente — ejecutarlo multiples veces produce el mismo resultado

## Pendientes o notas
- Se instalo `@types/node` como devDependency para que TypeScript reconozca los modulos `fs`, `path`, `url` en `tsconfig.node.json`
- Se ajustaron ambos tsconfig: `tsconfig.app.json` excluye `src/plugins` y tiene `"types": []` para aislar tipos Node del browser code; `tsconfig.node.json` incluye `src/plugins` y tiene `"types": ["node"]`
