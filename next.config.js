/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "topupgame.kazuhaproject.com",
        port: "",
        pathname: "/storage/assets/game",
      },
    ],
  },
};
