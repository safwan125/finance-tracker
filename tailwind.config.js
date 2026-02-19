export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'neu-bg': '#e0e5ec',
                'neu-text': '#4d4d4d',
                'dark-neu-bg': '#2b2d42',
                'dark-neu-text': '#edf2f4',
            },
            boxShadow: {
                'neu-flat': '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
                'neu-pressed': 'inset 6px 6px 10px 0 rgba(163,177,198, 0.7), inset -6px -6px 10px 0 rgba(255,255,255, 0.8)',
                'neu-concave': 'linear-gradient(145deg, #cacaca, #f0f0f0)',
                'dark-neu-flat': '5px 5px 10px #1e1f2e, -5px -5px 10px #383b56',
                'dark-neu-pressed': 'inset 5px 5px 10px #1e1f2e, inset -5px -5px 10px #383b56',
            },
        },
    },
    plugins: [],
}
