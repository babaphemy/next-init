import { ToastContainer } from 'react-toastify';
import Ga from './Analytics/Google/Ga';
import { SessionProvider } from 'next-auth/react';
import { CookiesProvider } from 'react-cookie';
import React from 'react';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <Ga />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <SessionProvider>
        <CookiesProvider defaultSetOptions={{ path: '/' }}>
          {children}
        </CookiesProvider>
      </SessionProvider>
    </>
  );
}
