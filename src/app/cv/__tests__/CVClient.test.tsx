import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useSearchParams } from 'next/navigation';

import CVClient from '../CVClient';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

const mockUseSearchParams = useSearchParams as jest.Mock;

function withQuery(query: string) {
  mockUseSearchParams.mockReturnValue(new URLSearchParams(query));
}

describe('CVClient', () => {
  beforeEach(() => {
    document.title = 'CV | Liviu Ionesi';
    window.print = jest.fn();
  });

  /** Renders the CV, clicks its print button, and returns the suggested name. */
  async function printedFileName(query: string, buttonLabel = 'Download resume') {
    withQuery(query);
    render(<CVClient />);
    // The button label is prefixed with a printer emoji, hence the regex.
    await userEvent.click(screen.getByRole('button', { name: new RegExp(buttonLabel, 'i') }));
    return document.title;
  }

  it('renders the CV and prints it under a language-specific name', async () => {
    expect(await printedFileName('')).toBe('Liviu_Ionesi-CV-EN');
    expect(window.print).toHaveBeenCalled();
    expect(screen.getByRole('heading', { name: /liviu ionesi/i })).toBeInTheDocument();
  });

  it('names the German CV differently from the English one', async () => {
    expect(await printedFileName('lang=de', 'Lebenslauf herunterladen')).toBe('Liviu_Ionesi-CV-DE');
  });

  // Two CVs that hold different content must never share one file name.
  it('puts every content option that differs from the default into the name', async () => {
    expect(await printedFileName('detail=detailed&projects=false&theme=ide')).toBe(
      'Liviu_Ionesi-CV-EN-detailed-ide-noprojects'
    );
  });

  it('leaves the default options out of the name', async () => {
    expect(
      await printedFileName('detail=brief&projects=true&languages=true&certifications=true')
    ).toBe('Liviu_Ionesi-CV-EN');
  });
});
