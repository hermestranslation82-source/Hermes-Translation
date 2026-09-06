import type { Locale } from '@/data/site';

export function FAQAccordion({ locale, faqs }: { locale: Locale; faqs: { q: { ar: string; en: string }; a: { ar: string; en: string } }[] }) {
  return (
    <div className="grid gap-3">
      {faqs.map((faq) => (
        <details key={faq.q.en} className="card p-5">
          <summary className="cursor-pointer font-bold text-brand-red">{faq.q[locale]}</summary>
          <p className="mt-3 leading-7 text-zinc-700">{faq.a[locale]}</p>
        </details>
      ))}
    </div>
  );
}
