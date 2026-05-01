import Link from 'next/link';
import { MavLogo } from './logo';
import { CertBadges } from './cert-badges';

const footerCols = [
  {
    title: 'Platform',
    items: [
      ['Autonomous agents', '/features'],
      ['Synthetic intelligence', '/synthetic'],
      ['Evidence layer', '/features'],
      ['Meetings', '/agents/meetings'],
      ['Brand voice', '/agents/content'],
    ] as [string, string][],
  },
  {
    title: 'Developers',
    items: [
      ['API overview', '/api-docs'],
      ['Documentation', '/api-docs'],
      ['SDKs', '/api-docs'],
      ['Status', '/api-docs'],
      ['Changelog', '/api-docs'],
    ] as [string, string][],
  },
  {
    title: 'Company',
    items: [
      ['About', '/about'],
      ['Research', '/about'],
      ['Pricing', '/pricing'],
      ['Trust', '/trust'],
      ['Contact', '/about'],
    ] as [string, string][],
  },
  {
    title: 'Legal',
    items: [
      ['Privacy', '/trust'],
      ['Terms', '/trust'],
      ['DPA', '/trust'],
      ['Security', '/trust'],
    ] as [string, string][],
  },
];

export function MavFooter() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', padding: '72px 0 32px', marginTop: 64 }}>
      <div className="mav-container">
        <div className="mav-footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1fr', gap: 56, marginBottom: 72 }}>
          <div>
            <MavLogo size={18} />
            <p className="mav-body" style={{ maxWidth: 280, marginTop: 20, color: 'var(--muted)', fontSize: 13.5 }}>
              The intelligence layer between companies and their growth. Built with evidence you can defend.
            </p>
            <div style={{ marginTop: 24 }}>
              <CertBadges small />
            </div>
          </div>
          {footerCols.map(col => (
            <div key={col.title}>
              <div className="mav-eyebrow" style={{ marginBottom: 16 }}>{col.title}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.items.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} style={{ fontSize: 13.5, color: 'var(--dim)' }}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mav-footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: '1px solid var(--line)' }}>
          <span className="mav-caption">© 2026 Mavera, Inc. All rights reserved.</span>
          <span className="mav-caption" style={{ fontFamily: 'var(--mono)', letterSpacing: '0.04em' }}>Receipts, not vibes.</span>
        </div>
      </div>
    </footer>
  );
}
