'use client';
import { Inter } from 'next/font/google';
import '../../app/globals.css';
import ScrollToTop from '../components/common/Scrolltotop';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}

        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
