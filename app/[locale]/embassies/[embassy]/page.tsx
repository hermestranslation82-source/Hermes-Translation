import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { FAQAccordion } from '@/components/shared/FAQAccordion';
import { SchemaScript } from '@/components/shared/SchemaScript';
import { flagEmojiMap, type Locale } from '@/data/site';
import { createMetadata } from '@/lib/seo';
import { faqSchema } from '@/lib/schema';
import { getEmbassies, getFAQs, getServices, getGuides, serializeLexical } from '@/lib/cms';

export async function generateStaticParams() {
  const embassiesList = await getEmbassies();
  return embassiesList.flatMap((embassy: any) => ['ar', 'en'].map((locale) => ({ locale, embassy: embassy.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; embassy: string }> }) {
  const { locale, embassy: embassySlug } = await params;
  const embassiesList = await getEmbassies();
  const embassy = embassiesList.find((item: any) => item.slug === embassySlug);
  
  const seoTitle = (embassy as any)?.metaTitle?.[locale] || embassy?.title[locale] || 'Embassy guide';
  const seoDesc = (embassy as any)?.metaDesc?.[locale] || embassy?.excerpt[locale] || 'Embassy certified translation requirements.';
  
  return createMetadata({ 
    locale, 
    path: `/embassies/${embassySlug}`, 
    title: seoTitle, 
    description: seoDesc,
    keywords: (embassy as any)?.keywords?.[locale] || undefined,
    canonicalUrl: (embassy as any)?.canonicalUrl || undefined,
    geo: (embassy as any)?.geo && ((embassy as any).geo.targetRegion || (embassy as any).geo.latitude) ? {
      targetRegion: (embassy as any).geo.targetRegion,
      latitude: (embassy as any).geo.latitude,
      longitude: (embassy as any).geo.longitude
    } : undefined
  });
}

export default async function EmbassyDetailPage({ params }: { params: Promise<{ locale: Locale; embassy: string }> }) {
  const { locale, embassy: embassySlug } = await params;
  const embassiesList = await getEmbassies();
  const embassy = embassiesList.find((item: any) => item.slug === embassySlug);
  if (!embassy) notFound();

  const faqsList = await getFAQs();

  const tHeaders = locale === 'ar'
    ? ['المستند', 'هل الترجمة مطلوبة؟', 'معتمدة ومختومة؟', 'ملاحظات هامة']
    : ['Document', 'Translation Required?', 'Certified?', 'Notes'];

  const docsData = locale === 'ar'
    ? [
        {
          name: 'جواز السفر',
          required: 'نعم، الصفحة الرئيسية',
          certified: 'نعم، معتمدة',
          notes: 'يجب أن يكون سارياً ومقروءاً وتطابق الأسماء في الأوراق الأخرى معه.'
        },
        {
          name: 'شهادة الميلاد',
          required: 'نعم، مطلوبة',
          certified: 'نعم، معتمدة',
          notes: 'يجب مطابقة تهجئة الأسماء تماماً مع جواز السفر.'
        },
        {
          name: 'وثيقة الزواج / الطلاق',
          required: 'حسب الحالة الاجتماعية',
          certified: 'نعم، معتمدة',
          notes: 'يجب مطابقة أسماء الزوجين بالكامل مع جوازات السفر.'
        },
        {
          name: 'كشف حساب بنكي حديث',
          required: 'نعم، مطلوبة',
          certified: 'نعم، معتمدة',
          notes: 'يجب أن يغطي آخر 3 أو 6 أشهر وموقع ومختوم من البنك.'
        },
        {
          name: 'خطاب الموارد البشرية (HR Letter)',
          required: 'نعم، للموظفين',
          certified: 'نعم، معتمدة',
          notes: 'يجب أن يذكر المسمى الوظيفي، الراتب، وتاريخ التعيين ويوجه للسفارة.'
        },
        {
          name: 'الشهادات والمؤهلات الأكاديمية',
          required: 'حسب نوع التأشيرة',
          certified: 'نعم، معتمدة',
          notes: 'تطلب في تأشيرات الدراسة والعمل لمطابقة التخصص.'
        }
      ]
    : [
        {
          name: 'Passport',
          required: 'Yes (Bio page)',
          certified: 'Yes',
          notes: 'Must be valid for at least 6 months and signed.'
        },
        {
          name: 'Birth certificate',
          required: 'Yes',
          certified: 'Yes',
          notes: 'Name spelling must match passport exactly.'
        },
        {
          name: 'Marriage certificate',
          required: 'If applicable',
          certified: 'Yes',
          notes: 'Spouses\' names must match passport spellings.'
        },
        {
          name: 'Bank statement',
          required: 'Yes',
          certified: 'Yes',
          notes: 'Must cover last 3 to 6 months and be officially stamped.'
        },
        {
          name: 'Employment letter',
          required: 'Yes (If employed)',
          certified: 'Yes',
          notes: 'Must specify job title, salary, hire date, and be stamped.'
        },
        {
          name: 'Academic certificate',
          required: 'If applicable',
          certified: 'Yes',
          notes: 'Usually required for study and professional work visas.'
        }
      ];

  const visaCategories = locale === 'ar'
    ? [
        { type: 'تأشيرة سياحة', desc: 'قد تُطلب ترجمة معتمدة للشهادات والوثائق المالية لإثبات الأهلية والعودة.' },
        { type: 'تأشيرة دراسة', desc: 'يتطلب تقديم ترجمة معتمدة للشهادات الدراسية وكشوف الدرجات الأكاديمية.' },
        { type: 'تأشيرة عمل', desc: 'تتطلب ترجمة عقود العمل والفيش الجنائي والمؤهلات المهنية.' },
        { type: 'لم شمل الأسرة', desc: 'تتطلب ترجمة عقود الزواج وشهادات الميلاد وغيرها من وثائق الحالة المدنية.' }
      ]
    : [
        { type: 'Tourist', desc: 'Certified translations may be required for identity, financial, academic, and civil records.' },
        { type: 'Student', desc: 'Required certified translations of academic transcripts, certificates, and diplomas.' },
        { type: 'Work', desc: 'Requires translation of employment contracts, police records, and professional qualifications.' },
        { type: 'Family Reunion', desc: 'Requires translation of marriage and birth certificates and other civil registry papers.' }
      ];

  const flagEmoji = flagEmojiMap[embassy.flag] || embassy.flag;

  return (
    <article className="section-pad bg-white">
      <SchemaScript data={faqSchema(faqsList.map((faq: any) => ({ q: faq.q[locale], a: faq.a[locale] })))} />
      <div className="container-padded">
        <Breadcrumb locale={locale} items={[{ label: locale === 'ar' ? 'السفارات' : 'Embassies', href: '/embassies' }, { label: embassy.title[locale] }]} />
        <p className="mb-3 font-bold text-brand-gold">{locale === 'ar' ? 'آخر تحديث: 6 يونيو 2026' : 'Last updated: June 6, 2026'}</p>
        <h1 className="font-cairo text-4xl font-black text-brand-red md:text-6xl flex flex-wrap items-center gap-3">
          <span>{flagEmoji}</span>
          <span>{locale === 'ar' ? `${embassy.title.ar} - الوثائق المطلوبة مترجمة ومعتمدة` : `${embassy.title.en} - Required Certified Translation Documents`}</span>
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-9 text-zinc-700">{embassy.excerpt[locale]} {locale === 'ar' ? 'تختلف المتطلبات حسب نوع التأشيرة، لذلك ننصح بمراجعة قائمة الجهة قبل الموعد.' : 'Requirements vary by visa type, so review the authority checklist before your appointment.'}</p>
        
        {(embassy as any).content_ar || (embassy as any).content_en ? (
          <div 
            className="prose prose-lg mt-10 max-w-4xl leading-9 text-zinc-800"
            dangerouslySetInnerHTML={{ 
              __html: serializeLexical(locale === 'ar' ? (embassy as any).content_ar : (embassy as any).content_en) 
            }} 
          />
        ) : (
          <>
            <div className="mt-10 overflow-x-auto rounded-lg border">
              <table className="w-full min-w-[720px] text-sm">
                <thead className="bg-brand-red text-white">
                  <tr>
                    <th className="p-4 text-start">{tHeaders[0]}</th>
                    <th className="p-4 text-start">{tHeaders[1]}</th>
                    <th className="p-4 text-start">{tHeaders[2]}</th>
                    <th className="p-4 text-start">{tHeaders[3]}</th>
                  </tr>
                </thead>
                <tbody>
                  {docsData.map((doc) => (
                    <tr key={doc.name} className="border-t">
                      <td className="p-4 font-semibold text-zinc-800">{doc.name}</td>
                      <td className="p-4">{doc.required}</td>
                      <td className="p-4">{doc.certified}</td>
                      <td className="p-4 text-zinc-600">{doc.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <section className="mt-10 grid gap-5 md:grid-cols-4">
              {visaCategories.map((cat) => (
                <div className="card p-5" key={cat.type}>
                  <h2 className="font-black text-brand-red text-lg">{cat.type}</h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{cat.desc}</p>
                </div>
              ))}
            </section>
          </>
        )}

        <FAQAccordion locale={locale} faqs={faqsList} />
        <div className="mt-10 rounded-lg bg-brand-red p-8 text-white">
          <h2 className="text-3xl font-black">{locale === 'ar' ? `ترجم مستنداتك لـ ${embassy.title.ar} الآن` : `Translate Your Documents for ${embassy.title.en} Now`}</h2>
          <Link href={`/${locale}/quote`} className="mt-5 inline-flex rounded-md bg-white px-5 py-3 font-bold text-brand-red">{locale === 'ar' ? 'طلب عرض سعر' : 'Request a Quote'}</Link>
        </div>
        <Related locale={locale} />
      </div>
    </article>
  );
}

async function Related({ locale }: { locale: Locale }) {
  const servicesList = await getServices();
  const guidesList = await getGuides();
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {servicesList[0] && (
        <Link className="rounded-md border border-brand-red/20 px-4 py-2 font-bold text-brand-red" href={`/${locale}/services/${servicesList[0].slug}`}>
          {servicesList[0].title[locale]}
        </Link>
      )}
      {guidesList.slice(0, 2).map((item: any) => (
        <Link className="rounded-md border border-brand-red/20 px-4 py-2 font-bold text-brand-red" href={`/${locale}/guides/${item.slug}`} key={item.slug}>
          {item.title[locale]}
        </Link>
      ))}
    </div>
  );
}
