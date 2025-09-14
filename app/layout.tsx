import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";
import { siteConfig } from "@/lib/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
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
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased transition-colors duration-300",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="flex flex-col min-h-screen">
            {/* Sticky Navbar */}
            <header className="sticky top-0 z-50 shadow-sm bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
              <Navbar />
            </header>

            {/* Main content */}
            <main className="flex-grow container mx-auto max-w-7xl px-6 py-8 md:py-12">
              {children}
            </main>

            {/* Footer */}
            <footer className="w-full border-t border-gray-200 dark:border-gray-700 py-6 flex flex-col md:flex-row items-center justify-between gap-3 px-6 md:px-0">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Facebook
                </a>
                <span className="text-sm text-gray-400">|</span>
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
