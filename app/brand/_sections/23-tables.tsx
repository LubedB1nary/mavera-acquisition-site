'use client';
import { Section, H2, Mono, BRAND, MONO, Spec } from '../_lib/primitives';

const ROWS = [
  { agent: 'Maven',         status: 'idle',      activity: '— —',                            ts: '14:22' },
  { agent: 'Argus · Sales', status: 'running',   activity: 'Outreach · wave 1 · 8 accounts', ts: '14:18' },
  { agent: 'Research',      status: 'running',   activity: 'Logistics vertical deep-dive',   ts: '14:14' },
  { agent: 'Market intel',  status: 'live',      activity: '12 events / minute',             ts: '14:22' },
  { agent: 'Focus groups',  status: 'completed', activity: '12 / 12 personas responded',     ts: '13:46' },
  { agent: 'Ops · CRM',     status: 'idle',      activity: 'Pipeline up-to-date',            ts: '14:01' },
];

const STATUS_COLOR = {
  idle:       { c: BRAND.textLow,  bg: 'transparent' },
  running:    { c: BRAND.gold,     bg: BRAND.goldDim },
  live:       { c: BRAND.green,    bg: 'rgba(124,224,168,0.10)' },
  completed:  { c: BRAND.textHigh, bg: 'transparent' },
} as const;

export default function TablesSection() {
  return (
    <Section id="tables" label="23 — Tables & Data">
      <H2 italicTail="dense.">Tables &mdash; quiet,</H2>

      <div style={{
        borderRadius: 14, border: `1px solid ${BRAND.hairline}`, overflow: 'hidden', marginBottom: 32,
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '180px 100px 1fr 80px',
          gap: 16, padding: '12px 22px',
          borderBottom: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
        }}>
          {['Agent', 'Status', 'Activity', 'Updated'].map(h => (
            <p key={h} style={{
              fontFamily: MONO, fontSize: 9.5, color: BRAND.textDim,
              letterSpacing: '0.10em', textTransform: 'uppercase', margin: 0,
            }}>{h}</p>
          ))}
        </div>
        {ROWS.map((r, i) => {
          const st = STATUS_COLOR[r.status as keyof typeof STATUS_COLOR];
          return (
            <div key={r.agent} style={{
              display: 'grid', gridTemplateColumns: '180px 100px 1fr 80px',
              gap: 16, alignItems: 'center', padding: '14px 22px',
              background: i % 2 === 0 ? BRAND.surface1 : 'transparent',
              borderBottom: i < ROWS.length - 1 ? `1px solid ${BRAND.hairlineSoft}` : 'none',
            }}>
              <p style={{ fontSize: 13.5, fontWeight: 500, color: BRAND.textHigh, margin: 0 }}>{r.agent}</p>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '3px 9px', borderRadius: 999,
                background: st.bg, color: st.c,
                fontFamily: MONO, fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase',
                width: 'fit-content',
              }}>
                {r.status === 'live' && <span style={{ width: 5, height: 5, borderRadius: 999, background: BRAND.green, animation: 'mav-pulse 1.6s ease-in-out infinite' }} />}
                {r.status}
              </span>
              <p style={{ fontSize: 13, fontWeight: 400, color: BRAND.textMed, margin: 0 }}>{r.activity}</p>
              <p style={{ fontFamily: MONO, fontSize: 11, color: BRAND.textLow, textAlign: 'right', margin: 0 }}>{r.ts}</p>
            </div>
          );
        })}
        <div style={{
          padding: '12px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderTop: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
        }}>
          <p style={{ fontFamily: MONO, fontSize: 10, color: BRAND.textLow, margin: 0 }}>6 of 9 agents active</p>
          <div style={{ display: 'flex', gap: 4 }}>
            {['‹', '1', '2', '3', '›'].map((p, i) => (
              <button key={i} style={{
                width: 26, height: 26, borderRadius: 6,
                background: i === 1 ? BRAND.goldDim : 'transparent',
                color: i === 1 ? BRAND.gold : BRAND.textLow,
                border: `1px solid ${i === 1 ? BRAND.goldDim : BRAND.hairline}`,
                fontSize: 11, fontFamily: MONO, cursor: 'pointer',
              }}>{p}</button>
            ))}
          </div>
        </div>
      </div>

      <Spec rows={[
        ['header bg',        'var(--surface1) · MONO 9.5 · color --dim · uppercase · tracking +0.10em'],
        ['row padding',      '14px 22px'],
        ['row striping',     'every other row · var(--surface1) · zebra is subtle (W+2%)'],
        ['row hover',        'optional · bg W+3.5% · cursor pointer if interactive'],
        ['cell font',        '13–13.5 · weight 400 (500 for first column)'],
        ['mono cells',       'timestamps, IDs, hashes — JetBrains Mono · 11–13'],
        ['status pill',      'MONO 10 · upper · tracking +0.08em · status-tinted'],
        ['live status',      '5px pulse dot beside the label'],
        ['footer',           '12px 22px · count + pager · pager active uses gold-dim'],
      ]} />
    </Section>
  );
}
