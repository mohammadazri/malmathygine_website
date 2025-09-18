"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

// Constants for motion
const ANIMATION_X = 60;
const ANIMATION_Y = 20;
const FLOAT_Y = [0, -20, 0];

interface ButtonProps {
  href: string;
  label: string;
  gradient: string;
  hoverShadow: string;
  icon?: JSX.Element;
}

function FuturisticButton({ href, label, gradient, hoverShadow }: ButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: hoverShadow }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full sm:w-auto relative rounded-3xl overflow-hidden group"
    >
      <Link
        href={href}
        className="relative z-10 w-full sm:w-auto py-3 sm:py-4 px-4 sm:px-6 text-base sm:text-lg font-bold flex items-center justify-center text-white transition-all duration-300"
        aria-label={label}
      >
        {label} <span className="ml-2 inline-block transition-transform group-hover:translate-x-2">→</span>
      </Link>
      <div
        className={`absolute inset-0 ${gradient} opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none`}
      />
    </motion.div>
  );
}


export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const heroLogo =
    mounted && resolvedTheme === "light"
      ? "/images/dark_logo.png"
      : "/images/hero.png";

  // Buttons array to avoid repetition
  const buttons = [
    {
      label: "Our Services",
      href: "/services",
      gradient: "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500",
      hoverShadow: "0 0 20px rgba(0,200,255,0.7)",
    },
    {
      label: "Get a Quote",
      href: "/contact",
      gradient: "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500",
      hoverShadow: "0 0 25px rgba(255,0,128,0.8),0 0 50px rgba(255,0,128,0.6)",
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      
      {/* Left Column */}
      <motion.div
        className="hidden md:flex md:w-1/2 flex-col justify-start px-16"
        initial={{ x: -ANIMATION_X, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-80 h-80 relative -mb-16">
          <Image src={heroLogo} alt="Hero Logo" fill className="object-contain" priority />
        </div>

        <motion.h1
          className="text-5xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-white"
          initial={{ y: ANIMATION_Y, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Industrial <span className="text-primary dark:text-accent">Mat Rental</span> & <span className="text-secondary dark:text-pink-400">Hygiene Solutions</span> for Your Buildings
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-6"
          initial={{ y: ANIMATION_Y, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Supplying, collecting, washing, and delivering heavy-duty mats for entrances, lifts, and toilets. We also provide industrial hygiene products and pest control services.
        </motion.p>

        <div className="flex gap-6">
          {buttons.map((btn) => (
            <FuturisticButton
              key={btn.label}
              href={btn.href}
              label={btn.label}
              gradient={btn.gradient}
              hoverShadow={btn.hoverShadow}
            />
          ))}
        </div>
      </motion.div>

      {/* Right Column */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 sm:px-12 py-12 md:py-16"
        initial={{ x: ANIMATION_X, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="w-full max-w-md sm:max-w-lg"
          animate={{ y: FLOAT_Y }}
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
{/* Mobile Buttons */}
<div className="md:hidden flex flex-col sm:flex-row gap-3 w-full max-w-xs mx-auto">
  {buttons.map((btn) => (
    <FuturisticButton
      key={btn.label}
      href={btn.href}
      label={btn.label}
      gradient={btn.gradient}
      hoverShadow={btn.hoverShadow}
    />
  ))}
</div>

      </motion.div>

      {/* Floating Shapes */}
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
