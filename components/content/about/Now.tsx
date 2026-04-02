import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Rocket, BookOpen, Coffee, Calendar } from "lucide-react"

export default function NowSection({ className }: Readonly<{ className?: string }>) {
    const lastUpdated = "April 2026"

    return (
        <section className={cn("mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8", className)}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Header Container */}
                <div className="space-y-4 col-span-1 md:col-span-2 lg:col-span-3 mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                                What I&apos;m Doing Now
                            </h2>
                            <div className="h-1 w-20 bg-primary rounded-full" />
                        </div>
                        <Badge variant="outline" className="w-fit flex items-center gap-2 py-1.5 px-4 text-sm font-medium border-primary/20 bg-primary/5">
                            <Calendar className="h-4 w-4 text-primary" />
                            Last Updated: {lastUpdated}
                        </Badge>
                    </div>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        This is a &quot;now&quot; page—a quick snapshot of my current projects, 
                        learning goals, and life focus.
                    </p>
                </div>

                {/* Focus: Professional/Coding */}
                <Card className="flex flex-col transition-all hover:border-primary/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <Rocket className="h-5 w-5 text-primary" />
                            Current Projects
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground leading-relaxed">
                        I&apos;m currently deep-diving into Golang and refining my 
                        automation workflows using Python. I&apos;m also iterating on 
                        this portfolio to improve its performance and accessibility.
                    </CardContent>
                </Card>

                {/* Focus: Learning */}
                <Card className="flex flex-col transition-all hover:border-primary/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <BookOpen className="h-5 w-5 text-primary" />
                            Learning & Growth
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground leading-relaxed">
                        Studying for exams and practical assessments for my college course. On the side, I&apos;m exploring 
                        Python to create automation scripts for my ethical hacking hobby.
                    </CardContent>
                </Card>

                {/* Focus: Personal/Lifestyle */}
                <Card className="flex flex-col transition-all hover:border-primary/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <Coffee className="h-5 w-5 text-primary" />
                            Life & Balance
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground leading-relaxed">
                        Making more time for touching grass on the weekends and 
                        working through my backlog of novels. Current read: Angels & Demons.
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}