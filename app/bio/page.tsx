"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, FileText, Award, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PROFILE = {
  name: "Pooja K Kini",
  headshot: "/images/headshot-profile.jpg",
  resume: "/documents/Pooja-Kini-Resume.pdf",
  bio: `Pooja Kini is a PhD candidate at Birkbeck, University of London (2022–2026), specialising in Geography, Environment, and Development Studies. Her research is funded by the Mark James studentship and focuses on the intersectional and intergenerational gendered experiences of water stress in urban India. 

Pooja has ten years of experience as a researcher and monitoring & evaluation specialist across India and the UK, focusing on strategic planning, mixed-methods evaluation, ethnographic research and social impact assessment. Pooja's work reflects a deep commitment to equity, justice, and inclusive research practices.`,
  tagline: "Interdisciplinary researcher with 10 years' experience across India and the UK in applied research, evaluation, and knowledge management.",
};

const WORK_EXPERIENCE = [
  {
    id: 1,
    title: "Graduate Teaching Assistant (GTA)",
    organization: "UCL and LSE",
    location: "London, UK",
    period: "Sep 2025 - Present",
    type: "Current",
    description: [
      "Assisting with the delivery of the module Geographies of Infrastructure at UCL and Environment: Science and Society at LSE",
      "Leading small-group seminars and facilitated discussions to support student engagement with course material",
      "Provided academic support and guidance to students, including feedback on assignments and class participation"
    ]
  },
  {
    id: 2,
    title: "Data Team (Part-time)",
    organization: "Woman's Trust",
    location: "London, UK",
    period: "Feb 2023 - Aug 2023 & Jan 2025 - Dec 2025",
    type: "Contract",
    description: [
      "Improved data systems (Oasis CRM, CORE, Excel, Power BI); transitioned from MS Access and Excel to Power BI",
      "Produced impact reports for funders, Councils, and Trustees",
      "Trained staff in internal data systems and audited data entry"
    ]
  },
  {
    id: 3,
    title: "IML Consultant (Part-time)",
    organization: "Purpose India",
    location: "India",
    period: "Oct 2023 - Aug 2024",
    type: "Contract",
    description: [
      "Led research on Just Transition in the brick kiln sector in North India funded by MacArthur",
      "Designed and implemented project-level indicators, logframes, and secondary research",
      "Collaborated with partners and a national educational institute for knowledge management",
      "Developed knowledge products, co-authored a journal article (forthcoming)"
    ]
  },
  {
    id: 4,
    title: "Doctoral Researcher",
    organization: "Birkbeck, University of London",
    location: "London, UK",
    period: "Oct 2022 - Present",
    type: "Current",
    description: [
      "Leading a fully funded field-based research on intersectional and intergenerational gendered experiences of water stress in urban India, with a focus on informal settlements in Jaipur",
      "Designed and implemented a year-long qualitative study using life history interviews, focus groups, and participatory methods, engaging residents, government officials, and CSOs",
      "Applied feminist and decolonial frameworks to analyse urban climate adaptation; produced policy-relevant insights in collaboration with local NGOs and city actors",
      "Presented at international conferences (RGS-IBG, POLLEN, UNESCO WWAP); forthcoming publication with UNESCO WWAP based on research findings"
    ]
  },
  {
    id: 5,
    title: "Manager - Research and Knowledge Management",
    organization: "PCI India",
    location: "India",
    period: "Dec 2020 - Aug 2022",
    description: [
      "Led knowledge management for programmes funded by the Bill & Melinda Gates Foundation",
      "Designed and led more than 10 India-wide impact assessments for gender-focused projects, specifically on ending child marriage and violence against women",
      "Produced evidence-based learning products, policy briefs, and advocacy materials"
    ]
  },
  {
    id: 6,
    title: "National Programme Associate - M&E",
    organization: "The Hunger Project India",
    location: "India",
    period: "Aug 2018 - Nov 2020",
    description: [
      "Managed M&E for women's political leadership and early marriage prevention programmes across six states funded by BMZ, AJWS, Azim Premji Foundation",
      "Developed digital MIS in collaboration with consultants; conducted baseline, midline, and endline studies"
    ]
  },
  {
    id: 7,
    title: "Project Lead - Results and Insights",
    organization: "CMS India",
    location: "India",
    period: "Aug 2016 - Apr 2017",
    description: [
      "Led evaluations on agriculture, health, and sanitation for programmes by Cotton Connect, AKRSP, TATA Trusts, Solidaridad, UNICEF C4D",
      "Drafted competitive proposals and designed data collection tools"
    ]
  }
];

const EDUCATION = [
  {
    id: 1,
    degree: "PhD in Geography, Environment, Development Studies",
    institution: "Birkbeck, University of London",
    period: "Oct 2022 - Present",
    note: "Funded by Mark James studentship"
  },
  {
    id: 2,
    degree: "Master's in Sustainable Development Practice",
    institution: "TERI School of Advanced Studies",
    location: "Delhi, India",
    period: "Aug 2014 - Jun 2016"
  },
  {
    id: 3,
    degree: "Bachelor's (Honors) in Anthropology",
    institution: "Hansraj, University of Delhi",
    location: "India",
    period: "Jul 2011 - Jun 2014"
  }
];

const PUBLICATIONS = [
  {
    title: "A contextual understanding of Just Transitions in Uttar Pradesh's brick industry",
    authors: "Bhullar, H. & Kini, P.",
    journal: "GeoProgress Journal",
    year: "2025"
  },
  {
    title: "Intersectional gendered experiences of water infrastructure: A case study of Lakshman Basti",
    authors: "Kini, P.",
    journal: "UNESCO WWAP",
    year: "2026"
  }
];

const PRESENTATIONS = [
  {
    title: "Tanker, Taps, and Tanks: Case Study of Lakshman Basti",
    event: "UNESCO WWAP Workshop",
    location: "Pisa, Italy",
    date: "Jan 2025"
  },
  {
    title: "Water Practices in Urban India using a Feminist Political Ecology Approach",
    event: "RGS-IBG Annual Conference",
    location: "London, UK",
    date: "Sep 2023"
  },
  {
    title: "Intersectional and Intergenerational Water Practices in Urban India",
    event: "POLLEN Conference",
    location: "Durban, South Africa",
    date: "Jun 2023"
  },
  {
    title: "Exploring Mother-Daughter Relationships in Jharkhand",
    event: "International Population Conference",
    location: "Hyderabad, India",
    date: "2021"
  }
];

const SKILLS = [
  {
    category: "Research & Evaluation",
    items: ["Mixed-methods design", "Logframes", "Theory of change"]
  },
  {
    category: "Quantitative Analysis",
    items: ["SPSS", "STATA", "Power BI", "Microsoft Excel"]
  },
  {
    category: "Qualitative Analysis",
    items: ["Atlas.ti", "Interview coding", "Narrative analysis"]
  },
  {
    category: "Knowledge Management",
    items: ["Policy briefs", "Peer-reviewed articles", "Evaluation reports"]
  },
  {
    category: "Expertise",
    items: ["Gender and climate justice", "Governance", "Sustainable development"]
  }
];

interface TimelineItemProps {
  item: {
    id: number;
    title?: string;
    degree?: string;
    organization?: string;
    institution?: string;
    location?: string;
    period: string;
    type?: string;
    description?: string[];
    note?: string;
  };
  index: number;
  isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, isLeft }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`flex gap-8 items-start ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'}`}>
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-shadow">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className={isLeft ? 'text-left' : 'text-right'}>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                {item.title || item.degree}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold">
                {item.organization || item.institution}
              </p>
              {item.location && (
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {item.location}
                </p>
              )}
            </div>
            {item.type && (
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 whitespace-nowrap">
                {item.type}
              </span>
            )}
          </div>
          
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            {item.period}
          </p>

          {item.description && (
            <>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-semibold mb-3"
              >
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                {isExpanded ? 'Show Less' : 'Show Details'}
              </button>
              
              {isExpanded && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2 text-neutral-700 dark:text-neutral-300 text-sm"
                >
                  {item.description.map((point: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </>
          )}
          
          {item.note && (
            <p className="text-sm italic text-neutral-600 dark:text-neutral-400 mt-3">
              {item.note}
            </p>
          )}
        </div>
      </div>

      {/* Timeline Dot */}
      <div className="relative flex flex-col items-center">
        <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-neutral-950 shadow-lg z-10"></div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="flex-1"></div>
    </motion.div>
  );
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Compact Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-blue-950 dark:via-cyan-950 dark:to-blue-900 py-12">
        <div className="absolute top-10 right-20 w-48 h-48 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-cyan-200/20 dark:bg-cyan-400/10 rounded-full blur-3xl"></div>

        {/* Easter Egg: Cloud Artwork */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.25, y: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-16 left-32 w-20 h-20 opacity-25 hover:opacity-50 transition-opacity duration-300"
        >
          <Image
            src="/images/art-cloud.jpg"
            alt="Decorative cloud artwork"
            fill
            className="object-contain"
            sizes="80px"
          />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent"
          >
            Profile
          </motion.h1>
        </div>
      </section>

      {/* Bio Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-900 aspect-[3/4]">
                <Image
                  src={PROFILE.headshot}
                  alt={`${PROFILE.name} headshot`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3"
          >
            <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
              About {PROFILE.name}
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed whitespace-pre-line mb-6">
                {PROFILE.bio}
              </p>
              <p className="text-base text-neutral-600 dark:text-neutral-400 italic">
                {PROFILE.tagline}
              </p>
            </div>
            
            <a
              href={PROFILE.resume}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg mt-6"
            >
              <Download className="w-5 h-5" /> Download Full Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* Work Experience Timeline */}
      <section className="bg-neutral-50 dark:bg-neutral-900 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Briefcase className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-4"></div>
            <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Interdisciplinary researcher with 10 years&apos; experience across India and the UK in applied research, evaluation, and knowledge management.
            </p>
          </motion.div>

          {/* Timeline Line */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {WORK_EXPERIENCE.map((job, index) => (
                <TimelineItem
                  key={job.id}
                  item={job}
                  index={index}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <GraduationCap className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto"></div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {EDUCATION.map((edu, index) => (
                <TimelineItem
                  key={edu.id}
                  item={edu}
                  index={index}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-neutral-50 dark:bg-neutral-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700"
              >
                <h3 className="text-lg font-bold mb-4 text-blue-600 dark:text-blue-400">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Presentations - Highlights Only */}
      <section className="bg-neutral-50 dark:bg-neutral-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
              Research Highlights
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto"></div>
          </motion.div>

          {/* Featured Publications */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-neutral-100 flex items-center justify-center gap-2">
              <FileText className="w-6 h-6 text-blue-600" />
              Recent Publications
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {PUBLICATIONS.slice(0, 2).map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700"
                >
                  <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
                    {pub.title}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                    {pub.authors}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {pub.journal} ({pub.year})
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/publications"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
              >
                View All Publications <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Featured Presentations */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-neutral-100 flex items-center justify-center gap-2">
              <Award className="w-6 h-6 text-blue-600" />
              Selected Presentations
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {PRESENTATIONS.slice(0, 2).map((pres, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700"
                >
                  <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
                    {pres.title}
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {pres.event}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {pres.location} • {pres.date}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/publications"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
              >
                View All Presentations <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Work Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-3 text-neutral-900 dark:text-neutral-100">
              Creative Pursuits
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Exploring themes of nature, water, and social narratives through mixed-media art
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { src: "/images/art-starfish-detail.jpg", alt: "Starfish sculpture with shells and beadwork" },
              { src: "/images/art-starfish.jpg", alt: "Handcrafted coral starfish" },
              { src: "/images/art-cloud.jpg", alt: "Whimsical cloud with stars" },
              { src: "/images/art-face.jpg", alt: "Abstract colorful portrait" }
            ].map((artwork, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
              >
                <Image
                  src={artwork.src}
                  alt={artwork.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}