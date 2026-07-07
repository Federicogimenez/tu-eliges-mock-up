# Ideas — Uchooseit.us (sitio de marketing)

> Inbox de ideas crudas. Las carga cualquiera; el **Architect** las pesa contra `map.md` + `memory.md` (memoria evolutiva) y decide: promover a task, subir a `fundamentals`, o parquear/rechazar **con motivo**. Así las decisiones quedan balanceadas con las anteriores.

## Pendientes
> Una idea por bloque. Cruda está bien — la procesa el Architect.

- **`dist/index.html` trackeado por accidente:** `dist/` está en `.gitignore` pero ese único archivo quedó commiteado en algún momento — cada `npm run build` local lo marca como modificado (hashes de assets). Limpieza candidata: `git rm --cached dist/index.html` (el deploy de GitHub Actions buildea fresco, no depende de este archivo — verificar el workflow antes). *(cargada por el Leader, 2026-07-06)*
- **Videos huérfanos `public/K2.mp4` (51 MB) y `public/MFC.mp4` (55 MB):** están en el working tree sin referencia en ningún código (ni en el historial). El Leader los excluyó del commit de `0012-harness-v2`. Decidir: ¿los reclama alguna task futura (→ evaluar hosting externo o Git LFS antes de meter ~106 MB al repo) o se borran del disco? *(cargada por el Leader, 2026-07-06)*

## Procesadas
| Idea | Veredicto | Destino / motivo | Fecha |
|------|-----------|------------------|-------|
| — | — | — | — |
