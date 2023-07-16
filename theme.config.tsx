import React from 'react';
import Image from 'next/image';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { Footer } from "./components/Footer";
import logo from './public/blue0x.png';
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();

    const title = asPath === '/' ? 'Blue0x - Together. We Are the Bank.' : 'Blue0x - %s';

    return {
      titleTemplate: title,
      description: 'Together. We Are the Bank.',
      canonical: 'https://blue0x.com',
      openGraph: {
        url: 'https://blue0x.com',
        title: 'Blue0x - Together.  We Are the Bank.',
        description:
            'Free. Open-source. Decentralized. We are taking back control of money.',
        images: [
          {
            url: 'https://runtipi.io/images/tipi-og.png',
            width: 1200,
            height: 630,
            alt: 'Blue0x screenshot',
            type: 'image/png',
          },
        ],
        siteName: 'Blue0x',
      },
      twitter: {
        handle: '@Blue0x',
        cardType: 'summary_large_image',
      },
    };
  },
  nextThemes: {
    forcedTheme: 'dark',
  },
  logo: (
    <div className="flex">
      <Image src={logo} alt="Tipi logo" className="h-6 w-6" />
      <span className="ml-2 font-bold">Blue0x</span>
    </div>
  ),
  darkMode: false,
  project: {
    link: 'https://github.com/Blue0x',
  },
  chat: {
    link: 'https://discord.gg/Bu9qEPnHsc',
  },
  docsRepositoryBase: 'https://github.com/Blue0x/new_docs',
  footer: {
    text: <Footer />,
  },
  head: (
    <>
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Blue0x: Together. We Are the Bank." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Blue0x" />
      <meta property="og:title" content="Blue0x: Together. We Are the Bank." />
      <meta property="og:description" content="Blue0x: Together. We Are the Bank." />
      <meta name="apple-mobile-web-app-title" content="Blue0x" />
    </>
  ),
};

export default config;
