"use client";

import { motion } from "framer-motion";
import { FaNode, FaAws, FaPython, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

const technologies = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNode },
  { name: "Python", icon: FaPython },
  { name: "AWS", icon: FaAws },
];

export default function TechStackSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technology Stack</h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            We use cutting-edge technologies to build modern solutions
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-2xl lg:max-w-none"
        >
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center rounded-2xl bg-white/5 p-8 hover:bg-white/10"
              >
                <div className="relative h-12 w-12">
                  <tech.icon size={48} />
                </div>
                <p className="mt-4 text-sm font-medium">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}