"use client"

import { Variants, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

/**
 * Metadata displayed as a list of labels and values on the About page.
 */
const METADATA = [
    { label: "Name", value: "Kieran Pritchard" },
    { label: "Role", value: "Ethical hacker & dev (student)" },
    { label: "Location", value: "Bournemouth, England" },
    { label: "Studying", value: "T-Level Digital Software Dev" },
    { label: "Institution", value: "Bournemouth & Poole College" },
    { label: "Email", value: "KieranPritchard06@gmail.com" },
    { label: "Status", value: "Available for placement" },
]

/**
 * AboutMe Component
 * 
 * The main biographical section of the About page. It features a profile image,
 * a metadata list, and a detailed narrative about the user's background and goals.
 * 
 * @param className - Optional CSS class name for the section container.
 */
export default function AboutMe({ className }: Readonly<{ className?: string }>) {
    /**
     * Staggered entrance variants for the content column.
     */
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    }

    /**
     * Fade-in and slide-up variants for individual items.
     */
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.4, ease: "easeOut" } 
        },
    }

    return (
        <section 
            id="about"
            className={cn(
                "mx-auto w-full max-w-7xl px-4 py-20 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-16 items-start",
                className
            )}
        >   
            {/* Profile Image Section */}
            <motion.div 
                className="relative aspect-4/5 w-full max-w-md overflow-hidden rounded-xl bg-muted"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <img 
                    src="kieran-pritchard.jpg" 
                    alt="Kieran Pritchard" 
                    className="h-full w-full object-cover"
                />
            </motion.div>

            {/* Content Section: Metadata and Narrative */}
            <motion.div 
                className="flex flex-col gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Metadata List: Key-value pairs for quick information */}
                <motion.div className="flex flex-col gap-3" variants={itemVariants}>
                    {METADATA.map((item) => (
                        <div key={item.label} className="grid grid-cols-[120px_1fr] gap-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground pt-0.5">
                                {item.label}
                            </span>
                            <span className="text-sm text-foreground hover:text-primary transition-all duration-300">
                                {item.value}
                            </span>
                        </div>
                    ))}
                </motion.div>

                <Separator className="bg-border/50" />

                {/* Narrative Section: Title and Detailed Biography */}
                <motion.div className="space-y-6" variants={itemVariants}>
                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-primary">
                            - About
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                            Learning by breaking things.
                        </h2>
                        {/* Decorative primary color underline */}
                        <div className="h-1 w-12 bg-primary rounded-full mt-2" />
                    </div>

                    <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                        <p>
                            I am a high-achieving Digital Software Development student at Bournemouth & Poole College with a dedicated focus on ethical hacking and secure system architecture. 
                            I specialize in building robust, defense-oriented applications while utilizing my role as a student representative to drive collaborative excellence and positive change within the technical community.
                        </p>
                        <p>
                            With a strong foundation in modern programming and proactive problem-solving, I strive to create digital experiences that are not only high-performing but also fundamentally secure against emerging threats. I am committed to applying my organizational skills and technical expertise to gain hands-on industry experience and build a resilient, long-term career in cybersecurity.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}