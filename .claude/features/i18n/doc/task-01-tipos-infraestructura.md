# TASK-01: Tipos e infraestructura base

## Feature: i18n
## Rol: Feature Dev
## Fecha: 2026-03-13

---

## Que se hizo
Se creo la infraestructura base del sistema de internacionalizacion: tipos TypeScript, contexto React y hook de acceso. El CountryProvider detecta el pais via queryParam `?country=`, localStorage o default `usa`, y expone `setCountry()` que actualiza estado, localStorage y URL sin recargar (replaceState).

## Archivos tocados
```
CREADOS:
  src/types/country.ts           — CountryCode union type, CountryConfig interface, COUNTRIES map (5 paises)
  src/context/CountryContext.tsx  — CountryContext + CountryProvider con deteccion en cadena
  src/hooks/useCountry.ts        — Hook wrapper con throw si se usa fuera del provider
```

## Decisiones tomadas
- Se uso el mismo patron de ThemeContext (context + provider + hook) para consistencia
- La cadena de prioridad es: queryParam > localStorage > default `usa`
- `setCountry` usa `window.history.replaceState` para actualizar URL sin navegacion
- localStorage key: `uchooseit-country`

## Pendientes o notas
- Ninguno
