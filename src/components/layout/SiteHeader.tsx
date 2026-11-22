"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { primaryNavigation } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-pitch-black/90 backdrop-blur-md border-b border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Wordmark (Text-based temporary logo) */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="font-serif text-xl sm:text-2xl tracking-[0.18em] text-ivory hover:text-muted-gold transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-muted-gold"
        >
          {siteConfig.name}
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center space-x-8 lg:space-x-10"
        >
          {primaryNavigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-muted-gold ${
                  isActive
                    ? "text-ivory"
                    : "text-muted-grey hover:text-ivory"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="md:hidden p-2 text-ivory hover:text-muted-gold transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-muted-gold"
        >
          {isOpen ? (
            <X className="w-5 h-5 stroke-[1.5]" />
          ) : (
            <Menu className="w-5 h-5 stroke-[1.5]" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-20 bottom-0 z-40 bg-pitch-black flex flex-col justify-between px-8 py-10 md:hidden border-t border-white/5"
        >
          <nav
            aria-label="Mobile Navigation"
            className="flex flex-col space-y-6 pt-4"
          >
            {primaryNavigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-serif text-2xl tracking-[0.12em] transition-colors duration-300 ${
                    isActive
                      ? "text-muted-gold"
                      : "text-ivory hover:text-muted-gold"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-8 border-t border-white/5 flex flex-col space-y-3 text-xs text-muted-grey font-sans">
            <p className="tracking-wide text-ivory/80">{siteConfig.tagline}</p>
            <p className="text-muted-grey">{siteConfig.location}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-muted-gold transition-colors duration-300"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
