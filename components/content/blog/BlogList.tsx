// components/content/blog/BlogList.tsx
"use client"

import { Variants, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { BlogSummary } from "@/types/blog"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function BlogList({ className, posts }: { className?: string; posts: BlogSummary[] }) {
    // Defines stagger animation for the container list
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    }

    // Defines entry animation for individual blog cards
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    }

    return (
        <motion.div 
            className={cn("flex flex-col gap-6", className)}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {posts.map((post) => (
                // Individual motion wrapper for animation coordination
                <motion.div key={post.slug} variants={cardVariants}>
                    <Card className="group overflow-hidden border-border/50 bg-card/40 transition-all duration-500 hover:border-primary/40 hover:bg-card hover:shadow-2xl hover:shadow-primary/5 md:py-0">
                        <CardContent className="p-0">
                            <div className="flex flex-col md:flex-row">
                                {/* Desktop-only sidebar image layout */}
                                <div className="relative hidden shrink-0 md:block md:w-[250px] md:h-[250px] bg-muted/30 border-r border-border/50 overflow-hidden">
                                    {post.coverImage ? (
                                        <img
                                            src={post.coverImage}
                                            alt={post.coverAlt || post.title}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        // Fallback state if no image is provided
                                        <div className="flex h-full w-full items-center justify-center bg-muted/50">
                                            <span className="text-sm text-muted-foreground/30">No Image</span>
                                        </div>
                                    )}
                                </div>

                                {/* Main Content Column */}
                                <div className="flex flex-1 flex-col p-6 md:p-8">
                                    <div className="mb-3 flex flex-wrap items-center gap-3">
                                        <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-widest text-primary border-primary/20 bg-primary/5">
                                            {post.category}
                                        </Badge>
                                        <div className="flex items-center text-xs text-muted-foreground gap-1">
                                            <Calendar className="h-3 w-3" />
                                            {/* Standardized date formatting */}
                                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                        </div>
                                    </div>
                                    <Link href={`/blog/${post.slug}`} className="group/title inline-block">
                                        <h3 className="text-xl font-bold transition-colors group-hover/title:text-primary md:text-2xl">{post.title}</h3>
                                    </Link>
                                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">{post.description}</p>
                                    <div className="mt-6 flex items-center">
                                        <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-foreground transition-all hover:gap-3 hover:text-primary">
                                            Read article <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </motion.div>
    )
}