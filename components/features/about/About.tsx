import { AboutMetadata } from "@/types/aboutMetadata" 
import { getAllAboutMetadata } from "@/lib/metadata"
import AboutClient from "./client/AboutClient"

/**
 * About Component (Server Component)
 * 
 * Fetches about data on the server side and forwards it to the 
 * AboutClient component for animated client-side rendering.
 * 
 * @param className - Optional CSS class name for the section container.
 */
export default async function About({ className }: Readonly<{ className?: string }>) {
    /**
     * Data set for about information fetched server-side from JSON file.
     */
    const metadata: AboutMetadata[] = await getAllAboutMetadata()

    return <AboutClient metadata={metadata} className={className} />
}