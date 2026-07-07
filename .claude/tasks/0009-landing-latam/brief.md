# Feature: Landing LATAM (maqueta paralela)

## Estado: ACTIVA
## Prioridad: P1
## Rol asignado: Feature Dev

---

## Objetivo
Construir una **maqueta paralela y desechable** en la ruta `/save-latam`, sin tocar la landing email actual (`/save`). Implementa el diseño del nuevo Uchooseit Design System (`Uchooseit-Design-System/ui_kits/website/save.html` + sus componentes JSX de referencia) traducido a React 19 / TS / Tailwind v4 del repo. Sirve para **testear el nuevo diseño en vivo** y, una vez aprobado, **reemplazar** la landing email oficial; después esta maqueta se elimina.

## Alcance

### Incluido
- Nueva ruta `/save-latam` + nueva carpeta `src/features/landing-latam/` totalmente independiente.
- Video de fondo LATAM (reusar assets `public/latam-hero-desk.mp4` / `public/latam-hero-mobile.mp4`, patrón de `VideoBackground` replicado, NO importado de landing-email).
- **Sección 1 — Hero con Email Capture**: replica el hero del nuevo diseño (display headline con palabra azul `.hl`, glass pill con input email + botón UNIRME tipo `EmailCapture.jsx`), sobre el video LATAM, con `WaveSeparator` inferior para la transición.
- **Sección 2 — Community Carousel (testimonios)**: carrusel horizontal de tarjetas de personas (avatar/imagen + nombre + tag). Al hacer click en una persona se **despliega un carrusel de videos asociados a esa persona**. Carga **on-demand**: el `<video>` de un slide solo se monta/descarga cuando esa persona está abierta y ese slide está activo (`preload="none"`, src diferido). Nada de videos precargados.
- **Sección 3 — Calculadora temática**: replica `TrendCalculator` tal cual el diseño (líneas con icono/label/sub/monto editable, botón quitar línea, botón "agregar gasto", total estimado, panel pitch ~30% de ahorro + CTA). La data por defecto y la lógica de "agregar gasto" se afinarán después — se entrega con la estructura del diseño y data en una constante claramente editable.
- **Sección 4 — Cierre Choosy**: sección final que usa la imagen real `public/choosy-save.png` (reemplaza el placeholder de `ChoosyCTA.jsx`), con copy de upsell + email capture / CTA.
- Registrar la ruta en `AppRoutes.tsx` y agregarla a `LANDING_EMAIL_PAGES` + `NO_FAQS_PAGES` en `routes.ts` (hereda: logo blanco, sin FAQs, sin HeroVideo global).
- Tokens del DS agregados a `index.css` como capa aditiva (prefijo `uc-`), reutilizables por la maqueta.
- Copys hardcoded en **español (LATAM)** dentro de la maqueta — ver Notas del Arquitecto.
- Responsive mobile-first + dark (la maqueta vive en dark por el video).

### Excluido
- **Logo / wordmark propio** — instrucción del usuario: no construir wordmark en la landing. El header global ya pinta el logo blanco vía `useRouteConfig` (no se toca).
- **Cualquier cambio a `src/features/landing-email/`** — la landing oficial queda 100% intacta.
- i18n / claves de traducción en `src/translates/*.json` — la maqueta es desechable y solo LATAM; copys hardcoded. NO se invierte en i18n.
- Integración real de captura de email (HubSpot/API/backend) — el email capture es mock (estado local "¡Listo!", sin envío real).
- Checkout / Recurly / AllyPopup / SavingsModal.
- Editar la carpeta `Uchooseit-Design-System/` (referencia read-only; sus `.jsx` son `window.*` globals, NO módulos importables).
- Tocar `WaveSeparator.tsx` shared (se reutiliza tal cual).
- Definir los assets finales de video por persona y los montos canónicos de la calculadora (se ajustan en una iteración posterior; la maqueta usa data stub testeable).

## Estado actual del codigo

- `/save` → `LandingEmail` (lazy en `AppRoutes.tsx:24,48`). Está en `NO_FAQS_PAGES` y `LANDING_EMAIL_PAGES` (`routes.ts:18,23`). NO está en `HERO_PAGES` (maneja su propio `VideoBackground`).
- `useRouteConfig` (`src/hooks/useRouteConfig.ts:18,24`) ya deriva `isLandingEmail` desde `LANDING_EMAIL_PAGES` → logo blanco. **Agregar `/save-latam` a ese array es suficiente; NO hay que modificar el hook.**
- `WaveSeparator` vive en `src/shared/components/WaveSeparator.tsx` (reutilizable, ya usado por landing-email y business).
- Assets verificados en `public/`: `choosy-save.png`, `latam-hero-desk.mp4`, `latam-hero-mobile.mp4`, y videos stub `landing-email/{rent,hoteles,comida,parque}.webm` (sirven como placeholders de video por persona).
- DS de referencia: `Uchooseit-Design-System/colors_and_type.css` (tokens), `ui_kits/website/kit.css` (estilos página), y `.jsx` (`EmailCapture`, `CommunityCarousel`, `TipVideoCard`, `TrendCalculator`, `ChoosyCTA`, `CTAButton`). Los `.jsx` son `window.X = X` (demo Babel), **referencia visual/estructural — se reescriben como componentes React/TS reales**.
- Patrón de video de fondo: ver `src/features/landing-email/components/VideoBackground.tsx` (usa `useInlineVideo`, `useWindowSize`, `useCountry`, `LazyLoadImage`). Se replica un equivalente LATAM-only en la nueva carpeta, sin importar el de landing-email.

## Archivos permitidos (scope)

```
CREAR:
  src/features/landing-latam/LandingLatam.tsx                    ← orquesta las 4 secciones
  src/features/landing-latam/data.ts                             ← data EDITABLE: members + videos por persona + default lines calculadora
  src/features/landing-latam/components/VideoBackgroundLatam.tsx  ← video bg LATAM (patrón replicado, no importado)
  src/features/landing-latam/components/HeroCapture.tsx           ← hero display + email capture pill + WaveSeparator
  src/features/landing-latam/components/EmailCapturePill.tsx      ← glass pill input+CTA (mock, estado "¡Listo!")
  src/features/landing-latam/components/CommunityCarousel.tsx     ← carrusel horizontal de personas
  src/features/landing-latam/components/PersonVideoCarousel.tsx   ← carrusel de videos de UNA persona, carga on-demand
  src/features/landing-latam/components/TrendCalculator.tsx       ← calculadora temática tal cual el diseño
  src/features/landing-latam/components/ChoosyClosing.tsx         ← cierre con public/choosy-save.png
  .claude/features/landing-latam/doc/                             ← task-doc por tarea ejecutada

MODIFICAR:
  src/index.css                 ← agregar tokens DS uc-* (aditivo, sin renombrar lo existente) + utilities .hl/.uc-eyebrow/.uc-display
  src/routes/AppRoutes.tsx      ← lazy import LandingLatam + <Route path="/save-latam" />
  src/shared/routes.ts          ← agregar '/save-latam' a LANDING_EMAIL_PAGES y NO_FAQS_PAGES

NO TOCAR:
  src/features/landing-email/**                 ← landing oficial, intacta
  src/hooks/useRouteConfig.ts                   ← ya soporta el caso vía LANDING_EMAIL_PAGES
  src/shared/components/WaveSeparator.tsx       ← reutilizar tal cual
  src/shared/layout/Main.tsx · HeroVideo.tsx · HeroOverlay.tsx · Footer.tsx · HamburgerMenu.tsx
  src/translates/*.json                         ← sin i18n para la maqueta
  Uchooseit-Design-System/**                    ← referencia read-only
  Logo / Wordmark global                        ← restricción explícita del usuario
```

## Dependencias
- La feature `landings-form-email` ya dejó la infraestructura de ruta `/save` y los assets LATAM en `public/`. Esta maqueta es independiente y NO depende de su ejecución, pero reusa esos assets.
- Sin nuevas dependencias npm.

## Criterios de aceptacion

1. `/save-latam` renderiza una página independiente; `/save` y `src/features/landing-email/` quedan sin un solo cambio.
2. Hero: video LATAM de fondo, overlay legible, display headline con una palabra en `.hl` (azul), glass pill con input email + botón UNIRME, `WaveSeparator` inferior.
3. Community: carrusel horizontal de personas; al click en una persona se abre un carrusel de videos de esa persona.
4. Carga on-demand verificable: en Network, los videos de una persona NO se descargan hasta abrir esa persona y llegar a ese slide (`preload="none"`, render diferido del `<source>`/`<video>`).
5. Calculadora: estructura idéntica al diseño (líneas editables, quitar línea, agregar gasto, total recalculado, panel pitch ~30% + CTA). Data por defecto en `data.ts` claramente marcada como editable.
6. Cierre: usa `public/choosy-save.png` (no el placeholder dashed del DS), con copy + email capture/CTA.
7. Estética DS: superficie black-first, Montserrat, pills `border-radius >= 20px`, hairline `--uc-line`, hover `translateY(-2px)`, una palabra azul por headline.
8. Sin logo/wordmark construido dentro de la landing; el logo del header global queda igual que hoy.
9. `npm run build` / `pnpm build` pasa sin errores TypeScript.
10. Sin console errors/warnings nuevos en runtime.
11. Responsive verificado a 360 / 768 / 1024 / 1440; dark (default) correcto.
12. La maqueta es autocontenida: borrar `src/features/landing-latam/` + revertir las 3 líneas de routing la elimina por completo (documentar en `doc/`).

## Estructura de la feature
```
.claude/features/landing-latam/
  brief.md      → este archivo
  tasks.md      → backlog de 7 tareas ordenadas
  doc/          → task-doc por tarea (incluir doc/teardown.md: cómo borrar la maqueta)
  design/       → referencias visuales del DS (si el usuario aporta screenshots)
```

## Notas del Arquitecto

- **Por qué paralela y no in-place**: el usuario quiere testear el nuevo diseño contra producción sin riesgo. La maqueta convive con `/save`; cuando se valide, se promueve y se borra la maqueta. Por eso es aceptable hardcodear copys español y mockear el email capture: invertir en i18n/HubSpot para algo desechable es desperdicio (se hará al promover a oficial).
- **DS `.jsx` son referencia**: están escritos como `window.Componente = Componente` para una demo Babel standalone. NO se importan. El dev los lee para clonar estructura/estilos y reescribe componentes React/TS idiomáticos del repo (arrow components, default export, Tailwind classes mapeadas a los tokens `uc-*`).
- **Tokens en `index.css`**: aditivos, prefijo `uc-` (`--color-uc-ink`, `--color-uc-line`, etc.). NO renombrar los existentes (otras páginas dependen). Conviven hasta una migración global futura.
- **on-demand video (criterio 4)**: el patrón esperado es: la persona arranca colapsada (solo card). Al abrir, se monta `PersonVideoCarousel`. Dentro, solo el slide activo (± vecinos opcionales) renderiza el `<video>` con su `src`; el resto son posters/placeholders. `preload="none"` siempre. Al cerrar la persona, desmontar para liberar.
- **WaveSeparator**: el shared existente es válido. El DS usa un "ribbon" azul; si encaja mejor que la wave en la transición Hero→Community, el dev puede usar un `<div>` ribbon inline — sin crear componente compartido y sin tocar el WaveSeparator shared.
- **Calculadora**: replicar `TrendCalculator.jsx` fielmente (incluye estado de líneas, edición de monto con parseo numérico, remove, add, total, % ahorro). Iconos emoji del DS son aceptables en la maqueta (el DS los usa en la calculadora aunque la guía general prohíba emoji en copy de marca — la calculadora es la excepción del propio DS). Default lines y "agregar gasto" se ajustan después: dejar la data en `data.ts` y un comentario `// EDITABLE:` señalando dónde.
- **Choosy**: `public/choosy-save.png` reemplaza el `uc-choosy__placeholder`. Mantener la grilla 2-col (copy | mascota) del DS, colapsable a 1-col en mobile.
- **Teardown**: registrar en `doc/teardown.md` los 3 puntos de routing a revertir + el `rm -rf src/features/landing-latam` para que promover/eliminar sea trivial.

---

*Creado por: Arquitecto*
*Fecha: 2026-05-15*
