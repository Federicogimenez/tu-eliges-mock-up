# Tasks — 0012-harness-v2

> Checklist de ejecución derivado del brief.

## Objetivos
- [x] Workflow v2 (Architect/Dev/Leader + tasks NNNN + memoria + contratos) operativo en `app/.claude/`
- [x] Historial v1 intacto, migrado a `tasks/0001`–`0011`

## Ejecución
- [x] `agents/` — personas de los tres roles adaptadas a proyecto único
- [x] `commands/` — despacho por slash command (`/architect`, `/dev`, `/leader`)
- [x] `skills/implement` + `skills/test` (con verificación propia del proyecto: build, responsive, dark mode)
- [x] `settings.json` — edits libres; `git commit`/`git push`/PowerShell piden confirmación
- [x] `contracts/business.md` — negocio + bordes externos (api.tueliges.us, Recurly, HubSpot, hermanos)
- [x] `contracts/design-system.md` — lenguaje visual anclado a `Uchooseit-Design-System/`
- [x] `fundamentals/` + `map.md` + `memory.md` + `ideas.md` — seeds derivados de CLAUDE.md/standards/historial
- [x] `templates/task/` reemplaza a los templates de feature v1
- [x] `CLAUDE.md` reescrito al workflow v2
- [x] Retirados `roles/` y templates v1 (quedan en git history)
- [x] `features/` migrado a `tasks/0001`–`0011` (`git mv`, orden cronológico por git log; esta task renumerada `0001`→`0012`)
- [x] `SEO_STATIC_PRERENDER_PLAN.md` movido a `tasks/0002-seo/` (su task de origen)

## QA visual (humano)
- [x] Revisión del humano OK (implícita: disparó `/leader` con intención de commit, 2026-07-06)

## Gate del Leader (lo dispara el humano, antes de commit)
- [x] Coherencia verificada · seeds de `map.md`/`memory.md`/`fundamentals/` ratificados contra los fuentes
- [x] Veredicto registrado en `doc/` → [doc/gate-leader.md](doc/gate-leader.md)

## Estado
`gate ✅ — lista para commit`
