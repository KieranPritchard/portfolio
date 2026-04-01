"use client"

import { useState } from "react"
import { 
    Card, 
    CardContent, 
    CardFooter, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { LinkButton } from "@/components/Buttons/LinkButton"
import { cn } from "@/lib/utils"
import { Webcam, ExternalLink, Shield, Code, Zap } from "lucide-react"

/**
 * Data Object: Sourced from Kieran's CV and projects.
 * Categorized by type to support the tab filtering logic.
 */
const projectsData = [
    {
        title: "Virtualised Ethical Hacking Lab",
        category: "security",
        description: "Engineered a secure, isolated testing environment using VirtualBox and Kali Linux for penetration testing and vulnerability assessments.",
        tags: ["Kali Linux", "Wireshark", "Nmap", "VirtualBox"],
        link: "#",
        github: "#"
    },
    {
        title: "Christmas UNO",
        category: "web",
        description: "A full-stack festive game built during a 5-day hackathon. Developed core game logic and responsive UI components.",
        tags: ["React", "Node.js", "Tailwind CSS", "Git"],
        link: "#",
        github: "#"
    },
    {
        title: "Script-Vault",
        category: "automation",
        description: "A centralized repository of 30+ custom scripts designed to automate repetitive workflows in networking and reconnaissance.",
        tags: ["Python", "Bash", "Automation", "Nmap"],
        link: "#",
        github: "#"
    },
    {
        title: "Worksity Minibus Web",
        category: "web",
        description: "Collaborated in a team to design and deploy a responsive website for a local firm, winning 'Best Overall Project'.",
        tags: ["HTML5", "CSS3", "JavaScript", "Team Leadership"],
        link: "#",
        github: "#"
    }
]

/**
 * ProjectsGrid Component
 * Features a filtered tab system and a responsive grid of project cards.
 */
export default function ProjectsGrid({ className }: Readonly<{ className?: string }>) {
    const [filter, setFilter] = useState("all")

    const filteredProjects = filter === "all" 
        ? projectsData 
        : projectsData.filter(p => p.category === filter)

    return (
        /* Section Wrapper: Handles global spacing and max-width */
        <section className={cn("mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8", className)}>
            
            {/* Header Section: Title and category navigation */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Featured Projects
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </div>

                {/* Filter Tabs: Controls the state for the grid display */}
                <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setFilter}>
                    <TabsList className="grid grid-cols-4 w-full md:w-auto">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="web">Web</TabsTrigger>
                        <TabsTrigger value="security">Security</TabsTrigger>
                        <TabsTrigger value="automation">Auto</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            {/* Project Grid: Transitions height smoothly when filtering (optional) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                    /* Project Card: Individual container for each work item */
                    <Card key={index} className="flex flex-col overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg">
                        {/* Header: Displays category icon and title */}
                        <CardHeader className="space-y-1">
                            <div className="flex items-center justify-between mb-2">
                                {project.category === "security" && <Shield className="h-5 w-5 text-primary" />}
                                {project.category === "web" && <Code className="h-5 w-5 text-primary" />}
                                {project.category === "automation" && <Zap className="h-5 w-5 text-primary" />}
                                <Badge variant="outline" className="capitalize">{project.category}</Badge>
                            </div>
                            <CardTitle className="text-xl line-clamp-1">{project.title}</CardTitle>
                        </CardHeader>

                        {/* Content: Project summary and tech stack badges */}
                        <CardContent className="flex-1 space-y-4">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <Badge key={tag} variant="secondary" className="text-[10px] uppercase font-bold">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>

                        {/* Footer: Action buttons for repository and live viewing */}
                        <CardFooter className="border-t bg-muted/20 gap-2 p-4">
                            <LinkButton 
                                text="Source" 
                                link={project.github} 
                                kind="outline" 
                                className="w-full h-9 text-xs"
                            />
                            <LinkButton 
                                text="Demo" 
                                link={project.link} 
                                kind="default" 
                                className="w-full h-9 text-xs"
                            />
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}