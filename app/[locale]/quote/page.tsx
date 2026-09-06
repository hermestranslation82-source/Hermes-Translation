import { QuoteForm } from '@/components/shared/QuoteForm';
import type { Locale } from '@/data/site';
import { createMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return createMetadata({ locale, path: '/quote', title: locale === 'ar' ? 'طلب عرض سعر ترجمة' : 'Request a Translation Quote', description: 'Submit a certified translation quote request.' });
}

export default async function QuotePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return (
    <section className="section-pad bg-[#FAF8F8]">
      <div className="container-padded max-w-4xl">
        <h1 className="mb-6 font-cairo text-4xl font-black text-brand-red">{locale === 'ar' ? 'طلب عرض سعر' : 'Request a Quote'}</h1>
        <QuoteForm locale={locale} />
      </div>
    </section>
  );
}
