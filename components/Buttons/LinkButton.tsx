"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LinkButtonProps {
    kind?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    text: string
    link: string
    className?: string
}

/**
 * BaseLinkButton: The raw functional component.
 * We use forwardRef here because motion() requires the ability to 
 * attach a ref to the underlying DOM element to coordinate animations.
 */
const BaseLinkButton = React.forwardRef<HTMLDivElement, LinkButtonProps>(
    ({ kind = "default", text, link, className }, ref) => {
        return (
            <div ref={ref} className={cn("inline-block", className)}>
                <Button variant={kind} asChild className="w-full">
                    <Link href={link}>
                        {text}
                    </Link>
                </Button>
            </div>
        )
    }
)

BaseLinkButton.displayName = "BaseLinkButton"

/**
 * LinkButton: The exported Motion-enhanced component.
 * By wrapping BaseLinkButton in motion(), it now natively inherits 
 * all Framer Motion types (variants, initial, whileHover, etc.),
 * killing the "not assignable" error in your parent file.
 */
export const LinkButton = motion(BaseLinkButton)