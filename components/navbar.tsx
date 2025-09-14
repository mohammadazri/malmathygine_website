"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Facebook, ChevronDown } from "lucide-react";

import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  // Services handled by dropdown
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

  // Close dropdown when clicking outside
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node;
      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setServicesOpen(false);
      }
      if (mobileRef.current && !mobileRef.current.contains(target)) {
        // don't auto-close mobile panel to avoid surprising user (optional)
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Close mobile menu on route change (optional)
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/70 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* LEFT: Logo + name */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              fill
              sizes="40px"
              className="rounded-full object-cover"
              priority
            />
          </div>
          <span className="hidden sm:inline-block text-lg font-semibold text-gray-900">
            {siteConfig.name}
          </span>
        </Link>

        {/* CENTER: Navigation links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary-600",
                pathname === item.href ? "text-primary-600" : "text-gray-700"
              )}
              aria-current={pathname === item.href ? "page" : undefined}
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
                "inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary-600",
                servicesOpen ? "text-primary-600" : "text-gray-700"
              )}
            >
              <span>Services</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {servicesOpen && (
              <div
                role="menu"
                aria-label="Services"
                className="absolute right-0 mt-2 w-48 rounded-lg border bg-white p-2 shadow-lg"
              >
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    role="menuitem"
                    className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* RIGHT: Facebook + Theme switch */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={siteConfig.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            aria-label="Malmat on Facebook"
          >
            <Facebook className="h-5 w-5 text-primary-600" />
            <span className="hidden xl:inline">Facebook</span>
          </a>

          {/* theme switcher (keeps your template component) */}
          <ThemeSwitch />
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* MOBILE: slide-over drawer (right) */}
      {mobileOpen && (
        <div
          ref={mobileRef}
          className="fixed inset-0 z-50 flex"
          role="dialog"
          aria-modal="true"
        >
          {/* backdrop */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />

          {/* panel */}
          <div className="relative ml-auto w-full max-w-xs bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/images/logo.png" alt={siteConfig.name} width={34} height={34} className="rounded-full" />
                <span className="font-semibold">{siteConfig.name}</span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-700" />
              </button>
            </div>

            <div className="px-4 py-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div>
                <div className="mb-2 text-sm font-semibold">Services</div>
                <div className="grid gap-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA in mobile drawer */}
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow hover:brightness-105"
              >
                Chat on WhatsApp
              </a>

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between">
                  <a
                    href={siteConfig.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <Facebook className="h-5 w-5 text-primary-600" />
                    Facebook
                  </a>
                  <ThemeSwitch />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
