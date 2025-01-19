import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const Sitemap = () => {
  const siteStructure = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", path: "/services/web-development" },
        { name: "Mobile Development", path: "/services/mobile-development" },
        { name: "Digital Marketing", path: "/services/digital-marketing" },
        { name: "UI/UX Design", path: "/services/design" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", path: "/blog" },
        { name: "FAQ", path: "/faq" },
        { name: "Careers", path: "/careers" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms & Conditions", path: "/terms" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Refund Policy", path: "/refund-policy" }
      ]
    }
  ];

  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-12">Sitemap</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {siteStructure.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold text-blue-900 mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.path}
                      className="flex items-center text-gray-400 hover:text-teal-600 transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sitemap;