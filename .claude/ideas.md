# Ideas — Uchooseit.us (sitio de marketing)

> Inbox de ideas crudas. Las carga cualquiera; el **Architect** las pesa contra `map.md` + `memory.md` (memoria evolutiva) y decide: promover a task, subir a `fundamentals`, o parquear/rechazar **con motivo**. Así las decisiones quedan balanceadas con las anteriores.

## Pendientes
> Una idea por bloque. Cruda está bien — la procesa el Architect.

- **Botón flotante de la calculadora comentado en `Main.tsx`:** el working tree trae `CalculateSavingButton` desactivado (comentado) — cambio que ningún brief declara y que toca una pieza de conversión del funnel. El Leader lo **dejó fuera del commit del gate 0014/0015** hasta ratificación: si la remoción es intencional, task/delta que lo borre de verdad (no comentado) y registre el motivo; si no, restaurar. *(cargada por el Leader, 2026-07-07)*
- **`dist/index.html` trackeado por accidente:** `dist/` está en `.gitignore` pero ese único archivo quedó commiteado en algún momento — cada `npm run build` local lo marca como modificado (hashes de assets). Limpieza candidata: `git rm --cached dist/index.html` (el deploy de GitHub Actions buildea fresco, no depende de este archivo — verificar el workflow antes). *(cargada por el Leader, 2026-07-06)*
## Procesadas
| Idea | Veredicto | Destino / motivo | Fecha |
|------|-----------|------------------|-------|
| Videos huérfanos `public/K2.mp4` (51 MB) y `public/MFC.mp4` (55 MB) | Promovida a task | `0013-ally-popup-videos`: se optimizan con ffmpeg a ~5 MB c/u (entran al repo sin LFS) y se muestran en phone frame en el ally popup para codes k2/mfc | 2026-07-07 |
