'use client';
import { Section, H2, H3, Mono, BRAND, MONO, Spec } from '../_lib/primitives';

export default function MarketingSection() {
  return (
    <Section id="marketing" label="27 — Marketing Patterns">
      <H2 italicTail="patterns.">Marketing &mdash; the recurring</H2>

      <H3>Hero formula</H3>
      <Spec rows={[
        ['eyebrow',        'optional · MONO uppercase · / route or section · marker'],
        ['headline',       'h1 · 88px · weight 500 · −0.035em · 1–4 lines max'],
        ['italic accent',  'one phrase per headline · serif italic · gold · noun-only'],
        ['lede',           'mav-lede · 19px · 1.5 line-height · max 720px width · expands the headline'],
        ['CTA row',        'Primary + Ghost · 40px gap from lede · optional inline link "Or read the docs ↗"'],
        ['stat bar',       '4 stats · top-border 1px · scroll-triggered count-up · 96px from CTA'],
      ]} />

      <H3>Section formula</H3>
      <Spec rows={[
        ['eyebrow',          'MONO uppercase · "01 · Section name" or "/ section"'],
        ['headline',         'h2 · 56px · weight 500 · with optional italic-serif accent'],
        ['lede + body',      'right column on lg+ · stacks below headline on md and below'],
        ['demo / artifact',  'live component · runs sandboxed inference where possible · always labeled'],
        ['cross-link',       'Optional · "See [agent] →" ghost-sm button · gold link if inline'],
      ]} />

      <H3>Three-act page rhythm</H3>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 32,
      }}>
        {[
          { act: 'Act I · Open',
            arc: 'Hero · Trusted-by · the agent in question (lead story)',
            beat: 'Bait the buyer with the outcome.' },
          { act: 'Act II · Prove',
            arc: 'Feature deep-dives · evidence layer · live demo',
            beat: 'Show the receipts. One concrete artifact per claim.' },
          { act: 'Act III · Close',
            arc: 'Trust posture · pricing preview · contextual CTA',
            beat: 'Lower the risk. Make the next step trivial.' },
        ].map(a => (
          <div key={a.act} style={{
            padding: 22, borderRadius: 12,
            border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
          }}>
            <p style={{ fontFamily: MONO, fontSize: 10, color: BRAND.gold, letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 10, margin: '0 0 10px' }}>{a.act}</p>
            <p style={{ fontSize: 13.5, fontWeight: 500, color: BRAND.textHigh, marginBottom: 10, margin: '0 0 10px' }}>{a.arc}</p>
            <p style={{ fontSize: 12, color: BRAND.textLow, lineHeight: 1.7, margin: 0 }}>{a.beat}</p>
          </div>
        ))}
      </div>

      <Mono label="Closing-CTA · per-page customization" />
      <Spec rows={[
        ['default',          'Door metaphor only on / · everywhere else uses contextual headline'],
        ['Pricing CTA',      '"Pay for what you use." · Start your trial / Talk to sales'],
        ['Trust CTA',        '"Read the posture. Then test the platform." · Open trust.mavera.io'],
        ['About CTA',        '"Talk to the team." · Talk to the team / See the platform'],
        ['Sales agent CTA',  '"Seven agents. One qualified meeting at a time." · Book walkthrough / See API'],
        ['Synthetic CTA',    '"Synthetic intelligence, defensibly built." · Run pilot / See methods'],
        ['Outcomes CTA',     '"Hand Maven the first goal." · Start your first outcome / See agents'],
      ]} />
    </Section>
  );
}
