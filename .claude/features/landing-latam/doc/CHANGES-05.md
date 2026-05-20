# CHANGES-05: EmailCapturePill → embed HubSpot real

## Feature: landing-latam
## Rol: Dev
## Fecha: 2026-05-17

---

## Que se hizo
Pedido del usuario (override explícito del scope "mock" del brief): comentar
la pill de captura de email de la maqueta y reemplazarla por el **embed de
HubSpot que ya se usa** en `landing-email`.

1. `HeroCapture.tsx`: `import EmailCapturePill` comentado; se importa
   `HubSpotForm` desde `../../landing-email/components/HubSpotForm`. El uso
   de la pill quedó comentado y se renderiza `<HubSpotForm context="form" />`
   (captura primaria).
2. `SubscribeModal.tsx`: idem; `<HubSpotForm context="closing" />` dentro del
   modal (rol de cierre/CTA, coherente con el styling `hubspot-closing`).
3. La pill no se borró (queda comentada como pidió el usuario); el archivo
   `EmailCapturePill.tsx` permanece (sin uso, sin error TS).

## Archivos tocados
```
MODIFICADOS:
  src/features/landing-latam/components/HeroCapture.tsx     (pill → HubSpotForm form)
  src/features/landing-latam/components/SubscribeModal.tsx  (pill → HubSpotForm closing)
  .claude/features/landing-latam/doc/teardown.md            (nota de dependencia)
```

## Decisiones tomadas
- **Override de scope**: el brief excluía HubSpot ("email capture mock"). El
  usuario lo pidió explícitamente → se reusa el componente real existente,
  no se duplica ("el embed que estamos usando").
- `HubSpotForm` depende de `useCountry` (CountryContext) y de los estilos
  globales `.hubspot-form`/`.hubspot-closing` en `index.css`. Ambos ya están
  disponibles a nivel app (la /save los usa); /save-latam vive bajo el mismo
  árbol de providers, así que funciona sin tocar Main/providers.
- Contextos: Hero = `form` (input claro), modal = `closing` (coherente con
  el patrón de `landing-email`: InsightForm=form, Closing=closing).
- Aplicado vía script Node con normalización CRLF (los archivos están en
  `\r\n`; el matcher multilínea fallaba con `\n`). Build verde.

## Pendientes o notas
- **La maqueta ya NO es 100% autocontenida**: `landing-latam` ahora importa
  `landing-email/components/HubSpotForm`. Para el teardown: borrar
  `landing-latam` sigue siendo seguro (no toca landing-email). Pero si se
  elimina `landing-email` ANTES de promover la maqueta, el build rompe hasta
  internalizar/eliminar ese import. Anotado en `teardown.md`.
- Múltiples `HubSpotForm` con el mismo form id por país ya es patrón usado
  en `landing-email` (InsightForm + Closing). El del modal monta on-open;
  si HubSpot no lo inyecta al abrir, es ajuste fino posterior (no bloquea).
