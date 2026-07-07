# Ideas — Uchooseit.us (sitio de marketing)

> Inbox de ideas crudas. Las carga cualquiera; el **Architect** las pesa contra `map.md` + `memory.md` (memoria evolutiva) y decide: promover a task, subir a `fundamentals`, o parquear/rechazar **con motivo**. Así las decisiones quedan balanceadas con las anteriores.

## Pendientes
> Una idea por bloque. Cruda está bien — la procesa el Architect.

- **`dist/index.html` trackeado por accidente:** `dist/` está en `.gitignore` pero ese único archivo quedó commiteado en algún momento — cada `npm run build` local lo marca como modificado (hashes de assets). Limpieza candidata: `git rm --cached dist/index.html` (el deploy de GitHub Actions buildea fresco, no depende de este archivo — verificar el workflow antes). *(cargada por el Leader, 2026-07-06)*
## Procesadas
| Idea | Veredicto | Destino / motivo | Fecha |
|------|-----------|------------------|-------|
| Videos huérfanos `public/K2.mp4` (51 MB) y `public/MFC.mp4` (55 MB) | Promovida a task | `0013-ally-popup-videos`: se optimizan con ffmpeg a ~5 MB c/u (entran al repo sin LFS) y se muestran en phone frame en el ally popup para codes k2/mfc | 2026-07-07 |
| Botón flotante de la calculadora comentado en `Main.tsx` sin brief | Ratificada por el humano | El humano ordenó commitearlo tal cual ("commitea todo") tras el gate 0014/0015. Queda como desactivación deliberada; si se vuelve definitiva, borrar el bloque comentado (deuda menor) | 2026-07-07 |
