import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { NextResponse } from 'next/server';
import { blogPosts, embassies, guides, services } from '@/data/site';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://hermes-certified.com').replace(/https?:\/\/91\.108\.113\.135(:3005)?/g, 'https://hermes-certified.com');

export const runtime = 'nodejs';

export async function POST() {
  const staticPaths = [
    '',
    '/about',
    '/contact',
    '/quote',
    '/blog',
    '/services',
    '/embassies',
    '/guides',
    ...services.map((item) => `/services/${item.slug}`),
    ...embassies.map((item) => `/embassies/${item.slug}`),
    ...guides.map((item) => `/guides/${item.slug}`)
  ];
  const allPaths = [...staticPaths, ...blogPosts.map((post) => `/blog/${post.slug}`)];
  const lastmod = new Date().toISOString();
  const urls = allPaths.flatMap((pathName) =>
    ['ar', 'en'].map((locale) => `<url>
  <loc>${siteUrl}/${locale}${pathName}</loc>
  <xhtml:link rel="alternate" hreflang="ar" href="${siteUrl}/ar${pathName}"/>
  <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/en${pathName}"/>
  <lastmod>${lastmod}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>${pathName.startsWith('/blog/') ? '0.7' : '0.8'}</priority>
</url>`)
  );
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

  const publicDir = path.join(process.cwd(), 'public');
  await mkdir(publicDir, { recursive: true });
  await writeFile(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8');

  await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(`${siteUrl}/sitemap.xml`)}`).catch(() => null);

  return NextResponse.json({
    ok: true,
    message: 'Sitemap updated and Google ping requested',
    file: '/public/sitemap.xml',
    sitemap
  });
}
