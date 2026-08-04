"use client"

import { Variants, motion } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * Data representing professional and academic milestones.
 */
const timelineData = [
    {
        title: "T-Level: Digital Software Development",
        organization: "Bournemouth & Poole College",
        date: "Sept 2025 — Present",
        details: [
            "Focus: Software Programming, Security & Testing, Emerging Technologies, Legislation, Data.",
            "Elected Student Representative: Acted as a liaison between 15+ students and faculty."
        ]
    },
    {
        title: "IT Support Assistant (Work Placement)",
        organization: "Bournemouth & Poole College",
        date: "Jan 2026 — Present",
        details: [
            "Hardware Maintenance: Performing hardware diagnostics and repairs.",
            "System Deployment: Configuring and imaging new laptops for enterprise deployment.",
            "Process Automation: Utilizing Microsoft Power Automate to build workflows."
        ]
    },
    {
        title: "Web & Social Media Project Member",
        organization: "Worksity (Industry Live Project)",
        date: "Jun 2025 — Jul 2025",
        details: [
            "Web Development: Collaborated to design and deploy a responsive website.",
            "Graphic Design: Developed reusable assets using Canva and Photoshop.",
            "Team Leadership: Led the project team, awarded 'Best Overall Project'."
        ]
    },
    {
        title: "BTEC First in Digital",
        organization: "Bournemouth & Poole College",
        date: "Sept 2024 — Jun 2025",
        details: [
            "Achieved Distinction grades across core modules including Web Development and Networking.",
            "Developed a foundational understanding of digital impact and IT systems."
        ]
    }
]

/**
 * ExperienceTimeline Component
 * 
 * Renders a vertical timeline of professional and educational experience.
 * Features staggered entrance animations and a clean grid layout.
 * 
 * @param className - Optional CSS class name for the section container.
 */
export default function ExperienceTimeline({ className }: Readonly<{ className?: string }>) {
    /**
     * Parent container variants for orchestrating staggered child animations.
     */
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    }

    /**
     * Animation variants for individual timeline items.
     */
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5, ease: "easeOut" } 
        },
    }

    return (
        <section className={cn("mx-auto w-full max-w-7xl px-4 py-16 md:px-6 lg:px-8", className)}>
            {/* Section Header */}
            <motion.div 
                className="mb-16 space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <p className="text-xs font-mono uppercase tracking-widest text-primary">
                    - Experience
                </p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    Where I&apos;ve been.
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full mt-4" />
            </motion.div>

            {/* Timeline List: Mapped from timelineData */}
            <motion.div 
                className="flex flex-col gap-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {timelineData.map((item, index) => (
                    <motion.div 
                        key={index} 
                        className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 border-b border-border/50"
                        variants={itemVariants}
                    >
                        {/* Date Column */}
                        <div className="text-sm font-mono text-muted-foreground pt-1">
                            {item.date}
                        </div>

                        {/* Content Column */}
                        <div className="space-y-3 pb-8">
                            <span className="text-xs font-bold text-primary uppercase tracking-wider">
                                {item.organization}
                            </span>
                            <h3 className="text-xl font-bold text-foreground">
                                {item.title}
                            </h3>
                            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                                {item.details.map((detail, i) => (
                                    <li key={i} className="flex gap-2">
                                        <span className="text-primary">•</span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}