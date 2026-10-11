import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://hermes-certified.com').replace(/https?:\/\/91\.108\.113\.135(:3005)?/g, 'https://hermes-certified.com');
const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-18478710783';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hermes Certified Translations',
    template: '%s | Hermes Certified Translations'
  },
  description: 'Certified translation services in Egypt for embassies, government bodies, visas, scholarships, and official documents.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/hermes-icon.png', type: 'image/png', sizes: '256x256' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  openGraph: {
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Hermes Certified Translation' }]
  },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION && process.env.NEXT_PUBLIC_GSC_VERIFICATION !== 'your_verification_code' ? {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION
  } : undefined
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body>
        {googleAdsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-tag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAdsId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
