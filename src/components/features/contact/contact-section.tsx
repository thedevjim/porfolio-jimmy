"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./contact-form";
import SocialLinks from "./social-links";

/**
 * Contact section component with form and social links
 * Features a beautiful gradient background with glass morphism design
 */
export default function ContactSection(): React.JSX.Element {
  return (
    <section
      id="contact"
      className="relative py-24 min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.3),transparent)] animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Contact Me
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
