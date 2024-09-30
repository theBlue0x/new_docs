import React from 'react';
import Image from 'next/image';
import { DocsThemeConfig } from 'nextra-theme-docs';
import logo from './public/logo.png';
import Footer from './components/Footer';
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
        description: 'Free. Open-source. Decentralized. Taking back control of money.',
        images: [
          {
            url: 'https://blue0x.com/images/blx-og.png',
            width: 1200,
            height: 630,
            alt: 'Blue0x screenshot',
            type: 'image/png',
          },
        ],
        siteName: 'Blue0x',
      },
      twitter: {
        handle: '@blue0x_com',
        cardType: 'summary_large_image',
      },
    };
  },
  nextThemes: {
    forcedTheme: 'dark',
  },
  logo: (
    <div className="flex items-center text-lg">
      <Image src={logo} alt="Blue0x Logo" />
    </div>
  ),
  darkMode: false,
  project: {
    link: 'https://github.com/theBlue0x',
  },
  chat: {
    link: 'https://discord.gg/EbBWRSPW63',
  },
  docsRepositoryBase: 'https://github.com/theBlue0x/website',
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
  },
  footer: {
    component: <Footer />,
  },
  head: (
    <>
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Blue0x - Together. We Are the Bank." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@blue0x_com" />
      <meta property="og:title" content="Blue0x - Together. We Are the Bank." />
      <meta property="og:description" content="Blue0x - Together. We Are the Bank." />
      <meta name="apple-mobile-web-app-title" content="Blue0x" />
    </>
  ),
};

export default config;
