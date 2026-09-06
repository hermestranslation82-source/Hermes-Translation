import type { Locale } from '@/data/site';
import { SectionTitle } from './ServicesGrid';

export function Testimonials({ locale }: { locale: Locale }) {
  const testimonials = [
    { name: 'Mona A.', role: { ar: 'متقدمة لفيزا', en: 'Visa Applicant' }, text: { ar: 'استلمت الترجمة بسرعة وكانت منظمة ومقبولة في الموعد.', en: 'The translation was fast, organized, and accepted on appointment day.' } },
    { name: 'Khaled Law', role: { ar: 'مكتب محاماة', en: 'Law Firm' }, text: { ar: 'دقة قانونية ممتازة والتزام بالمواعيد.', en: 'Excellent legal accuracy and reliable delivery times.' } },
    { name: 'Care Clinic', role: { ar: 'عيادة طبية', en: 'Medical Clinic' }, text: { ar: 'تعامل سري ومحترف مع تقارير المرضى.', en: 'Confidential, professional handling of patient reports.' } }
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-padded">
        <SectionTitle locale={locale} title={{ ar: 'آراء العملاء', en: 'Client Testimonials' }} />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="card p-6">
              <div className="mb-4 text-brand-gold">★★★★★</div>
              <p className="leading-7 text-zinc-700">{item.text[locale]}</p>
              <p className="mt-5 font-black">{item.name}</p>
              <p className="text-sm text-zinc-500">{item.role[locale]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
