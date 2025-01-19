"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative bg-red-600 text-white py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-red-700/90" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8">
            Let&apos;s discuss how we can help you achieve your digital goals
          </p>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-red-600 transition-colors duration-300"
            asChild
          >
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}