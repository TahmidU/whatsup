/** @type {import('tailwindcss').Config} */
import { colours } from "./resources/js/constants/Themes";
export default {
    content: ["./resources/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
            },
            colors: {
                ...colours,
            },
        },
    },
    plugins: [],
};
