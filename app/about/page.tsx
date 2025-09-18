"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Droplets,
  Users,
} from "lucide-react";

const aboutCards = [
  {
    title: "Who We Are",
    desc: "We specialize in rental of heavy-duty mats for entrances, toilets, and lifts — designed to trap dust and absorb water before it reaches your floors.",
    icon: ShieldCheck,
  },
  {
    title: "What We Do",
    desc: "From supply to scheduled pickup, hygienic laundering, and delivery — plus washroom hygiene products and pest control solutions.",
    icon: Droplets,
  },
  {
    title: "Why Choose Us",
    desc: "A trusted alternative to global providers like Initial & Rentokil, we combine world-class standards with local service care.",
    icon: Users,
  },
  {
    title: "Our Promise",
    desc: "Cleaner, safer, more professional workplaces — leaving lasting impressions on staff, clients, and visitors.",
    icon: Sparkles,
  },
];

const AboutPage: FC = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-6 py-20 
      bg-gradient-to-br from-gray-50 via-white to-gray-100 
      dark:from-black dark:via-gray-900 dark:to-gray-800">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0 
        bg-[radial-gradient(circle_at_30%_30%,rgba(0,200,255,0.15),transparent),radial-gradient(circle_at_70%_70%,rgba(200,0,255,0.15),transparent)] 
        dark:bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.12),transparent),radial-gradient(circle_at_80%_80%,rgba(255,0,200,0.12),transparent)]"
      />

      <div className="relative max-w-7xl mx-auto text-center z-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold 
            bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-500 
            dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 
            bg-clip-text text-transparent mb-8"
        >
          About MALMAT Hygiene
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl mx-auto text-lg md:text-xl 
            text-gray-700 dark:text-gray-300 mb-16"
        >
          We help businesses project professionalism and maintain hygiene with{" "}
          <span className="font-semibold text-cyan-700 dark:text-cyan-400">
            industrial mat rentals
          </span>
          , washroom hygiene products, and pest control services.  
          Our mission:{" "}
          <span className="text-purple-700 dark:text-purple-400">
            safer, cleaner workplaces
          </span>{" "}
          that leave lasting impressions.
        </motion.p>

        {/* Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
              transition={{ duration: 0.6, delay: idx * 0.15, type: "spring" }}
              className="relative group p-8 rounded-3xl backdrop-blur-xl 
                bg-white/70 dark:bg-gray-800/50 
                border border-gray-200/50 dark:border-white/10 
                shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30 
                transition-all"
            >
              {/* Glow Hover */}
              <div className="absolute inset-0 rounded-3xl 
                bg-gradient-to-r from-cyan-400/30 via-purple-500/30 to-pink-500/30 
                opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 mb-5 flex items-center justify-center rounded-full 
                bg-gradient-to-tr from-cyan-500 to-purple-500 text-white shadow-lg">
                <card.icon size={28} />
              </div>

              {/* Text */}
              <h3 className="relative z-10 text-xl font-bold 
                text-gray-900 dark:text-white mb-3">
                {card.title}
              </h3>
              <p className="relative z-10 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <a
            href="/contact"
            className="inline-block px-10 py-4 rounded-full font-bold text-lg 
              bg-gradient-to-r from-cyan-600 to-purple-600 text-white 
              dark:from-cyan-400 dark:to-purple-500 
              hover:scale-105 shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
