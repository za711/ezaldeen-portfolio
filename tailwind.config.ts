import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F2742",
        secondary: "#2563EB",
        accent: "#D6A84F",
        "accent-alt": "#1B4F8A",
        bg: "#F7F8FA",
        surface: "#FFFFFF",
        text: "#111827",
        muted: "#6B7280",
        border: "#E5E7EB",
        success: "#059669"
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-arabic)", "var(--font-cairo)", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        card: "0 4px 24px rgba(15,39,66,0.08)",
        hover: "0 12px 40px rgba(15,39,66,0.16)",
        button: "0 4px 16px rgba(37,99,235,0.30)"
      },
      borderRadius: {
        card: "20px",
        input: "12px"
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(135deg, #0F2742 0%, #1B4F8A 100%)",
        "blue-gradient": "linear-gradient(135deg, #2563EB 0%, #1B4F8A 100%)",
        "gold-gradient": "linear-gradient(135deg, #D6A84F 0%, #B8891A 100%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" }
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(214,168,79,0)" },
          "50%": { boxShadow: "0 0 24px rgba(214,168,79,0.35)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-gold": "pulseGold 2.4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
