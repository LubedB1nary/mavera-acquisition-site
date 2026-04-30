import Link from 'next/link';
import { MavNav } from '@/components/nav';
import { MavFooter } from '@/components/footer';
import { Section } from '@/components/section';
import { ClosingCTA } from '@/components/closing-cta';
import { Check, ArrowRight } from '@/components/icons';

const tiers = [
  { name: 'Starter',       price: '$300',   unit: '/mo', credits: '500 credits',    features: ['50 GB S3', 'Audio transcription included', 'Email support', '$0.80/credit overage', 'No per-seat pricing · 1 workspace'] },
  { name: 'Basic Agency',  price: '$2,000', unit: '/mo', credits: '5,000 credits',  features: ['75 GB S3', '500 min transcription/mo', 'Email support', '$0.65/credit overage', 'Brand voice', 'No per-seat pricing · 2 workspaces'] },
  { name: 'Professional',  price: '$3,500', unit: '/mo', highlight: true, credits: '10,000 credits', features: ['100 GB S3', '1,000 min transcription/mo', 'Priority support', '$0.55/credit overage', 'Brand voice · custom personas', 'No per-seat pricing · 3 workspaces'] },
  { name: 'Enterprise',    price: 'Custom', credits: 'Custom credits', features: ['SSO · SCIM · BAA', 'Dedicated CSM', 'Data residency', 'Uptime SLA', 'Custom integrations', 'No per-seat pricing'] },
];

const apiTiers = [
  {
    name: 'Developer',
    price: '$0',
    unit: '/mo',
    credits: '100 credits / month',
    blurb: 'Free forever. Build, prototype, share.',
    features: [
      '$0.85/credit overage',
      '1 API key · 1 workspace',
      'Community support · Discord',
      '5 RPS rate limit',
      'OpenAI-compatible · all 11 endpoints',
    ],
  },
  {
    name: 'Build',
    price: '$99',
    unit: '/mo',
    highlight: true,
    credits: '2,000 credits / month',
    blurb: 'For production apps and indie shipping.',
    features: [
      '$0.65/credit overage',
      '5 API keys · 3 workspaces',
      'Email support · 1-business-day SLA',
      '50 RPS rate limit',
      'Webhook delivery · usage exports',
      'Persona library · all 50+ personas',
    ],
  },
  {
    name: 'Scale',
    price: '$999',
    unit: '/mo',
    credits: '25,000 credits / month',
    blurb: 'For revenue-generating products at volume.',
    features: [
      '$0.40/credit overage',
      'Unlimited API keys · unlimited workspaces',
      'Priority support · 4-hour SLA',
      '500 RPS rate limit · burst to 2K',
      'Dedicated quota · regional routing',
      'Custom personas · brand voice training',
      '99.9% uptime SLA · status page',
    ],
  },
];

const comparisonRows = [
  ['Credits included', '500 / mo',  '5,000 / mo', '10,000 / mo', 'Custom'],
  ['Storage',          '50 GB',     '75 GB',      '100 GB',      'Custom'],
  ['Transcription',    'Included',  '500 min',    '1,000 min',   'Custom'],
  ['Brand voice',      '—',         '✓',          '✓',           '✓'],
  ['Custom personas',  '—',         '—',          '✓',           '✓'],
  ['SSO · SCIM',       '—',         '—',          '—',           '✓'],
  ['BAA · HIPAA',      '—',         '—',          '—',           '✓'],
  ['Dedicated CSM',    '—',         '—',          '—',           '✓'],
  ['Data residency',   '—',         '—',          '—',           'US · EU'],
  ['Uptime SLA',       '99.5%',     '99.7%',      '99.9%',       '99.95%'],
];

const creditMap: [string, string][] = [
  ['Persona response (API · single-turn)', '1–5 credits'],
  ['Mave research', '10–50 credits'],
  ['Content generation', '10–30 credits'],
  ['Focus group', '50–200 credits'],
  ['Brand voice creation (one-time)', '50 credits'],
  ['Video analysis (per minute)', '100–500 credits'],
  ['Custom persona creation (one-time)', '300 credits'],
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
            Every API response shows its cost. No per-seat pricing. No mystery usage reports at the end of the month.
          </p>
        </div>
      </section>

      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 80 }}>
          {tiers.map(t => (
            <div key={t.name} style={{
              background: t.highlight ? 'var(--ink2)' : 'var(--ink1)',
              border: `1px solid ${t.highlight ? 'var(--gold-dim)' : 'var(--line)'}`,
              borderRadius: 14, padding: 26, position: 'relative',
            }}>
              {t.highlight && <span style={{ position: 'absolute', top: 14, right: 14, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--gold)', letterSpacing: '.1em' }}>MOST POPULAR</span>}
              <div className="mav-eyebrow" style={{ marginBottom: 10 }}>{t.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
                <span style={{ fontSize: 38, letterSpacing: '-0.03em', fontWeight: 500 }}>{t.price}</span>
                {t.unit && <span style={{ fontSize: 13, color: 'var(--muted)' }}>{t.unit}</span>}
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--dim)', marginBottom: 22, fontFamily: 'var(--mono)' }}>{t.credits}</div>
              <div style={{ height: 1, background: 'var(--line)', margin: '0 0 22px' }} />
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                {t.features.map(f => (
                  <li key={f} style={{ fontSize: 13, color: 'var(--dim)', display: 'flex', gap: 10 }}><Check size={13} />{f}</li>
                ))}
              </ul>
              <a href="#" className={`mav-btn ${t.highlight ? 'mav-btn--primary' : 'mav-btn--ghost'} mav-btn--sm`} style={{ marginTop: 28, width: '100%', justifyContent: 'center' }}>
                {t.name === 'Enterprise' ? 'Talk to sales' : 'Start your trial'}
              </a>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr', borderTop: '1px solid var(--line)' }}>
          <div style={{ padding: '16px 14px', fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)', letterSpacing: '.06em', textTransform: 'uppercase' }}>Compare</div>
          <div style={{ padding: '16px 14px', fontSize: 13, fontWeight: 500 }}>Starter</div>
          <div style={{ padding: '16px 14px', fontSize: 13, fontWeight: 500 }}>Basic Agency</div>
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

      <Section eyebrow="API plans · for builders" id="api" style={{ background: 'var(--ink1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 64, alignItems: 'end', marginBottom: 32 }}>
          <h2 className="mav-h2" style={{ fontSize: 48 }}>Direct API access. <em className="mav-gradient-text">Same credits.</em> Sharper limits.</h2>
          <p className="mav-lede" style={{ maxWidth: 520 }}>
            For developers building on top of Mavera. Drop-in OpenAI-compatible endpoints, persona-aware responses,
            transparent per-call cost in every response header. Three tiers — start free, scale when ready.
          </p>
        </div>

        <div style={{
          marginBottom: 36, padding: '14px 18px',
          border: '1px solid var(--gold-dim)', borderRadius: 10,
          background: 'rgba(200,168,255,0.05)',
          display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
        }}>
          <span className="mav-code" style={{ color: 'var(--gold)', fontSize: 11, padding: '3px 8px', border: '1px solid var(--gold-dim)', borderRadius: 999, letterSpacing: '.1em' }}>COMING SOON</span>
          <span style={{ fontSize: 13.5, color: 'var(--dim)' }}>
            Self-serve API tiers launch publicly later this quarter. Today, contact us for an API key &mdash; pricing below is the launch schedule.
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {apiTiers.map(t => (
            <div key={t.name} style={{
              background: t.highlight ? 'var(--ink2)' : 'var(--ink0)',
              border: `1px solid ${t.highlight ? 'var(--gold-dim)' : 'var(--line)'}`,
              borderRadius: 14, padding: 32, position: 'relative',
            }}>
              {t.highlight && <span style={{ position: 'absolute', top: 16, right: 16, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--gold)', letterSpacing: '.1em' }}>RECOMMENDED</span>}
              <div className="mav-eyebrow" style={{ marginBottom: 10 }}>{t.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
                <span style={{ fontSize: 48, letterSpacing: '-0.03em', fontWeight: 500 }}>{t.price}</span>
                {t.unit && <span style={{ fontSize: 14, color: 'var(--muted)' }}>{t.unit}</span>}
              </div>
              <div style={{ fontSize: 13, color: 'var(--dim)', marginBottom: 4, fontFamily: 'var(--mono)' }}>{t.credits}</div>
              <div style={{ fontSize: 12.5, color: 'var(--muted)', marginBottom: 22, lineHeight: 1.5, minHeight: 36 }}>{t.blurb}</div>
              <div style={{ height: 1, background: 'var(--line)', margin: '0 0 22px' }} />
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                {t.features.map(f => (
                  <li key={f} style={{ fontSize: 13, color: 'var(--dim)', display: 'flex', gap: 10 }}><Check size={13} />{f}</li>
                ))}
              </ul>
              <a href="#" className={`mav-btn ${t.highlight ? 'mav-btn--primary mav-shimmer' : 'mav-btn--ghost'}`} style={{ marginTop: 28, width: '100%', justifyContent: 'center' }}>
                {t.name === 'Developer' ? 'Get API key · free' : t.name === 'Build' ? 'Start Build trial' : 'Start Scale trial'}
              </a>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 28, padding: '18px 22px',
          border: '1px solid var(--line)', borderRadius: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap',
          background: 'rgba(200,168,255,0.04)',
        }}>
          <div>
            <div className="mav-eyebrow" style={{ marginBottom: 6 }}>Need more?</div>
            <div style={{ fontSize: 14, color: 'var(--dim)' }}>
              Volume pricing kicks in above 250K credits/mo. Reserved capacity, regional residency, and on-prem deployments are available on Enterprise.
            </div>
          </div>
          <Link href="#" className="mav-btn mav-btn--ghost mav-btn--sm">Talk to sales <ArrowRight size={12} /></Link>
        </div>

        <div style={{
          marginTop: 24, fontSize: 12.5, color: 'var(--muted)',
          display: 'flex', gap: 18, flexWrap: 'wrap', fontFamily: 'var(--mono)', letterSpacing: '.04em',
        }}>
          <span>· Per-call cost in every response header</span>
          <span>· Real-time usage dashboard</span>
          <span>· Soft caps · alerting · auto-pause</span>
          <span>· No annual commit required</span>
        </div>
      </Section>

      <Section eyebrow="Credit reference" style={{ borderBottom: '1px solid var(--line)' }}>
        <p className="mav-body" style={{ color: 'var(--dim)', marginBottom: 18, maxWidth: 720 }}>
          The full, current cost ranges are published in our docs. Ranges reflect input length, modality, and model selection.
        </p>
        <div className="mav-card" style={{ padding: 0, overflow: 'hidden' }}>
          {creditMap.map(([op, cost]) => (
            <div key={op} style={{ display: 'grid', gridTemplateColumns: '1fr 200px', padding: '14px 22px', borderBottom: '1px solid var(--line-soft)', alignItems: 'center' }}>
              <span style={{ fontSize: 13.5, color: 'var(--dim)' }}>{op}</span>
              <span className="mav-code" style={{ color: 'var(--gold)', textAlign: 'right' }}>{cost}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14, fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)', letterSpacing: '.04em' }}>
          source · <a href="https://docs.mavera.io/guides/credits" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', borderBottom: '1px solid var(--gold-dim)' }}>docs.mavera.io/guides/credits</a>
        </div>
      </Section>

      <Section dense style={{ padding: '120px 0' }}>
        <ClosingCTA
          headline={<>Pay for what you <em className="mav-gradient-text">use.</em> Nothing else.</>}
          lede="Start your trial &mdash; no credit card required. Move up when you outgrow the credits. Talk to us when you're ready for SSO, BAA, and a dedicated CSM."
          primaryLabel="Start your trial"
          secondaryLabel="Talk to sales"
        />
      </Section>
      <MavFooter />
    </>
  );
}
