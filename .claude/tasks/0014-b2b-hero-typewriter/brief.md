# 0014 — Hero B2B: frase "recompensa" con typewriter

**Peso:** liviana

## Problema

El hero de `/business` ("Turn Your Community Into a Buying Power Network") describe la mecánica del producto, no el motivo del partner. Se quiere reposicionar con "recompensa a quienes impulsan tu negocio", donde la última palabra rota con efecto typewriter entre **negocio → comunidad → fundación** — la rotación segmenta las tres audiencias B2B (empresas, comunidades, fundaciones) dentro del propio hero.

## Enfoque

- Componente typewriter propio y mínimo (`TypewriterWord`, local a `features/business/components/`): escribe → pausa → borra → siguiente palabra, cursor parpadeante, loop infinito. Sin librería (descartado: dependencia externa para ~50 líneas es deuda).
- i18n: reemplazar `business.hero.title1/title2` por `titlePrefix` + `words` (string separado por comas que el componente splitea) en los 5 JSON de `src/translates/`. Copy por país respetando el registro existente (arg voseo, col usted, mex tuteo, bra portugués).
- Layout: prefix en línea 1 (tono apagado, como hoy), palabra rotante en línea 2 (tono fuerte) — mantiene la estructura de dos líneas del hero actual y evita layout shift vertical.
- `prefers-reduced-motion`: palabra estática (la primera), sin animación.

## Scope

- CREAR: `src/features/business/components/TypewriterWord.tsx`
- MODIFICAR: `src/features/business/components/HeroSection.tsx`, `src/translates/{us,arg,col,mex,bra}.json` (solo `business.hero.title*` → `titlePrefix`/`words`)
- NO TOCAR: `description`, `trustedBy`, `plugAndPlay`, resto de la landing.

## Criterio de éxito

`npm run build` pasa; el hero muestra la frase nueva con la palabra rotando en los 5 idiomas; sin saltos de layout; con reduced-motion la palabra queda fija.
