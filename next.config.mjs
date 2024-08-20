/** @type {import('next').NextConfig} */
import nextTranslate from "next-translate-plugin";
const nextConfig = {
  // reactStrictMode: true,
  experimental: { forceSwcTransforms: true },
  images: {
    domains: [],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextTranslate(nextConfig);
