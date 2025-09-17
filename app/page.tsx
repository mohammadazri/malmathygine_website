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

  // fallback to light logo until mounted
  const heroLogo =
    mounted && resolvedTheme === "light"
      ? "/images/dark_logo.png"
      : "/images/hero.png";

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row bg-background dark:bg-gray-900 overflow-hidden">
      
      {/* Left Side */}
      <motion.div
        className="md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-16"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Large Hero Logo */}
        <div className="w-full md:w-3/4 relative mb-8">
          <Image
            src={heroLogo}
            alt="MalMath Hero"
            width={400}
            height={400}
            className="object-contain"
            priority
          />
        </div>

        {/* Tagline */}
        <motion.p
          className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Professional Floor Mat Cleaning for a Spotless & Hygienic Business
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link
            href="/services"
            className={buttonStyles({
              color: "secondary",
              radius: "full",
              variant: "shadow",
            })}
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "bordered",
            })}
          >
            Get a Quote
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        className="md:w-1/2 relative flex justify-center items-center px-8 md:px-16 py-16"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/hero-mats.png"
          alt="Floor Mat Cleaning"
          width={500}
          height={500}
          className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* Optional Floating Background Shapes */}
      <motion.div
        className="absolute -top-16 -left-16 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
}
