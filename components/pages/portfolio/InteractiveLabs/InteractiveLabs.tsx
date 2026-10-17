"use client"

import { Variants } from "framer-motion"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import TerminalLab from "./TerminalLab"

/**
 * InteractiveLabs Component
 * 
 * A specialized section for hands-on technical demonstrations and labs.
 * Acts as a container for interactive components like the TerminalLab emulator,
 * providing a standardized layout and entrance animations.
 * 
 * @param className - Optional CSS class name for the section container.
 */
export default function InteractiveLabs({ className }: { className?: string }) {

    /**
     * Parent container variants: Staggers the entry of complex lab components
     * to avoid visual jitter and provide a smooth loading experience.
     */
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    }

    return (
        <section className={cn("mx-auto w-full max-w-6xl px-4 py-16 md:px-6 overflow-hidden", className)}>
            {/* Section Header */}
            <motion.div 
                className="mb-12 space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Interactive Labs
                </h2>
                {/* Decorative primary underline animation */}
                <motion.div 
                    className="h-1 bg-primary rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                />
            </motion.div>

            {/* Lab Execution Area: Hosts interactive modules with staggered entrance */}
            <motion.div 
                className="flex flex-col gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <TerminalLab />
            </motion.div>
        </section>
    )
}