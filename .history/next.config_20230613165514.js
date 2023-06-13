/** @type {import('next').NextConfig} */
const nextConfig = {
    // truy cập cloudinary
    reactStrictMode: true,
    images: {
        domains: ['res.cloudinary.com'],
    },
};

module.exports = nextConfig;
