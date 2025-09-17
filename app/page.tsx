"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { button as buttonStyles } from "@heroui/theme";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until mounted to avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  const heroLogo =
    mounted && resolvedTheme === "light"
      ? "/images/dark_logo.png"
      : "/images/hero.png";

  return (
    <section className="relative w-full min-h-screen pt-7 flex flex-col md:flex-row bg-background dark:bg-gray-900 overflow-hidden">
  
      {/* Left Column (Desktop Only) */}
      <motion.div
        className="hidden md:flex md:w-1/2 flex-col justify-center px-16 py-16"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-78 h-78 relative mb-6">
          <Image src={heroLogo} alt="MalMath Hero" fill className="object-contain" priority />
        </div>

        <motion.h1
          className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Professional <span className="text-primary dark:text-accent">Floor Mat Cleaning</span> for a <span className="text-secondary dark:text-pink-400">Spotless & Hygienic</span> Business
        </motion.h1>

        <motion.div
          className="flex gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link
            href="/services"
            className={buttonStyles({ color: "secondary", radius: "full", variant: "shadow" })}
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className={buttonStyles({ color: "primary", radius: "full", variant: "bordered" })}
          >
            Get a Quote
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Column (Mobile + Desktop Image) */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 sm:px-12 py-12 md:py-16"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Image with Floating Animation */}
        <motion.div
          className="w-full max-w-md sm:max-w-lg"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Image
            src="/images/services/floor_mat.png"
            alt="Floor Mat Cleaning"
            width={500}
            height={500}
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>

        {/* Mobile Tagline */}
        <motion.h1
          className="md:hidden text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mt-6 mb-4 leading-snug"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Professional <span className="text-primary dark:text-accent">Floor Mat Cleaning</span> for a <span className="text-secondary dark:text-pink-400">Spotless & Hygienic</span> Business
        </motion.h1>

        {/* Mobile Buttons */}
        <motion.div
          className="md:hidden flex flex-col sm:flex-row gap-4 w-full max-w-xs mx-auto"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link
            href="/services"
            className={buttonStyles({ color: "secondary", radius: "full", variant: "shadow", className: "w-full" })}
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className={buttonStyles({ color: "primary", radius: "full", variant: "bordered", className: "w-full" })}
          >
            Get a Quote
          </Link>
        </motion.div>
      </motion.div>

      {/* Animated Background Shapes */}
      <motion.div
        className="absolute -top-20 -left-20 w-60 h-60 sm:w-72 sm:h-72 bg-accent/20 rounded-full filter blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-60 h-60 sm:w-72 sm:h-72 bg-primary/20 rounded-full filter blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
}
