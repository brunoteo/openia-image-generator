/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "oaidalleapiprodscus.blob.core.windows.net",
      "links.papareact.com"
    ],
  },
};
