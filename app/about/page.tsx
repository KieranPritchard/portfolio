import AboutMe from "@/components/features/about/About"
import { AwardsSection } from "@/components/features/about/Awards"
import Certifications from "@/components/features/about/Certifications"
import ExperienceTimeline from "@/components/features/about/ExperienceTimeline"
import NowSection from "@/components/features/about/Now"
import PersonalInterests from "@/components/features/about/PersonalInterests"
import Skills from "@/components/features/about/Skills"
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
      <AwardsSection />
      <NowSection />
    </>
  )
}
