/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGODB_URI: "mongodb+srv://dev:941001@cluster0.yqorpme.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        AUTH_SECRET: "x9cH/cpjdXDJPpMdR1P65oUm4Wzm0XV9pZm9LvzFq6U="
    }
};

export default nextConfig;
