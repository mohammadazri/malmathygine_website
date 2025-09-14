"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Facebook, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";

import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/lib/site";
import { navbarColors } from "@/lib/theme";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = [
  { label: "Mat Rental", href: "/services#mat-rental" },
  { label: "Mat Cleaning", href: "/services#cleaning" },
  { label: "Mat Sales", href: "/services#sales" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const mobileRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  const colors = navbarColors[theme === "dark" ? "dark" : "light"];

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node;
      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b backdrop-blur-sm", colors.bg, colors.border)}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* LEFT: Logo + name */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image src="/images/logo.png" alt={siteConfig.name} fill className="rounded-full object-cover" priority />
          </div>
          <span className="hidden sm:inline-block text-lg font-semibold text-gray-900 dark:text-gray-100">
            {siteConfig.name}
          </span>
        </Link>

        {/* CENTER: Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors",
                pathname === item.href ? "text-primary-600" : colors.link,
                colors.linkHover
              )}
            >
              {item.label}
            </Link>
          ))}

          {/* Services dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((s) => !s)}
              className={cn(
                "inline-flex items-center gap-2 text-sm font-medium transition-colors",
                servicesOpen ? "text-primary-600" : colors.link,
                colors.linkHover
              )}
            >
              <span>Services</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {servicesOpen && (
              <div
                role="menu"
                aria-label="Services"
                className={cn("absolute right-0 mt-2 w-48 rounded-lg border p-2 shadow-lg", colors.dropdownBg)}
              >
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    role="menuitem"
                    className={cn("block rounded px-3 py-2 text-sm", colors.dropdownItem)}
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* RIGHT: Facebook + ThemeSwitch */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={siteConfig.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors", colors.facebookBg)}
            aria-label="Malmat on Facebook"
          >
            <Facebook className="h-5 w-5" />
            <span className="hidden xl:inline">Facebook</span>
          </a>
          <ThemeSwitch />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setMobileOpen(true)} aria-label="Open menu" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
            <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
          </button>
        </div>
      </div>

      {/* MOBILE Drawer */}
      {mobileOpen && (
        <div ref={mobileRef} className="fixed inset-0 z-50 flex" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className={cn("relative ml-auto w-full max-w-xs shadow-xl p-4 flex flex-col gap-4", colors.mobileBg)}>
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/images/logo.png" alt={siteConfig.name} width={34} height={34} className="rounded-full" />
                <span className="font-semibold text-gray-900 dark:text-gray-100">{siteConfig.name}</span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                <X className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} className={cn("block rounded px-3 py-2 text-base font-medium", colors.link, colors.linkHover)} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}

              <div>
                <div className="mb-2 text-sm font-semibold">Services</div>
                {SERVICES.map((s) => (
                  <Link key={s.href} href={s.href} className={cn("block rounded px-3 py-2 text-sm", colors.dropdownItem)} onClick={() => setMobileOpen(false)}>
                    {s.label}
                  </Link>
                ))}
              </div>

              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow hover:brightness-105"
              >
                Chat on WhatsApp
              </a>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className={cn("inline-flex items-center gap-2 rounded px-3 py-2 text-sm", colors.facebookBg)}>
                  <Facebook className="h-5 w-5" />
                  Facebook
                </a>
                <ThemeSwitch />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
