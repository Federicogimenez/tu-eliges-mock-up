# seo-config: Configuracion SEO por ruta (seo.json)

## Feature: seo
## Rol: Dev
## Fecha: 2026-02-18

---

## Que se hizo
Se creo `src/seo/seo.json` con la configuracion SEO para las 7 rutas publicas. Cada entrada define: title (~60 chars), description (~155 chars), canonical URL, og:type, referencia al fragmento HTML estatico, y array de schemas JSON-LD especificos. Home incluye Product (VIP Membership $47.99) + FAQPage (5 preguntas principales). Las 4 categorias incluyen BreadcrumbList (Home > Categoria). Business incluye BreadcrumbList. Product incluye Product schema.

## Archivos tocados
```
CREADOS:   src/seo/seo.json
```

## Decisiones tomadas
- Se incluyo FAQPage schema solo en home (`/`) porque es la pagina que mejor representa las preguntas frecuentes globales. Las paginas de categoria no tienen FAQ schema para evitar duplicacion
- Se incluyo Product schema tanto en home como en product — home porque es la pagina principal de conversion, product porque es la pagina de compra directa
- Business tiene BreadcrumbList (Home > Business Partners) en lugar de un schema mas complejo, dado que no hay un schema estandar para "partnership program"
- Las descriptions se optimizaron para SEO con keywords relevantes por categoria y cifras concretas (175K, 850K, 50K ubicaciones)

## Pendientes o notas
- Si se agregan nuevas rutas publicas en el futuro, deben agregarse tambien a `seo.json` para que el plugin las procese
