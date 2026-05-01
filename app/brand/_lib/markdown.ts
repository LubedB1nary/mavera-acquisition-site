export const BRAND_MARKDOWN = `# Mavera Brand Guidelines
**Version 1.0 · April 2026 · Confidential**

The complete specification for Mavera's visual language, voice, and component
conventions. Dark-first. Evidence-led. Built to be defensible.

---

## 01 — Brand Identity

### Manifesto
Decisions made on vibes fail. Mavera exists to make every important growth
decision *defensible* — traced to evidence, grounded in real audience
understanding, and fast enough to matter.

### Brand Values
| Value | Definition |
|-------|------------|
| Defensible | Every claim traces to a source, a confidence score, an audit trail. If we can't defend it, we call it a draft. |
| Autonomous | Agents act on the authority you grant. Boundaries are explicit. Escalations are structured. |
| Outcome-led | We hand goals, not prompts. Maven composes the work, asks when stuck, reports back on its own cadence. |
| Dense | Maximum information, minimum visual noise. Every pixel earns its place. |
| Confident | Direct voice. No hedging. Lead with the answer, then the evidence. |
| Premium | Generous spacing, restrained color, italic-serif accents — signals quality without shouting. |

### Taglines
- **Footer:** Receipts, not vibes.
- **Hero:** Autonomous agents. Human intelligence. Evidence on every decision.
- Maven runs the full growth cycle so you close the deal.
- Every action is logged. Every source is cited.

---

## 02 — Voice & Copy

### Writing Principles
1. **Lead with the answer.** State the result first, then the evidence.
   "98% agreement with the OASIS study — here's how." Not "After running our
   benchmark across multiple panels, we found..."
2. **Be the expert, not the salesperson.** Use technical vocabulary without
   apology. Never dumb down.
3. **Specifics beat superlatives.** "295K+ media sources under continuous
   monitoring" beats "industry-leading market intelligence."
4. **Short over long.** If a sentence can be two words, make it two words.
   Fragments are fine. Confidence reads short.

### Vocabulary
**Use:** traces to · sourced from · inspectable · calibrated · structured ·
extracted · defensible · grounded in · evidence · signal · benchmark ·
persona · validated · scored · receipts · autonomous · orchestrate

**Avoid:** AI-powered · game-changing · revolutionary · unlock · leverage ·
harness · cutting-edge · seamlessly · robust · intuitive · powerful ·
innovative · paradigm · synergy · world-class · disrupt

### Voice Examples
| Avoid | Use |
|-------|-----|
| "Harness the power of AI to unlock audience insights" | "Ask your audience anything. Get a sourced answer in seconds." |
| "Our cutting-edge platform revolutionizes research" | "Replace a 6-week study with a 90-second focus group." |
| "Seamlessly integrate with your workflow" | "OpenAI-compatible API. Drop in mavera-1, ship today." |

---

## 03 — Logo

- **Mark:** Pentagonal knot (\`/mavera-logo.webp\`). White-on-transparent
  rendered via \`filter: invert(1)\` on dark surfaces.
- **Wordmark:** "Mavera" in Inter weight 500, letter-spacing −0.035em,
  followed by a serif-italic period in gold.
- **Lockup:** mark + wordmark with gap = 0.45 × wordmark size.
- **Minimum size:** 16px mark.
- **Clear space:** 1× mark height on all sides.
- **Never:** stretch, rotate, recolor the mark, add drop shadow, place on busy
  backgrounds, scale below 16px.

---

## 04 — Background Scale

| Token | Value | Usage |
|-------|-------|-------|
| --ink0 | #07080a | Page canvas. The default surface. |
| --ink1 | #0b0d10 | Cards on canvas. Barely lifted. |
| --ink2 | #111418 | Surfaces. Default card / panel bg. |
| --ink3 | #181b21 | Raised surfaces, hover states, modals. |
| --line | rgba(255,255,255,0.08) | Standard hairline. |
| --line-soft | rgba(255,255,255,0.04) | Hairlines inside cards. |

---

## 05 — Text Opacity Scale

| Level | Value | Usage |
|-------|-------|-------|
| Primary | #edece6 | Headlines, primary product names |
| High | rgba(237,236,230,0.88) | Body emphasis, h2 headings |
| Dim | rgba(237,236,230,0.62) | Body copy, descriptions |
| Muted | rgba(237,236,230,0.38) | Subtext, meta, captions |
| Faint | rgba(237,236,230,0.22) | Eyebrow labels, decorative |

---

## 06 — Agent Accent Colors

The brand color is gold (#c8a8ff). Each of the nine agents may carry a
secondary accent for product UI; never as solid fills above 12% alpha on
large surfaces.

| Agent | Accent | Usage |
|-------|--------|-------|
| Maven | #c8a8ff (gold) | The brand-default. Generalist agent. |
| Argus (Sales) | #c8a8ff | Inherits brand gold — lead surface. |
| Research | #9ec1ff (blue) | Maven's deep-research mode. |
| Content | #ff8aa8 (rose) | Brand voice + writing. |
| Meetings | #7ce0a8 (green) | Live signal — recording / transcript. |
| Market intel | #ffb87c (amber) | Signal scoring & alerts. |
| Focus groups | #c8a8ff | Brand gold — synthetic personas. |
| Ops · CRM | #b8c5ff (slate) | Pipeline + automation. |
| Science | #a3e6c4 (mint) | ML training + provenance. |

---

## 07 — Status Colors

| State | Text | Background | Border |
|-------|------|------------|--------|
| Confidence (success) | rgba(124,224,168,0.88) | rgba(124,224,168,0.05) | rgba(124,224,168,0.20) |
| Risk (error) | rgba(255,138,168,0.88) | rgba(255,138,168,0.05) | rgba(255,138,168,0.20) |
| Volatility (warn) | rgba(255,184,124,0.88) | rgba(255,184,124,0.05) | rgba(255,184,124,0.20) |
| Neutral (info) | rgba(158,193,255,0.88) | rgba(158,193,255,0.05) | rgba(158,193,255,0.20) |

---

## 08 — Typography

### Type Families
- **Sans:** Inter (300, 400, 500, 600, 700) — UI everything.
- **Serif:** Instrument Serif (italic) — accent words inside headlines only.
- **Mono:** JetBrains Mono (400, 500) — code, labels, stats, eyebrows.

### Type Scale
| Class | Size | Weight | Tracking | Usage |
|-------|------|--------|----------|-------|
| .mav-h1 | 88 | 500 | −0.035em | Hero headline |
| .mav-h2 | 56 | 500 | −0.028em | Section headline |
| .mav-h3 | 28 | 500 | −0.020em | Card / panel title |
| .mav-lede | 19 | 400 | −0.005em | Hero / section lede |
| .mav-body | 15 | 400 | 0 | Body |
| .mav-caption | 12.5 | 400 | 0 | Captions, meta |
| .mav-eyebrow | 11 | 500 | +0.14em | Section labels (uppercase MONO) |
| .mav-code | 13 | 400 | 0 | Inline code, stats |

### Italic-Serif Accent
Headlines may contain a single italic-serif accent phrase, e.g.:
"Autonomous agents. *Human intelligence.* Evidence on every decision."
Render with \`<em class="mav-h1 em">\` — Instrument Serif italic, weight 400.

---

## 09 — Iconography
- **Library:** custom SVG icons in \`components/icons.tsx\` — never use emoji
  as UI iconography.
- **Stroke:** 1.5px (default), 1.0 (decorative), 2.0 (emphasis).
- **Sizes:** 12 · 14 · 16 · 18 · 20 · 24px.
- **Color:** inherits from \`color: currentColor\`.
- **Pairing:** icon + text gap = 6–8px (sm), 10–12px (md).

---

## 10 — Buttons & Links

### Hierarchy
1. **Primary** — \`.mav-btn--primary\` — gold bg, ink-0 text, hover lifts.
2. **Ghost** — \`.mav-btn--ghost\` — transparent, hairline border, hover bg.
3. **Small** — \`.mav-btn--sm\` — 8px × 14px padding, font-size 13.

### Sizing
| Variant | Padding | Font | Radius |
|---------|---------|------|--------|
| md | 12px 20px | 14/500 | 8px |
| sm | 8px 14px | 13/500 | 8px |

### Rules
- All interactive elements: ≥ 44 × 44px touch target.
- Hover: lift + bg shift, never color change on the label.
- Loading: replace label with spinner, lock width.

---

## 11 — Cards & Surfaces
- **Card:** \`.mav-card\` — bg ink-1, border line, radius 14.
- **Padding:** 22–28px standard, 32–40px featured.
- **Hover lift:** translateY(−3px), border tint to gold-dim, soft shadow.

---

## 16 — Motion
- **Easing:** \`cubic-bezier(0.16, 1, 0.3, 1)\` (out), \`cubic-bezier(0.2, 0.7, 0.2, 1)\` (smooth).
- **Durations:** 180ms (hover), 350ms (panel), 600ms (page entrance), 900ms (cinematic).
- **Reveal-on-scroll:** \`mav-reveal\` class; once: true.
- **Reduced motion:** all animations disabled via \`@media (prefers-reduced-motion: reduce)\`.

---

## 35 — Design Tokens (CSS Custom Properties)

\`\`\`css
:root {
  /* Backgrounds */
  --ink0: #07080a;
  --ink1: #0b0d10;
  --ink2: #111418;
  --ink3: #181b21;

  /* Hairlines */
  --line:      rgba(255,255,255,0.08);
  --line-soft: rgba(255,255,255,0.04);

  /* Text */
  --text:  #edece6;
  --dim:   rgba(237,236,230,0.62);
  --muted: rgba(237,236,230,0.38);
  --faint: rgba(237,236,230,0.16);

  /* Accent */
  --gold:      #c8a8ff;
  --gold-soft: #dcc4ff;
  --gold-dim:  rgba(200,168,255,0.14);

  /* Type */
  --sans:  'Inter', system-ui, sans-serif;
  --serif: 'Instrument Serif', Georgia, serif;
  --mono:  'JetBrains Mono', ui-monospace, Menlo, monospace;
}
\`\`\`

---

*Mavera Brand Guidelines v1.0 · April 2026*
*Single source of truth: /app/brand/page.tsx*
*Receipts, not vibes.*
`;
