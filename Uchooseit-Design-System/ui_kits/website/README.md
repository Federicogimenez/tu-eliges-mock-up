# Website UI Kit · uchooseit.us

This kit recreates the public-facing **uchooseit.us** website surface for
fast prototyping. Components are simple, mainly-cosmetic recreations of
the production codebase
([Federicogimenez/tu-eliges-mock-up](https://github.com/Federicogimenez/tu-eliges-mock-up)) —
they match the brand visually but skip real auth, payments and APIs.

## What's in here

| File | What it is |
|---|---|
| `index.html`           | Component inventory — open this first to see everything in one page. |
| `save.html`            | **The primary deliverable** — full /save landing redesign (hero + community + Mundial 2026 calculator + Choosy upsell). |
| `kit.css`              | Page-level styles (imports the design system's `colors_and_type.css`). |
| `Wordmark.jsx`         | CSS-only uchooseit.us logo (smile underneath). |
| `NavBar.jsx`           | Sticky top nav with anchor links + ES/EN switch. |
| `CTAButton.jsx`        | Blue pill CTA · 3 variants (`primary` / `pink` / `ghost`). |
| `EmailCapture.jsx`     | Glass pill with email input + UNIRME — the hero conversion atom. |
| `TipVideoCard.jsx`     | Round avatar with play badge + name + tip title + pill tag. |
| `CommunityCarousel.jsx`| Horizontal scroller of `TipVideoCard`s with ‹ › controls. |
| `TrendCalculator.jsx`  | **Editable** trip budget (defaults: Mundial 2026 USA) + membership pitch panel. |
| `ChoosyCTA.jsx`        | Final upsell block with Choosy the fox + email re-capture. |
| `Footer.jsx`           | 4-column footer (brand · contact · support · legal) matching the source. |

## How to compose a new page

```html
<link rel="stylesheet" href="kit.css">
<script type="text/babel" src="Wordmark.jsx"></script>
<script type="text/babel" src="CTAButton.jsx"></script>
...
<script type="text/babel">
  function Page() {
    return (
      <main>
        <NavBar />
        <section className="uc-section">
          <h2>Mi sección <span className="hl">azul</span></h2>
          <EmailCapture cta="Unirme" />
        </section>
        <Footer />
      </main>
    );
  }
  ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
</script>
```

## /save — what changed vs the legacy page

The legacy `/save` (and the legacy `/purchase` page in the source repo)
leads with a generic pig + headline + ally logo and pushes straight to a
$47.99 sub. The redesigned `/save` reverses that:

1. **Hero is community-first.** A beach photograph, a balanced display
   line ("Somos una **comunidad** de ahorradores…") and a single email
   field that says _free first, premium later_.
2. **Community proof above pricing.** A carousel of member video-tips
   ("Voces de la comunidad") — every face links to a free tip. This is
   where social proof lives, not in a generic 5-star strip.
3. **Trendline calculator.** A live, editable budget for the World Cup
   (the brand's current tendencia) shows readers the dollar amount on
   the table _today_, then prices the membership against the savings.
4. **Choosy upsell.** A warm, mascot-led close that re-uses the email
   capture and reads more like a friend than a paywall.

## Known stubs (replace before launch)

- **Hero photo** — `kit.css .uc-hero__photo` is a CSS gradient
  placeholder. Drop a license-cleared beach image into `assets/` and
  swap to a `<picture>` element.
- **Member avatars** — `TipVideoCard` renders an SVG portrait with
  initial + colored gradient. Swap for real `<img>` once member photos
  are ready.
- **Choosy mascot PNG** — `ChoosyCTA` currently shows a labelled
  placeholder. Drop the official PNG into `assets/` and replace the
  `.uc-choosy__placeholder` div with an `<img>`.
- **Member videos** — clicking a tip does nothing; wire up to a modal +
  YouTube/Vimeo embed when video URLs land.
