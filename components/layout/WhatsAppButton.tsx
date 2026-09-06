'use client';

import { MessageCircle } from 'lucide-react';
import type { Locale } from '@/data/site';

export function WhatsAppButton({ locale, whatsappNumber }: { locale: Locale; whatsappNumber?: string }) {
  const text = encodeURIComponent(locale === 'ar' ? 'مرحبا، أريد الاستفسار عن خدمات الترجمة' : 'Hello, I would like to ask about certified translation services');
  const number = (whatsappNumber || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '201501591531').replace(/[^\d]/g, '');

  return (
    <a
      href={`https://wa.me/${number}?text=${text}`}
      className={`no-print fixed bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 ${locale === 'ar' ? 'left-5' : 'right-5'}`}
      aria-label="WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
