/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Inter: "Inter",
                "Source Code Pro": "Source Code Pro",
            },
            colors: {
                overlay: "#001",
            },
        },
    },
    plugins: [require("daisyui")],
};
