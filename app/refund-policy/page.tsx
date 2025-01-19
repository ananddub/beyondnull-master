'use client'

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp, DollarSign, Clock, FileText, HelpCircle, Mail } from 'lucide-react'

interface SectionProps {
  title: string
  content: React.ReactNode
  icon: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ title, content, icon }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="mr-3 text-blue-500">{icon}</span>
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          </div>
          {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-black text-blue-500 ">
          <div className="text-gray-600">{content}</div>
        </div>
      )}
    </div>
  )
}

const RefundPolicy: React.FC = () => {
  const [showFAQ, setShowFAQ] = useState(false)

  const faqItems = [
    {
      question: "How long do I have to request a refund?",
      answer: "You have 30 days from the date of service delivery to request a refund."
    },
    {
      question: "Can I get a refund for a partially completed project?",
      answer: "Refunds for partially completed projects are handled on a case-by-case basis. Please contact our support team for more information."
    },
    {
      question: "How long does the refund process take?",
      answer: "Once approved, refunds typically take 5-10 business days to process, depending on your payment method."
    }
  ]

  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl font-bold text-blue-900 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Refund Policy
        </motion.h1>

        <div className="space-y-6 bg-black text-blue-500">
          <Section  
            title="Digital Services Refund Policy"
            icon={<DollarSign className="h-6 w-6" />}
            content={
              <p>
                Due to the nature of digital services, we handle refunds on a
                case-by-case basis. Our goal is to ensure your complete
                satisfaction with our services.
              </p>
            }
          />

          <Section
            title="Eligibility for Refunds"
            icon={<FileText className="h-6 w-6" />}
            content={
              <>
                <p>Refunds may be considered under the following circumstances:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Service not delivered as specified in the contract</li>
                  <li>Technical issues preventing service delivery</li>
                  <li>Cancellation before work begins</li>
                </ul>
              </>
            }
          />

          <Section
            title="Refund Process"
            icon={<Clock className="h-6 w-6" />}
            content={
              <>
                <p>To request a refund:</p>
                <ol className="list-decimal pl-6 mt-2 space-y-1">
                  <li>Contact our support team within 30 days of service delivery</li>
                  <li>Provide a detailed explanation for the refund request</li>
                  <li>Include relevant order information</li>
                  <li>Allow 5-10 business days for review</li>
                </ol>
              </>
            }
          />

          <Section
            title="Non-Refundable Items"
            icon={<FileText className="h-6 w-6" />}
            content={
              <>
                <p>The following are generally non-refundable:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Completed custom development work</li>
                  <li>Used licenses or subscriptions</li>
                  <li>Services where work has substantially begun</li>
                </ul>
              </>
            }
          />

          <Section
            title="Contact Us"
            icon={<Mail className="h-6 w-6" />}
            content={
              <>
                <p>
                  If you have any questions about our refund policy, please
                  contact us:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Email: <a href="mailto:support@company.com" className="text-blue-600 hover:underline">support@company.com</a></li>
                  <li>Phone: <a href="tel:+15551234567" className="text-blue-600 hover:underline">(555) 123-4567</a></li>
                  <li>
                    Visit the{" "}
                    <a
                      href="/contact"
                      className="text-blue-600 hover:underline"
                    >
                      contact form
                    </a>{" "}
                    on our website
                  </li>
                </ul>
              </>
            }
          />
        </div>

        <div className="mt-12">
          <button
            className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out rounded-lg"
            onClick={() => setShowFAQ(!showFAQ)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <HelpCircle className="h-6 w-6 mr-3 text-blue-500" />
                <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
              </div>
              {showFAQ ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
            </div>
          </button>
          {showFAQ && (
            <div className="mt-4 space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Need Help? Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}

export default RefundPolicy

