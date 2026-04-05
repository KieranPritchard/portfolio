"use client"

import { Variants } from "framer-motion"
import { motion } from "framer-motion"
import { DownloadButton } from "@/components/Buttons/DownloadButton"
import { LinkButton } from "@/components/Buttons/LinkButton"
import { cn } from "@/lib/utils"

export default function AboutMe({ className }: Readonly<{ className?: string }>) {
    // Parent container variant to coordinate children
    const containerVariants : Variants = {
        hidden: { opacity: 0 }, // Sets the hidden opacity to none
        visible: {
            opacity: 1, // When visible to opacity to zero
            // Staggers the children components
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    }

    // Slide-in effect for the text elements
    const textVariants : Variants = {
        hidden: { opacity: 0, x: 20 }, // Sets the hidden opacity to none
        visible: { 
            opacity: 1, // Sets the opacity to visible
            x: 0, // Sets the x value to zero
            transition: { duration: 0.6, ease: "easeOut" } // Sets up the ease out animation
        },
    }

    return (
        /* Contains the about section */
        <section 
            id="about"
            className={cn(
                "mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden",
                className
            )}
        >   
            {/* Animated Image Container */}
            <motion.div 
                className="relative aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-2xl bg-muted shadow-xl"
                initial={{ opacity: 0, x: -50 /* Sets up the inital value */}}
                whileInView={{ opacity: 1, x: 0 /* Sets up the values for while in view */}}
                viewport={{ once: true /* Sets up the view port values */}}
                transition={{ duration: 0.8, ease: "circOut" /* Sets up the transition method */}}
                whileHover={{ scale: 1.02 /* Changes the scale on hover  */}}
            >
                {/* Displays the image */}
                <img 
                    src="kieran-pritchard.jpg" 
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
                    {/* Displays the header  */}
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        About Me
                    </h2>
                    {/* Displays the divider */}
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
                    {/* Displays the paragraphs */}
                    <p>
                        I am a high-achieving Digital Software Development student at Bournemouth & Poole College with a dedicated focus on ethical hacking and secure system architecture. 
                        I specialize in building robust, defense-oriented applications while utilising my role as a student representative to drive collaborative excellence and positive change within the technical community.
                    </p>
                    <p>
                        With a strong foundation in modern programming and proactive problem-solving, I strive to create digital experiences that are not only high-performing but also fundamentally secure against emerging threats. 
                        I am committed to applying my organisational skills and technical expertise to gain hands-on industry experience and build a resilient, long-term career in cybersecurity.
                    </p>
                </motion.div>

                {/* Buttons */}
                <motion.div 
                    className="flex flex-wrap items-center gap-4 pt-4" 
                    variants={textVariants}
                >
                    {/* Link button for projects */}
                    <LinkButton text="View My Work" link="/portfolio" />
                    {/* Download button */}
                    <DownloadButton 
                        text="Download Resume" 
                        link="/kieran_pritchard_cv.pdf" 
                        fileName="kieran_pritchard_cv.pdf" 
                        kind="outline" 
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}