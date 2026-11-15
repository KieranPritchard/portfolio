import AboutMe from "@/components/pages/about/About"
import Certifications from "@/components/pages/about/Certifications"
import ExperienceTimeline from "@/components/pages/about/Expierence"
import NowSection from "@/components/pages/about/Now"
import PersonalInterests from "@/components/pages/about/PersonalInterests"
import Skills from "@/components/pages/about/Skills"
import { createPageMetadata } from "@/lib/page-metadata"

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Kieran Pritchard, a software development student focused on ethical hacking, secure software, cybersecurity, and IT support.",
  path: "/about",
  section: "ABOUT",
})

export default function Page() {
  return (
    <>
      <AboutMe />
      <ExperienceTimeline />
      <Skills />
      <PersonalInterests />
      <Certifications />
      <NowSection />
    </>
  )
}
