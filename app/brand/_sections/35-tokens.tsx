'use client';
import { Section, H2, Mono, Pre } from '../_lib/primitives';

export default function TokensSection() {
  return (
    <Section id="tokens" label="35 — Design Tokens">
      <H2 italicTail="contract.">Tokens &mdash; the literal</H2>

      <Mono label=":root — the canonical token set" />
      <Pre>{`:root {
  /* ── Backgrounds ─────────────────────── */
  --ink0:     #07080a;   /* page canvas */
  --ink1:     #0b0d10;   /* card surface */
  --ink2:     #111418;   /* panel surface */
  --ink3:     #181b21;   /* raised surface */

  /* ── Hairlines ───────────────────────── */
  --line:        rgba(255,255,255,0.08);
  --line-soft:   rgba(255,255,255,0.04);

  /* ── Text scale ──────────────────────── */
  --text:    #edece6;
  --dim:     rgba(237,236,230,0.62);
  --muted:   rgba(237,236,230,0.38);
  --faint:   rgba(237,236,230,0.16);

  /* ── Accent ──────────────────────────── */
  --gold:        #c8a8ff;
  --gold-soft:   #dcc4ff;
  --gold-dim:    rgba(200,168,255,0.14);

  /* ── Status ──────────────────────────── */
  --success:     #7ce0a8;
  --error:       #ff8aa8;
  --warn:        #ffb87c;
  --info:        #9ec1ff;

  /* ── Type families ───────────────────── */
  --sans:    'Inter', system-ui, sans-serif;
  --serif:   'Instrument Serif', Georgia, serif;
  --mono:    'JetBrains Mono', ui-monospace, Menlo, monospace;

  /* ── Container ───────────────────────── */
  --container-max:   1200px;
  --container-pad:   64px;

  /* ── Motion ──────────────────────────── */
  --ease-out:        cubic-bezier(0.16, 1, 0.3, 1);
  --ease-smooth:     cubic-bezier(0.20, 0.7, 0.20, 1);
  --ease-in-out:     cubic-bezier(0.40, 0, 0.20, 1);
  --ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1);
  --dur-fast:        180ms;
  --dur-base:        350ms;
  --dur-slow:        600ms;
  --dur-cinematic:   900ms;
}`}</Pre>

      <Mono label="Token rules" />
      <Pre>{`// 1.  Never hard-code a hex outside of /app/brand/.
//     If a color isn't in :root, propose it before using it.
//
// 2.  Never use rgba() for text outside of the ladder
//     (0.88 / 0.62 / 0.38 / 0.22 / 0.10 / 0.04).
//
// 3.  Status colors are SEMANTIC. Never repurpose
//     --success for a brand decoration.
//
// 4.  Add a token before adding a value to a component.
//     Components consume tokens. Tokens never consume components.
//
// 5.  Renaming a token is a breaking change. Bump the doc
//     version (sec. 50) and add a migration note.`}</Pre>
    </Section>
  );
}
