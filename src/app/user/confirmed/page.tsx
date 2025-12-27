'use client';
import Lottie from 'lottie-react';
import signup from 'public/animations/signup.json';
import Link from 'next/link';
import {
  GalleryVerticalEnd,
  CheckCircle,
  ArrowRight,
  Home,
  Mail,
} from 'lucide-react';

const ConfirmedPage = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 lg:block">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative w-full h-full flex items-center justify-center p-8">
          <div className="max-w-md">
            <Lottie
              animationData={signup}
              className="w-full h-auto"
              loop={true}
            />
            <div className="text-center mt-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Welcome to Chrisema!</h2>
              <p className="text-emerald-100 leading-relaxed">
                Your journey to amazing shopping experiences starts now.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-8 w-16 h-16 bg-white/5 rounded-full blur-lg" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
      </div>

      <div className="flex flex-col gap-4 p-6 md:p-10 bg-gray-50/50">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link
            href="/"
            className="flex items-center gap-2 font-medium text-gray-800 hover:text-green-600 transition-colors"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg">
              <GalleryVerticalEnd className="size-4" />
            </div>
            <span className="text-xl font-bold">Chrisema</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -inset-2 bg-green-500/20 rounded-full blur-lg animate-pulse" />
              </div>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Email Confirmed!
              </h1>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Mail className="w-5 h-5 text-green-600" />
                <span className="text-lg text-green-600 font-medium">
                  🎉 Success!
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Thank you for confirming your email address. Your account is now
                fully activated and ready to use. Start exploring our amazing
                products and exclusive deals!
              </p>
            </div>

            <div className="space-y-3">
              <Link
                href="/user/login"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Continue to Login
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/"
                className="w-full border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium hover:border-green-300 hover:text-green-700 hover:bg-green-50 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
            </div>

            {/* Additional info */}
            <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-100">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-800 mb-1">
                    What&apos;s Next?
                  </h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Complete your profile setup</li>
                    <li>• Start listing items to earn income</li>
                    <li>• Browse listings</li>
                    <li>• Enjoy exclusive member benefits</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden flex justify-center py-4">
          <div className="w-48">
            <Lottie
              animationData={signup}
              className="w-full h-auto"
              loop={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedPage;
