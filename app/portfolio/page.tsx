import ContentContainer from "@/components/pages/ContentContainer"
import FeaturedProjects from "@/components/pages/portfolio/FeaturedProjects"
import InteractiveLabs from "@/components/pages/portfolio/InteractiveLabs/InteractiveLabs"
import ProjectsGrid from "@/components/pages/portfolio/ProjectsGrid"
import { getAllProjects } from "@/lib/projects"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Portfolio',
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
