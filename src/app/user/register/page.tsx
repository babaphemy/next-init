'use client';
import { GalleryVerticalEnd } from 'lucide-react';
import Lottie from 'lottie-react';
import ecommerceOutlook from '@/../public/animations/signup.json';
import Link from 'next/link';
import { SignUpForm } from '@/app/components/user/signup/sign-up';

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-muted lg:block">
        <div className="w-full h-full flex items-center justify-center absolute inset-0 overflow-hidden bg-primary">
          <Lottie animationData={ecommerceOutlook} />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Chrisema
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
}
