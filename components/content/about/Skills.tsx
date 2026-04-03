"use client"

import { motion } from "framer-motion"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ShieldCheck, Code2, Terminal } from "lucide-react"

const skillsData = {
    languages: ["Go (Golang)", "Node.js", "React", "Python", "JavaScript (ES6+)", "HTML5/CSS3"],
    security: ["Linux (Kali)", "Wireshark", "Ethical Hacking", "Nmap", "Threat Management", "Firewalls"],
    tools: ["Git/GitHub", "VirtualBox", "Power Automate", "Bash/PowerShell", "Docker", "Adobe Suite"],
}

export default function Skills({ className }: Readonly<{ className?: string }>) {
    // Parent grid animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    // Individual card entrance
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5, ease: "easeOut" } 
        }
    }

    // Badge "pop" animation
    const badgeVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 15 }
        }
    }

    return (
        <section className={cn("mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 overflow-hidden", className)}>
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {/* Header Container */}
                <motion.div className="space-y-2 col-span-1 md:col-span-3 mb-4" variants={cardVariants}>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Skills & Expertise
                    </h2>
                    <motion.div 
                        className="h-1 bg-primary rounded-full" 
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    />
                </motion.div>

                {/* Development Card */}
                <motion.div variants={cardVariants} whileHover={{ y: -5 }}>
                    <Card className="h-full flex flex-col transition-colors hover:border-primary/50 hover:bg-muted/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl">
                                <Code2 className="h-5 w-5 text-primary" />
                                Development
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <motion.div className="flex flex-wrap gap-2" variants={containerVariants}>
                                {skillsData.languages.map((skill) => (
                                    <motion.div key={skill} variants={badgeVariants}>
                                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                                            {skill}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Security Card */}
                <motion.div variants={cardVariants} whileHover={{ y: -5 }}>
                    <Card className="h-full flex flex-col transition-colors hover:border-primary/50 hover:bg-muted/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl">
                                <ShieldCheck className="h-5 w-5 text-primary" />
                                Security & Systems
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <motion.div className="flex flex-wrap gap-2" variants={containerVariants}>
                                {skillsData.security.map((skill) => (
                                    <motion.div key={skill} variants={badgeVariants}>
                                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                                            {skill}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Infrastructure/Tools Card */}
                <motion.div variants={cardVariants} whileHover={{ y: -5 }}>
                    <Card className="h-full flex flex-col transition-colors hover:border-primary/50 hover:bg-muted/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl">
                                <Terminal className="h-5 w-5 text-primary" />
                                Automation & Tools
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <motion.div className="flex flex-wrap gap-2" variants={containerVariants}>
                                {skillsData.tools.map((skill) => (
                                    <motion.div key={skill} variants={badgeVariants}>
                                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                                            {skill}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </CardContent>
                    </Card>
                </motion.div>
            </motion.div>
        </section>
    )
}