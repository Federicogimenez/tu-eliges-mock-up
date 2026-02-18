# page-meta-tags: Meta tags por pagina en las 7 rutas principales

## Feature: seo
## Rol: Dev
## Fecha: 2026-02-17

> Archivo: `doc/page-meta-tags.md`

---

## Que se hizo
Se agrego `usePageMeta({...})` al inicio de las 7 paginas principales. Cada pagina tiene title (~60 chars), description (~155 chars) y canonical unicos, optimizados con keywords relevantes para su categoria. Los meta tags de index.html actuan como fallback; el hook los sobreescribe al montar y los restaura al desmontar.

## Archivos tocados
```
MODIFICADOS:
  src/features/home/Home.tsx
  src/features/shop/Shop.tsx
  src/features/travel/Travel.tsx
  src/features/dining/Dining.tsx
  src/features/entertainment/Entertainment.tsx
  src/features/business/Business.tsx
  src/features/product/ProductPage.tsx
```

## Decisiones tomadas
- Titles siguen el patron `[Categoria] — UChooseIt` para consistencia de marca
- Descriptions incluyen cifras concretas (175K locations, 850K locations, etc.) y nombres de marcas para keywords de cola larga
- Business page usa "White-Label Discount Platform" como keyword B2B diferenciador
- Canonical URLs usan `https://uchooseit.us/{path}` sin trailing slash (excepto home que usa `/`)
- No se especifico `ogImage` por pagina — todas usan el default de index.html (`site_preview.png`)

## Pendientes o notas
- Considerar crear imagenes OG especificas por categoria en el futuro para mejor CTR en redes sociales
- Los titles y descriptions son sugerencias del Arquitecto — pueden ajustarse si se identifican mejores keywords via Google Search Console
