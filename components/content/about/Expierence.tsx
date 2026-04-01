import { cn } from "@/lib/utils"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"

/**
 * Enhanced Data Object: Uses arrays for descriptions to render CV bullet points.
 */
const timelineData = [
    {
        title: "T-Level: Digital Software Development",
        organization: "Bournemouth & Poole College",
        date: "Sept 2025 – Present",
        type: "education",
        details: [
            "Focus: Software Programming, Security & Testing, Emerging Technologies, Legislation, Data.",
            "Elected Student Representative: Acted as a liaison between 15+ students and faculty to implement curriculum feedback."
        ]
    },
    {
        title: "IT Support Assistant (Work Placement)",
        organization: "Bournemouth & Poole College",
        date: "Jan 2026 – Present",
        type: "work",
        details: [
            "Hardware Maintenance: Performing hardware diagnostics and repairs, including dismantling and reassembling desktop hardware.",
            "System Deployment: Configuring and imaging new laptops for enterprise deployment, ensuring security protocols meet standards.",
            "Process Automation: Utilizing Microsoft Power Automate to design and build automated workflows."
        ]
    },
    {
        title: "Web & Social Media Project Member",
        organization: "Worksity (Industry Live Project)",
        date: "Jun 2025 – Jul 2025",
        type: "work",
        details: [
            "Web Development: Collaborated to design and deploy a responsive website for a local minibus firm.",
            "Graphic Design: Developed reusable social media assets using Canva and Photoshop.",
            "Team Leadership: Led and organized the project team, recognized with the 'Best Overall Project' award."
        ]
    },
    {
        title: "BTEC First in Digital",
        organization: "Bournemouth & Poole College",
        date: "Sept 2024 – Jun 2025",
        type: "education",
        details: [
            "Achieved Distinction grades across core modules including Web Development and Networking.",
            "Developed a foundational understanding of digital impact and IT systems."
        ]
    }
]

export default function ExperienceTimeline({ className }: Readonly<{ className?: string }>) {
    return (
        <section className={cn("mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8", className)}>
            {/* Section Header */}
            <div className="space-y-2 mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    Experience & Education
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            {/* Timeline Wrapper */}
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-border">
                
                {timelineData.map((item, index) => (
                    <div key={index} className="relative flex items-start gap-8 group">
                        
                        {/* Timeline Icon */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 z-10">
                            {item.type === "work" ? (
                                <Briefcase className="h-5 w-5 text-primary" />
                            ) : (
                                <GraduationCap className="h-5 w-5 text-primary" />
                            )}
                        </div>

                        {/* Content Card */}
                        <div className="flex-1 pb-8">
                            <div className="p-5 rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
                                {/* Card Header */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                    <h3 className="font-bold text-lg tracking-tight">{item.title}</h3>
                                    <time className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-muted/50 px-3 py-1 rounded-full w-fit">
                                        <Calendar className="h-3.5 w-3.5" />
                                        {item.date}
                                    </time>
                                </div>

                                {/* Organization Label */}
                                <div className="text-sm font-bold text-primary/90 mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                    {item.organization}
                                </div>

                                {/* CV Bullet Points */}
                                <ul className="space-y-2 text-sm text-muted-foreground list-none">
                                    {item.details.map((detail, idx) => (
                                        <li key={idx} className="flex gap-2">
                                            <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                            <span className="leading-relaxed">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}