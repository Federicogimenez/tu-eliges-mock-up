# build-verification: Integracion, build y verificacion

## Feature: seo
## Rol: Dev
## Fecha: 2026-02-18

---

## Que se hizo
Se registro el plugin `staticSeoPlugin` en `vite.config.ts` y se ejecuto `npm run build` con exito. Se verifico que los 7 archivos HTML pre-renderizados se generan correctamente en `dist/`. Se confirmo: meta tags unicos por ruta, JSON-LD inyectado (BreadcrumbList en categorias, Product en home), contenido semantico dentro de `<div id="root">`, scripts SPA intactos, y archivos estaticos (`robots.txt`, `sitemap.xml`, `llms.txt`) presentes en `dist/`.

## Archivos tocados
```
MODIFICADOS:
  vite.config.ts                (registro del plugin)
  tsconfig.app.json             (exclude src/plugins, types: [])
  tsconfig.node.json            (include src/plugins, types: ["node"])
```

## Decisiones tomadas
- Se instalo `@types/node` como devDependency (unico paquete agregado) porque el plugin usa APIs Node.js (`fs`, `path`, `url`) que requieren type definitions para compilar con `tsc -b`
- Se aislo `@types/node` de `tsconfig.app.json` con `"types": []` para evitar conflicto de tipos (Node.js `setTimeout` retorna `Timeout` vs browser retorna `number`)
- Se agrego `"exclude": ["src/plugins"]` a `tsconfig.app.json` y `"include": ["src/plugins"]` a `tsconfig.node.json` para separar correctamente el codigo browser del codigo de build

## Verificaciones realizadas
- `npm run build` completa sin errores TypeScript
- `dist/index.html` tiene title y description de home + Product JSON-LD
- `dist/shop/index.html` tiene title y description de shop + BreadcrumbList JSON-LD
- Contenido HTML semantico presente dentro de `<div id="root">` (no vacio)
- Scripts JS del SPA intactos en todos los HTML generados
- `robots.txt`, `sitemap.xml`, `llms.txt` presentes en `dist/`

## Pendientes o notas
- `npm run preview` puede no resolver las rutas de subdirectorio correctamente (el preview server de Vite no simula la resolucion de S3/Nginx). En produccion AWS, la estructura `dist/{ruta}/index.html` funciona automaticamente
