"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Globe, Laptop, Settings, User } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WebDevelopment() {
  const features = [
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: "Custom Web Development",
      description: "Tailored web solutions that perfectly align with your business objectives and user needs.",
    },
    {
      icon: <Laptop className="h-8 w-8 text-blue-500" />,
      title: "E-Commerce Development",
      description: "Powerful online stores with seamless checkout experiences and robust inventory management.",
    },
    {
      icon: <Code2 className="h-8 w-8 text-blue-500" />,
      title: "Frontend and Backend Development",
      description: "Full-stack development services ensuring both beautiful interfaces and powerful functionality.",
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-500" />,
      title: "Website Optimization",
      description: "Continuous improvement and maintenance to keep your website performing at its best.",
    },
    {
      icon: <User className="h-8 w-8 text-blue-500" />,
      title: "User Experience Design",
      description: "Creating seamless and engaging user experiences that increase customer satisfaction and retention.",
    },
    {
      icon: <Laptop className="h-8 w-8 text-blue-500" />,
      title: "Mobile Responsive Design",
      description: "Designing websites that look and function great on any device, ensuring accessibility and engagement.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 bg-dark text-white">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-6 text-blue-500">Web Development Services</h1>
        <p className="text-lg text-gray-400">
          In today&apos;s digital landscape, your website is often the first point of contact with potential customers.
          We create modern, responsive, and performance-driven websites that leave lasting impressions and drive results.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-2 border-gray-700 hover:border-blue-500 transition-colors hover:shadow-xl bg-dark">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-blue-500">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className=" rounded-lg p-8 text-center mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Ready to Start Your Web Project?</h2>
        <p className="text-gray-300 mb-6">
          Let&apos;s create a website that perfectly represents your brand and drives results. Whether you&apos;re looking for a custom web solution, optimization, or a full-stack overhaul, we have you covered.
        </p>
        <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
          <Link href="/contact">Contact Us Today</Link>
        </Button>
      </div>
    </div>
  );
}
