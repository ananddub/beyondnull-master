"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2, MessageSquare, Users, BarChart } from "lucide-react";
import Link from "next/link";

export default function SocialMediaMarketing() {
    const features = [
        {
            icon: <Share2 className="h-8 w-8 text-blue-500" />,
            title: "Social Media Strategy",
            description: "Custom strategies that align with your business goals and target audience.",
        },
        {
            icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
            title: "Content Creation",
            description: "Engaging content that resonates with your audience and drives engagement.",
        },
        {
            icon: <Users className="h-8 w-8 text-blue-500" />,
            title: "Community Management",
            description: "Active community engagement to build strong relationships with your followers.",
        },
        {
            icon: <BarChart className="h-8 w-8 text-blue-500" />,
            title: "Paid Social Advertising",
            description: "Targeted ad campaigns that reach the right audience and drive conversions.",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            {/* Hero Section */}
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tight mb-6 text-white">Social Media Marketing Services</h1>
                <p className="text-lg text-gray-300">
                    Build meaningful connections with your audience through strategic social media marketing.
                    We help brands create engaging content and grow their social media presence.
                </p>
            </div>

            {/* Features Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
                {features.map((feature, index) => (
                    <Card key={index} className="border-2 border-gray-700 hover:border-blue-500 transition-colors hover:shadow-xl bg-dark">
                        <CardHeader>
                            <div className="mb-4">{feature.icon}</div>
                            <CardTitle className="text-blue-500">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Benefits Section */}
            <div className="mt-16">
                <h2 className="text-2xl font-bold mb-4 text-blue-500">Benefits of Social Media Marketing</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-800 p-8 rounded-lg">
                        <h3 className="text-lg font-bold mb-2 text-blue-500">Increased Brand Awareness</h3>
                        <p className="text-gray-300">Reach a wider audience and build a strong brand presence.</p>
                    </div>
                    <div className="bg-gray-800 p-8 rounded-lg">
                        <h3 className="text-lg font-bold mb-2 text-blue-500">Improved Website Traffic</h3>
                        <p className="text-gray-300">Drive more visitors to your website and increase conversions.</p>
                    </div>
                    <div className="bg-gray-800 p-8 rounded-lg">
                        <h3 className="text-lg font-bold mb-2 text-blue-500">Enhanced Customer Engagement</h3>
                        <p className="text-gray-300">Build strong relationships with your customers and increase loyalty.</p>
                    </div>
                    <div className="bg-gray-800 p-8 rounded-lg">
                        <h3 className="text-lg font-bold mb-2 text-blue-500">Better ROI</h3>
                        <p className="text-gray-300">Get more value from your marketing budget with targeted social media ads.</p>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-white-800 rounded-lg p-8 text-center mt-16">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Boost Your Social Media Presence?</h2>
                <p className="text-gray-300 mb-6">
                    Let&apos;s create a social media strategy that connects with your audience.
                </p>
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                    <Link href="/contact">Start Growing Today
                    </Link>
                </Button>
            </div>
        </div>
    );
}