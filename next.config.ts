import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      { source: "/alloys", destination: "/materials", permanent: true },
    ];
  },
  async rewrites() {
    return [{ source: "/products/:slug", destination: "/:slug" }];
  },
};

export default nextConfig;
