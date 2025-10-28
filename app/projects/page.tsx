"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
    {
        title: "Intersectional Gendered Experiences of Water Stress (2022–26)",
        funder: "Mark James Studentship, Birkbeck, UoL",
        description:
            "Independent ethnographic research exploring intersectional and intergenerational gendered experiences of climate change, focusing on water practices in urban India. The project highlights the everyday challenges faced by different gender groups and proposes pathways toward more inclusive and sustainable futures.",
        image: "/images/project-water.jpeg",
    },
    {
        title: "Buniyaad — Just Transition in Brick Kiln Industry in North India (2024–25)",
        funder: "MacArthur Foundation",
        description:
            "A multi-stakeholder initiative by Purpose India connecting brick kiln workers, owners, and policymakers. The project promotes fair wages, decent working conditions, and environmental sustainability within the brick kiln sector.",
        image: "/images/project-buniyaad.jpeg",
    },
    {
        title: "Mental Health Services for Domestic Abuse Survivors in London (2023–25)",
        funder: "",
        description:
            "Monitoring and evaluation research focused on understanding the effectiveness of mental health programs for domestic abuse survivors and proposing data-driven recommendations for more inclusive interventions.",
        image: "/images/project-mentalhealth.jpeg",
    },
    {
        title: "Strengthening Mother–Daughter Relationships to End Child Marriage (2020–22)",
        funder: "Bill & Melinda Gates Foundation (BMGF)",
        description:
            "At Project Concern International (PCI) India, contributed to programs empowering adolescent girls and mothers in rural India, strengthening communication and agency to reduce child marriage rates.",
        gradient: "from-rose-100 via-pink-100 to-purple-100 dark:from-rose-900 dark:via-pink-900 dark:to-purple-900",
    },
    {
        title: "Status of Migrant Labour in India — Social Protection Focus (2021–22)",
        funder: "Japan International Cooperation Agency (JICA)",
        description:
            "Mixed-method research assessing the vulnerabilities of migrant workers, evaluating social safeguards in JICA-financed projects, and designing a checklist to integrate social protection measures for site workers.",
        gradient: "from-orange-100 via-amber-100 to-yellow-100 dark:from-orange-900 dark:via-amber-900 dark:to-yellow-900",
    },
    {
        title: "Strengthening Women's Advocacy in Local Self Governance in Rural India",
        funder: "Azim Premji Foundation, AJWS, Dasra, BMZ",
        description:
            "Supported The Hunger Project India's initiatives to build leadership among elected women representatives across five states, enhancing their advocacy and governance capacities.",
        gradient: "from-purple-100 via-indigo-100 to-blue-100 dark:from-purple-900 dark:via-indigo-900 dark:to-blue-900",
    },
    {
        title: "Documenting UNICEF Communication 4 Development Initiatives",
        funder: "UNICEF C4D",
        description:
            "Documentation and evaluation of communication programs implemented by UNICEF to strengthen women's participation and advocacy in local governance across rural India.",
        image: "/images/project-unicef.jpeg",
    },
];

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950">
            <style>{`
                .flip-card {
                    perspective: 1000px;
                }
                .flip-card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    transition: transform 0.6s;
                    transform-style: preserve-3d;
                }
                .flip-card:hover .flip-card-inner {
                    transform: rotateY(180deg);
                }
                .flip-card-front,
                .flip-card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    border-radius: 1rem;
                }
                .flip-card-front {
                    transform: rotateY(0deg);
                    z-index: 2;
                }
                .flip-card-back {
                    transform: rotateY(180deg);
                }
            `}</style>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-blue-950 dark:via-cyan-950 dark:to-blue-900 py-20">
                <div className="absolute top-10 right-20 w-48 h-48 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-20 w-64 h-64 bg-cyan-200/20 dark:bg-cyan-400/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Briefcase className="w-16 h-16 mx-auto mb-6 text-blue-600" />
                        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-6">
                            Projects
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-6"></div>
                        <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
                            A selection of research and evaluation projects focused on gender, climate justice,
                            governance, and social protection across India and the UK.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid with Flip Cards */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROJECTS.map((project, index) => (
                            <motion.div
                                key={index}
                                className="flip-card h-80"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <div className="flip-card-inner">
                                    {/* FRONT */}
                                    <div className="flip-card-front overflow-hidden">
                                        <div className="relative w-full h-full flex flex-col justify-end bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-lg">
                                            {project.image ? (
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}></div>
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                            <div className="relative z-10 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm p-4">
                                                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 line-clamp-2">
                                                    {project.title}
                                                </h3>
                                                <p className="text-xs text-blue-600 dark:text-blue-400 mt-1 font-semibold">
                                                    Hover to read more
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* BACK */}
                                    <div className="flip-card-back overflow-hidden">
                                        <div className="w-full h-full p-6 overflow-y-auto bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-lg flex flex-col">
                                            <h3 className="text-base font-bold mb-3 text-neutral-900 dark:text-neutral-100">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed flex-grow">
                                                {project.description}
                                            </p>
                                            {project.funder && (
                                                <div className="pt-3 border-t border-neutral-300 dark:border-neutral-600">
                                                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                                                        <span className="font-semibold text-blue-600 dark:text-blue-400">Funder:</span> {project.funder}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}