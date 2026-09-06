import Link from 'next/link';
import { type Locale } from '@/data/site';
import { createMetadata } from '@/lib/seo';
import { getGuides } from '@/lib/cms';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return createMetadata({ locale, path: '/guides', title: locale === 'ar' ? 'دليل خدمات الترجمة' : 'Translation Guides Hub', description: 'Guides for certified document translation in Egypt.' });
}

export default async function GuidesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const guidesList = await getGuides();
  return (
    <section className="section-pad bg-white">
      <div className="container-padded">
        <h1 className="mb-10 font-cairo text-5xl font-black text-brand-red">{locale === 'ar' ? 'دليل الخدمات' : 'Guides Hub'}</h1>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guidesList.map((guide: any) => (
            <Link key={guide.slug} href={`/${locale}/guides/${guide.slug}`} className="card p-6 hover:border-brand-red">
              <h2 className="text-xl font-black">{guide.title[locale]}</h2>
              <p className="mt-3 leading-7 text-zinc-600">{guide.excerpt[locale]}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
