import Link from 'next/link';
import type { Locale } from '@/data/site';
import { SchemaScript } from '@/components/shared/SchemaScript';
import { breadcrumbSchema } from '@/lib/schema';

export function Breadcrumb({ locale, items }: { locale: Locale; items: { label: string; href?: string }[] }) {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://hermes-certified.com').replace(/https?:\/\/91\.108\.113\.135(:3005)?/g, 'https://hermes-certified.com');
  
  const schemaItems = [
    { name: locale === 'ar' ? 'الرئيسية' : 'Home', url: `${siteUrl}/${locale}` },
    ...items.map((item) => ({
      name: item.label,
      url: item.href ? `${siteUrl}/${locale}${item.href}` : `${siteUrl}/${locale}`
    }))
  ];

  return (
    <>
      <SchemaScript data={breadcrumbSchema(schemaItems)} />
      <nav className="mb-6 text-sm text-zinc-500" aria-label="Breadcrumb">
        <Link href={`/${locale}`} className="font-bold text-brand-red">{locale === 'ar' ? 'الرئيسية' : 'Home'}</Link>
        {items.map((item) => (
          <span key={item.label}>
            <span className="mx-2">/</span>
            {item.href ? <Link href={`/${locale}${item.href}`} className="hover:text-brand-red">{item.label}</Link> : <span>{item.label}</span>}
          </span>
        ))}
      </nav>
    </>
  );
}
