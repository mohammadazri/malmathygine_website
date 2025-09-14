// site.ts
// Centralized site configuration for MalMath Hygiene

export const siteConfig = {
  name: "MalMath Hygiene",
  shortName: "MalMath",
  description:
    "MalMath Hygiene provides professional floor mat cleaning services in Malaysia. We pick up, wash, and replace mats to keep your business clean and hygienic.",
  url: "https://malmathhygiene.com", // Update with your domain
  logo: "/images/logo.png", // Path to your logo
  defaultLanguage: "en-US",
  themeColor: {
    light: "#ffffff",
    dark: "#111827",
  },
  ogImage: "/images/logo.png", // OG image for SEO
  socialLinks: {
    facebook: "https://www.facebook.com/malmathygiene",
    instagram: "",
    linkedin: "",
    twitter: "",
  },
  contact: {
    phone: "+60XXXXXXXXX",
    email: "info@malmathhygiene.com",
    address: "Kuala Lumpur, Malaysia",
  },
  services: [
    {
      id: "floor-mat-service",
      title: "Floor Mat Cleaning",
      description:
        "Weekly or bi-weekly pickup, washing, and replacement of floor mats to maintain hygiene.",
    },
    {
      id: "custom-services",
      title: "Custom Hygiene Services",
      description:
        "Tailored hygiene solutions for businesses with high foot traffic.",
    },
  ],
  nav: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
};
  