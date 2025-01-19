"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Layout, Pen, TestTube } from "lucide-react";
import Link from "next/link";

export default function UiUxDesign() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "User Research",
      description: "In-depth research to understand your users' needs, behaviors, and pain points.",
    },
    {
      icon: <Layout className="h-8 w-8 text-blue-500" />,
      title: "Wireframing & Prototyping",
      description: "Interactive prototypes that visualize the user journey and functionality.",
    },
    {
      icon: <Pen className="h-8 w-8 text-blue-500" />,
      title: "UI Design",
      description: "Beautiful, intuitive interfaces that align with your brand and delight users.",
    },
    {
      icon: <TestTube className="h-8 w-8 text-blue-500" />,
      title: "UX Testing",
      description: "Comprehensive testing to ensure optimal user experience and satisfaction.",
    },
  ];

  const benefits = [
    {
      title: "Improved User Engagement",
      description: "Increase user satisfaction and engagement with intuitive and beautiful interfaces.",
    },
    {
      title: "Enhanced Brand Credibility",
      description: "Establish your brand as a leader in your industry with professional and modern designs.",
    },
    {
      title: "Increased Conversions",
      description: "Drive more conversions and sales with optimized user experiences and clear calls-to-action.",
    },
    {
      title: "Better Return on Investment (ROI)",
      description: "Maximize your ROI with data-driven design decisions and continuous testing and improvement.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16  text-white">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-6 text-blue-500">UI/UX Design Services</h1>
        <p className="text-lg text-gray-400">
          Create exceptional user experiences that drive engagement and satisfaction. 
          Our UI/UX design services focus on creating intuitive, beautiful interfaces 
          that users love.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <Card key={index} className="border-2 border-gray-700 hover:border-blue-500 transition-colors bg-black">
            <CardHeader>
              <div className="mb-4 text-blue-500">{feature.icon}</div>
              <CardTitle className="text-blue-500">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">Benefits of UI/UX Design</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-700 p-8 rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-blue-500">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=" rounded-lg p-8 text-center mt-16 bg-black">
        <h2 className="text-2xl font-bold mb-4 text-white">Ready to Improve Your User Experience?</h2>
        <p className="text-gray-500 mb-6">
          Let&apos;s create interfaces that your users will love.
        </p>
        <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
          <Link href={"/contact"}>Start Your Design Project</Link>
        </Button>
      </div>
    </div>
  );
}