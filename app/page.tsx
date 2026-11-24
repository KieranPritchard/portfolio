import Intro from "@/components/features/home/Intro"
import TechStack from "@/components/features/home/TechStack"
import ThingsIBuilt from "@/components/features/home/ThingsIBuilt"
import WhatIDo from "@/components/features/home/WhatIDo"
import { getAllProjects } from "@/lib/projects"
import { createPageMetadata } from "@/lib/page-metadata"

export const metadata = {
  ...createPageMetadata({
    title: "Kieran Pritchard | Software Developer & Ethical Hacker",
    description:
      "Kieran Pritchard is a software development student and ethical hacker building secure web apps, cybersecurity tools, and automation.",
    path: "/",
    section: "PORTFOLIO",
  }),
  title: {
    absolute: "Kieran Pritchard | Software Developer & Ethical Hacker",
  },
}

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
      <Intro projects={projects} />

      {/* Disciplines Section: Highlighting core areas of expertise */}
      <WhatIDo />

      {/* Featured Projects Section: Showcasing selected work */}
      <ThingsIBuilt projects={projects} />

      {/* Tech Stack Section: Infinite marquee of tools and technologies */}
      <TechStack />
    </>
  )
}
