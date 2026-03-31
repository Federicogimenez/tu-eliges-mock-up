# Landings Form Email — Tasks

---

# TASK-01: Infraestructura — WaveSeparator compartido, hook useTrafficTemp, rutas

## Metadata
- **Feature**: landings-form-email
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: ninguna

## Contexto
Preparar la infraestructura antes de construir las secciones. Tres acciones:

1. **Mover WaveSeparator a shared**: El componente `WaveSeparator` vive en `src/features/business/components/WaveSeparator.tsx`. Moverlo a `src/shared/components/WaveSeparator.tsx` sin modificar su implementacion. Actualizar los imports en Business.tsx y HeroSection.tsx de business.

2. **Crear hook `useTrafficTemp`**: Lee el parametro URL `?t=` y retorna la temperatura del trafico. Valores validos: `'c'` (cold), `'w'` (warm), `'h'` (hot). Default: `'c'`. Usa `useSearchParams` de react-router-dom (patron consistente con el routing existente; NO usar `window.location` ya que esta landing vive dentro del Router). Retorna un type `TrafficTemp = 'c' | 'w' | 'h'`.

3. **Registrar rutas**: Agregar `/save` y `/ahorra` a `AppRoutes.tsx` con lazy loading. Agregar ambas a `NO_FAQS_PAGES` en `routes.ts`. NO agregar a `HERO_PAGES` (estas landings manejan su propio video, no usan el HeroVideo global). Agregar logica en `useRouteConfig.ts` para que estas rutas usen logo blanco (agregar un flag `isLandingEmail` o incluirlas en el check de `isHeroPage` del logo sin agregarlas al array — evaluar la opcion mas limpia; la mas simple es agregar un `LANDING_EMAIL_PAGES` array en routes.ts y checkear en useRouteConfig para el logo).

El componente `LandingEmail` se crea vacio (placeholder con un `<div>Landing Email</div>`) solo para que las rutas funcionen. Se implementa en tareas siguientes.

## Archivos
```
CREAR:
  src/shared/components/WaveSeparator.tsx       ← mover desde business
  src/hooks/useTrafficTemp.ts                   ← hook nuevo
  src/features/landing-email/LandingEmail.tsx   ← placeholder

MODIFICAR:
  src/features/business/Business.tsx            ← actualizar import WaveSeparator
  src/features/business/components/HeroSection.tsx ← actualizar import WaveSeparator
  src/routes/AppRoutes.tsx                      ← agregar rutas
  src/shared/routes.ts                          ← agregar a NO_FAQS_PAGES + LANDING_EMAIL_PAGES
  src/hooks/useRouteConfig.ts                   ← logo blanco para landing email

ELIMINAR:
  src/features/business/components/WaveSeparator.tsx ← ya movido a shared
```

## Limites
- No modificar Main.tsx
- No modificar la implementacion visual de WaveSeparator (solo mover)
- No crear contextos nuevos
- El placeholder de LandingEmail no necesita estilos ni logica

## Criterio de aceptacion
- [ ] WaveSeparator importado desde `shared/components/` en business — pagina business se ve identica
- [ ] `useTrafficTemp()` retorna `'c'` sin parametro, y `'c'|'w'|'h'` segun `?t=`
- [ ] `/save` y `/ahorra` renderizan el placeholder sin errores
- [ ] Ambas rutas no muestran FAQs
- [ ] Logo del header es blanco en ambas rutas
- [ ] TypeScript compila sin errores

## Notas del Arquitecto
Para el logo blanco, la solucion mas limpia es agregar `LANDING_EMAIL_PAGES` en `routes.ts` e importarlo en `useRouteConfig` para incluirlo en la condicion del logo. Asi se mantiene el patron de arrays declarativos que ya usa el proyecto.

---

# TASK-02: Claves i18n — Agregar todos los copys a los 5 JSONs de traduccion

## Metadata
- **Feature**: landings-form-email
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: ninguna (puede ejecutarse en paralelo con TASK-01)

## Contexto
Agregar todas las claves de traduccion para ambas landings bajo el namespace `landingEmail`. Los copys fuente estan en:
- `.claude/features/landings-form-email/resources/usa-copys.md` (contenido USA)
- `.claude/features/landings-form-email/resources/latam-copys.md` (contenido LATAM)

### Estructura de claves propuesta

```
landingEmail.usa.hero.cold.headline
landingEmail.usa.hero.cold.subheadline
landingEmail.usa.hero.cold.supporting
landingEmail.usa.hero.warm.headline
landingEmail.usa.hero.warm.subheadline
landingEmail.usa.hero.warm.supporting
landingEmail.usa.hero.hot.headline
landingEmail.usa.hero.hot.subheadline
landingEmail.usa.hero.hot.supporting

landingEmail.usa.insight.title
landingEmail.usa.insight.description
landingEmail.usa.insight.channels.0 / .1 / .2

landingEmail.usa.form.title
landingEmail.usa.form.description
landingEmail.usa.form.includes.0 / .1 / .2
landingEmail.usa.form.fieldPlaceholder
landingEmail.usa.form.button
landingEmail.usa.form.microcopy
landingEmail.usa.form.successMessage

landingEmail.usa.savings.title
landingEmail.usa.savings.subtitle
landingEmail.usa.savings.topics.0.label / .1.label / .2.label / .3.label
landingEmail.usa.savings.footer
landingEmail.usa.savings.disclaimer

landingEmail.usa.howItWorks.steps.0.title / .0.description
landingEmail.usa.howItWorks.steps.1.title / .1.description
landingEmail.usa.howItWorks.steps.2.title / .2.description
landingEmail.usa.howItWorks.closing

landingEmail.usa.closing.line1
landingEmail.usa.closing.line2
landingEmail.usa.closing.line3
landingEmail.usa.closing.disclaimer

landingEmail.latam.hero.cold.headline
landingEmail.latam.hero.cold.subheadline
landingEmail.latam.hero.cold.supporting
... (misma estructura warm/hot)

landingEmail.latam.insight.title
... (misma estructura que usa)

landingEmail.latam.form.*
landingEmail.latam.savings.*
landingEmail.latam.howItWorks.*
landingEmail.latam.closing.*
```

### Reglas de traduccion
- **us.json**: USA copys en ingles (fuente: usa-copys.md)
- **arg.json, col.json, mex.json**: LATAM copys en espanol (fuente: latam-copys.md). Los tres comparten el mismo contenido (espanol neutro, no regionalizado).
- **bra.json**: LATAM copys traducidos al portugues brasileno.

IMPORTANTE: Ambos JSONs (us.json y los LATAM) deben tener TODAS las claves (tanto `landingEmail.usa.*` como `landingEmail.latam.*`). Esto permite que el sistema de fallback funcione correctamente. En la practica, `/save` usa claves `landingEmail.usa.*` y `/ahorra` usa `landingEmail.latam.*`, pero las claves deben existir en todos los archivos para evitar warnings en consola.

## Archivos
```
MODIFICAR:
  src/translates/us.json
  src/translates/arg.json
  src/translates/col.json
  src/translates/mex.json
  src/translates/bra.json
```

## Limites
- No modificar claves existentes
- No alterar la estructura de los JSONs existentes (agregar al final o en posicion logica)
- Respetar el tono y mensaje de los copys fuente — no reescribir creativamente

## Criterio de aceptacion
- [ ] Todas las claves definidas arriba existen en los 5 JSONs
- [ ] `us.json` tiene copys USA en ingles
- [ ] `arg.json`, `col.json`, `mex.json` tienen copys LATAM en espanol
- [ ] `bra.json` tiene copys LATAM en portugues brasileno
- [ ] No hay claves rotas o con typos en los keys
- [ ] Los JSONs son validos (parsean sin error)

## Notas del Arquitecto
El hook `useTranslation` ya tiene fallback a `us.json` si una clave no existe en el idioma actual. Aun asi, es buena practica tener todas las claves en todos los archivos para evitar warnings en dev.

---

# TASK-03: Componentes base — VideoBackground y EmailCaptureForm

## Metadata
- **Feature**: landings-form-email
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-01

## Contexto
Crear dos componentes reutilizables dentro de la feature que se usaran en multiples secciones de la landing:

### VideoBackground
Componente que renderiza un video de fondo con overlay oscuro semi-transparente. Se usa en Hero y en Closing.

**Props:**
```typescript
interface VideoBackgroundProps {
  variant: 'usa' | 'latam'
  className?: string
  children: React.ReactNode
}
```

**Comportamiento:**
- **Responsive por device** (misma logica que `HeroVideo.tsx`):
  - Mobile (<=1024px): video portrait
  - Desktop (>1024px): video landscape
  - Usa `useWindowSize()` para detectar viewport y `useInlineVideo` para autoplay
- **Videos por variant:**
  - `variant='usa'`: `/hero-video-desk.mp4` (landscape) y `/hero-video-mobile.mp4` (portrait)
  - `variant='latam'`: `/latam-hero-desk.mp4` (landscape) y `/latam-hero-mobile.mp4` (portrait). Por ahora, fallback a los videos USA hasta que se agreguen los assets LATAM.
- Video: autoPlay, muted, loop, playsInline
- Overlay: `bg-black/50` sobre el video (mismo patron que HeroVideo)
- Position: `fixed` con `inset-0` y `z-0` — el video queda fijo y el contenido scrollea sobre el
- `children` se renderiza posicionado relativamente sobre el video
- Mostrar imagen de preview mientras carga el video (mismos previews existentes para USA)

**IMPORTANTE sobre la posicion fixed:** Como el video debe verse tanto en Hero como en Closing, la solucion es que el video sea `fixed` (siempre visible en el fondo) y las secciones intermedias (InsightForm, SavingsShowcase) tengan `bg-white/bg-black` solido que lo tapen. El VideoBackground se monta UNA sola vez en LandingEmail, no en cada seccion.

### EmailCaptureForm
Formulario de captura de email reutilizable. Se usa en InsightForm y en Closing.

**Props:**
```typescript
interface EmailCaptureFormProps {
  variant: 'usa' | 'latam'
  context: 'form' | 'closing'  // para diferenciar estilos si es necesario
}
```

**Comportamiento:**
- **Estado inicial (formulario visible):**
  - Input de email con placeholder traducido (`landingEmail.{variant}.form.fieldPlaceholder`)
  - Boton CTA con texto traducido (`landingEmail.{variant}.form.button`)
  - Microcopy debajo (`landingEmail.{variant}.form.microcopy`)
  - Validacion basica HTML5 (`type="email"`, `required`)
  - Estilos: input con fondo blanco/transparente, bordes redondeados, boton con bg `blue-uchooseit` — inspirarse en el estilo del BookCallButton de business
  - En contexto `'closing'`: texto blanco sobre fondo transparente (video detras)
  - En contexto `'form'`: sobre fondo solido (InsightForm section)

- **Estado de confirmacion (tras submit):**
  - Ocultar input + boton CTA
  - Mostrar label de confirmacion traducido (`landingEmail.{variant}.form.successMessage`)
  - Texto: "Tu email se ha registrado correctamente, en breve nos comunicaremos contigo. Revisa spam." (traducido por idioma)
  - Transicion suave (fade) entre estados
  - Estado manejado con `useState<'idle' | 'success'>` local

- **Submit (simulado):**
  - `onSubmit`: `console.log` del email, simular delay de 500ms con setTimeout, luego cambiar a estado `'success'`
  - Marcar con comentario `// TODO: integrar con HubSpot — opciones: API propia en backend o form embedding`
  - No limpiar el campo — directamente ocultar el form

- **Integracion futura:** Este formulario se conectara a HubSpot, ya sea via API propia en el backend de `api.tueliges.us` o via form embedding de HubSpot. La implementacion actual es un placeholder funcional.

## Archivos
```
CREAR:
  src/features/landing-email/components/VideoBackground.tsx
  src/features/landing-email/components/EmailCaptureForm.tsx
```

## Limites
- No duplicar logica de HeroVideo.tsx — inspirarse pero no copiar/pegar (este componente tiene props, HeroVideo no)
- No crear un servicio de email ni endpoint — el form solo hace console.log por ahora
- No agregar dependencias externas para validacion de email

## Criterio de aceptacion
- [ ] VideoBackground renderiza video responsive: portrait en mobile, landscape en desktop
- [ ] VideoBackground con variant='usa' usa videos existentes (desk + mobile)
- [ ] VideoBackground con variant='latam' hace fallback a videos USA (assets pendientes)
- [ ] EmailCaptureForm renderiza input email + boton + microcopy en estado idle
- [ ] EmailCaptureForm tras submit: oculta input+boton, muestra label de confirmacion con fade
- [ ] EmailCaptureForm hace console.log del email en submit (simulado con delay)
- [ ] Comentario TODO presente para futura integracion con HubSpot
- [ ] Ambos componentes usan claves i18n correctas
- [ ] Responsive y dark mode compatible
- [ ] TypeScript compila sin errores

## Notas del Arquitecto
El patron de video fixed con secciones opacas encima es el enfoque mas limpio para reutilizar el video entre Hero y Closing sin montarlo dos veces. Las secciones intermedias simplemente lo tapan con su propio fondo solido, y la seccion de Closing deja que el video se vea nuevamente al no tener fondo solido.

---

# TASK-04: Seccion Hero

## Metadata
- **Feature**: landings-form-email
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-01, TASK-02, TASK-03

## Contexto
Construir la seccion Hero de la landing. Es la primera vista que el usuario ve, ocupa el viewport completo con el video de fondo, y su copy cambia segun la temperatura del trafico (`?t=c|w|h`).

### Estructura visual
Referencia: `HeroSection.tsx` de business — misma estructura de layout.

```
┌──────────────────────────────────┐
│  [video de fondo fixed]          │
│                                  │
│      HEADLINE (condicional)      │
│      subheadline (condicional)   │
│      supporting line (condic.)   │
│                                  │
│  ┌────────────────────────────┐  │
│  │      ~ WaveSeparator ~     │  │
│  └────────────────────────────┘  │
└──────────────────────────────────┘
```

**Props:**
```typescript
interface HeroProps {
  variant: 'usa' | 'latam'
}
```

**Comportamiento:**
- Ocupa `h-[85dvh] min-h-[300px]` (como business hero)
- Contenido centrado verticalmente, alineado hacia abajo (`justify-end pb-14`)
- Texto blanco
- Usa `useTrafficTemp()` para obtener la temperatura
- Mapeo de temperatura a claves i18n:
  - `'c'` → `landingEmail.{variant}.hero.cold.*`
  - `'w'` → `landingEmail.{variant}.hero.warm.*`
  - `'h'` → `landingEmail.{variant}.hero.hot.*`
- headline: `text-3xl md:text-4xl font-extrabold`
- subheadline: `text-lg md:text-xl`
- supporting: `text-sm md:text-base text-neutral-300`
- WaveSeparator al fondo con posicion absoluta (patron de business)
- Contenido con `position: relative` y `z-10` para estar sobre el video fixed

## Archivos
```
CREAR:
  src/features/landing-email/components/Hero.tsx

LEER (referencia, no modificar):
  src/features/business/components/HeroSection.tsx
```

## Limites
- No agregar botones ni CTAs en el Hero — el unico CTA es el formulario en InsightForm
- No agregar animaciones complejas (Framer Motion opcional para fade-in simple)
- El Hero no monta el video — el video ya esta montado por LandingEmail via VideoBackground

## Criterio de aceptacion
- [ ] Hero muestra headline, subheadline y supporting line correctos segun `?t=c|w|h`
- [ ] Sin parametro `?t=`, muestra copy cold (default)
- [ ] WaveSeparator aparece en la base del hero
- [ ] Responsive: legible en mobile y desktop
- [ ] Texto blanco visible sobre el video con overlay

---

# TASK-05: Seccion InsightForm — Problem Agitation + Email Form

## Metadata
- **Feature**: landings-form-email
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-02, TASK-03

## Contexto
Segunda seccion de la landing. Combina problem agitation (por que el usuario deberia interesarse) con el formulario de captura de email (unico CTA de la landing). Tiene fondo solido que tapa el video fixed.

### Estructura visual (2 columnas en desktop, stacked en mobile)

```
┌──────────────────────────────────────────────┐
│  bg-white dark:bg-neutral-950 (solido)       │
│                                              │
│  ┌──────────────────┐  ┌──────────────────┐  │
│  │  INSIGHT          │  │  FORM            │  │
│  │                   │  │                  │  │
│  │  "What Most..."   │  │  "Unlock your.." │  │
│  │  description...   │  │  description...  │  │
│  │  • channel 1      │  │  includes:       │  │
│  │  • channel 2      │  │  • item 1        │  │
│  │  • channel 3      │  │  • item 2        │  │
│  │                   │  │  • item 3        │  │
│  │  "Uchooseit.us    │  │                  │  │
│  │   gives members   │  │  [email input]   │  │
│  │   access..."      │  │  [CTA button]    │  │
│  │                   │  │  microcopy       │  │
│  └──────────────────┘  └──────────────────┘  │
│                                              │
└──────────────────────────────────────────────┘
```

**Props:**
```typescript
interface InsightFormProps {
  variant: 'usa' | 'latam'
}
```

**Comportamiento:**
- Fondo solido `bg-white dark:bg-neutral-950` con padding vertical generoso
- Layout: `grid md:grid-cols-2 gap-8` — insight a la izquierda, form a la derecha
- Mobile: stacked, insight arriba, form abajo
- Insight: titulo, descripcion, lista de canales (bullets), frase de cierre
- Form: usa `EmailCaptureForm` con `context='form'`
- Claves: `landingEmail.{variant}.insight.*` y `landingEmail.{variant}.form.*`
- El fondo solido es crucial para tapar el video fixed de la seccion anterior

## Archivos
```
CREAR:
  src/features/landing-email/components/InsightForm.tsx
```

## Limites
- No agregar otros CTAs ademas del formulario de email
- No agregar imagenes o mockups (seccion de texto puro + form)

## Criterio de aceptacion
- [ ] Seccion muestra insight con titulo, descripcion, canales y frase de cierre
- [ ] EmailCaptureForm renderiza correctamente en la columna derecha
- [ ] Layout responsivo: 2 columnas en desktop, stacked en mobile
- [ ] Fondo solido tapa completamente el video de la seccion anterior
- [ ] Todas las claves i18n se resuelven correctamente

---

# TASK-06: Seccion SavingsShowcase — Topicos, Phone-Frame, Marcas, Como Funciona

## Metadata
- **Feature**: landings-form-email
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-02

## Contexto
Tercera seccion. Muestra el valor concreto del producto: que descuentos hay, en que categorias, y como funciona. Es la seccion mas visual y compleja.

### Estructura visual

```
┌──────────────────────────────────────────────┐
│  bg-white dark:bg-neutral-950 (solido)       │
│                                              │
│  "Ahorra con tu acceso privado"              │
│  "Los topicos mas recomendados hasta 50%OFF" │
│                                              │
│  ┌─────────────────────────────────────────┐ │
│  │  [chip1] [chip2] [chip3] [chip4]        │ │
│  │                                         │ │
│  │  ┌──────────┐  "Marcas adheridas:       │ │
│  │  │ phone    │   Avis, Wyndham..."       │ │
│  │  │ frame    │                           │ │
│  │  │ (video)  │   [slider de marcas]      │ │
│  │  │          │                           │ │
│  │  └──────────┘                           │ │
│  └─────────────────────────────────────────┘ │
│                                              │
│  "Pequeños ahorros pueden sumar..."          │
│  "IMPORTANTE: Los descuentos varian..."      │
│                                              │
│  ─── COMO FUNCIONA ───                       │
│  ① Activa    ② Busca    ③ Usa               │
│  "Eso es todo."                              │
│                                              │
│  ┌────────────────────────────────┐          │
│  │      ~ WaveSeparator ~         │          │
│  └────────────────────────────────┘          │
└──────────────────────────────────────────────┘
```

**Props:**
```typescript
interface SavingsShowcaseProps {
  variant: 'usa' | 'latam'
}
```

**Comportamiento del selector de topicos:**
- 4 chips/tabs seleccionables (como los category tabs de BrandsShowcase en business)
- USA: Shop, Travel, Dining, Entertainment
- LATAM: Rent a car, Hotel en Las Vegas, Hotel en Nueva York, Restaurantes en Miami
- Al seleccionar un chip, cambia el contenido del phone-frame y las marcas
- Phone-frame: placeholder (div con aspect ratio 9/18.5 y bordes redondeados, similar a OpportunitiesSection de business). El contenido real (video de canje) se agregara despues — por ahora mostrar imagen placeholder o el contenido estatico
- Marcas: slider horizontal de logos (patron existente en BrandsShowcase)

**Como funciona:**
- 3 pasos con numeracion circular (referencia: HowItWorks de business pero simplificado a 3 pasos)
- Layout horizontal en desktop, stacked en mobile
- Frase de cierre "Eso es todo."

**Al final de esta seccion:** WaveSeparator para transicionar al Closing

## Archivos
```
CREAR:
  src/features/landing-email/components/SavingsShowcase.tsx

LEER (referencia, no modificar):
  src/features/business/components/BrandsShowcase.tsx
  src/features/business/components/OpportunitiesSection.tsx
  src/features/business/components/HowItWorks.tsx
```

## Limites
- No reutilizar directamente los componentes de business (crear nuevos inspirados en ellos)
- El phone-frame puede tener contenido placeholder por ahora
- No agregar Keen Slider si no es necesario para el slider de marcas — evaluar si CSS scroll snap es suficiente
- El selector de topicos no necesita animaciones complejas — estado simple con useState

## Criterio de aceptacion
- [ ] 4 chips de topicos funcionales con cambio de contenido al seleccionar
- [ ] Phone-frame con aspecto de celular y contenido placeholder
- [ ] Marcas adheridas se muestran (al menos como texto o logos placeholder)
- [ ] 3 pasos de "Como funciona" con layout responsive
- [ ] WaveSeparator al final de la seccion
- [ ] Fondo solido continuo que tapa el video fixed
- [ ] Todas las claves i18n correctas segun variant

## Notas del Arquitecto
Esta es la tarea mas compleja. Si el Dev necesita dividirla en sub-tareas, puede hacerlo, pero los archivos deben mantenerse dentro del scope definido. Los assets de phone-frame y logos de marcas se definiran despues — usar placeholders por ahora.

---

# TASK-07: Seccion Closing + Footer Minimal

## Metadata
- **Feature**: landings-form-email
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-02, TASK-03

## Contexto
Ultima seccion visible. Tras el WaveSeparator de SavingsShowcase, el fondo solido desaparece y el video fixed vuelve a ser visible. Sobre el video se muestra el copy de cierre y el formulario de email repetido. Debajo, un footer minimal.

### Estructura visual

```
┌──────────────────────────────────┐
│  [video de fondo fixed visible]  │
│                                  │
│  "Tu viaje al Mundial debería    │
│   crear recuerdos."              │
│  "No estrés por los precios."    │
│  "Deja tu correo y recibe 25%"  │
│                                  │
│  [email input]                   │
│  [CTA button]                    │
│  microcopy                       │
│                                  │
│  disclaimer                      │
│                                  │
├──────────────────────────────────┤
│  FOOTER MINIMAL                  │
│  [logo] · © 2026 Uchooseit.us   │
│  "Descuento por tiempo limitado" │
└──────────────────────────────────┘
```

**Props Closing:**
```typescript
interface ClosingProps {
  variant: 'usa' | 'latam'
}
```

**Comportamiento Closing:**
- Fondo transparente para que el video fixed se vea
- Contenido con `position: relative` y `z-10`
- Texto blanco, centrado
- 3 lineas de copy emocional (`landingEmail.{variant}.closing.line1/2/3`)
- `EmailCaptureForm` con `context='closing'`
- Disclaimer al final (`landingEmail.{variant}.closing.disclaimer`)
- Padding vertical generoso para dar "aire" con el video detras

**Footer Minimal (LandingFooter):**
- Fondo oscuro solido (`bg-neutral-950`)
- Logo Uchooseit (blanco, pequeno)
- Copyright: `© 2026 Uchooseit.us`
- Sin links de navegacion, sin redes sociales
- Minimalista — no distraer del CTA

## Archivos
```
CREAR:
  src/features/landing-email/components/Closing.tsx
  src/features/landing-email/components/LandingFooter.tsx
```

## Limites
- No usar el Footer global de Main.tsx — este es independiente
- No agregar links de navegacion en el footer
- No agregar animaciones al closing (simplicidad)

## Criterio de aceptacion
- [ ] Video de fondo visible detras de la seccion Closing
- [ ] 3 lineas de copy emocional renderizadas correctamente
- [ ] EmailCaptureForm funcional en contexto 'closing'
- [ ] Disclaimer visible
- [ ] LandingFooter minimal con logo y copyright
- [ ] Texto legible sobre el video (contraste suficiente)

---

# TASK-08: Ensamblaje — LandingEmail page component

## Metadata
- **Feature**: landings-form-email
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-01, TASK-02, TASK-03, TASK-04, TASK-05, TASK-06, TASK-07

## Contexto
Ensamblar todas las secciones en el componente pagina `LandingEmail.tsx`. Este es el componente que renderizan las rutas `/save` y `/ahorra`.

### Estructura del componente

```typescript
interface LandingEmailProps {
  variant: 'usa' | 'latam'
}

export default function LandingEmail({ variant }: LandingEmailProps) {
  return (
    <>
      <VideoBackground variant={variant}>
        {/* video fixed, siempre visible de fondo */}
      </VideoBackground>

      <div className="relative z-10">
        <Hero variant={variant} />

        {/* Secciones con fondo solido que tapan el video */}
        <InsightForm variant={variant} />
        <SavingsShowcase variant={variant} />

        {/* Fondo transparente: el video vuelve a verse */}
        <Closing variant={variant} />
        <LandingFooter />
      </div>
    </>
  )
}
```

**En AppRoutes.tsx las rutas pasan la prop variant:**
```typescript
<Route path="/save" element={<LandingEmail variant="usa" />} />
<Route path="/ahorra" element={<LandingEmail variant="latam" />} />
```

**Ajustes finales:**
- Verificar que el Footer global de Main.tsx NO se muestre en estas rutas. Revisar si necesita agregarse logica a `Main.tsx` o si el footer de la landing se apila debajo del global. Si el Footer global se muestra, agregar las rutas a un nuevo array `NO_FOOTER_PAGES` en routes.ts y checkear en Main.tsx — PERO esto implica tocar Main.tsx. Alternativa: que el LandingFooter sea suficientemente diferente para que convivan. **Decision: evaluar en implementacion. Si el footer global se ve, la solucion mas limpia es ocultarlo para estas rutas.**
- Verificar que el header con logo blanco se muestra correctamente
- Verificar transiciones entre secciones (wave separators, fondo solido vs transparente)
- Scroll smooth si no esta ya habilitado globalmente
- Verificar que la animacion `animate-appear-up` (usada en business) aplica bien al wrapper

## Archivos
```
MODIFICAR:
  src/features/landing-email/LandingEmail.tsx  ← reemplazar placeholder con ensamblaje real
  src/routes/AppRoutes.tsx                     ← ajustar rutas con prop variant
  src/shared/routes.ts                         ← agregar NO_FOOTER_PAGES si es necesario
  src/hooks/useRouteConfig.ts                  ← agregar showFooter flag si es necesario
  src/shared/layout/Main.tsx                   ← ocultar Footer global si es necesario (minimo cambio)
```

## Limites
- Cambios a Main.tsx deben ser minimos — solo condicional de Footer si es necesario
- No agregar logica de negocio en el componente pagina — solo composicion de secciones
- No modificar secciones ya implementadas (TASK-04 a TASK-07)

## Criterio de aceptacion
- [ ] `/save` renderiza landing USA completa: Hero(cold|warm|hot) → InsightForm → SavingsShowcase → Closing → LandingFooter
- [ ] `/ahorra` renderiza landing LATAM completa con misma estructura
- [ ] Video de fondo visible en Hero y Closing, tapado en secciones intermedias
- [ ] Wave separators en las transiciones correctas (hero→insight, savings→closing)
- [ ] Footer global NO visible (solo LandingFooter)
- [ ] Header con logo blanco visible
- [ ] No FAQs, no AllyPopUp, no CalculateSavingButton
- [ ] Responsive completo en mobile y desktop
- [ ] TypeScript compila sin errores, no hay console warnings

## Notas del Arquitecto
Esta tarea es de integracion. El Dev debe probar el flujo completo navegando a `/save?t=c`, `/save?t=w`, `/save?t=h` y lo mismo para `/ahorra`. Verificar que los tres copys del hero cambian correctamente. Verificar que el scroll muestra la transicion video → solido → video de forma fluida.

---

# Orden de ejecucion recomendado

```
TASK-01 (infraestructura)  ──┐
                              ├──→ TASK-03 (componentes base) ──→ TASK-04 (Hero)
TASK-02 (i18n)  ─────────────┤                                 ──→ TASK-05 (InsightForm)
                              │                                 ──→ TASK-07 (Closing+Footer)
                              └──→ TASK-06 (SavingsShowcase)

Todas ──→ TASK-08 (ensamblaje)
```

TASK-01 y TASK-02 pueden ejecutarse en paralelo.
TASK-04, TASK-05, TASK-06, TASK-07 pueden ejecutarse en paralelo tras sus dependencias.
TASK-08 es la ultima, integra todo.
