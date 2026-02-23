import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [new URL("https://robohash.org/**?set=set4")],
  },
};

export default nextConfig;
