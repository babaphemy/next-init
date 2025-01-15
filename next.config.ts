import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'youtube.com',
      },
    ],
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "img-src 'self' femi.b-cdn.net data: blob: *.youtube.com *.ytimg.com",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com *.youtube.com",
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self' fonts.gstatic.com",
              "connect-src 'self' *.googletagmanager.com",
              "frame-src 'self' *.youtube.com *.youtube-nocookie.com",
              "frame-ancestors 'none'",
            ].join('; '),
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
