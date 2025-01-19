'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Shield, Eye, Lock, Database, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

const privacySections = [
  {
    title: "Information We Collect",
    icon: <Eye className="h-6 w-6" />,
    content: "We collect information that you provide directly to us, information we obtain automatically when you visit our website, and information from third-party sources."
  },
  {
    title: "How We Use Your Information",
    icon: <Database className="h-6 w-6" />,
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>To provide and maintain our Service</li>
        <li>To notify you about changes to our Service</li>
        <li>To provide customer support</li>
        <li>To gather analysis or valuable information</li>
        <li>To detect, prevent and address technical issues</li>
      </ul>
    )
  },
  {
    title: "Data Security",
    icon: <Lock className="h-6 w-6" />,
    content: "The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure."
  },
  {
    title: "Your Data Protection Rights",
    icon: <Shield className="h-6 w-6" />,
    content: (
      <>
        <p className="mb-4">We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The right to access</li>
          <li>The right to rectification</li>
          <li>The right to erasure</li>
          <li>The right to restrict processing</li>
          <li>The right to data portability</li>
          <li>The right to object</li>
        </ul>
      </>
    )
  }
]

const PrivacyPolicy = () => {
  const [showCookieNotice, setShowCookieNotice] = useState(true)

  return (
    <div className="min-h-scree">
      <div className="bg-black min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <motion.h1
              className="text-4xl font-bold text-blue-500 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Privacy Policy
            </motion.h1>
          </div>

          <Card className="mb-8  bg-black text-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <AlertTriangle className="h-6 w-6 mr-2 text-yellow-500" />
                Our Commitment to Your Privacy
              </CardTitle>
              <CardDescription>
                We take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Please read this policy carefully to understand our practices regarding your personal data and how we will treat it.
              </p>
            </CardContent>
          </Card>

          <Tabs defaultValue="overview" className="mb-8 bg-black text-blue-500">
            <TabsList className="grid w-full grid-cols-2 bg-black text-blue-500">
              <TabsTrigger className='text-gray-600' value="overview">Overview</TabsTrigger>
              <TabsTrigger className='text-gray-600' value="detailed">Detailed Policy</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Card className="bg-black text-blue-500">
                <CardHeader>
                  <CardTitle>Policy Overview</CardTitle>
                  <CardDescription>A quick summary of our privacy practices</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2 text-gray-500">
                    <li>We collect only necessary information</li>
                    <li>Your data is securely stored and protected</li>
                    <li>We never sell your personal information</li>
                    <li>You have control over your data</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="detailed">
              <ScrollArea className="h-[400px] rounded-md border p-4">
                <Accordion type="single" collapsible className="space-y-4">
                  {privacySections.map((section, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger className="text-xl font-semibold">
                        <span className="flex items-center">
                          {section.icon}
                          <span className="ml-2 ">{section.title}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {section.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ScrollArea>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center ">
            <Button className='bg-blue-600 hover:bg-blue-700' asChild>
              <Link  href="/contact">Contact Us About Privacy</Link>
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {showCookieNotice && (
            <motion.div
              className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground p-4"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
            >
              <div className="max-w-4xl mx-auto flex justify-between items-center">
                <p className="text-sm">We use cookies to improve your experience. By continuing to use this site, you agree to our use of cookies.</p>
                <Button variant="secondary" onClick={() => setShowCookieNotice(false)}>
                  Accept
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default PrivacyPolicy

