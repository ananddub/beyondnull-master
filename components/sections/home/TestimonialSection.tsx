"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Working with TechAgency transformed our business. Their expertise in web development and digital marketing helped us achieve remarkable growth.",
    author: "Abhishek Rathore",
    role: "Digital marketing expert",
    image: "/logo.png",
    rating: 5
  },
  {
    id: 2,
    content: "The team's attention to detail and commitment to excellence is outstanding. They delivered our project ahead of schedule and exceeded expectations.",
    author: "Manish Yadav",
    role: "Sales Assistant",
    image: "/beyondnull.png",
    rating: 5
  },
  {
    id: 3,
    content: "Their UI/UX design expertise helped us create an intuitive and beautiful application that our users love. Highly recommended!",
    author: "Piyush Singh",
    role: "Product Manager",
    image: "/logo.png",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Clients Say</h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Don&apos;t just take our word for it - hear from our satisfied clients
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
              className="flex flex-col justify-between rounded-2xl bg-white/5 p-8"
            >
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-lg text-gray-300">{testimonial.content}</p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}