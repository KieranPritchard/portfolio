import ContentContainer from "@/components/sections/ContentContainer"
import ProjectsGrid from "@/components/sections/portfolio/ProjectsGrid"
import { getAllProjects } from "@/lib/projects"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Page full of my projects and interactive labs.',
}

export default async function Page() {
    const projects = getAllProjects()

    return (
        <>
            <ContentContainer>
                <ProjectsGrid projects={projects} />
            </ContentContainer>
        </>
    )
}
