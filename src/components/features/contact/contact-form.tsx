"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, Share2 } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Contact form component with name, email, and message fields
 * Features glass morphism design with form validation
 */
export default function ContactForm(): React.JSX.Element {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [characterCount, setCharacterCount] = useState<number>(0);
  const maxMessageLength = 500;

  /**
   * Handle form input changes
   */
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;

    if (name === "message" && value.length > maxMessageLength) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "message") {
      setCharacterCount(value.length);
    }
  };

  /**
   * Handle form submission
   * TODO: Implement actual email sending functionality
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // TODO: Add form validation
    // TODO: Implement email sending logic (e.g., EmailJS, Nodemailer, etc.)
    // TODO: Add loading state and success/error messages
    // TODO: Reset form after successful submission

    console.log("Form submitted:", formData);

    // Placeholder for future implementation
    alert(
      "Thank you for your message! This functionality will be implemented soon."
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
        <div className="flex items-center space-x-3 mb-6">
          <Share2 className="w-6 h-6 text-blue-400" />
          <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
        </div>
        <p className="text-gray-300 mb-8">
          Have something to discuss? Send me a message and let&apos;s talk.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
              <MessageSquare className="w-5 h-5 text-gray-400" />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              rows={6}
              required
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
            />
            <div className="absolute bottom-3 right-3 text-sm text-gray-400">
              {characterCount}/{maxMessageLength}
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:shadow-lg"
          >
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
