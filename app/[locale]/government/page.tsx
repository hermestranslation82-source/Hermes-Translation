import Link from 'next/link';
import { type Locale } from '@/data/site';
import { createMetadata } from '@/lib/seo';
import { getGovernmentBodies } from '@/lib/cms';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return createMetadata({ locale, path: '/government', title: locale === 'ar' ? 'الهيئات الحكومية' : 'Government Services Hub', description: 'Translation guidance for Egyptian government authorities.' });
}

export default async function GovernmentPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const bodiesList = await getGovernmentBodies();
  return (
    <section className="section-pad bg-white">
      <div className="container-padded">
        <h1 className="mb-10 font-cairo text-5xl font-black text-brand-red">{locale === 'ar' ? 'الهيئات الحكومية' : 'Government Services Hub'}</h1>
        <div className="grid gap-5 md:grid-cols-2">
          {bodiesList.map((body: any) => (
            <Link key={body.slug} href={`/${locale}/government/${body.slug}`} className="card p-6 hover:border-brand-red">
              <h2 className="text-xl font-black">{body.title[locale]}</h2>
              <p className="mt-3 leading-7 text-zinc-600">{body.excerpt[locale]}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
