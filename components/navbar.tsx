"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Menu, X, Facebook } from "lucide-react";

import { ThemeSwitch } from "./theme-switch";
import { siteConfig } from "@/lib/site";
import { theme } from "@/lib/theme";
import { useTheme } from "next-themes";

export interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { theme: currentTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Fix hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder nav until mounted
    return (
      <nav className="w-full fixed top-0 left-0 z-50 h-16 bg-white dark:bg-gray-900" />
    );
  }

  const colors =
    currentTheme === "dark" ? theme.dark.colors : theme.light.colors;

  return (
    <nav
      className={clsx(
        "w-full fixed top-0 left-0 z-50 backdrop-blur-md shadow-lg transition-all duration-500",
        currentTheme === "dark" ? "bg-gray-900/50" : "bg-white/50",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo + Company Name */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 relative">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} Logo`}
              fill
              className="object-contain"
            />
          </div>
          <span
            className="hidden md:inline text-lg font-extrabold tracking-wide transition-colors"
            style={{ color: colors.companyText }}
          >
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "relative font-medium hover:transition-colors transition-colors",
                pathname === item.href
                  ? "text-secondary"
                  : "text-gray-900 dark:text-gray-100",
                "hover:text-secondary"
              )}
            >
              {item.title}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full rounded"></span>
            </Link>
          ))}

          {/* Facebook Icon */}
          <a
            href={siteConfig.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 hover:opacity-80 transition-opacity"
            style={{ color: colors.primary }}
          >
            <Facebook size={20} />
          </a>

          <ThemeSwitch className="ml-4" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <ThemeSwitch className="mr-2" />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={clsx(
          "md:hidden fixed top-0 left-0 w-full h-screen bg-white dark:bg-gray-900/95 backdrop-blur-xl transform transition-transform duration-500 shadow-xl",
          open ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex flex-col mt-16 p-6 space-y-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-bold text-lg transition-colors hover:text-secondary"
              style={{
                color:
                  pathname === item.href
                    ? colors.secondary
                    : colors.textPrimary,
              }}
            >
              {item.title}
            </Link>
          ))}

          <a
            href={siteConfig.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80 transition-opacity"
            style={{ color: colors.primary }}
          >
            <Facebook size={24} />
            <span className="ml-2 font-semibold">Facebook</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
