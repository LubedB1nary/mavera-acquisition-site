'use client';
import { Section, H2, BRAND, MONO, Spec } from '../_lib/primitives';

const SAMPLES = [
  { n: '98%',     sub: 'OASIS agreement',    rule: 'Whole percentages on hero stats. No decimals.' },
  { n: '4M+',     sub: 'interactions',       rule: 'M / K abbreviation. + indicates "at least".' },
  { n: '295K+',   sub: 'sources',            rule: 'K when ≥ 1000 and < 1M.' },
  { n: '< 60s',   sub: 'signal latency',     rule: '< / > with a space before the unit.' },
  { n: '7',       sub: 'specialists',        rule: 'Whole numbers for counts < 10 — no leading zero.' },
  { n: '0.92',    sub: 'confidence',         rule: 'Two-decimal probability scores. Always padded.' },
  { n: '50–200',  sub: 'credits / focus group', rule: 'En-dash (–) between low / high range. No spaces.' },
  { n: '$3,500',  sub: '/ mo · Professional', rule: 'USD with currency prefix · comma at thousands.' },
];

export default function NumbersSection() {
  return (
    <Section id="numbers" label="36 — Number Formatting">
      <H2 italicTail="precise.">Numbers &mdash; honest and</H2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 32 }}>
        {SAMPLES.map(s => (
          <div key={s.n} style={{
            padding: 18, borderRadius: 10,
            border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
          }}>
            <p style={{
              fontSize: 28, fontWeight: 500, letterSpacing: '-0.030em',
              color: BRAND.gold, lineHeight: 1, marginBottom: 6, margin: '0 0 6px',
            }}>{s.n}</p>
            <p style={{ fontFamily: MONO, fontSize: 9.5, color: BRAND.textLow, marginBottom: 10, margin: '0 0 10px' }}>{s.sub}</p>
            <p style={{ fontSize: 11, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.65, margin: 0 }}>{s.rule}</p>
          </div>
        ))}
      </div>

      <Spec rows={[
        ['percentages',     'Whole numbers on hero · 1 decimal in tables · 2 decimals only for probability'],
        ['large counts',    '< 1k → exact (e.g. 295) · 1k–999k → "K" suffix · ≥ 1M → "M" suffix'],
        ['+ suffix',        'Indicates "at least" · 4M+ means ≥ 4,000,000 · used when exact would imply false precision'],
        ['ranges',          'En-dash (–) · no spaces around it · "10–50 credits" · never hyphen (-)'],
        ['comparisons',     '< / > with single space · "< 60s" · "> 4M"'],
        ['multipliers',     '× (multiplication sign) · never lowercase x · "100×" not "100x"'],
        ['currency',        '$ prefix · comma at thousands · "$3,500" · "/mo" suffix in MONO --muted'],
        ['durations',       's / ms / min / hr · always lowercase · no period · "180ms" not "180 ms."'],
        ['credit ranges',   'Use raw integers · "1–5 credits" · "100–500 credits/min" · cite docs source'],
      ]} />
    </Section>
  );
}
