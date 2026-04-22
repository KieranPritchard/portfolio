"use client"

import { Variants } from "framer-motion"
import { motion } from "framer-motion"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Target, Fingerprint, Zap } from "lucide-react"

/**
 * MissionValues component: Communicates the core philosophy and development 
 * principles (Performance, Security, User Experience) behind the portfolio.
 */
export default function MissionValues({ className }: Readonly<{ className?: string }>) {
    // Defines the core mission points with associated Lucide icons
    const values = [
        {
            title: "Performance First",
            description: "I believe applications should be fast by default. I prioritize clean, efficient code and optimized assets to ensure a seamless user experience.",
            icon: Zap,
        },
        {
            title: "Security Mindset",
            description: "With a background in ethical hacking, I don't just build features. I build secure systems, as well as bringing the skillset that helps to protect user data.",
            icon: Fingerprint,
        },
        {
            title: "User-Centric Design",
            description: "Technology should solve human problems. I focus on creating intuitive interfaces that make complex tasks feel simple and accessible.",
            icon: Target,
        },
    ]

    // Animation variants for the grid: Staggers the appearance of child cards as they enter view
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    // Individual card entrance: Uses spring physics for a snappy, high-quality feel
    const cardVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 15 
            } 
        },
    }

    return (
        <section className={cn("mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 overflow-hidden", className)}>
            {/* Section Header: Features a slide-in title and an expanding underline animation */}
            <motion.div 
                className="space-y-2 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    The Why
                </h2>
                <motion.div 
                    className="h-1 bg-primary rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                />
            </motion.div>

            {/* Value Cards Grid: Maps through the values array to render interactive cards */}
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {values.map((value) => (
                    <motion.div
                        key={value.title}
                        variants={cardVariants}
                        whileHover={{ y: -5 }} // Subtle lift on hover for better interactivity
                    >
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl group">
                                    {/* Icon Animation: Rotates and scales when the user hovers over the icon specifically */}
                                    <motion.div
                                        whileHover={{ rotate: 15, scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <value.icon className="h-6 w-6 text-primary" />
                                    </motion.div>
                                    {value.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {value.description}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}