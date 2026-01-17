/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
];
export const theme = {
    extend: {
        fontFamily: {
            'header': ['Geologica', 'sans-serif'],
            'text': ['Onest', 'sans-serif'],
            // Ou ajoutez une font personnalisée
            // custom: ['Votre Font', 'sans-serif'],
        },
        colors: {
            "brand": {
                DEFAULT: "#313181", // -> bg-brand
                "light": "#37A4B3", // -> bg-brand-light
                "dark": "#1f2458", // -> bg-brand-dark (choisis la teinte)
                "surface": "#FFF8EB" // -> bg-brand-surface
            },
        },
    },
};
export const plugins = [require('@tailwindcss/typography')];