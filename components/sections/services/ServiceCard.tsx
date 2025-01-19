"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  urlLink:string;
}

export default function ServiceCard({ title, description, icon: Icon, features,urlLink }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl bg-white/5 p-8 hover:bg-white/10"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
        <Icon className="h-6 w-6 text-blue-500" />
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-300">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            {feature}
          </li>
        ))}
        <Button className="mt-10 text-blue-400" ><Link href={urlLink}>Learn More</Link>
        </Button>
      </ul>
    </motion.div>
  );
}