"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Layers, Palette, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function AppDevelopment() {
    const features = [
        {
            icon: <Smartphone className="h-8 w-8 text-primary text-blue-500" />,
            title: "Native App Development",
            description:
                "High-performance native apps for iOS and Android platforms with platform-specific features.",
        },
        {
            icon: <Layers className="h-8 w-8 text-primary text-blue-500" />,
            title: "Cross-Platform Apps",
            description:
                "Cost-effective solutions that work seamlessly across multiple platforms and devices.",
        },
        {
            icon: <Palette className="h-8 w-8 text-primary text-blue-500" />,
            title: "App UI/UX Design",
            description:
                "Intuitive and engaging user interfaces that provide exceptional user experiences.",
        },
        {
            icon: <RefreshCw className="h-8 w-8 text-primary text-blue-500" />,
            title: "App Maintenance",
            description:
                "Continuous support, updates, and improvements to keep your app running smoothly.",
        },
    ];

    const benefits = [
        {
            icon: <Smartphone className="h-8 w-8 text-primary text-blue-500" />,
            title: "Increased Brand Visibility",
            description:
                "Reach a wider audience and increase brand recognition through mobile apps.",
        },
        {
            icon: <Layers className="h-8 w-8 text-primary text-blue-500" />,
            title: "Improved Customer Engagement",
            description:
                "Enhance customer experience through personalized and interactive mobile apps.",
        },
        {
            icon: <Palette className="h-8 w-8 text-primary text-blue-500" />,
            title: "Enhanced User Experience",
            description:
                "Create intuitive and engaging user interfaces that provide exceptional user experiences.",
        },
        {
            icon: <RefreshCw className="h-8 w-8 text-primary text-blue-500" />,
            title: "Increased Conversions",
            description:
                "Drive more conversions through targeted and personalized mobile app experiences.",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-16 bg-black">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tight mb-6">App Development Services</h1>
                <p className="text-lg text-muted-foreground">
                    Transform your business idea into a powerful mobile application. We create engaging,
                    user-friendly apps that help businesses connect with their customers and drive growth.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
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

            <div className="mt-16">
  <h2 className="text-2xl font-bold mb-4 text-blue-500">Benefits of Social Media Marketing</h2>
  <div className="grid md:grid-cols-2 gap-8">
    {benefits.map((benefit, index) => (
      <div key={index} className="bg-gray-800 p-8 rounded-lg">
        <h3 className="text-lg font-bold mb-2 text-blue-500">{benefit.title}</h3>
        <p className="text-gray-300">{benefit.description}</p>
      </div>
    ))}
  </div>
</div>

            <div className=" rounded-lg p-8 text-center mt-16 bg-black">
                <h2 className="text-2xl font-bold mb-4 text-primary text-white">Ready to Build Your App?</h2>
                <p className="text-muted-foreground mb-6">
                    Let&apos;s create an app that takes your business to the next level.
                </p>
                <Button className="bg-blue-500 hover:bg-blue-600" size="lg"><Link href="/contact">Start Your Project</Link></Button>
            </div>
        </div>
    );
}
