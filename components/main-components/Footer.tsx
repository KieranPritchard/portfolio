"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Mail} from "lucide-react"
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react"

/**
 * Footer Component: A responsive, animated site footer that maintains design consistency
 * with the About section using Framer Motion staggered animations and themed UI components.
 */
export default function Footer({ className }: Readonly<{ className?: string }>) {
    const currentYear = new Date().getFullYear()

    // Parent container variant: Staggers the appearance of the footer columns
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    }

    // Slide-up animation for footer columns and elements
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5, ease: "easeOut" } 
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
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    
                    {/* Brand Section: Consistent with the About section's primary accent style */}
                    <motion.div className="flex flex-col gap-4" variants={itemVariants}>
                        <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
                            Kieran Pritchard
                        </Link>
                        <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
                            Building secure software and solving complex problems through ethical hacking and modern development.
                        </p>
                    </motion.div>

                    {/* Navigation: Quick links with hover transitions */}
                    <motion.div className="flex flex-col gap-4" variants={itemVariants}>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                            Navigation
                        </h3>
                        <nav className="flex flex-col gap-2">
                            {["About", "Portfolio", "Contact"].map((item) => (
                                <Link 
                                    key={item}
                                    href={`/${item.toLowerCase().replace(" ", "-")}`} 
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Social Section: Interactive buttons with hover scaling */}
                    <motion.div className="flex flex-col gap-4" variants={itemVariants}>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                            Connect
                        </h3>
                        <div className="flex gap-3">
                            {[
                                { icon: IconBrandGithub, href: "https://github.com/KieranPritchard" },
                                { icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/kieran-pritchard/" },
                                { icon: Mail, href: "mailto:KieranPritchard06@gmail.com" }
                            ].map((social, index) => (
                                <motion.div key={index} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                                    <Button variant="outline" size="icon" className="rounded-xl border-border hover:border-primary/50 hover:bg-muted/30" asChild>
                                        <Link href={social.href} target="_blank">
                                            <social.icon className="h-4 w-4 text-foreground" />
                                        </Link>
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Animated horizontal divider */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Separator className="my-8" />
                </motion.div>

                {/* Bottom Metadata: Copyright and Stack details */}
                <motion.div 
                    className="flex flex-col items-center justify-between gap-4 md:flex-row"
                    variants={itemVariants}
                >
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} <span className="font-medium text-foreground">Kieran Pritchard</span>. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Built with</span>
                        <span className="text-foreground font-medium">Next.js</span>
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        <span className="text-foreground font-medium">Tailwind</span>
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        <span className="text-foreground font-medium">Shadcn UI</span>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    )
}