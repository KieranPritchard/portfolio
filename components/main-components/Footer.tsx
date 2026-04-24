"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { Separator } from "@/components/ui/separator"

// Stores the pages
const PAGES = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
]

// Stores the content for elsewhere
const ELSEWHERE = [
    { name: "GitHub", href: "https://github.com/KieranPritchard" },
    { name: "Email", href: "mailto:KieranPritchard06@gmail.com" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/kieran-pritchard/" },
    { name: "CV (PDF)", href: "/kieran_pritchard_cv.pdf" },
]

// Stores teh status
const STATUS = [
    "Available for work",
    "Open to CTFs",
    "Coffee: hot",
]

export default function Footer({ className }: Readonly<{ className?: string }>) {
    // Stores the current year
    const currentYear = new Date().getFullYear()

    // Stores the animations for the container
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    }

    // Stores the items aniamtions
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.4, ease: "easeOut" } 
        },
    }

    return (
        <footer className={cn("w-full bg-background pt-16 pb-8", className)}>
            <motion.div 
                className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
                    {/* Stores the header */}
                    <motion.div className="flex flex-col gap-4" variants={itemVariants}>
                        <h3 className="text-lg font-bold text-foreground">Kieran Pritchard</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                            Ethical hacker and software developer based in Bournemouth, studying at Bournemouth & Poole College.
                        </p>
                    </motion.div>

                    {/* Displays the pages */}
                    <motion.div className="flex flex-col gap-4" variants={itemVariants}>
                        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">PAGES</h4>
                        <nav className="flex flex-col gap-2">
                            {PAGES.map((link) => (
                                <Link key={link.name} href={link.href} className="text-sm text-foreground hover:text-primary transition-colors w-fit">
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                    
                    {/* Displays the offsight links */}
                    <motion.div className="flex flex-col gap-4" variants={itemVariants}>
                        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">ELSEWHERE</h4>
                        <nav className="flex flex-col gap-2">
                            {ELSEWHERE.map((link) => (
                                <Link key={link.name} href={link.href} className="text-sm text-foreground hover:text-primary transition-colors w-fit">
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                    
                    {/* Displays the other things */}
                    <motion.div className="flex flex-col gap-4" variants={itemVariants}>
                        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">STATUS</h4>
                        <div className="flex flex-col gap-2">
                            {STATUS.map((status) => (
                                <span key={status} className="text-sm text-foreground">{status}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <Separator className="my-8 bg-border/50" />

                <motion.div 
                    className="flex flex-col items-center justify-between gap-4 md:flex-row text-xs text-muted-foreground"
                    variants={itemVariants}
                >
                    <p>© {currentYear} • Built with NextJS + Tailwinds + Shadcn</p>
                    <p>Bournemouth & Poole College</p>
                </motion.div>
            </motion.div>
        </footer>
    )
}