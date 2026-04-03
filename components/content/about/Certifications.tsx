"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Award, ExternalLink } from "lucide-react"

export default function Certifications({ className }: Readonly<{ className?: string }>) {
    const certs = [
        {
            title: "Miro essentials",
            issuer: "Miro",
            date: "2025",
            link: "https://www.credly.com/badges/b3b65929-44a0-4f26-8693-063afbb36d97/linked_in_profile",
        },
        {
            title: "Junior Cybersecurity Analyst Career Path",
            issuer: "Cisco",
            date: "2025",
            link: "https://www.credly.com/badges/911b0c2b-6962-44a5-b37d-2f0dc5a30419/linked_in_profile",
        },
        {
            title: "Operating Systems Basics",
            issuer: "Cisco",
            date: "2025",
            link: "https://www.credly.com/badges/72195a5c-7dc9-4ebd-8e31-c360290dac7e/linked_in_profile",
        },
        {
            title: "Computer Hardware Basics",
            issuer: "Cisco",
            date: "2025",
            link: "https://www.credly.com/badges/f594a8f1-43fc-4693-b9c1-e066814332ae/linked_in_profile",
        },
        {
            title: "AWS Educate Getting Started with Networking",
            issuer: "Amazon Web Services (AWS)",
            date: "2025",
            link: "https://www.credly.com/badges/7217d462-4138-48ca-85f7-bae69500444c/linked_in_profile",
        },
        {
            title: "AWS Educate Getting Started with Compute",
            issuer: "Amazon Web Services (AWS)",
            date: "2025",
            link: "https://www.credly.com/badges/a7580ec0-a90b-4206-b3fc-8b77b7bce671/linked_in_profile",
        },
        {
            title: "AWS Educate Getting Started with Storage",
            issuer: "Amazon Web Services (AWS)",
            date: "2025",
            link: "https://www.credly.com/badges/b5507684-1b68-4c9f-8bbd-3120ea65651c/linked_in_profile",
        },
        {
            title: "AWS Educate Introduction to Cloud 101",
            issuer: "Amazon Web Services (AWS)",
            date: "2025",
            link: "https://www.credly.com/badges/f91a4dbc-8835-41fb-81fb-a74d33304ae2/linked_in_profile",
        },
        {
            title: "Introduction to JavaScript",
            issuer: "Sololearn",
            date: "2024",
            link: "https://www.sololearn.com/en/certificates/CC-TMBKLXCV",
        },
        {
            title: "Introduction to cyber security stay safe online",
            issuer: "The Open University",
            date: "2024",
            link: "https://www.open.edu/openlearn/badges/badge.php?hash=02c3faa491713ae91ba2c6e2d345e93d4224af23",
        },
        {
            title: "Introduction to C++",
            issuer: "Sololearn",
            date: "2024",
            link: "https://www.sololearn.com/en/certificates/CC-36D2Z1ZB",
        },
        {
            title: "Introduction to CSS",
            issuer: "Sololearn",
            date: "2024",
            link: "https://www.sololearn.com/en/certificates/CC-RL7RDSPS",
        },
        {
            title: "Introduction to HTML",
            issuer: "Sololearn",
            date: "2023",
            link: "https://www.sololearn.com/en/certificates/CC-TMBKLXCV",
        },
        {
            title: "Introduction to Python",
            issuer: "SoloLearn",
            date: "2023",
            link: "https://www.sololearn.com/en/certificates/CC-0S7TV3M2",
        }
    ]

    // Animation variants for the grid items
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Subtle stagger for a large list
            },
        },
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5, ease: "easeOut" } 
        },
    }

    return (
        <section 
            id="certifications"
            className={cn(
                "mx-auto w-full max-w-7xl px-4 py-20 md:px-6 lg:px-8 overflow-hidden",
                className
            )}
        >
            {/* Header: Consistent with AboutMe/Intro styling */}
            <motion.div 
                className="mb-12 space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    Certifications
                </h2>
                <motion.div 
                    className="h-1 bg-primary rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                />
            </motion.div>

            {/* Certification Grid with Staggered Animation */}
            <motion.div 
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {certs.map((cert, index) => (
                    <motion.div 
                        key={index}
                        variants={cardVariants}
                        whileHover={{ 
                            y: -5,
                            transition: { duration: 0.2 }
                        }}
                        className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-muted/30 p-6 transition-colors duration-300 hover:bg-muted/50 hover:border-primary/50"
                    >
                        {/* Icon/Badge Area */}
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                            <Award className="h-6 w-6" />
                        </div>

                        {/* Content */}
                        <div className="space-y-1">
                            <h3 className="font-semibold text-lg text-foreground leading-tight group-hover:text-primary transition-colors">
                                {cert.title}
                            </h3>
                            <p className="text-muted-foreground font-medium text-sm">
                                {cert.issuer}
                            </p>
                            <p className="text-xs text-muted-foreground/60">
                                Issued {cert.date}
                            </p>
                        </div>

                        {/* External Link */}
                        <a 
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto flex items-center gap-2 text-sm font-medium text-primary/80 hover:text-primary transition-colors"
                        >
                            View Credential
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}