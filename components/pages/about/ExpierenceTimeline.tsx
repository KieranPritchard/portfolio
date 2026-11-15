import ExperienceTimelineClient from "@/components/pages/about/ExpierenceTimelineClient"
import { Experience } from "@/types/experience"
import { getAllExperience } from "@/lib/experience"

/**
 * Experience Component (Server Component)
 * 
 * Fetches experience data on the server side and forwards it to the 
 * ExperienceClient component for animated client-side rendering.
 * 
 * @param className - Optional CSS class name for the section container.
 */
export default async function ExperienceTimeline({ className }: Readonly<{ className?: string }>) {
    /**
     * Data set for earned experience fetched server-side from JSON file.
     */
    const experience: Experience[] = await getAllExperience()

    return <ExperienceTimelineClient experience={experience} className={className} />
}