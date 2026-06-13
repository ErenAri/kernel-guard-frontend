# bpfcompat — Product Page UI/UX Design Spec

**Status:** Design only (no code yet) · **Owner:** Kernel Guard · **Target route:** `/projects/bpfcompat/`

This spec was produced by a 4-concept design exploration scored by a clarity judge (first-time
visitor) and a developer-conversion judge. Both judges independently chose the **"Verdict Matrix"**
direction as the skeleton. The grafts and cuts below are their verdicts applied.

---

## 0. Design decision summary

**What won — "The Verdict Matrix":** the page's centerpiece is the product's *actual output* — a
real, dated, downloadable artifact-by-kernel PASS/FAIL matrix — presented in the same
"evidence over claims" ritual the site already uses for Lighthouse scores and Repository Evidence.
Restraint, real data, and honest framing are the cool factor. No decoration.

**What was grafted in:**
- An unmissable **"In plain terms"** band directly under the hero (so a visitor who has never heard
  of eBPF understands in 10 seconds).
- **Plain-sentence + real `libbpf` error-line** problem cards (authentic failure texture).
- A pinned **anchor subnav** so the long page stays scannable.
- **`SIMULATED RUN`** labeling, a pause/replay control, and deferred animation start on the hero
  terminal (honesty + Lighthouse protection).
- A **human sentence under every machine/JSON failure** ("exit code 2" is never shown bare).
- The full **exit-code contract table**, a **PARTIAL** matrix state, an **x86_64 | arm64 toggle**,
  and **URL-hash-deep-linkable** adoption tabs.

**What was killed (do not reintroduce):**
- ❌ A `/products/` nav tier, "`// 02 PROVE`" numbering, "audit trail / survives audits" enterprise
  vocabulary — premature inflation for a v0.1.5 preview.
- ❌ Any fabricated kernel error. Use the **real** `task_struct .state → __state` rename (5.14) or the
  **ringbuf-unsupported-on-kernel-<5.8** breakage. Never `skc_net` (it exists in 5.15).
- ❌ Curated "SAMPLE OUTPUT" as the main matrix — it must be a **real recorded run**, failures included.
- ❌ macOS traffic-light terminal chrome → use a plain Carbon toolbar header.
- ❌ A self-awarded "FLAGSHIP" chip. The pinned row position does the work.
- ❌ A "GitHub Marketplace" CTA unless the Action is verifiably listed → link to the repo's `action.yml`.
- ❌ `task_struct::__state` (C++ scope syntax) — C struct fields are `task_struct.__state`.
- ❌ Spec dumps ("Ubuntu and Fedora, 5.x–6.x, x86_64 and ARM64") inside the hero subline → those are chips.
- ❌ Raw `BTF`/`CO-RE` strings anywhere above the "In plain terms" band.

---

## 1. Information architecture

| Decision | Choice |
|---|---|
| **URL** | `/projects/bpfcompat/` (localized automatically via `localizePath`: `/en/...`, `/de/...`, `/zh-cn/...`, etc.) |
| **Routing** | A dedicated `BpfcompatPage` component registered **before** the generic `projects/:id` route, so bpfcompat gets the bespoke page while every other project keeps the shared `ProjectDetails` template. |
| **Nav** | **Unchanged.** No new top-level item. "Open Source" (`/projects/`) stays the entry point — keeps all 8 nav locales stable. |
| **Projects directory** | bpfcompat is pinned as the **first row** of the existing IBM-style table. No "FLAGSHIP" chip. The row links to the bespoke page. |
| **Data** | Add a `bpfcompat` entry to `projects.json` (sitemap/SEO/directory pick it up) and to `repositoryEvidence.ts`. The matrix reads a **committed real run**: `src/data/bpfcompatReport.json`. |
| **aegis-bpf link** | Reciprocal "Kernel Guard eBPF toolchain" band: this page → `/projects/aegis-bpf/` ("protect at runtime"); the aegis-bpf page gets one cross-link banner back ("prove compatibility before shipping → bpfcompat"). |
| **SEO** | `buildSoftwareSourceCodeSchema` + title `bpfcompat — eBPF Compatibility Validator \| Kernel Guard`. |

---

## 2. Page structure (in order)

### Section 1 — Hero: "The Verdict"

```
+----------------------------------------------------------------------------------------+
| NAVBAR (existing)                                                                      |
+========================================================================================+
|  <- Back to projects   (mono xs)                                                       |
|                                                                                        |
|  [APACHE-2.0] [Go] [v0.1.5] [TECHNICAL PREVIEW]    +-------------------------------+   |
|   ^ square bordered mono chips                     | • SIMULATED RUN  v0.1.5  [❚❚]  |   | <- plain toolbar header
|                                                    |-------------------------------|   |    (NOT traffic lights)
|  Kernel compatibility,            (font-light)     | $ bpfcompat suite run         |   |
|  proven before production.        (font-semibold)  | boot ubuntu-22.04 5.15 .. ok  |   | <- terminal zone
|                                                    | boot fedora-40    6.9  .. ok  |   |    #161616 in both themes
|  Test your kernel-level programs against every     | load exec.bpf.o ........ OK    |   |    h fixed (no CLS)
|  Linux kernel you ship to — before your users do.  |-------------------------------|   |
|                                                    |        u22  u24  f40  arm64    |   |
|  [ Run the live demo            -> ]  primary      | exec  [✓]  [✓]  [✓]  [✓]      |   | <- mini matrix fills
|  [ View source on GitHub       -> ]  outline       | net   [✓]  [✗]  [✓]  [✓]      |   |    cell-by-cell, FAIL
|  [ Use the GitHub Action       -> ]  outline       | lsm   [✓]  [✓]  [–]  [✗]      |   |    lands inside ~8s
|                                                    |-------------------------------|   |
|                                                    | 9 PASS · 2 FAIL · exit 2      |   | <- tally bar
|                                                    +-------------------------------+   |
|                                                       Simulated output. Run it          |
|                                                       yourself in the demo ->  (mono xs) |
+----------------------------- border-b border-border -----------------------------------+
|  WHY THIS EXISTS  ·  HOW IT WORKS  ·  THE MATRIX  ·  RUN IT  ·  STATUS   (pinned subnav) |
+----------------------------------------------------------------------------------------+
```

- **Layout:** reuses the `Home.tsx` hero shell exactly — `pt-32 pb-20 md:pt-48 md:pb-32`,
  `border-b border-border`, `max-w-7xl`, `grid lg:grid-cols-2 gap-12 items-center`.
  Left column copy **dominates the first viewport**; the terminal supports it (never wider).
- **H1:** `Kernel compatibility, proven before production.` — `text-5xl md:text-7xl`, line 1
  `font-light`, line 2 `font-semibold` span. **No undefined token, no pronoun, no taxonomy.**
- **Subline:** `Test your kernel-level programs against every Linux kernel you ship to — before your users do.`
  (The clearest single line from the exploration. No version/arch spec dump — those live in chips.)
- **CTAs:** the established `w-full sm:w-64`, label-left / icon-right pattern. `kg-action-primary`
  "Run the live demo" (ExternalLink → Azure demo) + two outline buttons. "Use the GitHub Action"
  smooth-scrolls to Section 5.
- **Hero terminal (`MatrixTerminal`)** — see §4. Header is a plain Carbon toolbar with an 8px square
  "recording" dot, `SIMULATED RUN` label, version, and a pause/replay control. **Body is `#161616` in
  both themes**, square corners, fixed height. **No raw `BTF`/`CO-RE` strings here** (mild boot/load
  lines only). The FAIL must land within ~8s. `hidden lg:flex`.
- **Mobile:** terminal is replaced (not hidden) by a static 2×3 mini-matrix strip under the CTAs
  (~80px) so the signature visual survives at zero animation cost.

### Section 2 — "Why this exists" + the problem cards

```
WHY THIS EXISTS                  Programs that run inside the Linux kernel depend on the exact
(h2, lg:col-span-4)              kernel version they run on. A program that works on one machine
                                 can refuse to load on another — and most teams find out in
                                 production. bpfcompat moves that discovery into CI.   (col-span-8)

 +-------------------------+  +-------------------------+  +-------------------------+
 | MISSING BTF             |  | CO-RE RELOCATION        |  | UNSUPPORTED TYPE        |
 | Older kernels ship      |  | Kernel structs move     |  | Newer map/attach types  |
 | without the type info   |  | between versions; a     |  | are rejected on kernels |
 | your program needs.     |  | relocation that works   |  | that predate them.      |
 |                         |  | on 6.8 fails on 5.15.   |  |                         |
 | > libbpf: failed to     |  | > libbpf: prog ...:     |  | > map create failed:    |
 |   find valid kernel BTF |  |   relo #3: failed ...   |  |   invalid argument      |
 |                         |  |                         |  |   (ringbuf, kernel<5.8) |
 +-------------------------+  +-------------------------+  +-------------------------+

 DEFINITION  eBPF — sandboxed programs that run inside the Linux kernel. Used by security,
             networking, and observability tools.
```

- **Purpose:** teach the non-expert AND signal to practitioners that the authors live in their world.
- **Layout:** `py-24 bg-surface`, Home "Mission" editorial grid (`lg:grid-cols-12`): heading +
  intro paragraph left, three bordered cards right (`grid md:grid-cols-3 gap-4`, each
  `border border-border bg-background p-6`). Each card = mono uppercase label, one plain sentence,
  then the **real `libbpf` error line** in a thin bordered `text-xs font-mono` strip.
- **eBPF defined once, plainly**, in a small `DEFINITION` card here — the first time the term is glossed.
- Error lines stay **untranslated** (machine output); the surrounding sentences translate.

### Section 3 — "How it works": four stages, one frame

```
+-----------------+-----------------+-----------------+-----------------+
| 01 SUBMIT       | 02 BOOT REAL    | 03 LOAD INSIDE  | 04 READ THE     |   <- primary 1px line
|    ARTIFACTS    |    KERNELS      |    THE GUEST    |    VERDICT      |      draws L→R on scroll
|                 |                 |                 |                 |
| Provide your    | Each kernel     | A C/libbpf      | Results become  |
| compiled BPF    | profile boots   | validator runs  | an artifact-by- |
| objects, a      | as a disposable | inside each VM  | kernel pass/    |
| manifest, and   | QEMU/KVM VM     | and actually    | fail matrix.    |
| the kernel      | from a clean    | loads+attaches  | Exit code 2     |
| matrix you      | cloud image.    | every program.  | fails the build.|
| support.        |                 |                 |                 |
| suite.yaml·CLI  | Ubuntu·Fedora·  | BTF · CO-RE ·   | JSON·Markdown·  |
|                 | 5.x–6.x · ARM64 | capabilities    | job summary     |
+-----------------+-----------------+-----------------+-----------------+
```

- **Layout:** one outer `border border-border` frame containing
  `grid md:grid-cols-4 divide-x divide-border` (Carbon tile group — shared borders, no gaps).
  Each tile `p-8 bg-surface`: oversized mono stage number, `font-medium` title, two-line
  `font-light` description, mono micro-detail footer row. This is where `BTF`/`CO-RE`/`capabilities`
  first appear as labels — *after* Section 2 has taught them.
- **Motion:** a 1px primary line draws across the frame's top edge on scroll-into-view (once).
  Reduced-motion: line shown complete.

### Section 4 — The compatibility matrix (signature section)

```
ONE MATRIX. EVERY KERNEL YOU SHIP TO.        MEASURED 2026-06 · v0.1.5 · SOURCE: report.json

 +----------+ +----------+ +----------+ +----------+
 | CHECKS   | | PASS     | | FAIL     | | EXIT CODE|     <- Repository-Evidence metric cards, count up
 |   32     | |   29     | |    2     | |    2     |
 +----------+ +----------+ +----------+ +----------+

 +---------------------------------------------------------------+   [ x86_64 | arm64 ]  <- toggle
 | ARTIFACT × KERNEL  ubuntu22  ubuntu24  fedora40  ubuntu24/a64 |
 |                    5.15      6.8       6.11      6.8          |
 | exec.bpf.o  KPROBE  [✓ PASS] [✓ PASS]  [✓ PASS]  [✓ PASS]     |
 | net.bpf.o   XDP     [✓ PASS] [✗ FAIL]  [✓ PASS]  [✓ PASS]     |
 | lsm.bpf.o   LSM     [✓ PASS] [✓ PASS]  [▲ PART]  [✗ FAIL]     |
 | ringbuf.o   RB      [– SKIP] [✓ PASS]  [✓ PASS]  [✓ PASS]     |
 +---------------------------------------------------------------+
 | 29 PASS · 2 FAIL · 1 PARTIAL  →  [ exit 2 ]                    |  <- tally; "exit 2" red chip
 +---------------------------------------------------------------+
 Legend: ✓ PASS  ✗ FAIL  ▲ PARTIAL (loaded, attach failed)  – SKIP        [Download JSON] [Markdown]

 ┌─ Evidence drawer (expands beneath the clicked FAIL row) ───────────────┐
 │ net.bpf.o × ubuntu24 / 6.8     gate: load+attach     verdict: FAIL      │
 │ btf: present · core_relocations: 13/14 applied · caps: CAP_BPF ok       │
 │ failed_reloc: task_struct.__state (field renamed from .state in 5.14)   │
 │ "This kernel's struct layout differs; the CO-RE relocation can't resolve." │  <- human sentence
 └────────────────────────────────────────────────────────────────────────┘
```

- This is the page's reason to exist and the screenshot people share. It must be a **real committed
  run with published failures** — the two red cells are the most persuasive pixels on the page.
- **Provenance caption** (`MEASURED <date> · v0.1.5 · SOURCE: report.json`) + **Download JSON /
  View Markdown** links make the evidence *verifiable*, not just visible.
- See §3 (matrix component) for full cell/color/interaction spec.

### Section 5 — "Three ways to run it" (tabbed, hash-deep-linkable)

```
[ CLI ]  [ GITHUB ACTION ]  [ WEB UI ]            <- Carbon tabs, active = border-b-2 border-primary
------------------------------------------------     URL hash persists (#action) for README deep-links
| $ go install github.com/Kernel-Guard/bpfcompat@v0.1.5        [copy] |
| $ bpfcompat test ./build/probe.bpf.o --kernel ubuntu-24.04         |
| $ bpfcompat suite run suite.yaml --kernels kernels.yaml            |
|                                                                     |
| Exit 0: compatible · Exit 1: execution error · Exit 2: regression  |  <- full contract table
------------------------------------------------
```

- **CLI tab:** dark code block (`#161616` both themes), real subcommands, copy button
  (square; Copy→Check, `aria-live` "Copied" for 1.5s). The **full exit-code contract** lives here.
- **GitHub Action tab:** `- uses: Kernel-Guard/bpfcompat@v0.1.5` with `with:` inputs + a static
  mock of the GH job-summary matrix. CTA links to the repo's `action.yml` (**not** a Marketplace URL
  unless verifiably listed).
- **Web UI tab:** numbered 3-step list (pick targets → upload `.bpf.o` / suite YAML + gate mode →
  run) + a bordered screenshot frame + `kg-action-primary` "Open the Technical Preview".
  Microcopy: `Runs on shared infrastructure and is rate-limited. No account required.`

### Section 6 — Repository Evidence

Reuse the **existing `ProjectDetails` Repository Evidence section verbatim**: `border bg-surface p-8`,
header + measured-at mono caption + GitHub link, `grid md:grid-cols-4` metric cards
(`PRIMARY LANGUAGE Go 84%` · `LICENSE Apache-2.0` · `LATEST RELEASE v0.1.5` ·
`KERNEL RANGE 5.x – 6.x`), language-mix chips `Go · Shell · C`. Fed from `repositoryEvidence.ts`.

### Section 7 — "What it is — and what it is not yet"

```
+------------------------------------+------------------------------------+
| IT IS                              | IT IS NOT YET                      |
| ■ Real load+attach evidence from   | □ A production runtime loader      |
|   inside real kernels              | □ A multi-tenant SaaS — the web    |
| ■ A CI gate with deterministic     |   UI is a single-tenant preview    |
|   exit codes                       | □ Runtime decisioning (experimental)|
| ■ Multi-distro, multi-arch matrix  |                                    |
| ■ Apache-2.0, fully open source    |                                    |
+------------------------------------+------------------------------------+
 Version 0.1.5 is a serious MVP for compatibility evidence and CI gating. We label it that way on purpose.
```

- Reuse the Technical/Marketing two-panel pattern. **Neutral square glyphs** (filled left, outlined
  right) — no red moralizing. On this site, stating limits *is* the brand and converts skeptics.

### Section 8 — The Kernel Guard eBPF toolchain (sibling band)

```
ONE TOOLCHAIN FOR THE KERNEL BOUNDARY.

 +-----------------------------+   →   +-----------------------------+
 | BEFORE YOU SHIP             |       | AT RUNTIME                  |
 | bpfcompat   (you are here)  |       | Aegis-BPF                   |
 | Prove your eBPF programs    |       | Enforce security policy in  |
 | load on every kernel you    |       | the kernel with eBPF LSM    |
 | support.                    |       | hooks.        View project →|
 +-----------------------------+       +-----------------------------+
            Prove compatibility first. Enforce policy second.
```

- `grid md:grid-cols-2 gap-4`, centered ArrowRight glyph between cards on desktop (hidden mobile).
  bpfcompat card marked "you are here" (non-link); Aegis-BPF card links to `/projects/aegis-bpf/`
  with `hover:border-primary`. **No `/products/` tier, no "// 02" numbering.**

### Section 9 — Final CTA band

Reuse the `ProjectDetails` closing pattern: `border-t border-border pt-12 pb-24`, short `font-light`
headline (`Stop discovering kernel incompatibilities in production.`), then three `w-64` buttons
(Run the live demo / View source on GitHub / Copy the GitHub Action — last copies the `uses:` snippet
to clipboard, swaps to "Copied"). Footnote: `APACHE-2.0 · v0.1.5 · TECHNICAL PREVIEW`.

---

## 3. The compatibility-matrix component

| Element | Spec |
|---|---|
| **Container** | Bordered `bg-surface` panel, square corners, zero shadow — Carbon data table. |
| **Columns** | Kernel profiles. Header = two-line mono stack: distro on top (`ubuntu-24.04`), kernel version below in `text-foreground/50` (`6.8`). ARM64 columns tagged `ARM64`. |
| **Rows** | Compiled artifacts in `font-mono text-sm` + a tiny square program-type chip (`KPROBE`/`XDP`/`LSM`). First column **sticky** on horizontal overflow. |
| **Cells** | Fixed ≥44px squares, 1px `border-border` gridlines. **Color + glyph always together** (colorblind / grayscale / both themes safe): |
| · PASS | Carbon green `#24a148` (light) / `#42be65` (dark) tint + check glyph + `PASS`. |
| · FAIL | Carbon red `#da1e28` (light) / `#fa4d56` (dark) tint + ✕ glyph + `FAIL`. |
| · PARTIAL | Carbon yellow `#f1c21b` + warning triangle + `PARTIAL` (loaded but attach failed under load+attach gate). |
| · SKIP | Dashed border, `text-foreground/40` + em-dash + `SKIP`. |
| **`PASS`/`FAIL` text** | **Untranslated** in all 8 locales (literal tool output); icons carry meaning, `aria-label`s are translated. |
| **Hover (desktop)** | Cell border → `border-primary`; square mono tooltip with short reason. |
| **Click / Enter** | Cells are `<button>`s in a **roving-tabindex grid** (arrow-key navigable, `aria-expanded`). Opens **one** evidence drawer beneath the row (height ease 150–200ms, focus moves in, Esc closes): gate mode · BTF status · CO-RE relocation count · capability check · `failed_reloc` · **one plain human sentence**. A FAIL is never a dead end. |
| **Summary** | `29 PASS · 2 FAIL · 1 PARTIAL → exit 2`, with `exit 2` as a red chip — the CI contract made visible. |
| **Provenance** | `MEASURED <date> · v0.1.5 · SOURCE: report.json` + Download JSON / View Markdown. **Real recorded run only.** |
| **Canonical FAIL** | `task_struct.__state` (renamed from `.state` in kernel 5.14) — a real, recognizable CO-RE break. Never `skc_net`; never C++ `::` syntax. |

---

## 4. Motion spec

| Element | Behavior | Reduced-motion fallback |
|---|---|---|
| **Hero `MatrixTerminal`** | Plain Carbon toolbar (square dot + `SIMULATED RUN` + version + pause/replay). ~6 mild boot/load lines type in, then a 3×4 mini-matrix fills cell-by-cell; **FAIL lands within ~8s**; tally resolves to `exit 2`; holds 3s; loops. No raw BTF/CO-RE strings. Fixed height (no CLS). | Static final frame, no loop. |
| **Matrix entry** | On first IntersectionObserver hit, cells fill column-by-column (~60ms stagger) — looks like a run completing. Once only. | Final state instantly. |
| **Summary counters** | Count up over ~250ms on first view. | Final values instantly. |
| **How-it-works line** | 1px primary line draws across the tile-group top edge on scroll-in (once). | Shown complete. |
| **Stage highlight** | IntersectionObserver marks active stage `text-primary` + 2px left/ top border. | All active. |
| **Adoption tabs** | 2px primary underline slides between tabs (~120ms transform); panels swap with ≤100ms fade; hash persists. | Instant swap. |
| **Copy buttons** | Copy→Check swap + `aria-live` "Copied" 1.5s. | Unchanged (not motion). |

All motion is opacity/transform only, JS-light, SSR/prerender-safe — the site advertises its measured
Lighthouse scores, so this page must not become the slowest.

---

## 5. Mobile layout (per section)

- **Hero:** single column; chips wrap; H1 → `text-5xl`; CTAs full-width stacked. Terminal **replaced**
  by a static 2×3 mini-matrix strip under the CTAs (value prop survives, zero animation cost).
- **Problem cards:** stack vertically.
- **How it works:** `divide-x` → `divide-y`; stages stack as a numbered vertical sequence.
- **Matrix:** horizontal-scroll region, sticky artifact column with a right-edge scroll-shadow + a
  one-time `SCROLL →` mono hint; cells stay ≥44px; **tap = open drawer** (renders full-width beneath
  the row; no hover tooltips on touch). *(Optional v2: re-render as per-kernel accordion cards to kill
  horizontal scroll entirely.)*
- **Adoption tabs:** stay horizontal (short mono labels fit 360px; bar scrolls if a locale runs long);
  code blocks `overflow-x-auto`, copy button pinned.
- **Repository Evidence / scope / toolchain:** existing patterns already collapse 4-col → 1-col and
  `divide-x` → `divide-y`; toolchain arrow glyph hidden.
- **Final CTA:** buttons full-width. Tap targets ≥44px throughout.

---

## 6. i18n + tone

- **Translatable copy:** all sentences are flat and idiom-free for the 8-locale pipeline (en, tr, de,
  ja, zh-CN, es, fr, ko). No pronoun-dependent headlines.
- **Locked / untranslated:** `PASS`, `FAIL`, `PARTIAL`, `SKIP`, exit codes, kernel names, CLI/YAML
  snippets, and JSON keys (machine output). Icons + translated `aria-label`s carry meaning.
- **Jargon once, early, plainly:** eBPF is defined in the Section 2 `DEFINITION` card *before*
  `BTF`/`CO-RE` appear as labels in Section 3. "exit code 2" is **never shown bare** — always paired
  with "compatibility regression / the build fails".
- **Honest framing:** `TECHNICAL PREVIEW` chip in the hero; Section 7 states limits as a feature;
  friction footnotes ("No account required · rate-limited") pre-answer engineer questions.
- **CJK / German check:** verify H1 line length at `text-7xl` and tab-label length per locale.

---

## 7. Component inventory

**Reused as-is**
- Home hero shell (layout, CTA buttons, chip row)
- `ProjectDetails` Repository Evidence section
- Technical/Marketing two-panel pattern (→ Section 7)
- `ProjectDetails` closing CTA row (→ Section 9)
- IBM projects directory table (pinned bpfcompat row)
- Tag-chip, metric-card, architecture-panel treatments
- `localizePath`, SEO, `prefetchRoutes`

**New to build**
- `BpfcompatPage` route component
- `MatrixTerminal` (Carbon-toolbar variant of `SecurityTerminal` — square corners, `SIMULATED RUN` label, pause/replay)
- `CompatibilityMatrix` (roving-tabindex grid, cell states, evidence drawer, arch toggle, count-up summary)
- Adoption tabs (hash-persistent) + copy-to-clipboard button
- Pinned anchor subnav
- `bpfcompatReport.json` data file + `repositoryEvidence['bpfcompat']` entry + `projects.json` entry

---

## 8. Phased rollout

**v1 — ship fast (static, high-credibility):**
1. `BpfcompatPage` with all 9 sections, fully static.
2. Matrix renders the **real `report.json`** as a static table (color+glyph cells, legend, provenance,
   Download JSON/Markdown). No animation, no drawer yet — still the centerpiece.
3. Hero terminal = static final frame (mini-matrix + `exit 2`), `SIMULATED RUN` labeled.
4. Adoption tabs (CLI/Action/Web UI) with copy buttons + full exit-code table.
5. Repository Evidence, Scope, Toolchain band, Final CTA.
6. projects.json + repositoryEvidence + nav row + aegis-bpf cross-link.

→ This alone is a complete, honest, professional product page.

**v2 — interactive enhancements:**
- Animated hero `MatrixTerminal` (looping, pause/replay, deferred start).
- Matrix entry animation + evidence drawer + hover tooltips + x86_64/arm64 toggle.
- Count-up summary metrics; how-it-works line draw; tab underline slide + hash deep-linking.
- Mobile matrix → per-kernel accordion.

**Operational duty:** the matrix is real evidence — re-record `report.json` as versions advance past
v0.1.5, or the "evidence over claims" pitch inverts. Treat report freshness like the Lighthouse evidence.
