# Architecture — profolio

> Personal developer portfolio for Kudurupaka Upender.
> **This document describes what the code actually does**, not what the README aspires to. Where the two disagree, the discrepancy is flagged in §11.

| | |
|---|---|
| **Repository** | `Upender5/profolio` |
| **Type** | Static, content-driven marketing/portfolio site |
| **Framework** | Next.js (App Router) |
| **Backend** | None |
| **Database** | None |
| **API** | None (no `app/api`, no server actions, no external calls at runtime) |
| **Auth** | None |
| **Hosting model** | Static Site Generation (SSG) served via Vercel |
| **Doc version** | 1.0.0 (2026-06-26) |

---

## 1. Purpose & scope

`profolio` is a single-author portfolio site. It presents a profile, a skills/tech-stack section, and a set of project case studies. Each case study can render animated, data-driven SVG diagrams (architecture, ER, workflow, user journey).

The defining architectural property: **all content lives in one JavaScript module** (`src/data/portfolio.js`). There is no CMS, no database, no fetch layer. The site is a pure function of that file plus the component tree. Editing content means editing that file and redeploying.

**Out of scope (because they do not exist in the codebase):** databases, REST/GraphQL APIs, authentication, authorization, background jobs, message queues, caching layers. The diagrams *depict* such systems for the projects being described — they are illustrations rendered from static data, not running infrastructure.

---

## 2. System context (C4 level 1)

```
                ┌─────────────────────────────┐
   Visitor ───▶ │  profolio (static site)     │ ───▶  Email / LinkedIn / GitHub / npm
   (browser)    │  served by Vercel CDN edge   │        (outbound links only)
                └─────────────────────────────┘
```

- **Inbound:** anonymous public web traffic. No login, no forms that POST anywhere (the contact page is a set of `mailto:`/external links, not a submission form).
- **Outbound:** plain anchor links to email and social profiles. No API integrations.
- **Trust boundary:** there is effectively one — the CDN edge. Because nothing is dynamic at request time, the attack surface is the static asset bundle and the host configuration.

---

## 3. Technology stack (as pinned in `package.json`)

| Concern | Choice | Version (pinned) |
|---|---|---|
| Framework | Next.js (App Router) | `^16.2.9` |
| UI runtime | React / React DOM | `^18` |
| Language | TypeScript | `^5` (partial adoption — see note) |
| Styling | Tailwind CSS | `^3.4.1` |
| Styling | CSS Modules + global CSS | n/a |
| Icons | `react-icons` | `^5.3.0` |
| PostCSS | postcss | `^8` |
| Lint | eslint + `eslint-config-next` | `^8` / `^16.2.9` |

**TypeScript is partially adopted.** `tsconfig.json` is present and `src/app/layout.tsx` / `src/app/page.tsx` are typed, but the routes (`about`, `contact`, `blog`, `projects`, `projects/[slug]`), every component, and the data layer are plain `.js`. Type safety therefore covers the shell, not the content model. The `project` object shape passed into pages and diagram components is **untyped and unvalidated** at build time.

---

## 4. Rendering & execution model

The site uses the **Next.js App Router** with the default **React Server Components** model:

- **Server Components by default.** Pages (`page.tsx` / `page.js`) and the layout render on the server at build time. They import content directly from `src/data/portfolio.js` and emit HTML — no client JS needed for the static content.
- **Client islands.** Six components opt in with `'use client'`:
  - `Navbar` (interactive nav)
  - `SkillsShowcase` (interactive skill display)
  - `diagrams/ArchitectureDiagram`, `diagrams/ERDiagram`, `diagrams/WorkflowDiagram`, `diagrams/UserJourney` (animated SVG)

  These are the only components that ship and hydrate JavaScript. Everything else is static HTML/CSS.
- **Static generation of dynamic routes.** `projects/[slug]/page.js` exports `generateStaticParams()`, which maps over `projects` to pre-render one page per project slug at build time. `getProject(slug)` returns `notFound()` for unknown slugs.
- **Per-page metadata.** Each route exports `metadata` (or `generateMetadata` for project pages) for SEO/OpenGraph. The root layout defines defaults and a `viewport` theme color.

> **Rendering mode caveat:** `next.config.mjs` is empty. There is **no `output: 'export'`**, so this is *not* a static HTML export — it is a normal Next.js build that Vercel serves as pre-rendered (SSG) pages on its platform. The README's "static export-friendly" claim is not reflected in config (see §11).

---

## 5. Route map (information architecture)

| Route | File | Rendering | Notes |
|---|---|---|---|
| `/` | `src/app/page.tsx` | SSG | Profile + featured projects + tech stack |
| `/about` | `src/app/about/page.js` | SSG | Profile, experience, education, skills |
| `/projects` | `src/app/projects/page.js` | SSG | Split into Professional / Personal |
| `/projects/[slug]` | `src/app/projects/[slug]/page.js` | SSG (per slug) | Case study + conditional diagram blocks |
| `/contact` | `src/app/contact/page.js` | SSG | `mailto:` + social links (no form POST) |
| `/blog` | `src/app/blog/page.js` | SSG | "Coming soon" placeholder |

Featured projects on `/` are driven by `featuredSlugs = ['emplaihrms', 'mediawall', 'investiq']`. Project `kind` (`'professional'` | `'personal'`) drives the split on `/projects`.

---

## 6. Component architecture

```
RootLayout (layout.tsx)
├── Navbar  [client]
└── main
    └── <page>
        ├── ProfileSection
        ├── ProjectCard (xN)
        ├── SkillsShowcase  [client]
        ├── Footer
        └── (project detail only)
            ├── UserJourney         [client]
            ├── ArchitectureDiagram [client]
            ├── ERDiagram           [client]
            └── WorkflowDiagram     [client]
```

Composition is shallow and prop-driven. Components receive plain data objects from `portfolio.js` and render them; there is no shared client state, no context provider, no store. This is appropriate for the scale and keeps almost the entire tree server-rendered.

---

## 7. Data layer — the single source of truth

`src/data/portfolio.js` is the architectural center of gravity. It exports:

| Export | Shape | Consumed by |
|---|---|---|
| `profile` | object (name, title, contact, socials, summary) | layout, about, contact, ProfileSection |
| `coreSkills` | string[] | SkillsShowcase |
| `skills` | `{ category, items[] }[]` | SkillsShowcase, about |
| `experience` | object[] | about |
| `education` | object[] | about |
| `projects` | object[] (slug, kind, stack, metrics, highlights, **architecture**, **er**, **workflow**, **journey**, docs) | projects, project detail, home |
| `featuredSlugs` | string[] | home |
| `getProject(slug)` | helper | project detail, metadata |

**Project diagram data is co-located with the project.** A project optionally carries `architecture.{nodes,edges}`, `er.{tables,relations}`, `workflow.{title,steps}`, and `journey.{title,stages}`. The detail page renders each block only if its key is present (graceful degradation). This is the key data-driven contract: **diagrams are a pure rendering of these structures** — add the data, the diagram appears; omit it, the section disappears.

**Risk:** this contract is implicit (plain JS, no schema). A malformed `nodes`/`edges` array will fail at render with no compile-time guard. See decision **AD-004** and §11.

---

## 8. Diagram subsystem

Four client components turn declarative data into animated SVG, with **no charting library** — raw SVG geometry computed in-component:

- **ArchitectureDiagram** — lays out `nodes` (fixed `NODE_W=150 × NODE_H=58`) at supplied `x/y`, draws `edges`, animates "data packet" dots along connections. Accent colors map to CSS variables (`--blue`, `--cyan`, `--purple`, `--green`, `--red`).
- **ERDiagram** — renders `tables` and `relations`.
- **WorkflowDiagram** — renders ordered `steps`.
- **UserJourney** — animated, click-through `stages` sequence.

**Coupling note:** node positions are authored as absolute coordinates in the data file. Layout correctness depends on hand-tuned `x/y` values; there is no auto-layout. This trades authoring effort for zero layout-engine dependency (see **AD-003**).

---

## 9. Styling architecture

Three layers coexist:

1. **`src/styles/globals.css`** — design tokens (CSS custom properties: colors, fonts, borders) and global utility classes (`.section`, `.container`, `.chip`, `.btn`, `.gradient-text`).
2. **CSS Modules** — scoped, per-route/component styles (`about.module.css`, `contact.module.css`, `project.module.css`, `*.module.css` for diagrams and components in `src/styles/`).
3. **Tailwind 3.4** — configured (`tailwind.config.ts`, `postcss.config.mjs`) and available.

This is a deliberate hybrid: tokens + utilities for global theme, CSS Modules for component isolation. The overlap with Tailwind is a latent inconsistency — three ways to style one element — but low-risk at this size.

---

## 10. Build, deploy & operations

- **Build:** `next build` → pre-renders all routes + `generateStaticParams` slugs.
- **Local:** `npm run dev` (port 3000), `npm run start` (prod server), `npm run lint`.
- **Deploy:** Vercel, auto-detected Next.js preset. Every `git push` triggers a redeploy.
- **Assets:** `public/upender.jpg` (profile image). No image optimization pipeline configured beyond Next defaults.
- **Observability:** none configured in-repo (relies on Vercel platform analytics if enabled there).
- **CI:** none in-repo (no `.github/workflows`). Quality gating is whatever Vercel runs on build + local lint.

---

## 11. Known inconsistencies & risks

| # | Finding | Evidence | Impact | Recommended fix |
|---|---|---|---|---|
| R-1 | **Version mismatch.** README says "Next.js 14"; `package.json` pins `^16.2.9`. | `README.md` vs `package.json` | Confuses contributors; "14" docs/patterns may not apply. | Reconcile to the real installed major and update README. |
| R-2 | **"Static export-friendly" not configured.** No `output: 'export'`. | `next.config.mjs` is empty | Site is SSG-on-Vercel, not a portable static export; can't drop onto a dumb static host as-is. | Either add `output: 'export'` (and verify all routes export cleanly) or drop the claim. |
| R-3 | **Partial TypeScript.** Routes, components, and data are `.js`; only the shell is typed. | `find src -name '*.js'` vs `.tsx` | The content/diagram data contract has no compile-time safety. | Type `portfolio.js` (convert to `.ts` or add JSDoc/`zod`). |
| R-4 | **Untyped diagram data contract.** Malformed `nodes/edges/tables` fail at render. | `ArchitectureDiagram.js` reads `n.x`, `n.y` directly | Runtime crash on a bad edit, no guard. | Validate diagram data at module load or build. |
| R-5 | **Three styling systems.** globals + CSS Modules + Tailwind. | `styles/`, `*.module.css`, `tailwind.config.ts` | Drift / inconsistent class sources. | Pick a primary; document when each is used. |

---

## 12. Architectural decision records

Each decision follows: **Decision · Why · Alternatives · Tradeoffs · Risks · Future impact · Migration plan**.

### AD-001 — Static, file-driven content (no CMS/DB)
- **Decision:** All content lives in `src/data/portfolio.js`; the site is statically generated.
- **Why:** Single-author portfolio with infrequent updates; zero hosting cost and near-zero ops; instant page loads.
- **Alternatives considered:** Headless CMS (Contentful/Sanity); Markdown + MDX; a small DB-backed admin.
- **Tradeoffs:** Gained simplicity and speed; lost non-technical editing and structured validation. Content changes require a code edit + redeploy.
- **Risks:** The data file grows unwieldy; no validation on its shape (R-4).
- **Future impact:** A blog (currently "coming soon") will pressure this model — many posts in one JS export is poor ergonomics. Plan MDX or content collections before `/blog` ships real posts.
- **Migration plan:** If editing friction appears, move to MDX/content-collections first (lowest lift), CMS only if a non-technical editor is added.

### AD-002 — Next.js App Router + Server Components, client islands only for interactivity
- **Decision:** Server-render everything; mark only Navbar, SkillsShowcase, and the four diagrams as client components.
- **Why:** Minimize shipped JS; keep content fast and SEO-clean; isolate interactivity.
- **Alternatives:** Pages Router; a SPA (CRA/Vite); fully client-rendered.
- **Tradeoffs:** App Router's newer mental model vs. minimal client bundle and built-in SSG/metadata. Worth it.
- **Risks:** App Router churn across Next majors (compounded by R-1's version ambiguity).
- **Future impact:** Adding any dynamic/auth feature later means introducing route handlers or server actions — a real architectural step, not an incremental one.
- **Migration plan:** N/A unless interactivity grows; then add `app/api` handlers behind the existing static shell.

### AD-003 — Hand-authored absolute coordinates for diagrams, no chart library
- **Decision:** Diagrams compute SVG from data with manually authored `x/y` node positions; no D3/charting dep.
- **Why:** Zero dependency weight, full visual control, bespoke animations.
- **Alternatives:** D3, mermaid, react-flow, a chart library.
- **Tradeoffs:** No auto-layout — authoring is manual and error-prone — but bundle stays tiny and visuals are exactly as designed.
- **Risks:** Misplaced coordinates produce overlapping/broken diagrams silently; scaling to many nodes is painful.
- **Future impact:** If diagrams proliferate, a layout engine (e.g. dagre/elk) becomes worth the dependency.
- **Migration plan:** Introduce auto-layout behind the same `{nodes, edges}` contract so data stays compatible.

### AD-004 — Implicit (untyped) data contract between data file and components
- **Decision (de facto):** Components consume `project.*` shapes without runtime/compile validation.
- **Why:** Fastest path; single author who knows the shape.
- **Alternatives:** TypeScript types; runtime schema (`zod`); JSON Schema.
- **Tradeoffs:** Speed now vs. silent breakage on edits later.
- **Risks:** R-3, R-4 — the highest-likelihood failure mode for this codebase.
- **Future impact:** Becomes a real liability the moment a second contributor edits content.
- **Migration plan:** Add `zod` schemas validated at module load, or convert the data layer to TypeScript; lowest-cost, highest-value hardening available.

---

## 13. Future / roadmap signals (from the code, not aspiration)
- `/blog` is a placeholder — a content pipeline decision (AD-001) is pending.
- Personal projects (RateGuard, EventPulse) are flagged in the data as keep/build/remove candidates.
- No tests and no CI exist; both are natural next steps if the data contract is hardened.

---

## 14. Document version history

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0.0 | 2026-06-26 | Documentation Owner | Initial architecture doc, derived directly from `main`. Documents actual (SSG, no backend) architecture; records R-1…R-5 discrepancies and AD-001…AD-004. |

> **Maintenance note:** This is the *only* one of the mandated documents that maps to a real subsystem in this repo. A Database.md, API.md, Security.md, or migration-plan ADR would have no corresponding code to describe. They should be created if and when the site gains a backend — not before, or they become misleading.
