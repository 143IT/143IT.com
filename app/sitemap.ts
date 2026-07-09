import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://143it.com'; // Update with your actual domain

  // Static pages
  const staticPages = [
    '',
    '/services',
    '/blog',
    '/about',
    '/contact',
    '/pricing',
    '/case-studies',
    '/products/azure-vm-manager',
    '/products/azure-vm-manager/security',
    '/products/azure-vm-manager/support',
    '/resources',
    '/legal/privacy',
    '/legal/terms',
    '/services/managed-it',
    '/services/cloud-modernization',
    '/services/automation-devops',
    '/services/ai-integration',
    '/services/security-compliance',
  ];

  // Blog articles
  const blogPages = [
    '/blog/infrastructure-as-code-guide-2024',
    '/blog/self-healing-infrastructure',
  ];

  // Generate sitemap entries
  const routes = [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1.0 : path.startsWith('/services') ? 0.9 : 0.8,
    })),
    ...blogPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  return routes;
}
