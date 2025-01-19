"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code, Rocket, Settings } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Lightbulb,
    title: "Discovery",
    description: "We start by understanding your business goals and requirements through in-depth consultation.",
  },
  {
    id: 2,
    icon: Code,
    title: "Development",
    description: "Our expert team develops your solution using cutting-edge technologies and best practices.",
  },
  {
    id: 3,
    icon: Settings,
    title: "Testing",
    description: "Rigorous testing ensures your product meets the highest quality standards.",
  },
  {
    id: 4,
    icon: Rocket,
    title: "Launch",
    description: "We deploy your solution and provide ongoing support to ensure continued success.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Process</h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            A streamlined approach to delivering exceptional results
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-2xl lg:max-w-none"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: step.id * 0.1 }}
                className="relative"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                  <step.icon className="h-8 w-8 text-blue-500" />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold">
                    <span className="text-blue-500">0{step.id}.</span> {step.title}
                  </h3>
                  <p className="mt-2 text-gray-400">{step.description}</p>
                </div>
                {step.id !== steps.length && (
                  <div className="absolute left-20 top-8 hidden h-0.5 w-full -translate-y-1/2 bg-gradient-to-r from-blue-500/50 to-transparent lg:block"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}