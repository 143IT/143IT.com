import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-posts';

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
    '/products/azure-vm-manager/demo',
    '/products/azure-vm-manager/security',
    '/products/azure-vm-manager/support',
    '/resources',
    '/resources/ai-search-measurement',
    '/legal/privacy',
    '/legal/terms',
    '/services/managed-it',
    '/services/cloud-modernization',
    '/services/automation-devops',
    '/services/ai-integration',
    '/services/security-compliance',
  ];

  // Generate sitemap entries
  const routes = [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === '/blog' ? 'daily' as const : 'monthly' as const,
      priority: path === '' ? 1.0 : path.startsWith('/services') ? 0.9 : 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}${post.href}`,
      lastModified: new Date(post.lastReviewed),
      changeFrequency: post.status === 'current' ? 'weekly' as const : 'yearly' as const,
      priority: 0.7,
    })),
  ];

  return routes;
}
