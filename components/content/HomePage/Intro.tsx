"use client"

import { motion } from "framer-motion"
import { DownloadButton } from "@/components/Buttons/DownloadButton"
import { LinkButton } from "@/components/Buttons/LinkButton"
import { cn } from "@/lib/utils"

export default function Intro({ className }: Readonly<{ className?: string }>) {
    // Staggered entrance variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5, ease: "easeOut" } 
        },
    }

    return (
        /* Using flex-1 and w-full ensures the component fills the available 
           space left by the SidebarInset or Sidebar provider.
        */
        <section 
            className={cn(
                "relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden px-4 py-12 md:px-8 lg:px-12",
                className
            )}
        >   
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
                
                {/* Text container: min-w-0 prevents grid blowout during sidebar transitions */}
                <motion.div 
                    className="flex flex-col gap-6 order-2 md:order-1 min-w-0"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className="space-y-3" variants={itemVariants}>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                            Kieran Pritchard
                        </h1>
                        {/* Match sidebar accent line */}
                        <motion.div 
                            className="h-1.5 w-20 bg-primary rounded-full" 
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        />
                    </motion.div>

                    <motion.p 
                        className="max-w-[600px] text-lg leading-relaxed text-muted-foreground md:text-xl"
                        variants={itemVariants}
                    >
                        I am a developer focused on building functional, beautiful interfaces. 
                        I specialize in creating seamless user experiences with modern web technologies.
                    </motion.p>

                    <motion.div 
                        className="flex flex-wrap items-center gap-4" 
                        variants={itemVariants}
                    >
                        <LinkButton text="Learn More" link="/portfolio" />
                        <DownloadButton 
                            text="Download C.V" 
                            link="/resume.pdf" 
                            fileName="Kieran_Pritchard_CV.pdf" 
                            kind="secondary" 
                        />
                    </motion.div>
                </motion.div>

                {/* Image container: responsive aspect ratio and rounded-full styling */}
                <motion.div 
                    className="relative flex justify-center order-1 md:order-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                >
                    <div className="relative aspect-square w-full max-w-[400px] sm:max-w-[500px]">
                        <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                            alt="Kieran Pritchard" 
                            className="h-full w-full rounded-full object-cover ring-8 ring-muted/20 transition-all duration-500 hover:ring-primary/20"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    )
}