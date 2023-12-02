import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "13px",
      sm: "14px",
    },
    colors: {
      "light-gray": "#EBEBEB",
      "medium-gray": "#F7F7F7",
      "dark-gray": "#717171",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
