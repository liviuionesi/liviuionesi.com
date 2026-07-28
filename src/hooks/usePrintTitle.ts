import { useEffect } from 'react';

/**
 * Hook to dynamically change the document title when printing.
 * This sets the default suggested filename when saving as PDF or printing.
 */
export function usePrintTitle(printTitle: string) {
  useEffect(() => {
    let originalTitle = '';

    const handleBeforePrint = () => {
      originalTitle = document.title;
      document.title = printTitle;
    };

    const handleAfterPrint = () => {
      if (originalTitle) {
        document.title = originalTitle;
      }
    };

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);

    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, [printTitle]);
}
