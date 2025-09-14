// theme.ts
// Centralized theme for light/dark mode with semantic colors

export const theme = {
  light: {
    colors: {
      background: "#FFFFFF", // clean, minimal
      surface: "#F8FAFC", // cards, containers
      primary: "#1D4ED8", // trust, buttons, links
      secondary: "#10B981", // freshness, hygiene highlights
      accent: "#FBBF24", // call-to-action
      textPrimary: "#111827", // readable text
      textSecondary: "#374151", // secondary text
      border: "#E5E7EB", // subtle dividers
      hover: "#2563EB", // button hover
      shadow: "rgba(0, 0, 0, 0.05)", // subtle elevation
    },
    typography: {
      fontFamily: "'Inter', sans-serif",
      headings: "'Inter', sans-serif",
      body: "'Inter', sans-serif",
    },
  },

  dark: {
    colors: {
      background: "#111827", // dark mode background
      surface: "#1F2937", // cards / containers
      primary: "#3B82F6", // trust color in dark mode
      secondary: "#34D399", // fresh, visible accent
      accent: "#FBBF24", // CTA stands out in dark
      textPrimary: "#F9FAFB", // readable text
      textSecondary: "#D1D5DB", // secondary text
      border: "#374151", // divider
      hover: "#60A5FA", // hover states
      shadow: "rgba(0, 0, 0, 0.5)", // subtle elevation in dark
    },
    typography: {
      fontFamily: "'Inter', sans-serif",
      headings: "'Inter', sans-serif",
      body: "'Inter', sans-serif",
    },
  },

  // Semantic colors (mapped to human psychology)
  semantic: {
    success: "#10B981", // green = hygiene, health
    warning: "#FBBF24", // yellow = call-to-action
    error: "#EF4444", // red = warnings, errors
    info: "#3B82F6", // blue = trust, cleanliness
  },
};
