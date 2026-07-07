# Documentación — 0013-ally-popup-videos

> Cómo funciona lo que se implementó, para que el siguiente no tenga que deducirlo del código.

## Qué se construyó
1. `public/K2.mp4` y `public/MFC.mp4` re-encodeados con ffmpeg 8.0: `libx264 -preset slow -crf 28`, escala `480:-2`, `yuv420p`, audio AAC mono 64k, `+faststart`, metadata stripeada. Originales (52.6 MB / 57.4 MB) respaldados en `../video-originals/` (fuera del repo) antes de tocar nada. Resultado: `K2.mp4` 3.14 MB, `MFC.mp4` 3.14 MB — ambos bien por debajo del target de 6 MB, no hizo falta bajar a CRF 30.
2. `rawCode: string | null` agregado a `AllyContextType` (`src/types/ally.ts`) y expuesto por `AllyProvider` (`src/context/AllyContext.tsx`): seteado con el código crudo en las dos ramas del `useEffect` (URL param y localStorage), sumado a `contextValue`/deps del `useMemo`.
3. `AllyPopUp.tsx`: mapa literal `ALLY_VIDEOS = { k2: '/K2.mp4', mycommunitypharmacy: '/MFC.mp4' }` (el code de ally es `mycommunitypharmacy`, el archivo sigue llamándose `MFC.mp4` — no se renombró). `allyVideo` se deriva de `rawCode?.toLowerCase()`. En el branch de éxito, si `allyVideo` existe se renderiza un phone frame en vez del `<picture>` del logo de la API.

## Cómo funciona
- **Encaje frame↔video:** el frame (`frame-iphone.png`, 305×615, fondo transparente) es el único elemento en flujo (`relative`) y manda el tamaño (`portrait:h-[38dvh] landscape:h-[48dvh] w-auto`). El contenedor es `w-fit h-fit` sin fondo/rounded/overflow propios (el PNG ya tiene el bisel). El `<video>` va absoluto y centrado (`left-1/2 top-1/2 -translate-1/2`) al `w-[90.8%] h-[96.4%]` — el % exacto de la zona de pantalla del PNG dentro del bisel — con `border-radius: 9% / 4.5%` inline (porcentual, escala con el elemento) y `bg-black` de respaldo. Así frame y video escalan juntos a cualquier breakpoint.
- El `<video>` es nativo (no ReactPlayer, es un mp4 local): `autoPlay loop playsInline muted={isMuted}`.
- **Sonido por default:** `isMuted` arranca en `false`. Un `useEffect` (dispara con `visible && allyVideo`) intenta `video.play()` desmuteado vía `videoRef`; si el browser rechaza la promesa (autoplay-with-sound bloqueado sin gesto previo), cae a `video.muted = true` + `setIsMuted(true)` + reintenta `play()`. El tap sobre el frame sigue togglando `isMuted` manualmente.
- **Auto-unmute en la primera interacción:** dentro de ese mismo `catch`, si tocó mutear, se registra un handler compartido (`unmuteOnInteraction`) en `window` para `pointerdown` y `keydown`. Al dispararse cualquiera de los dos, se desregistra de ambos eventos, desmutea el video chico (y el `expandedVideoRef` si ya existe), `setIsMuted(false)` y reintenta `play()` con catch silencioso. La función de desregistro se guarda (`unregisterUnmuteOnInteraction`) y se llama en el cleanup del `useEffect`, para no dejar listeners vivos si el popup se desmonta antes de la primera interacción. Si el usuario ya había interactuado con la página antes de montar el popup, el `play()` desmuteado inicial funciona directo y este camino no se activa.
- **Mute toggle:** vive en un `<button>` propio superpuesto al frame (`absolute bottom-[5%] right-[6%] z-40`, circular `size-10`, `bg-black/60`), con un SVG inline de parlante (dos paths condicionales por `isMuted`: ondas cuando suena, tachado cuando está muteado). `onClick` hace `e.stopPropagation()` para no disparar el fullscreen del contenedor. `aria-label` dinámico ("Unmute video" / "Mute video").
- **Click en el video/frame → modo expandido por CSS** (el fullscreen nativo se descartó: `backdrop-blur-xl` del contenedor blurreado del popup crea un containing block que rompía `position: fixed` de cualquier fallback). El contenedor chico dispara `handleExpand()` (pausa el video chico, `setIsExpanded(true)`). El overlay expandido (`isExpanded && allyVideo`) se renderiza como **hermano directo del contenedor blurreado, dentro del `motion.div`** (que es `fixed inset-0`, solo anima opacity — no crea containing block): `absolute inset-0 z-50 bg-black/90`, mismo patrón phone frame a tamaño pantalla (`h-[96dvh] max-w-[92vw]` en el frame, video `w-[90.8%] h-[96.4%]` igual que el chico). Click en el fondo cierra (`handleCollapse`); click sobre el teléfono hace `stopPropagation`. Botón X (mismo estilo de siempre) y botón de mute (mismo `MuteIcon` compartido) van dentro del overlay.
- **Continuidad de reproducción:** son dos `<video>` (`videoRef` chico, `expandedVideoRef` grande — nunca se remonta el mismo nodo). Al expandir, se pausa el chico; el callback ref `setExpandedVideoRef` sincroniza `currentTime` desde el chico y hace `play()` en cuanto el grande monta. Al cerrar (`handleCollapse`), se copia `currentTime` del grande al chico y se reanuda. `isMuted` es un solo estado compartido por ambos videos y ambos botones de mute.
- `MuteIcon` se extrajo como componente de módulo (no exportado) para no duplicar el SVG entre el botón chico y el del overlay.
- Para cualquier `rawCode` que no sea `k2`/`mycommunitypharmacy` (o `rawCode` null), `allyVideo` es `undefined` y se renderiza el `<picture>` del logo tal cual estaba — sin cambios de comportamiento para otros allies.

## Veredicto del Leader

**✅ Cierra** (gate liviano, proporcional al peso `liviana`; 2026-07-07).

- Raíz→implementación: el diff hace exactamente lo que el brief pide, incluidos los 4 deltas de QA documentados. Videos a ~3 MB c/u (criterio < 6 MB ✅). `rawCode` seteado en ambas ramas y en deps del `useMemo`. Cualquier otro code conserva el `<picture>` del logo intacto.
- Vínculo externo: ninguno — verificado que el contrato con `api.tueliges.us` no cambia (`allyCompanyLogo` se sigue consumiendo igual).
- Simplicidad: objeto literal de 2 entradas, sin generalización prematura — alineado al sesgo del proyecto.
- Verificación: `npm run build` verde (TS strict + bundling + static-seo).

Observaciones (no bloqueantes):
- El criterio de éxito del brief dice `/?code=mfc` como shorthand, pero el code real es `mycommunitypharmacy` (el propio brief lo aclara en el enfoque). El QA humano validó con el code real.
- El video expandido usa `object-cover` y el chico `object-contain` — irrelevante en la práctica porque el % de pantalla del PNG calza el aspect, pero si se toca el frame, unificar.
- `dist/index.html` quedó **fuera del commit**: es el archivo trackeado por accidente (idea pendiente en `ideas.md`) y cada build lo ensucia.

## Notas para el futuro
- Backup de originales sin optimizar vive en `c:\Users\Usuario\Documents\lean-launchers\trabajos\tu-eliges\video-originals\` (fuera del repo, no versionado).
- Si aparecen más partners con video, `ALLY_VIDEOS` es el único punto a extender (objeto literal, sin generalizar hasta que haga falta — ver brief).
