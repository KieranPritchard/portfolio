import AboutMe from "@/components/pages/about/About";
import Certifications from "@/components/pages/about/Certifications";
import ExperienceTimeline from "@/components/pages/about/Expierence";
import NowSection from "@/components/pages/about/Now";
import PersonalInterests from "@/components/pages/about/PersonalInterests";
import Skills from "@/components/pages/about/Skills";
import ContentContainer from "@/components/pages/ContentContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About',
    description: 'Page detailing who I am',
}


export default function Page() {
  return (
    <>
      <ContentContainer>
        <AboutMe/>
      </ContentContainer>
      <ContentContainer>
        <ExperienceTimeline />
      </ContentContainer>
      <ContentContainer>
        <Skills />
      </ContentContainer>
      <ContentContainer>
        <PersonalInterests />
      </ContentContainer>
      <ContentContainer>
        <Certifications />
      </ContentContainer>
      <ContentContainer>
        <NowSection />
      </ContentContainer>
    </>
  )
}
