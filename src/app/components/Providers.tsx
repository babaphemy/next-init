import Ga from './Analytics/Google/Ga';
import { SessionProvider } from 'next-auth/react';
import { CookiesProvider } from 'react-cookie';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

interface ProvidersProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();
export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <Ga />
      <Toaster position="top-right" />
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <CookiesProvider defaultSetOptions={{ path: '/' }}>
            {children}
          </CookiesProvider>
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
}
