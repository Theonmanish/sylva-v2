"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { footerNavigation } from "@/content/navigation";
import { siteConfig } from "@/content/site";

const emptySubscribe = () => () => {};
const getClientYear = () => new Date().getFullYear();
const getServerYear = () => 2026;

export function SiteFooter() {
  const currentYear = useSyncExternalStore(
    emptySubscribe,
    getClientYear,
    getServerYear
  );

  return (
    <footer className="w-full bg-pitch-black border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start space-y-4">
            <Link
              href="/"
              className="font-serif text-2xl tracking-[0.18em] text-ivory hover:text-muted-gold transition-colors duration-300"
            >
              {siteConfig.name}
            </Link>
            <p className="font-serif italic text-base text-muted-gold tracking-wide">
              {siteConfig.tagline}
            </p>
            <p className="font-sans text-xs text-muted-grey max-w-sm leading-relaxed pt-2">
              {siteConfig.description}
            </p>
            <p className="font-sans text-xs text-muted-grey/80">
              {siteConfig.location}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-muted-grey/60">
              Index
            </span>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-xs tracking-[0.1em] text-ivory/80 hover:text-muted-gold transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Enquiries Column */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-muted-grey/60">
              Direct
            </span>
            <div className="flex flex-col space-y-3 font-sans text-xs">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-ivory/80 hover:text-muted-gold transition-colors duration-300"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/80 hover:text-muted-gold transition-colors duration-300"
              >
                Instagram {siteConfig.instagram.handle}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-sans text-xs text-muted-grey/60">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="tracking-widest uppercase text-[10px]">
            {siteConfig.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
