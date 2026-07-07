# TASK-02: Hook useTranslation

## Feature: i18n
## Rol: Feature Dev
## Fecha: 2026-03-13

---

## Que se hizo
Se creo el hook `useTranslation` que expone `t()` y `tHtml()` para acceder a traducciones. Soporta dot notation, interpolacion con `{{variable}}`, fallback a `us.json` y warning en dev cuando falta un key. Los 5 JSON se importan estaticamente.

## Archivos tocados
```
CREADOS:
  src/hooks/useTranslation.ts
```

## Decisiones tomadas
- Importacion estatica de los 5 JSON (no dynamic imports) por simplicidad y para evitar loading states
- `getNestedValue` recorre el objeto con `path.split('.')` para resolver dot notation
- `interpolate` usa regex `\{\{(\w+)\}\}` para reemplazar variables
- `tHtml` retorna `{ __html: string }` listo para `dangerouslySetInnerHTML`
- `useMemo` y `useCallback` para evitar re-renders innecesarios

## Pendientes o notas
- Ninguno
