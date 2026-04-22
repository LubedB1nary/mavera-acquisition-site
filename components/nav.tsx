'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MavLogo } from './logo';
import { ArrowRight } from './icons';

const platformCols = [
  {
    title: 'Agents', items: [
      ['/agents', 'Index · all agents'],
      ['/agents/maven', 'Maven · generalized assistant'],
      ['/agents/sales', 'Sales · 7-agent flywheel'],
      ['/agents/research', 'Research · deep 5-phase'],
      ['/agents/content', 'Content · brand-voice writing'],
      ['/agents/meetings', 'Meetings · record · extract'],
      ['/agents/market', 'Market intel · signals'],
      ['/agents/focus', 'Focus groups · synthetic panels'],
      ['/agents/ops', 'Ops · CRM · automations'],
      ['/agents/science', 'Science · ML training'],
    ] as [string, string][],
  },
  {
    title: 'Data', items: [
      ['/synthetic', 'Synthetic · marketing & science'],
      ['/trust', 'Privacy & evidence layer'],
    ] as [string, string][],
  },
  {
    title: 'Surfaces', items: [
      ['/outcomes', 'Outcomes · long-running goals'],
      ['/integrations', 'Integrations · 60+ MCP servers'],
      ['/features', 'Platform overview'],
      ['/api-docs', 'API · OpenAI-compatible'],
    ] as [string, string][],
  },
];

export function MavNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: null, label: 'Platform', hasMenu: true },
    { href: '/pricing', label: 'Pricing', hasMenu: false },
    { href: '/trust', label: 'Trust', hasMenu: false },
    { href: '/about', label: 'About', hasMenu: false },
  ];

  return (
    <header
      style={{
        position: 'sticky', top: 0, zIndex: 40,
        backdropFilter: 'blur(18px) saturate(1.3)', WebkitBackdropFilter: 'blur(18px) saturate(1.3)',
        background: 'rgba(7,8,10,0.72)',
        borderBottom: '1px solid var(--line)',
      }}
      onMouseLeave={() => setMenuOpen(false)}
    >
      <div className="mav-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <Link href="/" style={{ cursor: 'pointer' }}>
          <MavLogo size={18} />
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {navItems.map(item => (
            <span
              key={item.label}
              onMouseEnter={() => item.hasMenu ? setMenuOpen(true) : setMenuOpen(false)}
              onClick={() => item.hasMenu ? setMenuOpen(!menuOpen) : setMenuOpen(false)}
              style={{
                cursor: 'pointer', padding: '8px 14px', fontSize: 13.5, borderRadius: 6,
                color: item.href && pathname.startsWith(item.href) ? 'var(--text)' : 'var(--dim)',
                background: (item.href && pathname.startsWith(item.href)) || (item.hasMenu && menuOpen)
                  ? 'rgba(255,255,255,0.04)' : 'transparent',
                transition: 'color .15s, background .15s',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}
            >
              {item.href ? <Link href={item.href} style={{ color: 'inherit' }}>{item.label}</Link> : item.label}
              {item.hasMenu && <span style={{ fontSize: 9, color: 'var(--muted)' }}>▾</span>}
            </span>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <a href="#" className="mav-btn mav-btn--ghost mav-btn--sm">Sign in</a>
          <a href="#" className="mav-btn mav-btn--primary mav-btn--sm">Start free <ArrowRight size={12} /></a>
        </div>
      </div>

      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(7,8,10,0.96)', backdropFilter: 'blur(18px)',
          borderBottom: '1px solid var(--line)',
        }}>
          <div className="mav-container" style={{ padding: '28px 0 32px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 56 }}>
            {platformCols.map(col => (
              <div key={col.title}>
                <div className="mav-eyebrow" style={{ marginBottom: 14 }}>{col.title}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {col.items.map(([href, label]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        style={{
                          display: 'block', padding: '7px 10px', margin: '0 -10px',
                          fontSize: 13.5, color: pathname === href ? 'var(--text)' : 'var(--dim)',
                          cursor: 'pointer', borderRadius: 6, transition: 'background .12s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
                        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
