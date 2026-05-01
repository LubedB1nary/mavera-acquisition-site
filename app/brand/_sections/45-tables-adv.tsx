'use client';
import { Section, H2, Mono, BRAND, MONO, Spec } from '../_lib/primitives';

export default function TablesAdvSection() {
  return (
    <Section id="tables-adv" label="45 — Advanced Tables">
      <H2 italicTail="dense.">Tables &mdash; sortable, sticky,</H2>

      <Mono label="Sortable column · sticky header · row selection" />
      <div style={{
        borderRadius: 14, border: `1px solid ${BRAND.hairline}`,
        background: BRAND.bg, overflow: 'hidden', marginBottom: 32,
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '36px 200px 100px 1fr 80px',
          gap: 16, padding: '12px 22px',
          background: BRAND.surface1, borderBottom: `1px solid ${BRAND.hairline}`,
          position: 'sticky', top: 0,
        }}>
          <input type="checkbox" readOnly style={{ accentColor: BRAND.gold }} />
          {[
            { label: 'Account',    sort: 'asc' },
            { label: 'Score',      sort: 'desc', active: true },
            { label: 'Last Touch', sort: null },
            { label: 'Stage',      sort: null },
          ].map(h => (
            <div key={h.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <p style={{
                fontFamily: MONO, fontSize: 9.5,
                color: h.active ? BRAND.gold : BRAND.textDim,
                letterSpacing: '0.10em', textTransform: 'uppercase', margin: 0,
              }}>{h.label}</p>
              {h.sort && (
                <span style={{
                  fontFamily: MONO, fontSize: 11,
                  color: h.active ? BRAND.gold : BRAND.textLow,
                }}>{h.sort === 'asc' ? '↑' : '↓'}</span>
              )}
            </div>
          ))}
        </div>
        {[
          { name: 'Northwind Logistics', score: 92, ts: '2 min ago',  stage: 'Reply received' },
          { name: 'Quest Manufacturing', score: 87, ts: '14 min ago', stage: 'Outreach sent' },
          { name: 'Sea Coast Bio',       score: 76, ts: '1 hr ago',   stage: 'Re-engaging' },
          { name: 'Pacifica Imaging',    score: 71, ts: '3 hr ago',   stage: 'Qualifying' },
        ].map((r, i) => (
          <div key={r.name} style={{
            display: 'grid', gridTemplateColumns: '36px 200px 100px 1fr 80px',
            gap: 16, alignItems: 'center', padding: '12px 22px',
            background: i === 0 ? 'rgba(200,168,255,0.05)' : (i % 2 === 0 ? BRAND.surface1 : 'transparent'),
            borderBottom: i < 3 ? `1px solid ${BRAND.hairlineSoft}` : 'none',
          }}>
            <input type="checkbox" defaultChecked={i === 0} readOnly style={{ accentColor: BRAND.gold }} />
            <p style={{ fontSize: 13.5, fontWeight: 500, color: BRAND.textHigh, margin: 0 }}>{r.name}</p>
            <p style={{ fontFamily: MONO, fontSize: 13, color: BRAND.gold, margin: 0 }}>{r.score}</p>
            <p style={{ fontSize: 13, fontWeight: 400, color: BRAND.textMed, margin: 0 }}>{r.stage}</p>
            <p style={{ fontFamily: MONO, fontSize: 11, color: BRAND.textLow, textAlign: 'right', margin: 0 }}>{r.ts}</p>
          </div>
        ))}
        {/* Bulk action bar — only when row selected */}
        <div style={{
          padding: '12px 22px', borderTop: `1px solid ${BRAND.hairline}`,
          background: BRAND.goldDim,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <p style={{ fontSize: 13, color: BRAND.gold, fontWeight: 500, margin: 0 }}>1 selected</p>
          <div style={{ display: 'flex', gap: 8 }}>
            {['Re-engage', 'Snooze', 'Open in Argus'].map(a => (
              <span key={a} style={{
                padding: '6px 12px', borderRadius: 6,
                background: 'rgba(255,255,255,0.05)', color: BRAND.text,
                border: `1px solid ${BRAND.gold}`,
                fontSize: 12, fontWeight: 500, cursor: 'pointer',
              }}>{a}</span>
            ))}
          </div>
        </div>
      </div>

      <Spec rows={[
        ['sortable header',     'Click toggles asc → desc → unsorted · arrow appears beside label · active is gold'],
        ['sticky header',       'position: sticky · top: 0 · z-index: 1 · keeps under nav'],
        ['row selection',       'Checkbox left of first cell · accentColor: var(--gold) · cmd+click for range'],
        ['active row',          'bg gold@5% · stays through scroll'],
        ['bulk action bar',     'Slides up from row footer when 1+ selected · gold-dim bg · MUST clear on esc'],
        ['column resize',       'Optional · drag the right edge of header · cursor col-resize · 4px hit slop'],
        ['filter chips',        'Above the table · pill style · close × on each · "Clear all" link on the right'],
        ['empty filtered',      '"No accounts match these filters" · primary CTA "Clear filters"'],
      ]} />
    </Section>
  );
}
