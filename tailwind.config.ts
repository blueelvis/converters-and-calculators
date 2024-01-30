import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    light: {},
    dark: {}
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "purple-dark": {
          extend: "dark",
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
              50: "#3B096C",
              100: "#D8EAFD",
              200: "#B2D3FC",
              300: "#8BB7F6",
              400: "#6C9DEC",
              500: "#3E76E1",
              600: "#2D5BC1",
              700: "#1F42A2",
              800: "#132E82",
              900: "#0B1F6C",
              DEFAULT: "#3E76E1",
              foreground: "#ffffff",
            },
            focus: "#0B1F6C",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          }
        }
      }
    })
  ],
};
export default config;
