# Mavera Redesign — Plan

## Design system
- Dark, premium, Linear-leaning
- Type: Helvetica Neue-ish (system stack) + serif italic accent + JetBrains Mono for code
- Colors:
  - `--ink-0` #07080a (deep near-black)
  - `--ink-1` #0d0f12
  - `--ink-2` #14171c
  - `--line` rgba(255,255,255,0.08)
  - `--text` #e7e6e1 (warm off-white)
  - `--dim` rgba(231,230,225,0.6)
  - `--muted` rgba(231,230,225,0.4)
  - Accent gold: oklch(0.78 0.09 78) ≈ #d4b483
  - Accent gold soft: oklch(0.86 0.07 85) for hover
- Spacing scale: 4/8/12/16/24/32/48/64/96/128
- Radii: 4 / 8 / 12 / 16 (cards) / 999 (pills)
- Container: 1200px max, 80px side padding
- Section rhythm: 120–160px vertical

## Directions on canvas
- A · "Editorial dark" — type-led, huge outcome headline, serif italic word, subtle grain, product screenshot lower
- B · "Live Console" — hero IS the live signal→outreach demo, terminal aesthetic, monospace chrome
- C · "Flywheel" — metaphor: rotating agent orbit around a central node, content radiates outward
  
Each direction is its own artboard, 1440 wide, fixed height. Focus mode shows full hi-fi.

## Interior pages
Build one canonical direction (A) fully across 6 pages — link between them. Interior pages can all share header/footer. Pages: Home / Features / Pricing / API / Trust / About.

## Agent walkthrough
Live demo: 12-step tick, auto-advance every 2.5s, loop. Signal → Research → Draft → Send → Reply → Qualify → Meeting Prep. Left col: step narrator. Right col: evolving artifact panel (card shows what agent produced).

## Tweaks
- Hero variant A/B/C
- Accent hue (gold / sage / cool blue)
- Density (comfortable / compact)
- Grain on/off
