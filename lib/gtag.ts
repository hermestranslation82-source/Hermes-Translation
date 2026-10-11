export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-18478710783';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Track custom event in Google Analytics / Google Ads
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track Google Ads conversion event
export const trackConversion = (conversionLabel?: string, value?: number, currency = 'EGP') => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    const sendTo = conversionLabel ? `${GOOGLE_ADS_ID}/${conversionLabel}` : GOOGLE_ADS_ID;
    window.gtag('event', 'conversion', {
      send_to: sendTo,
      value: value,
      currency: currency,
    });
  }
};
