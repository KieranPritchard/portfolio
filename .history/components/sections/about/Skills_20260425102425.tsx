"use client"

import { Variants, motion } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * Skill categories and individual skill metrics.
 * Values represent estimated proficiency percentages for visual representation.
 */
const skillCategories = [
    {
        title: "Languages",
        skills: [
            { name: "Python", value: 88 },
            { name: "JavaScript / TS", value: 82 },
            { name: "Go", value: 62 },
            { name: "HTML / CSS", value: 90 },
        ]
    },
    {
        title: "Frameworks",
        skills: [
            { name: "React", value: 78 },
            { name: "Tailwind CSS", value: 86 },
            { name: "Node.js", value: 70 },
        ]
    },
    {
        title: "Security",
        skills: [
            { name: "Kali Linux", value: 75 },
            { name: "Wireshark", value: 68 },
            { name: "Nmap", value: 72 },
            { name: "Cryptography", value: 65 },
        ]
    },
    {
        title: "Tools",
        skills: [
            { name: "Git / GitHub", value: 85 },
        ]
    }
]

/**
 * Skills Component
 * 
 * Renders a set of progress bars grouped by skill categories.
 * Features staggered entrance for categories and animated fill for progress bars.
 * 
 * @param className - Optional CSS class name for the section container.
 */
export default function Skills({ className }: Readonly<{ className?: string }>) {
    /**
     * Parent container variants for orchestrating staggered category animations.
     */
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    }

    /**
     * Animation variants for individual skill category blocks.
     */
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.4, ease: "easeOut" } 
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
                    - Skills
                </p>
                <h2 className="text-4xl font-bold tracking-tight text-foreground">
                    Calibration.
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full mt-4" />
            </motion.div>

            {/* Skills Content: Grid of categories with animated progress bars */}
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {skillCategories.map((category) => (
                    <motion.div key={category.title} className="space-y-6" variants={itemVariants}>
                        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                            {category.title}
                        </h3>
                        <div className="space-y-6">
                            {category.skills.map((skill) => (
                                <div key={skill.name} className="space-y-2">
                                    {/* Skill Name and Percentage Label */}
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="font-medium text-foreground">{skill.name}</span>
                                        <span className="font-mono text-muted-foreground">{skill.value}%</span>
                                    </div>
                                    {/* Progress Bar Track */}
                                    <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                                        {/* Animated Progress Bar Fill */}
                                        <motion.div 
                                            className="h-full bg-primary"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.value}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}