'use client';
import { Section, H2, Mono, BRAND, MONO, CopyPair } from '../_lib/primitives';

export default function ProductCopySection() {
  return (
    <Section id="product-copy" label="28 — Product Copywriting">
      <H2 italicTail="surface.">Product copy &mdash; per</H2>

      <Mono label="Empty state" />
      <CopyPair
        bad="No data available."
        good="No outcomes yet. Hand Maven a goal to spawn the first one."
      />

      <Mono label="Confirmation modal" />
      <CopyPair
        bad="Are you sure you want to proceed with this action?"
        good="Spawn an Outcome? Maven will run it daily until you pause."
      />

      <Mono label="Error toast" />
      <CopyPair
        bad="An error occurred. Please try again later."
        good="API key invalid. mvra_live_… returned 401. Check Settings → API."
      />

      <Mono label="Success toast" />
      <CopyPair
        bad="Successfully created!"
        good='Outcome spawned. First report tomorrow at 9am.'
      />

      <Mono label="Disabled state · explain why" />
      <CopyPair
        bad="Button disabled."
        good="Need 1+ persona to run a focus group. Add one in /agents/focus."
      />

      <Mono label="Loading label" />
      <CopyPair
        bad="Loading…"
        good="Spawning Outcome… (about 4s)"
      />

      <div style={{
        marginTop: 32, padding: '20px 24px', borderRadius: 12,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
      }}>
        <p style={{
          fontFamily: MONO, fontSize: 10, color: BRAND.textDim,
          letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 12, margin: '0 0 12px',
        }}>Product copy principles</p>
        <ol style={{ paddingLeft: 18, margin: 0, color: BRAND.textMed, fontSize: 13, lineHeight: 1.85 }}>
          <li>Tell the user what just happened or what to do next &mdash; never both in the same line.</li>
          <li>Use a real noun, not a category. "Outcome" not "item." "Agent" not "object."</li>
          <li>Show the cost of the next action in parens when known. "(about 4s)" or "(8 credits)".</li>
          <li>Surface the receipt: error codes, request IDs, file paths. Always copyable.</li>
          <li>Never say "please." We are software. We do not plead.</li>
        </ol>
      </div>
    </Section>
  );
}
