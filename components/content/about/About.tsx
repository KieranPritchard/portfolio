"use client"

import { motion } from "framer-motion"
import { DownloadButton } from "@/components/Buttons/DownloadButton"
import { LinkButton } from "@/components/Buttons/LinkButton"
import { cn } from "@/lib/utils"

export default function AboutMe({ className }: Readonly<{ className?: string }>) {
    // Parent container variant to coordinate children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    }

    // Slide-in effect for the text elements
    const textVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        },
    }

    return (
        <section 
            id="about"
            className={cn(
                "mx-auto w-full max-w-7xl px-4 py-20 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden",
                className
            )}
        >   
            {/* Animated Image Container */}
            <motion.div 
                className="relative aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-2xl bg-muted shadow-xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "circOut" }}
                whileHover={{ scale: 1.02 }}
            >
                <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Kieran Pritchard Profile" 
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
            </motion.div>

            {/* Content Container with staggered entrance */}
            <motion.div 
                className="flex flex-col gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Header Section */}
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

                {/* Biographical information */}
                <motion.div 
                    className="space-y-4 text-lg text-muted-foreground leading-relaxed"
                    variants={textVariants}
                >
                    <p>
                        Hello! I am Kieran, a passionate developer based in the UK. I specialize in 
                        building robust web applications using Next.js, TypeScript, and Tailwind CSS.
                    </p>
                    <p>
                        With a keen eye for design and a love for clean code, I strive to create 
                        digital experiences that are not only visually stunning but also highly 
                        performant and accessible to all users.
                    </p>
                </motion.div>

                {/* Buttons */}
                <motion.div 
                    className="flex flex-wrap items-center gap-4 pt-4" 
                    variants={textVariants}
                >
                    <LinkButton text="View My Work" link="/projects" />
                    <DownloadButton 
                        text="Download Resume" 
                        link="/resume.pdf" 
                        fileName="Kieran_Pritchard_CV.pdf" 
                        kind="outline" 
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}