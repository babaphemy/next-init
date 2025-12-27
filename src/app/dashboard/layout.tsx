'use client';
import { Inter } from 'next/font/google';
import '../../app/globals.css';
import ScrollToTop from '../components/common/Scrolltotop';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import LoadingSpinner from '../components/common/LoadingSpinner';

const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <LoadingSpinner />;
  }
  if (status === 'unauthenticated' || !session) {
    return null;
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <ScrollToTop />
      </body>
    </html>
  );
}
