import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/favicon.ico",
        destination: "/rcc_favicon/favicon.ico",
      },
    ];
  },
};

export default nextConfig;
