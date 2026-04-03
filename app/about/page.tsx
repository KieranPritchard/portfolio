import AboutMe from "@/components/content/about/About";
import Certifications from "@/components/content/about/Certifications";
import ExperienceTimeline from "@/components/content/about/Expierence";
import MissionValues from "@/components/content/about/MissonValues";
import NowSection from "@/components/content/about/Now";
import PersonalInterests from "@/components/content/about/PersonalInterests";
import Skills from "@/components/content/about/Skills";
import ContentContainer from "@/components/content/ContentContainer";

export default function Page() {
  return (
    <>
      <ContentContainer>
        <AboutMe/>
      </ContentContainer>
      <ContentContainer>
        <MissionValues />
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
      <ContentContainer>
        <ExperienceTimeline />
      </ContentContainer>
    </>
  )
}
