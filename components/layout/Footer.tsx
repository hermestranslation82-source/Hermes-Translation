import Link from 'next/link';
import { Facebook, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { company, navItems, type Locale } from '@/data/site';
import { Logo } from './Header';
import { NewsletterForm } from './NewsletterForm';

export function Footer({ locale, settings }: { locale: Locale; settings?: any }) {
  const year = new Date().getFullYear();
  const companyInfo = settings || company;

  return (
    <footer className="brand-gradient text-white">
      <div className="container-padded grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div className="space-y-5">
          <Logo locale={locale} inverted />
          <p className="max-w-sm text-sm leading-7 text-white/80">{companyInfo.tagline[locale]}</p>
          <div className="flex gap-3">
            {[Facebook, Linkedin, Youtube].map((Icon, index) => (
              <a key={index} href="#" className="rounded-md bg-white/10 p-2 hover:bg-white hover:text-brand-red" aria-label="Social link">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 font-bold">{locale === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h2>
          <div className="grid gap-3 text-sm text-white/80">
            {navItems.slice(1).map((item) => (
              <Link key={item.href} href={`/${locale}${item.href}`} className="hover:text-white">{item.label[locale]}</Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 font-bold">{locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}</h2>
          <div className="grid gap-3 text-sm text-white/80">
            <a href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={16} className="text-brand-gold shrink-0" />
              <bdi dir="ltr">{companyInfo.phone}</bdi>
            </a>
            <a href={`https://wa.me/${(companyInfo.whatsapp || '201501591531').replace(/[^\d]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="inline-block h-2 w-2 rounded-full bg-green-400 shrink-0"></span>
              <span>WhatsApp: <bdi dir="ltr">{companyInfo.phone}</bdi></span>
            </a>
            <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={16} className="text-brand-gold shrink-0" />
              <span>{companyInfo.email}</span>
            </a>
            <div className="mt-2 border-t border-white/10 pt-2">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-brand-gold shrink-0" />
                <div>
                  <span className="block font-bold text-white">{locale === 'ar' ? 'فرع الجيزة (الرئيسي):' : 'Giza Branch (Main):'}</span>
                  <span className="text-xs leading-5 text-white/80">{locale === 'ar' ? '1 شارع جامعة القاهرة، ميدان الجيزة، الدور الثامن، مكتب 30' : '1 Cairo University St., Giza Square, 8th Floor, Office 30'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-4 font-bold">{locale === 'ar' ? 'النشرة ومقرنا' : 'Newsletter & Location'}</h2>
          <NewsletterForm locale={locale} />
          <div className="mt-4 aspect-video overflow-hidden rounded-md bg-white/10 shadow-inner">
            <iframe 
              title="Hermes Location Giza" 
              src="https://maps.google.com/maps?q=30.0131,31.2089&hl=ar&z=15&output=embed" 
              className="h-full w-full border-0" 
              loading="lazy" 
            />
          </div>
        </div>
      </div>
      <div className="border-t border-white/15 py-5 text-center text-xs text-white/70">
        © {year} {companyInfo.name[locale]}. <Link href={`/${locale}/privacy-policy`}>{locale === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</Link> · <Link href={`/${locale}/terms`}>{locale === 'ar' ? 'الشروط' : 'Terms'}</Link>
      </div>
    </footer>
  );
}
