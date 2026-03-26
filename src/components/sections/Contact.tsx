"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/contact/contact-form";
import SocialLinks from "@/components/contact/social-links";

/**
 * Contact section component with form and social links
 * Features a beautiful gradient background with glass morphism design
 */
export default function Contact(): React.JSX.Element {
  return (
    <section
      id="contact"
      className="min-h-screen py-24 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Got a question? Send me a message, and I&apos;ll get back to you
            soon.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form Component */}
          <ContactForm />

          {/* Social Links Component */}
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
