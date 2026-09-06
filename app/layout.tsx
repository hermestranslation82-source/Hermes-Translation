import type { Metadata } from 'next';
import './globals.css';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://hermes-certified.com').replace(/https?:\/\/91\.108\.113\.135(:3005)?/g, 'https://hermes-certified.com');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hermes Certified Translations',
    template: '%s | Hermes Certified Translations'
  },
  description: 'Certified translation services in Egypt for embassies, government bodies, visas, scholarships, and official documents.',
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION && process.env.NEXT_PUBLIC_GSC_VERIFICATION !== 'your_verification_code' ? {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION
  } : undefined
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
