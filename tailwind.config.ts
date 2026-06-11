import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#071326",
          900: "#0B1B33",
          800: "#112846",
          700: "#17385E"
        },
        bank: {
          navy: "#091A33",
          blue: "#123B66",
          steel: "#5B6C80",
          mist: "#F4F6F8",
          line: "#D9E0E8",
          gold: "#A88445",
          goldSoft: "#E8DDC9"
        }
      },
      boxShadow: {
        institutional: "0 24px 60px rgba(7, 19, 38, 0.12)",
        card: "0 14px 30px rgba(7, 19, 38, 0.08)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "IBM Plex Sans",
          "Source Sans 3",
          "Neue Haas Grotesk Text",
          "Arial",
          "sans-serif"
        ],
        editorial: ["Georgia", "Cambria", "Times New Roman", "serif"]
      },
      animation: {
        "fade-up": "fadeUp 720ms ease-out both",
        "slow-drift": "slowDrift 9s ease-in-out infinite"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        slowDrift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(10px, -10px, 0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
