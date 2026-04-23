'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Mode = 'classic' | 'ascii';

type Ctx = { mode: Mode; setMode: (m: Mode) => void; ready: boolean };

const ModeCtx = createContext<Ctx>({ mode: 'classic', setMode: () => {}, ready: false });

const STORAGE_KEY = 'mav-mode';

export function ModeProvider({ children }: { children: ReactNode }) {
  // pre-hydration the inline script in layout already set the data attribute,
  // so we read it back rather than defaulting to 'classic' (avoid flicker).
  const [mode, setModeState] = useState<Mode>('classic');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const fromAttr = document.documentElement.getAttribute('data-mode') as Mode | null;
    const initial: Mode = fromAttr === 'ascii' ? 'ascii' : 'classic';
    setModeState(initial);
    setReady(true);
  }, []);

  const setMode = (m: Mode) => {
    setModeState(m);
    try {
      localStorage.setItem(STORAGE_KEY, m);
    } catch {}
    document.documentElement.setAttribute('data-mode', m);
  };

  return <ModeCtx.Provider value={{ mode, setMode, ready }}>{children}</ModeCtx.Provider>;
}

export function useMode() {
  return useContext(ModeCtx);
}
