"use client"

import { cn } from "@/lib/utils"
import { Variants } from "framer-motion"
import { motion } from "framer-motion"
import { LinkButton } from "@/components/Buttons/LinkButton"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { UserRound, MapPin, Clock3, AtSign } from "lucide-react"

/**
 * About Component: A biographical section featuring an animated profile image 
 * and a staggered text reveal. Highlights professional background and core mission.
 */
export default function About({ className }: Readonly<{ className?: string }>) {
    // Parent container variant: Orchestrates the staggered entrance of all child text elements
    const containerVariants : Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Time delay between each child element's animation
                delayChildren: 0.1,    // Initial wait before the first child begins
            },
        },
    }

    // Text reveal variant: Provides a subtle slide-in from the right with a smooth fade
    const textVariants : Variants = {
        hidden: { opacity: 0, x: 20 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        },
    }

    // Standard slide-up animation for card containers and headers
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
            {/* Profile Image: Animated with a circular expansion feel (circOut) and a scale effect on hover */}
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
            {/* Content Column: Bound by containerVariants to control the flow of sub-elements */}
            <motion.div 
                className="flex flex-col gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Section Title: Includes the signature primary-colored animated divider */}
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

                {/* Biography: Structured as distinct paragraphs for readability */}
                <motion.div 
                    className="space-y-4 text-lg text-muted-foreground leading-relaxed"
                    variants={textVariants}
                >   
                    <p>
                        I am a high-achieving Digital Software Development student at Bournemouth & Poole College with a dedicated focus on ethical hacking and secure system architecture. 
                        I specialize in building robust, defense-oriented applications while utilizing my role as a student representative to drive collaborative excellence and positive change within the technical community.
                    </p>
                </motion.div>

                {/* Seperator to separate plans */}
                <Separator/>

                <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
                    <Card className="h-full flex flex-col transition-colors hover:border-primary/50 hover:bg-muted/30">
                        {/* 2x2 grid to provide information about me */}
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <motion.div className="space-y-1" whileHover={{ scale: 1.05 }}>
                                    {/* Name section part */}
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <UserRound className="h-4 w-4 text-primary" />
                                        <span className="font-semibold">Name: </span>Kieran
                                    </div>
                                </motion.div>
                                <motion.div className="space-y-1" whileHover={{ scale: 1.05 }}>
                                    {/* Location section part */}
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <MapPin className="h-4 w-4 text-primary"/>
                                        <span className="font-semibold">From: </span>Bournemouth, England
                                    </div>
                                </motion.div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                                <motion.div className="space-y-1" whileHover={{ scale: 1.05 }}>
                                    {/* Age section part */}
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <Clock3 className="h-4 w-4 text-primary" />
                                        <span className="font-semibold">Age: </span>20
                                    </div>
                                </motion.div>
                                <motion.div className="space-y-1" whileHover={{ scale: 1.05 }}>
                                    {/* Email section part */}
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <AtSign className="h-4 w-4 text-primary"/>
                                        KieranPritchard06@gmail.com
                                    </div>
                                </motion.div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Action Buttons: Grouped together for CV access and portfolio navigation */}
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