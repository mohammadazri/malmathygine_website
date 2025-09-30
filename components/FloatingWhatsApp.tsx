"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/site";

export default function FloatingWhatsApp() {
  const { number, defaultMessage } = siteConfig.whatsapp;
  const message = encodeURIComponent(defaultMessage);

  // ✅ Use wa.me (works better for mobile apps + web)
  const whatsappLink = `https://wa.me/${number}?text=${message}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-out"
      >
        <FaWhatsapp
          size={28}
          className="group-hover:rotate-6 transition-transform"
        />
      </Link>
    </motion.div>
  );
}
