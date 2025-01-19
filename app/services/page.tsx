"use client";

import { motion } from "framer-motion";
import  ServiceCard  from "@/components/sections/services/ServiceCard";
import { services } from "@/components/sections/services/Data";

export default function Services() {

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service}  />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure the success of your digital projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs" },
              { step: "02", title: "Strategy", description: "Planning the solution" },
              { step: "03", title: "Development", description: "Building your solution" },
              { step: "04", title: "Launch", description: "Delivering results" },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-block rounded-full bg-red-100 p-8 mb-4">
                  <span className="text-3xl font-bold text-red-600">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}