'use client';

import { useCallback, useEffect, useRef } from 'react';

/**
 * Makes the browser suggest `printTitle` as the file name when the page is
 * printed or saved as PDF, because browsers derive that name from
 * `document.title`.
 *
 * Returns a `print()` function. Use it for in-app print buttons: it sets the
 * title itself and then calls `window.print()`, so the right name is used even
 * in browsers that never fire `beforeprint`. The event listeners cover the
 * other way in — Ctrl+P and the browser menu.
 *
 * Pass an empty string to turn the hook off.
 */
export function usePrintTitle(printTitle: string) {
  // The page title from before the print started, or null when no print is in
  // flight. A ref, so it survives re-runs of the effect below.
  const savedTitle = useRef<string | null>(null);

  const applyPrintTitle = useCallback(() => {
    if (!printTitle) return;
    // Only remember the title the first time. `beforeprint` can fire twice
    // before `afterprint` (Firefox re-runs it when the preview is
    // regenerated), and saving again would store the print name as the
    // "original" and lose the real title.
    savedTitle.current ??= document.title;
    document.title = printTitle;
  }, [printTitle]);

  const restoreTitle = useCallback(() => {
    if (savedTitle.current === null) return;
    document.title = savedTitle.current;
    savedTitle.current = null;
  }, []);

  useEffect(() => {
    if (!printTitle) return;

    window.addEventListener('beforeprint', applyPrintTitle);
    window.addEventListener('afterprint', restoreTitle);

    return () => {
      window.removeEventListener('beforeprint', applyPrintTitle);
      window.removeEventListener('afterprint', restoreTitle);
      // The print may still be open (the user navigated away, or the file name
      // changed). Put the real title back now, or the tab keeps the print name
      // forever: `afterprint` would land on a listener that never captured it.
      restoreTitle();
    };
  }, [printTitle, applyPrintTitle, restoreTitle]);

  return useCallback(() => {
    applyPrintTitle();
    window.print();
  }, [applyPrintTitle]);
}
