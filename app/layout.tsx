import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";
import { siteConfig } from "@/lib/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

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

            {/* Main content: full width, no padding */}
            <main className="flex-grow w-full">{children}</main>

            {/* Footer */}
            <footer className="w-full border-t border-gray-200 dark:border-gray-700 py-6 flex flex-col md:flex-row items-center justify-between gap-3 px-4 md:px-8">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                  {siteConfig.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                  Contact: {siteConfig.contact.phone} | {siteConfig.contact.email} |{" "}
                  {siteConfig.contact.address}
                </p>
              </div>

              <div className="flex items-center gap-4">
                {siteConfig.socialLinks.facebook && (
                  <a
                    href={siteConfig.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    Facebook
                  </a>
                )}
                {siteConfig.socialLinks.instagram && (
                  <a
                    href={siteConfig.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-600 transition-colors"
                  >
                    Instagram
                  </a>
                )}
                <span className="text-sm text-gray-400 hidden md:inline">|</span>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Designed with care using HeroUI & Next.js
                </p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
