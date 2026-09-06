import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Check, 
  ChevronDown, 
  Clock, 
  FileText, 
  MapPin, 
  Phone, 
  Send, 
  Shield, 
  Award,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SchemaScript } from '@/components/shared/SchemaScript';
import { type Locale } from '@/data/site';
import { createMetadata } from '@/lib/seo';
import { servicesContent } from '@/data/services-content';

export async function generateStaticParams() {
  const slugs = Object.keys(servicesContent);
  return slugs.flatMap((service) => ['ar', 'en'].map((locale) => ({ locale, service })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; service: string }> }) {
  const { locale, service: serviceSlug } = await params;
  const content = servicesContent[serviceSlug];
  if (!content) return {};

  return createMetadata({ 
    locale, 
    path: `/services/${serviceSlug}`, 
    title: content.metaTitle[locale], 
    description: content.metaDesc[locale]
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ locale: Locale; service: string }> }) {
  const { locale, service: serviceSlug } = await params;
  const content = servicesContent[serviceSlug];
  if (!content) notFound();

  const isRtl = locale === 'ar';
  
  // Define unified steps
  const steps = isRtl ? [
    { num: '1', title: 'أرسل المستندات', desc: 'صورة واضحة أو PDF عبر واتساب أو نموذج عرض السعر' },
    { num: '2', title: 'احصل على عرض سعر', desc: 'خلال دقائق معدودة بناءً على عدد الصفحات واللغة' },
    { num: '3', title: 'الترجمة والمراجعة', desc: 'صياغة قانونية وفنية دقيقة والختم بختم الاعتماد الرسمي' },
    { num: '4', title: 'تسليم الوثائق', desc: 'نسخة PDF فوراً عبر واتساب/إيميل + نسخة مطبوعة من الفرع أو بالشحن' }
  ] : [
    { num: '1', title: 'Send documents', desc: 'Clear photo or PDF via WhatsApp or the quote form' },
    { num: '2', title: 'Get a quote', desc: 'Within minutes based on page count and target language' },
    { num: '3', title: 'Translation & review', desc: 'Precise legal and technical drafting and official certification stamp' },
    { num: '4', title: 'Delivery', desc: 'Instant PDF via WhatsApp/email + stamped hard copy from branch or courier' }
  ];

  // Why choose us points
  const whyUs = isRtl ? [
    'مترجمون معتمدون من وزارة العدل المصرية وتطابق مصطلحي كامل.',
    'ختم اعتماد رسمي مقبول وموثوق لدى كافة السفارات والجهات الحكومية.',
    'تسليم سريع خلال 24-48 ساعة مع توفر خدمة عاجلة نفس اليوم.',
    'فرع مصر الجديدة: عمارات العبور، صلاح سالم، عمارة 31، الدور 14، شقة 3.',
    'فرع ميدان الجيزة: 1 شارع جامعة القاهرة، ميدان الجيزة، الدور الثامن، مكتب 30.',
    'التزام تام بالسرية المطلقة وحماية سرية بيانات ومعلومات عملائنا.'
  ] : [
    'Translators certified by the Egyptian Ministry of Justice with full terminology alignment.',
    'Official certification stamp recognized by all embassies and governmental bodies.',
    'Fast 24-48h delivery with same-day express rush service available.',
    'Heliopolis branch: El-Obour Buildings, Salah Salem, Bldg 31, 14th floor, Apt 3.',
    'Giza branch: 1 Cairo University St., Giza Square, 8th Floor, Office 30.',
    'Full and absolute confidentiality of all client data and documents.'
  ];

  // Dynamic Schemas
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": content.h1[locale],
    "serviceType": content.h1[locale],
    "provider": {
      "@type": "ProfessionalService",
      "name": isRtl ? 'هيرميس للترجمة المعتمدة' : 'Hermes Certified Translations',
      "telephone": "+201501591531",
      "url": "https://hermes-certified.com",
      "logo": "https://hermes-certified.com/logo.png",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": isRtl ? 'عمارات العبور، صلاح سالم، عمارة 31، الدور 14، شقة 3' : 'El-Obour Buildings, Salah Salem, Bldg 31, 14th floor, Apt 3',
          "addressLocality": isRtl ? 'مصر الجديدة، القاهرة' : 'Heliopolis, Cairo',
          "addressCountry": "EG"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": isRtl ? '1 شارع جامعة القاهرة، ميدان الجيزة، الدور الثامن، مكتب 30' : '1 Cairo University St., Giza Square, 8th Floor, Office 30',
          "addressLocality": isRtl ? 'ميدان الجيزة، الجيزة' : 'Giza Square, Giza',
          "addressCountry": "EG"
        }
      ]
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Cairo" },
      { "@type": "AdministrativeArea", "name": "Giza" },
      { "@type": "AdministrativeArea", "name": "Egypt" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q[locale],
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a[locale]
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": isRtl ? 'الرئيسية' : 'Home',
        "item": `https://hermes-certified.com/${locale}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": isRtl ? 'خدماتنا' : 'Services',
        "item": `https://hermes-certified.com/${locale}/services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": content.h1[locale],
        "item": `https://hermes-certified.com/${locale}/services/${serviceSlug}`
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20 font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* JSON-LD Schemas */}
      <SchemaScript data={serviceSchema} />
      <SchemaScript data={faqSchema} />
      <SchemaScript data={breadcrumbSchema} />

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-zinc-900 py-16 md:py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-red/10 via-transparent to-transparent opacity-70"></div>
        <div className="container-padded relative z-10">
          <Breadcrumb 
            locale={locale} 
            items={[
              { label: isRtl ? 'خدماتنا' : 'Services', href: '/services' }, 
              { label: content.h1[locale] }
            ]} 
          />
          
          <div className="grid gap-12 lg:grid-cols-12 items-center mt-6">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="font-cairo text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
                {content.h1[locale]}
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
                {content.opening[locale]}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                  href={`/${locale}/quote`}
                  className="px-8 py-4 bg-brand-red hover:bg-brand-red/90 text-white font-bold rounded-lg shadow-lg hover:shadow-brand-red/20 transform hover:-translate-y-0.5 transition duration-200 flex items-center gap-2 text-base"
                >
                  {isRtl ? 'اطلب عرض سعر مجاني' : 'Request Free Quote'}
                  {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                </Link>
                
                <a 
                  href="https://wa.me/201501591531"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 text-white font-bold rounded-lg shadow-lg transform hover:-translate-y-0.5 transition duration-200 flex items-center gap-2 text-base"
                >
                  <Send className="w-5 h-5 text-emerald-500 fill-emerald-500" />
                  {isRtl ? 'تواصل عبر واتساب' : 'Contact on WhatsApp'}
                </a>
              </div>
            </div>

            {/* Graphic Stamp Sidebar */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center text-center">
                <Image 
                  src="/certified-translation-seal.webp" 
                  alt={isRtl ? 'ختم اعتماد هيرميس للترجمة المعتمدة' : 'Official Hermes Certified Translation Stamp'} 
                  width={220}
                  height={220}
                  className="rounded-full shadow-lg border-2 border-brand-red/20 bg-white"
                  priority
                />
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-brand-red/20 text-brand-red rounded-full text-xs font-bold tracking-wider uppercase mb-1">
                    {isRtl ? 'اعتماد رسمي كامل' : 'Fully Accredited'}
                  </span>
                  <p className="text-sm text-slate-300 font-medium">
                    {isRtl ? 'مقبول لدى السفارات والجهات الرسمية' : 'Accepted by Embassies & Authorities'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Definition Cards */}
      <section className="section-pad py-12 md:py-16">
        <div className="container-padded">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition duration-200">
              <h2 className="font-cairo text-2xl font-bold text-slate-900 border-b-2 border-brand-red pb-3 flex items-center gap-2">
                <FileText className="w-6 h-6 text-brand-red" />
                {content.definitionTitle[locale]}
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-base">
                {content.definitionText[locale]}
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition duration-200">
              <h2 className="font-cairo text-2xl font-bold text-slate-900 border-b-2 border-brand-red pb-3 flex items-center gap-2">
                <Clock className="w-6 h-6 text-brand-red" />
                {content.needTitle[locale]}
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-base">
                {content.needText[locale]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Covered Documents */}
      <section className="section-pad bg-slate-100 py-12 md:py-16">
        <div className="container-padded">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-cairo text-3xl font-black text-slate-950">
              {content.documentsSectionTitle[locale]}
            </h2>
            <div className="w-24 h-1 bg-brand-red mx-auto mt-4 rounded"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {content.categories.map((cat, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition duration-300">
                <div>
                  <div className="w-10 h-10 bg-brand-red/10 text-brand-red rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-cairo text-xl font-bold text-slate-900 mb-4 border-b pb-2">
                    {cat.title[locale]}
                  </h3>
                  <ul className="space-y-3">
                    {cat.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-slate-600 text-sm leading-relaxed">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{isRtl ? item.ar : item.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Working Steps */}
      <section className="section-pad py-12 md:py-16 bg-white">
        <div className="container-padded">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-cairo text-3xl font-black text-slate-950">
              {isRtl ? 'خطوات العمل ومسار الترجمة' : 'Our Professional Workflow'}
            </h2>
            <div className="w-24 h-1 bg-brand-red mx-auto mt-4 rounded"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.num} className="relative p-6 bg-slate-50 border rounded-xl shadow-sm text-center">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-brand-red text-white font-bold rounded-full flex items-center justify-center border-4 border-white shadow-md">
                  {step.num}
                </div>
                <h3 className="font-cairo text-lg font-bold text-slate-900 mt-4 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-pad py-12 md:py-16 bg-slate-100">
        <div className="container-padded">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="font-cairo text-3xl font-black text-slate-950">
                {isRtl ? 'لماذا تختار هيرميس للترجمة؟' : 'Why Choose Hermes Certified Translations?'}
              </h2>
              <div className="w-24 h-1 bg-brand-red rounded"></div>
              
              <div className="grid gap-4 sm:grid-cols-2 mt-6">
                {whyUs.map((point, index) => (
                  <div key={index} className="flex gap-3 bg-white p-4 rounded-lg border shadow-sm">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized Advantage Box */}
            <div className="lg:col-span-4 bg-gradient-to-br from-brand-red to-red-700 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 opacity-40"></div>
              <div className="relative z-10 space-y-4">
                <Award className="w-12 h-12 text-white" />
                <h3 className="font-cairo text-xl font-bold">
                  {isRtl ? 'ميزتنا المتخصصة لهذه الخدمة' : 'Our Specialized Advantage'}
                </h3>
                <p className="text-sm leading-relaxed text-red-50">
                  {content.specialistWhyPoint[locale]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Turnaround Schedule Table */}
      <section className="section-pad py-12 md:py-16 bg-white">
        <div className="container-padded">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-cairo text-3xl font-black text-slate-950">
              {isRtl ? 'مدة تسليم الملفات والخدمة العاجلة' : 'Delivery Turnaround & Express Times'}
            </h2>
            <div className="w-24 h-1 bg-brand-red mx-auto mt-4 rounded"></div>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-slate-200 shadow-md">
            <table className="w-full text-left border-collapse" dir={isRtl ? 'rtl' : 'ltr'}>
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-cairo font-bold text-sm md:text-base text-center border-b border-slate-700">
                    {isRtl ? 'نوع المستند' : 'Document Type'}
                  </th>
                  <th className="p-4 font-cairo font-bold text-sm md:text-base text-center border-b border-slate-700">
                    {isRtl ? 'المدة المعتادة' : 'Standard Turnaround'}
                  </th>
                  <th className="p-4 font-cairo font-bold text-sm md:text-base text-center border-b border-slate-700">
                    {isRtl ? 'خدمة عاجلة' : 'Express/Rush Service'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.turnaroundTable.map((row, index) => (
                  <tr key={index} className="bg-white hover:bg-slate-50 transition duration-150 border-b border-slate-100">
                    <td className="p-4 text-slate-700 font-bold text-sm text-center border-r border-slate-100">
                      {row.docType[locale]}
                    </td>
                    <td className="p-4 text-slate-600 text-sm text-center border-r border-slate-100">
                      {row.standard[locale]}
                    </td>
                    <td className="p-4 text-brand-red font-bold text-sm text-center">
                      {row.rush[locale]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="bg-slate-50 p-4 border-t text-center text-sm font-semibold text-slate-600">
              {isRtl 
                ? 'السعر حسب عدد الصفحات واللغة — اطلب عرض سعر مجاني الآن.'
                : 'Price is calculated based on page count and target language — request a free quote now.'
              }
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQs */}
      <section className="section-pad py-12 md:py-16 bg-slate-100">
        <div className="container-padded max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-cairo text-3xl font-black text-slate-950">
              {isRtl ? 'الأسئلة الشائعة حول الخدمة' : 'Frequently Asked Questions'}
            </h2>
            <div className="w-24 h-1 bg-brand-red mx-auto mt-4 rounded"></div>
          </div>

          <div className="space-y-4">
            {content.faqs.map((faq, index) => (
              <details 
                key={index} 
                className="group bg-white rounded-xl border border-slate-200 shadow-sm p-4 [&_summary::-webkit-details-marker]:hidden open:border-brand-red/30 open:shadow-md transition duration-300"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
                  <h3 className="font-cairo text-base md:text-lg font-bold">
                    {faq.q[locale]}
                  </h3>
                  <span className="shrink-0 rounded-full bg-slate-50 p-1.5 text-slate-800 transition duration-300 group-open:-rotate-180">
                    <ChevronDown className="w-5 h-5 text-brand-red" />
                  </span>
                </summary>
                <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed border-t pt-3">
                  {faq.a[locale]}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Footer Box */}
      <section className="section-pad py-10">
        <div className="container-padded">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-red to-red-700 text-white p-8 md:p-12 shadow-2xl text-center md:text-left md:flex md:items-center md:justify-between md:gap-8">
            <div className="absolute inset-0 bg-white/5 opacity-20"></div>
            <div className="relative z-10 space-y-4 max-w-2xl text-start">
              <h2 className="font-cairo text-3xl md:text-4xl font-black">
                {isRtl ? 'احصل على مستنداتك مترجمة ومعتمدة رسمياً' : 'Get Your Documents Certified Officially'}
              </h2>
              <p className="text-base text-red-50 leading-relaxed">
                {isRtl 
                  ? 'لا تتردد في طلب عرض السعر المجاني وسيقوم فريقنا بالتواصل معك وتأكيد التكلفة ومدة التسليم الدقيقة خلال دقائق.'
                  : 'Get a free, instant quote for your documents. Our support desk answers within minutes to confirm precise timelines and pricing.'
                }
              </p>
            </div>

            <div className="relative z-10 shrink-0 mt-6 md:mt-0 flex flex-wrap gap-4 justify-start">
              <Link 
                href={`/${locale}/quote`}
                className="px-6 py-3.5 bg-white text-brand-red hover:bg-slate-50 font-bold rounded-lg shadow-lg hover:shadow-black/10 transform hover:-translate-y-0.5 transition duration-200 text-base"
              >
                {isRtl ? 'طلب عرض سعر مجاني' : 'Request Free Quote'}
              </Link>
              <a 
                href="https://wa.me/201501591531"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-zinc-950 hover:bg-zinc-900 text-white font-bold rounded-lg shadow-lg transform hover:-translate-y-0.5 transition duration-200 flex items-center gap-2 text-base"
              >
                <Send className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                {isRtl ? 'مستشار الواتساب' : 'WhatsApp Support'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Links */}
      <section className="section-pad py-8 bg-white border-t">
        <div className="container-padded">
          <h2 className="font-cairo text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Shield className="w-5 h-5 text-brand-red" />
            {isRtl ? 'خدمات ترجمة ذات صلة' : 'Related Translation Services'}
          </h2>
          <div className="flex flex-wrap gap-3">
            {content.relatedServices.map((slug) => {
              const related = servicesContent[slug];
              if (!related) return null;
              return (
                <Link 
                  key={slug} 
                  href={`/${locale}/services/${slug}`}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border rounded-lg text-sm text-slate-700 font-semibold transition duration-150"
                >
                  {related.h1[locale]}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
