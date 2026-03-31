# Feature: Landings Form Email

## Estado: ACTIVA
## Prioridad: P0
## Rol asignado: Feature Dev

---

## Objetivo
Crear dos landings de captura de email (lead magnet) para pautar en ads: una orientada a publico LATAM (angulo Mundial 2026) y otra a publico local estadounidense (angulo ahorro cotidiano). El objetivo de conversion es recopilar emails ofreciendo 25% de descuento en la membresia por 30 dias. El hero cambia su writing segun la temperatura del trafico via parametro URL `?t=c|w|h`.

## Alcance

### Incluido
- Dos rutas nuevas: `/save` (USA) y `/ahorra` (LATAM)
- Componente de pagina unico `LandingEmail` con prop `variant: 'usa' | 'latam'`
- 4 secciones + footer minimal propio:
  1. **Hero** — video de fondo fijo, copy condicional segun `?t=c|w|h` (c=cold default, w=warm, h=hot)
  2. **InsightForm** — problem agitation + formulario de captura de email (CTA unico)
  3. **SavingsShowcase** — chips de topicos, phone-frame con video, marcas adheridas, como funciona (3 pasos)
  4. **Closing** — video de fondo reutilizado + copy de cierre + campo email + CTA
  5. **Footer minimal** — sin navegacion, solo logo + copyright + disclaimer
- Mover `WaveSeparator` de `business/components/` a `shared/components/` para reutilizacion
- Hook `useTrafficTemp()` para leer y validar el parametro `?t=` de la URL
- Claves i18n en los 5 JSONs de traduccion (us, arg, col, mex, bra)
- Video responsive por device: portrait (mobile) y landscape (desktop), breakpoint 1024px
- Video USA: reutilizar `hero-video-desk.mp4` (landscape) / `hero-video-mobile.mp4` (portrait) existentes
- Video LATAM: placeholder (fallback a videos USA) hasta que se agreguen `latam-hero-desk.mp4` y `latam-hero-mobile.mp4`
- Sin FAQs, sin HeroOverlay global, sin CalculateSavingButton
- Landing pages NO usan el sistema de HeroVideo global de Main.tsx — manejan su propio video inline

### Excluido
- Backend de almacenamiento de emails (simulado en frontend; integracion futura con HubSpot via API propia o form embedding)
- Flujo de checkout/Recurly (estas landings capturan email, no venden directamente)
- Modificaciones a paginas existentes (home, business, categorias)
- Ally popup en estas landings
- Savings calculator modal
- Videos de phone-frame para topicos (se definiran assets despues)

## Estado actual del codigo
- `WaveSeparator` existe en `src/features/business/components/WaveSeparator.tsx`
- Sistema i18n funcional con `useTranslation()` hook y 5 JSONs (`us.json`, `arg.json`, `col.json`, `mex.json`, `bra.json`)
- Parametros URL ya se leen en `CountryContext` (`?country=`) y `AllyContext` (`?code=`) — patron establecido
- `Main.tsx` controla layout global con flags derivados de arrays en `routes.ts`
- Business landing tiene patrones visuales reutilizables (hero con video, wave separator, secciones con bg alterno)

## Archivos permitidos (scope)
```
CREAR:
  src/features/landing-email/LandingEmail.tsx          ← pagina principal
  src/features/landing-email/components/Hero.tsx        ← hero con video bg y copy condicional
  src/features/landing-email/components/InsightForm.tsx ← problem agitation + email form
  src/features/landing-email/components/SavingsShowcase.tsx ← topicos, phone, marcas, how-it-works
  src/features/landing-email/components/Closing.tsx     ← video bg + cierre + email CTA
  src/features/landing-email/components/LandingFooter.tsx  ← footer minimal
  src/features/landing-email/components/EmailCaptureForm.tsx ← form reutilizable (insight + closing)
  src/features/landing-email/components/VideoBackground.tsx  ← video de fondo reutilizable (hero + closing)
  src/hooks/useTrafficTemp.ts                           ← hook para leer ?t= param
  src/shared/components/WaveSeparator.tsx               ← movido desde business

MODIFICAR:
  src/routes/AppRoutes.tsx                              ← agregar rutas /save y /ahorra
  src/shared/routes.ts                                  ← agregar a NO_FAQS_PAGES, NO agregar a HERO_PAGES
  src/hooks/useRouteConfig.ts                           ← agregar flag isLandingEmail para logo blanco
  src/features/business/Business.tsx                    ← actualizar import de WaveSeparator
  src/features/business/components/HeroSection.tsx      ← actualizar import de WaveSeparator
  src/translates/us.json                                ← claves landing email
  src/translates/arg.json                               ← claves landing email
  src/translates/col.json                               ← claves landing email
  src/translates/mex.json                               ← claves landing email
  src/translates/bra.json                               ← claves landing email

NO TOCAR:
  src/shared/layout/Main.tsx                            ← no modificar logica de HeroVideo global
  src/shared/layout/HeroVideo.tsx                       ← no modificar
  src/shared/layout/HeroOverlay.tsx                     ← no modificar
  src/context/                                          ← no crear nuevos contextos
  src/features/home/                                    ← no modificar
  src/features/business/components/WaveSeparator.tsx    ← se elimina (movido a shared)
```

## Dependencias
- Ninguna feature previa requerida
- Assets pendientes: video `latam-hero.mp4` (se usara placeholder/fallback al video USA mientras tanto)
- Assets pendientes: videos de phone-frame para topicos de SavingsShowcase

## Criterios de aceptacion
1. `/save` renderiza landing USA con copys en ingles y video hero existente
2. `/ahorra` renderiza landing LATAM con copys en espanol y placeholder de video latam
3. `?t=c` (o sin parametro) muestra hero cold, `?t=w` muestra warm, `?t=h` muestra hot
4. Formulario de email aparece en seccion InsightForm y en seccion Closing
5. WaveSeparator funciona correctamente tanto en Business como en las nuevas landings
6. Todas las claves i18n estan en los 5 JSONs de traduccion
7. Las landings NO muestran: FAQs, HeroOverlay global, CalculateSavingButton, AllyPopUp
8. Las landings SI muestran: header con logo blanco, su propio footer minimal
9. Responsive: mobile-first, funcional en portrait y landscape
10. Dark mode compatible (aunque estas landings son predominantemente dark por el video)
11. TypeScript compila sin errores
12. No hay console errors ni warnings

## Estructura de la feature
```
.claude/features/landings-form-email/
  brief.md      → este archivo
  tasks.md      → backlog de tareas
  resources/    → copys estructurados por seccion
    latam-copys.md
    usa-copys.md
  doc/          → registro de tareas completadas (usar templates/task-doc.md)
```

---

*Creado por: Arquitecto*
*Fecha: 2026-03-31*
