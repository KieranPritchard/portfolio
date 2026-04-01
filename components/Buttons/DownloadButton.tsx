import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react" // Optional icon for better UX

interface DownloadButtonProps {
    kind?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    text: string
    link: string
    fileName?: string // Optional: force a specific filename for the download
}

export function DownloadButton({ 
    kind = "default", 
    text, 
    link, 
    fileName 
}: Readonly<DownloadButtonProps>) {
    return (
        <Button variant={kind} asChild>
            {/* The 'download' attribute triggers the file save dialog */}
            <a href={link} download={fileName ?? true}>
                <Download />
                {text}
            </a>
        </Button>
    )
}