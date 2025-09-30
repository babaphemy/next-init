'use client';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GTM;
const GAID = process.env.NEXT_PUBLIC_GA;

export default function Ga() {
  return (
    <>
      {GAID && <GoogleAnalytics gaId={GAID} />}
      {GA_MEASUREMENT_ID && <GoogleTagManager gtmId={GA_MEASUREMENT_ID} />}
    </>
  );
}
