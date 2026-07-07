# TASK-10: Migracion — Affiliates + RevenueCalculator

## Feature: i18n
## Rol: Feature Dev
## Fecha: 2026-03-13

---

## Que se hizo
Se migro el RevenueCalculator (~80 strings) y las 4 paginas de afiliados. El calculator usa keys dinamicos por tipo de buyer para labels condicionales. Las paginas de afiliados son wrappers que pasan props al calculator, sin strings directos significativos.

## Archivos tocados
```
MODIFICADOS:
  src/shared/components/RevenueCalculator.tsx
  src/features/afiliates/Agency.tsx
  src/features/afiliates/Influencer.tsx
  src/features/afiliates/Company.tsx
  src/features/afiliates/NonProfit.tsx
```

## Decisiones tomadas
- Labels condicionales por buyer type resueltos con keys dinamicos: `t(\`affiliates.revenueCalculator.buyerLabel.\${buyerType}\`)`
- Logica de calculo del revenue calculator intacta

## Pendientes o notas
- Ninguno
