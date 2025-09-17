export const theme = {
  light: {
    colors: {
      background: "#F0F4FF",        // light bluish background
      surface: "#FFFFFF",           // white cards / nav
      primary: "#1E3A8A",           // deep blue for main actions
      secondary: "#F97316",         // bright orange accent
      accent: "#8B5CF6",            // purple CTA
      companyText: "#1E40AF",       // company name text in light
      textPrimary: "#111827",       // main text
      textSecondary: "#374151",     // secondary text
      border: "#E5E7EB",            // subtle dividers
      hover: "#2563EB",             // hover effect for buttons/links
      shadow: "rgba(0, 0, 0, 0.05)",
    },
    typography: {
      fontFamily: "'Inter', sans-serif",
      headings: "'Poppins', sans-serif",
      body: "'Inter', sans-serif",
    },
  },

  dark: {
    colors: {
      background: "#0F172A",        // deep dark blue
      surface: "#1E293B",           // dark container/nav
      primary: "#3B82F6",           // bright blue
      secondary: "#F59E0B",         // gold accent
      accent: "#8B5CF6",            // purple CTA
      companyText: "white",       // cyan company name for dark mode
      textPrimary: "#F8FAFC",       // main text
      textSecondary: "#CBD5E1",     // secondary text
      border: "#334155",            // divider
      hover: "#60A5FA",
      shadow: "rgba(0, 0, 0, 0.6)",
    },
    typography: {
      fontFamily: "'Inter', sans-serif",
      headings: "'Poppins', sans-serif",
      body: "'Inter', sans-serif",
    },
  },

  semantic: {
    success: "#10B981",
    warning: "#FBBF24",
    error: "#EF4444",
    info: "#3B82F6",
  },
};
