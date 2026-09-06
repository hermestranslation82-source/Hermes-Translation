'use client';

import { Copy, Facebook, MessageCircle } from 'lucide-react';

export function ShareButtons() {
  return (
    <div className="flex gap-2">
      <button className="rounded-md border p-2" aria-label="WhatsApp"><MessageCircle size={18} /></button>
      <button className="rounded-md border p-2" aria-label="Facebook"><Facebook size={18} /></button>
      <button className="rounded-md border p-2" aria-label="Copy link" onClick={() => navigator.clipboard?.writeText(window.location.href)}><Copy size={18} /></button>
    </div>
  );
}
