'use client';
import localFont from 'next/font/local';
import './globals.css';
import Head from 'next/head';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/Scrolltotop';
import Providers from './components/Providers';
import { metadata } from './components/common/metadata';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Horace - Learning Management Solution and School ERP.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={metadata?.description || ''} />
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Horace - Learning Management Solution and School ERP"
        />
        <meta
          property="og:description"
          content="Horace is a comprehensive Learning Management Solution and School ERP designed to streamline educational administration, enhance learning experiences, and improve overall school management efficiency."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.horacelearning.com" />
        <meta
          property="og:image"
          content="https://www.horacelearning.com/images/og_image.jpg"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Horace - Learning Management Solution and School ERP"
        />
        <meta
          name="twitter:description"
          content="Horace is a comprehensive Learning Management Solution and School ERP designed to streamline educational administration, enhance learning experiences, and improve overall school management efficiency."
        />
        <meta
          name="twitter:image"
          content="https://www.horacelearning.com/images/og_image.jpg"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
