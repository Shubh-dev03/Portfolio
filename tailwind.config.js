/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mist: "#E6EAE2",
        chalk: "#F4F5F0",
        pine: { DEFAULT: "#1E3B32", deep: "#162B24" },
        ink: { DEFAULT: "#111C17", soft: "#46524B" },
        signal: "#F2B632",
      },
      fontFamily: {
        display: [
          '"Bricolage Grotesque"',
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        body: ["Newsreader", "Georgia", "serif"],
        mono: [
          '"Geist Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
      },
    },
  },
  plugins: [],
};
