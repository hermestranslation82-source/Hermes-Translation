'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/data/site';

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const nextLocale = locale === 'ar' ? 'en' : 'ar';
  const rest = pathname.replace(/^\/(ar|en)/, '') || '/';

  return (
    <Link
      href={`/${nextLocale}${rest}`}
      className="focus-ring rounded-md border border-brand-red/20 px-3 py-2 text-sm font-bold text-brand-red hover:bg-brand-red hover:text-white"
    >
      {locale === 'ar' ? 'EN' : 'AR'}
    </Link>
  );
}
