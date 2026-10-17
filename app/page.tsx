import ContentContainer from "@/components/pages/ContentContainer"
import Intro from "@/components/pages/HomePage/Intro"
import TechStack from "@/components/pages/HomePage/TechStack"
import ThingsIBuilt from "@/components/pages/HomePage/ThingsIBuilt"
import WhatIDo from "@/components/pages/HomePage/WhatIDo"
import { getAllProjects } from "@/lib/projects"

/**
 * HomePage Component
 *
 * The main landing page of the portfolio.
 * Orchestrates multiple pages including the Intro/Hero, Disciplines (What I Do),
 * Featured Projects (Things I Built), and the Tech Stack marquee.
 */
export default function Page() {
  /**
   * Fetch all portfolio projects for use in the Intro and ThingsIBuilt pages.
   */
  const projects = getAllProjects()

  return (
    <>
      {/* Intro Section: Hero area with primary call-to-action */}
      <ContentContainer>
        <Intro projects={projects} />
      </ContentContainer>

      {/* Disciplines Section: Highlighting core areas of expertise */}
      <ContentContainer>
        <WhatIDo />
      </ContentContainer>

      {/* Featured Projects Section: Showcasing selected work */}
      <ContentContainer>
        <ThingsIBuilt projects={projects} />
      </ContentContainer>

      {/* Tech Stack Section: Infinite marquee of tools and technologies */}
      <ContentContainer>
        <TechStack />
      </ContentContainer>
    </>
  )
}
