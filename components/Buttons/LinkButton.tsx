"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { ForwardedRef, ForwardRefExoticComponent } from "react"

// Define the shape of our props for type safety
interface LinkButtonProps {
    kind?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    text: string
    link: string
    className?: string
}

/**
 * BaseLinkButton: The functional component logic.
 * We use forwardRef to expose the underlying DOM element, 
 * which is a requirement for motion() to attach animation listeners.
 */
const BaseLinkButton:ForwardRefExoticComponent<LinkButtonProps> = React.forwardRef<HTMLDivElement, LinkButtonProps>(
    ({ kind = "default", text, link, className }:LinkButtonProps, ref:ForwardedRef<HTMLDivElement>):React.JSX.Element => {
        return (
            <div ref={ref} className={cn("inline-block", className)}>
                {/* asChild forces the Button to pass its styles and behavior to the child (Link). */}
                <Button size={"lg"} variant={kind} asChild className="w-full rounded-md">
                    <Link href={link}>
                        {text}
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        )
    }
)

// Set a display name for easier debugging in React DevTools
BaseLinkButton.displayName = "BaseLinkButton"

/**
 * LinkButton: The exported Motion-enhanced component.
 * By wrapping the BaseLinkButton in motion(), it inherits Framer Motion 
 * properties (initial, animate, whileHover, etc.) automatically.
 */
export const LinkButton = motion(BaseLinkButton)