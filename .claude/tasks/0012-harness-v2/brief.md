# Brief — 0012-harness-v2

> **Nota de numeración:** esta task nació como `0001-harness-v2`. Al migrarse el historial `features/` al formato tasks (segunda parte de esta misma task), las 11 features tomaron `0001`–`0011` por orden cronológico y esta pasó al final de la línea de tiempo como `0012`.

> **Excepción de autoría:** esta task evoluciona el **harness mismo**, no una feature del sitio; la ejecutó directamente el asistente a pedido del humano (2026-07-06), tomando como referencia el harness de `portfolios/federicode`.

## Peso
`completa`

## El problema
El workflow v1 (`roles/` Architect+Dev, `features/{nombre}/`, templates de feature) organizaba bien la ejecución pero no tenía: un **evaluador** que juzgue coherencia antes de commitear (el push a `main` deploya producción sin gate), **memoria evolutiva** (map/memory/fundamentals — cada sesión re-deducía el proyecto desde los fuentes), **contratos explícitos** de negocio y design system (el conocimiento vivía disperso en CLAUDE.md, standards y el folder `Uchooseit-Design-System/`), ni **entrada por slash commands** con personas cargables.

## La raíz
El workflow v1 modelaba solo la mitad creadora (diseñar → ejecutar). Sin la mitad evaluadora ni memoria que se destile, la coherencia dependía de la sesión de turno, y las decisiones pasadas no pesaban sobre las nuevas.

## La necesidad de esta etapa
Adoptar el modelo probado en `portfolios/federicode` (Architect crea / Leader evalúa / Dev ejecuta neutral, tasks `NNNN-slug`, memoria evolutiva, contratos alineadores) **adaptado a proyecto único** — sin inventar la capa monorepo que acá no existe — y **sin perder el historial** de `features/`.

## El enfoque elegido
1. **Roles → agents nativos** (`agents/architect|dev|leader.md`) con slash commands de despacho (`commands/`). Architect crea y conduce hasta el QA humano; Dev ejecuta con handoff autosuficiente (no lee `map.md`); Leader (disparado por el humano) corre el gate de coherencia y es dueño del commit.
2. **Los alineadores del monorepo se vuelven contratos internos:** `business/.claude/CLAUDE.md` → `contracts/business.md` (negocio + bordes externos: api.tueliges.us, Recurly, HubSpot, hermanos de `tu-eliges/`); `design-system/.claude/CLAUDE.md` → `contracts/design-system.md`, con `Uchooseit-Design-System/` (ya existente en el repo) cumpliendo el rol de `resources/` (material crudo).
3. **Cross-project → Vínculo externo:** al no haber tasks hermanas harnesseadas, el brief declara el contrato externo afectado y el Leader verifica que `contracts/` quede veraz.
4. **Memoria evolutiva:** `fundamentals/` (norte), `map.md` (Leader, cada commit), `memory.md` (destilada), `ideas.md` (inbox). Seeds derivados de CLAUDE.md, standards y el historial — el Leader los ratifica en su primer gate.
5. **Tasks `NNNN-slug`** (`brief.md` + `tasks.md` + `doc/`) con peso liviana/completa. El historial `features/` **se migró a `tasks/0001`–`0011`** por orden cronológico (git log), con `git mv` para preservar el historial de cada archivo; el **contenido** de los briefs viejos no se reescribe (formato v1, solo lectura).
6. **`standards/` se conserva** como biblioteca de convenciones (el *cómo se escribe*); el handoff del Architect nombra cuáles aplican.
7. **`settings.json`**: edits de corrido para el Dev; `git commit`, `git push` y PowerShell piden confirmación (el push deploya producción).

## La skill del Dev
No aplica — meta-trabajo de harness (docs + config, sin lógica), ejecutado directo.

## Vínculo externo
Ninguno (no toca código del sitio ni contratos externos; los *documenta*).

## Scope de archivos
```
CREAR:
  .claude/agents/{architect,dev,leader}.md
  .claude/commands/{architect,dev,leader}.md
  .claude/skills/{implement,test}/SKILL.md
  .claude/settings.json
  .claude/contracts/{business,design-system}.md
  .claude/fundamentals/{README,problems,objectives,scope}.md
  .claude/{map,memory,ideas}.md
  .claude/templates/task/{brief.md,tasks.md,doc/README.md}
  .claude/tasks/0012-harness-v2/**
MODIFICAR:
  CLAUDE.md                       (workflow v2 + anatomía; negocio se muda a contracts/)
  .claude/features/** → .claude/tasks/0001..0011-*/   (git mv, contenido intacto)
NO TOCAR:
  contenido de los briefs v1 migrados (son registro, solo cambió su ubicación)
  .claude/standards/**            (siguen vigentes como convenciones)
  src/**                          (cero cambios de código)
BORRAR:
  .claude/roles/**                (reemplazado por agents/ — queda en git history)
  .claude/templates/{feature-brief,task-spec,task-doc}.md (reemplazados por templates/task/)
```

## Alternativas descartadas
- **Dejar `features/` congelado en su carpeta original** (primera decisión de esta task): revertido a pedido del humano — se migró a `tasks/0001..0011` con `git mv` (historial de archivos preservado vía `git log --follow`) y numeración por cronología real del git log. Lo que sigue descartado es **reescribir el contenido** de los briefs viejos al template v2: son registro, no docs vivos.
- **Contratos como proyectos hermanos (`tu-eliges/business/`, `tu-eliges/design-system/`):** descartado — `tu-eliges/` no está harnesseado como monorepo y el pedido fue actualizar dentro de `app/`; carpeta `contracts/` interna cumple el rol sin inventar estructura.
- **Absorber `standards/` en `map.md`:** descartado — el map dice *dónde vive y cómo se conecta*; los standards dicen *cómo se escribe*. Son lentes distintos y los standards ya están escritos y vigentes.
- **Eliminar el historial v1:** descartado explícitamente por el pedido ("manteniendo el historial") — se conserva completo, ahora bajo `tasks/`.

## Tecnología / investigación
No aplica. Decisión de diseño de harness, calcada de `portfolios/federicode/.claude/tasks/0001-harness-monorepo/`.

## Criterio de éxito
- Los tres roles se entran con `/architect`, `/dev`, `/leader` y cargan sus personas desde `agents/`.
- Una task nueva se arranca copiando `templates/task/` a `tasks/NNNN-slug/`.
- Los contratos responden: *¿qué convierte este sitio y con qué bordes?* (business) y *¿cómo se ve, alineado?* (design-system).
- `map.md`/`memory.md`/`fundamentals/` dan el modelo mental sin releer fuentes, y el Leader tiene qué mantener.
- El historial v1 sigue intacto y navegable como `tasks/0001`–`0011`, con su git history preservado (`git log --follow`).
