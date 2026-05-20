# CHANGES-07: Hero — dos frases fusionadas en una bajo el form

## Feature: landing-latam
## Rol: Dev
## Fecha: 2026-05-17

---

## Que se hizo
Las dos frases del Hero ("Además, recibirás… 30% OFF…" arriba del form +
"La comunidad es gratis. Tú Eliges después…" abajo) se fusionaron en **una
sola línea debajo del form** (opción "cálida" elegida por el usuario):

> "La comunidad es gratis — y cuando quieras ser premium, te espera una
> invitación especial con **30% OFF** en tu primer año."

Estructura final del Hero: headline → subcopy → HubSpotForm → línea única.
Se eliminó el `<p>` que iba arriba del form.

## Archivos tocados
```
MODIFICADOS: src/features/landing-latam/components/HeroCapture.tsx
```

## Decisiones tomadas
- "30% OFF" se mantiene en `<strong>` (consistente con el resto).
- Aplicado vía script Node (watcher + `{' '}` rompe el quoting del shell).
  Build verde.

## Pendientes o notas
- Ninguno.
