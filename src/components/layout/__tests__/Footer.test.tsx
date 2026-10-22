import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('links to the Impressum and the Datenschutzerklärung', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Impressum' })).toHaveAttribute('href', '/impressum');
    expect(screen.getByRole('link', { name: 'Datenschutz' })).toHaveAttribute(
      'href',
      '/datenschutz'
    );
  });

  it('links to brevier.dev without nofollow', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /Brevier/ });
    expect(link).toHaveAttribute('href', 'https://www.brevier.dev');
    expect(link.getAttribute('rel') ?? '').not.toContain('nofollow');
  });
});
