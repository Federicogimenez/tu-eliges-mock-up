# TASK-006: ChoosyClosing con public/choosy-save.png

## Feature: landing-latam
## Rol: Dev
## Fecha: 2026-05-17

---

## Que se hizo
`ChoosyClosing.tsx`: cierre basado en `ChoosyCTA.jsx` del DS pero usando la
imagen real `public/choosy-save.png` (`object-contain`, sin deformar) en
lugar del placeholder dashed. Grilla 2-col (copy + email capture | mascota)
que colapsa a 1-col centrado en mobile, con el glow radial azul + `bg-uc-black`
y `rounded-[32px]`/`border-uc-line` del DS. Reutiliza `EmailCapturePill`.

## Archivos tocados
```
CREADOS:     src/features/landing-latam/components/ChoosyClosing.tsx
MODIFICADOS: src/features/landing-latam/LandingLatam.tsx (monta ChoosyClosing)
```

## Decisiones tomadas
- En mobile la mascota va arriba (`order-1`) y el copy abajo, para que el
  CTA quede cerca del fold inferior.
- Sin wordmark/logo construido (restricción del brief).

## Pendientes o notas
- Ninguno.
