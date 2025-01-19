"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description: "Modern e-commerce solution with advanced features and seamless user experience.",
  },
  {
    title: "Fitness App",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5",
    description: "Cross-platform mobile application for fitness tracking and workout planning.",
  },
  {
    title: "Brand Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    description: "Comprehensive digital marketing campaign that increased brand visibility by 200%.",
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of our recent work and see how we&apos;ve helped businesses achieve their goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-red-600 mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button variant="ghost" className="group" asChild>
                  <Link href="/contact">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}