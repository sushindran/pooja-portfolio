"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = (path: string) =>
    `relative pb-1 transition-all duration-300 ${
      pathname === path
        ? "text-blue-600 font-semibold after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-full after:bg-blue-600 after:content-['']"
        : "text-neutral-700 dark:text-neutral-200 hover:text-blue-600"
    }`;

  const scrollToContact = () => {
    setIsMenuOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          <span className="font-bold text-xl tracking-tight">Pooja K Kini</span>
          <div className="flex items-center gap-8 text-sm font-medium">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link href="/bio" className={linkClass("/bio")}>
              Profile
            </Link>
            <Link href="/projects" className={linkClass("/projects")}>
              Projects
            </Link>
            <Link href="/publications" className={linkClass("/publications")}>
              Publications
            </Link>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              Say Hello 👋
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg tracking-tight">Pooja K Kini</span>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-neutral-700 dark:text-neutral-200 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 shadow-lg">
              <div className="flex flex-col gap-4 p-6">
                <Link 
                  href="/" 
                  className={linkClass("/")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/bio" 
                  className={linkClass("/bio")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link 
                  href="/projects" 
                  className={linkClass("/projects")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link 
                  href="/publications" 
                  className={linkClass("/publications")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Publications
                </Link>
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Say Hello 👋
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}