import type { Locale } from '@/data/site';
import { createMetadata } from '@/lib/seo';
import { Award, ShieldCheck, Timer, Languages, Target, Compass } from 'lucide-react';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return createMetadata({ 
    locale, 
    path: '/about', 
    title: locale === 'ar' ? 'من نحن | هيرميس للترجمة المعتمدة' : 'About Us | Hermes Certified Translations', 
    description: 'Hermes Certified Translations company profile. Discover our history, values, and quality assurance process for official document translations.' 
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  
  const values = [
    {
      icon: ShieldCheck,
      title: locale === 'ar' ? 'اعتماد رسمي' : 'Official Accreditation',
      desc: locale === 'ar' ? 'ترجماتنا معتمدة ومقبولة رسمياً لدى كافة السفارات والجهات الحكومية والجامعات.' : 'Our translations are officially certified and accepted by all embassies, government entities, and universities.'
    },
    {
      icon: Timer,
      title: locale === 'ar' ? 'التزام بالوقت' : 'Strict Deadlines',
      desc: locale === 'ar' ? 'نحترم أوقات عملائنا ونلتزم بتسليم الترجمة في الوقت المحدد بدقة متناهية.' : 'We respect our clients\' time and deliver all translations strictly on schedule with utmost precision.'
    },
    {
      icon: Award,
      title: locale === 'ar' ? 'جودة ودقة' : 'Premium Quality',
      desc: locale === 'ar' ? 'تدقيق لغوي ومراجعة ثنائية لضمان تطابق النص المترجم مع المستند الأصلي.' : 'Thorough proofreading and secondary reviews to ensure the translation perfectly mirrors the original document.'
    },
    {
      icon: Languages,
      title: locale === 'ar' ? 'مترجمون خبراء' : 'Expert Translators',
      desc: locale === 'ar' ? 'نخبة من المترجمين المتخصصين في المجالات القانونية، الطبية، التقنية والأكاديمية.' : 'A handpicked team of translators specialized in legal, medical, technical, and academic fields.'
    }
  ];

  return (
    <div className="bg-[#FAF8F8]">
      {/* Hero Banner */}
      <section className="brand-gradient hero-pattern text-white py-20 text-center">
        <div className="container-padded animate-fade-in">
          <h1 className="font-cairo text-4xl font-black md:text-6xl text-brand-gold">
            {locale === 'ar' ? 'من نحن' : 'About Hermes'}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80 leading-8">
            {locale === 'ar' 
              ? 'شريكك الموثوق للترجمة المعتمدة والحلول اللغوية الاحترافية في مصر.' 
              : 'Your trusted partner for certified translation and professional language solutions in Egypt.'}
          </p>
        </div>
      </section>

      {/* Main Content (Story & Mission) */}
      <section className="section-pad">
        <div className="container-padded">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-brand-red">
                {locale === 'ar' ? 'قصتنا' : 'Our Story'}
              </span>
              <h2 className="font-cairo text-3xl font-black text-zinc-950 md:text-4xl">
                {locale === 'ar' ? 'جسر تواصل حضاري موثوق' : 'A Trusted Bridge for Global Communication'}
              </h2>
              <p className="text-zinc-600 leading-8">
                {locale === 'ar'
                  ? 'تأسست هيرميس للترجمة المعتمدة لتلبية الطلب المتزايد على خدمات الترجمة الرسمية عالية الدقة. على مر السنين، نجحنا في بناء شراكات قوية مع كبرى الشركات والمؤسسات بالإضافة إلى خدمة آلاف الأفراد الراغبين في الهجرة، الدراسة أو العمل بالخارج.'
                  : 'Hermes Certified Translations was established to satisfy the growing demand for highly accurate official translations. Over the years, we have built strong partnerships with corporate clients and served thousands of individuals pursuing immigration, study, or international career opportunities.'}
              </p>
              <p className="text-zinc-600 leading-8">
                {locale === 'ar'
                  ? 'تخضع جميع مستنداتنا لعملية مراجعة وتدقيق صارمة لضمان مطابقتها لأعلى معايير الجودة العالمية، مما يضمن قبولها الفوري دون أي عقبات.'
                  : 'All our documents undergo rigorous review and proofreading processes to ensure compliance with the highest international quality standards, ensuring immediate acceptance without hurdles.'}
              </p>
            </div>
            
            <div className="grid gap-6">
              <div className="card p-6 border-l-4 border-l-brand-red bg-white hover:shadow-md transition">
                <div className="flex gap-4 items-start">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-brand-red/10 text-brand-red">
                    <Compass size={24} />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2">
                      {locale === 'ar' ? 'رسالتنا' : 'Our Mission'}
                    </h3>
                    <p className="text-sm text-zinc-650 leading-7">
                      {locale === 'ar'
                        ? 'تقديم حلول ترجمة معتمدة فائقة الدقة تتجاوز توقعات العملاء وتوفر لهم مساراً سلساً للمعاملات الرسمية والدولية.'
                        : 'Providing highly accurate, certified translation solutions that exceed client expectations and facilitate smooth processing for official and international transactions.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6 border-l-4 border-l-brand-gold bg-white hover:shadow-md transition">
                <div className="flex gap-4 items-start">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-brand-gold/10 text-brand-gold">
                    <Target size={24} />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2">
                      {locale === 'ar' ? 'رؤيتنا' : 'Our Vision'}
                    </h3>
                    <p className="text-sm text-zinc-650 leading-7">
                      {locale === 'ar'
                        ? 'أن نكون الخيار الأول والوجهة الأكثر موثوقية في مصر والشرق الأوسط لجميع خدمات الترجمة والاعتماد الدولي.'
                        : 'To be the premier choice and most trusted translation hub in Egypt and the Middle East for all language and international certification services.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-pad bg-white">
        <div className="container-padded">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-cairo text-3xl font-black text-zinc-950 md:text-5xl">
              {locale === 'ar' ? 'القيم التي نؤمن بها' : 'Our Core Values'}
            </h2>
            <div className="mt-4 h-1 w-24 rounded bg-brand-red mx-auto" />
            <p className="mt-4 text-zinc-600 leading-7">
              {locale === 'ar'
                ? 'نعمل وفق مبادئ مهنية صارمة تضمن لك تجربة خدمة استثنائية.'
                : 'We operate under strict professional principles ensuring an exceptional service experience.'}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((val, index) => {
              const Icon = val.icon;
              return (
                <div key={index} className="card p-6 flex flex-col items-center text-center space-y-4 hover:shadow-lg transition duration-300">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-red/5 text-brand-red">
                    <Icon size={28} />
                  </span>
                  <h3 className="text-xl font-bold text-zinc-900">{val.title}</h3>
                  <p className="text-sm text-zinc-600 leading-6">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="brand-gradient text-white py-16 text-center">
        <div className="container-padded">
          <h2 className="font-cairo text-2xl font-black md:text-4xl">
            {locale === 'ar' ? 'هل لديك مستندات تحتاج إلى ترجمة معتمدة؟' : 'Have documents that need certified translation?'}
          </h2>
          <p className="mt-4 text-white/80 text-base max-w-xl mx-auto">
            {locale === 'ar' 
              ? 'تواصل معنا الآن أو اطلب عرض سعر مجاني في دقائق معدودة.' 
              : 'Contact us now or request a free quote in just a few minutes.'}
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href={`/${locale}/quote`} className="focus-ring rounded-md bg-brand-gold px-6 py-3 font-extrabold text-brand-red-dark shadow-md hover:bg-white hover:ring-1 hover:ring-brand-gold transition duration-200">
              {locale === 'ar' ? 'طلب عرض سعر 📄' : 'Request a Quote 📄'}
            </Link>
            <Link href={`/${locale}/contact`} className="bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-md px-6 py-3 font-extrabold transition">
              {locale === 'ar' ? 'اتصل بنا 📞' : 'Contact Us 📞'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
