"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { navigationItems } from "./config";
import { NavItem } from "./NaviItems";
import { SocialLinks } from "./SocialLink";
import { useState } from "react";
import { NavigationItem } from "./types";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item: NavigationItem) => {
    if (!item.dropdown) {
      setIsOpen(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full max-w-[300px] sm:max-w-[400px] p-4 bg-black text-white"
      >
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="text-2xl font-bold" onClick={() => setIsOpen(false)}>
            BeyondNull
          </Link>
          <SheetTrigger asChild>
            <Button   className="p-1 focus:ring-2 focus:ring-blue-500" variant="ghost" size="lg" aria-label="Close menu">
              <X className="h-6 w-6" />
            </Button>
          </SheetTrigger>
        </div>

        <nav className="flex flex-col space-y-6 text-white ">
          {navigationItems.map((item) => (
            <div key={item.title} onClick={() => handleItemClick(item)}>
              <NavItem className="w-full hover:text-blue-400" {...item} variant="mobile" />
            </div>
          ))}
        </nav>

        <SocialLinks className="mt-8" />
      </SheetContent>
    </Sheet>
  );
}