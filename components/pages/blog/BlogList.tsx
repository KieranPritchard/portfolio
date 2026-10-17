"use client"

import { Variants, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { BlogSummary } from "@/types/blog"
import { Code, Shield, Zap, BookOpen } from "lucide-react"
import Link from "next/link"

/**
 * BlogList Component
 * 
 * Renders a list of blog post summaries with images/icons, metadata, titles,
 * descriptions, and tags. Uses Framer Motion for staggered entrance animations.
 * 
 * @param className - Optional CSS class name for the container.
 * @param posts - An array of blog post summaries to display.
 */
export default function BlogList({ className, posts }: { className?: string; posts: BlogSummary[] }) {
    
    /**
     * Returns a Lucide icon based on the blog category.
     * 
     * @param category - The category of the blog post.
     * @returns A JSX element containing the category icon.
     */
    const getIcon = (category: string) => {
        switch (category.toLowerCase()) {
            case "security": return <Shield className="h-6 w-6 text-primary" />
            case "web": return <Code className="h-6 w-6 text-primary" />
            case "automation": return <Zap className="h-6 w-6 text-primary" />
            default: return <BookOpen className="h-6 w-6 text-primary" />
        }
    }

    /**
     * Staggered entrance variants for the list container.
     */
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    }

    /**
     * Animation variants for individual blog post items.
     */
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    }

    return (
        <motion.div 
            className={cn("space-y-12", className)}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {/* Section Header */}
            <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-widest text-primary">- Blog</p>
                <h2 className="text-4xl font-bold tracking-tight">Field notes.</h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            {/* Posts List: Iterates through provided post summaries */}
            <div className="space-y-8">
                {posts.map((post) => (
                    <motion.div key={post.slug} variants={itemVariants}>
                        <Link href={`/blog/${post.slug}`} className="group flex gap-6 md:gap-8 items-start">
                            {/* Visual Asset: Cover image or category icon */}
                            <div className="hidden sm:flex h-28 w-40 shrink-0 items-center justify-center rounded-lg bg-muted/50 border border-border group-hover:border-primary/50 transition-colors overflow-hidden">
                                {post.coverImage ? (
                                    <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500" />
                                ) : (
                                    getIcon(post.category)
                                )}
                            </div>

                            {/* Post Content Area */}
                            <div className="flex-1 space-y-2">
                                {/* Metadata: Date and Reading Time */}
                                <div className="flex items-center gap-3 text-[12px] font-mono text-muted-foreground">
                                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                    <span>·</span>
                                    <span>{post.readingTime}</span>
                                </div>

                                {/* Post Title: Highlights on hover */}
                                <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                                    {post.title}
                                </h3>

                                {/* Post Short Description: Clamped to 2 lines */}
                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                    {post.description}
                                </p>

                                {/* Post Tags: Displayed as monospaced hashtags */}
                                <div className="flex flex-wrap gap-3 pt-2">
                                    {post.tags?.map((tag) => (
                                        <span key={tag} className="text-xs font-mono text-muted-foreground/80 hover:text-primary transition-colors">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}