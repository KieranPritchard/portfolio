import ContentContainer from "@/components/pages/ContentContainer"
import ProjectsGrid from "@/components/pages/portfolio/ProjectsGrid"
import { getAllProjects } from "@/lib/projects"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Kieran Pritchard's software projects, cybersecurity tools, automation, and interactive labs.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects",
    description:
      "Explore Kieran Pritchard's software projects, cybersecurity tools, automation, and interactive labs.",
    url: "/projects",
    siteName: "Kieran Pritchard",
    images: [
      {
        url: "/kieran-pritchard.jpg",
        width: 1200,
        height: 630,
        alt: "Kieran Pritchard",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
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
