"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    description: "A modern e-commerce platform built with Next.js and Stripe",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "App Development",
    description: "Secure and user-friendly mobile banking application",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Healthcare Dashboard",
    category: "UI/UX Design",
    description: "Intuitive dashboard for healthcare professionals",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Social Media Analytics",
    category: "Digital Marketing",
    description: "Advanced analytics platform for social media management",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    category: "App Development",
    description: "Comprehensive fitness tracking and workout planning app",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Real Estate Platform",
    category: "Web Development",
    description: "Modern real estate listing and management platform",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
  },
];

export default function PortfolioPage() {
  return (
    <main className="pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Our Portfolio</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Explore our latest projects and success stories
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative isolate flex flex-col overflow-hidden rounded-2xl bg-gray-900"
            >
              <div className="aspect-[16/9]">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover"
                  width={600}
                  height={400}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-8">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-blue-500">{project.category}</p>
                  <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
                  <p className="mt-4 text-gray-400">{project.description}</p>
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="text-sm font-semibold text-blue-500 hover:text-blue-400"
                  >
                    View Project Details →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </main>
  );
}