import localFont from 'next/font/local';

import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Navbar } from '~/components';
import { QueryProvider, SmoothScroll } from '~/providers';
import '~/styles/globals.css';

import { GrainEffect } from '~/components/grain-effect';
import { Toaster } from '~/components/ui/sonner';

const beatriceRegular = localFont({
  src: '../../public/beatrice-regular.woff2',
  variable: '--font-beatrice-regular',
});

const beatriceMedium = localFont({
  src: '../../public/beatrice-medium.woff2',
  variable: '--font-beatrice-medium',
});

const elgocAlt = localFont({
  src: '../../public/elgocAlt-medium.woff2',
  variable: '--font-elgocAlt',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://amaan-sayyad-portfolio.vercel.app'),
  title: 'Amaan Sayyad | DevRel | Blockchain Developer | Entrepreneur',
  description:
    'Co-Founder & CEO at Bharat DAO. 4+ years in Web3. Built 25+ Web3 projects. Won 40+ hackathons. Worked with 8 Web3 companies. 12+ speaking engagements. Open to opportunities in DevRel, Blockchain Development, and Entrepreneurship.',
  applicationName: 'Amaan Sayyad',
  keywords: [
    'Amaan Sayyad',
    'Blockchain Developer',
    'Web3 Developer',
    'DevRel',
    'Entrepreneur',
    'Bharat DAO',
    'APT-Casino',
    'Polygon',
    'Aptos',
    'Smart Contracts',
    'DeFi',
    'GameFi',
    'Hackathon Winner',
    'Web3 Community Builder',
    'Portfolio',
    'React',
    'Next.js',
    'Solidity',
    'Move',
  ],
  creator: 'Amaan Sayyad',
  publisher: 'Amaan Sayyad',
  authors: [{ name: 'Amaan Sayyad' }],
  manifest: '/manifest.json',
  icons: [{ rel: 'icon', url: '/logo.png' }],
  twitter: {
    card: 'summary_large_image',
    title: 'Amaan Sayyad | DevRel | Blockchain Developer',
    description:
      'Built 25+ Web3 projects. Won 40+ hackathons. 4+ years in Web3.',
    creator: '@amaanbiz',
    site: '@amaanbiz',
    images: [
      {
        url: `/og-image.png`,
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `Amaan Sayyad - DevRel, Blockchain Developer, Entrepreneur`,
      },
    ],
  },
  openGraph: {
    title: 'Amaan Sayyad | DevRel | Blockchain Developer | Entrepreneur',
    description:
      'Co-Founder & CEO at Bharat DAO. 4+ years in Web3. Built 25+ Web3 projects. Won 40+ hackathons. Worked with 8 Web3 companies. Open to opportunities.',
    type: 'website',
    locale: 'en_US',
    url: 'https://amaan-sayyad-portfolio.vercel.app',
    siteName: 'Amaan Sayyad',
    images: [
      {
        url: `/og-image.png`,
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `Amaan Sayyad - DevRel, Blockchain Developer, Entrepreneur`,
      },
    ],
  },
  other: {
    'msapplication-tap-highlight': 'no',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Amaan Sayyad',
    'msapplication-TileColor': '#fff',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body
        className={`!overflow-x-hidden font-sans ${beatriceRegular.variable} ${elgocAlt.variable} ${beatriceMedium.variable}`}
      >
        <QueryProvider>
          <SmoothScroll>
            <GrainEffect />
            <Navbar />
            {children}
          </SmoothScroll>
          <Toaster />
        </QueryProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
