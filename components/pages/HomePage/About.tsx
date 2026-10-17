"use client"

import { cn } from "@/lib/utils"
import { Variants } from "framer-motion"
import { motion } from "framer-motion"
import { LinkButton } from "@/components/buttons/LinkButton"
import { Card, CardContent } from "@/components/ui/card"
import { UserRound, MapPin, Clock3, AtSign } from "lucide-react"

/**
 * About Component
 * 
 * A biographical section for the home page featuring an animated profile image 
 * and a staggered text reveal. Highlights professional background and personal details.
 * 
 * @param className - Optional CSS class name for the section container.
 */
export default function About({ className }: Readonly<{ className?: string }>) {
    /**
     * Parent container variants: Orchestrates the staggered entrance of child elements.
     */
    const containerVariants : Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    }

    /**
     * Text reveal variants: Provides a subtle slide-in from the right with a fade.
     */
    const textVariants : Variants = {
        hidden: { opacity: 0, x: 20 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        },
    }

    /**
     * Slide-up animation variants for cards and smaller items.
     */
    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section
            id="about-home"
            className={cn(
                "mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden",
                className
            )}
        >
            {/* Profile Image: Animated with a circular expansion feel and scale effect on hover */}
            <motion.div
                className="relative aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-2xl bg-muted shadow-xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "circOut" }}
                whileHover={{ scale: 1.02 }}
            >
                <img 
                    src="kieran-pritchard.jpg" 
                    alt="Kieran Pritchard Profile" 
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
            </motion.div>

            {/* Content Column: Staggered entry for text elements and cards */}
            <motion.div 
                className="flex flex-col gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Section Title with Animated Underline */}
                <motion.div className="space-y-2" variants={textVariants}>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        About Me
                    </h2>
                    <motion.div 
                        className="h-1 bg-primary rounded-full" 
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    />
                </motion.div>

                {/* Short Biography */}
                <motion.div 
                    className="space-y-4 text-lg text-muted-foreground leading-relaxed"
                    variants={textVariants}
                >   
                    <p>
                        I am a high-achieving Digital Software Development student at Bournemouth & Poole College with a dedicated focus on ethical hacking and secure system architecture. 
                        I specialize in building robust, defense-oriented applications while utilizing my role as a student representative to drive collaborative excellence and positive change within the technical community.
                    </p>
                </motion.div>

                {/* Info Card: Displays personal details in a 2x2 grid */}
                <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
                    <Card className="h-full bg-muted/20 border-border/50">
                        <CardContent className="p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <motion.div className="space-y-1" whileHover={{ scale: 1.05 }}>
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <UserRound className="h-4 w-4 text-primary shrink-0" />
                                        <span className="font-semibold">Name: </span>Kieran
                                    </div>
                                </motion.div>
                                <motion.div className="space-y-1" whileHover={{ scale: 1.05 }}>
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <MapPin className="h-4 w-4 text-primary shrink-0"/>
                                        <span className="font-semibold">From: </span>Bournemouth, England
                                    </div>
                                </motion.div>
                                <motion.div className="space-y-1" whileHover={{ scale: 1.05 }}>
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <Clock3 className="h-4 w-4 text-primary shrink-0" />
                                        <span className="font-semibold">Age: </span>20
                                    </div>
                                </motion.div>
                                <motion.div className="space-y-1" whileHover={{ scale: 1.05 }}>
                                    <div className="flex items-center gap-2 text-sm font-medium break-all">
                                        <AtSign className="h-4 w-4 text-primary shrink-0"/>
                                        KieranPritchard06@gmail.com
                                    </div>
                                </motion.div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Link to full About page */}
                <motion.div 
                    className="flex flex-wrap items-center gap-4 pt-4" 
                    variants={textVariants}
                >
                    <LinkButton text="Learn more" link="/about" />
                </motion.div>
            </motion.div>
        </section>
    )
}