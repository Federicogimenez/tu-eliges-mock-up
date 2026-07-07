---
name: implement
description: El enfoque del Dev para construir lo que el Architect diseñó. Convierte un handoff en código funcionando, mínimo y coherente con el proyecto. Úsala al implementar una task ya diseñada.
---

# Skill: implement

> El **enfoque** del Dev para construir lo que el Architect diseñó. La disciplina de ejecución (scope de archivos, escalá ante ambigüedad, nota en `doc/`, reporte, no-commit, no leer el `map.md`) vive en [agents/dev.md](../../agents/dev.md), **no acá**. Esto es solo el enfoque propio de implementar.

## El enfoque

Convertí el handoff del Architect en código funcionando:

- Construí **lo mínimo que cumple el criterio de éxito** del brief — sin features que no pidió.
- **Reusá lo que ya existe** y espejá los patrones que el handoff señala; el código nuevo se parece al que lo rodea.
- Respetá los `standards/` que el handoff nombra (TypeScript strict, Tailwind v4 vía `@theme`, Framer Motion para animaciones, componentes funcionales con arrow functions).
- No escribas pruebas acá — ese es el enfoque `test`, y lo dispara el Leader.

## Verificación antes de reportar

Lo que hiciste tiene que **compilar y verse bien** antes de tu reporte:

- [ ] `npm run build` pasa (sin errores de TypeScript ni de bundling).
- [ ] Sin errores de consola en dev.
- [ ] Responsive verificado si tocaste UI: mobile (375px), tablet (768px), desktop (1280px+).
- [ ] Dark mode verificado si el componente tiene estilos dependientes del tema (el default del sitio es dark).
- [ ] Coincide con los mockups si la task los referencia (`design/` de la task).
