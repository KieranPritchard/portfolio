import { getAllSkills } from "@/lib/skills"
import { Skill } from "@/types/skill"
import SkillsClient from "./SkillsClient"

/**
 * Skills Component (Server Component)
 * 
 * Fetches skills data on the server side and forwards it to the 
 * SkillsClient component for animated client-side rendering.
 * 
 * @param className - Optional CSS class name for the section container.
 */
export default async function Skills({ className }: Readonly<{ className?: string }>) {
    /**
     * Data set for earned skills fetched server-side from JSON file.
     */
    const skills: Skill[] = await getAllSkills()

    return <SkillsClient skills={skills} className={className} />
}