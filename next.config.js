/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@mantine/core', '@mantine/hooks', '@mantine/dates', '@mantine/form']
}

module.exports = nextConfig