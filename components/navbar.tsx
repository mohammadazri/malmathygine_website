"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

import { ThemeSwitch } from "./theme-switch";

export interface NavbarProps {
  className?: string;
}

const navItems = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={clsx(
        "w-full fixed top-0 left-0 z-50 backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 shadow-md transition-colors duration-300",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-primary dark:text-primary">
          MalMath
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "font-medium transition-colors hover:text-primary dark:hover:text-primary",
                pathname === item.href
                  ? "text-primary dark:text-primary"
                  : "text-gray-700 dark:text-gray-200"
              )}
            >
              {item.title}
            </Link>
          ))}

          {/* Theme Switch */}
          <ThemeSwitch className="ml-4" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <ThemeSwitch className="mr-2" />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900/95 backdrop-blur-md w-full absolute top-16 left-0 shadow-lg transition-all">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "font-medium text-lg transition-colors hover:text-primary dark:hover:text-primary",
                  pathname === item.href
                    ? "text-primary dark:text-primary"
                    : "text-gray-800 dark:text-gray-200"
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
