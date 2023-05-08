/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0a7cff',
                secondary: '#0a67eb',
            },
            backgroundImage: {
                messenger:
                    'linear-gradient(83.84deg, #0088FF -6.87%, #A033FF 26.54%, #FF5C87 58.58%)',
                messengerShadow:
                    'linear-gradient(90deg, #0088ff 0%, #a033ff 55.81%, #ff5c87 109.33%)',
            },
            screens: {
                mobile: { max: '600px' },
                onlyTablet: { min: '601px', max: '1023px' },
                tablet: { max: '1023px' },
                laptop: {
                    min: '1024px',
                    max: '1200px',
                },
            },
            animation: {
                fadeUp: 'fadeUp 0.3s ease-in-out',
                fadeInLeft:
                    'fadeInLeft 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                fadeInRight:
                    'fadeInRight 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                bell: 'bell 1s ease-in-out infinite',
                rotate: 'rotate 1s linear infinite',
                modal: 'modal 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                fadeInTop:
                    'fadeInTop 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                skeleton: 'skeleton 1s linear infinite alternate',
                gradient: 'gradient 15s ease infinite',
            },
            keyframes: {
                fadeUp: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(200%)',
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translateY(0)',
                    },
                },
                fadeInLeft: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateX(-100%)',
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translateX(0)',
                    },
                },

                fadeInRight: {
                    '0%': { opacity: 0, transform: 'translateX(100%)' },
                    '100%': { opacity: 1, transform: 'translateX(0)' },
                },
                fadeInTop: {
                    '0%': { opacity: 0, transform: 'translateY(-100%)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                bell: {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.2)' },
                    '100%': { transform: 'scale(1)' },
                },

                rotate: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },

                modal: {
                    '0%': { transform: 'scale(1)' },
                    '1%': { transform: 'scale(.5)' },
                    '45%': { transform: 'scale(1.05)' },
                    '80%': { transform: 'scale(.95)' },
                    '100%': { transform: 'scale(1)' },
                },

                skeleton: {
                    '0%': { backgroundColor: 'hls(200, 20%, 80%)' },
                    '100%': { backgroundColor: 'hls(200, 20%, 95%)' },
                },
                gradient: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            },
            boxShadow: {
                f: '#3644b7 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
                s: '#925ff6 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
                t: '#d781f0 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
                fo: '#f5e3c2 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
            },
        },
    },
    plugins: [],
};
