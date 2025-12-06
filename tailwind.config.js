/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
];
export const theme = {
    extend: {
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
export const plugins = [];