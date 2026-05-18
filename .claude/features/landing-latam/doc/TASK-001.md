# TASK-001: Tokens DS en index.css (capa aditiva)

## Feature: landing-latam
## Rol: Dev
## Fecha: 2026-05-17

---

## Que se hizo
Se agregaron los tokens del nuevo Design System a `src/index.css` como capa
aditiva: colores `--color-uc-*` (ink, ink-2, line, blue-soft/deep, pink,
green, orange, red, paper, fg-dim/mute/faint, black) dentro de `@theme`, más
shape/shadow `--uc-radius-*` / `--uc-shadow-*`. Se crearon las utilities
`.hl`, `.uc-display`, `.uc-eyebrow`, `.uc-lead`, `.uc-micro` en
`@layer utilities`, con escala adaptada al root de 16px del repo.

## Archivos tocados
```
MODIFICADOS: src/index.css
```

## Decisiones tomadas
- Prefijo `uc-` en todo lo nuevo: cero colisión con la marca actual; el azul
  ya existe como `--color-blue-uchooseit` (= `--uc-blue` del DS), se reutiliza.
- La escala de `.uc-display` se re-anchó: el DS asume `html{font-size:62.5%}`
  y este repo usa 16px; copiar los `clamp()` verbatim los haría 1.6× grandes.
- Radios/sombras como custom props sueltas (se usan vía `var()`, no necesitan
  ser utilities Tailwind).

## Pendientes o notas
- Ninguno. Cambio CSS-only, sin superficie TypeScript.
