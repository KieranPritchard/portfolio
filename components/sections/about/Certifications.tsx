"use client"

import { Variants, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ExternalLink, Award } from "lucide-react"
import { getAllCerts } from "@/lib/certifications"

/**
 * Certifications Component
 * 
 * Displays a gallery of earned credentials and certifications in a grid.
 * Each certification includes the title, issuer, date, and a verification link.
 * 
 * @param className - Optional CSS class name for the section container.
 */
export default async function Certifications({ className }: Readonly<{ className?: string }>) {
    /**
     * Data set for earned certifications.
     */
    const certs = await getAllCerts()

    /**
     * Grid variants for staggering entrance of certification cards.
     */
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    }

    /**
     * Individual card entrance variants.
     */
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    }

    return (
        <section
            id="certifications"
            className={cn("mx-auto w-full max-w-7xl px-4 py-16 md:px-6 lg:px-8", className)}
        >
            {/* Section Header */}
            <motion.div
                className="mb-16 space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <p className="text-xs font-mono uppercase tracking-widest text-primary">- Certifications</p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Receipts.</h2>
                <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
            </motion.div>

            {/* Certification Grid */}
            <motion.div
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {certs.map((cert, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="group flex flex-col justify-between rounded-lg border border-border bg-card p-6 transition-colors duration-200 hover:border-primary/50"
                    >
                        <div className="space-y-4">
                            {/* Decorative Icon Box */}
                            <div className="inline-flex items-center justify-center rounded-lg bg-primary/30 p-2.5 text-primary">
                                <Award className="h-5 w-5" />
                            </div>
                            
                            {/* Certification Title */}
                            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                                {cert.title}
                            </h3>
                            
                            {/* Metadata: Issuer and Year */}
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                                    {cert.issuer}
                                </span>
                                <span className="text-xs font-mono text-muted-foreground">{cert.date}</span>
                            </div>
                        </div>

                        {/* External Link for Verification */}
                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 flex items-center gap-2 text-xs font-bold text-primary hover:underline underline-offset-4"
                        >
                            Verify Credential
                            <ExternalLink className="h-3 w-3" />
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}