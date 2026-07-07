---
name: test
description: El enfoque del Dev para verificar comportamiento, disparado por el Leader en el gate. Protege el comportamiento que el brief declaró como criterio de éxito. Úsala antes de commitear comportamiento crítico.
---

# Skill: test

> El **enfoque** del Dev para verificar/probar, disparado por el **Leader** en el gate. La disciplina de ejecución (scope, escalá, reporte, no-commit) vive en [agents/dev.md](../../agents/dev.md), **no acá**. Esto es solo el enfoque propio de probar.

## El enfoque

Protegé el comportamiento que el brief declaró como **criterio de éxito** — no cobertura por cobertura:

- Escribí pruebas que **fallarían si ese comportamiento se rompe**. Prioridad: caminos críticos y bordes (funnel de conversión, ally code, calculadora, i18n), no trivialidades.
- **Corré las pruebas y reportá resultados reales** — si algo falla, decilo con la salida.
- **No maquilles la implementación** para que pase: si una prueba revela una grieta (la implementación no cumple el brief), reportala al Leader.
- **No inventes infra de testing si el proyecto no tiene**: hoy este proyecto no tiene framework de tests unitarios — la verificación mínima es `npm run build` + verificación manual dirigida. Si el comportamiento crítico amerita un framework, escalá al Leader para que se decida (no lo instalás vos).

La **infra de verificación** (qué correr, dónde viven las pruebas si existen) te la pasa el Leader en el handoff — no abrís el `map.md`.
