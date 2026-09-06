import type { Locale } from '@/data/site';
import { VideoEmbed } from '@/components/blog/VideoEmbed';
import { SectionTitle } from './ServicesGrid';

export function VideoSection({ locale }: { locale: Locale }) {
  return (
    <section className="section-pad bg-white">
      <div className="container-padded">
        <SectionTitle locale={locale} title={{ ar: 'شاهد كيف نعمل', en: 'Watch How We Work' }} />
        <VideoEmbed title="Hermes workflow video" />
      </div>
    </section>
  );
}
