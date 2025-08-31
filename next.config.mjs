/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: 'images.unsplash.com', protocol: "https" },
    ],
  },
};
export default nextConfig;
