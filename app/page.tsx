import Intro from "@/components/pages/home/Intro"
import TechStack from "@/components/pages/home/TechStack"
import ThingsIBuilt from "@/components/pages/home/ThingsIBuilt"
import WhatIDo from "@/components/pages/home/WhatIDo"
import { getAllProjects } from "@/lib/projects"
import type { Metadata } from "next"

const description =
  "Kieran Pritchard is a software development student and ethical hacker building secure web apps, cybersecurity tools, and automation."

export const metadata: Metadata = {
  title: {
    absolute: "Kieran Pritchard | Software Developer & Ethical Hacker",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kieran Pritchard | Software Developer & Ethical Hacker",
    description,
    url: "/",
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
