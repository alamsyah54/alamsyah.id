import type { Config } from "tailwindcss"

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            colors: {
                dark: {
                    100: "#606060",
                    200: "#535353",
                    300: "#434343",
                    400: "#383838",
                    500: "#2c2c2c",
                    600: "#1f1f1f",
                    700: "#181818",
                    800: "#0d0d0d",
                },
            },
            fontFamily: {
                conthrax: "'Conthrax', sans-serif",
            },
            backgroundImage: {
                netflixMedium:
                    "url('https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/503ebb79-320a-49ae-ab11-ac47b76db697/ID-en-20240122-popsignuptwoweeks-perspective_alpha_website_medium.jpg')",
                netflixLarge:
                    "url('https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/503ebb79-320a-49ae-ab11-ac47b76db697/ID-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
            },
        },
    },
    plugins: [],
}
export default config
