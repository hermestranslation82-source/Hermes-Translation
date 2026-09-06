import Link from 'next/link';
import Image from 'next/image';
import { type Locale } from '@/data/site';
import { createMetadata } from '@/lib/seo';
import { getBlogPosts } from '@/lib/cms';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return createMetadata({ locale, path: '/blog', title: locale === 'ar' ? 'مدونة الترجمة المعتمدة' : 'Certified Translation Blog', description: 'Certified translation guides and articles.' });
}

export default async function BlogPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const posts = await getBlogPosts();

  return (
    <section className="section-pad bg-white">
      <div className="container-padded">
        <h1 className="mb-10 font-cairo text-5xl font-black text-brand-red">{locale === 'ar' ? 'المدونة' : 'Blog'}</h1>
        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((post: any, index: number) => (
            <article key={post.slug} className="card overflow-hidden">
              <div className="relative aspect-video">
                <Image src={`https://picsum.photos/seed/blog-${index}/700/420`} alt={post.title[locale]} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <time className="text-sm font-bold text-brand-red">{post.date}</time>
                <h2 className="mt-3 text-xl font-black">{post.title[locale]}</h2>
                <p className="mt-3 leading-7 text-zinc-600">{post.excerpt[locale]}</p>
                <Link href={`/${locale}/blog/${post.slug}`} className="mt-4 inline-flex font-bold text-brand-red">{locale === 'ar' ? 'اقرأ المزيد' : 'Read More'} →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

