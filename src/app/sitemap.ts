import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/siteConfig';
import { servicesData } from '@/data/servicesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;
  const currentDate = new Date().toISOString();

  // Core Landing and Studio Index Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/#work`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#pricing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/#process`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  // 6 Dedicated SEO Service Landing Pages
  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Portfolio Flagship Case Studies
  const projectRoutes: MetadataRoute.Sitemap = siteConfig.realProjects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.95,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
