/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US'],
  },
  eslint: {
    dirs: ['src'],
  },
}

module.exports = nextConfig
