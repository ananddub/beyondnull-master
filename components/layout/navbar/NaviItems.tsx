import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavigationItem } from "./types";

interface NavItemProps extends NavigationItem {
  className?: string;
  variant?: "desktop" | "mobile";
}

export function NavItem({ 
  title, 
  href, 
  className, 
  variant = "desktop" 
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-lg font-medium transition-colors duration-200",
        variant === "desktop" ? "hover:text-primary-foreground/80" : "hover:text-primary",
        className
      )}
    >
      {title}
    </Link>
  );
}
