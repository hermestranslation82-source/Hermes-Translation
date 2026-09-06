import type { Locale } from '@/data/site';

export default async function PrivacyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <Legal title={locale === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'} text={locale === 'ar' ? 'نحافظ على سرية بيانات العملاء والمستندات ولا نستخدمها إلا لتقديم الخدمة المطلوبة.' : 'We protect client information and documents and use them only to provide requested services.'} />;
}

function Legal({ title, text }: { title: string; text: string }) {
  return <section className="section-pad bg-white"><div className="container-padded max-w-3xl"><h1 className="font-cairo text-5xl font-black text-brand-red">{title}</h1><p className="mt-6 leading-8 text-zinc-700">{text}</p></div></section>;
}
