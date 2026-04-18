"use client"

import { cn } from "@/lib/utils"
import {motion} from "framer-motion"
import { Variants } from "framer-motion"

export default function AboutMe({ className }: Readonly<{ className?: string }>) {
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

    
    return (
        <>
            <section
                id="blog-about"
                className={cn(
                    "mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden",
                    className
                )}
            >
                {/* Content Column: Bound by containerVariants to control the flow of sub-elements */}
                <motion.div
                    className="flex flex-col gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Section Title: Includes the signature primary-colored animated divider */}
                    <motion.div className="space-y-2" variants={textVariants}>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                            Hello, I'm Kieran
                        </h2>
                        <motion.div 
                            className="h-1 bg-primary rounded-full" 
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        />

                        {/* Biography: Structured as distinct paragraphs for readability */}
                        <motion.div 
                            className="space-y-4 text-lg text-muted-foreground leading-relaxed"
                            variants={textVariants}
                        >   
                            <p>
                                I am a high-achieving Digital Software Development student at Bournemouth & Poole College with a dedicated focus on ethical hacking and secure system architecture. 
                                I specialize in building robust, defense-oriented applications while utilizing my role as a student representative to drive collaborative excellence and positive change within the technical community.
                            </p>
                            <p>
                                With a strong foundation in modern programming and proactive problem-solving, I strive to create digital experiences that are not only high-performing but also fundamentally secure against emerging threats. 
                                I am committed to applying my organizational skills and technical expertise to gain hands-on industry experience and build a resilient, long-term career in cybersecurity.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Image of me in relaxed environement */}
                    <motion.div
                        className="relative aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-2xl bg-muted shadow-2xl"
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
                </motion.div>
            </section>
        </>
    )
}