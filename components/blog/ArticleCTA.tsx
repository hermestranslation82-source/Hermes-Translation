import Link from 'next/link';
import type { Locale } from '@/data/site';

export function ArticleCTA({ locale }: { locale: Locale }) {
  return (
    <div className="rounded-lg bg-brand-red p-6 text-white">
      <h2 className="text-2xl font-black">{locale === 'ar' ? 'تحتاج هذا المستند مترجماً؟' : 'Need this document translated?'}</h2>
      <Link href={`/${locale}/quote`} className="mt-4 inline-flex rounded-md bg-white px-4 py-2 font-bold text-brand-red">{locale === 'ar' ? 'احصل على عرض سعر' : 'Get a free quote'}</Link>
    </div>
  );
}
