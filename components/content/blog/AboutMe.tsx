"use client"

import { Variants } from "framer-motion"
import { motion } from "framer-motion"
import { DownloadButton } from "@/components/Buttons/DownloadButton"
import { LinkButton } from "@/components/Buttons/LinkButton"
import { cn } from "@/lib/utils"

/**
 * AboutMe Component: A biographical section featuring an animated profile image 
 * and a staggered text reveal. Highlights professional background and core mission.
 */
export default function AboutMe({ className }: Readonly<{ className?: string }>) {
    // Parent container variant: Orchestrates the staggered entrance of all child text elements
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

    // Text reveal variant: Provides a subtle slide-in from the left with a smooth fade
    const textVariants : Variants = {
        hidden: { opacity: 0, x: -20 },
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
                "mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden",
                className
            )}
        >   
            {/* Content Column: Placed first to appear on the left */}
            <motion.div 
                className="flex flex-col gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
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

            {/* Profile Image: Placed second to appear on the right */}
            <motion.div 
                className="relative aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-2xl bg-muted shadow-xl"
                initial={{ opacity: 0, x: 50 }}
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
        </section>
    )
}