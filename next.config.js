/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    webVitalsAttribution: ['CLS', 'FCP', 'LCP', 'FID', 'TTFB', 'INP'],
    // CLS: Cumulative Layout Shift
    // FCP: First Contentful Paint
    // LCP: Largest Contentful Paint
    // FID: First Input Delay
    // TTFB: Time to First Byte
    // INP: Input Delay
  },
};

module.exports = nextConfig;
