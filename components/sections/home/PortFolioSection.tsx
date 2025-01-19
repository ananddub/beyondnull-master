"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Creative Design",
    category: "UI/UX Design",
    imageUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80",
    url:"/services/ui-ux-design"
  },
  {
    id: 2,
    title: "Web Development",
    category: "Development",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    url:"/services/web-development"
  },
  {
    id: 3,
    title: "Mobile App",
    category: "App Development",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
    url:"/services/app-development"
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Things we Made</h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Check out some of our recent work and success stories
          </p>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                width={400}
                height={600}
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <Link href={project.url}>
                  <span className="absolute inset-0"></span>
                  {project.title}
                </Link>
              </h3>
              <p className="text-sm leading-6 text-gray-300">{project.category}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}