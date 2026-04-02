import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Music, Film, Camera, Tv } from "lucide-react"

/**
 * Personal Interests Component
 * Styled to match the Skills component using shadcn/ui Cards and Badges.
 */
export default function PersonalInterests({ className }: Readonly<{ className?: string }>) {
    const musicList = [
        "Bring Me The Horizon", "Bad Omens", "Bilmuri", "Marilyn Manson", "Sleep Token", "Linkin Park", "Evanescence", "Depeche Mode", 
        "Panic! at the Disco", "Fall Out Boy", "My Chemical Romance", 
        "Paramore", "Halsey", "Spiritbox", "Poppy", "NIN", "The Cure"
    ]

    const mediaList = ["Doctor Who", "Peaky Blinders", "Stranger Things", "Torchwood", "Dexter", "AHS", "Futurama", "Helluva Boss", "Pokémon"]

    return (
        <section className={cn("mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8", className)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Section Header */}
                <div className="space-y-2 col-span-1 md:col-span-2 mb-4">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Beyond the Code
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </div>

                {/* Music Card */}
                <Card className="flex flex-col transition-all hover:border-primary/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <Music className="h-5 w-5 text-primary" />
                            The Soundtrack
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Music keeps me focused. My rotation leans heavily into alternative, 
                            industrial, and emo-rock, providing the perfect backdrop for deep work sessions.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {musicList.map((artist) => (
                                <Badge key={artist} variant="secondary">{artist}</Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Media & Hobbies Card */}
                <Card className="flex flex-col transition-all hover:border-primary/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <Film className="h-5 w-5 text-primary" />
                            Film & Media
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-3">
                            <p className="text-sm text-muted-foreground">
                                Always up for a good sci-fi, horror, or mystery movie. When it comes to TV, 
                                I enjoy immersive world-building and character-driven animation.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {mediaList.map((show) => (
                                    <Badge key={show} variant="outline" className="border-primary/20">{show}</Badge>
                                ))}
                            </div>
                        </div>

                        {/* Photography Sub-section */}
                        <div className="pt-4 border-t border-border flex items-start gap-3">
                            <Camera className="h-5 w-5 text-primary mt-1 shrink-0" />
                            <div>
                                <h4 className="font-medium text-foreground">Scenery Photography</h4>
                                <p className="text-sm text-muted-foreground">
                                    Enjoying the outdoors and capturing natural landscapes in my free time.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}