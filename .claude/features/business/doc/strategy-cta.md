# strategy-cta: CTA final + Google Calendar booking

## Feature: business
## Rol: Feature Dev
## Fecha: 2026-02-17

> Archivo: `doc/strategy-cta.md` — el nombre del archivo coincide con el id de la tarea en tasks.md

---

## Que se hizo
Se creo `StrategyCallCTA.tsx` con heading "Let's Validate the Right Model for You", subtitulo invitando a llamada de 15 minutos, card oscura con 3 items de agenda (revenue share, white-labeling, transparency dashboard), BookCallButton reutilizado que abre Google Calendar, y footer con textos de confianza ("No commitment required", "Free consultation") con icono MdLock.

## Archivos tocados
```
CREADOS:   src/features/business/components/StrategyCallCTA.tsx
```

## Decisiones tomadas
- Se reutilizo BookCallButton (creado en partnership-models) en lugar de duplicar el boton de booking.
- La URL de Google Calendar se pasa como prop `onBookCall` desde Business.tsx, centralizando la URL en un solo lugar.
- Los 3 items de la llamada usan MdCheckCircle (azul) para consistencia con PartnershipModels.

## Pendientes o notas
- La URL de Google Calendar (`GOOGLE_APPOINTMENT_URL`) es un placeholder funcional. Debe actualizarse si cambia el scheduling link del equipo.
