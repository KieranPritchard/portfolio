"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Flame, TrendingUp, Sparkles, Hash } from "lucide-react"

/**
 * Topic Interface
 * 
 * Defines the structure for each trending topic item.
 */
interface Topic {
    /** The display name of the topic. */
    name: string
    /** Optional icon element to display above the topic name. */
    icon?: React.ReactNode
    /** Optional count or additional metadata string. */
    count?: string
}

/**
 * TrendingTopics Component
 * 
 * Renders a section highlighting key blog themes or categories in a grid of cards.
 * Features staggered entry animations and glass-morphism style background layers.
 * 
 * @param className - Optional CSS class name for the section container.
 * @param topics - An array of Topic objects to display.
 */
export default function TrendingTopics({ 
    className, 
    topics = [
        { name: "Reviews", icon: <Hash />},
        { name: "Tips & Tricks", icon: <Sparkles />,},
        { name: "Dev Diarys", icon: <TrendingUp />,},
        { name: "Ethical Hacking", icon: <Flame />},
    ] 
}: Readonly<{ className?: string; topics?: Topic[] }>) {
    
    return (
        <section className={cn("mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8", className)}>
            {/* Section Header */}
            <div className="mb-12 space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Trending Topics
                </h2>
                <motion.div 
                    className="h-1 bg-primary rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                />
            </div>

            {/* Topics Grid: Contained within a decorative background box */}
            <div className="relative p-6">
                {/* Visual Backdrop Layer */}
                <div className="absolute inset-0 bg-muted/30 rounded-3xl border border-border/50 pointer-events-none" />
                
                <motion.div 
                    className="grid grid-cols-2 gap-4 md:grid-cols-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    {topics.map((topic, index) => (
                        <motion.div
                            key={topic.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                            {/* Topic Card: Individual clickable or display card */}
                            <Card className="group flex h-full flex-col items-center justify-center p-6 cursor-pointer bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                                {/* Icon Container: Inverts colors on hover */}
                                <div className="mb-1 p-6 rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                    {topic.icon || <Hash className="h-6 w-6" />}
                                </div>
                                <div className="flex flex-col items-center text-xl text-center pt-2">
                                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                        {topic.name}
                                    </span>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}