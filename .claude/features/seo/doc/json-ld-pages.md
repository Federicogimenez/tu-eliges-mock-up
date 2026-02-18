# json-ld-pages: JSON-LD por pagina (FAQPage, BreadcrumbList, Product)

## Feature: seo
## Rol: Dev
## Fecha: 2026-02-17

> Archivo: `doc/json-ld-pages.md`

---

## Que se hizo
Se inyectaron schemas JSON-LD especificos por pagina usando `useJsonLd`. Tres tipos: (1) FAQPage en Faqs.tsx con 7 preguntas principales del General FAQs, (2) BreadcrumbList en las 4 paginas de categoria (Shop, Travel, Dining, Entertainment) con jerarquia Home > Categoria, (3) Product en Home.tsx con pricing de la membresia ($47.99 USD, InStock).

## Archivos tocados
```
MODIFICADOS:
  src/shared/layout/Faqs.tsx              (FAQPage schema, 7 Q&A)
  src/features/home/Home.tsx              (Product schema)
  src/features/shop/Shop.tsx              (BreadcrumbList)
  src/features/travel/Travel.tsx          (BreadcrumbList)
  src/features/dining/Dining.tsx          (BreadcrumbList)
  src/features/entertainment/Entertainment.tsx (BreadcrumbList)
```

## Decisiones tomadas
- FAQ schema se definio como constante `FAQ_SCHEMA` fuera del componente para evitar recreacion en cada render
- Se incluyeron 7 preguntas del bloque "General FAQs" (las mas relevantes para SEO). Las preguntas por categoria (Shop, Travel, Dining, Entertainment) no se incluyeron para no sobrecargar el schema
- El texto del FAQ schema se extrajo manualmente del JSX de Faqs.tsx (sin markup HTML, solo texto plano) porque el JSX incluye `<strong>` y `<a>` que no van en el schema
- Product schema se coloco en Home (no en ProductPage) porque Home es la pagina con mayor trafico y la que Google indexa primero
- Product schema referencia la Organization via `@id` para vincular ambos schemas
- BreadcrumbList solo tiene 2 niveles (Home > Categoria) porque no hay sub-categorias en la navegacion

## Pendientes o notas
- Si se agregan mas preguntas al FAQ o se modifican las existentes, actualizar `FAQ_SCHEMA` en Faqs.tsx para mantener sincronizacion
- Validar los schemas en Google Rich Results Test una vez deployado
