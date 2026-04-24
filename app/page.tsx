import ContentContainer from "@/components/pages/ContentContainer";
import Intro from "@/components/pages/HomePage/Intro";
import TechStack from "@/components/pages/HomePage/TechStack";
import ThingsIBuilt from "@/components/pages/HomePage/ThingsIBuilt";
import WhatIDo from "@/components/pages/HomePage/WhatIDo";
import FeaturedProjectsList from "@/components/pages/portfolio/FeaturedProjects";
import { getAllProjects } from "@/lib/projects";

export default function Page() {
  // Fetches the projects
  const projects = getAllProjects()

  // Returns the content
  return (
    <>
      <ContentContainer>
        <Intro projects={projects}/>
      </ContentContainer>
      <ContentContainer>
        <WhatIDo />
      </ContentContainer>
      <ContentContainer>
        <ThingsIBuilt projects={projects} />
      </ContentContainer>
      <ContentContainer>
        <TechStack />
      </ContentContainer>
    </>
  )
}
