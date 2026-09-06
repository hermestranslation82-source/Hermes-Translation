import { ContactForm } from '@/components/shared/ContactForm';
import { type Locale } from '@/data/site';
import { createMetadata } from '@/lib/seo';
import { getSiteSettings } from '@/lib/cms';
import { MapPin, Phone, Mail, MessageCircle, Clock, Building2 } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return createMetadata({ 
    locale, 
    path: '/contact', 
    title: locale === 'ar' ? 'تواصل معنا | هيرميس للترجمة المعتمدة' : 'Contact Us | Hermes Certified Translations', 
    description: locale === 'ar' 
      ? 'تواصل مع هيرميس للترجمة المعتمدة - فرع الجيزة: 1 شارع جامعة القاهرة، ميدان الجيزة. هاتف وواتساب: +201501591531'
      : 'Contact Hermes Certified Translations - Giza branch: 1 Cairo University St., Giza Square. Phone & WhatsApp: +201501591531' 
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const siteSettings = await getSiteSettings();
  const isRtl = locale === 'ar';

  return (
    <section className="section-pad bg-zinc-50/60 py-12 md:py-16">
      <div className="container-padded">
        {/* Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-brand-red/10 px-4 py-1 text-sm font-bold text-brand-red mb-3">
            {isRtl ? 'يسعدنا خدمتكم دائماً' : 'Always Here to Help You'}
          </span>
          <h1 className="font-cairo text-3xl md:text-5xl font-black text-zinc-900">
            {isRtl ? 'تواصل معنا' : 'Contact Us'}
          </h1>
          <p className="mt-3 text-base text-zinc-600">
            {isRtl 
              ? 'فريقنا متاح للرد على استفساراتكم وتقديم عروض الأسعار على مدار الساعة' 
              : 'Our team is ready to answer your inquiries and provide quotes 24/7'}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
          {/* Contact Details & Branches */}
          <div className="space-y-6">
            {/* Quick Action Channels */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a 
                href={`tel:${siteSettings.phone.replace(/\s+/g, '')}`}
                className="group flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:border-brand-red hover:shadow-md"
              >
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-500">{isRtl ? 'اتصال مباشر' : 'Direct Call'}</div>
                  <div className="text-base font-bold text-zinc-900">
                    <bdi dir="ltr">{siteSettings.phone}</bdi>
                  </div>
                </div>
              </a>

              <a 
                href={`https://wa.me/${(siteSettings.whatsapp || '201501591531').replace(/[^\d]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-emerald-200 bg-emerald-50/40 p-4 shadow-sm transition hover:border-emerald-500 hover:shadow-md"
              >
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-[#25D366] text-white transition-transform group-hover:scale-105">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-emerald-700">{isRtl ? 'محادثة واتساب' : 'WhatsApp Chat'}</div>
                  <div className="text-base font-bold text-zinc-900">
                    <bdi dir="ltr">{siteSettings.phone}</bdi>
                  </div>
                </div>
              </a>
            </div>

            {/* Main Branch Card: Giza */}
            <div className="rounded-2xl border-2 border-brand-red/20 bg-white p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-red text-white">
                  <Building2 size={20} />
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                    {isRtl ? 'المقر الرئيسي' : 'Main Headquarters'}
                  </span>
                  <h2 className="text-xl font-black text-zinc-900">
                    {isRtl ? 'فرع الجيزة' : 'Giza Branch'}
                  </h2>
                </div>
              </div>

              <div className="space-y-3 text-sm text-zinc-700">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 text-brand-red shrink-0" />
                  <p className="font-semibold leading-relaxed">
                    {isRtl 
                      ? '1 شارع جامعة القاهرة، ميدان الجيزة، الدور الثامن، مكتب 30' 
                      : '1 Cairo University St., Giza Square, 8th Floor, Office 30'}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-zinc-500">
                  <Clock size={16} className="shrink-0" />
                  <span>{isRtl ? 'مواعيد العمل: يومياً من 9:00 صباحاً حتى 9:00 مساءً' : 'Working Hours: Daily 9:00 AM - 9:00 PM'}</span>
                </div>
              </div>

              {/* Map Embed for Giza */}
              <div className="mt-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-zinc-200">
                <iframe 
                  title="Giza Branch Location" 
                  src="https://maps.google.com/maps?q=30.0131,31.2089&hl=ar&z=15&output=embed" 
                  className="h-full w-full border-0" 
                  loading="lazy" 
                />
              </div>
            </div>

            {/* Heliopolis Branch Card */}
            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-zinc-100 text-zinc-700">
                  <Building2 size={18} />
                </span>
                <h3 className="text-lg font-bold text-zinc-900">
                  {isRtl ? 'فرع مصر الجديدة' : 'Heliopolis Branch'}
                </h3>
              </div>
              <div className="flex items-start gap-3 text-sm text-zinc-600 mt-2">
                <MapPin size={16} className="mt-1 text-zinc-400 shrink-0" />
                <p>
                  {isRtl 
                    ? 'عمارات العبور، صلاح سالم، عمارة 31، الدور 14، شقة 3' 
                    : 'El-Obour Buildings, Salah Salem, Bldg 31, 14th Floor, Apt 3'}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl border border-zinc-200 p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl font-black text-zinc-900 mb-2">
              {isRtl ? 'أرسل لنا استفسارك أو مستندك' : 'Send an Inquiry or Document'}
            </h2>
            <p className="text-sm text-zinc-500 mb-6">
              {isRtl ? 'سنقوم بمراجعة طلبك والرد عليك خلال دقائق عبر الهاتف أو واتساب.' : 'We will review your request and reply within minutes via phone or WhatsApp.'}
            </p>
            <ContactForm locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
}
