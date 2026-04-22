import { AgentSubPage } from '@/components/agent-sub-page';

export default function ResearchPage() {
  return (
    <AgentSubPage
      eyebrow="research"
      name="Research"
      tagline={<>Research, <em>with receipts.</em></>}
      lede="A 5-phase deep research pipeline. Scope → Search → Synthesize → Attribute → Audit. Every claim sourced. Every source scored. Every reasoning step replayable."
      metrics={[
        ['5', 'Phases per run'],
        ['34', 'Avg passages retained'],
        ['0.89', 'Mean confidence score'],
        ['∞', 'Replay depth'],
      ]}
      sections={[
        {
          title: 'Methodology',
          body: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
              <div>
                <h2 className="mav-h2" style={{ fontSize: 44 }}>Structured by default.</h2>
                <p className="mav-lede" style={{ marginTop: 20 }}>
                  Not a search wrapper. Research decomposes your question, runs parallel retrieval across 295K+ sources,
                  reconciles conflicts, and binds every claim to its supporting passage.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  ['Scope', 'Question broken into sub-questions with explicit success criteria.'],
                  ['Search', 'Live web · news corpus · academic · internal KB — ranked by evidence density.'],
                  ['Synthesize', 'Conflicts flagged, not averaged. Contradictions surfaced for your review.'],
                  ['Attribute', 'Every claim → passage. Every passage → confidence score.'],
                  ['Audit', 'Full reasoning trail persisted. Replay any decision step-by-step.'],
                ].map(([k, v]) => (
                  <div key={k} style={{ borderLeft: '1.5px solid var(--gold)', paddingLeft: 16 }}>
                    <div style={{ fontSize: 14.5, fontWeight: 500 }}>{k}</div>
                    <div style={{ fontSize: 13, color: 'var(--dim)', marginTop: 3 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          ),
        },
      ]}
    />
  );
}
