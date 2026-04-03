"use client"

import { motion } from "framer-motion"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Rocket, BookOpen, Coffee, Calendar } from "lucide-react"

export default function NowSection({ className }: Readonly<{ className?: string }>) {
    const lastUpdated = "April 2026"

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5, ease: "easeOut" } 
        }
    }

    return (
        <section className={cn("mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 overflow-hidden", className)}>
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                
                {/* Header Container */}
                <motion.div 
                    className="space-y-4 col-span-1 md:col-span-2 lg:col-span-3 mb-4"
                    variants={cardVariants}
                >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                                What I&apos;m Doing Now
                            </h2>
                            <motion.div 
                                className="h-1 bg-primary rounded-full" 
                                initial={{ width: 0 }}
                                whileInView={{ width: 80 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            />
                        </div>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <Badge variant="outline" className="w-fit flex items-center gap-2 py-1.5 px-4 text-sm font-medium border-primary/20 bg-primary/5 relative">
                                <span className="absolute -left-1 -top-1 flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                </span>
                                <Calendar className="h-4 w-4 text-primary" />
                                Last Updated: {lastUpdated}
                            </Badge>
                        </motion.div>
                    </div>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        This is a &quot;now&quot; page—a quick snapshot of my current projects, 
                        learning goals, and life focus.
                    </p>
                </motion.div>

                {/* Focus: Professional/Coding */}
                <motion.div variants={cardVariants} whileHover={{ y: -5 }}>
                    <Card className="h-full flex flex-col transition-colors hover:border-primary/50 hover:bg-muted/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl group">
                                <Rocket className="h-5 w-5 text-primary group-hover:animate-bounce" />
                                Current Projects
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground leading-relaxed">
                            I&apos;m currently deep-diving into Golang and refining my 
                            automation workflows using Python. I&apos;m also iterating on 
                            this portfolio to improve its performance and accessibility.
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Focus: Learning */}
                <motion.div variants={cardVariants} whileHover={{ y: -5 }}>
                    <Card className="h-full flex flex-col transition-colors hover:border-primary/50 hover:bg-muted/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl group">
                                <BookOpen className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform" />
                                Learning & Growth
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground leading-relaxed">
                            Studying for exams and practical assessments for my college course. On the side, I&apos;m exploring 
                            Python to create automation scripts for my ethical hacking hobby.
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Focus: Personal/Lifestyle */}
                <motion.div variants={cardVariants} whileHover={{ y: -5 }}>
                    <Card className="h-full flex flex-col transition-colors hover:border-primary/50 hover:bg-muted/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl group">
                                <Coffee className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                                Life & Balance
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground leading-relaxed">
                            Making more time for touching grass on the weekends and 
                            working through my backlog of novels. Current read: Angels & Demons.
                        </CardContent>
                    </Card>
                </motion.div>
            </motion.div>
        </section>
    )
}