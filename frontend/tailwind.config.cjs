/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            Open_Sans: ['"Open Sans"'],
        },
        extend: {
            colors: {
                black: '#242424',
                'black-force': '#1B1B1B',
                'black-cyan': '#1F2730',
                purple: '#6B54B7',
                green: '#269A90',
            },
            boxShadow: {
                '4xl': '0 35px 60px 18px rgba(0, 0, 0, 0.3)',
            },
        },
    },
    plugins: [],
};
