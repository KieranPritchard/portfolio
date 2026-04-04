"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Terminal, Shield, Zap } from "lucide-react"

// Creates a type for the terminal line
type TerminalLine = {
    type:string ; // Stores the type of line
    content: string; // Stores the content as a string
}

// Exports terminal lab
export default function TerminalLab({ className }: { className?: string }) {
    // State to store history and set the history using terminal line type
    const [history, setHistory] = useState<TerminalLine[]>([
        { type: 'output', content: "Initializing core_v2.0.4..." },
        { type: 'output', content: "Establishing encrypted tunnel via Port 443..." },
        { type: 'output', content: "Welcome to the secure shell. Type 'help' to see available commands." }
    ])
    // Stores the input value
    const [inputValue, setInputValue] = useState("")
    // Sets the scroll refrence to none
    const scrollRef = useRef<HTMLDivElement>(null)

    // Auto-scroll to bottom whenever history updates
    useEffect(() => {
        // Checks if the scroll is the current page
        if (scrollRef.current) {
            // Sets the current scroll refrence
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [history]) // Updates on change to history

    // Handler function to handle the command on key press
    const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Checks if the key is enter and trims the input value
        if (e.key === "Enter" && inputValue.trim()) {
            // Stores the command
            const cmd = inputValue.toLowerCase().trim()
            // Creates a new history
            const newHistory = [...history, { type: 'input', content: cmd }]

            // Command Processor
            let response: string = ""
            // Gives a response based on the command
            switch (cmd) {
                // Gives a help command
                case "help":
                    // Outputs the response
                    response = "Available: whoami, ls, cat, clear, status"
                    break
                // Runs whoami
                case "whoami":
                    // Outputs the response
                    response = "User: Kieran Pritchard, Role: software student focused ethical hacking and software."
                    break
                // Runs a ls command 
                case "ls":
                    // Outputs the response
                    response = "skills.txt projects.exe"
                    break
                // Runs projects.exe
                case "projects.exe":
                    // Outputs the response
                    response = "Redirecting to project vault... [Use the grid below to view all case studies]"
                    break
                // Runs cat command
                case "cat":
                    // Outputs the response
                    response = "Please provide a valid file as a positional arguement"
                    break
                // Opens the skills list
                case "cat skills.txt":
                    // Outputs the response
                    response = "Languages: Go (Golang), Node.js, React, Python, JavaScript (ES6+), HTML5/CSS3 \n Security: Linux (Kali), Wireshark, Ethical Hacking, Nmap, Threat Management, Firewalls \
                                Git/GitHub, VirtualBox, Power Automate, Bash/PowerShell, Docker, Adobe Suite"
                    break
                // Opens status
                case "status":
                    // Outputs the response
                    response = "System: Operational. Firewall: Active. Intrusion Detection: Stealth Mode."
                    break
                // Clears the terminal
                case "clear":
                    // sets the histroy to nothing
                    setHistory([])
                    // Sets a null inpput value 
                    setInputValue("")
                    return
                default:
                    // Error message as default
                    response = `Command '${cmd}' not recognized. Type 'help' for options.`
            }
            
            // Sets teh history
            setHistory([...newHistory, { type: 'output', content: response }])
            // Sets the input file
            setInputValue("")
        }
    }

    return (
        /* Sets up the section */
        <section className={cn("mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8", className)}>
            {/* Sets up the motion div */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {/* Terminal header  */}
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

                {/* Terminal card */}
                <Card className="group overflow-hidden border-border/50 bg-card/40 transition-all duration-300 hover:border-primary/30 shadow-2xl">
                    {/* Card header to look like a mac */}
                    <CardHeader className="border-b border-border/50 bg-muted/20 py-3 flex flex-row items-center justify-between">
                        <div className="flex gap-1.5">
                            <div className="h-3 w-3 rounded-full bg-destructive/50" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                            <div className="h-3 w-3 rounded-full bg-emerald-500/50" />
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                            <Shield className="h-3 w-3" />
                            Secure Environment
                        </div>
                    </CardHeader>
                    
                    {/* Terminal content */}
                    <CardContent className="p-0">
                        <div 
                            ref={scrollRef}
                            className="h-[350px] overflow-y-auto bg-[#0d0d0d] p-6 font-mono text-sm leading-relaxed text-emerald-500 scrollbar-hide"
                        >
                            <div className="space-y-1">
                                {/* Maps the history to divider */}
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
                                
                                {/* Terminal input */}
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