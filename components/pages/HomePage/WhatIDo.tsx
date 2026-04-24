"use client"

import { motion } from "framer-motion"
import { Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import { Lock, Code, HandHelping } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

/**
 * WhatIDo component: Displays cards which provide information about what i do
*/
export default function WhatIDo({ className }: Readonly<{ className?: string }>) {
    // Stores data relating to professional services and expertise
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

    // Animation variants for the grid items: StaggerChildren set to 0.1 for a faster cascade
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    // Individual card animation: Defines the entry point and duration
        const cardVariants: Variants = {
            hidden: { opacity: 0, y: 20 },
            visible: { 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.5, ease: "easeOut" } 
            },
        }

    return(
        // Returns the what i do section
        <section
            id="what-i-do"
            className={cn(
                "mx-auto w-full max-w-7xl px-4 py-20 md:px-6 lg:px-8 overflow-hidden",
                className
            )}
        >
            {/* Header: Title section with sliding entrance and expanding underline */}
            <motion.div
                className="mb-12 space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Heading  */}
                <p className="text-xs text-primary font-mono">
                    - WHAT I DO
                </p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    Three Disaplines
                </h2>
                {/* Animated divider */}
                <motion.div 
                    className="h-1 bg-primary rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                />
            </motion.div>

            {/* Certification Grid: Dynamically generates cards with framer-motion stagger logic */}
            <motion.div 
                className="flex flex-col gap-6 w-full mx-auto" // Added width constraints and margin auto
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {items.map((item, index) => (
                    <motion.div 
                        key={index} 
                        variants={cardVariants}
                        className="group relative flex items-center gap-6 bg-muted/20 rounded-xl border p-6 transition-all duration-300 hover:border-primary" // Added items-center
                    >
                        {/* Numbering */}
                        <div className="absolute top-6 right-6 font-mono text-sm">
                            0{index + 1}
                        </div>

                        {/* Icon Box */}
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg text-primary bg-primary/10">
                            <item.icon className="h-8 w-8" />
                        </div>

                        {/* Content Area */}
                        <div className="flex flex-1 flex-col gap-3">
                            <div className="space-y-1">
                                <h3 className="text-2xl font-semibold text-foreground">
                                    {item.title}
                                </h3>
                                <p className="max-w-xl text-md leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            {/* Tags container */}
                            {item.tags && (
                                <div className="flex flex-wrap items-center gap-2 pt-2">
                                    <div className="ml-auto flex gap-2">
                                        {item.tags.map((tag, tagIndex) => (
                                            <span 
                                                key={tagIndex} 
                                                className="border px-3 py-1 text-[10px] font-medium uppercase tracking-wider transition-colors rounded-lg"
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