# Brief — 0015-home-benefits-video

> *Nota del Leader (gate, 2026-07-07): renumerada de `0014` a `0015` — colisionaba con `0014-b2b-hero-typewriter`, creada minutos antes en otro chat.*

## Peso
`liviana` — recomposición visual de la sección bajo el hero de Home, sin copy nuevo ni consecuencia de negocio.

## El problema
Bajo el hero de Home hay dos mensajes que en realidad son uno: *qué recibís* (los 6 beneficios, que hoy ni siquiera se muestran en Home — el grid de `shared/layout/Benefits.tsx` solo vive en las páginas de categoría) y *cómo se usa* (el video de `LearnHow`). Separados diluyen la propuesta de valor; unificados entregan el valor completo en una sola sección. Además el video hoy exige un click para reproducirse — fricción innecesaria para un demo.

## El enfoque elegido
Nueva sección `BenefitsVideoSection` en `features/home/components/` que **reemplaza a `LearnHow`** como primera sección bajo el hero:

- **Dos bloques:** grid de 6 beneficios (mismos íconos `/icons/benefits/*.svg` y keys `layout.benefits.items.*` que ya existen — cero copy nuevo) + el video de YouTube de LearnHow (`ReactPlayer`).
- **Layout por orientación** (variantes `landscape:`/`portrait:` de Tailwind v4): en landscape benefits a la izquierda y video a la derecha, lado a lado; en portrait benefits arriba y video abajo.
- **Autoplay al llegar:** el hook existente `useIsInView` dispara `playing` cuando la sección entra al viewport (y pausa al salir). El autoplay obliga a `muted` (política de browsers para YouTube); el click sobre el video togglea el sonido.
- Heading `t('layout.benefits.title')` + subtitle `t('home.learnHow.subtitle')`; el botón *Explore Platform* se mantiene al pie. Ambas keys ya existen en todos los locales en uso.
- `LearnHow.tsx` se elimina (queda en git history).

`shared/layout/Benefits.tsx` **no se toca**: lo consumen Travel/Shop/Dining/Entertainment. El grid se re-crea adaptado a media columna dentro de la sección nueva (duplicar ~20 líneas de markup es más simple que parametrizar un shared con prop de layout que solo Home usaría).

## Ampliación en QA (mismo espíritu: valor al llegar, no al interactuar)
En el loop de QA se sumó `CategoriesSection`: en no-touch (desktop/hover) las 4 cards entran juntas y sin animación de entrada, mientras que en touch/portrait ya se activan solas por `isInView`. Se agrega una **secuencia de activación** (card 0→3, ~1s por paso, una sola vez) al llegar la sección al viewport, con el mismo visual del hover; el hover del usuario cancela la secuencia y toma el control. Se gatea por `!isTouchDevice` (el mismo eje que ya usa la card), no por orientación CSS. Se elimina el hack previo de `focus()` en la card 0.

## La skill del Dev
`implement`

## Vínculo externo
Ninguno. Diseño visual dentro del lenguaje ya establecido (dark default, tokens existentes).

## Scope de archivos
```
CREAR:
  src/features/home/components/BenefitsVideoSection.tsx
MODIFICAR:
  src/features/home/Home.tsx          (reemplazar <LearnHow /> por la sección nueva)
  src/features/home/components/CategoriesSection.tsx  (ampliación QA: stepper de activación)
  src/features/home/components/CategoryCard.tsx       (ampliación QA: prop `active`, sin hack de focus)
ELIMINAR:
  src/features/home/components/LearnHow.tsx
NO TOCAR:
  src/shared/layout/Benefits.tsx      (lo usan las 4 páginas de categoría)
  src/features/home/components/BenefitsSection.tsx  (slides; sigue más abajo en Home)
  src/translates/*                    (se reusan keys existentes)
```

## Alternativas descartadas
- **Parametrizar `shared/layout/Benefits.tsx`** con prop de layout para reusarlo en la sección: agrega una API que solo Home usaría; el markup del grid son ~20 líneas — duplicar es más barato que abstraer (sesgo a la simplicidad).
- **Autoplay con sonido:** los browsers lo bloquean para embeds de YouTube; muted + click-para-sonido es el patrón estándar.
- **Breakpoints `lg:` en vez de `landscape:`/`portrait:`:** el pedido es explícitamente por orientación; Tailwind v4 trae las variantes nativas.

## Criterio de éxito
En Home, la primera sección bajo el hero muestra los 6 beneficios y el video juntos: lado a lado en landscape (video a la derecha), apilados en portrait (video abajo). Al scrollear hasta la sección el video arranca solo (muted, loop) y pausa al salir del viewport; click togglea sonido. Las páginas de categoría siguen mostrando su grid de benefits intacto. `npm run build` pasa.
