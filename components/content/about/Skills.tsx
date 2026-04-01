import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ShieldCheck, Code2, Terminal } from "lucide-react"

/**
 * Data Object: Centralized source for all technical skills.
 * Categorized to populate the corresponding UI cards.
 */
const skillsData = {
    languages: ["Go (Golang)", "Node.js", "React", "Python", "JavaScript (ES6+)", "HTML5/CSS3"],
    security: ["Linux (Kali)", "Wireshark", "Ethical Hacking", "Nmap", "Threat Management", "Firewalls"],
    tools: ["Git/GitHub", "VirtualBox", "Power Automate", "Bash/PowerShell", "Docker", "Adobe Suite"],
}

/**
 * Skills Component
 * Renders a categorized grid of technical competencies using shadcn/ui Cards and Badges.
 */
export default function Skills({ className }: Readonly<{ className?: string }>) {
    return (
        /* Section wrapper: Provides consistent spacing and alignment within the page layout */
        <section className={cn("mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8", className)}>
            
            {/* Grid Layout: Stacks to 1 column on mobile, expands to 3 columns on medium screens */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Header Container: Full-width heading with a decorative branding accent */}
                <div className="space-y-2 col-span-1 md:col-span-3 mb-4">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Skills & Expertise
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </div>

                {/* Development Card: Focuses on core programming and web technologies */}
                <Card className="flex flex-col transition-all hover:border-primary/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <Code2 className="h-5 w-5 text-primary" />
                            Development
                        </CardTitle>
                    </CardHeader>
                    {/* Content area: Wraps badges to handle varying skill string lengths */}
                    <CardContent className="flex flex-wrap gap-2">
                        {skillsData.languages.map((skill) => (
                            <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                    </CardContent>
                </Card>

                {/* Security Card: Highlights specialized knowledge in cybersecurity and systems */}
                <Card className="flex flex-col transition-all hover:border-primary/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <ShieldCheck className="h-5 w-5 text-primary" />
                            Security & Systems
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {skillsData.security.map((skill) => (
                            <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                    </CardContent>
                </Card>

                {/* Infrastructure/Tools Card: Showcases automation, workflow, and environment tools */}
                <Card className="flex flex-col transition-all hover:border-primary/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <Terminal className="h-5 w-5 text-primary" />
                            Automation & Tools
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {skillsData.tools.map((skill) => (
                            <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}