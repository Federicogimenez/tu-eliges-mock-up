# CHANGES-06: Copy final desde la imagen del cliente + voz "tú" + reestructura

## Feature: landing-latam
## Rol: Dev
## Fecha: 2026-05-17

---

## Que se hizo
El usuario entregó una imagen con la copy final. Se actualizó todo el texto
de la maqueta para que coincida y se cambió la voz de **vos → tú** (la
imagen usa "Únete / recibe / Descubre / Tú Eliges"). Estructura ajustada
donde la imagen lo pedía (respetando el writing).

### Hero (`HeroCapture.tsx`)
- Subcopy → "Únete gratis y recibe consejos para ahorrar en tu viaje a
  Estados Unidos."
- Nueva línea sobre el form → "Además, recibirás una invitación especial
  con **30% OFF** en tu primer año premium".
- Bajo el form → "La comunidad es gratis. Tú Eliges después si quieres ser
  premium." (se quitó la línea azul "Sin tarjeta…" y el párrafo "30% OFF…
  miembro premium").

### Community (`CommunityCarousel.tsx`)
- Título → "Así ahorra la comunidad".
- Subtítulo → "Descubre experiencias de viajes, compras y momentos reales
  compartidos por nuestra comunidad de ahorradores."

### Calculadora (`TrendCalculator.tsx` + `data.ts`)
- Subtítulo → "Lo que podría costar tu viaje… y cómo podrías ahorrar con
  acceso a descuentos privados."
- Pitch h3 → "¡Qué caro viajar al Mundial!"; p → texto de la imagen
  ("…por lo menos $9,500 USD…").
- Stats reestructurados a 2 bloques: `11% · Ahorro promedio premium` y
  `$<calc> USD · Calculado según tu presupuesto de viaje y uso de la
  membresía`.
- `data.ts`: `CALC_SAVINGS_RATE` 0.3 → **0.11**; Alojamiento 2700 → **2500**
  (labels/subs ya coincidían; el ahorro en $ es dinámico = total × 0.11).

### Choosy (`ChoosyClosing.tsx`)
- Headline → "Los mejores precios en USA no siempre son públicos."
- Subcopy → "Únete gratis a nuestra comunidad, recibe ideas para ahorrar y
  descubre cómo ser miembro premium para acceder a más beneficios."
- Bajo el botón → "La comunidad es gratis. Tú Eliges si quieres ser premium."
- Nuevo: bocadillo de diálogo "soy Choosy, tu caza descuentos" junto a la
  mascota (el PNG no lo trae; se agregó como `<span>` posicionado).

### Modal (`SubscribeModal.tsx`) + overrides de SubscribeButton
- Copy por defecto y overrides de los botones 2/3 alineados a voz "tú"
  (no figura en la imagen; consistencia de writing).

## Archivos tocados
```
MODIFICADOS:
  src/features/landing-latam/data.ts
  src/features/landing-latam/components/HeroCapture.tsx
  src/features/landing-latam/components/CommunityCarousel.tsx
  src/features/landing-latam/components/TrendCalculator.tsx
  src/features/landing-latam/components/ChoosyClosing.tsx
  src/features/landing-latam/components/SubscribeModal.tsx
```

## Decisiones tomadas
- Se conservó una palabra azul (`.hl`) por título (firma del DS); la imagen
  no la contradice (es styling, no writing).
- El monto de ahorro queda **dinámico** (total × 0.11), coherente con el
  caption "Calculado según tu presupuesto…"; el "$9,500 USD" del párrafo es
  copy estática como en la imagen.
- "Tú Eliges" se mantiene capitalizado (juego de marca = uchooseit).
- Aplicado vía script Node (Write + ejecución) por la doble fricción:
  watcher que reescribe + quoting del shell con `\'`. Build verde.

## Pendientes o notas
- Esto deja la copy lista para la migración con i18n (claves por sección).
- Próximo paso del plan del usuario: migrar a `landing-email` con
  traducciones y luego eliminar la maqueta (ver `teardown.md`).
