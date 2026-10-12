import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mablab.com';
  const routes = [
    '',
    '/why-us',
    '/contact',
    '/privacy-policy',
    '/services/branding',
    '/services/web-development',
    '/services/marketing',
    '/services/social-media',
    '/services/content',
    '/services/video-podcast',
    '/services/market-research',
    '/services/pr-influencer',
    '/services/seo-paid-ads',
    '/services/design',
    '/services/events',
    '/services/marketing-consultancy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.9 : 0.8,
  }));
}
