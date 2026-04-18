"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Flame, TrendingUp, Sparkles, Hash } from "lucide-react"

/** * Defines the structure for each trending topic item. 
 */
interface Topic {
    name: string
    icon?: React.ReactNode
    count?: string
}

/**
 * TrendingTopics component: Renders a section highlighting key trends
 * with staggered entry animations and a glass-morphism style background.
 */
export default function TrendingTopics({ 
    className, 
    topics = [
        { name: "Next.js", icon: <Hash />, count: "1.2k" },
        { name: "Framer Motion", icon: <Sparkles />, count: "840" },
        { name: "TypeScript", icon: <TrendingUp />, count: "2.1k" },
        { name: "Security", icon: <Flame />, count: "950" },
    ] 
}: Readonly<{ className?: string; topics?: Topic[] }>) {
    
    return (
        <section className={cn("mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8", className)}>
            {/* Section Header */}
            <div className="mb-12 space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Trending Topics
                </h2>
                {/* Decorative underline animation */}
                <motion.div 
                    className="h-1 bg-primary rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                />
            </div>

            {/* Grid Container with backdrop */}
            <div className="relative p-6">
                {/* Rounded background layer behind the grid */}
                <div className="absolute inset-0 bg-muted/30 rounded-3xl -z-10 border border-border/50" />
                
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
                            {/* Card with hover states and group-hover logic */}
                            <Card className="group flex h-full flex-col items-center justify-center border-border/50 bg-card/60 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 cursor-pointer">
                                {/* Icon container with transition effects */}
                                <div className="mb-1 p-6 rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                    {topic.icon || <Hash className="h-6 w-6" />}
                                </div>
                                <div className="flex flex-col items-center text-xl text-center">
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