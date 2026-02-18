# Uchooseit.us - Project Brief

## What is Uchooseit?

Uchooseit.us is a **membership-based savings platform** that gives consumers access to discounts across four categories: **Shop, Travel, Dining, and Entertainment**. Members pay an annual fee ($47.99/year) and unlock deals from 1M+ partner brands (Papa John's, Burger King, Disney, Universal, Avis, Wyndham, etc.).

The platform operates through two revenue channels:

1. **B2C (Consumer)**: Direct membership sales through the website and app (500k+ downloads)
2. **B2B (Affiliate/Partner)**: Revenue sharing and bulk licensing for businesses, nonprofits, influencers, and associations who distribute memberships to their audiences

## The Website

This codebase is the **marketing website** (React SPA) that serves as the primary conversion funnel:

- **Homepage** - Full experience with hero video, category showcase, brand carousel, pricing, and app download CTA
- **Category pages** (Shop, Travel, Dining, Entertainment) - Dedicated landing pages with category-specific brands, testimonials, and savings calculator
- **Affiliate pages** (Agency, Influencer, Company, Non-Profit) - Revenue calculator for B2B partners showing projected earnings
- **B2B Landing** (/business) - Full landing page targeting potential business partners with partnership models (RSM vs Bulk), booking integration for strategy calls
- **Product/Activation** - Membership purchase and activation flows

## Key Business Logic

### Affiliate System
Partners distribute a unique `?code=ALLY_CODE` URL. When a consumer visits with this code:
- The ally data is fetched from `api.tueliges.us` (company image, discount %, adjusted pricing)
- A popup shows the partner's branding and discount
- The Recurly checkout URL auto-applies the coupon
- The code persists in localStorage for return visits

### Savings Calculator
An interactive modal (accessible from any page via floating green button) lets users adjust purchase frequency across 19 subcategories to see projected annual savings. The B2B variant hides the membership cost, showing only the savings value.

### Payment
Memberships are processed through **Recurly** hosted checkout. The website redirects to `uchooseitus.recurly.com/subscribe/uchooseit_member` with optional coupon codes.

## How We Work

### Roles

| Role | Scope | Output location |
|------|-------|-----------------|
| **Architect** | Analyzes requirements, designs features, creates phased development plans. Never writes `src/` code. | `.claude/features/{feature}/` |
| **Dev** | Implements tasks from the Architect's plans with focused, file-specific context. Never makes architectural decisions. | `src/` |

### Workflow

```
1. Architect receives feature request
2. Architect reads .claude/standards/ + existing codebase
3. Architect creates .claude/features/{feature}/
   - brief.md   (using templates/feature-brief.md — objective, scope, acceptance criteria)
   - tasks.md   (using templates/task-spec.md per task — context, files, limits, acceptance criteria)
   - design/    (optional — mockups, screenshots, reference HTML provided by user)
4. Dev reads brief.md to understand scope and constraints
5. Dev reads the specific task from tasks.md
6. Dev reads .claude/standards/ for conventions
7. Dev implements, following the acceptance criteria
8. Dev verifies: TypeScript build, responsive, dark mode, no console errors
9. Dev documents what was done in doc/{task-titulo}.md using templates/task-doc.md
```

### Templates

All documentation follows standardized templates in `.claude/templates/`:

| Template | Used by | Purpose |
|----------|---------|---------|
| `feature-brief.md` | Architect | Define a feature: objective, scope, allowed files, acceptance criteria |
| `task-spec.md` | Architect | Define a single task: context, files, limits, acceptance criteria |
| `task-doc.md` | Dev | Document a completed task: what was done, files touched, decisions |

### Feature folder structure

Every feature follows this convention:

```
.claude/features/{feature-name}/
  brief.md      ← feature-brief.md template (Architect creates)
  tasks.md      ← task-spec.md template per task (Architect creates)
  doc/          ← task-doc.md template per completed task (Dev creates)
  design/       ← (optional) mockups, screenshots, reference HTML (user provides)
```

### Project Structure

```
.claude/
  claude-brief.md          ← You are here (project overview)
  roles/
    architect.md           ← Architect role definition
    dev.md                 ← Dev role definition
  templates/
    feature-brief.md       ← Template for feature briefs
    task-spec.md           ← Template for task specifications
    task-doc.md            ← Template for task documentation
  features/
    business/              ← B2B landing page feature (completed)
      brief.md
      tasks.md
      doc/                 ← 8 task-doc entries
      design/              ← Mockups + reference HTML
  standards/
    architecture.md        ← Project structure, provider hierarchy, routing
    components.md          ← Component patterns, naming, shared components
    styling.md             ← Tailwind v4, colors, typography, animations
    tech-stack.md          ← Dependencies, build config, external services
```

### Conventions at a Glance

- **React 19 + TypeScript strict** - Functional components, arrow functions, default exports
- **Tailwind v4** - `@theme` in `index.css`, no `tailwind.config.js`
- **Framer Motion** for animations, **Keen Slider** for carousels
- **Feature folders** in `src/features/`, lazy-loaded via `React.lazy()`
- **Main.tsx arrays** control layout behavior per route (`heroPages`, `noFaqsPages`, `darkBgPages`)
- **Context providers** for shared state (no Redux/Zustand)
- **Dark mode default** - Class-based via `.dark` on `<html>`
- **Montserrat** primary font, **Finger Paint** accent font

## Current State

The website is **live and deployed** on AWS via GitHub Actions (automated CI/CD in `.github/`). Netlify is used only for testing/preview. The B2C consumer pages and B2B landing page are complete. The affiliate system and savings calculator are fully functional. Analytics tracking (GA4 + Meta Pixel) is active.
