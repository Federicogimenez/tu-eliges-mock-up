# Uchooseit — Design System

> _Somos una comunidad que te ayuda a ahorrar en Estados Unidos._

This is the design system for **uchooseit.us** — a private discount network
and savings community for the Hispanic community in the U.S. Free members get
savings tips, trend-based calculators and weekly inspiration; **premium
members** pay an annual fee for access to 1M+ exclusive discounts.

This pack is built around a specific work order: a **redesign of the `/save`
landing page** to feel community-first rather than catalog-first — see
`ui_kits/website/save.html`.

---

## 1. Brand at a glance

| | |
|---|---|
| **Brand name** | uchooseit · uchooseit.us (formerly tueliges.us) |
| **Product** | Private discount membership · community savings tips |
| **Audience** | U.S.-based Hispanic savers / families |
| **Language** | Spanish-first, English second (full i18n in repo) |
| **Mascot** | **Choosy** — a fox in a blue mask + cape ("savings superhero") |
| **Wordmark** | `uchooseit` in white + `.us` in blue + a smile arc below |
| **Voice** | Warm, encouraging, plain-spoken, community-coded |

---

## 2. Sources used

This system was built from these inputs — re-open them for deeper context.

- **GitHub:** [`Federicogimenez/tu-eliges-mock-up`](https://github.com/Federicogimenez/tu-eliges-mock-up) — the React/TS/Vite/Tailwind front-end. Codebase is the source of truth for color tokens, font stack, button states, layout sass and all i18n copy in `src/data/uchooseit/{es,en}.json`. Two brand variants live in that repo (`tueliges` legacy + `uchooseit` current).
- **Reference screenshots from the client** (in `assets/references/`):
  - `save-redesign-hero.png` — the new hero direction (beach photo, "Somos una comunidad…", email-capture + UNIRME pill, community avatars carousel).
  - `save-calculator.png` — the "Viaje a USA Mundial 2026" calculator card.
  - `save-premium-member.png` — Choosy the fox inviting the user to become premium.

> ⚠️ The production `uchooseit.us` site itself was not directly readable from
> the React mock-up repo (the `index.html` only redirects). All `/save`-side
> behavior in this system is reconstructed from the screenshots + the brand
> tokens / components found in the codebase.

---

## 3. Content fundamentals

### Voice & tone
- **Conversational Spanish, you-form (`tú` / `vos`)** — see the production copy:
  _"Unite gratis para enterarte de los tips de ahorro que tenemos para vos."_
- **Warm, inviting, never corporate.** Copy frames the brand as a community
  ("nuestra comunidad", "creada por hispanos para hispanos") not a vendor.
- **Action-led headlines, soft body.** Headlines are short and imperative
  ("¡AHORRA DINERO YA!", "QUIERO DESCUENTOS"); body lines explain in plain
  language _why_ it works.
- **Numbers are heroes.** Concrete savings ("$2,500 al año", "1+ MILLÓN de
  descuentos", "30% OFF") earn space in display type. Use them sparingly so
  they keep landing.

### Casing
- **UPPERCASE** for CTAs and section labels (`UNIRME`, `JOIN NOW!`, `QUIERO AHORRAR`).
- **Sentence case + bold** for marketing headlines (`Somos una comunidad de ahorradores con acceso a descuentos exclusivos.`).
- **Title Case** is almost never used. Avoid it.

### Punctuation & flavor
- **Inverted `¡…!` and `¿…?`** are standard — never strip them.
- Exclamations are encouraged in CTAs and benefit lines.
- Em-dashes appear as `—`, not `--`.
- Spanish typographic quotes `«»` are not used; copy uses straight `"`.

### Emoji & symbols
- **No emoji** in product copy. The visual lexicon is illustration-led, not
  emoji-led. Two unicode glyphs do appear: ✓ (as the green check PNG) and
  💰-equivalent illustrations like `regalito-amarillo.png` and
  `explosion-naranja.png` — these are **PNG illustrations, not emoji**.
- Country flags appear as flat PNG when needed (e.g. `🇺🇸` is rendered as
  an inline image, see calculator card).

### Pronouns
- The brand says **"nosotros"** (we) when speaking about the company; the
  reader is **"tú/vos"** (you). _"Te ayudamos a ahorrar"_, never _"nuestros
  usuarios ahorran"_.

### Examples that ship
- `header_title`: "LA RED PRIVADA DE DESCUENTOS MÁS GRANDE DE U.S.A PARA LA COMUNIDAD HISPANA"
- `header_button`: "¡AHORRA DINERO YA!"
- `membership_cta`: "QUIERO AHORRAR"
- Premium pitch (from the reference image): "MUCHOS VIAJEROS NO SABEN que los mejores precios en Estados Unidos no son públicos. Unite gratis para enterarte de los tips de ahorro…"

---

## 4. Visual foundations

### Color
- **Black-first surface.** Almost every shipped section uses `#000` as the
  page background. Light backgrounds appear only as accent stripes
  (`--uc-blue-soft #E7FBFE`) and the footer copyright bar.
- **One hero color, used loud.** `--uc-blue #2995FC` is the savings color: it
  paints CTAs, highlighted words ("comunidad" in the hero), section titles,
  the smile under the wordmark, and the blue band that separates hero from
  community carousel. Use it _liberally_ — this isn't a quiet brand.
- **Accents:** pink `#DA82FF` (hover/secondary), green `#00BF63` (savings
  prices), orange `#FFB200`/red `#FF3131` (urgency, struck-through old price).
- **No gradients.** The brand is _flat_. The only "gradient" feel comes from
  full-bleed photography under the hero overlay. Avoid the
  blue-to-purple-gradient AI trope; it does not appear in the codebase.

### Type
- **Single family: Montserrat.** Weights 300 / 400 / 500 / 600 / 700 / 800 / 900.
- Display copy uses **Semibold or Bold + tight leading (1.05–1.2)**.
- Body uses **Light or Regular** at 1.45 leading — gives copy the airy,
  "tip from a friend" feel.
- **Fluid sizing via `clamp()`**, anchored to the `1rem = 10px` root.
- One word in a sentence is recolored to the accent blue (e.g. _"Somos una
  **comunidad** de ahorradores"_) — this is the brand's signature display
  treatment.

### Spacing & shape
- **Generous, breathable layouts.** Sections run 8–10vh top/bottom padding.
- **Corner radii are large, never sharp.** CTAs: 20px. Cards: 20–32px.
  The price-card uses `2rem` (20px) all around.
- **No drop-shadows on black surfaces.** Shadows are used on the rare
  light-stripe sections; on black, separation is done with hairline borders
  (`--uc-line #1F2530`) or by changing surface to `--uc-ink #0A0E16`.
- **Pills > rectangles.** Inputs, CTAs and tags all read as rounded pills.

### Backgrounds & imagery
- **Full-bleed photography in the hero** with a strong dark overlay so the
  display copy stays legible.
- Photography is **warm and editorial**, not stock-y. Beach scene with palm
  trees in the new hero; family / community shots throughout the rest of
  the site.
- **Illustrated PNGs** show up as inline icons: `explosion-naranja.png`,
  `regalito-amarillo.png`, `check-verde.png`. Always treat these as
  pre-baked illustration assets — do not redraw them in SVG.
- **No repeating patterns / textures / grain.** Backgrounds are solid black
  or photographic, nothing in between.

### Motion
- **Fade-in on scroll** is the only entry animation. Standard duration
  `0.8s`, staggered at `0.5s / 0.7s / 1s / 1.5s / 2s` (see
  `src/styles/animations/utilities.css`).
- **CTAs use a two-state slide** — the visible label slides up and a hover
  label slides in from below (e.g. `¡AHORRA DINERO YA!` → `JOIN NOW!`).
  300ms cubic ease.
- **Hover lift on cards:** `translateY(-2px)` + soft blue halo box-shadow.
- **No bounces, no parallax, no scroll-jacking.** Motion is functional.

### Hover / press states
- **Primary CTA hover:** slide-in alternate label OR `translateY(-2px)` +
  blue halo shadow + slight darken to `#000` background.
- **Press:** the CTA settles back to `translateY(0)` — no scale-down shrink.
- **Cards:** flip on hover (`rotateY(-180deg)`) to reveal the back side
  with extra info. The pricing card and the discount cards both use this.

### Borders, layering, transparency
- **Hairline borders** on dark surfaces: 1px `#1F2530`.
- **Heavy 2px–7px borders** on the premium price-card (decorative).
- **Transparency:** dimmed copy is achieved with `rgba(255,255,255,0.72)`
  for subtitles / `0.55` for meta. Avoid blur and frosted-glass — it doesn't
  appear in the codebase.

### Layout rules
- Max content width ~1200–1300px; pages center on the viewport.
- **Fixed header** uses Headroom (hides on scroll-down, reveals on
  scroll-up).
- **Floating WhatsApp button** bottom-right on every conversion page.
- **Footer access bar** is white with dark text — the only place white wins.

---

## 5. Iconography

The codebase ships two parallel icon systems. **Always prefer the brand's
own PNG illustrations for hero-prominent moments**; reach for the SVG glyph
set for chrome.

### Brand PNG illustrations (`assets/`)
- `check-verde.png` — green tick used inline before benefit lines.
- `explosion-naranja.png` — orange burst, used around urgency / discount %.
- `regalito-amarillo.png` — small yellow gift, used to flag special offers.
- `whatsapp.png` — branded WhatsApp launcher.

Treat these as **untouchable illustration assets** — do not redraw them.
They have hand-painted shading that an SVG redo would flatten.

### Brand glyph SVGs (`assets/icons/`)
Flat one-color icons used for UI chrome: `mail`, `phone`, `pin`, `play`,
`star`, `check-white`, `close`, `arrow-up`, `shopping`, `food`, `travel`,
`facebook`, `instagram`, `linkedin`, `youtube`, `twitter`, `error`,
`loading`. Stroke-weight is medium; corners are softly rounded; all 24×24.

### Unicode / emoji policy
- **No emoji in body copy.** Ever.
- Two unicode chars appear: the inverted Spanish `¡` `¿`, and `•` bullets.
- Country flags (🇺🇸, 🇲🇽…) are rendered as inline PNGs on the calculator,
  never as emoji, to keep cross-platform consistency.

### When you need an icon we don't have
1. First check `assets/icons/` — there are 18 glyphs in there.
2. If still missing, **link Lucide from CDN** (`https://unpkg.com/lucide-static@latest/icons/<name>.svg`) — its medium stroke + rounded ends match the brand. Flag any Lucide substitutions to the team.

### Choosy, the brand mascot
Choosy is a fox in a blue mask + blue cape, holding a shoulder bag of cash.
He shows up wherever the brand wants to feel _warm_ (premium upsell,
onboarding moments). **We do not have a Choosy asset file yet** — see
caveats in `README.md` §8. Until one is delivered, the system uses a
labelled placeholder card with the same proportions.

---

## 6. Repo layout (manifest)

```
.
├── README.md                ← you are here
├── SKILL.md                 ← Agent Skill front-matter for Claude Code
├── colors_and_type.css      ← tokens (CSS custom properties) + base resets
│
├── fonts/                   ← Montserrat .ttf — 7 weights
├── assets/                  ← brand PNGs (logos, illustrations, payment cards)
│   ├── icons/               ← brand SVG glyph set
│   ├── cards/               ← payment-card PNGs
│   └── references/          ← the 3 client screenshots that briefed /save
│
├── preview/                 ← Design System tab cards (each ~700×variable)
│
└── ui_kits/
    └── website/             ← uchooseit.us website kit
        ├── README.md
        ├── index.html       ← demo: legacy home page (top fold)
        ├── save.html        ← THE NEW /save LANDING — primary deliverable
        ├── Wordmark.jsx     ← uchooseit logo
        ├── NavBar.jsx
        ├── Footer.jsx
        ├── CTAButton.jsx
        ├── EmailCapture.jsx
        ├── CommunityCarousel.jsx
        ├── TipVideoCard.jsx
        ├── TrendCalculator.jsx
        └── ChoosyCTA.jsx
```

---

## 7. How this system gets used

- **Designing a new uchooseit screen?** Start by importing
  `colors_and_type.css` and pulling components out of
  `ui_kits/website/*.jsx`. Build a black canvas, use Montserrat, and let
  one blue word carry the headline.
- **Designing a marketing email or social card?** Same tokens — the brand
  is consistent across web and email per the `mailing/` and
  `email-marketing-img/` folders in the source repo.
- **Building a brand-aligned prototype quickly?** Open `SKILL.md` — that's
  the entry point if you're loading this into Claude Code as an Agent Skill.

---

## 8. Caveats & open asks

This section is a TODO for the user. Help us close these to make the
system bulletproof.

1. **No real Choosy mascot asset.** The reference screenshot shows a 3D-
   rendered fox in mask + cape, but we don't have the PNG / 3D source.
   **Ask:** can you share the Choosy hi-res PNG + any usage rules
   (sizes, do/don't poses)?
2. **The `uchooseit` wordmark** is currently re-built in CSS/HTML using
   the legacy `tueliges.us` smile logo as a reference. **Ask:** please
   share an official SVG/PNG of the uchooseit.us wordmark + smile lockup.
3. **Hero photography** in `save.html` uses a CSS gradient placeholder
   where the beach hero photo should sit. **Ask:** share a license-cleared
   beach / family / community photograph in landscape format.
4. **Community member videos** are currently stubbed with avatar circles
   and "▶ Tip" labels. **Ask:** can you share 4–8 video URLs (YouTube /
   Vimeo) and the member name + tip title for each?
5. **Mundial 2026 calculator data** is editable but the default line items
   come from the reference image. Confirm those are the canonical
   estimates you want to ship.
6. **Fonts:** Montserrat is loaded locally from the source repo. If you
   want to switch to Google Fonts CDN for the live site (smaller bundle),
   say the word and we'll swap.

---

_Last touched May 14, 2026 by the design system._
