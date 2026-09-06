import { EmbassyQuickLinks } from '@/components/home/EmbassyQuickLinks';
import type { Locale } from '@/data/site';
import { createMetadata } from '@/lib/seo';
import { getEmbassies } from '@/lib/cms';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return createMetadata({ locale, path: '/embassies', title: locale === 'ar' ? 'دليل ترجمة السفارات' : 'Embassies Translation Hub', description: 'Embassy translation requirements in Egypt.' });
}

export default async function EmbassiesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const embassiesList = await getEmbassies();
  return <EmbassyQuickLinks locale={locale} embassiesList={embassiesList} />;
}
