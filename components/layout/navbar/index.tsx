"use client";

import Link from "next/link";
import { navigationItems } from "./config";
import { NavItem } from "./NaviItems";
import { SocialLinks } from "./SocialLink";
import { MobileMenu } from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
          >
            BeyondNull
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <NavItem key={item.title} {...item} />
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:block">
            <SocialLinks />
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}