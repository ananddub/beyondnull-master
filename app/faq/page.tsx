'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'We offer a comprehensive range of digital services including web development, mobile app development, digital marketing, UI/UX design, and more. Check our services page for a complete list.',
  },
  {
    question: 'How long does it take to complete a project?',
    answer:
      'Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex application could take 3-6 months. We\'ll provide a detailed timeline during our initial consultation.',
  },
  {
    question: 'What is your pricing structure?',
    answer:
      'We offer customized pricing based on your specific needs and project requirements. Contact us for a detailed quote tailored to your project.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
      'Yes, we offer various maintenance and support packages to ensure your digital products continue to perform optimally after launch.',
  },
  {
    question: 'How do you handle project communication?',
    answer:
      'We maintain regular communication through scheduled meetings, progress reports, and a dedicated project management platform. You\'ll have a dedicated project manager as your main point of contact.',
  },
];

const FAQItem = ({ question, answer, isOpen, onToggle, index }: FAQItemProps) => {
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        className="flex justify-between items-center w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-primary"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <h3 className="text-lg font-semibold text-foreground">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-primary" />
        ) : (
          <ChevronDown className="h-5 w-5 text-primary" />
        )}
      </button>
      {isOpen && (
        <div id={`faq-answer-${index}`} className="p-4 bg-muted">
          <p className="text-muted-foreground">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground text-center mb-12">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Button asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
