'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { company, navItems, type Locale } from '@/data/site';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Logo({ locale, inverted = false, companyName }: { locale: Locale; inverted?: boolean; companyName?: { ar: string; en: string } }) {
  return (
    <Link href={`/${locale}`} className="group flex items-center transition-opacity hover:opacity-90" aria-label="Hermes Certified Translation Home">
      <img
        src={inverted ? "/hermes-logo-white.png" : "/hermes-logo.png"}
        alt="Hermes Certified Translation"
        width={180}
        height={50}
        className="h-10 sm:h-12 w-auto object-contain"
      />
    </Link>
  );
}

export function Header({ locale, settings }: { locale: Locale; settings?: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-red/10 bg-white/95 backdrop-blur">
      <div className="container-padded flex min-h-20 items-center justify-between gap-4">
        <Logo locale={locale} companyName={settings?.name} />
        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={`/${locale}${item.href === '/' ? '' : item.href}`} className="text-sm font-bold text-zinc-800 hover:text-brand-red">
              {item.label[locale]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSwitcher locale={locale} />
            <Link href={`/${locale}/quote`} className="focus-ring rounded-md bg-brand-gold px-4 py-2 text-sm font-extrabold text-brand-red-dark shadow-sm hover:bg-white hover:ring-1 hover:ring-brand-gold">
              {locale === 'ar' ? 'طلب عرض سعر' : 'Request a Quote'}
            </Link>
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="focus-ring rounded-md border border-brand-red/20 p-2 lg:hidden" 
            aria-label="Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="border-t border-brand-red/10 bg-white p-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={`/${locale}${item.href === '/' ? '' : item.href}`} 
                onClick={() => setIsOpen(false)}
                className="text-base font-bold text-zinc-800 hover:text-brand-red"
              >
                {item.label[locale]}
              </Link>
            ))}
            <div className="flex items-center justify-between border-t border-brand-red/10 pt-4">
              <LanguageSwitcher locale={locale} />
              <Link 
                href={`/${locale}/quote`} 
                onClick={() => setIsOpen(false)}
                className="focus-ring rounded-md bg-brand-gold px-4 py-2 text-sm font-extrabold text-brand-red-dark shadow-sm hover:bg-white hover:ring-1 hover:ring-brand-gold"
              >
                {locale === 'ar' ? 'طلب عرض سعر' : 'Request a Quote'}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
