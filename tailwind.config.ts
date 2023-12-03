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
      primary: "#FF385C",
      "light-gray": "#EBEBEB",
      "medium-gray": "#F7F7F7",
      "dark-gray": "#717171",
    },
    extend: {
      backgroundImage: {
        "primary-btn":
          "radial-gradient(1413.54% 103.95% at -3.95% 100%, #D33753 0%, #D13660 52.83%, #C72D65 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
