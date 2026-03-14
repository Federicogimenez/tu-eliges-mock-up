# TASK-06: Migracion — Layout components

## Feature: i18n
## Rol: Feature Dev
## Fecha: 2026-03-13

---

## Que se hizo
Se migraron los 8 componentes de layout compartidos reemplazando todos los strings hardcodeados por llamadas a `t()` y `tHtml()`. Faqs.tsx fue el mas extenso (~200 strings). Se uso `tHtml()` donde los valores contienen HTML y `t()` para texto plano.

## Archivos tocados
```
MODIFICADOS:
  src/shared/layout/HeroOverlay.tsx
  src/shared/layout/Footer.tsx
  src/shared/layout/Faqs.tsx
  src/shared/layout/PricingSection.tsx
  src/shared/layout/CalculatorTableSection.tsx
  src/shared/layout/GatewaySection.tsx
  src/shared/layout/Benefits.tsx
  src/shared/layout/TestimonialSection.tsx
```

## Decisiones tomadas
- Para arrays de datos (FAQs, benefits, testimonials): keys con indice numerico `items.0.title`, `items.0.desc`
- `tHtml()` usado en valores con `<br>`, `<strong>`, `<span>` para preservar markup
- Brand names dejados hardcodeados donde correspondia

## Pendientes o notas
- Ninguno
