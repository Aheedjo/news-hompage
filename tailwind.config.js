/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "soft-orange": {
                    DEFAULT: "hsl(35, 77%, 62%)",
                },
                "soft-red": {
                    DEFAULT: "hsl(5, 85%, 63%)",
                },
                "off-white": {
                    DEFAULT: "hsl(36, 100%, 99%)",
                },
                "grayish-blue": {
                    DEFAULT: "hsl(233, 8%, 79%)",
                },
                "dark-grayish-blue": {
                    DEFAULT: "hsl(236, 13%, 42%)",
                },
                "very-dark-blue": {
                    DEFAULT: "hsl(240, 100%, 5%)",
                },
            },
            backgroundImage: {
                "desktop-image":
                    "url('../public/images/image-web-3-desktop.jpg')",
                "mobile-image":
                    "url('../public/images/image-web-3-mobile.jpg')",
            },
        },
    },
    plugins: [],
};
