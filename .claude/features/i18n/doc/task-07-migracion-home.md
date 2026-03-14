# TASK-07: Migracion — Home page

## Feature: i18n
## Rol: Feature Dev
## Fecha: 2026-03-13

---

## Que se hizo
Se migraron los 4 componentes de la pagina Home a usar `t()` / `tHtml()`. Todos los strings user-facing (hero, categorias, beneficios, learnHow) ahora vienen del JSON de traduccion.

## Archivos tocados
```
MODIFICADOS:
  src/features/home/components/HeroSection.tsx
  src/features/home/components/CategoriesSection.tsx
  src/features/home/components/BenefitsSection.tsx
  src/features/home/components/LearnHow.tsx
```

## Decisiones tomadas
- Patron consistente con TASK-06: `t()` para texto plano, `tHtml()` para HTML
- Keys bajo namespace `home.*`

## Pendientes o notas
- Ninguno
