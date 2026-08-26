"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { ForwardedRef, ForwardRefExoticComponent } from "react"

// Stores the props the download button props
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
const BaseDownloadButton:ForwardRefExoticComponent<DownloadButtonProps> = React.forwardRef<HTMLDivElement, DownloadButtonProps>(
    ({ kind = "default", text, link, fileName, className }:DownloadButtonProps, ref:ForwardedRef<HTMLDivElement>):React.JSX.Element => {
        return (
            <div ref={ref} className={cn("inline-block", className)}>
                <Button size={"lg"} variant={kind} asChild className="gap-2 rounded-lg">
                    {/* The 'download' attribute triggers the file save dialog */}
                    <a href={link} download={fileName ?? true}>
                        {text}
                        <Download className="h-4 w-4" />
                    </a>
                </Button>
            </div>
        )
    }
)

// Sets the display name
BaseDownloadButton.displayName = "BaseDownloadButton"

/**
 * DownloadButton: The exported motion-enhanced component.
 * This natively accepts 'variants', 'initial', and 'animate' props,
 * resolving the "not assignable" error in your layout files.
 */
export const DownloadButton = motion(BaseDownloadButton)