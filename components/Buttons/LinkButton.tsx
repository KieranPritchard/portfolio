import { Button } from "@/components/ui/button"
import Link from "next/link"

// Holds the types for each of the props
interface LinkButtonProps {
    kind?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    text: string
    link: string
}

// Creates a button where a link can be be used
export function LinkButton({ kind = "default", text, link }: Readonly<LinkButtonProps>) {
    // Returns a button with each of the props
    return (
        <Button variant={kind} asChild>
            <Link href={link}>
                {text}
            </Link>
        </Button>
    )
}
