import { DownloadButton } from "@/components/Buttons/DownloadButton"
import { LinkButton } from "@/components/Buttons/LinkButton"
import { cn } from "@/lib/utils"

// Intro component
export default function Intro({className,}: Readonly<{ className?: string}>) {
    return (
        /* Section container */
        <section 
            className={cn(
                "mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
                className
            )}
        >   
            {/* Text container */}
            <div className="flex flex-col gap-4">
                {/* Heading */}
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
                        Kieran Pritchard
                    </h1>
                    {/* Primary color accent line for visual branding */}
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </div>
                {/* text */}
                <p className="text-lg text-muted-foreground leading-relaxed">
                    I am a developer focused on building functional, beautiful interfaces. 
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi odit, 
                    maiores quo harum, sapiente excepturi nam sequi numquam doloremque.
                </p>
                {/* Buttons */}
                <div className="flex flex-row w-full gap-2">
                    <LinkButton text="Learn More" link="" />
                    <DownloadButton text="Download C.V" link="" fileName="" kind="secondary" />
                </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
                {/* IMage of me */}
                <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Kieran Pritchard" 
                    className="rounded-full h-full w-full object-cover"
                />
            </div>
        </section>
    )
}