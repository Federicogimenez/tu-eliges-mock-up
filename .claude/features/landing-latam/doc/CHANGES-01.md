# CHANGES-01: Un solo input + invitaciones 2ª/3ª vía modal + alta de gasto con nombre/detalle

## Feature: landing-latam
## Rol: Dev
## Fecha: 2026-05-17

---

## Que se hizo
Pedido del usuario sobre la maqueta ya implementada:

1. **Un solo input directo**: el único campo de email visible es el del Hero
   (`HeroCapture` → `EmailCapturePill`). La 2ª invitación (CTA de
   `TrendCalculator`) y la 3ª (`ChoosyClosing`) pasaron a ser **botones** con
   textos distintos que abren un **modal** con el input.
2. **SubscribeModal** nuevo, fiel a `SubscribeModal.standalone.html` del DS
   (scrim negro + card oscura `#0d1422` con borde azul, ícono mail azul,
   headline + subcopy + el mismo glass pill; cierra con ESC / click-outside;
   bloquea scroll; `createPortal` a `document.body`).
3. **SubscribeButton** nuevo: pill autocontenido que maneja su propio estado
   de apertura (sin context/provider) y permite override del copy del modal.
4. **Calculadora — alta de gasto con nombre y detalle**: el botón
   "+ Agregar gasto" abre un form inline con inputs **Nombre** (obligatorio),
   **Detalle** (opcional) y **Monto**, con Agregar/Cancelar (Enter confirma).
   Reemplaza el alta anterior de línea fija "Nuevo gasto".

## Archivos tocados
```
CREADOS:     src/features/landing-latam/components/SubscribeModal.tsx
             src/features/landing-latam/components/SubscribeButton.tsx
MODIFICADOS: src/features/landing-latam/components/ChoosyClosing.tsx
             src/features/landing-latam/components/TrendCalculator.tsx
             .claude/features/landing-latam/doc/teardown.md (lista de archivos)
```

## Decisiones tomadas
- No se reutilizó `src/shared/components/Modal.tsx`: es blanco/grande y
  hardcodeado (`bg-white text-black h-[90dvh]`), no encaja con el modal
  oscuro compacto del DS y está fuera de scope tocarlo. Modal feature-local.
- `SubscribeButton` autocontenido (estado local) en vez de un provider:
  evita una decisión arquitectónica y mantiene la maqueta desechable.
- `EmailCapturePill` sigue vivo: lo usan el Hero (input único) y el modal.
- El bundle del HTML de referencia está comprimido (no legible); el diseño
  se reconstruyó desde el thumbnail SVG + tokens del DS (kit.css).

## Pendientes o notas
- Sigue siendo mock (sin HubSpot/API), por diseño — ver brief → Excluido.
- QA manual del usuario: abrir cada botón → modal, ESC/click-outside,
  y alta de gasto con nombre/detalle reflejada en el total.
