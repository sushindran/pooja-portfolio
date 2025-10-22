"use client";
import React from "react";
import { motion } from "framer-motion";
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
        image: "/images/project-childmarriage.jpeg",
    },
    {
        title: "Status of Migrant Labour in India — Social Protection Focus (2021–22)",
        funder: "Japan International Cooperation Agency (JICA)",
        description:
            "Mixed-method research assessing the vulnerabilities of migrant workers, evaluating social safeguards in JICA-financed projects, and designing a checklist to integrate social protection measures for site workers.",
        image: "/images/project-migrant.jpeg",
    },
    {
        title: "Strengthening Women's Advocacy in Local Self Governance in Rural India",
        funder: "Azim Premji Foundation, AJWS, Dasra, BMZ",
        description:
            "Supported The Hunger Project India's initiatives to build leadership among elected women representatives across five states, enhancing their advocacy and governance capacities.",
        image: "/images/project-governance.jpeg",
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
        <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
            {/* PAGE HEADER */}
            <header className="max-w-5xl mx-auto px-4 py-16 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold"
                >
                    Projects
                </motion.h1>
                <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                    A selection of research and evaluation projects focused on gender, climate justice,
                    governance, and social protection across India and the UK.
                </p>
            </header>

            {/* PROJECT GRID */}
            <section className="max-w-6xl mx-auto px-4 pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        className="flip-card h-64"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        whileHover={{ y: -4 }}
                    >
                        <div className="flip-card-inner">
                            {/* FRONT */}
                            <div className="flip-card-front overflow-hidden">
                                <div className="relative w-full h-full flex flex-col justify-end bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-lg">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        priority={index < 2}
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover"
                                    />
                                    <div className="relative z-10 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm p-3">
                                        <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-100">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* BACK */}
                            <div className="flip-card-back overflow-hidden">
                                <div className="w-full h-full p-4 overflow-y-auto bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-lg">
                                    <h3 className="text-sm font-semibold mb-2 text-neutral-800 dark:text-neutral-100">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                                        {project.description}
                                    </p>
                                    {project.funder && (
                                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                                            <strong>Funder:</strong> {project.funder}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>
        </div>
    );
}
