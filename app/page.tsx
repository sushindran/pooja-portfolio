"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";

const PROFILE = {
  name: "Pooja K Kini",
  tagline: "Researcher | Gender & Climate Justice | Urban Water | Monitoring & Evaluation",
  shortDescription: `I am a PhD candidate at Birkbeck, University of London, specialising in Geography, Environment, and Development Studies. My research explores the intersection of gender, urban water practices, and climate justice, in urban India. I am currently a Guest Teacher at London School of Economics (LSE) and a Postgraduate Teaching Assistant at University College London (UCL). `,
  email: "poojak.kini@gmail.com",
  linkedIn: "https://www.linkedin.com/in/pooja-k-369452b9/",
  headshot: "/images/headshot.jpg",
};

const GALLERY = [
  {
    src: "/images/gallery1.jpg",
    caption: "Short course on decolonisation at SLU, Sweden",
  },
  {
    src: "/images/gallery2.jpg",
    caption: "Team discussions in Jharkhand at PCI India for ending child marriage",
  },
  {
    src: "/images/gallery3.jpg",
    caption: "Facilitating panel discussion on ‘Engaging men for better health outcomes’",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  return (
    <main className="max-w-5xl mx-auto px-4 py-20 scroll-smooth">
      {/* INTRO SECTION */}
      <section id="intro" className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            {PROFILE.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-2 text-lg md:text-xl text-neutral-600 dark:text-neutral-300"
          >
            {PROFILE.tagline}
          </motion.p>

          <p className="mt-4 text-base md:text-lg text-neutral-700 dark:text-neutral-400 leading-relaxed">
            {PROFILE.shortDescription}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={PROFILE.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold bg-neutral-900 text-white hover:opacity-90"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${PROFILE.email}?subject=Hello%20${encodeURIComponent(PROFILE.name)}`}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
            <Link
              href="/bio"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500"
            >
              Profile <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Headshot */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-800">
            <img
              src={PROFILE.headshot}
              alt={`${PROFILE.name} headshot`}
              className="w-full h-[360px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="mt-20">
        <h2 className="text-2xl font-bold mb-6">Photo Gallery</h2>
        <div className="relative">
          <div ref={sliderRef} className="keen-slider rounded-2xl overflow-hidden shadow-lg">
            {GALLERY.map((item, i) => (
              <div key={i} className="keen-slider__slide flex flex-col">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-[400px] object-cover"
                />
                <p className="p-4 text-center text-sm text-neutral-600 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-800">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white dark:bg-neutral-900 shadow p-2 rounded-full hover:scale-105 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white dark:bg-neutral-900 shadow p-2 rounded-full hover:scale-105 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {GALLERY.map((_, i) => (
              <button
                key={i}
                onClick={() => instanceRef.current?.moveToIdx(i)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === i
                    ? "bg-blue-600"
                    : "bg-neutral-300 dark:bg-neutral-700"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
