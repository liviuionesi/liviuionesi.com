import React from 'react';
import { render } from '@testing-library/react';
import robots from '../robots';
import sitemap from '../sitemap';
import Home from '../(app)/page';

jest.mock('next/dynamic', () => () => () => null);
jest.mock('@/components/sections/About', () => ({ __esModule: true, default: () => null }));

describe('SEO links', () => {
  it('uses the www host everywhere, because the bare domain redirects to it', () => {
    expect(robots().sitemap).toBe('https://www.liviuionesi.com/sitemap.xml');
    for (const entry of sitemap()) {
      expect(entry.url.startsWith('https://www.liviuionesi.com')).toBe(true);
    }
  });

  it('names Brevier in the JSON-LD Person block', () => {
    const { container } = render(<Home />);
    const script = container.querySelector('script[type="application/ld+json"]');
    const data = JSON.parse(script?.textContent ?? '{}');
    expect(data.url).toBe('https://www.liviuionesi.com');
    expect(data.worksFor).toMatchObject({ name: 'Brevier', url: 'https://www.brevier.dev' });
    expect(data.sameAs).toContain('https://github.com/liviuionesi');
  });
});
