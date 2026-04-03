"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { cn } from "@/lib/utils"

interface DownloadButtonProps {
    kind?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    text: string
    link: string
    fileName?: string
    className?: string
}

/**
 * BaseDownloadButton: Wrapped in forwardRef to allow Framer Motion 
 * to attach its animation engine to the underlying DOM node.
 */
const BaseDownloadButton = React.forwardRef<HTMLDivElement, DownloadButtonProps>(
    ({ kind = "default", text, link, fileName, className }, ref) => {
        return (
            <div ref={ref} className={cn("inline-block", className)}>
                <Button variant={kind} asChild className="gap-2">
                    {/* The 'download' attribute triggers the file save dialog */}
                    <a href={link} download={fileName ?? true}>
                        <Download className="h-4 w-4" />
                        {text}
                    </a>
                </Button>
            </div>
        )
    }
)

BaseDownloadButton.displayName = "BaseDownloadButton"

/**
 * DownloadButton: The exported motion-enhanced component.
 * This natively accepts 'variants', 'initial', and 'animate' props,
 * resolving the "not assignable" error in your layout files.
 */
export const DownloadButton = motion(BaseDownloadButton)