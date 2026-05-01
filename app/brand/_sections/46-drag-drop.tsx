'use client';
import { Section, H2, Mono, BRAND, MONO, Spec } from '../_lib/primitives';

export default function DragDropSection() {
  return (
    <Section id="drag-drop" label="46 — Drag & Drop">
      <H2 italicTail="reorder.">Drag &amp; drop &mdash; deliberate</H2>

      <Mono label="Outcome step reordering" />
      <div style={{
        padding: 24, borderRadius: 14,
        border: `1px solid ${BRAND.hairline}`, background: BRAND.surface1,
        marginBottom: 32,
      }}>
        {[
          { n: '01', t: 'Identify top 40 accounts by signal density', state: 'rest' },
          { n: '02', t: 'Build a custom dossier per account',         state: 'dragging' },
          { n: '03', t: 'Run persona-calibrated outreach · wave 1',   state: 'drop-target' },
          { n: '04', t: 'Track reply rates by vertical · weekly',     state: 'rest' },
        ].map((s, i, arr) => (
          <div key={s.n} style={{
            display: 'grid', gridTemplateColumns: '24px 50px 1fr 24px',
            gap: 14, alignItems: 'center', padding: '14px 16px', borderRadius: 10,
            marginBottom: i < arr.length - 1 ? 6 : 0,
            background: s.state === 'dragging' ? 'rgba(200,168,255,0.10)' :
                        s.state === 'drop-target' ? 'transparent' : BRAND.bg,
            border: s.state === 'dragging' ? `1px dashed ${BRAND.gold}` :
                    s.state === 'drop-target' ? `1px dashed ${BRAND.goldDim}` :
                    `1px solid ${BRAND.hairlineSoft}`,
            opacity: s.state === 'drop-target' ? 0.45 : 1,
            cursor: s.state === 'dragging' ? 'grabbing' : 'grab',
          }}>
            <span style={{
              fontFamily: MONO, fontSize: 11, color: BRAND.textLow,
              cursor: 'grab',
            }}>⋮⋮</span>
            <span style={{ fontFamily: MONO, fontSize: 11, color: BRAND.gold, letterSpacing: '0.06em' }}>{s.n}</span>
            <p style={{ fontSize: 13.5, fontWeight: 400, color: BRAND.textHigh, margin: 0 }}>{s.t}</p>
            <span style={{ fontSize: 14, color: BRAND.textLow }}>×</span>
          </div>
        ))}
      </div>

      <Spec rows={[
        ['handle',            '⋮⋮ glyph · MONO 11 · color --muted · cursor: grab · expands hover hit-area'],
        ['dragging row',      'bg gold@10% · 1px dashed gold border · scale 1.01 · cursor grabbing'],
        ['drop indicator',    '1px dashed gold-dim · row receiving the drop is dimmed (opacity 0.45)'],
        ['ghost element',     'cloned at 92% scale · blur(2px) · follows cursor · hidden when drop-target found'],
        ['snap point',        'Within 8px of a row edge · animates to indicator position · 120ms --ease-out'],
        ['cancel',            'ESC anywhere · row returns to origin with 200ms transform animation'],
        ['screen reader',     'aria-grabbed · aria-dropeffect · live region announces "Step 2 moved to position 4"'],
        ['keyboard reorder',  'Focus on handle · Space starts drag · ↑↓ moves · Space drops · Esc cancels'],
        ['hard limits',       'Drag is opt-in per surface · never on tables / lists where order is data-source defined'],
      ]} />
    </Section>
  );
}
