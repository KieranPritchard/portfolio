"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ProjectSummary } from "@/types/project"
import { Code, Shield, Zap, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import ContentContainer from "../ContentContainer"
import {
    containerVariants,
    homeProjectCardVariants,
} from "@/lib/animations"
import Image from "next/image"
import { AspectRatio } from "radix-ui"

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

    return (
        <ContentContainer>
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
                        <motion.div key={project.slug} variants={homeProjectCardVariants}>
                            <Card className="group relative flex flex-col overflow-hidden bg-muted/20 border-border/50 transition-all">
                                {/* Image Section: Project thumbnail, falls back to the category icon */}
                                <AspectRatio.Root ratio={16 / 9} className="relative overflow-hidden border-b border-border/50 bg-background/50">
                                    {project.coverImage ? (
                                        <Image
                                            src={project.coverImage}
                                            alt={project.coverAlt ?? project.title}
                                            fill
                                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                            className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center">
                                            <div className="inline-flex w-12 h-12 items-center justify-center rounded-lg bg-background/50 text-primary">
                                                {project.category === "security" && <Shield className="h-6 w-6" />}
                                                {project.category === "web" && <Code className="h-6 w-6" />}
                                                {project.category === "automation" && <Zap className="h-6 w-6" />}
                                            </div>
                                        </div>
                                    )}
                                </AspectRatio.Root>


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
                                            href={`/projects/${project.slug}`}
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
        </ContentContainer>
    )
}