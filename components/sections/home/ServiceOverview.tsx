"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Share2, TrendingUp } from "lucide-react";

const services = [
  {
    icon: <Code size={40} />,
    title: "Website Development",
    description: "Custom websites that convert visitors into customers",
  },
  {
    icon: <Smartphone size={40} />,
    title: "App Development",
    description: "Native and cross-platform mobile applications",
  },
  {
    icon: <Share2 size={40} />,
    title: "Social Media Management",
    description: "Strategic social media presence and engagement",
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Digital Marketing",
    description: "Result-driven digital marketing campaigns",
  },
];

export function ServiceOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the online world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-red-600 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}