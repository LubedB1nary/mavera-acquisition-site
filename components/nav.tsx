'use client';
import { useEffect, useState } from 'react';
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [mobileOpen]);

  // close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { href: null, label: 'Platform', hasMenu: true },
    { href: '/pricing', label: 'Pricing', hasMenu: false },
    { href: '/trust', label: 'Trust', hasMenu: false },
    { href: '/about', label: 'About', hasMenu: false },
  ];

  return (
    <>
    <header
      style={{
        position: 'sticky', top: 0, zIndex: 40,
        backdropFilter: scrolled ? 'blur(22px) saturate(1.5)' : 'blur(14px) saturate(1.2)',
        WebkitBackdropFilter: scrolled ? 'blur(22px) saturate(1.5)' : 'blur(14px) saturate(1.2)',
        background: scrolled ? 'rgba(7,8,10,0.85)' : 'rgba(7,8,10,0.55)',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'background .25s ease, border-color .25s ease, backdrop-filter .25s ease',
      }}
      onMouseLeave={() => setMenuOpen(false)}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute', left: 0, right: 0, bottom: -1, height: 2,
          background: 'linear-gradient(90deg, var(--gold) 0%, var(--gold-soft) 100%)',
          transform: `scaleX(${progress})`, transformOrigin: '0 50%',
          transition: 'transform .15s linear', opacity: scrolled ? 1 : 0,
          pointerEvents: 'none', boxShadow: '0 0 18px rgba(200,168,255,0.45)',
        }}
      />
      <div className="mav-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64, gap: 12 }}>
        <Link href="/" style={{ cursor: 'pointer', flexShrink: 0 }} onClick={() => setMobileOpen(false)}>
          <MavLogo size={18} />
        </Link>

        {!isMobile && (
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
        )}

        {!isMobile ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <a href="#" className="mav-btn mav-btn--ghost mav-btn--sm">Sign in</a>
            <a href="#" className="mav-btn mav-btn--primary mav-btn--sm">Start free <ArrowRight size={12} /></a>
          </div>
        ) : (
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(o => !o)}
            style={{
              background: 'transparent',
              border: '1px solid var(--line)',
              borderRadius: 8,
              width: 40, height: 40,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'var(--text)',
              transition: 'background .15s, border-color .15s',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              {mobileOpen ? (
                <>
                  <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        )}
      </div>

      {!isMobile && menuOpen && (
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
    {isMobile && mobileOpen && (
        <div
          style={{
            position: 'fixed', top: 64, left: 0, right: 0, bottom: 0,
            background: 'rgba(7,8,10,0.98)',
            backdropFilter: 'blur(22px)',
            WebkitBackdropFilter: 'blur(22px)',
            borderTop: '1px solid var(--line)',
            overflowY: 'auto',
            zIndex: 39,
            animation: 'mav-fadeUp .25s ease both',
          }}
        >
          <div className="mav-container" style={{ padding: '24px 20px 40px', display: 'flex', flexDirection: 'column', gap: 28 }}>
            <nav style={{ display: 'flex', flexDirection: 'column' }}>
              {navItems.filter(i => i.href).map(item => (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    padding: '14px 0',
                    fontSize: 18,
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                    color: pathname.startsWith(item.href!) ? 'var(--text)' : 'var(--dim)',
                    borderBottom: '1px solid var(--line)',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  }}
                >
                  <span>{item.label}</span>
                  <span style={{ color: 'var(--muted)' }}>→</span>
                </Link>
              ))}
            </nav>

            {platformCols.map(col => (
              <div key={col.title}>
                <div className="mav-eyebrow" style={{ marginBottom: 12 }}>{col.title}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {col.items.map(([href, label]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        style={{
                          display: 'block', padding: '10px 0',
                          fontSize: 14.5,
                          color: pathname === href ? 'var(--text)' : 'var(--dim)',
                        }}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 12, borderTop: '1px solid var(--line)' }}>
              <a href="#" className="mav-btn mav-btn--ghost" style={{ justifyContent: 'center' }}>Sign in</a>
              <a href="#" className="mav-btn mav-btn--primary" style={{ justifyContent: 'center' }}>Start free <ArrowRight size={12} /></a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
