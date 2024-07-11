/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        AUTH_SECRET: process.env.AUTH_SECRET,
        NEXT_PUBLIC_MONGODB_URI: process.env.MONGODB_URI,
        NEXT_PUBLIC_AUTH_SECRET: process.env.AUTH_SECRET,
    }
};

export default nextConfig;
