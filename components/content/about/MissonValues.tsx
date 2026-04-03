import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Target, Fingerprint, Zap } from "lucide-react"

export default function MissionValues({ className }: Readonly<{ className?: string }>) {
    const values = [
        {
            title: "Performance First",
            description: "I believe the web should be fast by default. I prioritize clean, efficient code and optimized assets to ensure a seamless user experience.",
            icon: Zap,
        },
        {
            title: "Security Mindset",
            description: "With a background in ethical hacking, I don't just build features—I build secure systems that protect user data from the ground up.",
            icon: Fingerprint,
        },
        {
            title: "User-Centric Design",
            description: "Technology should solve human problems. I focus on creating intuitive interfaces that make complex tasks feel simple and accessible.",
            icon: Target,
        },
    ]

    return (
        <section className={cn("mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8", className)}>
            <div className="space-y-2 mb-8">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                    The Why
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map((value) => (
                    <Card key={value.title} className="flex flex-col transition-all hover:border-primary/50">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl">
                                <value.icon className="h-5 w-5 text-primary" />
                                {value.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {value.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}