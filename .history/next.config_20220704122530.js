/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    NEXT_PUBLIC_CLOUDINARY: "https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/"
  }
}

module.exports = nextConfig
