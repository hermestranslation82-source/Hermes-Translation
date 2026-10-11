export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-18478710783';

// Official Google Ads Conversion Labels
export const CONVERSION_LABELS = {
  PHONE: 'AW-18478710783/b3dDCMfjp5kdEP__qutE',
  WHATSAPP: 'AW-18478710783/eegLCMHAqZkdEP__qutE',
  EMAIL: 'AW-18478710783/jFJyCMTAqZkdEP__qutE',
  DIRECTIONS: 'AW-18478710783/7siDCOT1qJkdEP__qutE',
};

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
export const trackConversion = (sendTo = GOOGLE_ADS_ID, value = 1.0, currency = 'EGP') => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: sendTo,
      value: value,
      currency: currency,
    });
  }
};

// 1. Phone Call Conversion (Phoe Calls)
export const trackPhoneConversion = () => {
  trackConversion(CONVERSION_LABELS.PHONE, 1.0, 'EGP');
  trackEvent('phone_call', 'Contact', 'Direct Phone Call');
};

// 2. WhatsApp Click Conversion (Whatsapp Click)
export const trackWhatsAppConversion = () => {
  trackConversion(CONVERSION_LABELS.WHATSAPP, 1.0, 'EGP');
  trackEvent('whatsapp_click', 'Contact', 'WhatsApp Click');
};

// 3. Email Click Conversion (Email Click)
export const trackEmailConversion = () => {
  trackConversion(CONVERSION_LABELS.EMAIL, 1.0, 'EGP');
  trackEvent('email_click', 'Contact', 'Email Click');
};

// 4. Get Directions Conversion (Branch Directions)
export const trackDirectionsConversion = () => {
  trackConversion(CONVERSION_LABELS.DIRECTIONS, 1.0, 'EGP');
  trackEvent('get_directions', 'Location', 'Branch Directions Click');
};
