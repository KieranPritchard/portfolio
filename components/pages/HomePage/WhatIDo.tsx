"use client"

import { motion } from "framer-motion"
import { Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import { Lock, Code, HandHelping } from "lucide-react"

/**
 * WhatIDo Component
 * 
 * Displays three main areas of expertise (Ethical Hacking, Software Development, IT Support)
 * as stylized cards with animations.
 * 
 * @param className - Optional CSS class name for the section container.
 */
export default function WhatIDo({ className }: Readonly<{ className?: string }>) {
    /**
     * Data representing professional services and expertise areas.
     */
    const items = [
        {
            title: "Ethical Hacking",
            description: "I actively compete in CTF challenges and develop custom automation tools and scripts to enhance security workflows.",
            icon: Lock,
            tags: ["CTFs", "Pentesting"]
        },
        {
            title: "Software Development",
            description: "While specializing in software development for my T-Level course, I also build independent projects and custom digital solutions.",
            icon: Code,
            tags: ["React", "Python", "Go"]
        },
        {
            title: "IT Support",
            description: "Experienced in providing technical assistance within professional IT environments, ensuring seamless support for team members.",
            icon: HandHelping,
            tags: ["Networking", "Hardware", "Support"]
        }
    ]

    /**
     * Animation variants for the grid container to stagger child cards.
     */
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    /**
     * Animation variants for individual cards defining their entry motion.
     */
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5, ease: "easeOut" } 
        },
    }

    return (
        <section
            id="what-i-do"
            className={cn(
                "mx-auto w-full max-w-7xl px-4 py-20 md:px-6 lg:px-8 overflow-hidden",
                className
            )}
        >
            {/* Section Header */}
            <motion.div
                className="mb-12 space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-xs text-primary font-mono">
                    - WHAT I DO
                </p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    Three Disciplines
                </h2>
                <motion.div 
                    className="h-1 bg-primary rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                />
            </motion.div>

            {/* Disciplines List: Staggered entry cards */}
            <motion.div 
                className="flex flex-col gap-6 w-full mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {items.map((item, index) => (
                    <motion.div 
                        key={index} 
                        variants={cardVariants}
                        className="group relative flex items-center gap-6 bg-muted/20 rounded-xl border p-6 transition-all duration-300 hover:border-primary"
                    >
                        {/* Numbering: Displayed in the top right of each card */}
                        <div className="absolute top-6 right-6 font-mono text-sm">
                            0{index + 1}
                        </div>

                        {/* Icon Container */}
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg text-primary bg-primary/10">
                            <item.icon className="h-8 w-8" />
                        </div>

                        {/* Card Content Area */}
                        <div className="flex flex-1 flex-col gap-3">
                            <div className="space-y-1">
                                <h3 className="text-2xl font-semibold text-foreground">
                                    {item.title}
                                </h3>
                                <p className="max-w-xl text-md leading-relaxed text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>

                            {/* Tags: Displayed at the bottom right of the content area */}
                            {item.tags && (
                                <div className="flex flex-wrap items-center gap-2 pt-2">
                                    <div className="ml-auto flex gap-2">
                                        {item.tags.map((tag, tagIndex) => (
                                            <span 
                                                key={tagIndex} 
                                                className="border px-3 py-1 text-[10px] font-medium uppercase tracking-wider transition-colors rounded-lg text-muted-foreground hover:text-primary hover:border-primary"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}