# CHANGES-02: 3 testimonios sin descripción + modal centrado

## Feature: landing-latam
## Rol: Dev
## Fecha: 2026-05-17

---

## Que se hizo
1. **Comunidad → 3 testimonios sin descripción**: `MEMBERS` quedó con
   Viviana, Brian y Alexandra, cada uno con su foto real
   (`/viviana-profile.png`, `/brian-profile.png`, `/alexandra-profile.png`)
   y un único video compartido `/brian-discounts.mp4` (placeholder hasta que
   el cliente entregue el de cada persona — `// EDITABLE:`). Se eliminó
   título/tag/hue del modelo: la card muestra **solo foto + nombre**.
2. **Avatar real**: `PersonCard` reemplazó la silhouette SVG por
   `<img>` de la foto de perfil (`object-cover`).
3. **Caption opcional**: `PersonVideoCarousel` sólo renderiza la barra
   inferior si hay caption o más de un video (sin descripción → limpia).
4. **Modal centrado**: el card del `SubscribeModal` usaba
   `animate-appear-up` (`translateY(70px)→0`), por eso "aparecía más abajo".
   Se cambió a `animate-fade` (sólo opacidad); queda fijo y centrado por el
   `flex items-center justify-center` del overlay.
5. Polish: con 3 cards el carrusel centra en desktop (`md:justify-center`).

## Archivos tocados
```
MODIFICADOS:
  src/features/landing-latam/data.ts                       (Member type + 3 miembros)
  src/features/landing-latam/components/CommunityCarousel.tsx   (img avatar, solo nombre)
  src/features/landing-latam/components/PersonVideoCarousel.tsx (caption opcional)
  src/features/landing-latam/components/SubscribeModal.tsx      (animate-fade)
```

## Decisiones tomadas
- `MemberVideo.caption` y todo lo descriptivo pasó a opcional/eliminado para
  cumplir "sin descripción" sin dejar texto placeholder.
- Assets (`*-profile.png`, `brian-discounts.mp4`) son archivos públicos
  preexistentes en `public/` → no afectan `teardown.md`.

## Pendientes o notas
- El video por persona es el mismo a propósito (el usuario lo actualizará).
- Sigue siendo mock (sin HubSpot/API).
