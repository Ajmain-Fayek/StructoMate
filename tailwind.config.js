/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Inter: "Inter",
                "Source-Code-Pro": "Source Code Pro",
            },
            colors: {
                overlay: "#001",
            },
            screens: {
                coupons: "785px",
            },
        },
    },
    plugins: [require("daisyui")],
};
