import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, type Locale } from '@/data/site';
import { SectionTitle } from './ServicesGrid';

export function BlogPreview({ locale }: { locale: Locale }) {
  return (
    <section className="section-pad bg-[#FAF8F8]">
      <div className="container-padded">
        <SectionTitle locale={locale} title={{ ar: 'أحدث المقالات والأدلة', en: 'Latest Translation Guides' }} />
        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article key={post.slug} className="card overflow-hidden">
              <div className="relative aspect-video">
                <Image src={`https://picsum.photos/seed/hermes-${index}/700/420`} alt={post.title[locale]} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <time className="text-sm font-bold text-brand-red">{post.date}</time>
                <h3 className="mt-3 text-xl font-black">{post.title[locale]}</h3>
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
