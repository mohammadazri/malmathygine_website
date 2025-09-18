"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Service = {
  title: string;
  description: string;
  image: string;
};

type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Industrial Mat Rental",
    description: "High-quality entrance and anti-fatigue mats for commercial & industrial spaces.",
    image: "/images/services/industrial_mats.png",
  },
  {
    title: "Hygiene Products Supply",
    description: "Premium hand sanitizers, soaps, and dispensers for offices and facilities.",
    image: "/images/services/hygiene.png",
  },
  {
    title: "Pest Control Services",
    description: "Safe and effective pest control solutions for commercial buildings.",
    image: "/images/services/pest_control.png",
  },
  {
    title: "Maintenance & Delivery",
    description: "Scheduled pickup, cleaning, and delivery of mats with quality assurance.",
    image: "/images/services/maintenance.png",
  },
];

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Inspection & Pickup",
    description: "We analyze your mats and schedule pickup for cleaning or maintenance.",
  },
  {
    step: 2,
    title: "Deep Cleaning & Sanitization",
    description: "Advanced machines sanitize mats and facilities, leaving zero residues.",
  },
  {
    step: 3,
    title: "Delivery & Quality Check",
    description: "Mats are returned pristine, ensuring hygiene and safety for your spaces.",
  },
];

// === Sub Components ===
const BackgroundAnimations = () => (
  <>
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
    <motion.div
      className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-300/20 rounded-full filter blur-2xl"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  </>
);

const ServiceCard = ({ service, idx }: { service: Service; idx: number }) => (
  <motion.div
    key={service.title}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: idx * 0.2 }}
    className="group relative p-6 rounded-3xl bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-500"
  >
    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-primary group-hover:to-accent pointer-events-none" />
    <div className="flex flex-col items-center text-center relative z-10">
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-primary dark:text-accent mb-2 group-hover:text-secondary transition-colors duration-500">
        {service.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
    </div>
  </motion.div>
);

const ProcessCard = ({ step }: { step: ProcessStep }) => (
  <motion.div
    key={step.step}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: step.step * 0.2 }}
    className="flex flex-col items-center p-6 rounded-3xl bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl shadow-lg hover:scale-105 transition-transform duration-500"
  >
    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent text-white flex items-center justify-center mb-4 text-2xl font-bold">
      {step.step}
    </div>
    <h3 className="text-xl font-semibold text-primary dark:text-accent mb-2">{step.title}</h3>
    <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
  </motion.div>
);

export default function ServicesPage() {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background */}
      <BackgroundAnimations />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-26 -mb-14 text-center relative z-10">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight">
          Our{" "}
          <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Industrial Solutions
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12">
          Comprehensive mat rental, hygiene, and pest control services designed to keep your facilities spotless and safe.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {services.map((service, idx) => (
          <ServiceCard key={service.title} service={service} idx={idx} />
        ))}
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900 dark:text-white">
          How We Deliver Industrial Hygiene
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {processSteps.map((step) => (
            <ProcessCard key={step.step} step={step} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Ready to Elevate Your Facility Hygiene?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Request a custom industrial hygiene plan tailored to your business.
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
