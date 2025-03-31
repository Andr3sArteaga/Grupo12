/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                orangeFire: '#F8782E',
                grayBg: '#F5F5F5',
                grayForm: '#E0E0E0',
                textDark: '#000000',
            },
        },
    },
    plugins: [],
}
