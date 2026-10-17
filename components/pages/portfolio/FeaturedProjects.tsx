"use client"

import { Variants } from "framer-motion"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ProjectSummary } from "@/types/project"
import { ArrowRight, Code, Shield, Zap, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

/**
 * FeaturedProjectsList Component
 * 
 * Renders a list of selected portfolio projects with cover image reveals on hover,
 * category icons, and links to full case studies and source code.
 * Uses Framer Motion for staggered card entrance.
 * 
 * @param className - Optional CSS class name for the section container.
 * @param projects - An array of project summaries to display.
 */
export default function FeaturedProjectsList({ className, projects }: { className?: string; projects: ProjectSummary[] }) {
    /**
     * Display only the first 4 projects as "featured".
     */
    const featured = projects.slice(0, 4)

    /**
     * Parent container variants: Triggers staggered entry for child cards.
     */
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    }

    /**
     * Card animation variants: Slide-up and fade-in.
     */
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    }

    return (
        <section className={cn("mx-auto w-full max-w-6xl px-4 py-16 md:px-6 overflow-hidden", className)}>
            {/* Section Header */}
            <motion.div 
                className="mb-12 space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Selected Projects</h2>
                {/* Decorative underline animation */}
                <motion.div 
                    className="h-1 bg-primary rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                />
            </motion.div>

            {/* List container that triggers staggered entrance for children */}
            <motion.div 
                className="flex flex-col gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {featured.map((project) => (
                <motion.div key={project.slug} variants={cardVariants}>
                    <Card className="group">
                        <CardContent className="p-0">
                            <div className="flex flex-col md:flex-row">
                            
                                {/* Visual Sidebar / Image Reveal Area */}
                                <div className="relative flex items-center justify-center bg-muted/30 p-8 md:w-44 md:border-r border-border/50 overflow-hidden">
                                    
                                    {/* Category Icon: Renders based on project category */}
                                    <motion.div 
                                    className="rounded-full bg-background p-4 shadow-sm text-primary z-0"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                    {project.category === "security" && <Shield className="h-8 w-8" />}
                                    {project.category === "web" && <Code className="h-8 w-8" />}
                                    {project.category === "automation" && <Zap className="h-8 w-8" />}
                                    </motion.div>

                                    {/* Hover Image Reveal: Shows project screenshot on card hover */}
                                    {project.coverImage && (
                                    <div className="absolute inset-0 z-10 opacity-0 scale-110 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100">
                                        <Image 
                                        src={project.coverImage} 
                                        alt={project.coverAlt || `Cover image for ${project.title}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 176px" 
                                        />
                                        {/* Decorative color overlay */}
                                        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                                    </div>
                                    )}
                                </div>

                                {/* Content Area: Metadata, Title, and Description */}
                                <div className="flex flex-1 flex-col p-6 md:p-10 min-w-0">
                                    {/* Metadata: Category badge and tag list */}
                                    <div className="mb-3 flex flex-wrap items-center gap-3">
                                    <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-widest text-primary border-primary/20 bg-primary/5">
                                        {project.category}
                                    </Badge>
                                    <div className="flex gap-2">
                                        {project.tags.slice(0, 3).map((tag) => (
                                        <span key={tag} className="text-xs text-muted-foreground/70 font-medium">
                                            #{tag}
                                        </span>
                                        ))}
                                    </div>
                                    </div>

                                    {/* Project Title Link */}
                                    <Link href={`/portfolio/${project.slug}`} className="group/title inline-block">
                                    <h3 className="text-2xl font-bold transition-colors group-hover/title:text-primary md:text-3xl">
                                        {project.title}
                                    </h3>
                                    </Link>

                                    {/* Project Summary: Clamped to 2 lines */}
                                    <p className="mt-4 text-base leading-relaxed text-muted-foreground line-clamp-2 md:max-w-2xl">
                                    {project.description}
                                    </p>

                                    {/* Action Links: Read more and Source code */}
                                    <div className="mt-8 flex flex-wrap items-center gap-6">
                                    <Link
                                        href={`/portfolio/${project.slug}`}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-foreground transition-all hover:gap-3 hover:text-primary"
                                    >
                                        Read full case study
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    
                                    <div className="hidden h-4 w-px bg-border md:block" />

                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        Source code
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
                ))}
            </motion.div>
        </section>
    )
}