/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class", // Enable dark mode support with class strategy
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Define the paths to all of your template files
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: "#ffffff",
        black: "#000000",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      backgroundImage: {
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      },
      animation: {
        "slide-in-right": "slide-in-right 0.3s ease-out",
        fadeIn: "fadeIn 0.5s ease-out",
      },
      keyframes: {
        "slide-in-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.foreground"),
            a: {
              color: theme("colors.primary.DEFAULT"),
              textDecoration: "underline",
              "&:hover": {
                color: theme("colors.primary.foreground"),
              },
            },
            h1: {
              color: theme("colors.foreground"),
              fontWeight: "800",
            },
            h2: {
              color: theme("colors.foreground"),
              fontWeight: "700",
            },
            h3: {
              color: theme("colors.foreground"),
              fontWeight: "600",
            },
            blockquote: {
              fontStyle: "italic",
              color: theme("colors.muted.foreground"),
              borderLeftColor: theme("colors.muted.DEFAULT"),
            },
            strong: {
              color: theme("colors.foreground"),
              fontWeight: "700",
            },
            code: {
              backgroundColor: theme("colors.muted.DEFAULT"),
              color: theme("colors.foreground"),
              padding: "0.2em 0.4em",
              borderRadius: "0.3em",
              fontFamily: theme("fontFamily.mono"),
            },
            pre: {
              backgroundColor: theme("colors.muted.DEFAULT"),
              padding: "1em",
              borderRadius: "0.5em",
            },
            ul: {
              listStyleType: "disc",
              paddingLeft: "1.5em",
            },
            ol: {
              listStyleType: "decimal",
              paddingLeft: "1.5em",
            },
            li: {
              marginBottom: "0.5em",
            },
            p: {
              marginTop: "0",
              marginBottom: "1em",
              lineHeight: "1.75",
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.foreground"),
            a: {
              color: theme("colors.primary.DEFAULT"),
              "&:hover": {
                color: theme("colors.primary.foreground"),
              },
            },
            blockquote: {
              borderLeftColor: theme("colors.muted.DEFAULT"),
              color: theme("colors.muted.foreground"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Enable typography plugin
  ],
};
