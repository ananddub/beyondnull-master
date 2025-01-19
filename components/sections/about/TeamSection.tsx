"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const team = [
  {
    name: "Piyush Singh",
    role: "Operations Manager",
    image: "/piyush.png",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Anand Dubey",
    role: "App Developer",
    image: "/anand.png",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Shubham Kumar",
    role: "Marketing and Content Strategist",
    image: "/shubham.png",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  
];

export default function TeamSection() {
  return (
    <section className="py-10 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Team</h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            The talented people behind our success
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-white/5 p-8"
            >
              <div className="aspect-[3/2]">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
              <div className="mt-4 flex space-x-4">
                <Link href={member.social.twitter} className="text-gray-400 hover:text-blue-500">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href={member.social.linkedin} className="text-gray-400 hover:text-blue-500">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href={member.social.github} className="text-gray-400 hover:text-blue-500">
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}