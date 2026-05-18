# TASK-003: VideoBackgroundLatam + HeroCapture

## Feature: landing-latam
## Rol: Dev
## Fecha: 2026-05-17

---

## Que se hizo
`VideoBackgroundLatam.tsx`: réplica del patrón de
`landing-email/components/VideoBackground.tsx` pero LATAM-only (sin
`useCountry`), usando `useInlineVideo` + `useWindowSize` + `LazyLoadImage`,
fuentes `/latam-hero-{desk,mobile}.mp4`. `EmailCapturePill.tsx`: glass pill
mock (estado local "¡Listo!"). `HeroCapture.tsx`: display headline con la
palabra "comunidad" en `.hl`, subcopy `.uc-lead`, pill, y `WaveSeparator`
shared al pie.

## Archivos tocados
```
CREADOS:     src/features/landing-latam/components/VideoBackgroundLatam.tsx
             src/features/landing-latam/components/EmailCapturePill.tsx
             src/features/landing-latam/components/HeroCapture.tsx
MODIFICADOS: src/features/landing-latam/LandingLatam.tsx (monta bg + Hero)
```

## Decisiones tomadas
- No hay preview LATAM dedicado: se reutilizan los previews existentes
  (`preview-hero-video-desk.png` / `hero-video-mobile-preview.png`),
  aceptable en maqueta.
- `EmailCapturePill` reutilizable (lo consume también ChoosyClosing).
- `WaveSeparator` shared usado tal cual (no se creó ni modificó componente).

## Pendientes o notas
- Email capture es mock por diseño (sin HubSpot/API) — ver brief → Excluido.
