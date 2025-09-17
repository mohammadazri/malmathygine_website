"use client";

import { FC, useEffect, useState } from "react";
import { Facebook as LucideFacebook, Instagram as LucideInstagram, Linkedin as LucideLinkedin } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useTheme } from "next-themes";
import { theme } from "@/lib/theme";

export const Footer: FC = () => {
  const { theme: currentTheme } = useTheme();
  const colors = currentTheme === "dark" ? theme.dark.colors : theme.light.colors;

  // Wait until mounted to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <h2 className="text-lg font-bold" style={{ color: colors.companyText }}>
            {siteConfig.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{siteConfig.description}</p>
          <p className="text-gray-500 dark:text-gray-300">
            {siteConfig.contact.phone} | {siteConfig.contact.email}
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {siteConfig.socialLinks.facebook && (
            <a
              href={siteConfig.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <LucideFacebook size={22} />
            </a>
          )}
          {siteConfig.socialLinks.instagram && (
            <a
              href={siteConfig.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
            >
              <LucideInstagram size={22} />
            </a>
          )}
          {siteConfig.socialLinks.linkedin && (
            <a
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
            >
              <LucideLinkedin size={22} />
            </a>
          )}
        </div>

        {/* Credits */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-1">
          <p className="text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p className="text-gray-400 dark:text-gray-500">
            Designed with ❤️ using Next.js & HeroUI
          </p>
        </div>

      </div>
    </footer>
  );
};
