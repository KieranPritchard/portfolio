"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { LinkButton } from "@/components/Buttons/LinkButton"
import { cn } from "@/lib/utils"
import type { ProjectSummary } from "@/types/project"
import { ArrowRight, Code, Shield, Zap } from "lucide-react"

/**
 * ProjectsGrid component: Renders a filterable grid of project cards.
 * Features smooth layout transitions and category-based sorting.
 */
export default function ProjectsGrid({ className, projects }: Readonly<{ className?: string; projects: ProjectSummary[] }>) {
    // Tracks the currently selected category for the filter tabs
    const [filter, setFilter] = useState("all")

    // Dynamically filters the project list based on the active tab state
    const filteredProjects =
        filter === "all" ? projects : projects.filter((project) => project.category === filter)

    return (
        <section className={cn("mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 overflow-hidden", className)}>
            {/* Header Section: Contains the animated title and filter controls */}
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Featured Projects</h2>
                    {/* Animated primary-colored underline decoration */}
                    <motion.div 
                        className="h-1 bg-primary rounded-full" 
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    />
                </motion.div>

                {/* Filter Tabs: Updates the 'filter' state on change to trigger grid re-renders */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setFilter}>
                        <TabsList className="grid w-full grid-cols-4 md:w-auto bg-muted/50 border border-border/50 p-1">
                            <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">All</TabsTrigger>
                            <TabsTrigger value="web" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">Web</TabsTrigger>
                            <TabsTrigger value="security" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">Security</TabsTrigger>
                            <TabsTrigger value="automation" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">Auto</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </motion.div>
            </div>

            {/* Project Grid: Uses Framer Motion 'layout' prop for smooth card repositioning */}
            <motion.div 
                layout
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
                {/* popLayout mode allows exiting cards to stay in their position until they finish fading */}
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.slug}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <Card
                                className="group flex h-full flex-col"
                            >
                                <CardHeader className="space-y-1">
                                    <div className="mb-2 flex items-center justify-between">
                                        {/* Dynamic Category Icon: Changes based on project metadata */}
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                            {project.category === "security" && <Shield className="h-5 w-5" />}
                                            {project.category === "web" && <Code className="h-5 w-5" />}
                                            {project.category === "automation" && <Zap className="h-5 w-5" />}
                                        </div>
                                        <Badge variant="outline" className="capitalize border-primary/20 bg-primary/5 text-primary text-[10px] font-bold">
                                            {project.category}
                                        </Badge>
                                    </div>
                                    <CardTitle className="line-clamp-2 text-xl transition-colors group-hover:text-primary">
                                        <Link
                                            href={`/portfolio/${project.slug}`}
                                            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                                        >
                                            {project.title}
                                        </Link>
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="flex-1 space-y-4">
                                    {/* Project Summary: Truncated to 3 lines for visual consistency */}
                                    <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                                        {project.description}
                                    </p>
                                    {/* Tech Tags: Small badges that change color on parent card hover */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="text-[10px] font-bold uppercase bg-muted/80 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <Link
                                        href={`/portfolio/${project.slug}`}
                                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2"
                                    >
                                        Read case study
                                        <ArrowRight className="h-4 w-4" aria-hidden />
                                    </Link>
                                </CardContent>

                                {/* Interactive Footer: Large buttons for direct access to code or documentation */}
                                <CardFooter className="gap-2 border-t border-border/50 bg-muted/10 p-4 flex-col">
                                    <LinkButton
                                        text="Case study"
                                        link={`/portfolio/${project.slug}`}
                                        kind="default"
                                        className="w-full h-9 text-xs font-bold"
                                    />
                                    <div className="flex w-full gap-2">
                                        <LinkButton
                                            text="Source"
                                            link={project.github}
                                            kind="outline"
                                            className="w-full h-9 text-xs border-primary/20 hover:bg-primary/5 transition-all"
                                        />
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    )
}