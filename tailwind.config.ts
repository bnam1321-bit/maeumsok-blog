import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-noto)", "Noto Sans KR", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
                serif: ["var(--font-serif)", "Noto Serif KR", "Georgia", "serif"],
            },
            colors: {
                clinic: {
                    teal: "#0B3B46",
                    tealLight: "#135666",
                    tealSoft: "#EBF3F5",
                    bronze: "#C25E28",
                    bronzeLight: "#FDF4EE",
                    ivory: "#FAF8F5",
                    sand: "#F2ECE4",
                    charcoal: "#18181B",
                },
            },
        },
    },
    plugins: [typography],
};
export default config;
