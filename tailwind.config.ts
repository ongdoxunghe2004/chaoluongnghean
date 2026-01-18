import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                turmeric: "#F4C430", // Vàng nghệ
                "red-orange": "#FF4500", // Cam đỏ
                "dark-green": "#006400", // Xanh lá đậm
                cream: "#FFFDD0", // Kem nhạt
            },
            fontFamily: {
                sans: ['var(--font-be-vietnam-pro)'],
                serif: ['var(--font-roboto-serif)'],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
