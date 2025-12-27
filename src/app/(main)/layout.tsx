'use client';
import { Inter } from 'next/font/google';
import '../../app/globals.css';
import { ReactNode } from 'react';

const _inter = Inter({ subsets: ['latin'] });
export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
