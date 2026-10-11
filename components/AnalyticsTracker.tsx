'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageViewAction } from '@/lib/actions';
import { trackWhatsAppConversion, trackPhoneConversion, trackEmailConversion } from '@/lib/gtag';

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Only track if we are in the browser and NOT in the admin panel
    if (typeof window !== 'undefined' && pathname && !pathname.includes('/admin')) {
      const userAgent = navigator.userAgent;
      trackPageViewAction(pathname, userAgent);
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href') || '';

      if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        trackWhatsAppConversion();
      } else if (href.startsWith('tel:')) {
        trackPhoneConversion();
      } else if (href.startsWith('mailto:')) {
        trackEmailConversion();
      }
    };

    document.addEventListener('click', handleClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
    };
  }, []);

  return null;
}
