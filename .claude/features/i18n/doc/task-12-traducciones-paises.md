# TASK-12: Crear JSON de traducciones (bra, arg, col, mex)

## Feature: i18n
## Rol: Feature Dev
## Fecha: 2026-03-13

---

## Que se hizo
Se crearon los 4 archivos JSON de traduccion con la misma estructura de claves que `us.json` (~787 lineas cada uno). Cada traduccion respeta el dialecto local: AR usa "vos", CO usa "usted", MX usa "tu", BRA traducido completamente a portugues brasileno.

## Archivos tocados
```
CREADOS:
  src/translates/bra.json  — portugues brasileno (~48KB)
  src/translates/arg.json  — espanol argentino (~48KB)
  src/translates/col.json  — espanol colombiano (~49KB)
  src/translates/mex.json  — espanol mexicano (~48KB)
```

## Decisiones tomadas
- Dialectos aplicados consistentemente: AR "vos elegis", CO "usted elige", MX "tu eliges", BRA "voce escolhe"
- Brand names sin traducir en todos los idiomas
- `{{variables}}` y HTML tags preservados intactos
- Formato numerico mantenido (USD, %, etc.) sin localizacion de moneda

## Pendientes o notas
- Localizacion de moneda y formatos numericos queda para fase futura (excluido del scope)
