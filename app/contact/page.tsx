"use client";

import { motion } from "framer-motion";
import { button as buttonStyles } from "@heroui/theme";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="relative w-full bg-background dark:bg-gray-900 overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get in <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Have questions or want to work with us? Reach out and let's make your space spotless.
        </motion.p>
      </div>

      {/* Contact Info & Form Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        {/* Contact Form */}
        <motion.form
          className="flex flex-col gap-6 p-8 bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">Send Us a Message</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl bg-white/20 dark:bg-gray-700/40 placeholder-gray-400 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-xl bg-white/20 dark:bg-gray-700/40 placeholder-gray-400 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            className="p-4 rounded-xl bg-white/20 dark:bg-gray-700/40 placeholder-gray-400 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
          />
          <button
            type="submit"
            className={buttonStyles({ color: "primary", radius: "full", variant: "shadow", className: "w-full" })}
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 p-6 bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl shadow-xl">
            <div className="w-12 h-12 relative">
              <Image src="/images/icons/facebook.png" alt="Facebook" fill className="object-contain" />
            </div>
            <div>
              <p className="font-semibold text-lg text-primary dark:text-accent">Facebook</p>
              <Link
                href="https://www.facebook.com/malmathygiene/?utm_source=chatgpt.com"
                target="_blank"
                className="text-gray-700 dark:text-gray-300"
              >
                Visit our Facebook page
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">Find Us Here</h2>
        <div className="w-full h-96 rounded-3xl overflow-hidden shadow-xl">
          {/* Replace with Google Maps embed if needed */}
          <Image
            src="/images/map_placeholder.png"
            alt="Location Map"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
