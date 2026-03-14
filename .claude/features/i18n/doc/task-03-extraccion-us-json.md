# TASK-03: Extraccion de texto a us.json

## Feature: i18n
## Rol: Feature Dev
## Fecha: 2026-03-13

---

## Que se hizo
Se recorrio sistematicamente todo el codebase y se extrajeron 600+ strings user-facing al archivo `us.json` (788 lineas, ~45KB). La estructura sigue dot notation anidada con secciones para layout, features, y componentes. Se preservo HTML inline y se uso formato `{{variable}}` para interpolacion.

## Archivos tocados
```
CREADOS:
  src/translates/us.json  — 788 lineas, estructura anidada completa
```

## Decisiones tomadas
- Estructura de claves: `layout.*` para componentes compartidos, `{feature}.*` para paginas, `components.*` para componentes reutilizables
- Arrays con indice numerico: `faqs.items.0.question`, `shop.testimonials.0.text`
- HTML preservado exacto como aparecia en JSX (br, strong, span con clases)
- Brand names dejados sin key propio donde solo contienen el nombre de marca
- `constants` como seccion separada para textos de `shared/constants.ts`

## Pendientes o notas
- Ninguno
