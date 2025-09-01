/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: 'img.freepik.com', protocol: "https" },
      { hostname: 'images.unsplash.com', protocol: "https" },
    ],
  },
};
export default nextConfig;
