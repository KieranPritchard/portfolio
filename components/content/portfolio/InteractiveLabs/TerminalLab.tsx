"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Terminal, Shield, Zap, X, Minus, Plus} from "lucide-react"

/**
 * TerminalLine Type: Defines the structure for command history.
 * 'input' represents user commands, while 'output' represents system responses.
 */
type TerminalLine = {
    type: string; 
    content: string;
}

/**
 * TerminalLab Component: An interactive terminal emulator that allows users to
 * explore your background and skills through a CLI interface.
 */
export default function TerminalLab({ className }: { className?: string }) {
    // State to manage the terminal's persistent history
    const [history, setHistory] = useState<TerminalLine[]>([
        { type: 'output', content: "Initializing core_v2.0.4..." },
        { type: 'output', content: "Establishing encrypted tunnel via Port 443..." },
        { type: 'output', content: "Welcome to the secure shell. Type 'help' to see available commands." }
    ])
    
    // State for the current active input
    const [inputValue, setInputValue] = useState("")
    
    // Reference used to programmatically control the scroll position
    const scrollRef = useRef<HTMLDivElement>(null)

    // Auto-scroll Effect: Ensures the latest command is always visible by 
    // pinning the scrollbar to the bottom whenever history updates.
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [history])

    /**
     * handleCommand: The "Brain" of the terminal. 
     * Parses the user input on 'Enter' and determines the appropriate system response.
     */
    const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && inputValue.trim()) {
            const cmd = inputValue.toLowerCase().trim()
            const newHistory = [...history, { type: 'input', content: cmd }]

            let response: string = ""
            
            // Command Logic Switch: Simulates a real shell environment
            switch (cmd) {
                case "help":
                    response = "Available: whoami, ls, cat, clear, status"
                    break
                case "whoami":
                    response = "User: Kieran Pritchard, Role: software student focused on ethical hacking and secure dev."
                    break
                case "ls":
                    response = "skills.txt projects.exe"
                    break
                case "projects.exe":
                    response = "Redirecting to project vault... [Use the grid below to view all case studies]"
                    break
                case "cat":
                    response = "Please provide a valid file as a positional argument (e.g., 'cat skills.txt')"
                    break
                case "cat skills.txt":
                    response = "Languages: Go (Golang), Node.js, React, Python, JavaScript (ES6+), HTML5/CSS3. Security: Linux (Kali), Wireshark, Nmap, Firewalls."
                    break
                case "status":
                    response = "System: Operational. Firewall: Active. Intrusion Detection: Stealth Mode."
                    break
                case "clear":
                    setHistory([])
                    setInputValue("")
                    return
                default:
                    response = `Command '${cmd}' not recognized. Type 'help' for options.`
            }
            
            setHistory([...newHistory, { type: 'output', content: response }])
            setInputValue("")
        }
    }

    return (
        <section className={cn("mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8", className)}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {/* Section Header: Features the Terminal icon and animated primary divider */}
                <div className="mb-12 space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl flex items-center gap-3">
                        <Terminal className="h-8 w-8 text-primary" />
                        Terminal Lab
                    </h2>
                    <motion.div 
                        className="h-1 bg-primary rounded-full" 
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    />
                </div>

                {/* Main Terminal Window: Styled with a dark aesthetic and emerald text for a "Hacker" vibe */}
                <Card className="group overflow-hidden border-border/50 bg-card/40 transition-all duration-300 hover:border-primary/30 shadow-2xl">
                    {/* Window Controls: Simulates an OS window header */}
                    <CardHeader className="border-b border-border/50 bg-muted/20 py-3 flex flex-row items-center justify-between">
                        <div className="flex gap-1.5 group/controls">
                            <div className="group flex h-3 w-3 items-center justify-center rounded-full bg-destructive/80 transition-colors">
                                <X className="h-2 w-2 text-black/50 opacity-0 group-hover/controls:opacity-100" />
                            </div>
                            <div className="group flex h-3 w-3 items-center justify-center rounded-full bg-yellow-500/80 transition-colors">
                                <Minus className="h-2 w-2 text-black/50 opacity-0 group-hover/controls:opacity-100" />
                            </div>
                            <div className="group flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500/80 transition-colors">
                                <Plus className="h-2 w-2 text-black/50 opacity-0 group-hover/controls:opacity-100" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                            <Shield className="h-3 w-3" />
                            Secure Environment
                        </div>
                    </CardHeader>
                    
                    {/* Terminal Scroll Area: Uses a custom scrollbar-hide and monospace font */}
                    <CardContent className="p-0">
                        <div 
                            ref={scrollRef}
                            className="h-[350px] overflow-y-auto bg-[#0d0d0d] p-6 font-mono text-sm leading-relaxed text-emerald-500 scrollbar-hide"
                        >
                            <div className="space-y-1">
                                {/* History Rendering: Colors input and output differently for visual hierarchy */}
                                {history.map((line, i) => (
                                    <div key={i} className={line.type === 'input' ? "text-primary" : "text-emerald-500/90"}>
                                        {line.type === 'input' ? (
                                            <span className="flex items-center gap-2">
                                                <Zap className="h-3 w-3" />
                                                user@portfolio:~$ {line.content}
                                            </span>
                                        ) : (
                                            <p className={i < 2 ? "text-emerald-500/50" : ""}>{line.content}</p>
                                        )}
                                    </div>
                                ))}
                                
                                {/* Active Input Line: Unstyled input field for seamless integration */}
                                <div className="mt-2 flex items-center gap-2">
                                    <span className="flex items-center gap-1 text-primary">
                                        <Zap className="h-3 w-3" />
                                        user@portfolio:~$
                                    </span>
                                    <input 
                                        type="text" 
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyDown={handleCommand}
                                        className="flex-1 bg-transparent border-none outline-none text-emerald-400 caret-primary"
                                        spellCheck={false}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    
                    {/* Footer Status Bar: Includes a pulsing animation to indicate the system is "Live" */}
                    <div className="border-t border-border/50 bg-muted/10 px-6 py-3 text-[10px] text-muted-foreground flex justify-between items-center">
                        <span>Connection: Encrypted</span>
                        <span className="animate-pulse flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            System Ready
                        </span>
                    </div>
                </Card>
            </motion.div>
        </section>
    )
}