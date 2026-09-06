'use client';

import { useEffect, useState } from 'react';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem('hermes-cookie-consent') !== 'yes');
  }, []);

  if (!visible) return null;

  return (
    <div className="no-print fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl rounded-lg bg-zinc-950 p-4 text-sm text-white shadow-xl">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>We use cookies for analytics and site improvements.</p>
        <button className="rounded-md bg-brand-gold px-4 py-2 font-bold text-brand-red-dark" onClick={() => { localStorage.setItem('hermes-cookie-consent', 'yes'); setVisible(false); }}>Accept</button>
      </div>
    </div>
  );
}
