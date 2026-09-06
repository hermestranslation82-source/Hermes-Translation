import { company, type Locale } from '@/data/site';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://hermes-certified.com').replace(/https?:\/\/91\.108\.113\.135(:3005)?/g, 'https://hermes-certified.com');

export function localBusinessSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name[locale],
    image: `${siteUrl}/og-image.jpg`,
    logo: `${siteUrl}/logo.svg`,
    url: siteUrl,
    telephone: company.phone,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address[locale],
      addressLocality: locale === 'ar' ? 'ميدان الجيزة، الجيزة' : 'Giza Square, Giza',
      addressRegion: locale === 'ar' ? 'الجيزة' : 'Giza',
      addressCountry: 'EG'
    },
    areaServed: ['Egypt', 'Cairo', 'Giza'],
    priceRange: '$$'
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a }
    }))
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  slug: string;
  datePublished: string;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    author: { '@type': 'Organization', name: input.author },
    publisher: {
      '@type': 'Organization',
      name: 'Hermes Certified Translations',
      logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.svg` }
    },
    mainEntityOfPage: `${siteUrl}/blog/${input.slug}`
  };
}
