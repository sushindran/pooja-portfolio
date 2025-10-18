"use client";
import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const PROFILE = {
  name: "Pooja K Kini",
  headshot: "/images/headshot.jpg",
  resume: "/Pooja-Kini-Resume.pdf",
  bio: `Pooja K Kini is a PhD candidate at Birkbeck, University of London (2022–2026), 
  specialising in Geography, Environment, and Development Studies. Her research focuses 
  on the intersectional and intergenerational gendered experiences of climate change 
  in urban India, with a particular interest in how water practices in informal 
  settlements reflect and reinforce social and spatial inequalities. 
  
  She has over eight years of experience as a researcher and monitoring & evaluation 
  specialist across India and the UK, focusing on strategic planning, mixed-methods 
  evaluation, and social impact assessment. Pooja’s work reflects a deep commitment 
  to equity, sustainability, and inclusive research practices.`,
};

export default function BioPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8">Bio & Resume</h1>

        {/* Bio + Headshot */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <img
            src={PROFILE.headshot}
            alt={`${PROFILE.name} headshot`}
            className="rounded-2xl shadow-lg w-full h-[360px] object-cover border border-neutral-200 dark:border-neutral-800"
          />
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed whitespace-pre-line">
            {PROFILE.bio}
          </p>
        </div>

        {/* Resume Embed */}
        <div className="border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden shadow-md mb-6">
          <iframe
            src={PROFILE.resume}
            width="100%"
            height="800px"
            title="Pooja Kini Resume"
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Download Button */}
        <a
          href={PROFILE.resume}
          download
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 transition"
        >
          <Download className="w-4 h-4" /> Download Resume
        </a>
      </motion.div>
    </main>
  );
}
