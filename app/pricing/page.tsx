import { MavNav } from '@/components/nav';
import { MavFooter } from '@/components/footer';
import { Section } from '@/components/section';
import { ClosingCTA } from '@/components/closing-cta';
import { Check } from '@/components/icons';

const tiers = [
  { name: 'Starter',      price: '$300',   unit: '/mo', credits: '500 credits', features: ['50 GB S3', 'Audio transcription included', 'Email support', '$0.80/credit overage', '1 workspace · 3 seats'] },
  { name: 'Professional', price: '$3,500', unit: '/mo', highlight: true, credits: '10,000 credits', features: ['100 GB S3', '1,000 min transcription/mo', 'Priority support', '$0.55/credit overage', 'Brand voice · custom personas', '3 workspaces · 15 seats'] },
  { name: 'Enterprise',   price: 'Custom', credits: 'Custom credits', features: ['SSO · SCIM · BAA', 'Dedicated CSM', 'Data residency', 'Uptime SLA', 'Custom integrations', 'Unlimited seats'] },
];

const comparisonRows = [
  ['Credits included', '500 / mo', '10,000 / mo', 'Custom'],
  ['Storage',          '50 GB',    '100 GB',      'Custom'],
  ['Transcription',    'Included', '1,000 min',   'Custom'],
  ['Brand voice',      '—',        '✓',           '✓'],
  ['Custom personas',  '—',        '✓',           '✓'],
  ['SSO · SCIM',       '—',        '—',           '✓'],
  ['BAA · HIPAA',      '—',        '—',           '✓'],
  ['Dedicated CSM',    '—',        '—',           '✓'],
  ['Data residency',   '—',        '—',           'US · EU'],
  ['Uptime SLA',       '99.5%',    '99.9%',       '99.95%'],
];

const creditMap: [string, string][] = [
  ['Research (5-phase, avg 12 sources)', '8 credits'],
  ['Focus group (12 personas · 1 question)', '4 credits'],
  ['Outreach draft (persona-calibrated)', '2 credits'],
  ['Meeting transcript + extraction', '6 credits'],
  ['Persona response (API · single-turn)', '1 credit'],
  ['Synthetic data (1k rows tabular)', '3 credits'],
  ['Synthetic data (1k rows assay)', '8 credits'],
  ['Video analysis (per minute)', '2 credits'],
  ['Signal scan (per feed · per hour)', '0.1 credit'],
  ['Deep research (20+ sources)', '14 credits'],
  ['Outcome wake-up cycle', '3 credits'],
];

export default function PricingPage() {
  return (
    <>
      <MavNav />
      <section style={{ padding: '120px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 900px 500px at 50% 0%, rgba(200,168,255,0.1), transparent 60%)' }} />
        <div className="mav-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="mav-eyebrow" style={{ marginBottom: 20 }}>/ pricing</div>
          <h1 className="mav-h1" style={{ fontSize: 76, maxWidth: 980 }}>
            Credits. <em>Cost per response.</em> Every time.
          </h1>
          <p className="mav-lede" style={{ maxWidth: 620, marginTop: 26 }}>
            Every API response shows its cost. No seat minimums. No mystery usage reports at the end of the month.
          </p>
        </div>
      </section>

      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 80 }}>
          {tiers.map(t => (
            <div key={t.name} style={{
              background: t.highlight ? 'var(--ink2)' : 'var(--ink1)',
              border: `1px solid ${t.highlight ? 'var(--gold-dim)' : 'var(--line)'}`,
              borderRadius: 14, padding: 32, position: 'relative',
            }}>
              {t.highlight && <span style={{ position: 'absolute', top: 16, right: 16, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--gold)', letterSpacing: '.1em' }}>MOST POPULAR</span>}
              <div className="mav-eyebrow" style={{ marginBottom: 10 }}>{t.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
                <span style={{ fontSize: 48, letterSpacing: '-0.03em', fontWeight: 500 }}>{t.price}</span>
                {t.unit && <span style={{ fontSize: 14, color: 'var(--muted)' }}>{t.unit}</span>}
              </div>
              <div style={{ fontSize: 13, color: 'var(--dim)', marginBottom: 24, fontFamily: 'var(--mono)' }}>{t.credits}</div>
              <div style={{ height: 1, background: 'var(--line)', margin: '0 0 24px' }} />
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {t.features.map(f => (
                  <li key={f} style={{ fontSize: 13.5, color: 'var(--dim)', display: 'flex', gap: 10 }}><Check size={13} />{f}</li>
                ))}
              </ul>
              <a href="#" className={`mav-btn ${t.highlight ? 'mav-btn--primary' : 'mav-btn--ghost'}`} style={{ marginTop: 32, width: '100%', justifyContent: 'center' }}>
                {t.name === 'Enterprise' ? 'Talk to sales' : 'Start free trial'}
              </a>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', borderTop: '1px solid var(--line)' }}>
          <div style={{ padding: '16px 14px', fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)', letterSpacing: '.06em', textTransform: 'uppercase' }}>Compare</div>
          <div style={{ padding: '16px 14px', fontSize: 13, fontWeight: 500 }}>Starter</div>
          <div style={{ padding: '16px 14px', fontSize: 13, fontWeight: 500, color: 'var(--gold)' }}>Professional</div>
          <div style={{ padding: '16px 14px', fontSize: 13, fontWeight: 500 }}>Enterprise</div>
          {comparisonRows.map((row, i) => (
            <div key={i} style={{ display: 'contents' }}>
              {row.map((c, j) => (
                <div key={j} style={{
                  padding: '13px 14px', borderTop: '1px solid var(--line-soft)',
                  fontSize: 13, color: j === 0 ? 'var(--dim)' : 'var(--text)', fontFamily: j === 0 ? 'var(--sans)' : 'var(--mono)',
                }}>{c}</div>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Credit reference" style={{ background: 'var(--ink1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="mav-card" style={{ padding: 0, overflow: 'hidden' }}>
          {creditMap.map(([op, cost]) => (
            <div key={op} style={{ display: 'grid', gridTemplateColumns: '1fr 160px', padding: '14px 22px', borderBottom: '1px solid var(--line-soft)', alignItems: 'center' }}>
              <span style={{ fontSize: 13.5, color: 'var(--dim)' }}>{op}</span>
              <span className="mav-code" style={{ color: 'var(--gold)', textAlign: 'right' }}>{cost}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section dense style={{ padding: '120px 0' }}>
        <ClosingCTA />
      </Section>
      <MavFooter />
    </>
  );
}
