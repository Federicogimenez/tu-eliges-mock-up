# Tasks — Landing LATAM (maqueta paralela)

> Cada tarea sigue `templates/task-spec.md`. Ejecutar en orden. La maqueta es desechable: priorizar fidelidad al diseño DS y autocontención sobre robustez productiva.

---

# TASK-001: Tokens del DS en index.css (capa aditiva)

## Metadata
- **Feature**: landing-latam
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: ninguna

## Contexto
La maqueta usa la paleta black-first y la escala tipográfica del nuevo DS (`Uchooseit-Design-System/colors_and_type.css`). `src/index.css` hoy solo expone tokens de marca actuales. Agregar los neutros del DS como capa **aditiva** dentro de `@theme`, con prefijo `uc-`, sin renombrar nada. Crear utilities `.hl`, `.uc-eyebrow`, `.uc-display`, `.uc-lead`, `.uc-micro` en `@layer utilities`.

## Archivos
```
MODIFICAR: src/index.css
```

## Limites
- NO renombrar/borrar tokens existentes.
- NO importar `Uchooseit-Design-System/colors_and_type.css` ni sus `.ttf` (Montserrat ya viene de Google Fonts en `index.css:2`).
- Prefijo `uc-` obligatorio en tokens nuevos para evitar colisión.

## Criterio de aceptacion
- [ ] `@theme` con `--color-uc-ink (#0A0E16)`, `--color-uc-ink-2 (#14181F)`, `--color-uc-line (#1F2530)`, `--color-uc-blue-deep (#6166FD)`, `--color-uc-blue-soft (#E7FBFE)`, `--color-uc-orange (#FFB200)`, `--color-uc-red (#FF3131)`, `--color-uc-green (#00BF63)`.
- [ ] Tokens de texto atenuado: `--color-uc-fg-dim: rgba(255,255,255,0.72)`, `--color-uc-fg-mute: rgba(255,255,255,0.55)`, `--color-uc-fg-faint: rgba(255,255,255,0.32)`.
- [ ] Utilities: `.hl` (color `--color-blue-uchooseit`), `.uc-eyebrow` (uppercase, tracking ancho, azul), `.uc-display` (clamp grande, bold, leading 1.05), `.uc-lead` (light, dim), `.uc-micro` (chico, mute).
- [ ] `npm run dev` arranca y `bg-uc-ink` / `border-uc-line` / `text-uc-fg-dim` resuelven en HMR.

## Notas del Arquitecto
- Tailwind v4 deriva utilities de `--color-*` automáticamente; los rgba en `@theme` habilitan `text-uc-fg-dim`.

---

# TASK-002: Scaffolding de ruta y página

## Metadata
- **Feature**: landing-latam
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-001

## Contexto
Crear la ruta `/save-latam` y el esqueleto de la página + el archivo de data editable. La página debe heredar el comportamiento de landing-email (logo blanco, sin FAQs, sin HeroVideo global) agregando `/save-latam` a los arrays existentes — `useRouteConfig` ya lo soporta vía `LANDING_EMAIL_PAGES`, NO se modifica el hook.

## Archivos
```
CREAR:
  src/features/landing-latam/LandingLatam.tsx        ← shell con las 4 secciones (placeholders por ahora)
  src/features/landing-latam/data.ts                 ← members[], videos por persona, DEFAULT_LINES calculadora
MODIFICAR:
  src/routes/AppRoutes.tsx                            ← const LandingLatam = lazy(...) + <Route path="/save-latam" />
  src/shared/routes.ts                                ← '/save-latam' en LANDING_EMAIL_PAGES y NO_FAQS_PAGES
```

## Limites
- NO modificar `useRouteConfig.ts`.
- NO agregar `/save-latam` a `HERO_PAGES` (la página maneja su propio video).
- NO tocar `src/features/landing-email/`.
- `data.ts` con secciones marcadas `// EDITABLE:` (members+videos y DEFAULT_LINES).

## Criterio de aceptacion
- [ ] Navegar a `/save-latam` renderiza la página (aunque sea con secciones stub).
- [ ] Logo del header se ve blanco y NO aparecen FAQs en `/save-latam`.
- [ ] `/save` sigue idéntica (smoke check).
- [ ] `data.ts` exporta `MEMBERS` (con `videos: string[]` por persona) y `DEFAULT_LINES` (icon/label/sub/amount), ambos con comentario `// EDITABLE:`.
- [ ] TypeScript compila.

## Notas del Arquitecto
- `LandingLatam.tsx` sigue el patrón de `LandingEmail.tsx`: `<VideoBackgroundLatam />` + `<div className="relative z-10 animate-appear-up">` con las secciones.
- Lazy import idéntico al de `LandingEmail` en `AppRoutes.tsx:24`.

---

# TASK-003: VideoBackgroundLatam + HeroCapture

## Metadata
- **Feature**: landing-latam
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-002

## Contexto
Replicar el patrón de `landing-email/components/VideoBackground.tsx` en un componente LATAM-only (`latam-hero-desk.mp4` / `latam-hero-mobile.mp4`, sin lógica de country). Construir el Hero del nuevo diseño: display headline con palabra azul `.hl`, subcopy `uc-lead`, glass pill de captura de email (componente `EmailCapturePill`, mock), `WaveSeparator` inferior.

## Archivos
```
CREAR:
  src/features/landing-latam/components/VideoBackgroundLatam.tsx
  src/features/landing-latam/components/HeroCapture.tsx
  src/features/landing-latam/components/EmailCapturePill.tsx
```

## Limites
- NO importar nada desde `src/features/landing-email/`.
- Reusar hooks compartidos (`useInlineVideo`, `useWindowSize`, `LazyLoadImage`) sin modificarlos.
- `EmailCapturePill` es mock: al enviar muestra estado "¡Listo! Revisa tu correo · cupón 30% OFF" (como `EmailCapture.jsx`). Sin fetch.
- Reusar `src/shared/components/WaveSeparator.tsx` (no modificarlo).

## Criterio de aceptacion
- [ ] Fondo: video LATAM fijo, overlay gradiente fuerte (≈ `rgba(0,0,0,0.35)`→`0.85`), preview hasta cargar.
- [ ] Headline display grande, una palabra en `.hl`. Subcopy `.uc-lead` dim.
- [ ] Glass pill (input email translúcido + botón UNIRME azul, `border-radius: 999px`) replicando `.uc-capture` del DS, con hover del botón.
- [ ] Estado enviado muestra el mensaje de éxito mock.
- [ ] `WaveSeparator` al pie del hero.
- [ ] Responsive 360 / 1440 sin romper el headline.

## Notas del Arquitecto
- Mapear `.uc-capture` (kit.css) a Tailwind: `bg-white/10 backdrop-blur rounded-full border border-white/15`, input transparente, botón `bg-blue-uchooseit text-white uppercase rounded-full`.
- Palabra azul: elegir una palabra cargada del headline (ej. "comunidad").

---

# TASK-004: CommunityCarousel + PersonVideoCarousel (carga on-demand)

## Metadata
- **Feature**: landing-latam
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-002

## Contexto
Sección 2: carrusel horizontal de tarjetas de persona (avatar/imagen + nombre + tag), basado en `CommunityCarousel.jsx` + `TipVideoCard.jsx`. Al hacer click en una persona se **despliega un carrusel de videos asociados a esa persona** (`PersonVideoCarousel`). Requisito central: **carga on-demand** — ningún video se descarga hasta abrir esa persona y llegar a ese slide.

## Archivos
```
CREAR:
  src/features/landing-latam/components/CommunityCarousel.tsx
  src/features/landing-latam/components/PersonVideoCarousel.tsx
```

## Limites
- Data desde `data.ts` (`MEMBERS` con `videos: string[]`). Usar los `.webm` stub de `public/landing-email/` como placeholders.
- `preload="none"` en todos los `<video>`.
- NO montar el `<video>` (ni su `src`/`<source>`) hasta que: (a) la persona esté abierta Y (b) ese slide esté activo. Slides inactivos = poster/placeholder.
- Al cerrar/cambiar de persona, desmontar el carrusel de videos previo (liberar recursos).
- Solo una persona abierta a la vez.

## Criterio de aceptacion
- [ ] Carrusel horizontal de personas con scroll + flechas (patrón `.uc-carousel`).
- [ ] Click en persona la marca como abierta y monta su `PersonVideoCarousel` debajo/expandido.
- [ ] Dentro: solo el slide activo renderiza el `<video>` con `src`; el resto placeholders.
- [ ] Verificación Network: al cargar la página NO se descarga ningún video de comunidad; al abrir persona X y avanzar slides, se descargan SOLO los de X y solo al activarse.
- [ ] Cerrar persona / abrir otra desmonta los videos anteriores.
- [ ] Tarjeta de persona estilo DS (avatar circular borde azul, nombre bold, pill de tag).
- [ ] Mobile: carrusel swipeable; el detalle de videos no rompe el layout.

## Notas del Arquitecto
- Estado: `openMemberId: string | null` en `CommunityCarousel`; `PersonVideoCarousel` recibe `videos` + controla `activeIndex` y monta `<video>` solo para `activeIndex` (± 0). 
- Lazy mount = render condicional, no `display:none`. Para el slide activo: `<video src={...} preload="none" autoPlay muted playsInline />`.
- Si `TipVideoCard` real no tiene foto, usar el silhouette SVG del DS como avatar (aceptable en maqueta).

---

# TASK-005: TrendCalculator (réplica fiel del diseño)

## Metadata
- **Feature**: landing-latam
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-002

## Contexto
Sección 3: clonar `TrendCalculator.jsx` como componente React/TS. Líneas editables (icono, label, sub, monto), quitar línea, "agregar gasto", total estimado recalculado, panel derecho con eyebrow + título + copy + bloque ~30% de ahorro + CTA. Default lines y lógica de "agregar gasto" se afinan después: dejar la data en `data.ts` (`DEFAULT_LINES`) marcada `// EDITABLE:`.

## Archivos
```
CREAR: src/features/landing-latam/components/TrendCalculator.tsx
MODIFICAR: src/features/landing-latam/data.ts   ← DEFAULT_LINES si hace falta ajustar shape
```

## Limites
- Estructura visual idéntica al diseño (`uc-calc-wrap` 2 col → 1 col en mobile, `uc-calc__total` azul, monto en rojo, total en naranja, ahorro en verde).
- Parseo de monto: numérico, ignorar no-dígitos (como el DS).
- CTA hace scroll/jump al hero capture (`#capture`) o a un capture local — sin checkout real.
- Iconos emoji del DS permitidos SOLO en esta calculadora.

## Criterio de aceptacion
- [ ] Render de `DEFAULT_LINES` con icono, label, sub, input de monto editable.
- [ ] Editar un monto recalcula el total en vivo.
- [ ] Quitar línea la elimina y recalcula.
- [ ] "Agregar gasto" añade una línea editable nueva.
- [ ] Panel pitch: eyebrow, título, copy, `~30%` con cálculo `total * 0.3`, CTA pill.
- [ ] Colores DS correctos (total azul, montos rojo, total naranja, ahorro verde).
- [ ] Responsive: 2 col desktop, apilado en mobile.

## Notas del Arquitecto
- Mapear `kit.css` `.uc-calc*` a Tailwind con tokens `uc-*`: card `bg-uc-ink border border-uc-line rounded-[28px]`, total `bg-blue-uchooseit rounded-2xl`.
- `// EDITABLE:` sobre `DEFAULT_LINES` y sobre el handler de "agregar gasto" para la iteración futura.

---

# TASK-006: ChoosyClosing con public/choosy-save.png

## Metadata
- **Feature**: landing-latam
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-002, TASK-003 (reusa EmailCapturePill)

## Contexto
Sección 4 (cierre): basada en `ChoosyCTA.jsx` pero reemplazando el placeholder dashed por la imagen real `public/choosy-save.png`. Grilla 2-col (copy de upsell | mascota Choosy), colapsable a 1-col en mobile. Incluye email capture / CTA.

## Archivos
```
CREAR: src/features/landing-latam/components/ChoosyClosing.tsx
```

## Limites
- Usar `public/choosy-save.png` (ruta `/choosy-save.png`), NO el placeholder.
- Reusar `EmailCapturePill` (TASK-003) o un CTA pill que apunte al capture del hero.
- NO construir wordmark/logo.

## Criterio de aceptacion
- [ ] Imagen `/choosy-save.png` visible y bien escalada (no deformada) en la columna mascota.
- [ ] Copy de upsell con headline DS (palabra azul) + subcopy dim.
- [ ] Email capture o CTA pill funcional (mock / scroll a capture).
- [ ] Contenedor estilo DS: `radial glow` azul + `bg-uc-black`, `rounded-[32px]`, `border-uc-line`.
- [ ] 2-col desktop → 1-col centrado en mobile.

## Notas del Arquitecto
- `.uc-choosy` del kit.css es la referencia de layout (grid `1fr 280px`, radial glow blue).

---

# TASK-007: Ensamble final + QA + teardown doc

## Metadata
- **Feature**: landing-latam
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-001..006

## Contexto
Ensamblar las 4 secciones en `LandingLatam.tsx`, QA integral y documentar cómo se elimina/promueve la maqueta.

## Archivos
```
MODIFICAR: src/features/landing-latam/LandingLatam.tsx
CREAR:     .claude/features/landing-latam/doc/teardown.md
```

## Limites
- Orden: `<VideoBackgroundLatam />` + wrapper `relative z-10 animate-appear-up` con `HeroCapture` → `CommunityCarousel` → `TrendCalculator` → `ChoosyClosing`.
- Si aparece un bug, arreglarlo en el componente correspondiente; no crear TASK-008.

## Criterio de aceptacion
- [ ] `/save-latam` muestra las 4 secciones en orden, coherentes con el DS.
- [ ] Criterio on-demand (TASK-004) revalidado en Network con la página completa.
- [ ] `/save` y `src/features/landing-email/` sin cambios (diff vacío en esa carpeta).
- [ ] `npm run build` exit 0, sin console errors/warnings nuevos.
- [ ] Responsive 360 / 768 / 1024 / 1440 + dark OK.
- [ ] Logo header global idéntico a hoy (comparar `/` vs `/save-latam`).
- [ ] `doc/teardown.md`: lista exacta (3 puntos routing a revertir + `rm -rf src/features/landing-latam`) para eliminar; y nota de cómo promover a `/save` oficial.
- [ ] `doc/` con un task-doc por tarea ejecutada (`templates/task-doc.md`).

## Notas del Arquitecto
- "Promover": cuando se apruebe, se migra el contenido a `landing-email` con i18n + HubSpot reales (fuera del scope de esta feature) y se borra la maqueta con el teardown.

---
