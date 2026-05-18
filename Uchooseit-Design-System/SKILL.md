---
name: uchooseit-design
description: Use this skill to generate well-branded interfaces and assets for uchooseit.us, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping the savings community brand.
user-invocable: true
---

# uchooseit-design skill

Read the `README.md` file within this skill (it is the source of truth
for tone, color tokens, type ramp, motion and content patterns), then
explore the other available files:

- `colors_and_type.css` — drop-in tokens (CSS custom properties) +
  Montserrat @font-face declarations + base resets.
- `fonts/` — seven weights of Montserrat (.ttf).
- `assets/` — brand PNG illustrations, payment cards, SVG glyph set.
- `assets/references/` — the three client screenshots that briefed the
  /save redesign work (read these to ground any new layout).
- `preview/` — small swatch / specimen / component cards used in the
  Design System tab. Read them to see how each token looks in context.
- `ui_kits/website/` — the website kit, with JSX recreations of every
  component and **two end-to-end pages**: `index.html` (component
  inventory) and `save.html` (the full /save landing redesign).

## How to work as this skill

If creating **visual artifacts** (slides, mocks, throwaway prototypes,
landing pages, social posts):

- Copy out `colors_and_type.css` and any JSX components you need from
  `ui_kits/website/`.
- Build a black canvas. Use Montserrat. Let one blue word carry the
  headline (this is the signature treatment — see
  `preview/type-display.html`).
- Use the brand inline PNGs (check-verde, explosion-naranja,
  regalito-amarillo) — **never redraw them in SVG**.
- CTAs are rounded pills (`--uc-radius-lg = 20px` or `999px`) in
  `--uc-blue #2995FC` with a `translateY(-2px)` + blue halo hover.
- Spanish-first copy, `tú/vos` form, `¡…!` punctuation kept. No emoji
  in body copy. Numbers are heroes.

If working on **production code** (e.g. a contractor pulling this into
the Vite/Tailwind repo), copy `colors_and_type.css` tokens into the
Tailwind config or `theme.colors` and use the JSX kit components as
reference for class names / structure.

## If the user invokes this skill with no further guidance

Ask them what they want to build. Useful questions:

1. **Surface:** website page, marketing email, social card, in-app
   screen, or pitch slide?
2. **Audience:** prospective free member, current free member, or
   premium member?
3. **Anchor:** is there a specific savings _trend_ or moment to lean
   on (Mundial 2026, Día de las Madres, Black Friday)?
4. **Conversion goal:** email capture, premium upgrade, app install,
   or just brand awareness?
5. **Variations:** how many directions should we explore?
6. **Tweaks:** anything specific they want to toggle (palette accents,
   mascot vs no mascot, calculator on/off)?

Then act as an expert designer who outputs HTML artifacts _or_ production
code, depending on the need.
