"use client";

import { motion } from "framer-motion";

const stats = [
  { id: 1, name: "Satisfied Clients", value: "50+" },
  { id: 2, name: "Projects Completed", value: "18+" },
  { id: 3, name: "Team Members", value: "12+" },
  { id: 4, name: "Success Rate", value: "95+" },
];

export default function StatsSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl lg:max-w-none"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Company Growth
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              We take pride in our numbers and the success of our clients
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: stat.id * 0.1 }}
                className="flex flex-col bg-white/5 p-8 backdrop-blur-lg"
              >
                <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-blue-500">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}