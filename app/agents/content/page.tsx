import { AgentSubPage } from '@/components/agent-sub-page';

export default function ContentPage() {
  return (
    <AgentSubPage
      eyebrow="content"
      name="Content"
      tagline={<>Your voice. <em>At volume.</em></>}
      lede="Content extracts your brand voice from existing material, tests every draft against synthetic audience panels, and produces at the rate of the specialists — not the generalist."
      metrics={[
        ['200+', 'Workflow templates'],
        ['50+', 'Calibrated personas'],
        ['12', 'Question types per focus group'],
        ['96%', 'Parity with human panels'],
      ]}
      sections={[
        {
          title: 'What it ships',
          body: (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {[
                ['Brand voice extraction', 'Learns from your landing pages, blog, sales decks, product copy.'],
                ['Draft variants', 'A/B/C with persona fit scores before you ever publish.'],
                ['Audience pre-test', 'Structured engagement scoring before spend.'],
                ['Video analysis', 'Attention · clarity · emotion · CTA strength.'],
                ['Brief generation', 'Strategy docs grounded in your own research.'],
                ['Claim audit', 'Every statistic traced to a source in your corpus.'],
              ].map(([k, v]) => (
                <div key={k} className="mav-card" style={{ padding: 22 }}>
                  <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 8 }}>{k}</div>
                  <div style={{ fontSize: 13, color: 'var(--dim)', lineHeight: 1.55 }}>{v}</div>
                </div>
              ))}
            </div>
          ),
        },
      ]}
    />
  );
}
