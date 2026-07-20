/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/de",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
