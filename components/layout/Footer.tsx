import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white" lang="en">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold">BeyondNull</h3>
            <p className="mt-4 text-gray-400">
              Transforming ideas into digital reality. We create innovative solutions that drive growth.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services/web-development" className="text-gray-400 hover:text-white">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/app-development" className="text-gray-400 hover:text-white">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-gray-400 hover:text-white">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="text-gray-400 hover:text-white">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-marketing" className="text-gray-400 hover:text-white">
                  Social Media Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <ul className="mt-4 flex space-x-4">
              <li>
                <Link
                  href="https://facebook.com/beyondnulll"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow BeyondNull on Facebook"
                >
                  <Facebook className="h-6 w-6 text-gray-400 hover:text-white" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/in/beyondnull"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow BeyondNull on LinkedIn"
                >
                  <Linkedin className="h-6 w-6 text-gray-400 hover:text-white" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/beyondnulll"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow BeyondNull on Instagram"
                >
                  <Instagram className="h-6 w-6 text-gray-400 hover:text-white" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/beyondnulll"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow BeyondNull on Twitter"
                >
                  <Twitter className="h-6 w-6 text-gray-400 hover:text-white" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} BeyondNull. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
