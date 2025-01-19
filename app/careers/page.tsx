import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers | BeyondNull Agency',
  description: 'Join our team of innovators and tech enthusiasts. Explore exciting career opportunities at TechPro Agency.',
};

const jobOpenings = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '100,000 - 150,000',
      description: 'We are seeking an experienced Full Stack Developer to join our innovative team...',
      requirements: [
        'Minimum 1 years of experience in full stack development',
        'Proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Strong problem-solving skills and attention to detail',
      ],
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      salary: '80,000 - 1120,000',
      description: 'We are looking for a creative and user-focused UX/UI Designer to create exceptional user experiences...',
      requirements: [
        'Minimum 1 years of experience in UX/UI design',
        'Proficiency in design tools such as Figma, Sketch, and Adobe Creative Suite',
        'Strong portfolio demonstrating user-centered design process',
        'Experience with design systems and component libraries',
      ],
    },
    {
      title: 'DevOps Engineer',
      department: 'Operations',
      location: 'Remote',
      type: 'Full-time',
      salary: '90,000 - 140,000',
      description: 'We are seeking a skilled DevOps Engineer to streamline our development and deployment processes...',
      requirements: [
        'Minimum 1 years of experience in DevOps or related field',
        'Strong knowledge of CI/CD pipelines and infrastructure as code',
        'Experience with containerization technologies (Docker, Kubernetes)',
        'Familiarity with cloud platforms and serverless architectures',
      ],
    },
  ]

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-16 bg-black text-white">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">Join Our Team</h1>
      <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
        At TechPro Agency, we&apos;re always looking for talented individuals to help us push the boundaries of technology and innovation.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {jobOpenings.map((job, index) => (
          <Card key={index} className="border border-gray-700 hover:border-blue-500 transition-colors hover:shadow-xl bg-gray-900">
            <CardHeader>
              <CardTitle className="text-blue-400">{job.title}</CardTitle>
              <CardDescription className="text-gray-400">{job.department}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                <span className='text-white'>{job.location}</span>
              </div>
              <div className="flex items-center mb-2">
                <Clock className="w-4 h-4 mr-2 text-gray-400" />
                <span className='text-white'>{job.type}</span>
              </div>
              <div className="flex items-center mb-4">
                <DollarSign className="w-4 h-4 mr-2 text-gray-400" />
                <span className='text-white'>{job.salary}</span>
              </div>
              <p className="mb-4 text-gray-600">{job.description}</p>
              <h4 className="font-semibold mb-2 bold text-blue-900">Requirements:</h4>
              <ul className="list-disc list-inside text-sm">
                {job.requirements.map((req, idx) => (
                  <li className='mb-2 text-white' key={idx}>{req}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-500 hover:bg-blue-600">Apply Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Why Work With Us?</h2>
        <div className="grid gap-8 md:grid-cols-3 mt-8">
          <div>
            <Briefcase className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2 text-white">Challenging Projects</h3>
            <p className="text-gray-400">Work on cutting-edge technologies and solve complex problems for industry-leading clients.</p>
          </div>
          <div>
            <Clock className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2 text-white">Work-Life Balance</h3>
            <p className="text-gray-400">Flexible working hours and remote options to help you maintain a healthy work-life balance.</p>
          </div>
          <div>
            <DollarSign className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2 text-white">Competitive Compensation</h3>
            <p className="text-gray-400">Attractive salary packages, bonuses, and comprehensive benefits to reward your contributions.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Don&apos;t See a Suitable Position?</h2>
        <p className="mb-8 text-gray-400">We&apos;re always on the lookout for exceptional talent. Send us your resume, and we&apos;ll keep you in mind for future opportunities.</p>
        <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
          <Link href="/contact" className="text-white">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
