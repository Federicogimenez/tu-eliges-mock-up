# B2B Landing Page - Backlog de Tareas

## Feature: business
## Estado global: ACTIVA (Fase 2 — Light Mode)

---

| ID | Titulo | Estado | Dependencias |
|----|--------|--------|-------------|
| setup-ruta | Configuracion de ruta y estructura | completada | ninguna |
| hero-video | Hero section con video de fondo fijo | completada | setup-ruta |
| audience-cards | Seccion "Built for Organizations" | completada | setup-ruta |
| partnership-models | Partnership Models (RSM + Bulk) | completada | setup-ruta |
| opportunities | Seccion "1 Million+ Opportunities" | completada | hero-video |
| brands-savings | Brands showcase + savings calculator | completada | setup-ruta |
| how-it-works | Seccion "How It Works" (4 pasos) | completada | setup-ruta |
| strategy-cta | CTA final + Google Calendar booking | completada | partnership-models |
| looking-to-achieve | Carrusel/grid "What Are You Looking to Achieve?" | completada | partnership-models |
| looking-to-achieve-integration | Integrar LookingToAchieve en PartnershipModels | completada | looking-to-achieve |
| looking-to-achieve-qa | QA visual y responsive del componente | pendiente | looking-to-achieve-integration |
| | | | |
| **Fase 2 — Light Mode** | | | |
| b2b-tokens | Registrar tokens B2B como CSS variables en `@theme` | completada | ninguna |
| route-config-theme | Permitir que /business responda al toggle de tema | completada | b2b-tokens |
| business-wrapper-theme | Light mode en Business.tsx (wrapper principal) | completada | route-config-theme |
| audience-cards-theme | Light mode en AudienceCards.tsx | completada | business-wrapper-theme |
| partnership-models-theme | Light mode en PartnershipModels.tsx + LookingToAchieve.tsx | completada | business-wrapper-theme |
| opportunities-theme | Light mode en OpportunitiesSection.tsx | completada | business-wrapper-theme |
| brands-showcase-theme | Light mode en BrandsShowcase.tsx | completada | business-wrapper-theme |
| how-strategy-theme | Light mode en HowItWorks.tsx + StrategyCallCTA.tsx | completada | business-wrapper-theme |
| business-theme-qa | QA visual light/dark en todos los breakpoints | pendiente | todas las anteriores |

---

### setup-ruta: Configuracion de ruta y estructura

- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: ninguna

**Contexto**: Crear la estructura de carpetas `src/features/business/` con entry point `Business.tsx`. Registrar ruta `/business` en AppRoutes.tsx con lazy import. Agregar `/business` a `heroPages`, `noFaqsPages` y `darkBgPages` en Main.tsx. Crear flag `businessPage` para suprimir hero overlay y CalculateSavingButton.

**Archivos**:
```
CREAR:   src/features/business/Business.tsx
MODIFICAR: src/routes/AppRoutes.tsx, src/shared/layout/Main.tsx, src/shared/components/HamburgerMenu.tsx
```

**Criterio de aceptacion**:
- [x] Ruta `/business` renderiza componente Business
- [x] `/business` en heroPages (video fijo), noFaqsPages (sin FAQs), darkBgPages (logo blanco)
- [x] businessPage flag suprime hero content overlay y floating CalculateSavingButton
- [x] Link "Business" visible en HamburgerMenu

---

### hero-video: Hero section con video de fondo fijo

- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: setup-ruta

**Contexto**: Crear HeroSection.tsx como spacer transparente (60dvh) que deja ver el video fijo del Main. Incluir WaveSeparator azul en la base como transicion visual al contenido oscuro.

**Archivos**:
```
CREAR:   src/features/business/components/HeroSection.tsx, src/features/business/components/WaveSeparator.tsx
```

**Criterio de aceptacion**:
- [x] Hero ocupa 60dvh min-h-300px, transparente sobre video fijo
- [x] WaveSeparator SVG sine-wave en azul uchooseit en la base
- [x] Transicion visual limpia entre hero y contenido oscuro

---

### audience-cards: Seccion "Built for Organizations"

- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: setup-ruta

**Contexto**: Crear AudienceCards.tsx con 4 cards (Companies+Customers, Companies+Employees, Nonprofits, Associations). Cada card tiene borde izquierdo con color (purple, blue, green, grey), icono react-icons, titulo y descripcion. Grid 2x2 en desktop, stack en mobile.

**Archivos**:
```
CREAR:   src/features/business/components/AudienceCards.tsx
```

**Criterio de aceptacion**:
- [x] 4 cards con colores, iconos y textos correctos
- [x] Responsive: stack mobile, 2-col tablet+
- [x] Heading con "With an Audience" en azul uchooseit

---

### partnership-models: Partnership Models (RSM + Bulk)

- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: setup-ruta

**Contexto**: Crear PartnershipModels.tsx con badge "Partnership Models", titulo gradiente, grid 2-col con RSM (purple) y Bulk (blue), y BookCallButton.tsx reutilizable. Crear BookCallButton como boton azul full-width con icono calendario.

**Archivos**:
```
CREAR:   src/features/business/components/PartnershipModels.tsx, src/features/business/components/BookCallButton.tsx
```

**Criterio de aceptacion**:
- [x] Badge pill + titulo con gradiente blue-to-purple
- [x] 2 model cards con iconos, items con checkmarks
- [x] BookCallButton ejecuta onBookCall
- [x] Texto "No obligation" con icono verified_user

---

### opportunities: Seccion "1 Million+ Opportunities"

- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: hero-video

**Contexto**: Crear OpportunitiesSection.tsx con overlay gradiente sobre video fijo, texto "1 Million+ Opportunities" con colores blue/green, mockup de celular con Mobile_Deals-Map.webp, status bar simulada y search bar overlay.

**Archivos**:
```
CREAR:   src/features/business/components/OpportunitiesSection.tsx
NUEVO ASSET: public/Mobile_Deals-Map.webp
```

**Criterio de aceptacion**:
- [x] Seccion min-h-screen con video fijo visible a traves
- [x] Overlay gradiente oscuro para legibilidad
- [x] Mockup celular con aspect-ratio 9/18.5, border-radius, status bar
- [x] Imagen Mobile_Deals-Map.webp cargando correctamente
- [x] "500k downloads" caption

---

### brands-savings: Brands showcase + savings calculator

- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: setup-ruta

**Contexto**: Crear BrandsShowcase.tsx con pills de categoria (Shop, Travel, Dining, Entertainment), Keen Slider de logos de marcas (6 por categoria, grid 3-col), y bloque inline de savings con "$2,030.00" y boton Calculate Savings que abre modal con `hideMembershipCost: true`. Agregar soporte para `hideMembershipCost` en SavingsCalculatorModalContext.

**Archivos**:
```
CREAR:   src/features/business/components/BrandsShowcase.tsx
MODIFICAR: src/context/SavingsCalculatorModalContext.tsx, src/shared/components/SavingsCalculator/SavingsModal.tsx
```

**Criterio de aceptacion**:
- [x] Pills de categoria con colores correctos, activa rellena
- [x] Keen Slider con drag:false, cambia al click de pill
- [x] 6 logos por categoria en grid 3-col
- [x] Bloque savings con $2,030.00 en verde
- [x] Modal se abre sin mostrar costo de membresia

---

### how-it-works: Seccion "How It Works" (4 pasos)

- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: setup-ruta

**Contexto**: Crear HowItWorks.tsx con 4 pasos numerados en circulos de color (3 blue, 1 green final). Titulo "Next Steps". Single column mobile, 2-col desktop.

**Archivos**:
```
CREAR:   src/features/business/components/HowItWorks.tsx
```

**Criterio de aceptacion**:
- [x] 4 pasos con circulos numerados y colores correctos
- [x] Paso 4 en verde (Community Launch)
- [x] Responsive: 1-col mobile, 2-col lg+

---

### strategy-cta: CTA final + Google Calendar booking

- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: partnership-models

**Contexto**: Crear StrategyCallCTA.tsx con heading "Let's Validate the Right Model for You", card con 3 items de la llamada, BookCallButton reutilizado, y footer con "No commitment" + "Free consultation". Google Calendar URL definida como constante en Business.tsx y pasada como prop onBookCall.

**Archivos**:
```
CREAR:   src/features/business/components/StrategyCallCTA.tsx
```

**Criterio de aceptacion**:
- [x] Card con 3 items de la llamada con checkmarks
- [x] BookCallButton abre Google Calendar en nueva ventana
- [x] Footer con MdLock + textos de confianza

---

### looking-to-achieve: Carrusel/grid "What Are You Looking to Achieve?"

- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: partnership-models

**Contexto**: Crear `LookingToAchieve.tsx` — un componente que muestra 4 cards de casos de uso ("Organization & Customers", "Organization & Employees", "Non-Profit Organizations", "Organization + Members") con sus bullet points. En mobile (< md) se renderiza como Keen Slider carousel (1 slide a la vez, swipeable, dots). En desktop (>= md) se renderiza como CSS grid 2-col (md) o 4-col (lg). Las cards deben alinearse visualmente con las cards de PartnershipModels: gradiente oscuro, borde sutil de color, rounded-3xl, iconos react-icons/md con checkmarks MdCheckCircle para los bullets.

**Datos** (inline en el archivo, por convencion del proyecto):

| Slide | Titulo | Icon (md) | Color accent | Bullets |
|-------|--------|-----------|-------------|---------|
| 1 | Organization & Customers | MdStorefront | cyan | "I'm looking for a value-added benefit" / "I'm looking to improve customer acquisition" / "I'm looking for travel solutions" |
| 2 | Organization & Employees | MdGroups | amber | "I'm looking to offer perks without increasing payroll costs" / "I'm looking for a value-added benefit for my employees" |
| 3 | Non-Profit Organizations | MdVolunteerActivism | green | "I'm looking for a fundraising incentive" |
| 4 | Organization + Members | MdCardMembership | indigo | "I'm looking for a value-added benefit for my members" |

**Patron de diseño para las cards** (replicar el pattern de PartnershipModels):
- Container: `bg-gradient-to-b from-{color}-900/40 to-black rounded-3xl p-5 border border-{color}-500/20`
- Titulo: `font-bold text-lg` con icono del color accent a la izquierda
- Bullets: `text-[11px] text-gray-300` con `MdCheckCircle` en el color accent

**Patron carousel mobile** (replicar BrandsShowcase/TestimonialSection):
- `useKeenSlider({ loop: true, slides: { perView: 1.15, spacing: 12 }, slideChanged(s) { setCurrentSlide(s.track.details.rel) } })`
- Dot navigation con clases `.dots > .dot` ya existentes en `index.css`

**Estrategia carousel/grid**: Usar dos renders separados con Tailwind responsive classes (`md:hidden` para carousel, `hidden md:grid` para grid). NO usar deteccion JS de breakpoints.

**Titulo de seccion**: `"What Are You Looking to Achieve?"` con `text-2xl md:text-3xl font-extrabold text-center` y subtexto descriptivo en `text-gray-400 text-sm`. Sin badge pill (es sub-seccion dentro de PartnershipModels, no seccion independiente).

**Archivos**:
```
CREAR:   src/features/business/components/LookingToAchieve.tsx
LEER:    src/features/business/components/PartnershipModels.tsx (referencia de estilo cards)
LEER:    src/features/business/components/BrandsShowcase.tsx (referencia de patron Keen Slider)
```

**Limites**:
- NO crear archivos de datos separados (data inline por convencion)
- NO usar autoplay en el slider (el usuario esta leyendo/decidiendo)
- NO agregar nuevas dependencias (Keen Slider y react-icons ya instalados)
- NO modificar archivos existentes en esta tarea

**Criterio de aceptacion**:
- [ ] 4 cards renderizan con contenido correcto de `resourse.md`
- [ ] Mobile (< md): carousel horizontal swipeable con dots centrados
- [ ] Desktop (md+): grid 2-col; lg+: grid 4-col
- [ ] Estilo de cards visualmente consistente con PartnershipModels (gradiente, borde, rounded-3xl, checkmarks)
- [ ] Cada card tiene color accent diferenciado (cyan, amber, green, indigo)
- [ ] Cada card tiene icono react-icons/md apropiado
- [ ] Transicion carousel/grid limpia al cambiar viewport (sin flash ni layout shift)
- [ ] Cards con altura uniforme en modo grid (min-h o flex stretch)

**Notas del Arquitecto**:
Los colores cyan, amber, green e indigo se eligieron para complementar la paleta existente de AudienceCards sin repetir el purple y blue ya usados en los modelos RSM/Bulk. Los iconos MdStorefront, MdGroups, MdVolunteerActivism y MdCardMembership mapean semanticamente al tipo de organizacion de cada card. El `perView: 1.15` en mobile deja asomar el borde de la siguiente card para affordance de swipe.

---

### looking-to-achieve-integration: Integrar LookingToAchieve en PartnershipModels

- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: looking-to-achieve

**Contexto**: Importar y renderizar `<LookingToAchieve />` dentro de `PartnershipModels.tsx`, ubicandolo entre la seccion Models Grid (`<section className="grid grid-cols-2 gap-4 mb-12">`) y la seccion CTA (`<section className="text-center space-y-6">`). Agregar spacing vertical consistente con el ritmo de la pagina.

**Ubicacion exacta en el JSX**:
```
{/* Models Grid */}
<section className="grid grid-cols-2 gap-4 mb-12">...</section>

← AQUI: <LookingToAchieve />

{/* CTA */}
<section className="text-center space-y-6">...</section>
```

**Archivos**:
```
MODIFICAR: src/features/business/components/PartnershipModels.tsx
```

**Limites**:
- NO modificar el contenido ni estilo del Models Grid ni del CTA
- NO cambiar la interfaz `PartnershipModelsProps`
- Solo agregar import + render del nuevo componente con spacing adecuado

**Criterio de aceptacion**:
- [ ] `<LookingToAchieve />` renderiza entre Models Grid y CTA
- [ ] Spacing vertical consistente (`mb-12` o `py-12`) con secciones hermanas
- [ ] No hay layout shift ni overlap con contenido existente
- [ ] El texto "Not sure which model fits?" del CTA sigue leyendose naturalmente como cierre del flujo
- [ ] No hay errores de consola

---

### looking-to-achieve-qa: QA visual y responsive del componente

- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: looking-to-achieve-integration

**Contexto**: Verificar el componente integrado en todos los breakpoints y corregir problemas visuales. Verificar que el carousel funciona correctamente en mobile, que el grid se ve proporcional en desktop, y que el componente se integra sin fisuras con las secciones hermanas en el flujo de PartnershipModels.

**Archivos**:
```
MODIFICAR: src/features/business/components/LookingToAchieve.tsx (ajustes si necesario)
```

**Limites**:
- Solo ajustes de estilo/layout — NO cambiar logica, datos ni estructura del componente
- NO tocar otros archivos

**Criterio de aceptacion**:
- [ ] Mobile 375px: carousel swipea sin problemas, dots centrados, contenido no se desborda
- [ ] Tablet 768px: grid 2-col se activa correctamente
- [ ] Desktop 1024px+: grid 4-col, cards proporcionales
- [ ] Cards tienen altura uniforme en grid (la card con mas contenido no desbalancea el layout)
- [ ] Dots tienen touch target minimo 44px
- [ ] Contraste correcto sobre fondo negro (no hay textos invisibles)
- [ ] El componente fluye visualmente con PartnershipModels arriba y el CTA abajo sin saltos visuales

---

## Fase 2 — Light Mode para /business

> **Objetivo**: Hacer que la landing B2B responda al toggle de tema igual que el resto del sitio. Actualmente todos los componentes tienen colores oscuros hardcodeados y la ruta esta marcada en `DARK_BG_PAGES` (linea 20 de `src/shared/routes.ts`), lo que fuerza logo blanco e ignora el tema del usuario.

---

### b2b-tokens: Registrar tokens B2B como CSS variables en `@theme`

- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: ninguna

**Contexto**: Los componentes de /business usan colores hex hardcodeados que no existen en el sistema de diseño (`@theme` en `index.css`). Antes de poder hacer dual-theme, estos colores deben centralizarse como CSS variables para poder referenciarlos via Tailwind y, a futuro, tener variantes claras/oscuras si se requiere.

**Colores a registrar en el bloque `@theme` de `index.css`**:

| Variable | Valor | Uso actual |
|----------|-------|------------|
| `--color-blue-b2b` | `#00A3FF` | Primary B2B accent (badges, iconos, pasos) |
| `--color-green-b2b` | `#22C55E` | CTA savings, paso 4 |
| `--color-b2b-surface` | `#111111` | Phone mockup bg (OpportunitiesSection) |
| `--color-b2b-card` | `#0A0A0A` | Card backgrounds dark |

**Archivos**:
```
MODIFICAR: src/index.css (bloque @theme, agregar 4 variables)
```

**Limites**:
- NO modificar variables existentes
- NO tocar componentes todavia — solo registrar los tokens
- NO crear archivo de configuracion aparte — todo va en `@theme`

**Criterio de aceptacion**:
- [ ] Las 4 variables estan declaradas en el bloque `@theme` de `index.css`
- [ ] Se pueden usar como `bg-blue-b2b`, `text-green-b2b`, etc. en Tailwind
- [ ] El sitio compila sin errores
- [ ] No hay cambios visuales (los componentes aun no referencian estas variables)

---

### route-config-theme: Permitir que /business responda al toggle de tema

- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: b2b-tokens

**Contexto**: La linea 20 de `src/shared/routes.ts` define `DARK_BG_PAGES = ['/business']`. Esto fuerza el logo blanco en `/business` independientemente del tema elegido por el usuario (ver `useRouteConfig.ts` linea 25: `theme === 'dark' || DARK_BG_PAGES.includes(pathname)`). Para que /business responda al toggle, hay que eliminar `/business` de este array. El logo pasara a depender del `theme` global como en todas las demas paginas.

**Archivos**:
```
MODIFICAR: src/shared/routes.ts (linea 20 — vaciar DARK_BG_PAGES o remover '/business')
```

**Limites**:
- NO modificar `useRouteConfig.ts` — la logica ya es correcta, solo el input data cambia
- NO modificar `Main.tsx`
- NO eliminar la constante `DARK_BG_PAGES` (puede usarse a futuro), solo vaciar su array: `export const DARK_BG_PAGES: string[] = []`

**Criterio de aceptacion**:
- [ ] `/business` ya no esta en `DARK_BG_PAGES`
- [ ] En dark mode: logo blanco (por logica de `theme === 'dark'` en `useRouteConfig`)
- [ ] En light mode: logo negro (ahora respeta el tema)
- [ ] El array `DARK_BG_PAGES` sigue exportandose (vacio) para no romper imports

**Notas del Arquitecto**:
Esto es intencionalmente la tarea mas pequena. Cambia una sola linea, pero desbloquea que /business reaccione al tema. Mientras los componentes internos sigan hardcodeados en oscuro, visualmente se vera roto en light mode — eso es esperado y se resuelve en las tareas siguientes.

---

### business-wrapper-theme: Light mode en Business.tsx (wrapper principal)

- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: route-config-theme

**Contexto**: `Business.tsx` es el wrapper que contiene todas las secciones. Tiene dos fondos oscuros hardcodeados que deben recibir variantes claras:

| Linea aprox. | Actual | Cambio |
|------|--------|--------|
| 32 | `bg-linear-180 from-black/50 to-20% to-black` | `bg-linear-180 from-white/50 to-20% to-white dark:from-black/50 dark:to-black` |
| 42 | `bg-black` | `bg-white dark:bg-black` |

**Paleta light mode para /business** (guia general para todas las tareas siguientes):

| Elemento | Dark mode (actual) | Light mode (nuevo) |
|----------|-------------------|-------------------|
| Fondo principal | `bg-black` | `bg-white` |
| Fondo gradientes | `from-black/50 to-black` | `from-white/50 to-white` |
| Texto principal | `text-white` | `text-gray-900` (heredado de body) |
| Texto secundario | `text-gray-300` / `text-zinc-300` | `text-gray-600` |
| Texto terciario | `text-neutral-400` / `text-zinc-400` | `text-gray-500` |
| Bordes | `border-gray-800` / `border-zinc-800` | `border-gray-200` |
| Card BG oscuro | `bg-zinc-900` | `bg-gray-50` |
| Accent tints (900/30) | `bg-{color}-900/30` | `bg-{color}-100` |
| Accent text (400) | `text-{color}-400` | `text-{color}-600` |
| Check icons (500) | `text-{color}-500` | `text-{color}-600` |

**Archivos**:
```
MODIFICAR: src/features/business/Business.tsx
```

**Limites**:
- NO cambiar la estructura JSX ni la logica
- Solo agregar clases `dark:` y reemplazar valores hardcoded con pares light/dark
- NO tocar sub-componentes (se hacen en tareas separadas)

**Criterio de aceptacion**:
- [ ] En dark mode: apariencia identica a la actual
- [ ] En light mode: fondo blanco/claro en lugar de negro
- [ ] Transicion `transition-colors duration-300` presente en los wrappers para cambio suave

**Notas del Arquitecto**:
La tabla de paleta light mode es la referencia central para todas las tareas de esta fase. Cada tarea de componente debe seguir estos mappings. El principio es simple: donde hay `bg-black` → `bg-white dark:bg-black`, donde hay `text-white` → `text-gray-900 dark:text-white`, etc.

---

### audience-cards-theme: Light mode en AudienceCards.tsx

- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: business-wrapper-theme

**Contexto**: AudienceCards tiene texto blanco hardcodeado y tints oscuros (ej. `bg-green-900/30`, `text-green-400`) para los iconos. Ademas, las stat-cards usan `border-gray-800`.

**Cambios requeridos** (aplicar la tabla de paleta de `business-wrapper-theme`):

| Actual | Nuevo |
|--------|-------|
| `text-white` (heading, stats) | `dark:text-white` (hereda `text-gray-900` de body) |
| `border-gray-800` | `border-gray-200 dark:border-gray-800` |
| `text-gray-300` (labels) | `text-gray-600 dark:text-gray-300` |
| `bg-{color}-900/30` (icon tints) | `bg-{color}-100 dark:bg-{color}-900/30` |
| `text-{color}-400` (icons) | `text-{color}-600 dark:text-{color}-400` |

**Archivos**:
```
MODIFICAR: src/features/business/components/AudienceCards.tsx
```

**Limites**:
- NO cambiar datos, iconos ni estructura
- Solo modificar clases de Tailwind existentes

**Criterio de aceptacion**:
- [ ] Dark mode: identico al actual
- [ ] Light mode: texto oscuro legible, tints de color suaves, bordes claros
- [ ] Los 6 colores de accent siguen diferenciandose visualmente en ambos temas

---

### partnership-models-theme: Light mode en PartnershipModels.tsx + LookingToAchieve.tsx

- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: business-wrapper-theme

**Contexto**: Ambos componentes comparten el mismo patron visual de cards con gradientes oscuros (`from-{color}-900/40 to-black`), bordes sutiles (`border-{color}-500/20`), y texto en tonos claros. Deben actualizarse juntos para mantener coherencia visual.

**Cambios en PartnershipModels.tsx**:

| Actual | Nuevo |
|--------|-------|
| `text-white` (wrapper) | `dark:text-white` |
| `bg-[#00A3FF]/10` (badge) | `bg-blue-b2b/10` (usar nuevo token) |
| `border-[#00A3FF]/30` (badge) | `border-blue-b2b/30` |
| `bg-gradient-to-r from-[#00A3FF] to-purple-500 bg-clip-text` | `bg-gradient-to-r from-blue-b2b to-purple-500 bg-clip-text` |
| `from-{color}-900/40` (cards) | `from-{color}-100 dark:from-{color}-900/40` |
| `to-black` (cards) | `to-white dark:to-black` |
| `border-{color}-500/20` | `border-{color}-300 dark:border-{color}-500/20` |
| `text-{color}-400` (subtitulos) | `text-{color}-600 dark:text-{color}-400` |
| `text-neutral-400` (desc) | `text-gray-500 dark:text-neutral-400` |
| `text-gray-300` (bullets) | `text-gray-600 dark:text-gray-300` |
| `text-{color}-500` (checks) | `text-{color}-600 dark:text-{color}-500` |

**Cambios en LookingToAchieve.tsx** (mismo patron):

| Actual | Nuevo |
|--------|-------|
| `from-{color}-900/40 to-black` (cards) | `from-{color}-100 to-white dark:from-{color}-900/40 dark:to-black` |
| `border-{color}-500/20` | `border-{color}-300 dark:border-{color}-500/20` |
| `text-{color}-400` (icons) | `text-{color}-600 dark:text-{color}-400` |
| `text-gray-300` (bullets) | `text-gray-600 dark:text-gray-300` |
| `text-{color}-500` (checks) | `text-{color}-600 dark:text-{color}-500` |

**Archivos**:
```
MODIFICAR: src/features/business/components/PartnershipModels.tsx
MODIFICAR: src/features/business/components/LookingToAchieve.tsx
```

**Limites**:
- NO cambiar datos inline ni estructura JSX
- NO cambiar logica de Keen Slider en LookingToAchieve
- Donde se referencie `#00A3FF` como string hex, reemplazar por el token `blue-b2b`

**Criterio de aceptacion**:
- [ ] Dark mode: identico al actual
- [ ] Light mode: cards con fondo claro tenue de color, texto oscuro, bordes visibles
- [ ] El badge "Partnership Models" se lee bien en ambos temas
- [ ] Los gradientes del titulo siguen siendo visibles en ambos temas
- [ ] Las cards RSM (purple) y Bulk (blue) mantienen identidad de color diferenciada
- [ ] LookingToAchieve cards (cyan, amber, green, indigo) coherentes con PartnershipModels

---

### opportunities-theme: Light mode en OpportunitiesSection.tsx

- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: business-wrapper-theme

**Contexto**: Esta seccion es la mas compleja para tematizar porque tiene: (1) un overlay gradiente sobre el video fijo, (2) un mockup de celular con colores de superficie, y (3) texto con hex hardcodeados `#00A3FF` y `#22C55E`.

**Cambios requeridos**:

| Actual | Nuevo |
|--------|-------|
| `from-black/60 via-black/50 to-black` (overlay) | `from-white/60 via-white/50 to-white dark:from-black/60 dark:via-black/50 dark:to-black` |
| `text-white` (heading) | `dark:text-white` |
| `text-[#00A3FF]` | `text-blue-b2b` (token) |
| `text-[#22C55E]` | `text-green-b2b` (token) |
| `bg-[#111111]` (phone) | `bg-gray-100 dark:bg-b2b-surface` (token) |
| `border-zinc-800` (phone) | `border-gray-200 dark:border-zinc-800` |
| `bg-zinc-900` (map area) | `bg-gray-50 dark:bg-zinc-900` |
| `bg-zinc-800/90` (search bar) | `bg-gray-200/90 dark:bg-zinc-800/90` |
| `text-zinc-400` (placeholder, caption) | `text-gray-500 dark:text-zinc-400` |

**Archivos**:
```
MODIFICAR: src/features/business/components/OpportunitiesSection.tsx
```

**Limites**:
- NO cambiar la imagen `Mobile_Deals-Map.webp` — se ve bien en ambos temas
- NO alterar la estructura del mockup de celular
- El overlay del video debe seguir garantizando legibilidad del texto en ambos modos

**Criterio de aceptacion**:
- [ ] Dark mode: identico al actual
- [ ] Light mode: overlay claro sobre video, texto oscuro legible
- [ ] El mockup de celular tiene superficie clara coherente con el tema
- [ ] Los colores `text-blue-b2b` y `text-green-b2b` se leen correctamente en fondo claro
- [ ] Caption "500k downloads" legible en ambos temas

---

### brands-showcase-theme: Light mode en BrandsShowcase.tsx

- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: business-wrapper-theme

**Contexto**: BrandsShowcase tiene dos sub-secciones: (1) el showcase de marcas con pills de categoria y Keen Slider de logos, y (2) el bloque de savings con "$2,030.00". Los logos de marcas ya estan en cards blancas (`bg-white`), lo cual funciona en ambos temas. El fondo `bg-black` del wrapper y el texto `text-white` necesitan variantes.

**Cambios requeridos**:

| Actual | Nuevo |
|--------|-------|
| `bg-black` (ambos wrappers) | `bg-white dark:bg-black` |
| `text-white` (titulos) | `dark:text-white` |
| `bg-white` (brand cards) | `bg-white dark:bg-white border border-gray-100 dark:border-transparent` |
| `bg-green-500/30` (dividers) | `bg-green-200 dark:bg-green-500/30` |
| `text-green-500` (label) | `text-green-600 dark:text-green-500` |
| `text-green-600` (amount, font-black) | `text-green-700 dark:text-green-600` |
| `bg-green-500 text-white` (boton) | Sin cambio (accent solido funciona en ambos temas) |

**Archivos**:
```
MODIFICAR: src/features/business/components/BrandsShowcase.tsx
```

**Limites**:
- NO cambiar los colores dinamicos de las pills de categoria (`#884cfc`, `#00b3eb`, etc.) — son brand colors fijos
- NO alterar logica de Keen Slider ni la llamada al savings modal

**Criterio de aceptacion**:
- [ ] Dark mode: identico al actual
- [ ] Light mode: fondo claro, brand logos con borde sutil para definirlos sobre blanco
- [ ] Savings block legible: verde oscuro sobre fondo claro
- [ ] Las pills de categoria mantienen sus colores de marca
- [ ] Boton "Calculate Savings" sigue siendo verde solido (funciona en ambos temas)

---

### how-strategy-theme: Light mode en HowItWorks.tsx + StrategyCallCTA.tsx

- **Rol**: Feature Dev
- **Estado**: completada
- **Dependencias**: business-wrapper-theme

**Contexto**: Estos dos componentes son secciones finales del flujo. Comparten patron de texto claro sobre fondo oscuro heredado. Se agrupan en una sola tarea porque son pequenos y no tienen complejidad propia.

**Cambios en HowItWorks.tsx**:

| Actual | Nuevo |
|--------|-------|
| `text-white` (wrapper) | `dark:text-white` |
| `bg-[#00A3FF]` (step circles 1-3) | `bg-blue-b2b` (token) |
| `bg-[#22C55E]` (step circle 4) | `bg-green-b2b` (token) |
| `text-zinc-300` (descriptions) | `text-gray-600 dark:text-zinc-300` |

**Cambios en StrategyCallCTA.tsx**:

| Actual | Nuevo |
|--------|-------|
| `text-white` (wrapper) | `dark:text-white` |
| `text-zinc-300` (desc, items) | `text-gray-600 dark:text-zinc-300` |
| `bg-zinc-900` (card) | `bg-gray-50 dark:bg-zinc-900` |
| `border-zinc-800` (card) | `border-gray-200 dark:border-zinc-800` |
| `text-[#00A3FF]` (icon, checks) | `text-blue-b2b` (token) |
| `text-zinc-400` (footer) | `text-gray-500 dark:text-zinc-400` |

**Archivos**:
```
MODIFICAR: src/features/business/components/HowItWorks.tsx
MODIFICAR: src/features/business/components/StrategyCallCTA.tsx
```

**Limites**:
- NO cambiar la URL de Google Calendar ni la logica de `onBookCall`
- NO tocar BookCallButton.tsx (ya usa `bg-blue-uchooseit`, funciona en ambos temas)
- NO tocar WaveSeparator.tsx (ya usa `var(--color-blue-uchooseit)`, funciona)

**Criterio de aceptacion**:
- [ ] Dark mode: identico al actual
- [ ] Light mode: paso circles azul/verde visibles sobre fondo claro, texto oscuro
- [ ] Card CTA con fondo gris claro y borde sutil en light mode
- [ ] Los step circles mantienen su color solido (no necesitan variante light — son accent)
- [ ] BookCallButton y WaveSeparator sin cambios visuales

---

### business-theme-qa: QA visual light/dark en todos los breakpoints

- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: audience-cards-theme, partnership-models-theme, opportunities-theme, brands-showcase-theme, how-strategy-theme

**Contexto**: Verificacion final de la pagina completa en ambos temas y todos los breakpoints. Buscar inconsistencias de contraste, textos invisibles, bordes perdidos, transiciones abruptas entre secciones, y cualquier regresion visual.

**Checklist de verificacion**:

**Light mode — Mobile (375px)**:
- [ ] Hero → video visible, scroll a contenido claro
- [ ] WaveSeparator transiciona limpio de video a fondo blanco
- [ ] AudienceCards stat boxes legibles
- [ ] PartnershipModels cards legibles con gradientes claros
- [ ] LookingToAchieve carousel swipeable, dots visibles
- [ ] OpportunitiesSection overlay claro legible, mockup con superficie clara
- [ ] BrandsShowcase pills y logos visibles, savings legible
- [ ] HowItWorks pasos legibles
- [ ] StrategyCallCTA card con fondo claro

**Light mode — Desktop (1280px)**:
- [ ] Mismos puntos que mobile pero verificando layout multi-columna
- [ ] Grid de PartnershipModels 2-col proporcional
- [ ] LookingToAchieve grid 4-col proporcional

**Dark mode — Regresion**:
- [ ] Verificar que NO hay cambios visuales respecto al estado actual
- [ ] El toggle de tema funciona ida y vuelta sin glitches
- [ ] `transition-colors duration-300` se percibe suave

**General**:
- [ ] Logo cambia correctamente: blanco en dark, negro en light
- [ ] No hay textos invisibles (mismo color que el fondo) en ninguna seccion
- [ ] No hay errores de consola
- [ ] El toggle de tema en HamburgerMenu funciona en /business igual que en el resto del sitio

**Archivos**:
```
MODIFICAR: cualquier componente de src/features/business/ donde se detecten problemas
```

**Limites**:
- Solo ajustes de estilo — NO cambiar estructura, datos ni logica
- NO tocar archivos fuera de `src/features/business/`

**Notas del Arquitecto**:
El caso mas delicado es `OpportunitiesSection` — el overlay sobre el video fijo debe ser lo suficientemente opaco en light mode para que el texto oscuro sea legible, pero no tan opaco que tape completamente el video. Ajustar opacidades si es necesario (ej. `from-white/70` en lugar de `from-white/60`).
