"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MousePointer, FileText, Mail } from "lucide-react";
import Link from "next/link";

export default function DigitalMarketing() {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-blue-500" />,
      title: "Search Engine Optimization",
      description:
        "Improve your search rankings and drive organic traffic with data-driven SEO strategies.",
    },
    {
      icon: <MousePointer className="h-8 w-8 text-blue-500" />,
      title: "Pay-Per-Click Advertising",
      description:
        "Strategic PPC campaigns that deliver immediate results and maximize ROI.",
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-500" />,
      title: "Content Marketing",
      description:
        "Engaging content that attracts, educates, and converts your target audience.",
    },
    {
      icon: <Mail className="h-8 w-8 text-blue-500" />,
      title: "Email Marketing",
      description:
        "Personalized email campaigns that nurture leads and drive conversions.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 bg-black">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-6 text-white">
          Digital Marketing Services
        </h1>
        <p className="text-lg text-muted-foreground">
          Drive growth with data-driven digital marketing strategies. We help
          businesses increase their online visibility, engage with their
          audience, and achieve measurable results.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16 bg-black">
        {features.map((feature, index) => (
          <Card key={index} className="border-2 border-gray-700 hover:border-blue-500 transition-colors hover:shadow-xl bg-dark">

            <CardHeader>
              <div className="mb-4">{feature.icon}</div>
              <CardTitle className="text-blue-500">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Ready to Grow Your Online Presence?
        </h2>
        <p className="text-muted-foreground mb-6">
          Let&apos;s create a digital marketing strategy that drives real
          results.
        </p>
        <Link href="/contact" passHref>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white" size="lg">
            Get Started Today
          </Button>
        </Link>
      </div>
    </div>
  );
}
