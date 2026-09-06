import type { Metadata } from 'next';
import type { Locale } from '@/data/site';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://hermes-certified.com').replace(/https?:\/\/91\.108\.113\.135(:3005)?/g, 'https://hermes-certified.com');

export function createMetadata(input: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
  keywords?: string;
  canonicalUrl?: string;
  geo?: {
    targetRegion?: string;
    latitude?: string;
    longitude?: string;
  };
}): Metadata {
  const sanitizedCanonical = input.canonicalUrl
    ? input.canonicalUrl.replace(/https?:\/\/91\.108\.113\.135(:3005)?/g, 'https://hermes-certified.com')
    : undefined;
  
  const sanitizedImage = input.image
    ? input.image.replace(/https?:\/\/91\.108\.113\.135(:3005)?/g, 'https://hermes-certified.com')
    : undefined;

  const url = sanitizedCanonical || `${siteUrl}/${input.locale}${input.path === '/' ? '' : input.path}`;

  const otherMeta: Record<string, string> = {};
  if (input.geo) {
    if (input.geo.targetRegion) otherMeta['geo.region'] = input.geo.targetRegion;
    if (input.geo.latitude && input.geo.longitude) {
      otherMeta['geo.position'] = `${input.geo.latitude};${input.geo.longitude}`;
      otherMeta['ICBM'] = `${input.geo.latitude}, ${input.geo.longitude}`;
    }
  }

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords ? input.keywords.split(',').map(k => k.trim()) : undefined,
    alternates: {
      canonical: url,
      languages: {
        ar: `${siteUrl}/ar${input.path === '/' ? '' : input.path}`,
        en: `${siteUrl}/en${input.path === '/' ? '' : input.path}`,
        'x-default': `${siteUrl}/en${input.path === '/' ? '' : input.path}`
      }
    },
    other: Object.keys(otherMeta).length > 0 ? otherMeta : undefined,
    openGraph: {
      type: 'website',
      title: input.title,
      description: input.description,
      url,
      images: [sanitizedImage || `${siteUrl}/og-image.jpg`],
      locale: input.locale === 'ar' ? 'ar_EG' : 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      images: [sanitizedImage || `${siteUrl}/og-image.jpg`]
    }
  };
}

export function estimateReadingTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}
