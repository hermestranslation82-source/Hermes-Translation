import { notFound } from 'next/navigation';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { type Locale } from '@/data/site';
import { createMetadata } from '@/lib/seo';
import { getGovernmentBodies, serializeLexical } from '@/lib/cms';

export async function generateStaticParams() {
  const bodiesList = await getGovernmentBodies();
  return bodiesList.flatMap((body: any) => ['ar', 'en'].map((locale) => ({ locale, body: body.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; body: string }> }) {
  const { locale, body: bodySlug } = await params;
  const bodiesList = await getGovernmentBodies();
  const body = bodiesList.find((item: any) => item.slug === bodySlug);
  
  const seoTitle = (body as any)?.metaTitle?.[locale] || body?.title[locale] || 'Government body';
  const seoDesc = (body as any)?.metaDesc?.[locale] || body?.excerpt[locale] || 'Government translation guidance.';
  
  return createMetadata({ 
    locale, 
    path: `/government/${bodySlug}`, 
    title: seoTitle, 
    description: seoDesc,
    keywords: (body as any)?.keywords?.[locale] || undefined,
    canonicalUrl: (body as any)?.canonicalUrl || undefined,
    geo: (body as any)?.geo && ((body as any).geo.targetRegion || (body as any).geo.latitude) ? {
      targetRegion: (body as any).geo.targetRegion,
      latitude: (body as any).geo.latitude,
      longitude: (body as any).geo.longitude
    } : undefined
  });
}

export default async function GovernmentDetailPage({ params }: { params: Promise<{ locale: Locale; body: string }> }) {
  const { locale, body: bodySlug } = await params;
  const bodiesList = await getGovernmentBodies();
  const body = bodiesList.find((item: any) => item.slug === bodySlug);
  if (!body) notFound();

  return (
    <section className="section-pad bg-white">
      <div className="container-padded max-w-4xl">
        <Breadcrumb locale={locale} items={[{ label: locale === 'ar' ? 'الهيئات الحكومية' : 'Government', href: '/government' }, { label: body.title[locale] }]} />
        <h1 className="font-cairo text-5xl font-black text-brand-red">{body.title[locale]}</h1>
        <p className="mt-6 text-lg leading-9 text-zinc-700">{body.excerpt[locale]} {locale === 'ar' ? 'نساعدك على تجهيز الترجمة بالشكل المناسب قبل خطوة التصديق أو التقديم.' : 'We help prepare authority-ready translations before attestation or submission.'}</p>
        
        {(body as any).content_ar || (body as any).content_en ? (
          <div 
            className="prose prose-lg mt-10 max-w-4xl leading-9 text-zinc-800"
            dangerouslySetInnerHTML={{ 
              __html: serializeLexical(locale === 'ar' ? (body as any).content_ar : (body as any).content_en) 
            }} 
          />
        ) : null}
      </div>
    </section>
  );
}
