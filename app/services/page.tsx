"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";
import { theme } from "@/lib/theme";

const services = [
  {
    title: "Floor Mat Cleaning",
    description: "High-quality deep cleaning for commercial and residential floor mats.",
    image: "/images/services/floor_mat.png",
  },
  {
    title: "Carpet Sanitization",
    description: "Ensure a hygienic workspace with professional carpet sanitization.",
    image: "/images/services/office.png",
  },
  {
    title: "Stain Removal",
    description: "Advanced stain removal technology for all types of fabrics.",
    image: "/images/services/stain.png",
  },
  {
    title: "Maintenance Plans",
    description: "Custom maintenance programs to keep your mats and carpets spotless.",
    image: "/images/services/maintainance.png",
  },
];

export default function ServicesPage() {
  return (
    <section className="relative w-full bg-background dark:bg-gray-900 overflow-hidden">
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute -top-32 -left-32 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight">
          Our <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Futuristic Services</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12">
          Advanced cleaning solutions designed to give your business spotless hygiene and a futuristic touch.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="group relative p-6 rounded-3xl bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500"
          >
            {/* Neon Glow Border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-primary group-hover:to-accent pointer-events-none" />
            
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-32 h-32 relative mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-primary dark:text-accent mb-2 group-hover:text-secondary transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900 dark:text-white">
          How We Deliver Futuristic Cleaning
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {[
            { step: 1, title: "Inspection & Pickup", description: "We analyze your mats and prepare them for deep futuristic cleaning." },
            { step: 2, title: "Deep Cleaning & Sanitization", description: "Advanced machines sanitize with precision, leaving zero residues." },
            { step: 3, title: "Delivery & Quality Check", description: "Your mats are returned pristine, ready for futuristic hygiene." },
          ].map((s) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: s.step * 0.2 }}
              className="flex flex-col items-center p-6 rounded-3xl bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl shadow-lg hover:scale-105 transition-transform duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent text-white flex items-center justify-center mb-4 text-2xl font-bold">
                {s.step}
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-accent mb-2">{s.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Ready to Elevate Your Hygiene?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Get a futuristic cleaning plan tailored to your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary dark:text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
