# Brief — 0013-ally-popup-videos

> Lo escribe el **Architect** antes de tocar código.

## Peso
`liviana`

## El problema
Los partners K2 y MFC entregaron videos promocionales verticales (9:16, ~52–57s) que hoy son huérfanos en `public/` (50 + 55 MB, bitrate 8 Mbps — inservibles para web). El ally popup muestra para todos los códigos el logo que devuelve la API; para estos dos partners el video del influencer convierte mejor que un logo estático.

## El enfoque elegido
1. **Optimizar los videos in situ** con ffmpeg (ya instalado, v8.0): H.264 CRF 28 preset slow, escala a 480×854 (se muestran a ~250–400px de alto; sobra), audio AAC mono 64k (es voz), `+faststart` para streaming progresivo, metadata fuera. Estimado: ~4–5 MB c/u (~92% menos) — mismo orden que los videos ya commiteados (`hero-video-desk.mp4` 12.9 MB), así que van al repo sin LFS ni hosting externo. Originales respaldados fuera del repo antes de reemplazar.
2. **Mostrar el video en un phone frame** dentro del popup: cuando el code (URL param o localStorage) sea `k2` o `mycommunitypharmacy` (case-insensitive; el archivo del segundo sigue siendo `MFC.mp4`), el `<picture>` del logo de la API se reemplaza por el patrón phone-frame que ya existe en `HowSection.tsx` (`/frame-iphone.png` sobre video). Autoplay muteado en loop (política de browsers), tap para activar/silenciar sonido — el video es un influencer hablando. *(Delta QA 2026-07-07: sonido encendido por default con fallback a mute si el browser bloquea el autoplay con audio; el frame `frame-iphone.png` manda el tamaño y el video se calza a su pantalla por porcentajes medidos del PNG — 90.8%×96.4% — para que escalen juntos. Delta QA 2: el toggle de mute pasa a un botón circular sobre la esquina inferior derecha del teléfono. Delta QA 3: el fullscreen nativo se rompía — el click sobre el teléfono abre un overlay expandido por CSS (frame a 96dvh capado al ancho de viewport, X para volver, reproducción sincronizada entre video chico y grande); el overlay vive como hermano del contenedor blurreado porque `backdrop-blur` encierra a los descendientes `fixed`. Delta QA 4: si el browser bloquea el autoplay con audio, el sonido se activa solo en la primera interacción del usuario (`pointerdown`/`keydown` en window, one-shot con cleanup) — lo más cercano a "sonido desde el comienzo" que permite la plataforma.)*
3. **Exponer `rawCode` en `AllyContext`**: hoy el context solo expone `code` (la URL completa de Recurly); el popup necesita el código crudo para el mapeo. Un estado más, seteado en ambas ramas (URL y localStorage).

## La skill del Dev (el enfoque)
`implement`

## Vínculo externo
Ninguno — el logo de la API (`allyCompanyLogo`) se sigue consumiendo igual para todo otro code; k2/mfc solo lo sustituyen visualmente en el cliente. El contrato con `api.tueliges.us` no cambia.

## Scope de archivos
```
CREAR:
  (ninguno — los mp4 optimizados reemplazan a los existentes en public/)
MODIFICAR:
  public/K2.mp4, public/MFC.mp4      (re-encode)
  src/context/AllyContext.tsx        (exponer rawCode)
  src/types/ally.ts                  (rawCode en AllyContextType)
  src/shared/components/AllyPopUp.tsx (phone frame condicional)
NO TOCAR:
  src/lib/allyApi.ts · lógica de precios/Recurly del popup · translates/
```

## Alternativas descartadas
- **Matchear sobre `allyData.alliedCuponCode`** en vez de exponer `rawCode`: el campo viene de la API (`response.data.alliedCuponCode || code`) y podría diferir del param de la URL; el pedido es explícito sobre el URL param.
- **AV1/WebM**: más chico pero encoding lento y soporte no universal; H.264 CRF alcanza la magnitud (sesgo a la simplicidad).
- **Hosting externo / Git LFS** (planteado en `ideas.md`): innecesario una vez optimizados a ~5 MB.
- **Mapa de videos genérico/configurable**: dos partners hoy; un objeto literal de dos entradas alcanza. Se generaliza si aparecen más.

## Criterio de éxito
- `public/K2.mp4` y `public/MFC.mp4` < 6 MB c/u, ven bien a tamaño popup.
- `/?code=k2` y `/?code=mfc` muestran el video en phone frame en lugar del logo (también en visita posterior sin param, vía localStorage); cualquier otro code muestra el logo de la API como siempre.
- `npm run build` pasa.
