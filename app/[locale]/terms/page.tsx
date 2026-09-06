import type { Locale } from '@/data/site';

export default async function TermsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <section className="section-pad bg-white"><div className="container-padded max-w-3xl"><h1 className="font-cairo text-5xl font-black text-brand-red">{locale === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}</h1><p className="mt-6 leading-8 text-zinc-700">{locale === 'ar' ? 'تخضع الخدمات للاتفاق على السعر والمدة ونوع المستند والجهة المطلوب التقديم لها.' : 'Services are subject to agreed price, turnaround time, document type, and receiving authority requirements.'}</p></div></section>;
}
