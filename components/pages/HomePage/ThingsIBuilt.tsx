"use client"

import { Variants, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ProjectSummary } from "@/types/project"
import { Code, Shield, Zap, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

/**
 * ThingsIBuilt Component
 * 
 * Displays a featured selection of projects (the first 3) in a grid of cards.
 * Each card shows the project category icon, title, description, and a link.
 * 
 * @param className - Optional CSS class name for the section container.
 * @param projects - An array of project summaries to choose from.
 */
export default function ThingsIBuilt({ className, projects }: { className?: string; projects: ProjectSummary[] }) {
    // Select the first 3 projects to feature on the home page
    const featured = projects.slice(0, 3)

    /**
     * Staggered entrance variants for the project grid.
     */
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    /**
     * Animation variants for individual project cards.
     */
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5, ease: "easeOut" } 
        }
    }

    return (
        <section className={cn("mx-auto w-full max-w-6xl px-4 py-16 md:px-6", className)}>
            {/* Section Header */}
            <motion.div
                className="mb-12 space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-xs text-primary font-mono">
                    - SELECTED WORK
                </p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    Things I&apos;ve built.
                </h2>
                <motion.div 
                    className="h-1 bg-primary rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                />
            </motion.div>

            {/* Project Grid */}
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {featured.map((project) => (
                    <motion.div key={project.slug} variants={cardVariants}>
                        <Card className="group relative flex flex-col overflow-hidden bg-muted/20 border-border/50 transition-all">
                            {/* Icon Section: Displays an icon based on project category */}
                            <div className="flex justify-center items-center py-10 border-b border-border/50">
                                <div className="inline-flex w-12 h-12 items-center justify-center rounded-lg bg-background/50 text-primary">
                                    {project.category === "security" && <Shield className="h-6 w-6" />}
                                    {project.category === "web" && <Code className="h-6 w-6" />}
                                    {project.category === "automation" && <Zap className="h-6 w-6" />}
                                </div>
                            </div>

                            <CardContent className="p-6 flex flex-col grow">
                                {/* Category Badge */}
                                <div className="mb-3">
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-primary">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Project Title & Short Description */}
                                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-6 grow line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Project Metadata Footer: Date and external link */}
                                <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground">
                                    <span>{new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                                    <Link 
                                        href={`/portfolio/${project.slug}`}
                                        target="_blank"
                                        className="flex items-center gap-1 hover:text-foreground transition-colors"
                                    >
                                        <ExternalLink className="h-3 w-3" />
                                        View Details
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}