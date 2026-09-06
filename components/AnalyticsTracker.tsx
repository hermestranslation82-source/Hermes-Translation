'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageViewAction } from '@/lib/actions';

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Only track if we are in the browser and NOT in the admin panel
    if (typeof window !== 'undefined' && pathname && !pathname.includes('/admin')) {
      const userAgent = navigator.userAgent;
      trackPageViewAction(pathname, userAgent);
    }
  }, [pathname]);

  return null;
}
