"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import Image from "next/image";

const PROFILE = {
  name: "Pooja K Kini",
  tagline:
    "Researcher | Gender & Climate Justice | Urban Water | Monitoring & Evaluation",
  shortDescription: `I am a PhD candidate at Birkbeck, University of London, specialising in Geography, Environment, and Development Studies. My research explores the intersection of gender, urban water practices, and climate justice in urban India. I am currently a Guest Teacher at London School of Economics (LSE) and a Postgraduate Teaching Assistant at University College London (UCL).`,
  email: "poojak.kini@gmail.com",
  linkedIn: "https://www.linkedin.com/in/pooja-k-369452b9/",
  headshot: "/images/headshot.jpg",
};

const RECENT_ENGAGEMENTS = [
  {
    src: "/images/gallery1.jpeg",
    caption:
      "Short PhD Course on Gender, Development, and Environment Governance held in August and September 2024 at Swedish University of Agricultural Science, Uppsala, Sweden by Professor Seema Arora Jonsson",
  },
  {
    src: "/images/rgs-presentation.jpeg",
    caption:
      "Presenting first round of findings from PhD research titled 'Beyond tanker, taps, and tanks' at Royal Geography Society at the London Postgraduate Mid-Conference in 2025. Funded by European Cooperation in Science and Technology (COST).",
  },
  {
    src: "/images/unesco-workshop.jpeg",
    caption:
      "Presented my arguments in the workshop organized by UNESCO World Water Assessment Programme and the Università di Pisa based on my PhD study. Partly funded by UNESCO.",
  },
  {
    src: "/images/bfwg-award.jpeg",
    caption:
      "Awarded first place at the British Federation of Women Graduates (BFWG) Presentation Day 2025 to present my PhD research among a talented group of women scholars and to engage in meaningful conversations across disciplines.",
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
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-25px); }
        }
        @keyframes wave-slow {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-15px) translateY(3px); }
        }
        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.3; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        @keyframes starfish-wink {
          0%, 90%, 100% { transform: scale(1) rotate(0deg); }
          95% { transform: scale(0.95) rotate(-5deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-wave { 
          animation: wave 8s ease-in-out infinite;
          will-change: transform;
        }
        .animate-wave-slow { 
          animation: wave-slow 12s ease-in-out infinite;
          will-change: transform;
        }
        .animate-ripple { 
          animation: ripple 4s ease-out infinite;
          will-change: transform, opacity;
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 4s ease-in-out infinite;
        }
        .animate-starfish-wink {
          animation: starfish-wink 4s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* HERO SECTION with water-themed background */}
      <section
        id="intro"
        className="relative overflow-hidden min-h-[90vh] flex items-center"
      >
        {/* Animated Water Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-blue-950 dark:via-cyan-950 dark:to-blue-900">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-3xl animate-ripple"></div>
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-200/20 dark:bg-cyan-400/10 rounded-full blur-3xl animate-ripple" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Animated Starfish Easter Egg */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-20 right-32 w-16 h-16 opacity-40 hover:opacity-80 transition-opacity duration-300 cursor-pointer animate-float"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full animate-starfish-wink">
            <path
              d="M50 10 L60 35 L85 35 L65 50 L75 75 L50 60 L25 75 L35 50 L15 35 L40 35 Z"
              fill="#f59e0b"
              stroke="#d97706"
              strokeWidth="2"
            />
            <circle cx="45" cy="40" r="3" fill="#7c2d12" className="animate-pulse" />
            <circle cx="55" cy="40" r="3" fill="#7c2d12" className="animate-pulse" />
            <circle cx="50" cy="35" r="1.5" fill="#ea580c" opacity="0.6" />
            <circle cx="45" cy="50" r="1.5" fill="#ea580c" opacity="0.6" />
            <circle cx="55" cy="50" r="1.5" fill="#ea580c" opacity="0.6" />
          </svg>
        </motion.div>

        {/* Animated Wave SVG - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden opacity-50 pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-full"
          >
            <path
              d="M321.39,56.44c-58,10.79-114.16,30.13-170,41.74-82.39,17.14-168.78,19.5-250.39-4.32C-26.44,85.38,0,66,0,66V120H1200V15.67c-49.48,18.63-98.57,34.4-147.39,41.11-97,13.38-194-5.94-287.61-19.18C671,28.24,568.84,13.69,468.17,26.2,418,32.47,369.71,47,321.39,56.44Z"
              fill="#dbeafe"
              className="dark:fill-blue-900/40 animate-wave"
            ></path>
          </svg>
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-full"
            style={{ transform: 'translateY(10px)' }}
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#bfdbfe"
              className="dark:fill-blue-800/30 animate-wave-slow"
              opacity="0.5"
            ></path>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              {PROFILE.name}
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 font-light">
              {PROFILE.tagline}
            </p>

            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>

            <p className="mt-8 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {PROFILE.shortDescription}
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={PROFILE.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
              <a
                href={`mailto:${PROFILE.email}?subject=Hello%20${encodeURIComponent(
                  PROFILE.name
                )}`}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
              >
                <Mail className="w-5 h-5" /> Email
              </a>
              <Link
                href="/bio"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
              >
                <User className="w-5 h-5" /> Profile
              </Link>
            </div>
          </motion.div>

          {/* Headshot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse-subtle"></div>
              
              <div className="relative rounded-full overflow-hidden shadow-2xl border-8 border-white dark:border-neutral-900 aspect-square">
                <Image
                  src={PROFILE.headshot}
                  alt={`${PROFILE.name} headshot`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-15 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500 rounded-full opacity-15 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RECENT ENGAGEMENTS SECTION */}
      <section id="engagements" className="max-w-6xl mx-auto px-6 py-24 bg-white dark:bg-neutral-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Recent Engagements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-12"></div>
        </motion.div>

        <div className="relative">
          <div
            ref={sliderRef}
            className="keen-slider rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800"
          >
            {RECENT_ENGAGEMENTS.map((item, i) => (
              <div key={i} className="keen-slider__slide flex flex-col bg-white dark:bg-neutral-900">
                <div className="relative h-[500px] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1200px"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-8 bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
                  <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute top-1/2 left-6 -translate-y-1/2 bg-white dark:bg-neutral-800 shadow-xl p-4 rounded-full hover:scale-110 transition-transform border border-neutral-200 dark:border-neutral-700"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute top-1/2 right-6 -translate-y-1/2 bg-white dark:bg-neutral-800 shadow-xl p-4 rounded-full hover:scale-110 transition-transform border border-neutral-200 dark:border-neutral-700"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {RECENT_ENGAGEMENTS.map((_, i) => (
              <button
                key={i}
                onClick={() => instanceRef.current?.moveToIdx(i)}
                className={`transition-all rounded-full ${
                  currentSlide === i
                    ? "w-12 h-3 bg-blue-600"
                    : "w-3 h-3 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ADD THIS SECTION TO YOUR HOME PAGE - RIGHT BEFORE THE FOOTER */}

      {/* CONTACT FORM SECTION */}
      <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-blue-950 dark:via-cyan-950 dark:to-blue-900 py-24">
        <div className="absolute top-10 right-20 w-48 h-48 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-cyan-200/20 dark:bg-cyan-400/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4">
              Let&apos;s Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
              Have a question or want to collaborate? I&apos;d love to hear from you. Drop me a message!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl p-8 md:p-12 border border-neutral-200 dark:border-neutral-800"
          >
            <form 
              action="https://docs.google.com/forms/d/e/1FAIpQLSd_k3cBlVW4PqNMcpD-BAJcUwSlDautaHVmwYkca9ghKo6SHA/formResponse" 
              method="POST" 
              target="hidden_iframe"
              onSubmit={() => {
                setTimeout(() => {
                  alert('Thank you! Your message has been sent. I\'ll get back to you soon!');
                  (document.getElementById('contact-form') as HTMLFormElement)?.reset();
                }, 500);
              }}
              id="contact-form"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="entry.893244811"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="entry.1911860327"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="entry.2080684950"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5" /> Send Message
              </button>
            </form>

            {/* Hidden iframe to prevent page redirect */}
            <iframe 
              name="hidden_iframe" 
              id="hidden_iframe" 
              style={{ display: 'none' }}
              onLoad={() => console.log('Form submitted')}
            />
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
          <p>© 2025 {PROFILE.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
