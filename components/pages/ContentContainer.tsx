import { cn } from "@/lib/utils"

export default function ContentContainer({children, className,}: Readonly<{children: React.ReactNode, className?: string}>) {
    return (
        /* Creates the container to store the content displayed on the page */
        <div 
            className={cn(
                "mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8",
                className
            )}
        >
            {/* makes the component be able to group content together */}
            {children}
        </div>
    )
}