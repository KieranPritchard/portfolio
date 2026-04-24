"use client"

import { Variants, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ProjectSummary } from "@/types/project"
import { Code, Shield, Zap, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function ThingsIBuilt({ className, projects }: { className?: string; projects: ProjectSummary[] }) {
    // Takes a slice of the featured projects
    const featured = projects.slice(0, 3)

    // Stores the container variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    // Stores the card variants
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
            {/* Stores the header */}
            <motion.div
                className="mb-12 space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Heading  */}
                <p className="text-xs text-primary font-mono">
                    - SELECTED WORK
                </p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    Things I've built.
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

            {/* Displays the cards for the header */}
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
                            {/* Icon container moved outside CardContent for full-width header look */}
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
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed mb-6 grow line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Footer Metadata */}
                                <div className="mt-auto flex items-center justify-between text-xs text-zinc-500">
                                    <span>{new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                                    <Link 
                                        href={`/portfolio/${project.slug}`}
                                        target="_blank"
                                        className="flex items-center gap-1 hover:text-white transition-colors"
                                    >
                                        <ExternalLink className="h-3 w-3" />
                                        Link
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