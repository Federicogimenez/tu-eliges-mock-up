# Tasks — 0013-ally-popup-videos

> Checklist de ejecución derivado del brief. El Architect lo arma; ambos roles lo van marcando.

## Objetivos
- [x] `public/K2.mp4` y `public/MFC.mp4` optimizados a peso web (< 6 MB c/u), calidad aceptable a tamaño popup.
- [x] Ally popup muestra video en phone frame para code `k2`/`mfc` (URL param o localStorage), logo de API para cualquier otro code.

## Ejecución
- [x] Backup de originales fuera del repo (`../video-originals/K2.mp4`, `../video-originals/MFC.mp4`).
- [x] Re-encode ambos videos con ffmpeg (H.264 CRF 28, scale 480:-2, AAC mono 64k, faststart) — reemplazando el original con el mismo nombre/case.
- [x] `rawCode` agregado a `AllyContextType` (`src/types/ally.ts`).
- [x] `rawCode` seteado en `AllyContext.tsx` en ambas ramas (URL param y localStorage) y sumado al `contextValue`/deps.
- [x] `AllyPopUp.tsx`: mapa `ALLY_VIDEOS`, `allyVideo` derivado de `rawCode`, phone frame condicional (espejando `HowSection.tsx`) con `<video>` nativo autoplay/loop/playsInline/muted, toggle de mute al click.
- [x] `npm run build` pasa.

## QA visual (humano)
- [x] Revisión visual del humano OK (4 deltas aplicados; el humano disparó el gate de commit)

## Gate del Leader (lo dispara el humano, antes de commit)
- [x] Coherencia raíz→implementación verificada (proporcional al peso)
- [x] `map.md` actualizado
- [x] `memory.md` actualizado
- [x] Contratos actualizados si el brief declaró vínculo externo (n/a — sin vínculo externo)
- [x] Veredicto de refinamiento registrado en `doc/`

## Estado
`commiteada`
