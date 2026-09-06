import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { VideoEmbed } from '@/components/blog/VideoEmbed';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SchemaScript } from '@/components/shared/SchemaScript';
import { type Locale } from '@/data/site';
import { articleSchema } from '@/lib/schema';
import { createMetadata, estimateReadingTime } from '@/lib/seo';
import { getBlogPostBySlug, getBlogPosts, serializeLexical } from '@/lib/cms';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.flatMap((post: any) => ['ar', 'en'].map((locale) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const post = await getBlogPostBySlug(slug);
  
  if (!post) return createMetadata({ locale, path: `/blog/${slug}`, title: 'Not Found', description: '' });

  return createMetadata({
    locale,
    path: `/blog/${slug}`,
    title: post.metaTitle?.[locale] || post.title?.[locale] || 'Blog post',
    description: post.metaDesc?.[locale] || post.excerpt?.[locale] || 'Certified translation article.',
    keywords: post.keywords?.[locale] || undefined,
    canonicalUrl: post.canonicalUrl || undefined,
    geo: post.geo && (post.geo.targetRegion || post.geo.latitude) ? {
      targetRegion: post.geo.targetRegion,
      latitude: post.geo.latitude,
      longitude: post.geo.longitude
    } : undefined
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  let contentHtml = '';
  const lexicalContent = locale === 'ar' ? post.content_ar : post.content_en;

  if (lexicalContent) {
    contentHtml = serializeLexical(lexicalContent);
  } else {
    const fallbackBody = locale === 'ar'
      ? 'تحتاج المستندات الرسمية إلى ترجمة دقيقة تحافظ على أسماء الأشخاص والجهات والأرقام والتواريخ كما تظهر في الأصل. عند تقديم ملف لسفارة أو جهة حكومية، يجب أن تكون الترجمة واضحة ومنسقة ومختومة عند الحاجة. ننصح دائماً بمراجعة قائمة الجهة المستقبلة قبل الموعد، وتجهيز نسخة واضحة من المستند الأصلي، ومطابقة كتابة الاسم مع جواز السفر.'
      : 'Official documents require precise translation that preserves names, authorities, numbers, and dates exactly as they appear in the original. When submitting to an embassy or government body, the translation should be clear, formatted, and stamped when required. Always review the receiving authority checklist before appointment day, prepare a clear copy, and match name spelling with the passport.';
    contentHtml = `<p>${fallbackBody}</p>`;
  }

  const plainText = contentHtml.replace(/<[^>]+>/g, ' ');
  const readingTime = estimateReadingTime(plainText);

  return (
    <article className="bg-white">
      <SchemaScript data={articleSchema({ headline: post.title[locale], description: post.excerpt[locale], slug: post.slug, datePublished: post.date, author: post.author[locale] })} />
      <div className="sticky top-0 z-40 h-1 bg-brand-gold no-print" />
      <div className="container-padded grid gap-10 py-14 lg:grid-cols-[1fr_280px]">
        <div>
          <Breadcrumb locale={locale} items={[{ label: locale === 'ar' ? 'المدونة' : 'Blog', href: '/blog' }, { label: post.title[locale] }]} />
          <h1 className="font-cairo text-4xl font-black text-brand-red md:text-6xl">{post.title[locale]}</h1>
          <p className="mt-4 text-sm font-bold text-zinc-500">{post.author[locale]} · {post.date} · {readingTime} min read</p>
          <div className="relative my-8 aspect-video overflow-hidden rounded-lg">
            <Image src={`https://picsum.photos/seed/${post.slug}/1200/700`} alt={post.title[locale]} fill priority sizes="(min-width: 1024px) 820px, 100vw" className="object-cover" />
          </div>
          {post.videoUrl && <div className="mb-8"><VideoEmbed url={post.videoUrl} /></div>}
          <div className="prose max-w-none prose-headings:text-brand-red prose-img:rounded-xl prose-a:text-blue-600 prose-ul:list-disc prose-ol:list-decimal">
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            
            <div className="my-8 rounded-lg bg-brand-red p-6 text-white no-print">
              <h3 className="text-2xl font-black">{locale === 'ar' ? 'تحتاج ترجمة لملفاتك؟' : 'Need your documents translated?'}</h3>
              <Link href={`/${locale}/quote`} className="mt-4 inline-flex rounded-md bg-white px-5 py-3 font-bold text-brand-red shadow-lg hover:bg-slate-50 transition-colors">
                {locale === 'ar' ? 'احصل على تسعير فوري ومجاني' : 'Get a free, instant quote'}
              </Link>
            </div>
          </div>
          <div className="mt-10 card p-6">
            <h2 className="font-black text-brand-red">{locale === 'ar' ? 'هل كان المقال مفيداً؟' : 'Was this article helpful?'}</h2>
            <div className="mt-4 flex gap-3"><button className="rounded-md border px-4 py-2">👍</button><button className="rounded-md border px-4 py-2">👎</button></div>
          </div>
          <div className="mt-10 card p-6">
            <h2 className="font-black">{locale === 'ar' ? 'تعليقات' : 'Comments'}</h2>
            <p className="mt-2 text-sm text-zinc-600">Disqus embed placeholder.</p>
          </div>
        </div>
        <aside className="hidden lg:block">
          <div className="sticky top-28 card p-5">
            <h2 className="font-black text-brand-red">{locale === 'ar' ? 'المحتويات' : 'Table of contents'}</h2>
            <a className="mt-4 block text-sm" href="#">{locale === 'ar' ? 'أهمية الترجمة' : 'Why it matters'}</a>
            {!lexicalContent && <a className="mt-3 block text-sm" href="#">{locale === 'ar' ? 'قائمة المراجعة' : 'Checklist'}</a>}
          </div>
        </aside>
      </div>
    </article>
  );
}
