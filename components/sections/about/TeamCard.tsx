"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  delay?: number;
}

export function TeamCard({ name, role, image, linkedin, twitter, delay = 0 }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg bg-white shadow-lg"
    >
      <div className="aspect-w-3 aspect-h-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 transition-transform duration-300 group-hover:translate-y-0">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-300">{role}</p>
        <div className="mt-4 flex space-x-2">
          {linkedin && (
            <Button size="icon" variant="ghost" className="text-white hover:text-red-500">
              <Linkedin size={20} />
            </Button>
          )}
          {twitter && (
            <Button size="icon" variant="ghost" className="text-white hover:text-red-500">
              <Twitter size={20} />
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}