import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/cv', '/cv-ats', '/cv-markdown'],
    },
    sitemap: 'https://liviuionesi.com/sitemap.xml',
  };
}
