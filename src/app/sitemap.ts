import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';
import { servicesData } from '@/data/services';
import { projectsData } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;
  const currentDate = new Date().toISOString();

  // Core Static Agency Pages
  const staticPages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/work', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/process', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/start-a-project', priority: 0.95, changeFrequency: 'weekly' as const },
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // Dedicated Service Dossier Routes
  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Dedicated Portfolio Case Study Routes
  const projectRoutes: MetadataRoute.Sitemap = projectsData.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.95,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
