import { DownloadButton } from "@/components/Buttons/DownloadButton"
import { LinkButton } from "@/components/Buttons/LinkButton"
import { cn } from "@/lib/utils"

export default function AboutMe({ className }: Readonly<{ className?: string }>) {
    return (
        <section 
            id="about"
            className={cn(
                "mx-auto w-full max-w-7xl px-4 py-20 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
                className
            )}
        >   
            {/* Visual Container */}
            <div className="relative aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-2xl bg-muted shadow-xl">
                <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Kieran Pritchard Profile" 
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* Content Container */}
            <div className="flex flex-col gap-6">
                {/* Header container  */}
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        About Me
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </div>

                {/* Biographical information  */}
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                        Hello! I'm Kieran, a passionate developer based in the UK. I specialize in 
                        building robust web applications using Next.js, TypeScript, and Tailwind CSS.
                    </p>
                    <p>
                        With a keen eye for design and a love for clean code, I strive to create 
                        digital experiences that are not only visually stunning but also highly 
                        performant and accessible to all users.
                    </p>
                </div>

                {/* Call to Action and buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                    <LinkButton text="View My Work" link="/projects" />
                    <DownloadButton 
                        text="Download Resume" 
                        link="/resume.pdf" 
                        fileName="Kieran_Pritchard_CV.pdf" 
                        kind="outline" 
                    />
                </div>
            </div>
        </section>
    )
}