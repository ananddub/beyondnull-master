"use client";

import { motion } from "framer-motion";

export function VisionSection() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Vision</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            To revolutionize the digital landscape by creating innovative solutions that empower businesses 
            to thrive in an ever-evolving online world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}