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

  useEffect(() => setMounted(true), []);

  if (!mounted) return <nav className="w-full fixed top-0 left-0 z-50 h-16 bg-white dark:bg-gray-900" />;

  const colors = currentTheme === "dark" ? theme.dark.colors : theme.light.colors;

  return (
    <nav
      className={clsx(
        "w-full fixed top-0 left-0 z-50 backdrop-blur-md shadow-lg transition-all duration-500",
        currentTheme === "dark" ? "bg-gray-900/50" : "bg-white/50",
        className
      )}
    >
      <div className="max-w-full mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo + Company Name */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-12 h-12 relative">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} Logo`}
              fill
              className="object-contain"
            />
          </div>
          <span
            className="text-xl font-extrabold tracking-wide transition-colors"
            style={{ color: colors.companyText }}
          >
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative font-medium text-gray-900 dark:text-gray-100 group"
              style={{ color: pathname === item.href ? colors.secondary : colors.textPrimary }}
            >
              {item.title}
              {/* Futuristic underline animation */}
              <span
                className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] transition-all duration-300 group-hover:w-full"
                style={{
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                }}
              ></span>
            </Link>
          ))}

          {/* Social Icon */}
          <a
            href={siteConfig.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[var(--color-primary)]/50"
            style={{ color: colors.primary }}
          >
            <Facebook size={22} />
          </a>

          <ThemeSwitch className="ml-4" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <ThemeSwitch className="mr-2" />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[var(--color-primary)] hover:to-[var(--color-secondary)] hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-primary)]/40"
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
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 relative">
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.name} Logo`}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[var(--color-primary)] hover:to-[var(--color-secondary)] hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-primary)]/40"
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col p-6 space-y-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-bold text-lg relative group"
              style={{
                color: pathname === item.href ? colors.secondary : colors.textPrimary,
              }}
            >
              {item.title}
              <span
                className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r transition-all duration-300 group-hover:w-full"
                style={{
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                }}
              ></span>
            </Link>
          ))}

          {/* Social Icon */}
          <a
            href={siteConfig.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[var(--color-primary)]/50"
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
