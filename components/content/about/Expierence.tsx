"use client"

import { Variants } from "framer-motion"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"

const timelineData = [
    {
        title: "T-Level: Digital Software Development",
        organization: "Bournemouth & Poole College",
        date: "Sept 2025 - Present",
        type: "education",
        details: [
            "Focus: Software Programming, Security & Testing, Emerging Technologies, Legislation, Data.",
            "Elected Student Representative: Acted as a liaison between 15+ students and faculty to implement curriculum feedback."
        ]
    },
    {
        title: "IT Support Assistant (Work Placement)",
        organization: "Bournemouth & Poole College",
        date: "Jan 2026 - Present",
        type: "work",
        details: [
            "Hardware Maintenance: Performing hardware diagnostics and repairs, including dismantling and reassembling desktop hardware.",
            "System Deployment: Configuring and imaging new laptops for enterprise deployment, ensuring security protocols meet standards.",
            "Process Automation: Utilizing Microsoft Power Automate to design and build automated workflows."
        ]
    },
    {
        title: "Web & Social Media Project Member",
        organization: "Worksity (Industry Live Project)",
        date: "Jun 2025 - Jul 2025",
        type: "work",
        details: [
            "Web Development: Collaborated to design and deploy a responsive website for a local minibus firm.",
            "Graphic Design: Developed reusable social media assets using Canva and Photoshop.",
            "Team Leadership: Led and organized the project team, recognized with the 'Best Overall Project' award."
        ]
    },
    {
        title: "BTEC First in Digital",
        organization: "Bournemouth & Poole College",
        date: "Sept 2024 - Jun 2025",
        type: "education",
        details: [
            "Achieved Distinction grades across core modules including Web Development and Networking.",
            "Developed a foundational understanding of digital impact and IT systems."
        ]
    }
]

// Expierence timeline 
export default function ExperienceTimeline({ className }: Readonly<{ className?: string }>) {
    // Animation variants for the container
    const containerVariants: Variants = {
        hidden: { opacity: 0 }, // Makes the container invisible
        visible: {
            opacity: 1, // Sets the container visible
            transition: { staggerChildren: 0.3 }
        }
    }

    // Animation variants for each timeline item
    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { duration: 0.5, ease: "easeOut" } 
        }
    }

    return (
        <section className={cn("mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 overflow-hidden", className)}>
            {/* Section Header */}
            <motion.div 
                className="space-y-2 mb-12"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    Experience & Education
                </h2>
                <motion.div 
                    className="h-1 bg-primary rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                />
            </motion.div>

            {/* Timeline Wrapper */}
            <div className="relative">
                {/* Vertical Line Animation */}
                <motion.div 
                    className="absolute left-5 top-0 bottom-0 w-0.5 bg-border origin-top"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                <motion.div 
                    className="space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {timelineData.map((item, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            className="relative flex items-start gap-8 group"
                        >
                            {/* Timeline Icon with Pulse effect */}
                            <motion.div 
                                className="relative flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 z-10 group-hover:border-primary transition-colors duration-300"
                                whileHover={{ scale: 1.1 }}
                            >
                                {item.type === "work" ? (
                                    <Briefcase className="h-5 w-5 text-primary" />
                                ) : (
                                    <GraduationCap className="h-5 w-5 text-primary" />
                                )}
                            </motion.div>

                            {/* Content Card */}
                            <div className="flex-1 pb-8 min-w-0">
                                <motion.div 
                                    className="p-5 rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md hover:border-primary/30"
                                    whileHover={{ y: -2 }}
                                >
                                    {/* Card Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                        <h3 className="font-bold text-lg tracking-tight truncate group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <time className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-muted-foreground bg-muted/50 px-3 py-1 rounded-full w-fit shrink-0">
                                            <Calendar className="h-3.5 w-3.5" />
                                            {item.date}
                                        </time>
                                    </div>

                                    {/* Organization Label */}
                                    <div className="text-sm font-bold text-primary/90 mb-4 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                        {item.organization}
                                    </div>

                                    {/* CV Bullet Points */}
                                    <ul className="space-y-2 text-sm text-muted-foreground list-none">
                                        {item.details.map((detail, idx) => (
                                            <li key={idx} className="flex gap-2">
                                                <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                                <span className="leading-relaxed">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}