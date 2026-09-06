import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { FAQAccordion } from '@/components/shared/FAQAccordion';
import { type Locale } from '@/data/site';
import { createMetadata } from '@/lib/seo';
import { getGuides, getFAQs, serializeLexical } from '@/lib/cms';

export async function generateStaticParams() {
  const guidesList = await getGuides();
  return guidesList.flatMap((guide: any) => ['ar', 'en'].map((locale) => ({ locale, guide: guide.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; guide: string }> }) {
  const { locale, guide: guideSlug } = await params;
  const guidesList = await getGuides();
  const guide = guidesList.find((item: any) => item.slug === guideSlug);
  
  const seoTitle = (guide as any)?.metaTitle?.[locale] || guide?.title[locale] || 'Guide';
  const seoDesc = (guide as any)?.metaDesc?.[locale] || guide?.excerpt[locale] || 'Certified translation guide.';
  
  return createMetadata({ 
    locale, 
    path: `/guides/${guideSlug}`, 
    title: seoTitle, 
    description: seoDesc,
    keywords: (guide as any)?.keywords?.[locale] || undefined,
    canonicalUrl: (guide as any)?.canonicalUrl || undefined,
    geo: (guide as any)?.geo && ((guide as any).geo.targetRegion || (guide as any).geo.latitude) ? {
      targetRegion: (guide as any).geo.targetRegion,
      latitude: (guide as any).geo.latitude,
      longitude: (guide as any).geo.longitude
    } : undefined
  });
}

export default async function GuideDetailPage({ params }: { params: Promise<{ locale: Locale; guide: string }> }) {
  const { locale, guide: guideSlug } = await params;
  const guidesList = await getGuides();
  const guide = guidesList.find((item: any) => item.slug === guideSlug);
  if (!guide) notFound();

  const faqsList = await getFAQs();

  return (
    <article className="section-pad bg-white">
      <div className="container-padded">
        <Breadcrumb locale={locale} items={[{ label: locale === 'ar' ? 'الأدلة' : 'Guides', href: '/guides' }, { label: guide.title[locale] }]} />
        <p className="mb-3 font-bold text-brand-gold">{locale === 'ar' ? 'آخر تحديث: 6 يونيو 2026' : 'Last updated: June 6, 2026'}</p>
        <h1 className="font-cairo text-4xl font-black text-brand-red md:text-6xl">{guide.title[locale]}</h1>
        <p className="mt-6 max-w-4xl text-lg leading-9 text-zinc-700">{guide.excerpt[locale]} {locale === 'ar' ? 'هذا الدليل يوضح الخطوات والمستندات الأصلية والجهات التي قد تحتاج إليها.' : 'This guide explains the steps, originals checklist, and authorities you may need.'}</p>
        
        {(guide as any).content_ar || (guide as any).content_en ? (
          <div 
            className="prose prose-lg mt-10 max-w-4xl leading-9 text-zinc-800"
            dangerouslySetInnerHTML={{ 
              __html: serializeLexical(locale === 'ar' ? (guide as any).content_ar : (guide as any).content_en) 
            }} 
          />
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <Panel 
              title={locale === 'ar' ? 'خطوات الترجمة' : 'Step-by-step'} 
              items={locale === 'ar'
                ? ['إرسال نسخة واضحة', 'تأكيد تهجئة الأسماء', 'الترجمة والمراجعة والتدقيق', 'الاعتماد والختم والتسليم']
                : ['Send a clear copy', 'Confirm spelling', 'Translate and review', 'Stamp and deliver']
              } 
            />
            <Panel 
              title={locale === 'ar' ? 'الأصول المطلوبة' : 'Required originals'} 
              items={locale === 'ar'
                ? ['المستند الأصلي أو صورة واضحة', 'مطابقة الأسماء مع جواز السفر', 'قائمة متطلبات الجهة المقدم إليها']
                : ['Original document', 'Passport spelling', 'Authority checklist']
              } 
            />
            <Panel 
              title={locale === 'ar' ? 'الجهات المختصة' : 'Government bodies'} 
              items={locale === 'ar'
                ? ['السجل المدني', 'وزارة الخارجية المصرية', 'مكاتب الشهر العقاري والتوثيق']
                : ['Civil Registry', 'Ministry of Foreign Affairs', 'Notary office when applicable']
              } 
            />
          </div>
        )}

        <FAQAccordion locale={locale} faqs={faqsList} />
        <div className="mt-10 rounded-lg bg-brand-red p-8 text-white">
          <h2 className="text-3xl font-black">{locale === 'ar' ? 'تحتاج ترجمة هذا المستند؟' : 'Need this document translated?'}</h2>
          <Link href={`/${locale}/quote`} className="mt-5 inline-flex rounded-md bg-white px-5 py-3 font-bold text-brand-red">{locale === 'ar' ? 'احصل على عرض سعر' : 'Get a free quote'}</Link>
        </div>
      </div>
    </article>
  );
}

function Panel({ title, items }: { title: string; items: string[] }) {
  return <section className="card p-6"><h2 className="text-xl font-black text-brand-red">{title}</h2><ul className="mt-4 grid gap-2 text-sm text-zinc-700">{items.map((item) => <li key={item}>• {item}</li>)}</ul></section>;
}
