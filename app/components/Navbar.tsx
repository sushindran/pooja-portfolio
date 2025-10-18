"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `relative pb-1 transition-all duration-300 ${
      pathname === path
        ? "text-blue-600 font-semibold after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-full after:bg-blue-600 after:content-['']"
        : "text-neutral-700 dark:text-neutral-200 hover:text-blue-600"
    }`;

  return (
    <header className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="font-bold text-lg tracking-tight">Pooja K Kini</span>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/bio" className={linkClass("/bio")}>Bio & Resume</Link>
          <Link href="/projects" className={linkClass("/projects")}>Projects</Link>
          <Link href="/publications" className={linkClass("/publications")}>Publications</Link>
          <a href="#gallery" className="hover:text-blue-600">Gallery</a>
        </div>
      </nav>
    </header>
  );
}
