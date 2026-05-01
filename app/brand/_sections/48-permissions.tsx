'use client';
import { Section, H2, Mono, BRAND, MONO, Spec } from '../_lib/primitives';

const ROLES = [
  { role: 'Owner',   color: BRAND.gold,   perms: 'Full control · billing · workspace deletion · role assignment' },
  { role: 'Admin',   color: BRAND.green,  perms: 'Manage members · API keys · integrations · all agent permissions' },
  { role: 'Editor',  color: BRAND.blue,   perms: 'Spawn outcomes · run agents · edit personas · cannot manage members' },
  { role: 'Viewer',  color: BRAND.amber,  perms: 'Read-only · view runs / journals · download reports · cannot spawn' },
  { role: 'Guest',   color: BRAND.textLow,perms: 'Single-link access · expires · scoped to a single shared artifact' },
];

export default function PermissionsSection() {
  return (
    <Section id="permissions" label="48 — Permission States">
      <H2 italicTail="visible.">Permissions &mdash; explicit and</H2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8, marginBottom: 32 }}>
        {ROLES.map(r => (
          <div key={r.role} style={{
            display: 'grid', gridTemplateColumns: '120px 1fr',
            gap: 18, alignItems: 'center', padding: '16px 20px',
            borderRadius: 12, border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
          }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '4px 10px', borderRadius: 999,
              background: `rgba(255,255,255,0.04)`, border: `1px solid ${BRAND.hairline}`,
              fontFamily: MONO, fontSize: 11, color: r.color,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              width: 'fit-content',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: r.color }} />
              {r.role}
            </span>
            <p style={{ fontSize: 13, fontWeight: 400, color: BRAND.textMed, lineHeight: 1.65, margin: 0 }}>{r.perms}</p>
          </div>
        ))}
      </div>

      <Mono label="Permission-blocked UI · explain why" />
      <div style={{
        padding: 24, borderRadius: 12,
        border: `1px solid rgba(255,184,124,0.20)`, background: 'rgba(255,184,124,0.04)',
        display: 'grid', gridTemplateColumns: '32px 1fr 120px', gap: 16, alignItems: 'center', marginBottom: 32,
      }}>
        <div style={{
          width: 28, height: 28, borderRadius: 999,
          background: 'rgba(255,184,124,0.10)', border: '1px solid rgba(255,184,124,0.22)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: BRAND.amber, fontSize: 13, fontWeight: 600, fontFamily: MONO,
        }}>i</div>
        <div>
          <p style={{ fontSize: 13.5, fontWeight: 500, color: BRAND.textHigh, marginBottom: 4, margin: '0 0 4px' }}>
            Spawning Outcomes is admin-only
          </p>
          <p style={{ fontSize: 12.5, fontWeight: 400, color: BRAND.textLow, lineHeight: 1.6, margin: 0 }}>
            Your role is Viewer. Ask Jill (workspace owner) to grant Editor or Admin to spawn this Outcome.
          </p>
        </div>
        <button style={{
          padding: '8px 14px', borderRadius: 8,
          background: 'transparent', color: BRAND.amber,
          border: `1px solid rgba(255,184,124,0.30)`,
          fontSize: 12, fontWeight: 500, fontFamily: MONO, cursor: 'pointer',
        }}>Request access</button>
      </div>

      <Spec rows={[
        ['role chip',        'pill · MONO uppercase · color-coded · 6px dot prefix'],
        ['blocked banner',   'amber-tinted · status icon · explanation + CTA · NEVER just disable + tooltip'],
        ['blocked CTA',      '"Request access" or "Open settings" — always recoverable'],
        ['guest scope',      'Single artifact only · banner at top of page · expires-at timestamp visible'],
        ['audit trail',      'Every permission change logged with who · when · before / after · downloadable'],
        ['org switcher',     'Top-left of sidebar · shows current org · current role chip beside name'],
      ]} />
    </Section>
  );
}
