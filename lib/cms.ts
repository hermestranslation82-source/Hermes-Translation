import { blogPosts, company, services, embassies, guides, governmentBodies, processSteps, faqs } from '@/data/site';
import { supabase } from './supabase';

export async function getBlogPosts() {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('posts').select('*').order('date', { ascending: false });
      if (!error && data && data.length > 0) {
        return data.map((post: any) => ({
          slug: post.slug,
          title: { ar: post.title_ar, en: post.title_en },
          excerpt: { ar: post.excerpt_ar || '', en: post.excerpt_en || '' },
          date: post.date ? post.date.slice(0, 10) : new Date().toISOString().slice(0, 10),
          author: { ar: post.author_ar || 'هيرميس للترجمة المعتمدة', en: post.author_en || 'Hermes Certified Translations' },
          videoUrl: post.videoUrl || '',
          tags: post.tags || []
        }));
      }
    } catch (e) {
      console.error('Supabase fetch error:', e);
    }
  }
  return blogPosts;
}

export async function getBlogPostBySlug(slug: string) {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('posts').select('*').eq('slug', slug).single();
      if (!error && data) {
        const post = data;
        return {
          slug: post.slug,
          title: { ar: post.title_ar, en: post.title_en },
          excerpt: { ar: post.excerpt_ar || '', en: post.excerpt_en || '' },
          date: post.date ? post.date.slice(0, 10) : new Date().toISOString().slice(0, 10),
          author: { ar: post.author_ar || 'هيرميس للترجمة المعتمدة', en: post.author_en || 'Hermes Certified Translations' },
          videoUrl: post.videoUrl || '',
          tags: post.tags || [],
          content_ar: post.content_ar,
          content_en: post.content_en,
          metaTitle: { ar: post.metaTitle_ar || '', en: post.metaTitle_en || '' },
          metaDesc: { ar: post.metaDesc_ar || '', en: post.metaDesc_en || '' },
          keywords: { ar: post.keywords_ar || '', en: post.keywords_en || '' },
          canonicalUrl: post.canonicalUrl || '',
          geo: {
            targetRegion: post.targetRegion || '',
            latitude: post.latitude || '',
            longitude: post.longitude || '',
            locale: post.locale || ''
          }
        };
      }
    } catch (e) {
      console.error('Supabase fetch error:', e);
    }
  }

  const staticPost = blogPosts.find((item) => item.slug === slug);
  if (staticPost) {
    return {
      ...staticPost,
      content_ar: null,
      content_en: null
    };
  }
  return null;
}

export function serializeLexical(node: any): string {
  // If we move away from Lexical to simple HTML, just return the string if it's already HTML
  if (typeof node === 'string') return node;
  return '';
}

export async function getSiteSettings() {
  return {
    name: company.name,
    tagline: company.tagline,
    phone: company.phone,
    email: company.email,
    whatsapp: company.whatsapp,
    address: company.address,
    branches: company.branches,
    googleAnalyticsId: '',
    metaTitleSuffix: { ar: ` | ${company.name.ar}`, en: ` | ${company.name.en}` }
  };
}

export async function getServices() {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('services').select('*').order('created_at', { ascending: true });
      if (!error && data && data.length > 0) {
        return data.map((item: any) => ({
          slug: item.slug,
          title: { ar: item.title_ar, en: item.title_en },
          excerpt: { ar: item.excerpt_ar || '', en: item.excerpt_en || '' },
          icon: item.icon || 'FileText',
          content_ar: item.content_ar,
          content_en: item.content_en,
          metaTitle: { ar: item.metaTitle_ar || '', en: item.metaTitle_en || '' },
          metaDesc: { ar: item.metaDesc_ar || '', en: item.metaDesc_en || '' },
          keywords: { ar: item.keywords_ar || '', en: item.keywords_en || '' },
          canonicalUrl: item.canonicalUrl || '',
          geo: {
            targetRegion: item.targetRegion || '',
            latitude: item.latitude || '',
            longitude: item.longitude || '',
            locale: item.locale || ''
          }
        }));
      }
    } catch (e) {
      console.error('Supabase fetch error for services:', e);
    }
  }
  return services;
}

export async function getEmbassies() {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('embassies').select('*').order('created_at', { ascending: true });
      if (!error && data && data.length > 0) {
        return data.map((item: any) => ({
          slug: item.slug,
          title: { ar: item.title_ar, en: item.title_en },
          excerpt: { ar: item.excerpt_ar || '', en: item.excerpt_en || '' },
          flag: item.flag || '🌐',
          content_ar: item.content_ar,
          content_en: item.content_en,
          metaTitle: { ar: item.metaTitle_ar || '', en: item.metaTitle_en || '' },
          metaDesc: { ar: item.metaDesc_ar || '', en: item.metaDesc_en || '' },
          keywords: { ar: item.keywords_ar || '', en: item.keywords_en || '' },
          canonicalUrl: item.canonicalUrl || '',
          geo: {
            targetRegion: item.targetRegion || '',
            latitude: item.latitude || '',
            longitude: item.longitude || '',
            locale: item.locale || ''
          }
        }));
      }
    } catch (e) {
      console.error('Supabase fetch error for embassies:', e);
    }
  }
  return embassies;
}

export async function getGuides() {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('guides').select('*').order('created_at', { ascending: true });
      if (!error && data && data.length > 0) {
        return data.map((item: any) => ({
          slug: item.slug,
          title: { ar: item.title_ar, en: item.title_en },
          excerpt: { ar: item.excerpt_ar || '', en: item.excerpt_en || '' },
          content_ar: item.content_ar,
          content_en: item.content_en,
          metaTitle: { ar: item.metaTitle_ar || '', en: item.metaTitle_en || '' },
          metaDesc: { ar: item.metaDesc_ar || '', en: item.metaDesc_en || '' },
          keywords: { ar: item.keywords_ar || '', en: item.keywords_en || '' },
          canonicalUrl: item.canonicalUrl || '',
          geo: {
            targetRegion: item.targetRegion || '',
            latitude: item.latitude || '',
            longitude: item.longitude || '',
            locale: item.locale || ''
          }
        }));
      }
    } catch (e) {
      console.error('Supabase fetch error for guides:', e);
    }
  }
  return guides;
}

export async function getGovernmentBodies() {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('government_bodies').select('*').order('created_at', { ascending: true });
      if (!error && data && data.length > 0) {
        return data.map((item: any) => ({
          slug: item.slug,
          title: { ar: item.title_ar, en: item.title_en },
          excerpt: { ar: item.excerpt_ar || '', en: item.excerpt_en || '' },
          content_ar: item.content_ar,
          content_en: item.content_en,
          metaTitle: { ar: item.metaTitle_ar || '', en: item.metaTitle_en || '' },
          metaDesc: { ar: item.metaDesc_ar || '', en: item.metaDesc_en || '' },
          keywords: { ar: item.keywords_ar || '', en: item.keywords_en || '' },
          canonicalUrl: item.canonicalUrl || '',
          geo: {
            targetRegion: item.targetRegion || '',
            latitude: item.latitude || '',
            longitude: item.longitude || '',
            locale: item.locale || ''
          }
        }));
      }
    } catch (e) {
      console.error('Supabase fetch error for government_bodies:', e);
    }
  }
  return governmentBodies;
}

export async function getFAQs() {
  return faqs;
}

export async function getProcessSteps() {
  return processSteps;
}

