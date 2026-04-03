"use client"

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

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    }

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
                
                {/* Section Header */}
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

                {/* Music & Collections Card */}
                <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
                    <Card className="h-full flex flex-col transition-colors hover:border-primary/50 hover:bg-muted/30">
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

                {/* Hobbies & Technical Interests Card */}
                <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
                    <Card className="h-full flex flex-col transition-colors hover:border-primary/50 hover:bg-muted/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl">
                                <Gamepad2 className="h-5 w-5 text-primary" />
                                Lifestyle & Hobbies
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
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

                            {/*Photography & Gaming */}
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

                            {/* Technical Hobbies */}
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