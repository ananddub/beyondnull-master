"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { socialLinks } from "./config";
import { SocialLink } from "./types";

const iconMap = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
} as const;

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center space-x-4 ${className.trim()}`}>
      {socialLinks.map(({ href, label, platform }: SocialLink) => {
        const Icon = iconMap[platform];
        return (
          <Link
            key={platform}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit our ${label} page`}
            className="hover:text-primary transition-colors duration-200"
          >
            <Icon size={20} className="hover:scale-110 transition-transform duration-200" />
          </Link>
        );
      })}
    </div>
  );
}
