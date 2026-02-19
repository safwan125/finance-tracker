/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'neu-bg': '#e0e5ec',
                'neu-text': '#4d4d4d',
            },
            boxShadow: {
                'neu-flat': '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
                'neu-pressed': 'inset 6px 6px 10px 0 rgba(163,177,198, 0.7), inset -6px -6px 10px 0 rgba(255,255,255, 0.8)',
                'neu-concave': 'linear-gradient(145deg, #cacaca, #f0f0f0)',
                // Note: concave is usually a background, not shadow, but we can fake it or just use utilities
            },
        },
    },
    plugins: [],
}
