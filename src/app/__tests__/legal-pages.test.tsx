import React from 'react';
import { render, screen } from '@testing-library/react';
import ImpressumPage from '../impressum/page';
import DatenschutzPage from '../datenschutz/page';
import sitemap from '../sitemap';
import { COMPANY } from '@/data/company';

describe('Impressum', () => {
  it('shows provider, owner, address and email in German and English', () => {
    const { container } = render(<ImpressumPage />);
    const text = container.textContent ?? '';
    for (const value of Object.values(COMPANY)) {
      expect(text).toContain(value);
    }
    expect(container.querySelector('section[lang="de"]')).not.toBeNull();
    expect(container.querySelector('section[lang="en"]')).not.toBeNull();
    expect(screen.getByText('Verantwortlich für den Inhalt')).toBeInTheDocument();
  });
});

describe('Datenschutzerklärung', () => {
  it('names every service that receives visitor data', () => {
    const { container } = render(<DatenschutzPage />);
    const text = container.textContent ?? '';
    for (const service of [
      'Vercel',
      'nominatim.openstreetmap.org',
      'router.project-osrm.org',
      'api.github.com',
      'Google',
    ]) {
      expect(text).toContain(service);
    }
  });

  it('has the headings an Art. 13 GDPR notice needs', () => {
    render(<DatenschutzPage />);
    for (const heading of [
      'Verantwortlicher',
      'Kontaktformular und E-Mail',
      'Ihre Rechte',
      'Beschwerde',
    ]) {
      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
    }
  });
});

describe('sitemap', () => {
  it('lists both legal pages', () => {
    const urls = sitemap().map((entry) => entry.url);
    expect(urls).toContain('https://www.liviuionesi.com/impressum');
    expect(urls).toContain('https://www.liviuionesi.com/datenschutz');
  });
});
