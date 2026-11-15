import AboutMe from "@/components/pages/about/About"
import Certifications from "@/components/pages/about/Certifications"
import ExperienceTimeline from "@/components/pages/about/Expierence"
import NowSection from "@/components/pages/about/Now"
import PersonalInterests from "@/components/pages/about/PersonalInterests"
import Skills from "@/components/pages/about/Skills"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Kieran Pritchard, a software development student focused on ethical hacking, secure software, cybersecurity, and IT support.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About",
    description:
      "Learn about Kieran Pritchard, a software development student focused on ethical hacking, secure software, cybersecurity, and IT support.",
    url: "/about",
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
