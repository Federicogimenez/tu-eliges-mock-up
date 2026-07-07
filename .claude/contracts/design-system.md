# Contrato de design system — Uchooseit.us

> **El lenguaje visual que alinea todo el sitio.** Toda task de diseño se ancla acá. Lo deriva el **Architect** desde el material crudo; lo mantiene el **Leader** cuando una task cambia el lenguaje visual. Equivale al `design-system/.claude/CLAUDE.md` del modelo monorepo, adaptado a proyecto único.

## Fuente de verdad cruda

[`Uchooseit-Design-System/`](../../Uchooseit-Design-System/) (raíz del repo) cumple el rol de `resources/`: material de marca cargado por el humano + skill invocable.

- `README.md` — tono, tokens de color, type ramp, motion, patrones de contenido (fuente de verdad).
- `SKILL.md` — skill `uchooseit-design` (user-invocable) para generar interfaces/assets brandeados.
- `colors_and_type.css` — tokens drop-in + @font-face de Montserrat.
- `assets/` — PNGs de marca (check-verde, explosion-naranja, regalito-amarillo…), cards de pago, glyphs SVG. **Nunca se redibujan en SVG.**
- `ui_kits/website/` — recreaciones JSX de componentes + páginas end-to-end de referencia.

Si este contrato y el material crudo divergen, **re-derivar este doc es parte de la task** (el Leader lo ratifica).

## El lenguaje, destilado

- **Canvas oscuro por defecto.** Dark mode es el default del sitio (`.dark` en `<html>`, class-based).
- **Tipografía:** Montserrat (primaria, 7 pesos), Finger Paint (acento). Tratamiento de firma: **una palabra azul carga el headline**.
- **Azul de marca:** `#2995fc` (`--color-blue-uchooseit` / `--uc-blue`). Colores por categoría: shop `#884cfc`, travel `#00b3eb`, dining `#ffb807`, entertainment `#e82c8d`. Gradiente CTA: `#55d4e1 → #0451af`.
- **Tokens B2B propios** (landing `/business`): primary `#00A3FF`, secondary green `#22C55E`, purple RSM `#9333EA`, superficies `#0A0A0A`/`#111111`.
- **CTAs:** pills redondeadas (radius 20px o `999px`) en azul de marca, hover `translateY(-2px)` + halo azul.
- **Motion:** Framer Motion para animaciones de componente (no CSS keyframes, salvo globales en `src/styles/`). Keen Slider para carruseles.
- **Copy:** los números son héroes. Sin emoji en body copy. LATAM: español `tú/vos`, `¡…!` conservado.

## Implementación en el sitio

- Tokens vía **Tailwind v4 `@theme`** en `src/index.css` (no hay `tailwind.config.js`).
- Convenciones de componentes y estilos: [standards/styling.md](../standards/styling.md) + [standards/components.md](../standards/components.md) — el *cómo se escribe*; este doc es el *cómo se ve*.
- Responsive siempre: mobile 375px / tablet 768px / desktop 1280px+.
