# i18n — Tareas

> Todas las tareas de la feature de internacionalizacion, ordenadas por dependencia.

---

## TASK-01: Tipos e infraestructura base

### Metadata
- **Feature**: i18n
- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: ninguna

### Contexto
Crear los tipos TypeScript y el CountryContext que gestionara el estado del pais/idioma activo en toda la app. Seguir el patron existente de ThemeContext: contexto + provider + hook de acceso.

La deteccion del pais sigue esta cadena de prioridad:
1. QueryParam `?country=arg` → maxima prioridad
2. `localStorage('uchooseit-country')` → visitante recurrente
3. Default: `usa`

Paises soportados: `usa` (ingles), `bra` (portugues BR), `arg` (espanol argentino), `col` (espanol colombiano), `mex` (espanol mexicano).

### Archivos
```
CREAR:
  src/types/country.ts           → CountryCode type, CountryConfig interface, COUNTRIES map
  src/context/CountryContext.tsx  → CountryContext + CountryProvider
  src/hooks/useCountry.ts        → Hook para acceder al contexto
```

### Especificacion

**`src/types/country.ts`**:
```ts
// CountryCode: 'usa' | 'bra' | 'arg' | 'col' | 'mex'
// CountryConfig: { code, label, flag (emoji), locale }
// COUNTRIES: Record<CountryCode, CountryConfig>
// CountryContextType: { country, setCountry, countryConfig }
```

Mapa de paises:
| code | label | flag | locale |
|------|-------|------|--------|
| usa | English | 🇺🇸 | en-US |
| bra | Portugues | 🇧🇷 | pt-BR |
| arg | Español (AR) | 🇦🇷 | es-AR |
| col | Español (CO) | 🇨🇴 | es-CO |
| mex | Español (MX) | 🇲🇽 | es-MX |

**`src/context/CountryContext.tsx`**:
- Lee `?country=` de `window.location.search` al montar (igual que AllyContext lee `?code=`)
- Si hay queryParam valido → setCountry + guardar en localStorage
- Si no hay queryParam → leer localStorage
- Si no hay nada → default `usa`
- Exponer `setCountry(code)` para el switcher (que tambien actualice localStorage)
- Cuando se cambia de pais via switcher, actualizar el queryParam en la URL sin recargar (usando `window.history.replaceState`)

**`src/hooks/useCountry.ts`**:
- Patron identico a `useTheme.ts`: consume CountryContext, throw si undefined

### Limites
- NO integrar en App.tsx todavia (eso es TASK-05)
- NO crear archivos de traduccion aqui
- NO tocar ningun componente existente

### Criterio de aceptacion
- [ ] `CountryCode` es un union type estricto de los 5 codigos
- [ ] `COUNTRIES` tiene los 5 paises con label, flag y locale
- [ ] CountryProvider lee `?country=` del URL al montar
- [ ] CountryProvider persiste el pais en localStorage key `uchooseit-country`
- [ ] `useCountry()` retorna `{ country, setCountry, countryConfig }`
- [ ] `setCountry` actualiza state + localStorage + URL queryParam (replaceState)
- [ ] TypeScript compila sin errores

---

## TASK-02: Hook useTranslation

### Metadata
- **Feature**: i18n
- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: TASK-01

### Contexto
Crear el hook `useTranslation` que permite a los componentes acceder a strings traducidos. El hook usa el `CountryContext` para saber que JSON cargar. Los valores de traduccion pueden contener **HTML** (para manejar diferencias de expresion entre idiomas: saltos de linea, negritas, spans, etc.), por lo que se necesita soporte explicito para `dangerouslySetInnerHTML`.

### Archivos
```
CREAR:
  src/hooks/useTranslation.ts
```

### Especificacion

El hook expone:
```ts
const { t, tHtml } = useTranslation();

// t('home.hero.title') → string plano
// t('pricing.subtitle', { price: '47.99' }) → interpolacion: "Only {{price}}/year"
// tHtml('home.hero.description') → { __html: string } para uso con dangerouslySetInnerHTML
```

**Funcionalidad**:
- `t(key: string, vars?: Record<string, string>)` → retorna el string del JSON del pais activo
- `tHtml(key: string, vars?: Record<string, string>)` → retorna `{ __html: string }` listo para `dangerouslySetInnerHTML`
- **Fallback**: si el key no existe en el JSON del pais activo, buscar en `us.json`
- **Interpolacion**: reemplazar `{{variable}}` en el string con los valores de `vars`
- **Dot notation**: `t('home.hero.title')` accede a `{ home: { hero: { title: "..." } } }`
- **Key no encontrado**: retornar el key mismo como fallback visual (ej: `"home.hero.title"`) + `console.warn` en dev

**Carga de traducciones**:
- Importar los JSON estaticamente (no dynamic import por ahora):
  ```ts
  import us from '../translates/us.json';
  import bra from '../translates/bra.json';
  // etc.
  ```
- Mapa: `const translations: Record<CountryCode, TranslationFile> = { usa: us, bra, arg, col, mex }`

### Limites
- NO crear los archivos JSON aqui (TASK-03 se encarga)
- Crear el hook con la logica lista pero comentar los imports de JSON hasta que existan
- NO usar librerias externas (react-intl, i18next, etc.)
- NO tocar ningun componente existente

### Criterio de aceptacion
- [ ] `t('key')` resuelve dot notation en el JSON del pais activo
- [ ] `t('key', { name: 'John' })` reemplaza `{{name}}` en el string
- [ ] `tHtml('key')` retorna `{ __html: string }` para dangerouslySetInnerHTML
- [ ] Fallback a `us.json` cuando el key no existe en el pais activo
- [ ] Key no encontrado retorna el key como string + warn en consola (solo dev)
- [ ] TypeScript compila sin errores

### Notas del Arquitecto
El dev puede dejar los imports de JSON comentados si los archivos aun no existen. Lo importante es que la logica del hook este completa y correcta. En TASK-03 se crean los JSON y se descomentan los imports.

---

## TASK-03: Extraccion de texto a us.json

### Metadata
- **Feature**: i18n
- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: TASK-02

### Contexto
Recorrer **todo** el codebase y extraer cada string user-facing a un archivo `us.json` con estructura de claves anidadas. Este JSON sera la fuente de verdad y la base para generar las traducciones a los demas paises. Hay ~900+ strings en ~40 archivos.

Los valores pueden contener HTML: `<br>`, `<strong>`, `<span>`, `<a>`, etc., porque las traducciones a otros idiomas podrian necesitar diferente estructura de lineas o enfasis.

### Archivos
```
CREAR:
  src/translates/us.json
```

### Especificacion

**Estructura de claves** (dot notation mapeada a JSON anidado):

```json
{
  "layout": {
    "header": { ... },
    "heroOverlay": { ... },
    "footer": { ... },
    "faqs": { ... },
    "pricing": { ... },
    "calculator": { ... },
    "gateway": { ... },
    "benefits": { ... },
    "testimonials": { ... }
  },
  "home": {
    "hero": { ... },
    "categories": { ... },
    "benefits": { ... },
    "learnHow": { ... }
  },
  "shop": { ... },
  "travel": { ... },
  "dining": { ... },
  "entertainment": { ... },
  "business": {
    "hero": { ... },
    "audienceCards": { ... },
    "partnershipModels": { ... },
    "howItWorks": { ... },
    "lookingToAchieve": { ... },
    "strategyCall": { ... },
    "opportunities": { ... },
    "brandsShowcase": { ... }
  },
  "affiliates": {
    "revenueCalculator": { ... }
  },
  "product": { ... },
  "activate": { ... },
  "thankYou": { ... },
  "components": {
    "hamburgerMenu": { ... },
    "allyPopUp": { ... },
    "buttons": { ... },
    "savingsModal": { ... }
  },
  "constants": { ... }
}
```

**Convenciones de claves**:
- camelCase para cada nivel: `layout.heroOverlay.title`
- Arrays con indice numerico: `shop.testimonials.0.text`
- Interpolacion con `{{variable}}`: `"Billed annually at {{price}}"`
- HTML inline permitido en valores: `"You Choose Where <br class='md:hidden' /> to Save"`

**Inventario por seccion** (el dev debe recorrer cada archivo):

| Seccion | Archivos fuente | Strings aprox |
|---------|----------------|---------------|
| Layout: HeroOverlay | `src/shared/layout/HeroOverlay.tsx` | ~10 |
| Layout: Footer | `src/shared/layout/Footer.tsx` | ~15 |
| Layout: Faqs | `src/shared/layout/Faqs.tsx` | ~200+ |
| Layout: PricingSection | `src/shared/layout/PricingSection.tsx` | ~20 |
| Layout: CalculatorTableSection | `src/shared/layout/CalculatorTableSection.tsx` | ~8 |
| Layout: GatewaySection | `src/shared/layout/GatewaySection.tsx` | ~10 |
| Layout: Benefits | `src/shared/layout/Benefits.tsx` | ~25 |
| Layout: TestimonialSection | `src/shared/layout/TestimonialSection.tsx` | ~10 |
| Home | `src/features/home/components/*.tsx` | ~45 |
| Shop | `src/features/shop/Shop.tsx` | ~40 |
| Travel | `src/features/travel/Travel.tsx` | ~35 |
| Dining | `src/features/dining/Dining.tsx` | ~35 |
| Entertainment | `src/features/entertainment/Entertainment.tsx` | ~40 |
| Business | `src/features/business/components/*.tsx` | ~170 |
| Affiliates | `src/shared/components/RevenueCalculator.tsx` | ~80 |
| Product | `src/features/product/components/*.tsx` | ~30 |
| Activate | `src/features/activate/Activate.tsx` | ~40 |
| ThankYou | `src/features/thankyou/ThankYou.tsx` | ~15 |
| Components | `src/shared/components/{AllyPopUp,ButtonPrimary,HamburgerMenu,SavingsCalculator}` | ~45 |
| Constants | `src/shared/constants.ts` | ~3 |

### Limites
- NO modificar ningun componente — solo crear el JSON
- NO traducir nada — el JSON esta en ingles (es el idioma base)
- NO crear los JSON de otros paises aqui (TASK-12)
- Mantener brand names sin traducir: "Uchooseit.us", "My Deals", nombres de marcas
- Preservar HTML exacto como aparece en los componentes

### Criterio de aceptacion
- [ ] `src/translates/us.json` existe con estructura anidada completa
- [ ] Cada string user-facing visible en el sitio tiene su key correspondiente
- [ ] Las claves siguen convencion camelCase dot-notation
- [ ] Valores con HTML preservan el markup exacto
- [ ] Variables interpoladas usan formato `{{variable}}`
- [ ] JSON es valido (parseable sin errores)
- [ ] Ningun archivo fuente fue modificado

### Notas del Arquitecto
Esta es la tarea mas extensa del feature. El dev debe recorrer sistematicamente cada archivo del inventario, leer el texto visible, y agregarlo al JSON. Se recomienda trabajar por seccion (layout primero, luego home, luego categories, etc.) y validar el JSON periodicamente. Al finalizar, descomentar los imports en `useTranslation.ts`.

---

## TASK-04: CountrySwitcher component

### Metadata
- **Feature**: i18n
- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: TASK-01

### Contexto
Crear el componente visual para cambiar de pais/idioma. Se ubicara en el header del HamburgerMenu, junto al ThemeSwitcher existente. Debe ser compacto y mostrar la bandera + codigo del pais activo.

### Archivos
```
CREAR:
  src/shared/components/CountrySwitcher.tsx

MODIFICAR:
  src/shared/components/HamburgerMenu.tsx   (agregar CountrySwitcher al header)
```

### Especificacion

**CountrySwitcher**:
- Muestra el flag emoji + label corto del pais activo (ej: "🇺🇸 EN")
- Al hacer click, despliega un dropdown/lista con los 5 paises disponibles
- Cada opcion muestra: flag emoji + label (ej: "🇦🇷 Español (AR)")
- Al seleccionar, llama a `setCountry(code)` del contexto
- El dropdown se cierra al seleccionar o al hacer click fuera
- Estilo coherente con ThemeSwitcher (misma zona del header del menu)
- Usar Framer Motion para la animacion del dropdown (consistente con el proyecto)
- Soporte dark/light mode

**HamburgerMenu**:
- En el `{/* Menu Header */}` div, agregar `<CountrySwitcher />` junto al `<ThemeSwitcher />`
- Mantener el layout del header equilibrado con los 2 switchers

### Limites
- NO conectar al CountryContext real aqui si TASK-05 no esta completa — el componente puede existir sin estar wired al provider
- NO modificar la logica de navegacion del menu
- NO cambiar estilos del ThemeSwitcher

### Criterio de aceptacion
- [ ] CountrySwitcher muestra flag + label del pais activo
- [ ] Dropdown lista los 5 paises con flag + label
- [ ] Seleccionar un pais llama a `setCountry` y cierra el dropdown
- [ ] Click fuera del dropdown lo cierra
- [ ] Animacion con Framer Motion
- [ ] Dark/light mode correcto
- [ ] Layout del header del menu se mantiene equilibrado
- [ ] TypeScript compila sin errores

---

## TASK-05: Integracion en App.tsx

### Metadata
- **Feature**: i18n
- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: TASK-01, TASK-02, TASK-03

### Contexto
Conectar el CountryProvider a la jerarquia de providers en App.tsx. Debe envolver a AllyProvider (para que ally tambien pueda acceder al idioma en el futuro). Descomentar los imports de JSON en useTranslation si aun estan comentados.

### Archivos
```
MODIFICAR:
  src/App.tsx                    (agregar CountryProvider)
  src/hooks/useTranslation.ts    (descomentar imports de JSON si aplica)
```

### Especificacion

**Jerarquia resultante**:
```tsx
<ThemeProvider>
  <CountryProvider>      ← NUEVO
    <AllyProvider>
      <AppRoutes />
    </AllyProvider>
  </CountryProvider>
</ThemeProvider>
```

### Limites
- NO cambiar nada mas en App.tsx
- NO migrar strings todavia (eso es TASK-06 en adelante)

### Criterio de aceptacion
- [ ] CountryProvider envuelve a AllyProvider en App.tsx
- [ ] La app carga sin errores con el provider integrado
- [ ] `?country=arg` en la URL activa el pais correctamente
- [ ] El pais persiste en localStorage entre recargas
- [ ] `useTranslation()` funciona desde cualquier componente hijo
- [ ] `useCountry()` funciona desde cualquier componente hijo
- [ ] Build exitoso sin errores

---

## TASK-06: Migracion — Layout components

### Metadata
- **Feature**: i18n
- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: TASK-05

### Contexto
Reemplazar todos los strings hardcodeados en los componentes de layout compartidos por llamadas a `t()` o `tHtml()`. Estos componentes se usan en todas las paginas, asi que su migracion tiene el mayor impacto.

### Archivos
```
MODIFICAR:
  src/shared/layout/HeroOverlay.tsx          (~10 strings)
  src/shared/layout/Footer.tsx               (~15 strings)
  src/shared/layout/Faqs.tsx                 (~200+ strings — la mas extensa)
  src/shared/layout/PricingSection.tsx        (~20 strings)
  src/shared/layout/CalculatorTableSection.tsx (~8 strings)
  src/shared/layout/GatewaySection.tsx        (~10 strings)
  src/shared/layout/Benefits.tsx             (~25 strings)
  src/shared/layout/TestimonialSection.tsx    (~10 strings)
```

### Especificacion

**Patron de migracion**:
```tsx
// ANTES:
<h2>One Million Deals</h2>
<p>You Choose Where <br className="md:hidden" /> to Save</p>

// DESPUES (texto plano):
<h2>{t('layout.heroOverlay.title')}</h2>

// DESPUES (con HTML en el valor):
<p dangerouslySetInnerHTML={tHtml('layout.heroOverlay.subtitle')} />
```

**Para arrays de datos** (testimonials, FAQs, benefits):
```tsx
// ANTES:
const benefits = [
  { title: 'Save $2,000+ per year', desc: '...' },
  ...
];

// DESPUES:
const benefits = [
  { title: t('layout.benefits.items.0.title'), desc: t('layout.benefits.items.0.desc') },
  ...
];
// O generar dinamicamente si la estructura lo permite
```

**Faqs.tsx sera el archivo mas extenso** — cada pregunta y respuesta del Accordion necesita migrarse. Considerar generar los items de FAQ desde un array del JSON.

### Limites
- NO cambiar la estructura visual ni el layout de ningun componente
- NO cambiar clases de Tailwind
- NO agregar ni quitar funcionalidad
- Si un string contiene solo un brand name (ej: "Papa John's"), dejarlo hardcodeado
- NO modificar los archivos de contexto

### Criterio de aceptacion
- [ ] Todos los strings user-facing en los 8 archivos usan `t()` o `tHtml()`
- [ ] Los componentes renderizan identico al estado actual (sin cambios visuales)
- [ ] `dangerouslySetInnerHTML` usado donde los valores contienen HTML
- [ ] No quedan strings hardcodeados en ingles (excepto brand names)
- [ ] TypeScript compila sin errores
- [ ] No hay console warnings de keys faltantes

---

## TASK-07: Migracion — Home page

### Metadata
- **Feature**: i18n
- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: TASK-05

### Contexto
Migrar los componentes de la pagina Home a usar `t()` / `tHtml()`.

### Archivos
```
MODIFICAR:
  src/features/home/components/HeroSection.tsx       (~5 strings)
  src/features/home/components/CategoriesSection.tsx  (~15 strings)
  src/features/home/components/BenefitsSection.tsx    (~20 strings)
  src/features/home/components/LearnHow.tsx           (~5 strings)
  src/features/home/Home.tsx                         (si tiene strings directos)
```

### Limites
- NO cambiar estructura visual ni estilos
- NO cambiar logica de componentes

### Criterio de aceptacion
- [ ] Todos los strings user-facing usan `t()` o `tHtml()`
- [ ] Renderizado identico al actual
- [ ] No quedan strings hardcodeados (excepto brand names)
- [ ] TypeScript compila sin errores

---

## TASK-08: Migracion — Category pages

### Metadata
- **Feature**: i18n
- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: TASK-05

### Contexto
Migrar las 4 category pages. Comparten estructura identica pero tienen datos diferentes (testimonials, articles, titles). Cada una tiene ~35-40 strings.

### Archivos
```
MODIFICAR:
  src/features/shop/Shop.tsx            (~40 strings)
  src/features/travel/Travel.tsx        (~35 strings)
  src/features/dining/Dining.tsx        (~35 strings)
  src/features/entertainment/Entertainment.tsx  (~40 strings)
```

### Especificacion
Los datos inline (testimonials, articles) deben migrarse a keys del JSON:
```tsx
// ANTES:
const categoryTestimonials = [
  { text: '"I regularly use the Jiffy Lube discount..." — David M.' },
  ...
];

// DESPUES:
const categoryTestimonials = [
  { text: t('shop.testimonials.0.text') },
  ...
];
```

### Limites
- NO refactorizar la estructura de datos de las categories
- NO cambiar props que se pasan a componentes compartidos (HeroTrendy, etc.)
- NO unificar las 4 pages en un componente generico

### Criterio de aceptacion
- [ ] Las 4 pages usan `t()` / `tHtml()` para todo el texto
- [ ] Testimonials, articles y hero text migrados
- [ ] Renderizado identico al actual
- [ ] TypeScript compila sin errores

---

## TASK-09: Migracion — Business page

### Metadata
- **Feature**: i18n
- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: TASK-05

### Contexto
Migrar los 8 componentes del landing page B2B. Es la seccion mas compleja despues de FAQs por la cantidad de texto en modelos de partnership, CTAs, y estadisticas.

### Archivos
```
MODIFICAR:
  src/features/business/Business.tsx
  src/features/business/components/HeroSection.tsx        (~8 strings)
  src/features/business/components/AudienceCards.tsx       (~20 strings)
  src/features/business/components/PartnershipModels.tsx   (~50 strings)
  src/features/business/components/HowItWorks.tsx          (~15 strings)
  src/features/business/components/LookingToAchieve.tsx    (~25 strings)
  src/features/business/components/StrategyCallCTA.tsx     (~20 strings)
  src/features/business/components/OpportunitiesSection.tsx (~5 strings)
  src/features/business/components/BrandsShowcase.tsx      (~15 strings)
```

### Limites
- NO cambiar la logica de animaciones (Framer Motion)
- NO cambiar integraciones externas (Calendly, etc.)
- NO modificar estilos

### Criterio de aceptacion
- [ ] Los 8+ componentes de business usan `t()` / `tHtml()`
- [ ] Estadisticas en AudienceCards migradas
- [ ] Textos de PartnershipModels migrados (incluyendo bullet points)
- [ ] CTAs y botones migrados
- [ ] Renderizado identico al actual
- [ ] TypeScript compila sin errores

---

## TASK-10: Migracion — Affiliates + RevenueCalculator

### Metadata
- **Feature**: i18n
- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: TASK-05

### Contexto
Migrar las 4 paginas de afiliados y el RevenueCalculator compartido. El calculator tiene texto condicional segun el tipo de buyer (Agency, Influencer, Company, Non-Profit) — las keys deben reflejar estas variaciones.

### Archivos
```
MODIFICAR:
  src/features/afiliates/Agency.tsx
  src/features/afiliates/Influencer.tsx
  src/features/afiliates/Company.tsx
  src/features/afiliates/NonProfit.tsx
  src/shared/components/RevenueCalculator.tsx  (~80 strings)
```

### Especificacion
Para textos condicionales por buyer type:
```tsx
// Opcion: key dinamico
t(`affiliates.revenueCalculator.buyerLabel.${buyerType}`)
// Donde buyerType = 'agency' | 'influencer' | 'company' | 'nonProfit'
```

### Limites
- NO cambiar la logica de calculo del revenue calculator
- NO cambiar la estructura condicional por buyer type

### Criterio de aceptacion
- [ ] RevenueCalculator usa `t()` para todos los labels, headers y disclaimers
- [ ] Labels condicionales por buyer type resueltos via keys dinamicos
- [ ] Las 4 paginas de afiliados migradas
- [ ] Renderizado identico al actual
- [ ] TypeScript compila sin errores

---

## TASK-11: Migracion — Product, Activate, ThankYou + Shared components

### Metadata
- **Feature**: i18n
- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: TASK-05

### Contexto
Migrar las paginas restantes (product, activate, thank-you) y los componentes compartidos que contienen texto user-facing.

### Archivos
```
MODIFICAR:
  src/features/product/components/HeroProductPage.tsx     (~10 strings)
  src/features/product/components/HowActivateSection.tsx  (~5 strings)
  src/features/product/components/HowSection.tsx          (~5 strings)
  src/features/product/components/TestimonialSection.tsx  (~10 strings)
  src/features/activate/Activate.tsx                     (~40 strings)
  src/features/thankyou/ThankYou.tsx                      (~15 strings)
  src/shared/components/AllyPopUp.tsx                    (~15 strings)
  src/shared/components/ButtonPrimary.tsx                (~5 strings)
  src/shared/components/HamburgerMenu.tsx                (~10 strings: nav labels)
  src/shared/components/SavingsCalculator/SavingsModal.tsx (~12 strings)
  src/shared/constants.ts                                (~3 strings)
```

### Especificacion

**AllyPopUp** tiene interpolacion dinamica:
```tsx
// ANTES: `Join ${influencerName}'s community`
// DESPUES: t('components.allyPopUp.joinCommunity', { name: influencerName })
// JSON: "Join {{name}}'s community of Smart Savers"
```

**HamburgerMenu** — los labels de `menuItems` deben venir del JSON:
```tsx
const menuItems = [
  { label: t('components.hamburgerMenu.home'), path: '/' },
  ...
];
```

**constants.ts** — las funciones `getCopyrightText` y `getSavingsDisclaimer` necesitan recibir `t` como parametro o ser reescritas para usar el hook (evaluar mejor approach).

### Limites
- NO cambiar la logica del AllyPopUp (estados loading/notFound/success)
- NO cambiar la logica de navegacion del HamburgerMenu
- NO cambiar ButtonPrimary props interface (text_1, text_2 siguen siendo props)

### Criterio de aceptacion
- [ ] Todos los archivos listados usan `t()` / `tHtml()`
- [ ] Interpolacion dinamica funciona en AllyPopUp
- [ ] Nav labels del HamburgerMenu vienen del JSON
- [ ] constants.ts integrado con el sistema de traduccion
- [ ] Renderizado identico al actual
- [ ] TypeScript compila sin errores

---

## TASK-12: Crear JSON de traducciones (bra, arg, col, mex)

### Metadata
- **Feature**: i18n
- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: TASK-03

### Contexto
Crear los 4 archivos JSON de traduccion restantes, uno por pais. Cada archivo debe tener **la misma estructura de claves** que `us.json` pero con los valores traducidos al idioma/dialecto correspondiente.

### Archivos
```
CREAR:
  src/translates/bra.json    (portugues brasileño)
  src/translates/arg.json    (espanol argentino)
  src/translates/col.json    (espanol colombiano)
  src/translates/mex.json    (espanol mexicano)
```

### Especificacion

**Reglas de traduccion**:
- Traducir TODOS los valores, manteniendo las claves identicas a `us.json`
- Preservar `{{variables}}` exactamente como estan
- Preservar HTML tags exactamente como estan (solo traducir el texto dentro)
- Brand names NO se traducen: "Uchooseit.us", "Papa John's", "Burger King", etc.
- Adaptar expresiones al dialecto local (ej: AR usa "vos", MX usa "tu", etc.)
- Brasil requiere traduccion completa a portugues, no spanglish
- Numeros y porcentajes mantienen formato original (USD, %, etc.)

**Diferencias dialectales clave**:
| Concepto | ARG | COL | MEX | BRA |
|----------|-----|-----|-----|-----|
| "you" (informal) | vos | tu/usted | tu | voce |
| "savings" | ahorros | ahorros | ahorros | economias |
| "deals" | ofertas | ofertas | ofertas | ofertas |
| "membership" | membresia | membresia | membresia | assinatura |
| "discount" | descuento | descuento | descuento | desconto |

### Limites
- NO modificar `us.json`
- NO cambiar la estructura de claves
- NO dejar claves sin traducir (si no hay diferencia dialectal, usar el espanol neutro)

### Criterio de aceptacion
- [ ] Los 4 JSON existen con la misma estructura de claves que `us.json`
- [ ] Todos los valores estan traducidos al idioma/dialecto correcto
- [ ] `{{variables}}` preservadas intactas
- [ ] HTML tags preservados intactos
- [ ] Brand names sin traducir
- [ ] JSON valido (parseable sin errores)
- [ ] Diferencias dialectales aplicadas correctamente

### Notas del Arquitecto
Esta tarea puede hacerse en paralelo con las tareas de migracion (TASK-06 a TASK-11) ya que solo depende de que `us.json` exista. Si se necesita priorizar, empezar por `arg.json` (espanol es el segundo mercado mas importante) y `bra.json` (portugues es el idioma mas diferente del base).

---

## TASK-13: QA integral y verificacion final

### Metadata
- **Feature**: i18n
- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: TASK-06, TASK-07, TASK-08, TASK-09, TASK-10, TASK-11, TASK-12

### Contexto
Verificar que toda la feature funciona end-to-end: deteccion de pais, persistencia, cambio via switcher, renderizado de traducciones en todos los idiomas, fallback correcto, y build limpio.

### Archivos
```
MODIFICAR: (solo si se encuentran bugs)
  cualquier archivo de la feature
```

### Checklist de verificacion

**Funcionalidad**:
- [ ] `?country=usa` → todo en ingles
- [ ] `?country=arg` → todo en espanol argentino
- [ ] `?country=col` → todo en espanol colombiano
- [ ] `?country=mex` → todo en espanol mexicano
- [ ] `?country=bra` → todo en portugues
- [ ] Sin queryParam → usa (default)
- [ ] `?country=xyz` (invalido) → fallback a usa
- [ ] Cambiar pais via CountrySwitcher actualiza todo sin recargar
- [ ] Pais persiste en localStorage entre recargas
- [ ] Recargar sin queryParam mantiene el pais de localStorage

**Renderizado**:
- [ ] Homepage se ve correcta en los 5 idiomas
- [ ] Category pages (shop, travel, dining, entertainment) correctas
- [ ] Business page correcta
- [ ] Affiliate pages correctas
- [ ] Product, Activate, ThankYou correctas
- [ ] FAQs renderiza correctamente en todos los idiomas
- [ ] AllyPopUp renderiza correctamente con traduccion + datos dinamicos
- [ ] Footer, header, menu correctos

**Tecnico**:
- [ ] `npm run build` exitoso sin errores ni warnings
- [ ] No hay console.warn de keys faltantes en ninguna pagina
- [ ] No hay texto hardcodeado visible en componentes migrados
- [ ] TypeScript strict sin errores
- [ ] HTML renderizado correctamente via dangerouslySetInnerHTML
- [ ] Interpolacion `{{variable}}` funciona en todos los contextos

---

*Creado por: Arquitecto*
*Fecha: 2026-03-13*
