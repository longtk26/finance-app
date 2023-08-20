/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#00710f",
                icon: "#2db84c",
                second: "#00bc2a",
                hover: "rgba(0,0,0,.04)",
                nav: "rgba(0,0,0,.54)",
                third: "#2db84c14",
            },
            boxShadow: {
                nav: "0 3px 7px 0 rgba(0,0,0,.27)",
                head: "0 1px 0 0 rgba(0,0,0,.12)",
                main: "0 3px 24px 0 rgba(0,0,0,.12)",
            },
        },
    },
    plugins: [],
};
