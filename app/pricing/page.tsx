import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
    title: 'Pricing | BeyondNull Agency',
    description: 'Explore our flexible pricing plans designed to meet your business needs and budget.',
}

const pricingPlans = [
    {
        name: 'Starter',
        price: 4999,
        billing: 'month',
        description: 'Perfect for small businesses and startups',
        features: [
            'Custom Website Design',
            'Responsive Development',
            'Basic SEO Optimization',
            '1 Month of Support',
            'Up to 5 Pages',
        ],
    },
    {
        name: 'Professional',
        price: 9999,
        billing: 'month',
        description: 'Ideal for growing businesses',
        features: [
            'Everything in Starter, plus:',
            'E-commerce Integration',
            'Advanced SEO & Analytics',
            'Custom CMS Development',
            '3 Months of Support',
            'Up to 15 Pages',
        ],
        popular: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        billing: '',
        description: 'For large-scale and complex projects',
        features: [
            'Everything in Professional, plus:',
            'Custom Web Application Development',
            'API Integration & Development',
            'Dedicated Project Manager',
            'Priority Support & Maintenance',
            'Unlimited Pages & Features',
        ],
    },
]

const faqs = [
    {
        question: 'What’s included in the custom website design?',
        answer: 'Our custom website design includes a unique layout tailored to your brand, responsive design for all devices, and basic SEO optimization to improve your online visibility.',
    },
    {
        question: 'How long does it take to complete a project?',
        answer: 'Project timelines vary depending on complexity. Typically, a basic website takes 4–6 weeks, while more complex projects can take 8–12 weeks or more.',
    },
    {
        question: 'Do you offer ongoing support and maintenance?',
        answer: 'Yes, we offer ongoing support and maintenance packages to keep your website secure, up-to-date, and performing optimally.',
    },
    {
        question: 'Can I upgrade my plan later?',
        answer: 'You can upgrade your plan at any time to access more features and services as your business grows.',
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept major credit cards, PayPal, and bank transfers. For Enterprise plans, we can discuss custom payment terms.',
    },
    {
        question: 'Is there a money-back guarantee?',
        answer: 'We offer a 14-day money-back guarantee for our Starter and Professional plans if you’re not satisfied with our services.',
    },
]

export default function PricingPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-500">Flexible Pricing Plans</h1>
            <p className="text-xl text-center mb-12 max-w-2xl mx-auto text-gray-400">
                Choose the perfect plan to bring your digital vision to life. Our transparent pricing ensures you get the best value for your investment.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
                {pricingPlans.map((plan, index) => (
                    <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                        {plan.popular && (
                            <Badge className="absolute top-4 right-4" variant="secondary">
                                Most Popular
                            </Badge>
                        )}
                        <CardHeader>
                            <CardTitle className="text-lg font-bold">{plan.name}</CardTitle>
                            <CardDescription>{plan.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold mb-2">
                                {typeof plan.price === 'number' ? `${plan.price}` : plan.price}
                                {plan.billing && (
                                    <span className="text-sm font-normal">/{plan.billing}</span>
                                )}
                            </div>
                            <ul className="space-y-2">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">
                                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="mt-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {faqs.map((faq, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle className="text-lg">{faq.question}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{faq.answer}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="mt-16 text-center">
                <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
                <p className="mb-8">Contact us for a tailored package that meets your specific requirements and budget.</p>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white" size="lg">
                    <Link href="/contact">Contact Sales</Link>
                </Button>
            </div>

            <TooltipProvider>
                <div className="mt-16 text-center">
                    <p className="text-sm text-gray-500">
                        All plans come with our standard{' '}
                        <Tooltip>
                            <TooltipTrigger className="underline cursor-help" aria-label="Service Level Agreement">
                                Service Level Agreement (SLA)
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Our SLA ensures 99.9% uptime, 24/7 monitoring, and prompt support response times.</p>
                            </TooltipContent>
                        </Tooltip>
                        . Enterprise plans include custom SLAs.
                    </p>
                </div>
            </TooltipProvider>
        </div>
    )
}
