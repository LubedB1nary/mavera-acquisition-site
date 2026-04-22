import { MavNav } from '@/components/nav';
import { MavFooter } from '@/components/footer';
import { Section } from '@/components/section';
import { ClosingCTA } from '@/components/closing-cta';
import { CertBadges } from '@/components/cert-badges';
import { PipelineRow } from '@/components/pipeline-row';
import { ArrowRight } from '@/components/icons';

const certs = [
  { name: 'SOC 2 Type II',    desc: 'Annual audit by an independent firm. Report available under NDA.' },
  { name: 'ISO 27001',        desc: 'ISMS certified. Covers people, process, and technology controls.' },
  { name: 'ISO 42001',        desc: 'AIMS certified — among the first AI firms to hold this.' },
  { name: 'HIPAA-ready',      desc: 'Architecture + controls for BAA. Signed BAA available on Enterprise.' },
];

const controls: [string, string][] = [
  ['Data residency',       'US default · EU region on Enterprise'],
  ['Encryption at rest',   'AES-256 · per-workspace key'],
  ['Encryption in transit','TLS 1.3 · mTLS for enterprise ingress'],
  ['Auth',                 'Auth0 · SSO via SAML/OIDC · SCIM provisioning'],
  ['Logging',              '7-year retention · exportable via SIEM integrations'],
  ['Backups',              'Cross-AZ · 35-day point-in-time recovery'],
  ['PII redaction',        'On-ingress for regulated workspaces'],
  ['Zero retention',       'Off by default for Enterprise · on-request for others'],
];

const subs: [string, string][] = [
  ['Amazon Web Services',   'Infra · US-East-1 primary · US-West-2 DR'],
  ['Auth0',                 'Identity · SSO · SCIM'],
  ['Cloudflare',            'WAF + edge · non-US PoPs drained of PII'],
  ['Stripe',                'Billing · no persistent card data in our systems'],
  ['Datadog',               'Observability · scrubbed for PHI'],
  ['Anthropic',             'LLM inference · zero-retention enabled'],
  ['OpenAI',                'LLM inference · zero-retention · enterprise tier'],
  ['Sentry',                'Errors · PII scrubbed'],
];

export default function TrustPage() {
  return (
    <>
      <MavNav />
      <section style={{ padding: '120px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 900px 500px at 50% 0%, rgba(200,168,255,0.1), transparent 60%)' }} />
        <div className="mav-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="mav-eyebrow" style={{ marginBottom: 20 }}>/ trust</div>
          <h1 className="mav-h1" style={{ fontSize: 76, maxWidth: 980 }}>
            Evidence <em>at every layer.</em>
          </h1>
          <p className="mav-lede" style={{ maxWidth: 620, marginTop: 26 }}>
            Most AI startups at our stage don't hold the certifications we do. Nine paying enterprise customers. AWS infra. Auth0. Full trust portal.
          </p>
          <div style={{ marginTop: 36 }}>
            <CertBadges />
          </div>
        </div>
      </section>

      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
          {certs.map(c => (
            <div key={c.name} style={{ background: 'var(--ink0)', padding: 24, minHeight: 180, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span className="mav-code" style={{ color: 'var(--gold)', fontSize: 11, letterSpacing: '.1em' }}>CERTIFIED</span>
              <div style={{ fontSize: 17, fontWeight: 500, letterSpacing: '-0.01em' }}>{c.name}</div>
              <div style={{ fontSize: 13, color: 'var(--dim)', lineHeight: 1.55 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Data posture" style={{ background: 'var(--ink1)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="mav-card" style={{ padding: 0, overflow: 'hidden' }}>
          {controls.map(([k, v]) => (
            <div key={k} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', padding: '18px 24px', borderBottom: '1px solid var(--line-soft)', alignItems: 'center', gap: 24 }}>
              <span style={{ fontSize: 14, fontWeight: 500 }}>{k}</span>
              <span className="mav-code" style={{ fontSize: 13, color: 'var(--dim)' }}>{v}</span>
            </div>
          ))}
        </div>
        <a href="#" className="mav-btn mav-btn--ghost mav-btn--sm" style={{ marginTop: 28 }}>Open the trust portal <ArrowRight size={12} /></a>
      </Section>

      <Section eyebrow="Sub-processors">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {subs.map(([name, desc]) => (
            <div key={name} className="mav-card" style={{ padding: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{name}</div>
                <div className="mav-code" style={{ fontSize: 12, color: 'var(--dim)', marginTop: 4 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section dense>
        <PipelineRow />
      </Section>

      <Section dense style={{ padding: '120px 0' }}>
        <ClosingCTA />
      </Section>
      <MavFooter />
    </>
  );
}
