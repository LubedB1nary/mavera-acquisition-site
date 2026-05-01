'use client';
import { Section, H2, Mono, BRAND, MONO, Pre } from '../_lib/primitives';

export default function CompoundSection() {
  return (
    <Section id="compound" label="32 — Compound Components">
      <H2 italicTail="components.">Compound</H2>

      <p style={{ fontSize: 14, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.75, maxWidth: 620, marginBottom: 32 }}>
        Several patterns recur across the marketing site &mdash; agent cards, evidence
        rows, the focus-group demo, the closing CTA. Treat these as named compound
        components. New pages compose them; never re-implement.
      </p>

      <Mono label="ClosingCTA · per-page customizable" />
      <Pre>{`<ClosingCTA
  headline={<>Pay for what you <em className="mav-gradient-text">use.</em> Nothing else.</>}
  lede="Start your trial — no credit card required."
  primaryLabel="Start your trial"
  secondaryLabel="Talk to sales"
  // primaryHref / secondaryHref optional — defaults to Calendly
/>`}</Pre>

      <Mono label="AgentSubPage · template for /agents/[slug]" />
      <Pre>{`<AgentSubPage
  eyebrow="content"
  name="Content"
  tagline={<>Your voice. <em>At volume.</em></>}
  lede="Content extracts your brand voice…"
  metrics={[
    ['200+', 'Workflow templates'],
    ['50+',  'Calibrated personas'],
    ['12',   'Question types per focus group'],
    ['98%',  'Agreement with the OASIS study'],
  ]}
  sections={[{ title: 'What it ships', body: <ContentGrid /> }]}
  cta={{ headline: <>...</>, primaryLabel: 'Book a walkthrough' }}
/>`}</Pre>

      <Mono label="Reveal + stagger" />
      <Pre>{`<Reveal stagger style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }}>
  {items.map(item => <Card key={item.id}>{item.body}</Card>)}
</Reveal>

// .mav-reveal opacity 0 → 1 with .mav-stagger child delays (40, 110, 180, 250…ms).
// IntersectionObserver fires once. Reduced-motion users see no transition.`}</Pre>

      <Mono label="Section — opinionated wrapper" />
      <Pre>{`<Section eyebrow="03 · Outcomes" style={{ background:'var(--ink1)' }}>
  <h2 className="mav-h2">Hand Maven a goal.</h2>
  ...
</Section>

// Renders .mav-container · vertical rhythm 80–120px · optional eyebrow row.
// Use <Section dense> for hero/CTA blocks that manage their own padding.`}</Pre>

      <div style={{
        marginTop: 16, padding: '20px 24px', borderRadius: 12,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
      }}>
        <p style={{
          fontFamily: MONO, fontSize: 10, color: BRAND.textDim,
          letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 12, margin: '0 0 12px',
        }}>Composition rules</p>
        <p style={{ fontSize: 13, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.75, margin: 0 }}>
          Compound components own their layout, not their content. They expose
          slots (children, named props) for the content. Never let a compound
          component reach into the page&rsquo;s data layer &mdash; pass everything
          in. This keeps every section testable in isolation and forces the
          page to declare what it&rsquo;s rendering.
        </p>
      </div>
    </Section>
  );
}
