# chunk-optimization: Eliminar chunks pesados no utilizados del build

## Feature: refactorize
## Rol: Feature Dev
## Fecha: 2026-02-19

> Archivo: `doc/chunk-optimization.md`

---

## Que se hizo
Se eliminaron ~2.5 MB de JavaScript del build output causados por dependencias transitivas de `react-player` que nunca se usan. La app solo reproduce videos de YouTube, pero `react-player` v3 incluye providers para HLS, DASH, Mux y otros. Aunque estos providers usan `lazy()` (chunks separados), Vite igualmente los genera y lanza warnings de chunk size.

Se resolvio con aliases en `vite.config.ts` que redirigen `hls-video-element/react`, `dash-video-element/react` y `@mux/mux-player-react` a un componente stub vacio. Adicionalmente se agrego `manualChunks` para separar las vendor libs principales en chunks independientes.

## Archivos tocados
```
CREADOS:     src/stubs/empty-player.tsx
MODIFICADOS: vite.config.ts
```

## Decisiones tomadas
- **Aliases sobre imports selectivos**: `react-player` v3 no expone subpath como `react-player/youtube` (v2 si lo hacia). La unica forma de excluir providers es via aliases a nivel de bundler
- **Stub como componente React**: el stub exporta una funcion que retorna `null` — compatible con el wrapper `lazy()` de react-player aunque nunca se renderiza (los patterns `canPlay` no matchean URLs de YouTube)
- **Solo se stubean los 3 mas pesados**: HLS (525 kB), DASH (966 kB) y Mux (1,014 kB). Los demas providers (Vimeo, Wistia, Spotify, etc.) pesan pocos kB y no generan warnings
- **`manualChunks` para vendor splitting**: `react` + `react-dom` (12 kB), `react-router-dom` (33 kB) y `framer-motion` (122 kB) en chunks separados para mejor cache y carga priorizada

## Pendientes o notas
- Si en el futuro se necesitan videos HLS/DASH/Mux, remover el alias correspondiente de `vite.config.ts`
- Los otros providers de react-player (Vimeo, Wistia, Twitch, TikTok, Spotify, Cloudflare) siguen en el bundle pero pesan pocos kB cada uno
