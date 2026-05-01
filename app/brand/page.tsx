'use client';

import { useCallback, useState } from 'react';
import { Sidebar } from './_components/sidebar';
import { BRAND, MONO, SANS, SERIF } from './_lib/primitives';
import { ABRIDGED_HIDE_SELECTOR, NAV_ITEMS } from './_lib/nav';

import IdentitySection from './_sections/01-identity';
import VoiceSection from './_sections/02-voice';
import LogoSection from './_sections/03-logo';
import ColorBgSection from './_sections/04-color-bg';
import ColorTextSection from './_sections/05-color-text';
import ProductColorsSection from './_sections/06-product-colors';
import StatusColorsSection from './_sections/07-status-colors';
import TypographySection from './_sections/08-typography';
import IconographySection from './_sections/09-iconography';
import ButtonsSection from './_sections/10-buttons';
import CardsSection from './_sections/11-cards';
import BadgesSection from './_sections/12-badges';
import FormsSection from './_sections/13-forms';
import NavigationSection from './_sections/14-navigation';
import DatavizSection from './_sections/15-dataviz';
import MotionSection from './_sections/16-motion';
import LayoutSection from './_sections/17-layout';
import CodeReferenceSection from './_sections/18-code';
import InteractionStatesSection from './_sections/19-interaction-states';
import ModalsSection from './_sections/20-modals';
import LoadingSection from './_sections/21-loading';
import ToastsSection from './_sections/22-toasts';
import TablesSection from './_sections/23-tables';
import AccessibilitySection from './_sections/24-accessibility';
import ResponsiveSection from './_sections/25-responsive';
import EmailSection from './_sections/26-email';
import MarketingSection from './_sections/27-marketing';
import ProductCopySection from './_sections/28-product-copy';
import IllustrationsSection from './_sections/29-illustrations';
import EmptyStatesSection from './_sections/30-empty-states';
import GlassSection from './_sections/31-glass';
import CompoundSection from './_sections/32-compound';
import ApiDocsSection from './_sections/33-api-docs';
import OgAssetsSection from './_sections/34-og-assets';
import TokensSection from './_sections/35-tokens';
import NumbersSection from './_sections/36-numbers';
import SearchSection from './_sections/37-search';
import OnboardingSection from './_sections/38-onboarding';
import ChartsDeepSection from './_sections/39-charts-deep';
import KeyboardSection from './_sections/40-keyboard';
import MobileSection from './_sections/41-mobile';
import NamingSection from './_sections/42-naming';
import PricingSection from './_sections/43-pricing';
import ErrorHandlingSection from './_sections/44-error-handling';
import TablesAdvSection from './_sections/45-tables-adv';
import DragDropSection from './_sections/46-drag-drop';
import RichTextSection from './_sections/47-rich-text';
import PermissionsSection from './_sections/48-permissions';
import PrintSection from './_sections/49-print';
import ContributingSection from './_sections/50-contributing';

const SECTIONS = [
  IdentitySection, VoiceSection, LogoSection, ColorBgSection, ColorTextSection,
  ProductColorsSection, StatusColorsSection, TypographySection, IconographySection,
  ButtonsSection, CardsSection, BadgesSection, FormsSection, NavigationSection,
  DatavizSection, MotionSection, LayoutSection, CodeReferenceSection,
  InteractionStatesSection, ModalsSection, LoadingSection, ToastsSection,
  TablesSection, AccessibilitySection, ResponsiveSection, EmailSection,
  MarketingSection, ProductCopySection, IllustrationsSection, EmptyStatesSection,
  GlassSection, CompoundSection, ApiDocsSection, OgAssetsSection, TokensSection,
  NumbersSection, SearchSection, OnboardingSection, ChartsDeepSection,
  KeyboardSection, MobileSection, NamingSection, PricingSection,
  ErrorHandlingSection, TablesAdvSection, DragDropSection, RichTextSection,
  PermissionsSection, PrintSection, ContributingSection,
];

export default function BrandPage() {
  const [mode, setMode] = useState<'full' | 'abridged'>('full');
  const [exporting, setExporting] = useState(false);

  const printDoc = useCallback(() => {
    setExporting(true);
    setTimeout(() => {
      window.print();
      const restore = () => {
        setExporting(false);
        window.removeEventListener('afterprint', restore);
      };
      window.addEventListener('afterprint', restore);
      setTimeout(() => setExporting(false), 4000);
    }, 150);
  }, []);

  return (
    <div
      style={{ background: BRAND.bg, minHeight: '100vh', fontFamily: SANS, color: BRAND.text }}
      data-brand-mode={mode}
    >
      <Sidebar mode={mode} onModeChange={setMode} exporting={exporting} onPrint={printDoc} />

      {/* Main content */}
      <div style={{ marginLeft: 240 }} className="brand-content">
        {/* Cover */}
        <div style={{
          maxWidth: 980, margin: '0 auto', padding: '120px 56px 96px',
          borderBottom: `1px solid ${BRAND.hairline}`,
          minHeight: 540, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Aurora bg */}
          <div aria-hidden style={{
            position: 'absolute', top: -100, right: -100,
            width: 480, height: 480, borderRadius: 999,
            background: `radial-gradient(circle, ${BRAND.gold}, transparent 60%)`,
            opacity: 0.18, filter: 'blur(80px)', pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: 14 }}>
            <img src="/mavera-logo.webp" alt="Mavera" width={36} height={36}
              style={{ filter: 'invert(1)', opacity: 0.92 }} />
            <span style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.025em', color: BRAND.text }}>
              Mavera<span style={{ color: BRAND.gold, fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400 }}>.</span>
            </span>
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <p style={{
              fontFamily: MONO, fontSize: 11, color: BRAND.textDim,
              letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 28, margin: '0 0 28px',
            }}>/ brand · the canonical specification</p>
            <h1 style={{
              fontFamily: SANS, fontSize: 88, fontWeight: 500, letterSpacing: '-0.040em',
              lineHeight: 0.95, color: BRAND.text, marginBottom: 34, margin: '0 0 34px',
            }}>
              Brand<br />
              <em style={{
                fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400,
                letterSpacing: '-0.02em', color: BRAND.gold,
              }}>guidelines.</em>
            </h1>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', marginBottom: 32 }}>
              {[`Version 1.0`, 'April 2026', 'Dark-first', `${NAV_ITEMS.length} Sections`].map(t => (
                <span key={t} style={{
                  fontFamily: MONO, fontSize: 10, letterSpacing: '0.13em', textTransform: 'uppercase',
                  color: BRAND.textMed, background: BRAND.surface1,
                  border: `1px solid ${BRAND.hairline}`, borderRadius: 4, padding: '4px 10px',
                }}>{t}</span>
              ))}
            </div>
            <p style={{
              fontSize: 15, fontWeight: 400, color: BRAND.textLow,
              lineHeight: 1.8, maxWidth: 580, margin: 0,
            }}>
              The complete visual language &mdash; identity, voice, color, typography, motion, components, and copywriting &mdash;
              for every Mavera surface. Dark-first by design. Evidence-led by default. Built for an audience that needs to send
              what we ship to a regulator and have it survive scrutiny.
            </p>
          </div>

          <p style={{
            position: 'relative', zIndex: 2,
            fontFamily: MONO, fontSize: 10, color: BRAND.textDim,
            letterSpacing: '0.13em', textTransform: 'uppercase', margin: 0,
          }}>
            Receipts<span style={{ color: BRAND.gold, fontFamily: SERIF, fontStyle: 'italic', textTransform: 'none' }}>,</span> not vibes
            <span style={{ color: BRAND.gold, fontFamily: SERIF, fontStyle: 'italic', textTransform: 'none' }}>.</span>
          </p>
        </div>

        {/* All sections */}
        {SECTIONS.map((SectionComponent, i) => <SectionComponent key={i} />)}

        {/* Doc footer */}
        <div style={{
          maxWidth: 980, margin: '0 auto', padding: '48px 56px 96px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="/mavera-logo.webp" alt="Mavera" width={18} height={18}
              style={{ filter: 'invert(1)', opacity: 0.45 }} />
            <span style={{ fontFamily: MONO, fontSize: 10, color: BRAND.textLow, letterSpacing: '0.04em' }}>
              Mavera Brand Guidelines · v1.0 · {NAV_ITEMS.length} Sections
            </span>
          </div>
          <span style={{ fontFamily: MONO, fontSize: 10, color: BRAND.textGhost }}>
            April 2026 · Confidential
          </span>
        </div>
      </div>

      {/* Mode + print stylesheet */}
      <style>{`
        /* Abridged mode: hide non-essential sections */
        [data-brand-mode="abridged"] section${ABRIDGED_HIDE_SELECTOR
          .split(', ')
          .map((s) => `:not(${s})`)
          .join('')} {
          display: none !important;
        }

        /* Print */
        @media print {
          .no-print { display: none !important; }
          .brand-content { margin-left: 0 !important; }

          @page { size: A4; margin: 18mm 16mm 14mm; }

          body { background: #ffffff !important; color: #1a1a1a !important; }

          *, *::before, *::after {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }

          section { page-break-inside: avoid; break-inside: avoid; }
          h1, h2, h3 { page-break-after: avoid; break-after: avoid; }
          pre { white-space: pre-wrap; page-break-inside: avoid; }
          .brand-content > * { max-width: 100% !important; }
        }

        /* Sidebar scrollbar */
        .brand-sidebar::-webkit-scrollbar { width: 3px; }
        .brand-sidebar::-webkit-scrollbar-track { background: transparent; }
        .brand-sidebar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); }
      `}</style>
    </div>
  );
}
