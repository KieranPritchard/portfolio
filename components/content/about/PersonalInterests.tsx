import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { 
    Music, 
    Film, 
    Camera, 
    Gamepad2, 
    Code2, 
    ShieldAlert, 
    Disc 
} from "lucide-react"

/**
 * Personal Interests Component
 * Expanded to include detailed hobby categories from CV.
 */
export default function PersonalInterests({ className }: Readonly<{ className?: string }>) {
    const musicList = [
        "Bring Me The Horizon", "Bad Omens", "Bilmuri", "Marilyn Manson", "Sleep Token", 
        "Linkin Park", "Evanescence", "Depeche Mode", "Panic! at the Disco", 
        "Fall Out Boy", "My Chemical Romance", "Paramore", "Halsey", 
        "Spiritbox", "Poppy", "NIN", "The Cure"
    ]

    const mediaList = [
        "Doctor Who", "Peaky Blinders", "Stranger Things", "Torchwood", 
        "Dexter", "AHS", "Futurama", "Helluva Boss", "Pokémon"
    ]

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

                {/* Music & Collections Card */}
                <Card className="flex flex-col transition-all hover:border-primary/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <Music className="h-5 w-5 text-primary" />
                            The Soundtrack
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-4">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Music is my primary fuel for focus. My rotation leans heavily into alternative, 
                                industrial, and emo-rock.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {musicList.map((artist) => (
                                    <Badge key={artist} variant="secondary">{artist}</Badge>
                                ))}
                            </div>
                        </div>

                        {/* Physical Collections Sub-section */}
                        <div className="pt-4 border-t border-border flex items-start gap-3">
                            <Disc className="h-5 w-5 text-primary mt-1 shrink-0" />
                            <div>
                                <h4 className="font-medium text-foreground">Physical Media</h4>
                                <p className="text-sm text-muted-foreground">
                                    Collector of <strong>Vinyl</strong> and <strong>Blu-Ray</strong>, 
                                    valuing high-fidelity audio and tangible media ownership.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Hobbies & Technical Interests Card */}
                <Card className="flex flex-col transition-all hover:border-primary/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <Gamepad2 className="h-5 w-5 text-primary" />
                            Lifestyle & Hobbies
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Media Section */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                                <Film className="h-4 w-4 text-primary" />
                                Film & TV
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {mediaList.map((show) => (
                                    <Badge key={show} variant="outline" className="border-primary/20">{show}</Badge>
                                ))}
                            </div>
                        </div>

                        {/* Photography & Gaming */}
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-sm font-medium">
                                    <Camera className="h-4 w-4 text-primary" />
                                    Photography
                                </div>
                                <p className="text-xs text-muted-foreground">Capturing scenery and landscapes.</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-sm font-medium">
                                    <Gamepad2 className="h-4 w-4 text-primary" />
                                    Gaming
                                </div>
                                <p className="text-xs text-muted-foreground">Always up for a challenge.</p>
                            </div>
                        </div>

                        {/* Technical Hobbies */}
                        <div className="pt-4 border-t border-border grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-sm font-medium">
                                    <Code2 className="h-4 w-4 text-primary" />
                                    Coding
                                </div>
                                <p className="text-xs text-muted-foreground">Building side projects for fun.</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-sm font-medium">
                                    <ShieldAlert className="h-4 w-4 text-primary" />
                                    Cybersecurity
                                </div>
                                <p className="text-xs text-muted-foreground">Practicing Ethical Hacking.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}