"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { button as buttonStyles } from "@heroui/theme";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code"; // correct

import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary/10 dark:bg-primary/20 py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Keep Your Business <span className="text-secondary">Spotless</span> & Hygienic
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300">
            MalMath Hygiene provides professional floor mat cleaning services with pickup, washing, and replacement — ensuring safety and cleanliness for your customers and employees.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
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
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Image
            src="/images/hero-mats.png"
            width={700}
            height={400}
            alt="Floor Mat Cleaning"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-background dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Why Choose MalMath Hygiene?
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We combine professional cleaning with convenience, reliability, and unmatched hygiene standards.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-primary dark:text-primary">Professional Cleaning</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                High-standard cleaning for all types of floor mats ensuring a hygienic environment.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-primary dark:text-primary">Scheduled Pickup & Delivery</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Convenient weekly or bi-weekly mat pickup and replacement to fit your schedule.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-primary dark:text-primary">Custom Hygiene Plans</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Tailored services to meet the hygiene needs of high-traffic businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-primary/5 dark:bg-primary/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">What Our Clients Say</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl shadow">
              <p className="text-gray-700 dark:text-gray-300 italic">
                "MalMath Hygiene transformed our workspace! Reliable and professional service every week."
              </p>
              <p className="mt-4 font-semibold text-primary dark:text-secondary">– John D., Office Manager</p>
            </div>
            <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl shadow">
              <p className="text-gray-700 dark:text-gray-300 italic">
                "Their pickup and delivery service is incredibly convenient. Highly recommend for any business."
              </p>
              <p className="mt-4 font-semibold text-primary dark:text-secondary">– Sarah L., Retail Owner</p>
            </div>
            <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl shadow">
              <p className="text-gray-700 dark:text-gray-300 italic">
                "Professional, efficient, and hygienic. Our customers notice the difference!"
              </p>
              <p className="mt-4 font-semibold text-primary dark:text-secondary">– Ahmad R., Restaurant Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-20 md:py-32 bg-secondary text-white text-center rounded-t-3xl">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Keep Your Business Clean?</h2>
          <p className="mt-4 text-lg">
            Contact us today and schedule your first mat cleaning service.
          </p>
          <Link
            href="/contact"
            className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
