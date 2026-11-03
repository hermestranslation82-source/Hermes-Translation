export const ADS_ID = "AW-18435734497";

export const CONVERSIONS = {
  quoteForm: `${ADS_ID}/Eiw3CK39p7EdEOH369ZE`,
  whatsapp: `${ADS_ID}/2Od0CLD9p7EdEOH369ZE`,
  phone: `${ADS_ID}/wc2GCLP9p7EdEOH369ZE`,
  contact: `${ADS_ID}/FXlYCNDW-vEcEOH369ZE`,
} as const;

const VALUES: Record<keyof typeof CONVERSIONS, number> = {
  quoteForm: 100, whatsapp: 70, phone: 80, contact: 100,
};

declare global { interface Window { gtag?: (...args: unknown[]) => void } }

export function trackConversion(
  key: keyof typeof CONVERSIONS,
  opts: { callback?: () => void; transactionId?: string } = {}
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    opts.callback?.(); return;
  }
  let done = false;
  const finish = () => { if (!done) { done = true; opts.callback?.(); } };
  window.gtag("event", "conversion", {
    send_to: CONVERSIONS[key],
    value: VALUES[key],
    currency: "EGP",
    ...(opts.transactionId ? { transaction_id: opts.transactionId } : {}),
    event_callback: finish,
  });
  setTimeout(finish, 800);
}
