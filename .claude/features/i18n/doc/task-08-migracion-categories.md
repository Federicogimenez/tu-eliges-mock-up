# TASK-08: Migracion — Category pages

## Feature: i18n
## Rol: Feature Dev
## Fecha: 2026-03-13

---

## Que se hizo
Se migraron las 4 category pages (Shop, Travel, Dining, Entertainment) a usar traducciones. Cada una tenia ~35-40 strings incluyendo testimonials, articles y hero text. Comparten estructura similar pero datos diferentes.

## Archivos tocados
```
MODIFICADOS:
  src/features/shop/Shop.tsx
  src/features/travel/Travel.tsx
  src/features/dining/Dining.tsx
  src/features/entertainment/Entertainment.tsx
```

## Decisiones tomadas
- Testimonials y articles migrados con keys indexados: `shop.testimonials.0.text`
- Cada category tiene su propio namespace: `shop.*`, `travel.*`, `dining.*`, `entertainment.*`
- No se unifico en componente generico (respetando el limite de la tarea)

## Pendientes o notas
- Ninguno
