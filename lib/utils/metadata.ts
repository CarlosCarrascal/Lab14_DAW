import { Metadata } from 'next';
import type { PageMetadata } from '../types/metadata';

/**
 * Base URL for the site
 */
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

/**
 * Default site name
 */
const SITE_NAME = 'Mi Sitio Optimizado';

/**
 * Generate consistent metadata object for pages
 */
export function generateMetadata(config: Partial<PageMetadata>): Metadata {
  const {
    title = SITE_NAME,
    description = 'Aprende sobre optimización SEO y rendimiento en Next.js',
    keywords = [],
    openGraph,
    twitter,
    robots,
  } = config;

  return {
    title,
    description,
    keywords,
    openGraph: openGraph ? {
      title: openGraph.title,
      description: openGraph.description,
      images: openGraph.images,
      type: openGraph.type,
      locale: openGraph.locale || 'es_ES',
      siteName: openGraph.siteName || SITE_NAME,
    } : undefined,
    twitter: twitter ? {
      card: twitter.card,
      title: twitter.title,
      description: twitter.description,
      images: twitter.images,
    } : undefined,
    robots: robots ? {
      index: robots.index ?? true,
      follow: robots.follow ?? true,
    } : undefined,
  };
}

/**
 * Merge base metadata with page-specific metadata
 */
export function mergeMetadata(
  base: Partial<PageMetadata>,
  page: Partial<PageMetadata>
): Metadata {
  return generateMetadata({
    ...base,
    ...page,
    keywords: [...(base.keywords || []), ...(page.keywords || [])],
    openGraph: page.openGraph ? {
      ...base.openGraph,
      ...page.openGraph,
    } as PageMetadata['openGraph'] : base.openGraph,
    twitter: page.twitter ? {
      ...base.twitter,
      ...page.twitter,
    } as PageMetadata['twitter'] : base.twitter,
  });
}

/**
 * Generate Open Graph image URL
 */
export function generateOgImageUrl(path: string): string {
  return `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Generate canonical URL for a page
 */
export function generateCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_URL}${cleanPath}`;
}

/**
 * Validate and sanitize URL for sitemap
 */
export function sanitizeUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.toString();
  } catch {
    // If URL is invalid, return base URL
    return BASE_URL;
  }
}
