import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";
import { siteConfig } from "@/lib/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// --- SEO & OpenGraph / Twitter Cards ---
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      { url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
              logo: siteConfig.logo,
              sameAs: Object.values(siteConfig.socialLinks).filter(Boolean),
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: siteConfig.contact.phone,
                  email: siteConfig.contact.email,
                  contactType: "customer service",
                  areaServed: "MY",
                  availableLanguage: "EN",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={clsx(
          "min-h-screen w-full text-foreground bg-background font-sans antialiased transition-colors duration-300",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="flex flex-col min-h-screen w-full">
            {/* Sticky Navbar */}
            <header className="sticky top-0 z-50 shadow-md bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
              <Navbar />
            </header>

            {/* Main content */}
            <main className="flex-grow w-full">{children}</main>

            {/* Footer */}
            <Footer />

            {/* Floating WhatsApp */}
            <FloatingWhatsApp />
          </div>
        </Providers>
      </body>
    </html>
  );
}
