"use client"

import { Variants } from "framer-motion"
import { motion } from "framer-motion"
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
 * PersonalInterests component: Showcases non-professional hobbies and tastes.
 * Uses a two-column grid on desktop to balance media collections with technical lifestyle interests.
 */
export default function PersonalInterests({ className }: Readonly<{ className?: string }>) {
    // Array of musical artists used to populate the focus-fuel badges
    const musicList = [
        "Bring Me The Horizon", "Bad Omens", "Bilmuri", "Marilyn Manson", "Sleep Token", 
        "Linkin Park", "Evanescence", "Depeche Mode", "Panic! at the Disco", 
        "Fall Out Boy", "My Chemical Romance", "Paramore", "Halsey", 
        "Spiritbox", "Poppy", "NIN", "The Cure"
    ]

    // Array of TV shows and media franchises for the media collection badges
    const mediaList = [
        "Doctor Who", "Peaky Blinders", "Stranger Things", "Torchwood", 
        "Dexter", "AHS", "Futurama", "Helluva Boss", "Pokémon"
    ]

    // Animation variants: Manages the staggered entrance of the section and individual cards
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    // Standard slide-up animation for card containers and headers
    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    }

    // "Pop" effect for individual skill and artist badges
    const badgeVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    }

    return (
        <section className={cn("mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 overflow-hidden", className)}>
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                
                {/* Section Header: Title and animated primary underline reveal */}
                <motion.div className="space-y-2 col-span-1 md:col-span-2 mb-4" variants={itemVariants}>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Beyond the Code
                    </h2>
                    <motion.div 
                        className="h-1 bg-primary rounded-full" 
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    />
                </motion.div>

                {/* Music & Collections Card: Highlights audio preferences and physical media habits */}
                <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
                    <Card className="h-full">
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
                                {/* Staggered badge list for music artists */}
                                <motion.div className="flex flex-wrap gap-2" variants={containerVariants}>
                                    {musicList.map((artist) => (
                                        <motion.div key={artist} variants={badgeVariants}>
                                            <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                                                {artist}
                                            </Badge>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Physical Media sub-section with horizontal hover shift */}
                            <motion.div 
                                className="pt-4 border-t border-border flex items-start gap-3"
                                whileHover={{ x: 5 }}
                            >
                                <Disc className="h-5 w-5 text-primary mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-medium text-foreground">Physical Media</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Collector of <strong>Vinyl</strong> and <strong>Blu-Ray</strong>, 
                                        valuing high-fidelity audio and tangible media ownership.
                                    </p>
                                </div>
                            </motion.div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Hobbies & Technical Interests Card: Details TV media and active lifestyle pursuits */}
                <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl">
                                <Gamepad2 className="h-5 w-5 text-primary" />
                                Lifestyle & Hobbies
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Media List: Categorized list of favorite television shows */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                                    <Film className="h-4 w-4 text-primary" />
                                    Film & TV
                                </div>
                                <motion.div className="flex flex-wrap gap-2" variants={containerVariants}>
                                    {mediaList.map((show) => (
                                        <motion.div key={show} variants={badgeVariants}>
                                            <Badge variant="outline" className="border-primary/20 hover:border-primary transition-colors cursor-default">
                                                {show}
                                            </Badge>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Photography & Gaming: 2x2 grid for creative and competitive hobbies */}
                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                                <motion.div className="space-y-1" whileHover={{ scale: 1.05 }}>
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <Camera className="h-4 w-4 text-primary" />
                                        Photography
                                    </div>
                                    <p className="text-xs text-muted-foreground">Capturing scenery and landscapes.</p>
                                </motion.div>
                                <motion.div className="space-y-1" whileHover={{ scale: 1.05 }}>
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <Gamepad2 className="h-4 w-4 text-primary" />
                                        Gaming
                                    </div>
                                    <p className="text-xs text-muted-foreground">Always up for a challenge.</p>
                                </motion.div>
                            </div>

                            {/* Technical Hobbies: Highlights continued learning through side projects and security practice */}
                            <div className="pt-4 border-t border-border grid grid-cols-2 gap-4">
                                <motion.div className="space-y-1" whileHover={{ scale: 1.05 }}>
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <Code2 className="h-4 w-4 text-primary" />
                                        Coding
                                    </div>
                                    <p className="text-xs text-muted-foreground">Building side projects for fun.</p>
                                </motion.div>
                                <motion.div className="space-y-1" whileHover={{ scale: 1.05 }}>
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <ShieldAlert className="h-4 w-4 text-primary" />
                                        Cybersecurity
                                    </div>
                                    <p className="text-xs text-muted-foreground">Practicing Ethical Hacking.</p>
                                </motion.div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </motion.div>
        </section>
    )
}