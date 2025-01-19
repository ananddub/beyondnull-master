"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    if (name.trim().length < 3) {
      toast.error("Name must be at least 3 characters long.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (subject.trim().length < 3) {
      toast.error("Subject must be at least 3 characters long.");
      return false;
    }

    if (message.trim().length < 10) {
      toast.error("Message must be at least 10 characters long.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, subject, email, message }),
      });

      if (!response.ok) {
        toast.error("Error sending message");
        throw new Error("Failed to send message");
      }

      await response.json();

      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
      setSubject("");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl bg-white/5 p-8"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-600 bg-black/20 px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-600 bg-black/20 px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">
            Mobile
          </label>
          <input
            type="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-600 bg-black/20 px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            placeholder="Your mobile number"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-600 bg-black/20 px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            placeholder="Project inquiry"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="mt-1 block w-full rounded-lg border border-gray-600 bg-black/20 px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            placeholder="Tell us about your project"
            required
          />
        </div>
        <button
          type="submit" disabled={isSubmitting}
          className="flex w-full items-center justify-center rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
        >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
        </button>
      </form>
    </motion.div>
  );
}
