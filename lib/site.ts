// site.ts
// Centralized site configuration for MalMath Hygiene

export const siteConfig = {
  name: "MalMat Hygiene",
  shortName: "MalMat",
  description:
    "MalMat Hygiene provides professional floor mat cleaning services in Malaysia. We pick up, wash, and replace mats to keep your business clean and hygienic.",
  url: "https://malmathygiene.com", // Update with your domain
  logo: "/images/logo.png", // Path to your logo
  defaultLanguage: "en-US",
  themeColor: {
    light: "#ffffff",
    dark: "#111827",
  },
  ogImage: "/images/logo.png", // OG image for SEO
  socialLinks: {
    facebook: "https://www.facebook.com/malmathygiene",
    instagram: null,
    linkedin: null,
    twitter: null,
  },
  contact: {
    phone: "+603-58929572",
    email: "malmat26@gmail.com",
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

  // ✅ WhatsApp Config
  whatsapp: {
    number: "601161818108", // no "+" sign here (for wa.me format)
    defaultMessage:
      "Hi Bella, I came across MalMath Hygiene’s services and I’m impressed. I’d like to learn more about your mat rental, hygiene solutions, and pest control offerings. Could you please share the pricing or next steps? Thanks!",
  },
};
