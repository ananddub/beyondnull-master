import TeamSection from "@/components/sections/about/TeamSection";
import Head from "next/head";

export default function AboutPage() {
  return (
    <main className="pt-24">
      <Head>
        <title>About Us - Beyondnull</title>
        <meta name="description" content="Beyondnull is a digital agency specializing in transforming businesses with cutting-edge digital solutions." />
  
      </Head>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">About Us</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We&apos;re a team of passionate developers, designers, and digital strategists
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 text-gray-300">
              To empower businesses with cutting-edge digital solutions that drive growth,
              innovation, and success in the modern digital landscape.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="mt-4 text-gray-300">
              To be the leading digital agency that transforms businesses through
              innovative technology solutions and exceptional service.
            </p>
          </div>
        </div>
      </div>
      <TeamSection />
    </main>
  );
}