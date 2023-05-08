/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: [
            'jungjung261.blob.core.windows.net',
            'graph.facebook.com',
            'lh3.googleusercontent.com',
            'firebasestorage.googleapis.com',
        ],
    },
    env: {
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
        FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
        FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
        FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
        FIREBASE_MEAUREMENT_ID: process.env.FIREBASE_MEAUREMENT_ID,
        GPT_API: process.env.GPT_API,
    },
};

module.exports = nextConfig;
