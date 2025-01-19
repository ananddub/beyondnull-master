"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Code2, BarChart2, Lightbulb } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  { icon: Globe, title: "Web Development" },
  { icon: Code2, title: "App Development" },
  { icon: BarChart2, title: "Digital Marketing" },
  { icon: Lightbulb, title: "UI/UX Design" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-10 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="block text-blue-500">Empowering Businesses with Digital Solution</span>
              <span className="block">Your Partner for Online Growth</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Transform your digital presence with our expert team of developers, designers, and strategists.
              We create innovative solutions that drive growth and success.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-blue-500 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600"
              >
                Get Started <ArrowRight className="ml-2 inline-block h-4 w-4" />
              </Link>
              <Link
                href="/portfolio"
                className="rounded-full bg-white/10 px-8 py-3 text-sm font-semibold text-white hover:bg-white/20"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
       <div className="text-center grid grid-cols-2 space-x-4">
        <Image src={'/hero.png'} alt="Hero Image" width={230} height={230} />
        <Image src={'/secondhero.png'} alt="Hero Image" width={120} height={120} />
       </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:mt-0"
          >
            <div className="relative mx-auto max-w-2xl">
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 blur"></div>
              <div className="relative rounded-lg bg-black p-8">
                <div className="grid grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center rounded-lg bg-white/5 p-6 text-center hover:bg-white/10"
                    >
                      <service.icon className="h-8 w-8 text-blue-500" />
                      <h3 className="mt-4 text-sm font-medium">{service.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}