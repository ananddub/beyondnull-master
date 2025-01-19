import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
  },
  // redirect code for about and contact pages
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source:"/privacy",
        destination:"/privacy-policy",
        permanent: true,
      },
      {
        source:"/terms",
        destination:"/terms-conditions",
        permanent: true,
      },
      {
        source:"/refund",
        destination:"/refund-policy",
        permanent: true,
      },
      {
        source:"/design",
        destination:"/services/ui-ux-design",
        permanent: true,
      },
      {
        source:"/development",
        destination:"/services/web-development",
        permanent: true,
      },
      {
        source:"/marketing",
        destination:"/services/digital-marketing",
        permanent: true,
      },
      {
        source:"/app",
        destination:"/services/app-development",
        permanent: true,
      },
      {
        source:"/career",
        destination:"/careers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
