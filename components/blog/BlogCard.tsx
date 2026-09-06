import Link from 'next/link';
import type { Locale } from '@/data/site';

export function BlogCard({ locale, post }: { locale: Locale; post: { slug: string; title: { ar: string; en: string }; excerpt: { ar: string; en: string }; date: string } }) {
  return (
    <article className="card overflow-hidden">
      <div className="aspect-video bg-zinc-100" />
      <div className="p-5">
        <time className="text-sm font-bold text-brand-red">{post.date}</time>
        <h2 className="mt-2 text-xl font-black">{post.title[locale]}</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-600">{post.excerpt[locale]}</p>
        <Link href={`/${locale}/blog/${post.slug}`} className="mt-4 inline-flex font-bold text-brand-red">{locale === 'ar' ? 'اقرأ المزيد' : 'Read More'}</Link>
      </div>
    </article>
  );
}
