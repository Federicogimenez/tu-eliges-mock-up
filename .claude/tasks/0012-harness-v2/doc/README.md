# Documentación — 0012-harness-v2

> Cómo funciona lo que se implementó, para que el siguiente no tenga que deducirlo del código.

## Qué se construyó

Migración del harness de `app/.claude/` del workflow v1 (roles Architect+Dev, `features/{nombre}/`) al **workflow v2**, adaptación a proyecto único del modelo de `portfolios/federicode` (monorepo). Cero cambios en `src/`.

## Cómo funciona

**Mapping v1 → v2:**

| v1 | v2 | Nota |
|---|---|---|
| `roles/architect.md`, `roles/dev.md` | `agents/architect.md`, `agents/dev.md` + **`agents/leader.md`** (nuevo) | agents nativos con frontmatter (model: opus/sonnet/fable) |
| — | `commands/{architect,dev,leader}.md` | despacho por slash command |
| — | `skills/{implement,test}/` | el enfoque del Dev; la disciplina vive en su persona |
| `features/{nombre}/` (brief+tasks+doc+design) | `tasks/NNNN-slug/` (brief+tasks+doc) | misma anatomía; numeración secuencial + peso liviana/completa |
| `templates/{feature-brief,task-spec,task-doc}.md` | `templates/task/` | brief con *Vínculo externo* en vez de cross-project |
| negocio en `CLAUDE.md` | `contracts/business.md` | + contratos externos explícitos |
| estilo disperso (styling.md + Uchooseit-Design-System) | `contracts/design-system.md` | `Uchooseit-Design-System/` = material crudo (rol `resources/`) |
| — | `fundamentals/`, `map.md`, `memory.md`, `ideas.md` | memoria evolutiva; mantiene el Leader |
| `standards/` | `standards/` (sin cambios) | biblioteca de convenciones; el handoff nombra cuáles aplican |
| — | `settings.json` | commit/push/PowerShell piden confirmación; edits libres |

**Historial:** las 11 features del workflow v1 se migraron a `tasks/` con `git mv` (historial de archivos preservado — `git log --follow`), numeradas por la cronología real del git log. Su **contenido no se reescribió**: los briefs quedan en formato v1 como registro. Los paths `.claude/features/…` que aparecen dentro de esos docs viejos son autorreferencias históricas (hoy `tasks/NNNN-…`). `SEO_STATIC_PRERENDER_PLAN.md` se movió a `tasks/0002-seo/` (su task de origen). Esta task se renumeró `0001` → `0012` para quedar al final de la línea de tiempo.

| Feature v1 | Task | Primer commit | Estado al migrar |
|---|---|---|---|
| refactorize | `0001-refactorize` | 2026-02-18 | completada |
| seo | `0002-seo` | 2026-02-18 | suspendida (superada por next-migration) |
| business | `0003-business` | 2026-02-18 | activa — 2 QA pendientes |
| ally-popup-pricing-trigger | `0004-ally-popup-pricing-trigger` | 2026-03-06 | completada (enfoque descartado luego en 0006) |
| i18n | `0005-i18n` | 2026-03-14 | completada |
| ally-popup-immediate | `0006-ally-popup-immediate` | 2026-03-25 | completada |
| landings-form-email | `0007-landings-form-email` | 2026-03-31 | completada |
| landing-email-i18n | `0008-landing-email-i18n` | 2026-04-08 | completada |
| landing-latam | `0009-landing-latam` | 2026-05-18 | completada (maqueta, absorbida por 0010) |
| landing-email-migration | `0010-landing-email-migration` | 2026-05-19 | completada |
| next-migration | `0011-next-migration` | (sin commit aún) | diseñada, sin ejecutar |

*(0001–0003 comparten el commit inicial del harness v1; se ordenaron por estado: refactorize completada primero, seo suspendida, business aún activa.)*

**Diferencias deliberadas con federicode** (por no ser monorepo): no hay `templates/project*`, no hay siembra por `resources/` (los contratos ya se derivaron del material existente), y *Vínculo cross-project* se volvió *Vínculo externo* (contratos con sistemas que no viven en este repo).

## Veredicto del Leader

_Pendiente — primer gate: ratificar los seeds de `map.md`, `memory.md` y `fundamentals/` contra los fuentes._

## Notas para el futuro

- Los seeds de memoria se derivaron de docs (CLAUDE.md, standards, git log), no de una lectura fresca de `src/` — el primer gate del Leader debe verificarlos.
- `standards/` puede irse fusionando en `map.md`/contratos si el Leader ve redundancia; se conservaron para no perder convenciones vigentes.
