// import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "sasw.in"],
  },
  experimental: {
    appDir: true,
    fontLoaders: [
      {
        loader: "next/font/google",
        options: { subsets: ["latin"] },
      },
    ],
    serverComponentsExternalPackages: ["@prisma/client"],
  },
}

export default nextConfig
