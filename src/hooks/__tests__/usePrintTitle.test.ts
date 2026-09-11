import { act, renderHook } from '@testing-library/react';

import { usePrintTitle } from '@/hooks/usePrintTitle';

const PAGE_TITLE = 'CV | Liviu Ionesi';
const PRINT_TITLE = 'Liviu_Ionesi-CV-DE';

function fire(event: 'beforeprint' | 'afterprint') {
  act(() => {
    window.dispatchEvent(new Event(event));
  });
}

describe('usePrintTitle', () => {
  let printSpy: jest.Mock;

  beforeEach(() => {
    document.title = PAGE_TITLE;
    printSpy = jest.fn();
    window.print = printSpy;
  });

  it('uses the print title while printing and puts the page title back after', () => {
    renderHook(() => usePrintTitle(PRINT_TITLE));

    fire('beforeprint');
    expect(document.title).toBe(PRINT_TITLE);

    fire('afterprint');
    expect(document.title).toBe(PAGE_TITLE);
  });

  it('keeps the real page title when beforeprint fires twice', () => {
    renderHook(() => usePrintTitle(PRINT_TITLE));

    // Firefox fires beforeprint again when the preview is regenerated, e.g.
    // after the user changes the paper size.
    fire('beforeprint');
    fire('beforeprint');
    expect(document.title).toBe(PRINT_TITLE);

    fire('afterprint');
    expect(document.title).toBe(PAGE_TITLE);
  });

  it('puts the page title back when the component unmounts mid-print', () => {
    const { unmount } = renderHook(() => usePrintTitle(PRINT_TITLE));

    fire('beforeprint');
    unmount();

    expect(document.title).toBe(PAGE_TITLE);
  });

  it('puts the page title back when the file name changes mid-print', () => {
    const { rerender } = renderHook(({ title }) => usePrintTitle(title), {
      initialProps: { title: PRINT_TITLE },
    });

    fire('beforeprint');
    rerender({ title: 'Liviu_Ionesi-CV-EN' });
    expect(document.title).toBe(PAGE_TITLE);

    fire('beforeprint');
    expect(document.title).toBe('Liviu_Ionesi-CV-EN');

    fire('afterprint');
    expect(document.title).toBe(PAGE_TITLE);
  });

  it('restores an empty page title too', () => {
    document.title = '';
    renderHook(() => usePrintTitle(PRINT_TITLE));

    fire('beforeprint');
    expect(document.title).toBe(PRINT_TITLE);

    fire('afterprint');
    expect(document.title).toBe('');
  });

  it('ignores afterprint when no print was started', () => {
    renderHook(() => usePrintTitle(PRINT_TITLE));

    fire('afterprint');

    expect(document.title).toBe(PAGE_TITLE);
  });

  it('sets the title itself before calling window.print()', () => {
    const { result } = renderHook(() => usePrintTitle(PRINT_TITLE));

    printSpy.mockImplementation(() => {
      // The browser reads document.title when the dialog opens, so the name
      // has to be in place by the time window.print() runs — no beforeprint
      // event needed.
      expect(document.title).toBe(PRINT_TITLE);
    });

    act(() => {
      result.current();
    });

    expect(printSpy).toHaveBeenCalledTimes(1);
    fire('afterprint');
    expect(document.title).toBe(PAGE_TITLE);
  });

  it('leaves the title alone when no print title is given', () => {
    const { result } = renderHook(() => usePrintTitle(''));

    fire('beforeprint');
    expect(document.title).toBe(PAGE_TITLE);

    act(() => {
      result.current();
    });

    expect(printSpy).toHaveBeenCalledTimes(1);
    expect(document.title).toBe(PAGE_TITLE);
  });
});
