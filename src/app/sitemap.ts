import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.liviuionesi.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    { url: `${baseUrl}/impressum`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/datenschutz`, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
