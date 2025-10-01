"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Linkedin,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const PROFILE = {
  name: "Pooja K Kini",
  tagline: "Researcher | Gender & Climate Justice | Urban Water | Monitoring & Evaluation",
  description:
    `Hello! I am a PhD candidate at Birkbeck, University of London (2022–2026), specialising in Geography, Environment, and Development Studies. My research—supported by the Mark James Studentship—centres on the intersectional and intergenerational gendered experiences of climate change in urban India, with a specific focus on water practices. I explore how everyday water-related decisions and struggles in cities like Jaipur reflect and (re) produce social-spatial inequalities and the accelerating impacts of climate change in informal settlements.

​

My academic work builds on over eight years of experience as a researcher and monitoring and evaluation (M&E) specialist across India and the UK. My core competencies lie in strategic planning, evaluation design, logframe and theory of change development, and mixed-method research. 

​

Through my doctoral studies, I am expanding my methodological and conceptual grounding in environmental and gender research, while continuing to engage with broader questions of social justice and development. I welcome opportunities to collaborate with scholars and practitioners in related fields and am also happy to speak with those interested in pursuing research or evaluation work in the UK.​`,
  email: "pooja@example.com", // replace
  linkedIn: "https://www.linkedin.com/in/yourhandle/", // replace
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
  const [showFull, setShowFull] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  const shortDescription = PROFILE.description.slice(0, 140) + "...";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100 scroll-smooth">
      {/* NAVBAR */}
      <header className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="font-bold text-lg">{PROFILE.name}</span>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#intro" className="hover:text-blue-600">Home</a>
            <a href="/resume" className="hover:text-blue-600">Resume</a>
            <a href="/projects" className="hover:text-blue-600">Projects</a>
            <a href="/publications" className="hover:text-blue-600">Publications</a>
            <a href="#gallery" className="hover:text-blue-600">Gallery</a>
          </div>
        </nav>
      </header>

      {/* INTRO SECTION */}
      <section
        id="intro"
        className="max-w-5xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center"
      >
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

          {/* Expandable description */}
          <div className="mt-4 text-base md:text-lg text-neutral-700 dark:text-neutral-400 leading-relaxed">
            <AnimatePresence mode="wait">
              <motion.p
                key={showFull ? "full" : "short"}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                {showFull ? PROFILE.description : shortDescription}
              </motion.p>
            </AnimatePresence>

            <button
              onClick={() => setShowFull(!showFull)}
              className="mt-2 inline-flex items-center text-blue-600 hover:underline text-sm"
            >
              {showFull ? (
                <>
                  Show less <ChevronUp className="w-4 h-4 ml-1" />
                </>
              ) : (
                <>
                  Read more <ChevronDown className="w-4 h-4 ml-1" />
                </>
              )}
            </button>
          </div>

          {/* Links */}
          <div className="mt-6 flex gap-3">
            <a
              href={PROFILE.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold bg-neutral-900 text-white hover:opacity-90"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${PROFILE.email}?subject=Hello%20${encodeURIComponent(
                PROFILE.name
              )}`}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500"
            >
              See Gallery <ArrowRight className="w-4 h-4" />
            </a>
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
      <section id="gallery" className="max-w-5xl mx-auto px-4 py-20">
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
    </div>
  );
}
