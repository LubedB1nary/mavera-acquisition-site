import { AgentSubPage } from '@/components/agent-sub-page';

export default function MarketPage() {
  return (
    <AgentSubPage
      eyebrow="market"
      name="Market intel"
      tagline={<>Every signal, <em>watched.</em></>}
      lede="Continuous monitoring across 295K+ sources — news, regulatory filings, payer policy, competitor moves, PE activity. Signals scored, deduplicated, routed to the right agent."
      metrics={[
        ['295K+', 'Sources monitored'],
        ['60s', 'Median signal latency'],
        ['0–100', 'Relevance scoring'],
        ['14', 'Source categories'],
      ]}
      sections={[
        {
          title: 'Signal types',
          body: (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {[
                ['Regulatory', 'CLIA · FDA · CMS · LCD · state licensure changes'],
                ['Payer', 'Policy updates · contract changes · coverage shifts'],
                ['Competitor', 'Product launches · pricing · org changes · hiring'],
                ['Financial', 'Earnings · PE activity · restructuring · bankruptcy'],
                ['Editorial', 'Key voice posts · industry newsletters · podcasts'],
                ['Technical', 'Patents · preprints · standards changes'],
              ].map(([k, v]) => (
                <div key={k} className="mav-card" style={{ padding: 22 }}>
                  <span className="mav-code" style={{ color: 'var(--gold)', fontSize: 11, letterSpacing: '.1em' }}>{k.toUpperCase()}</span>
                  <div style={{ fontSize: 13, color: 'var(--dim)', lineHeight: 1.55, marginTop: 10 }}>{v}</div>
                </div>
              ))}
            </div>
          ),
        },
      ]}
    />
  );
}
