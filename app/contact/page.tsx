"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

// === Icon Components ===
const MailIcon = ({ theme }: { theme: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 mr-2 ${theme === "dark" ? "text-fuchsia-400" : "text-fuchsia-600"} animate-pulse`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const MapPinIcon = ({ theme }: { theme: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 mr-2 ${theme === "dark" ? "text-sky-400" : "text-sky-600"}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path d="M12 21.7C17.3 17 22 13 22 8.5 22 4.4 17.6 2 12 2 6.4 2 2 4.4 2 8.5c0 4.5 4.7 8.5 10 13.2z" />
    <circle cx="12" cy="8.5" r="3" />
  </svg>
);

// === Floating Blob Component ===
const FloatingBlob = ({
  size,
  color,
  className = "",
  delay = 0,
}: {
  size: number;
  color: string;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={`absolute rounded-full filter blur-3xl opacity-30 ${className}`}
    style={{ width: size, height: size, backgroundColor: color }}
    animate={{ y: ["0%", "-20%", "0%"] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

// === Main Contact Page ===
export default function ContactPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const theme = mounted ? resolvedTheme || "light" : "light";

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, subject: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    alert("Message sent! Check console for data.");
  };

  // === Theme Classes ===
  const baseTheme = theme === "dark" ? "bg-neutral-950 text-white" : "bg-white text-neutral-950";
  const containerTheme =
    theme === "dark"
      ? "bg-white/5 backdrop-blur-3xl border border-sky-500/30 shadow-2xl shadow-sky-500/20 hover:shadow-fuchsia-500/30 hover:border-fuchsia-500/30"
      : "bg-neutral-950/5 backdrop-blur-3xl border border-sky-500/30 shadow-2xl shadow-sky-500/20 hover:shadow-fuchsia-500/30 hover:border-fuchsia-500/30";
  const inputTheme =
    theme === "dark"
      ? "bg-white/10 text-white placeholder-white/50 border-white/20 focus:ring-sky-400 focus:border-sky-400"
      : "bg-neutral-950/10 text-neutral-950 placeholder-neutral-950/50 border-neutral-950/20 focus:ring-sky-600 focus:border-sky-600";
  const buttonTheme =
    theme === "dark"
      ? "bg-sky-500 text-white border-sky-500 hover:bg-transparent hover:text-sky-500"
      : "bg-sky-600 text-white border-sky-600 hover:bg-transparent hover:text-sky-600";
  const iconBgTheme = theme === "dark" ? "bg-white/10 border-white/20" : "bg-neutral-950/10 border-neutral-950/20";
  const socialHoverTheme =
    theme === "dark"
      ? "hover:bg-sky-500 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/30"
      : "hover:bg-sky-600 hover:border-sky-600 hover:shadow-lg hover:shadow-sky-600/30";

  return (
    <div className={`relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden font-mono transition-colors duration-500 ${baseTheme}`}>
      {/* Background Blobs */}
      <FloatingBlob size={384} color={theme === "dark" ? "#f0abfc" : "#f472b6"} className="top-1/4 left-1/4" />
      <FloatingBlob size={320} color={theme === "dark" ? "#38bdf8" : "#0ea5e9"} className="top-1/2 left-1/2" delay={2} />
      <FloatingBlob size={288} color={theme === "dark" ? "#22c55e" : "#4ade80"} className="bottom-1/4 right-1/4" delay={4} />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row gap-8">
        {/* Left: Info & Social */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex flex-col justify-between p-4 rounded-3xl transition-all duration-300"
        >
          <h2 className={`text-4xl font-bold mb-6 tracking-wide ${theme === "dark" ? "text-fuchsia-400" : "text-fuchsia-600"}`}>
            Contact Information
          </h2>
          <div className="flex flex-col space-y-4 text-left">
            <div className="flex items-center">
              <MailIcon theme={theme} />
              <span className={`${theme === "dark" ? "text-white/80" : "text-neutral-950/80"}`}>info@malmathygiene.com</span>
            </div>
<div className="flex items-start">
  <MapPinIcon theme={theme} />
  <a
    href="https://www.google.com/maps/search/?api=1&query=Jalan+Kota+Raja+F+27%2FF,+Taman+Bunga+Negara,+40400+Shah+Alam,+Malaysia"
    target="_blank"
    rel="noopener noreferrer"
    className={`${theme === "dark" ? "text-white/80" : "text-neutral-950/80"} underline hover:text-sky-500 transition-colors`}
  >
    Jalan Kota Raja F 27/F, Taman Bunga Negara, 40400 Shah Alam, Malaysia
  </a>
</div>

          </div>
          {/* Services Provided */}
          <div className="mt-6">
            <h3 className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-white/80" : "text-neutral-950/80"}`}>Services Provided:</h3>
            <ul className={`list-disc list-inside text-left ${theme === "dark" ? "text-white/70" : "text-neutral-900/80"}`}>
              <li>Industrial Mat Rental</li>
              <li>Hygiene Products Supply</li>
              <li>Pest Control Services</li>
              <li>Maintenance & Delivery of Mats</li>
            </ul>
          </div>
          {/* Social Icons */}
          <div className="flex mt-8 space-x-4">
            <a href="https://www.facebook.com/malmathygiene/" target="_blank" rel="noopener noreferrer" className={`${iconBgTheme} ${socialHoverTheme} rounded-full w-10 h-10 flex items-center justify-center`}>
              F
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={`${iconBgTheme} ${socialHoverTheme} rounded-full w-10 h-10 flex items-center justify-center`}>
              I
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={`${iconBgTheme} ${socialHoverTheme} rounded-full w-10 h-10 flex items-center justify-center`}>
              L
            </a>
          </div>
          <p className={`mt-4 text-sm ${theme === "dark" ? "text-white/60" : "text-neutral-700"}`}>
            For more info about our company, visit our <a href="https://www.facebook.com/malmathygiene/?" target="_blank" className="underline">Facebook page</a>.
          </p>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={`md:w-1/2 p-6 rounded-3xl transition-all duration-300 ${containerTheme}`}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formState.firstName}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 ${inputTheme}`}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formState.lastName}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 ${inputTheme}`}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formState.email}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 ${inputTheme}`}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formState.phone}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 ${inputTheme}`}
              />
            </div>

            <div className="flex flex-col text-left mb-4">
              <p className={`mb-2 text-sm md:text-base ${theme === "dark" ? "text-white/80" : "text-neutral-950/80"}`}>Select Subject?</p>
              <div className="flex flex-wrap gap-4 text-sm">
                {["General Inquiry", "Mat Rental", "Hygiene Products", "Pest Control"].map((subject) => (
                  <label key={subject} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="subject"
                      value={subject}
                      checked={formState.subject === subject}
                      onChange={handleSubjectChange}
                      className={`form-radio transition-colors duration-300 ${
                        theme === "dark"
                          ? "text-fuchsia-500 bg-white/20 border-white/40 focus:ring-fuchsia-500"
                          : "text-fuchsia-600 bg-neutral-950/20 border-neutral-950/40 focus:ring-fuchsia-600"
                      }`}
                    />
                    <span className={`ml-2 ${theme === "dark" ? "text-white/80" : "text-neutral-950/80"}`}>{subject}</span>
                  </label>
                ))}
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Write your message..."
              value={formState.message}
              onChange={handleChange}
              rows={4}
              className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 mb-6 transition-all duration-300 ${inputTheme}`}
            />

            <div className="flex justify-end">
              <button
                type="submit"
                className={`relative group py-3 px-8 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:bg-transparent ${buttonTheme}`}
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 transition-all duration-300 scale-x-100 origin-left"></div>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
