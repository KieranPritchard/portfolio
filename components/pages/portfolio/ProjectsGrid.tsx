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
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { ProjectSummary } from "@/types/project"
import { ArrowRight, Code, Shield, Zap, LayoutGrid, Square, List, Search } from "lucide-react"

export default function ProjectsGrid({ className, projects }: Readonly<{ className?: string; projects: ProjectSummary[] }>) {
    const [filter, setFilter] = useState("all")
    const [search, setSearch] = useState("")
    const [viewMode, setViewMode] = useState<"grid" | "card" | "list">("grid")

    const filteredProjects = projects.filter((project) => {
        const matchesFilter = filter === "all" || project.category === filter
        const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || 
                              project.description.toLowerCase().includes(search.toLowerCase())
        return matchesFilter && matchesSearch
    })

    const categories = ["all", "security", "web", "automation"]

    return (
        <section className={cn("mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8", className)}>
            
            <div className="mb-12 space-y-6">
                <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-primary">
                        - Portfolio
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                        Everything I've built.
                    </h2>
                    {/* The specific blue line indicator */}
                    <div className="h-1 w-12 bg-primary rounded-full mt-2" />
                </div>

                {/* Top Control Bar Container */}
                <div className="rounded-xl border border-border bg-card p-4 space-y-4">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        {/* Filter Section */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mr-2">Filter</span>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={cn(
                                        "px-3 py-1 text-xs font-medium rounded-md transition-all",
                                        filter === cat ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground"
                                    )}
                                >
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)} {cat === "all" ? `(${projects.length})` : `(${projects.filter(p => p.category === cat).length})`}
                                </button>
                            ))}
                        </div>

                        {/* Search Section */}
                        <div className="relative flex items-center md:w-64">
                            <Search className="absolute left-2.5 h-3.5 w-3.5 text-muted-foreground" />
                            <input 
                                type="text"
                                placeholder="Search projects..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full rounded-md border border-border bg-transparent py-1.5 pl-9 pr-3 text-xs outline-none focus:border-primary transition-colors"
                            />
                        </div>
                    </div>

                    {/* View Toggle Bar */}
                    <div className="flex gap-2 border-t border-border pt-4">
                        <button onClick={() => setViewMode("grid")} className={cn("p-2 rounded-md hover:bg-muted transition-colors", viewMode === "grid" ? "text-primary bg-muted" : "text-muted-foreground")}><LayoutGrid className="h-4 w-4" /></button>
                        <button onClick={() => setViewMode("card")} className={cn("p-2 rounded-md hover:bg-muted transition-colors", viewMode === "card" ? "text-primary bg-muted" : "text-muted-foreground")}><Square className="h-4 w-4" /></button>
                        <button onClick={() => setViewMode("list")} className={cn("p-2 rounded-md hover:bg-muted transition-colors", viewMode === "list" ? "text-primary bg-muted" : "text-muted-foreground")}><List className="h-4 w-4" /></button>
                    </div>
                </div>
            </div>

            <AnimatePresence mode="popLayout">
                <motion.div 
                    layout
                    className={cn(
                        "grid gap-6",
                        viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
                    )}
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            {viewMode === "grid" && (
                                <Card className="group h-full flex flex-col border-border/50 hover:border-primary/50 transition-all">
                                    <CardHeader>
                                        <div className="p-2 w-fit rounded-lg bg-muted border border-border group-hover:border-primary/50 transition-colors">
                                            {project.category === "security" && <Shield className="h-5 w-5 text-primary" />}
                                            {project.category === "web" && <Code className="h-5 w-5 text-primary" />}
                                            {project.category === "automation" && <Zap className="h-5 w-5 text-primary" />}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{project.description}</p>
                                        <div className="text-xs font-mono text-muted-foreground">
                                            {project.date} • {project.category}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="pt-4 border-t border-border/50">
                                        <a href={project.github} className="text-xs font-bold hover:underline">Source code</a>
                                    </CardFooter>
                                </Card>
                            )}

                            {viewMode === "card" && (
                                <div className="group flex flex-col md:flex-row gap-6 p-6 rounded-lg border border-border bg-card">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-muted border border-border">
                                        {project.category === "security" && <Shield className="h-6 w-6 text-primary" />}
                                        {project.category === "web" && <Code className="h-6 w-6 text-primary" />}
                                        {project.category === "automation" && <Zap className="h-6 w-6 text-primary" />}
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-center justify-between">
                                            <Badge variant="outline" className="text-[10px] uppercase tracking-wider">{project.category}</Badge>
                                            <span className="text-xs font-mono text-muted-foreground">{project.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold">{project.title}</h3>
                                        <p className="text-sm text-muted-foreground">{project.description}</p>
                                        <Link href={`/portfolio/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
                                            Read full case study <ArrowRight className="h-3 w-3" />
                                        </Link>
                                    </div>
                                </div>
                            )}

                            {viewMode === "list" && (
                                <div className="flex items-center justify-between py-6 border-b border-border group hover:bg-muted/30 px-2 transition-colors">
                                    <div className="flex items-center gap-8">
                                        <span className="font-mono text-muted-foreground w-8">0{index + 1}</span>
                                        <div>
                                            <h3 className="font-bold text-lg">{project.title}</h3>
                                            <p className="text-sm text-muted-foreground hidden sm:block">{project.description.substring(0, 80)}...</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-8 text-right">
                                        <span className="text-xs font-mono uppercase text-muted-foreground w-20">{project.category}</span>
                                        <span className="text-xs font-mono text-muted-foreground w-24">{project.date}</span>
                                        <Link href={`/portfolio/${project.slug}`} className="text-primary hover:text-primary/80">
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </section>
    )
}