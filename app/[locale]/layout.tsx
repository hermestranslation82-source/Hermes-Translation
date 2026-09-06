import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { BackToTop } from '@/components/shared/BackToTop';
import { CookieConsent } from '@/components/shared/CookieConsent';
import { SchemaScript } from '@/components/shared/SchemaScript';
import AnalyticsTracker from '@/components/AnalyticsTracker';
import { localBusinessSchema } from '@/lib/schema';
import type { Locale } from '@/data/site';
import { Toaster } from 'sonner';

import { getSiteSettings } from '@/lib/cms';

export function generateStaticParams() {
  return [{ locale: 'ar' }, { locale: 'en' }];
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const settings = await getSiteSettings();

  return (
    <div dir={dir} lang={locale} className={locale === 'ar' ? 'font-cairo' : 'font-inter'}>
      <AnalyticsTracker />
      <SchemaScript data={localBusinessSchema(locale)} />
      <Header locale={locale} settings={settings} />
      <main>{children}</main>
      <Footer locale={locale} settings={settings} />
      <WhatsAppButton locale={locale} whatsappNumber={settings.whatsapp} />
      <BackToTop />
      <CookieConsent />
      <Toaster position="top-center" richColors />
    </div>
  );
}
