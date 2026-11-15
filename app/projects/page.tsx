import ProjectsGrid from "@/components/pages/portfolio/ProjectsGrid"
import { getAllProjects } from "@/lib/projects"
import { createPageMetadata } from "@/lib/page-metadata"

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Explore Kieran Pritchard's software projects, cybersecurity tools, automation, and interactive labs.",
  path: "/projects",
  section: "PROJECTS",
})

export default async function Page() {
  const projects = getAllProjects()

  return (
    <>
      <ProjectsGrid projects={projects} />
    </>
  )
}
