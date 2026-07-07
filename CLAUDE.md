# Uchooseit.us — Sitio de marketing

Este archivo se carga en **cada sesión**. Define cómo trabajamos. Manténgase corto: cada token aquí se paga siempre.

**Qué es:** el sitio de marketing (React SPA) de Uchooseit.us, una plataforma de ahorro por membresía ($47.99/año, 4 categorías, 1M+ marcas). Es el **funnel de conversión primario**: convierte visitantes en miembros (B2C) y partners (B2B). El modelo de negocio completo y los bordes externos (backend de allies, Recurly, HubSpot, analytics) viven en [.claude/contracts/business.md](.claude/contracts/business.md).

**Regla de idioma:** documentación interna (`.claude/`) en español; código y contenido user-facing en inglés (o el idioma del mercado).

---

## Los roles

Dos enfoques **opuestos** balancean el proyecto — uno **crea**, el otro **evalúa** — y una mano neutral **ejecuta** entre ambos.

| Rol | Definición | Carácter | Hace | Contexto |
|---|---|---|---|---|
| **Architect** | [agents/architect.md](.claude/agents/architect.md) | Creativo, filósofo de la raíz | Investiga, diseña, pesa la task, arma el handoff del Dev | Propio |
| **Dev** | [agents/dev.md](.claude/agents/dev.md) | Ejecutor neutral, sin opinión de diseño | Toma una skill y ejecuta la task | **Solo ejecución** |
| **Leader** | [agents/leader.md](.claude/agents/leader.md) | Conservador, guardián | Evalúa coherencia, mantiene mapa/memoria/contratos, maneja commits | Propio |

Architect y Leader mantienen **contexto y decisiones independientes** (subagentes separados): por eso se equilibran. El Dev no decide diseño — sirve a ambos.

## Regla de despacho

Cada rol se **entra con un slash command** al abrir (o dentro de) un chat. El comando hace que la conversación principal **asuma ese rol** y se presente con un primer mensaje en personaje. El rol que entrás **lidera el chat** y delega en los otros como subagentes cuando el loop lo pide.

| Necesidad | Disparador | Qué pasa |
|---|---|---|
| Crear / diseñar / explorar / resolver | [`/architect`](.claude/commands/architect.md) | El chat asume Architect (rol por defecto). Diseña, **delega la ejecución al Dev** (subagente) y **para en tu QA visual** — no encadena al Leader. |
| Implementar lo diseñado | [`/dev`](.claude/commands/dev.md) | El chat asume Dev: carga una skill (el enfoque) + el handoff y ejecuta dentro del scope. Normalmente lo invoca el Architect como subagente, pero podés entrarlo directo. |
| Evaluar / revisar / commitear | [`/leader`](.claude/commands/leader.md) en chat dedicado | El chat asume Leader: **lo disparás vos** para commitear. Para correr en **Fable 5**: chat dedicado → `/model fable` (una vez, persiste) → `/leader`. Corre el gate de coherencia (proporcional al peso), **delega pruebas al Dev** (skill `test`) y maneja el commit. No se encadena solo. |

- Cada comando carga la persona desde [.claude/agents/](.claude/agents/) (la fuente de verdad del rol). El argumento del slash (`/leader 0003-foo`) entra como foco de la sesión.
- **Gate obligatorio:** ningún `git commit` sin el Leader — reforzado en [.claude/settings.json](.claude/settings.json) (`git commit` y `git push` piden confirmación). **El push a `main` deploya producción** (AWS vía GitHub Actions).

## El loop

1. **Vos ↔ Architect** entienden la raíz → investiga → diseña. El Architect **pesa la task** (liviana/completa) y arma el **handoff** del Dev (instrucción condensada + scope + punteros — el Dev no lee el `map.md`).
2. **Dev** ejecuta sobre la skill (el enfoque) + el handoff, con contexto solo de ejecución.
3. **Vos hacés QA visual.** El Architect surfacea el resultado y **para acá** — el Leader no se encadena.
4. Si el QA pide ajustes: el Architect manda la **corrección por delta al mismo Dev** (sin reboot) → volvés a QA. Repetís hasta tu OK.
5. **Vos disparás al Leader** (`/leader`) cuando decidís commitear: corre el gate (coherencia + pruebas vía Dev + commit), proporcional al peso, y actualiza `map.md` + `memory.md` (+ contratos si cambió algo de fondo).

> El **Architect** orquesta los pasos 1–4 sin pedir permiso para delegar, pero **termina en tu QA**. El **Leader nunca se encadena solo**: es disparo tuyo. Vos siempre tenés la última palabra — el Leader propone, no impone.

## Sesgo a la simplicidad

Tendencia por defecto: **resolver simple, no robusto**. El Architect dimensiona cada solución a la magnitud real del problema y solo construye robustez cuando es muy necesaria (y lo justifica). Sobre-ingeniería es deuda.

## Permisos

El Dev corre **todos los edits de corrido, sin frenar por permisos** — una secuencia de implementación continua hasta terminar. **PowerShell, instalaciones y git commit/push sí piden confirmación humana** (gate en [settings.json](.claude/settings.json)). El diseño profundo de tasks es lo que habilita esa corrida sin supervisión.

## Los alineadores

- [contracts/business.md](.claude/contracts/business.md) → *¿qué convierte este sitio y con qué bordes externos?* — autoridad de negocio. Una task que toca un borde externo (backend `api.tueliges.us`, Recurly, HubSpot, proyectos hermanos de `tu-eliges/`) lo declara en el **Vínculo externo** de su brief.
- [contracts/design-system.md](.claude/contracts/design-system.md) → *¿cómo se ve todo, alineado?* — lenguaje visual. Material crudo de marca en [Uchooseit-Design-System/](Uchooseit-Design-System/) (incluye la skill `uchooseit-design`).

## Ideas

[.claude/ideas.md](.claude/ideas.md): inbox de ideas crudas que el Architect pesa contra `map`+`memory` antes de promover a task, subir a `fundamentals`, o parquear con motivo. Así las decisiones quedan balanceadas con las anteriores.

## Skills

Capacidades de ejecución (`.claude/skills/<nombre>/SKILL.md`). El Architect elige una existente o **define una nueva** según la necesidad. Internas: `implement`, `test` — **solo el enfoque**; la disciplina de ejecución vive en `agents/dev.md`. La skill de marca `uchooseit-design` vive en `Uchooseit-Design-System/`. Bundled (Anthropic, siempre al día): ej. `claude-api` — el **Leader** la consulta al tocar config de modelos/harness.

## Anatomía y memoria

```
app/
├── CLAUDE.md                # este archivo
├── Uchooseit-Design-System/ # material crudo de marca + skill (rol resources/)
└── .claude/
    ├── agents/              # personas de los roles (fuente de verdad)
    ├── commands/            # /architect · /dev · /leader
    ├── skills/              # implement · test
    ├── contracts/           # business.md · design-system.md (los alineadores)
    ├── fundamentals/        # el norte: problems · objectives · scope
    ├── map.md               # dónde vive cada cosa (Leader, cada commit)
    ├── memory.md            # qué aprendimos y por qué (Leader, evolutiva)
    ├── ideas.md             # inbox de ideas crudas
    ├── standards/           # convenciones de código (el handoff nombra cuáles aplican)
    ├── templates/task/      # esqueleto de task nueva
    └── tasks/               # historial inmutable: NNNN-slug/ (brief · tasks · doc)
```

- **Task nueva:** copiá [.claude/templates/task/](.claude/templates/task/) a `.claude/tasks/NNNN-slug/`. Numerá secuencial (siguiente: `0013-`).
- **Antes de leer todo el código:** empezá por `map.md`. Si no alcanza para tu task, es señal de que el Leader debe enriquecerlo.

## Historial (workflow v1)

Las tasks `0001`–`0011` son el trabajo del workflow v1 (`features/`), migrado al formato tasks en orden cronológico con su git history preservado. Sus briefs quedan en **formato v1, como registro: no se editan**. Trabajo pendiente ahí se retoma en una task nueva que referencia el brief viejo — pendientes conocidos en la sección *Deuda* de [memory.md](.claude/memory.md) (`0011-next-migration` diseñada sin ejecutar; `0003-business` con 2 QA pendientes). La migración de harness y el mapping completo están en [.claude/tasks/0012-harness-v2/](.claude/tasks/0012-harness-v2/).
