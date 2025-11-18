/**
 * Type definitions for SEO metadata
 */

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  openGraph: {
    title: string;
    description: string;
    images: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
    type: 'website' | 'article' | 'profile';
    locale?: string;
    siteName?: string;
  };
  twitter?: {
    card: 'summary' | 'summary_large_image';
    title: string;
    description: string;
    images: string[];
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
  };
}

export interface SitemapEntry {
  url: string;
  lastModified?: Date | string;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number; // 0.0 to 1.0
}

export interface ImageConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  quality?: number; // 1-100
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  fill?: boolean;
}
