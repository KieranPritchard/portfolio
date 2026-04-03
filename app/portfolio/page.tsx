import ContentContainer from "@/components/content/ContentContainer"
import FeaturedProjects from "@/components/content/portfolio/FeaturedProjects"
import ProjectsGrid from "@/components/content/portfolio/ProjectsGrid"
import { getAllProjects } from "@/lib/projects"

export default async function Page() {
    const projects = getAllProjects()

    return (
        <>
            <ContentContainer>
                <FeaturedProjects projects={projects} />
            </ContentContainer>
            <ContentContainer>
                <ProjectsGrid projects={projects} />
            </ContentContainer>
        </>
    )
}
