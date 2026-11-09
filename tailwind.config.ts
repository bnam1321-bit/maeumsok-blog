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
                sans: [
                    '"Pretendard Variable"',
                    "Pretendard",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "system-ui",
                    '"Apple SD Gothic Neo"',
                    '"Noto Sans KR"',
                    "sans-serif",
                ],
                serif: ['"Noto Serif KR"', "Georgia", "serif"],
            },
            colors: {
                clinic: {
                    teal: "#0B3B46",
                    tealLight: "#135666",
                    tealSoft: "#EBF3F5",
                    bronze: "#C25E28",
                    bronzeLight: "#FDF4EE",
                    ivory: "#F7F5F0",
                    sand: "#EFECE6",
                    charcoal: "#191918",
                },
            },
        },
    },
    plugins: [typography],
};
export default config;
