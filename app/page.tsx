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

  useEffect(() => setMounted(true), []);

  const heroLogo =
    mounted && resolvedTheme === "light"
      ? "/images/dark_logo.png"
      : "/images/hero.png";

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      
      {/* Left Column (Desktop) */}
      <motion.div
        className="hidden md:flex md:w-1/2 flex-col justify-center px-16"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-80 h-80 relative -mb-16">
          <Image src={heroLogo} alt="MalMath Hero" fill className="object-contain" priority />
        </div>

        <motion.h1
          className="text-5xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Industrial <span className="text-primary dark:text-accent">Mat Rental</span> & <span className="text-secondary dark:text-pink-400">Hygiene Solutions</span> for Your Buildings
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Supplying, collecting, washing, and delivering heavy-duty mats for entrances, lifts, and toilets. We also provide industrial hygiene products and pest control services.
        </motion.p>

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

      {/* Right Column (Image) */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 sm:px-12 py-12 md:py-16"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="w-full max-w-md sm:max-w-lg"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/services/floor_mat.png"
            alt="Industrial Mat Rental"
            width={500}
            height={500}
            className="rounded-3xl shadow-2xl border-4 border-primary/20 dark:border-accent/20"
          />
        </motion.div>

        {/* Mobile Headline */}
        <motion.h1
          className="md:hidden text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mt-6 mb-4 leading-snug"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Industrial <span className="text-primary dark:text-accent">Mat Rental</span> & <span className="text-secondary dark:text-pink-400">Hygiene Solutions</span>
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

      {/* Floating & Animated Background Shapes */}
      <motion.div
        className="absolute -top-32 -left-32 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-300/20 rounded-full filter blur-2xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
