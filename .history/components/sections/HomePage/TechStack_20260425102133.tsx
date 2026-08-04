"use client"

import { 
    SiReact, 
    SiJavascript, 
    SiTailwindcss, 
    SiNodedotjs, 
    SiHtml5, 
    SiCss,
    SiGithub,
    SiPython,
    SiGo,
    SiBootstrap,
    SiGit,
    SiKalilinux,
    SiDocker
} from "@icons-pack/react-simple-icons"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

/**
 * List of technologies and tools displayed in the tech stack marquee.
 */
const SKILLS = [
    { name: "HTML", Icon: SiHtml5},
    { name: "CSS", Icon: SiCss},
    { name: "JavaScript", Icon: SiJavascript},
    { name: "Python", Icon: SiPython},
    { name: "Go", Icon: SiGo},
    { name: "React", Icon: SiReact },
    { name: "Tailwind", Icon: SiTailwindcss },
    { name: "Bootstrap", Icon: SiBootstrap},
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "GitHub", Icon: SiGithub },
    { name: "Git", Icon: SiGit },
    { name: "Kali Linux", Icon: SiKalilinux },
    { name: "Docker", Icon: SiDocker }
]

/**
 * TechStack Component
 * 
 * Displays an infinite horizontal marquee of technology icons and names.
 * Uses CSS keyframes for smooth animation and prevents JS jitter.
 * 
 * @param className - Optional CSS class name for the section container.
 */
export default function TechStack({ className }: { className?: string }) {
    return (
        <section className={cn("w-full py-12 overflow-hidden", className)}>
            {/* Injecting CSS keyframes for the marquee loop to prevent JS jitter */}
            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .group:hover .animate-marquee {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
                {/* Section Header: Consistent with other home page sections */}
                <motion.div
                    className="mb-12 space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xs text-primary font-mono">
                        - TECH STACK
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Technologies I use.
                    </h2>
                    <motion.div 
                        className="h-1 bg-primary rounded-full" 
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    />
                </motion.div>

                {/* Marquee Container: Handles the infinite scroll and fade effects */}
                <div className="group relative w-full overflow-hidden">
                    {/* Fading gradient masks for a smooth "fade in/out" edge look */}
                    <div className="absolute inset-y-0 left-0 w-12 z-10 bg-linear-to-r from-background to-transparent" />
                    <div className="absolute inset-y-0 right-0 w-12 z-10 bg-linear-to-l from-background to-transparent" />

                    <div className="flex w-max gap-8 py-2 animate-marquee">
                        {/* Double the list for seamless infinite looping */}
                        {[...SKILLS, ...SKILLS].map((skill, index) => (
                            <div 
                                key={index} 
                                className="flex items-center gap-3 shrink-0 px-5 py-3 rounded-xl border border-border/50 bg-muted/20 hover:bg-muted/50 transition-all"
                            >
                                <skill.Icon 
                                    className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" 
                                />
                                <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}