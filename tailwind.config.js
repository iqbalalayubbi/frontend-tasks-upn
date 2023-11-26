/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#157F1F",
                second: "#1D263B",
                bg: "#E2E2E2",
            },
        },
    },
    plugins: [],
};
