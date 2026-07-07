# Feature: i18n (Internacionalizacion)

## Estado: COMPLETADA
## Prioridad: P1
## Rol asignado: Feature Dev

---

## Objetivo
Internacionalizar el sitio web para servir contenido en multiples idiomas/dialectos de America, permitiendo que usuarios de distintos paises vean el sitio en su idioma nativo. El sistema usa React Context + archivos JSON de traduccion, sin dependencias externas de i18n.

## Alcance

### Incluido
- CountryContext + CountryProvider (React Context para estado de pais/idioma)
- Hook `useTranslation` para consumir traducciones con soporte HTML (`dangerouslySetInnerHTML`)
- Deteccion de pais via queryParam `?country=xxx` + persistencia en localStorage
- Archivos JSON de traduccion por pais en `src/translates/`
- Paises soportados: `usa` (default/ingles), `bra` (portugues), `arg` (espanol argentino), `col` (espanol colombiano), `mex` (espanol mexicano)
- Country switcher en el header del HamburgerMenu (junto al ThemeSwitcher)
- Extraccion de todo el texto hardcodeado existente al JSON base `us.json`
- Reemplazo progresivo de strings hardcodeados por llamadas a `t('key')`

### Excluido
- Geolocalizacion por IP (fase futura)
- Browser Geolocation API
- Librerias externas de i18n (react-intl, i18next, etc.)
- Traduccion de contenido dinamico de API (ally data, etc.)
- Cambio de moneda o formatos numericos (fase futura)
- SEO multi-idioma (hreflang tags, rutas localizadas — fase futura)

## Estado actual del codigo
- Todo el texto user-facing esta hardcodeado inline en JSX o en objetos `const` dentro de componentes
- 3 Context providers existentes: ThemeContext, AllyContext, SavingsCalculatorModalContext
- El patron es consistente: Context + Provider en `src/context/` + hook en `src/hooks/`
- `?code=` queryParam ya se lee en AllyContext (precedente para `?country=`)
- HamburgerMenu tiene ThemeSwitcher en el header del panel — espacio natural para country switcher
- `src/shared/constants.ts` tiene textos minimos (copyright, disclaimer)

## Archivos permitidos (scope)
```
CREAR:
  src/context/CountryContext.tsx
  src/hooks/useTranslation.ts
  src/hooks/useCountry.ts
  src/translates/us.json
  src/translates/bra.json
  src/translates/arg.json
  src/translates/col.json
  src/translates/mex.json
  src/shared/components/CountrySwitcher.tsx
  src/types/country.ts

MODIFICAR:
  src/App.tsx                              (agregar CountryProvider a la jerarquia)
  src/shared/components/HamburgerMenu.tsx  (agregar CountrySwitcher)
  src/features/**/*.tsx                    (reemplazar strings por t('key'))
  src/shared/layout/*.tsx                  (reemplazar strings por t('key'))
  src/shared/components/*.tsx              (reemplazar strings por t('key'))
  src/shared/constants.ts                  (reemplazar strings por t('key'))

NO TOCAR:
  src/context/AllyContext.tsx
  src/context/ThemeContext.tsx
  src/context/SavingsCalculatorModalContext.tsx
  src/routes/AppRoutes.tsx
  src/shared/routes.ts
```

## Dependencias
- Ninguna feature previa requerida

## Criterios de aceptacion
1. El sitio carga en ingles (usa) por defecto cuando no hay queryParam ni localStorage
2. Visitar con `?country=arg` muestra todo el contenido en espanol argentino
3. El pais seleccionado persiste en localStorage para visitas futuras
4. El CountrySwitcher en el burger menu permite cambiar de pais sin recargar
5. Los valores de traduccion soportan HTML inline (rendered via `dangerouslySetInnerHTML`)
6. Si un key de traduccion no existe en el JSON del pais, cae al valor de `us.json` (fallback)
7. TypeScript strict: keys de traduccion tipados, no errores de compilacion
8. No hay texto hardcodeado visible al usuario en componentes migrados
9. Build exitoso sin errores ni warnings

## Estructura de la feature
```
features/i18n/
  brief.md      → este archivo
  tasks.md      → backlog de tareas
  doc/          → registro de tareas completadas
```

---

*Creado por: Arquitecto*
*Fecha: 2026-03-13*
