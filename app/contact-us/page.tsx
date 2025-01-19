"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "@/components/sections/contact/ContactForm";
import Head from "next/head";



const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Purnea Bihar 854301",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+91 6201688978",
  },
  {
    icon: Phone,
    title: "Reach Us",
    details: "+91 6205475866",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "beyoondnull@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <>
       <Head>
        <title>Contact us | BeyondNull</title>
        <meta name="description" content="Contact us to learn more about our services" />
        <meta property="og:title" content="My Page Title" />
      </Head>
    <main className="pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Contact Us</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Get in touch with us to discuss your project
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                    <item.icon className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-gray-400">{item.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="rounded-2xl bg-white/5 p-8">
              <h3 className="text-lg font-semibold">Office Hours</h3>
              <dl className="mt-4 space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <dt>Monday - Friday</dt>
                  <dd>9:00 AM - 6:00 PM</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Saturday</dt>
                  <dd>10:00 AM - 4:00 PM</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Sunday</dt>
                  <dd>Closed</dd>
                </div>
              </dl>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </main>
    </>
  );
}