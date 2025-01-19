"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  FileText,
  AlertTriangle,
  Shield,
  Scale,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";

interface Section {
  title: string;
  icon: React.ReactNode; // Supports all valid React nodes
  content: string;
}

const termsAndConditionsSections: Section[] = [
  {
    title: "1. Acceptance of Terms",
    icon: <FileText className="h-5 w-5" />,
    content:
      "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
  },
  {
    title: "2. Use License",
    icon: <Scale className="h-5 w-5" />,
    content:
      "Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.",
  },
  {
    title: "3. Disclaimer",
    icon: <AlertTriangle className="h-5 w-5" />,
    content:
      "The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
  },
  {
    title: "4. Limitations",
    icon: <Shield className="h-5 w-5" />,
    content:
      "In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.",
  },
  {
    title: "5. Revisions and Errata",
    icon: <RefreshCw className="h-5 w-5" />,
    content:
      "The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete or current. We may make changes to the materials contained on our website at any time without notice.",
  },
];

const TermsPage = () => {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Page Title with Animation */}
        <motion.h1
          className="text-4xl font-bold text-blue-900 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Website Terms and Conditions
        </motion.h1>

        {/* Intro Section */}
        <div className="bg-dark shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Welcome to Our Website
            </h2>
            <p className="text-gray-600 mb-4 ">
              These terms and conditions outline the rules and regulations for
              the use of our website. By accessing this website, we assume you
              accept these terms and conditions in full. Do not continue to use
              our website if you do not accept all of the terms and conditions
              stated on this page.
            </p>
            <p className="text-gray-600">
              The following terminology applies to these Terms and Conditions,
              Privacy Statement, and Disclaimer Notice and any or all
              Agreements: &apos;Client&apos;, &apos;You&apos; and &apos;Your&apos; refers to
              you, the person accessing this website and accepting the
              Company&apos;s terms and conditions. &quot;The Company&quot;, &quot;Ourselves&quot;,
              &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;, refers to our Company. &quot;Party&quot;,
              &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client and ourselves, or
              either the Client or ourselves.
            </p>
          </div>
        </div>

        {/* Terms and Conditions Accordion */}
        <div className="space-y-4">
          {termsAndConditionsSections.map((section, index) => (
            <div
              key={index}
              className="bg-dark shadow-md rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={() => toggleSection(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-500">{section.icon}</span>
                    <span className="font-semibold text-blue-800">
                      {section.title}
                    </span>
                  </div>
                  {openSections.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>
              {openSections.includes(index) && (
                <div className="px-6 py-4 bg-black">
                  <p className="text-gray-600">{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            By using our website, you agree to these terms and conditions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
