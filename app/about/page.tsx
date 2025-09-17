"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

const teamMembers = [
  {
    name: "Azri Mohammad",
    role: "Founder & CEO",
    image: "/images/team/azri.png",
  },
  {
    name: "Sara Lim",
    role: "Operations Lead",
    image: "/images/team/sara.png",
  },
  {
    name: "Daniel Tan",
    role: "Lead Technician",
    image: "/images/team/daniel.png",
  },
];

const aboutTimeline = [
  { year: "2015", event: "Company founded with a mission to elevate hygiene standards." },
  { year: "2018", event: "Expanded services to include commercial floor mats and carpets." },
  { year: "2021", event: "Adopted futuristic cleaning technology for advanced sanitization." },
  { year: "2025", event: "Recognized as a top provider for business hygiene solutions in MY." },
];

export default function AboutPage() {
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
          About <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">MalMath</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We deliver futuristic cleaning solutions with precision, hygiene, and a high-tech touch.
        </motion.p>

        {/* Floating shapes */}
        <motion.div
          className="absolute -top-24 -left-24 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Company Story / Timeline */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">Our Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {aboutTimeline.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="p-6 bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl shadow-xl"
            >
              <span className="text-primary dark:text-accent font-bold text-lg">{item.year}</span>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Vision, Mission, Values */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">Vision & Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Vision", text: "To set the standard for futuristic cleaning solutions across Malaysia.", icon: "/images/icons/vision.png" },
            { title: "Mission", text: "Deliver high-tech hygiene solutions with precision, speed, and reliability.", icon: "/images/icons/mission.png" },
            { title: "Values", text: "Innovation, Integrity, and Customer Satisfaction.", icon: "/images/icons/values.png" },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex flex-col items-center p-6 rounded-3xl bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl shadow-xl hover:scale-105 transition-transform duration-500"
            >
              <div className="w-16 h-16 mb-4 relative">
                <Image src={item.icon} alt={item.title} fill className="object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-accent mb-2">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex flex-col items-center p-6 rounded-3xl bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500"
            >
              <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden shadow-lg">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-accent">{member.name}</h3>
              <p className="text-gray-700 dark:text-gray-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Join Our Journey Towards Futuristic Hygiene
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Experience the next level of cleaning technology for your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary dark:text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
